#!/usr/bin/env python3
from __future__ import annotations
import argparse,base64,collections,hashlib,json,mimetypes,re,sys,unicodedata
from pathlib import Path
from read_mathnet_parquet import read_parquet
EXPECTED=['a4bbb1becd33c028272ae39eed33913f7142dfcd540b864620dcbba36e15763f','affe4a1ceeb931d4fe8c968f8023f222c8933c732f2631a578c6af3c85b3e4da']
def sha(b):return hashlib.sha256(b).hexdigest()
def canon_text(text):
 text=unicodedata.normalize('NFC',text or '').replace('\r\n','\n').replace('\r','\n');return (text.rstrip('\n')+'\n').encode()
def normalize(text):
 s=unicodedata.normalize('NFC',text or '').replace('\r\n','\n').replace('\r','\n')
 s=re.sub(r'^\s*(?:Problem\s+)?\d{1,2}\s*[\.:\)]\s*','',s,count=1,flags=re.I)
 s=s.replace('\\(','$ ').replace('\\)',' $').replace('\\[','$$ ').replace('\\]',' $$')
 s=re.sub(r'\\(?:left|right)\b','',s);s=re.sub(r'\\(?:[,;!:]|quad\b|qquad\b)',' ',s)
 for a,b in {'≤':' <UNICODE-LE> ','≥':' <UNICODE-GE> ','≠':' <UNICODE-NE> ','×':' <UNICODE-TIMES> ','−':'-'}.items():s=s.replace(a,b)
 s=re.sub(r'!\[[^\]]*\]\([^\)]*\)',' <IMAGE> ',s);s=re.sub(r'<img\b[^>]*>',' <IMAGE> ',s,flags=re.I)
 s=s.replace('**','').replace('__','');return re.sub(r'\s+',' ',s).strip()
def media(b,path):
 if b.startswith(b'\x89PNG\r\n\x1a\n'):return 'image/png','.png'
 if b.startswith(b'\xff\xd8\xff'):return 'image/jpeg','.jpg'
 ext=Path(path or '').suffix.lower();return mimetypes.guess_type('x'+ext)[0] or 'application/octet-stream',ext or '.bin'
def canon_record(rec):
 obj={'id':rec['id'],'problem_markdown':rec['problem_markdown'],'solutions_markdown':rec['solutions_markdown'],'images':[{'path':x['path'],'bytesBase64':base64.b64encode(x['bytes'] or b'').decode()} for x in rec['images']],'country':rec['country'],'competition':rec['competition'],'topics_flat':rec['topics_flat'],'language':rec['language'],'problem_type':rec['problem_type'],'final_answer':rec['final_answer']}
 return json.dumps(obj,ensure_ascii=False,sort_keys=True,separators=(',',':')).encode()
def writejl(p,rows):
 with p.open('w',encoding='utf-8') as f:
  for x in rows:f.write(json.dumps(x,ensure_ascii=False,separators=(',',':'))+'\n')
def main():
 ap=argparse.ArgumentParser();ap.add_argument('--shard0',required=True);ap.add_argument('--shard1',required=True);ap.add_argument('--out',required=True);a=ap.parse_args()
 shards=[Path(a.shard0),Path(a.shard1)];out=Path(a.out);m1=out/'m1';m1.mkdir(parents=True,exist_ok=True)
 imgroot=out/'source-images';stroot=out/'source-statements';solroot=out/'source-solutions';imgroot.mkdir(exist_ok=True);stroot.mkdir(exist_ok=True);solroot.mkdir(exist_ok=True)
 items=[];ims=[];sols=[];solution_files=0
 for si,p in enumerate(shards):
  got=sha(p.read_bytes())
  if got!=EXPECTED[si]:raise SystemExit(f'shard {si} hash mismatch: {got}')
  recs=read_parquet(p); exp=427 if si==0 else 426
  if len(recs)!=exp:raise SystemExit(f'shard {si} rows {len(recs)} != {exp}')
  for row,r in enumerate(recs):
   source='mathnet-v0:'+r['id']; images=[];solutions=[]
   (stroot/f"{r['id']}.md").write_bytes(canon_text(r['problem_markdown']))
   for j,s in enumerate(r['solutions_markdown'],1):
    h=sha(canon_text(s));meta={'index':j,'sha256':h,'bytes':len(canon_text(s))};solutions.append(meta);sols.append({'source':source,'shard':si,'row':row,**meta})
    d=solroot/r['id'];d.mkdir(exist_ok=True);(d/f'solution-{j}.md').write_bytes(canon_text(s));solution_files+=1
   for j,x in enumerate(r['images'],1):
    b=x['bytes'] or b'';h=sha(b);mt,ext=media(b,x['path']);dest=imgroot/(h+ext);dest.write_bytes(b)
    meta={'index':j,'path':x['path'],'sha256':h,'bytes':len(b),'mediaType':mt,'cacheFile':dest.name};images.append(meta);ims.append({'source':source,'shard':si,'row':row,**meta})
   rawh=sha(canon_record(r))
   items.append({'source':source,'id':r['id'],'shard':si,'row':row,'rawRecordSha256':rawh,'competition':r['competition'],'country':r['country'],'language':r['language'],'problemType':r['problem_type'],'finalAnswer':r['final_answer'],'topics':r['topics_flat'],'statementSha256':sha(canon_text(r['problem_markdown'])),'matchNormalizedSha256':sha(normalize(r['problem_markdown']).encode()),'matchNormalizer':'final-match-v1','solutionCount':len(solutions),'solutions':solutions,'imageCount':len(images),'images':images})
 if len(items)!=853 or len({x['id'] for x in items})!=853:raise SystemExit('853 unique source IDs gate failed')
 writejl(m1/'items.jsonl',items);writejl(m1/'image-index.jsonl',ims);writejl(m1/'solution-index.jsonl',sols)
 lock={'sourceSnapshot':'mathnet-v0','format':'parquet','shards':[{'index':0,'sha256':EXPECTED[0],'rows':427},{'index':1,'sha256':EXPECTED[1],'rows':426}],'totalRows':853,'reader':'bw26-mathnet-parquet-v1'};(m1/'lock.json').write_text(json.dumps(lock,indent=2)+'\n')
 summary={'schema':'bw26-mathnet-v0-inventory','version':1,'rows':853,'uniqueIds':853,'solutions':dict(sorted(collections.Counter(x['solutionCount'] for x in items).items())),'images':dict(sorted(collections.Counter(x['imageCount'] for x in items).items())),'totalImages':sum(x['imageCount'] for x in items),'uniqueImageHashes':len({x['sha256'] for x in ims}),'imageMediaTypes':dict(sorted(collections.Counter(x['mediaType'] for x in ims).items())),'languages':dict(collections.Counter(x['language'] or '' for x in items).most_common()),'competitions':dict(collections.Counter(x['competition'] or '' for x in items).most_common()),'statementFiles':len(items),'solutionFiles':solution_files,'imageFiles':len(list(imgroot.iterdir())),'itemsSha256':sha((m1/'items.jsonl').read_bytes()),'imageIndexSha256':sha((m1/'image-index.jsonl').read_bytes()),'solutionIndexSha256':sha((m1/'solution-index.jsonl').read_bytes())}
 (m1/'inventory-summary.json').write_text(json.dumps(summary,ensure_ascii=False,indent=2)+'\n')
 print(json.dumps(summary,indent=2))
if __name__=='__main__':main()
