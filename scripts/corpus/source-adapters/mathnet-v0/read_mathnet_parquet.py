#!/usr/bin/env python3
from __future__ import annotations
import base64, hashlib, json, math, os, struct, sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any
# Minimal Compact-Thrift protocol reader (stdlib only).
class TType:
    STOP=0; VOID=1; BOOL=2; BYTE=3; DOUBLE=4; I16=6; I32=8; I64=10; STRING=11; STRUCT=12; MAP=13; SET=14; LIST=15

_CSTOP=0; _CTRUE=1; _CFALSE=2; _CBYTE=3; _CI16=4; _CI32=5; _CI64=6; _CDOUBLE=7; _CBINARY=8; _CLIST=9; _CSET=10; _CMAP=11; _CSTRUCT=12
_C2T={_CSTOP:TType.STOP,_CTRUE:TType.BOOL,_CFALSE:TType.BOOL,_CBYTE:TType.BYTE,_CI16:TType.I16,_CI32:TType.I32,_CI64:TType.I64,_CDOUBLE:TType.DOUBLE,_CBINARY:TType.STRING,_CLIST:TType.LIST,_CSET:TType.SET,_CMAP:TType.MAP,_CSTRUCT:TType.STRUCT}

def _zigzag(n): return (n >> 1) ^ -(n & 1)

class CompactReader:
    def __init__(self,data:bytes):
        self.data=data; self.pos=0; self.field_stack=[]; self.last_field=0; self.pending_bool=None
    def _byte(self):
        if self.pos>=len(self.data): raise EOFError('compact eof')
        b=self.data[self.pos];self.pos+=1;return b
    def _take(self,n):
        if self.pos+n>len(self.data): raise EOFError('compact overrun')
        b=self.data[self.pos:self.pos+n];self.pos+=n;return b
    def _uvarint(self):
        x=0;s=0
        while True:
            b=self._byte();x|=(b&127)<<s
            if not b&128:return x
            s+=7
            if s>64:raise ValueError('compact varint too long')
    def readStructBegin(self):
        self.field_stack.append(self.last_field);self.last_field=0;return None
    def readStructEnd(self):
        self.last_field=self.field_stack.pop();return None
    def readFieldBegin(self):
        b=self._byte()
        if b==0:return (None,TType.STOP,0)
        delta=b>>4;ct=b&15
        if delta:fid=self.last_field+delta
        else:fid=_zigzag(self._uvarint())
        self.last_field=fid
        if ct==_CTRUE:self.pending_bool=True
        elif ct==_CFALSE:self.pending_bool=False
        return (None,_C2T[ct],fid)
    def readFieldEnd(self):return None
    def readBool(self):
        if self.pending_bool is not None:
            v=self.pending_bool;self.pending_bool=None;return v
        b=self._byte()
        if b==_CTRUE:return True
        if b==_CFALSE:return False
        raise ValueError('invalid compact bool')
    def readByte(self):
        b=self._byte();return b-256 if b>=128 else b
    def readI16(self):return _zigzag(self._uvarint())
    def readI32(self):return _zigzag(self._uvarint())
    def readI64(self):return _zigzag(self._uvarint())
    def readDouble(self):return struct.unpack('<d',self._take(8))[0]
    def readBinary(self):return self._take(self._uvarint())
    def readListBegin(self):
        b=self._byte();n=b>>4;ct=b&15
        if n==15:n=self._uvarint()
        return (_C2T[ct],n)
    def readListEnd(self):return None
    def readSetBegin(self):return self.readListBegin()
    def readSetEnd(self):return None
    def readMapBegin(self):
        n=self._uvarint()
        if n==0:return (TType.STOP,TType.STOP,0)
        b=self._byte();return (_C2T[b>>4],_C2T[b&15],n)
    def readMapEnd(self):return None

class _MemTransport:
    def __init__(self,reader):self.reader=reader
    @property
    def _buffer(self):return self
    def tell(self):return self.reader.pos

def _proto(raw):
    r=CompactReader(raw);r._transport=_MemTransport(r);return r


# Minimal deterministic Parquet reader for the exact pinned MathNet-v0 schema.
# Supports BYTE_ARRAY leaves, DataPageV1, PLAIN / RLE_DICTIONARY,
# UNCOMPRESSED / SNAPPY, and one repeated list level.

REQUIRED=0; OPTIONAL=1; REPEATED=2
BYTE_ARRAY=6
UNCOMPRESSED=0; SNAPPY=1
PLAIN=0; RLE_DICTIONARY=8; PLAIN_DICTIONARY=2
DATA_PAGE=0; DICTIONARY_PAGE=2


def _skip(p,t):
    if t==TType.STOP:return
    if t==TType.BOOL:p.readBool()
    elif t==TType.BYTE:p.readByte()
    elif t==TType.I16:p.readI16()
    elif t==TType.I32:p.readI32()
    elif t==TType.I64:p.readI64()
    elif t==TType.DOUBLE:p.readDouble()
    elif t==TType.STRING:p.readBinary()
    elif t==TType.STRUCT:
        p.readStructBegin()
        while True:
            _,ft,_=p.readFieldBegin()
            if ft==TType.STOP:break
            _skip(p,ft);p.readFieldEnd()
        p.readStructEnd()
    elif t==TType.LIST:
        et,n=p.readListBegin()
        for _ in range(n):_skip(p,et)
        p.readListEnd()
    elif t==TType.SET:
        et,n=p.readSetBegin()
        for _ in range(n):_skip(p,et)
        p.readSetEnd()
    elif t==TType.MAP:
        kt,vt,n=p.readMapBegin()
        for _ in range(n):_skip(p,kt);_skip(p,vt)
        p.readMapEnd()
    else: raise ValueError(f'unsupported thrift type {t}')

def _s(p):
    b=p.readBinary(); return b.decode('utf-8','strict')

def _schema_el(p):
    d={};p.readStructBegin()
    while True:
        _,t,f=p.readFieldBegin()
        if t==TType.STOP:break
        if f==1:d['type']=p.readI32()
        elif f==3:d['rep']=p.readI32()
        elif f==4:d['name']=_s(p)
        elif f==5:d['children']=p.readI32()
        else:_skip(p,t)
        p.readFieldEnd()
    p.readStructEnd();return d

def _colmeta(p):
    d={};p.readStructBegin()
    while True:
        _,t,f=p.readFieldBegin()
        if t==TType.STOP:break
        if f==1:d['type']=p.readI32()
        elif f==2:
            et,n=p.readListBegin();d['enc']=[p.readI32() for _ in range(n)];p.readListEnd()
        elif f==3:
            et,n=p.readListBegin();d['path']=[_s(p) for _ in range(n)];p.readListEnd()
        elif f==4:d['codec']=p.readI32()
        elif f==5:d['n']=p.readI64()
        elif f==6:d['usz']=p.readI64()
        elif f==7:d['csz']=p.readI64()
        elif f==9:d['data']=p.readI64()
        elif f==11:d['dict']=p.readI64()
        else:_skip(p,t)
        p.readFieldEnd()
    p.readStructEnd();return d

def _chunk(p):
    d={};p.readStructBegin()
    while True:
        _,t,f=p.readFieldBegin()
        if t==TType.STOP:break
        if f==2:d['off']=p.readI64()
        elif f==3:d['meta']=_colmeta(p)
        else:_skip(p,t)
        p.readFieldEnd()
    p.readStructEnd();return d

def _rg(p):
    d={};p.readStructBegin()
    while True:
        _,t,f=p.readFieldBegin()
        if t==TType.STOP:break
        if f==1:
            et,n=p.readListBegin();d['cols']=[_chunk(p) for _ in range(n)];p.readListEnd()
        elif f==3:d['rows']=p.readI64()
        else:_skip(p,t)
        p.readFieldEnd()
    p.readStructEnd();return d

def _filemeta(raw):
    p=_proto(raw);d={};p.readStructBegin()
    while True:
        _,t,f=p.readFieldBegin()
        if t==TType.STOP:break
        if f==2:
            et,n=p.readListBegin();d['schema']=[_schema_el(p) for _ in range(n)];p.readListEnd()
        elif f==3:d['rows']=p.readI64()
        elif f==4:
            et,n=p.readListBegin();d['rgs']=[_rg(p) for _ in range(n)];p.readListEnd()
        else:_skip(p,t)
        p.readFieldEnd()
    p.readStructEnd();return d

def _dict_header(p):
    d={};p.readStructBegin()
    while True:
        _,t,f=p.readFieldBegin()
        if t==TType.STOP:break
        if f==1:d['n']=p.readI32()
        elif f==2:d['enc']=p.readI32()
        elif f==3:d['sorted']=p.readBool()
        else:_skip(p,t)
        p.readFieldEnd()
    p.readStructEnd();return d

def _data_header(p):
    d={};p.readStructBegin()
    while True:
        _,t,f=p.readFieldBegin()
        if t==TType.STOP:break
        if f==1:d['n']=p.readI32()
        elif f==2:d['enc']=p.readI32()
        elif f==3:d['defenc']=p.readI32()
        elif f==4:d['repenc']=p.readI32()
        else:_skip(p,t)
        p.readFieldEnd()
    p.readStructEnd();return d

def _page_header(raw):
    p=_proto(raw);d={};p.readStructBegin()
    while True:
        _,t,f=p.readFieldBegin()
        if t==TType.STOP:break
        if f==1:d['type']=p.readI32()
        elif f==2:d['usz']=p.readI32()
        elif f==3:d['csz']=p.readI32()
        elif f==5:d['data']=_data_header(p)
        elif f==7:d['dict']=_dict_header(p)
        else:_skip(p,t)
        p.readFieldEnd()
    p.readStructEnd();d['_len']=p.pos;return d

def snappy_decompress(src:bytes)->bytes:
    expected,i=_uvarint(src,0)
    out=bytearray()
    while i<len(src):
        tag=src[i];i+=1;typ=tag&3
        if typ==0:
            n=tag>>2
            if n<60:length=n+1
            else:
                extra=n-59
                if i+extra>len(src):raise ValueError('snappy literal length overrun')
                length=int.from_bytes(src[i:i+extra],'little')+1;i+=extra
            out.extend(src[i:i+length]);i+=length
        elif typ==1:
            length=4+((tag>>2)&7)
            off=((tag&0xE0)<<3)|src[i];i+=1
            if off<=0 or off>len(out):raise ValueError('snappy bad offset1')
            for _ in range(length):out.append(out[-off])
        elif typ==2:
            length=1+(tag>>2);off=int.from_bytes(src[i:i+2],'little');i+=2
            if off<=0 or off>len(out):raise ValueError('snappy bad offset2')
            for _ in range(length):out.append(out[-off])
        else:
            length=1+(tag>>2);off=int.from_bytes(src[i:i+4],'little');i+=4
            if off<=0 or off>len(out):raise ValueError('snappy bad offset4')
            for _ in range(length):out.append(out[-off])
    if len(out)!=expected:
        raise ValueError(f'snappy output {len(out)} != preamble {expected}')
    return bytes(out)

def _uvarint(data:bytes,i:int):
    x=0;s=0
    while True:
        if i>=len(data):raise ValueError('varint overrun')
        b=data[i];i+=1;x|=(b&127)<<s
        if not (b&128):return x,i
        s+=7
        if s>63:raise ValueError('varint too long')

def decode_hybrid(data:bytes, bit_width:int, count:int|None=None):
    if bit_width==0:
        return [0]*(count or 0)
    out=[];i=0;byte_width=(bit_width+7)//8
    while i<len(data) and (count is None or len(out)<count):
        hdr,i=_uvarint(data,i)
        if hdr&1==0:
            n=hdr>>1
            if i+byte_width>len(data):raise ValueError('rle overrun')
            v=int.from_bytes(data[i:i+byte_width],'little');i+=byte_width
            if count is not None:n=min(n,count-len(out))
            out.extend([v]*n)
        else:
            groups=hdr>>1;n=groups*8;nb=groups*bit_width
            if i+nb>len(data):raise ValueError('bitpack overrun')
            chunk=data[i:i+nb];i+=nb
            vals=[];bitpos=0
            for _ in range(n):
                v=0
                for b in range(bit_width):
                    p=bitpos+b
                    if chunk[p>>3] & (1<<(p&7)):v|=1<<b
                vals.append(v);bitpos+=bit_width
            if count is not None:vals=vals[:max(0,count-len(out))]
            out.extend(vals)
    if count is not None and len(out)!=count:
        raise ValueError(f'hybrid decoded {len(out)} != {count}')
    return out

def decode_levels(payload:bytes,pos:int,max_level:int,n:int):
    if max_level==0:return [0]*n,pos
    if pos+4>len(payload):raise ValueError('level length overrun')
    L=struct.unpack_from('<I',payload,pos)[0];pos+=4
    sec=payload[pos:pos+L];pos+=L
    bw=max_level.bit_length()
    vals=decode_hybrid(sec,bw,n)
    return vals,pos

def decode_plain_byte_arrays(data:bytes,count:int):
    vals=[];pos=0
    for _ in range(count):
        if pos+4>len(data):raise ValueError('plain length overrun')
        n=struct.unpack_from('<I',data,pos)[0];pos+=4
        if pos+n>len(data):raise ValueError('plain value overrun')
        vals.append(data[pos:pos+n]);pos+=n
    return vals,pos

@dataclass
class LeafSpec:
    max_def:int;max_rep:int;element_def:int

LEAF_SPECS={
    'id':LeafSpec(1,0,1),'problem_markdown':LeafSpec(1,0,1),
    'solutions_markdown.list.element':LeafSpec(3,1,2),
    'images.list.element.bytes':LeafSpec(4,1,3),'images.list.element.path':LeafSpec(4,1,3),
    'country':LeafSpec(1,0,1),'competition':LeafSpec(1,0,1),
    'topics_flat.list.element':LeafSpec(3,1,2),'language':LeafSpec(1,0,1),
    'problem_type':LeafSpec(1,0,1),'final_answer':LeafSpec(1,0,1),
}

def _decompress(codec:int,b:bytes,expected:int):
    if codec==UNCOMPRESSED:out=b
    elif codec==SNAPPY:out=snappy_decompress(b)
    else:raise ValueError(f'unsupported codec {codec}')
    if len(out)!=expected:raise ValueError(f'decompress {len(out)} != {expected}')
    return out

def read_leaf(path:Path,meta:dict,rows:int):
    name='.'.join(meta['path']);spec=LEAF_SPECS[name]
    start=meta.get('dict') if meta.get('dict') is not None else meta['data']
    end=start+meta['csz']
    dictionary=None;events=[];off=start
    with path.open('rb') as f:
        while off<end:
            f.seek(off); headraw=f.read(min(4096,end-off))
            h=_page_header(headraw);payoff=off+h['_len']
            f.seek(payoff);comp=f.read(h['csz'])
            payload=_decompress(meta['codec'],comp,h['usz'])
            off=payoff+h['csz']
            if h['type']==DICTIONARY_PAGE:
                if h['dict']['enc']!=PLAIN:raise ValueError('dictionary not plain')
                dictionary,_=decode_plain_byte_arrays(payload,h['dict']['n'])
                continue
            if h['type']!=DATA_PAGE:raise ValueError(f'unsupported page type {h["type"]}')
            dh=h['data'];n=dh['n'];pos=0
            reps,pos=decode_levels(payload,pos,spec.max_rep,n)
            defs,pos=decode_levels(payload,pos,spec.max_def,n)
            present=sum(1 for d in defs if d==spec.max_def)
            if dh['enc']==PLAIN:
                vals,used=decode_plain_byte_arrays(payload[pos:],present)
            elif dh['enc'] in (RLE_DICTIONARY,PLAIN_DICTIONARY):
                if dictionary is None:raise ValueError('dictionary encoding without dictionary')
                if present:
                    bw=payload[pos];idxs=decode_hybrid(payload[pos+1:],bw,present)
                    vals=[dictionary[i] for i in idxs]
                else: vals=[]
            else:raise ValueError(f'unsupported value encoding {dh["enc"]}')
            vi=0
            for r,d in zip(reps,defs):
                v=None
                if d==spec.max_def:
                    v=vals[vi];vi+=1
                events.append((r,d,v))
            if vi!=present:raise ValueError('present mismatch')
    if spec.max_rep==0:
        if len(events)!=rows:raise ValueError(f'{name}: events {len(events)} != rows {rows}')
        return [v if d==spec.max_def else None for _,d,v in events]
    out=[];cur=None
    for r,d,v in events:
        if r==0:
            if cur is not None:out.append(cur)
            cur=[]
        if cur is None:raise ValueError('repeated leaf starts without row')
        if d>=spec.element_def:
            cur.append(v if d==spec.max_def else None)
    if cur is not None:out.append(cur)
    if len(out)!=rows:raise ValueError(f'{name}: repeated rows {len(out)} != {rows}')
    return out

def read_parquet(path:Path):
    with path.open('rb') as f:
        f.seek(0,2);size=f.tell();f.seek(size-8);tail=f.read(8)
        if tail[4:]!=b'PAR1':raise ValueError('bad parquet magic')
        L=struct.unpack('<I',tail[:4])[0];f.seek(size-8-L);md=_filemeta(f.read(L))
    if len(md['rgs'])!=1:raise ValueError('expected exactly one row group')
    rg=md['rgs'][0];rows=rg['rows'];cols={}
    for c in rg['cols']:
        m=c['meta'];name='.'.join(m['path'])
        cols[name]=read_leaf(path,m,rows)
    records=[]
    for i in range(rows):
        def txt(v): return None if v is None else v.decode('utf-8','strict')
        def txtlist(vs): return [txt(v) for v in vs if v is not None]
        bitems=cols['images.list.element.bytes'][i]
        pitems=cols['images.list.element.path'][i]
        if len(bitems)!=len(pitems):raise ValueError(f'image leaf count mismatch row {i}: {len(bitems)} != {len(pitems)}')
        images=[]
        for b,p in zip(bitems,pitems):
            if b is None and p is None:continue
            images.append({'bytes':b,'path':txt(p)})
        records.append({
            'id':txt(cols['id'][i]),
            'problem_markdown':txt(cols['problem_markdown'][i]),
            'solutions_markdown':txtlist(cols['solutions_markdown.list.element'][i]),
            'images':images,
            'country':txt(cols['country'][i]),
            'competition':txt(cols['competition'][i]),
            'topics_flat':txtlist(cols['topics_flat.list.element'][i]),
            'language':txt(cols['language'][i]),
            'problem_type':txt(cols['problem_type'][i]),
            'final_answer':txt(cols['final_answer'][i]),
        })
    return records

if __name__=='__main__':
    for p in map(Path,sys.argv[1:]):
        recs=read_parquet(p)
        print(p,len(recs))
        for r in recs[:2]:
            rr={**r,'images':[{'path':x['path'],'bytes_len':len(x['bytes']) if x['bytes'] else None} for x in r['images']]}
            print(json.dumps(rr,ensure_ascii=False)[:1200])
