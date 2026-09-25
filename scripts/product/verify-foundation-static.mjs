import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const root=process.cwd();
const fail=(m)=>{throw new Error(m)};
const read=(p)=>readFileSync(resolve(root,p),'utf8');
const json=(p)=>JSON.parse(read(p));
const jsonl=(p)=>read(p).trim().split(/\n+/).filter(Boolean).map((line,i)=>{try{return JSON.parse(line)}catch(e){fail(`${p}:${i+1}: invalid JSON`)}});
const shaBytes=(buf)=>createHash('sha256').update(buf).digest('hex');
const shaFile=(p)=>shaBytes(readFileSync(resolve(root,p)));
const stableJson=(value)=>Array.isArray(value)?`[${value.map(stableJson).join(',')}]`:(value&&typeof value==='object'?`{${Object.keys(value).sort().map(k=>`${JSON.stringify(k)}:${stableJson(value[k])}`).join(',')}}`:JSON.stringify(value));
const assert=(cond,m)=>{if(!cond)fail(m)};
const isoAdd=(s,n)=>{const d=new Date(`${s}T00:00:00Z`);d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10)};
const dayNumber=(s)=>Math.floor(Date.parse(`${s}T00:00:00Z`)/86400000);

function imageDimensions(relPath){
  const path=resolve(root,relPath); const buf=readFileSync(path); const ext=extname(relPath).toLowerCase();
  if(ext==='.png'){
    assert(buf.length>=24 && buf.subarray(0,8).equals(Buffer.from([137,80,78,71,13,10,26,10])),`${relPath}: invalid PNG header`);
    const width=buf.readUInt32BE(16), height=buf.readUInt32BE(20); assert(width>0&&height>0,`${relPath}: invalid PNG dimensions`); return {width,height,type:'png'};
  }
  if(ext==='.jpg'||ext==='.jpeg'){
    assert(buf.length>=4 && buf[0]===0xff && buf[1]===0xd8,`${relPath}: invalid JPEG header`);
    const sof=new Set([0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf]); let i=2;
    while(i+3<buf.length){
      if(buf[i]!==0xff){i++;continue;} while(i<buf.length&&buf[i]===0xff)i++; if(i>=buf.length)break; const marker=buf[i++];
      if(marker===0xd8||marker===0xd9||(marker>=0xd0&&marker<=0xd7)||marker===0x01)continue;
      if(i+1>=buf.length)break; const len=buf.readUInt16BE(i); if(len<2||i+len>buf.length)break;
      if(sof.has(marker)){assert(len>=7,`${relPath}: malformed JPEG SOF`); const height=buf.readUInt16BE(i+3), width=buf.readUInt16BE(i+5); assert(width>0&&height>0,`${relPath}: invalid JPEG dimensions`); return {width,height,type:'jpg'};}
      i+=len;
    }
    fail(`${relPath}: JPEG dimensions not found`);
  }
  if(ext==='.svg'){
    const text=buf.toString('utf8',0,Math.min(buf.length,65536)); assert(/<svg\b/i.test(text),`${relPath}: invalid SVG header`);
    const viewBox=/\bviewBox\s*=\s*["']\s*[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?[ ,]+[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?[ ,]+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)[ ,]+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)/i.exec(text);
    if(viewBox){const width=Number(viewBox[1]),height=Number(viewBox[2]);assert(width>0&&height>0,`${relPath}: invalid SVG viewBox`);return {width,height,type:'svg'};}
    const wm=/\bwidth\s*=\s*["']([0-9.]+)/i.exec(text), hm=/\bheight\s*=\s*["']([0-9.]+)/i.exec(text); assert(wm&&hm,`${relPath}: SVG lacks usable viewBox or width/height`); const width=Number(wm[1]),height=Number(hm[1]);assert(width>0&&height>0,`${relPath}: invalid SVG dimensions`);return {width,height,type:'svg'};
  }
  fail(`${relPath}: unsupported selected asset extension ${ext}`);
}

const appearances=jsonl('data/corpus/identity/appearances.jsonl');
const versions=jsonl('data/corpus/identity/versions.jsonl');
const shortlistRows=jsonl('data/corpus/identity/public-shortlist-only.jsonl');
const selections=jsonl('data/corpus/curation/content-selections.jsonl');
const classifications=jsonl('data/corpus/curation/classifications.jsonl');
const taxonomy=json('data/corpus/curation/taxonomy.json');
const bindings=jsonl('data/corpus/curation/asset-bindings.jsonl');
const policy=json('data/product/problem-policy.json');
const daily=json('data/product/daily-schedule.json');
const aops=json('data/product/references/aops-years.json');
const resultRegistry=json('data/product/results/registry.json');

assert(appearances.filter(x=>x.series==='BW').length===719,'expected 719 final BW appearances');
assert(shortlistRows.length===67,'expected 67 public shortlist-only identities');
assert(selections.length===786,'expected 786 content selections');
assert(classifications.length===786,'expected 786 classifications');
assert(bindings.length===207,'expected 207 asset bindings');
assert(taxonomy.schema==='bw26-topic-taxonomy'&&taxonomy.version===1,'unexpected taxonomy schema');
assert(taxonomy.subtopics.length===32,`expected 32 subtopics; got ${taxonomy.subtopics.length}`);
const enI18n=read('src/i18n/en.ts'), etI18n=read('src/i18n/et.ts');
for(const topic of taxonomy.subtopics){
  const token=`'${topic.id}':`;
  assert(enI18n.includes(token),`English UI taxonomy missing ${topic.id}`);
  assert(etI18n.includes(token),`Estonian UI taxonomy missing ${topic.id}`);
}

const selByVersion=new Map(selections.map(x=>[x.versionId,x]));
const clsByVersion=new Map(classifications.map(x=>[x.versionId,x]));
const versionByFinalId=new Map();
for(const v of versions){
  for(const id of v.appearanceIds??[]) if(/^bw:\d{4}:\d{2}$/.test(id)){
    assert(!versionByFinalId.has(id),`duplicate Version for final ${id}`);
    versionByFinalId.set(id,v);
  }
}
assert(versionByFinalId.size===719,`expected 719 final Version mappings; got ${versionByFinalId.size}`);

function yearInWebsite(year){
  const ranges=policy.contest.websiteYearRanges??[];
  const inRange=ranges.some(([a,b])=>year>=a&&year<=b);
  // per-problem overrides handled after base selection; this helper only base.
  return inRange;
}
const websiteInclude=new Set(policy.contest.websiteInclude??[]);
const websiteExclude=new Set(policy.contest.websiteExclude??[]);
const finalAppearances=appearances.filter(x=>x.series==='BW').sort((a,b)=>a.year-b.year||Number(a.number)-Number(b.number));
const finals=finalAppearances.map(a=>{
  const v=versionByFinalId.get(a.id); assert(v,`no Version for ${a.id}`);
  const s=selByVersion.get(v.id); assert(s,`no selection for ${v.id}`);
  const c=clsByVersion.get(v.id); assert(c,`no classification for ${v.id}`);
  const website=(yearInWebsite(a.year)||websiteInclude.has(a.id))&&!websiteExclude.has(a.id);
  const daily=website && policy.contest.daily.years.includes(a.year) && !(policy.contest.daily.exclude??[]).includes(a.id);
  return {appearance:a,version:v,selection:s,classification:c,website,daily};
});
const publicFinals=finals.filter(x=>x.website);
const hiddenFinals=finals.filter(x=>!x.website);
const dailyFinals=finals.filter(x=>x.daily);
assert(publicFinals.length===379,`expected 379 public finals; got ${publicFinals.length}`);
assert(hiddenFinals.length===340,`expected 340 inactive finals; got ${hiddenFinals.length}`);
assert(dailyFinals.length===180,`expected 180 Daily finals; got ${dailyFinals.length}`);
const dailyDomainCounts={A:0,C:0,G:0,N:0};
for(const x of dailyFinals){assert(x.classification.primaryDomain in dailyDomainCounts,`${x.appearance.id}: invalid domain`); dailyDomainCounts[x.classification.primaryDomain]++}
for(const d of ['A','C','G','N']) assert(dailyDomainCounts[d]===45,`Daily ${d}: expected 45; got ${dailyDomainCounts[d]}`);

const shortlist=shortlistRows.map(r=>{
  const s=selByVersion.get(r.versionId); assert(s,`no shortlist selection ${r.versionId}`);
  const c=clsByVersion.get(r.versionId); assert(c,`no shortlist classification ${r.versionId}`);
  const ref=s.statement?.ref;
  const readable=ref?.kind==='curated-file';
  return {...r,selection:s,classification:c,readable};
});
assert(shortlist.filter(x=>x.readable).length===50,'expected 50 readable shortlist exercises');
assert(shortlist.filter(x=>!x.readable).length===17,'expected 17 unavailable shortlist statements');

let statementCount=0, solutionCount=0;
const selectedOwners=[];
for(const s of selections){
  if(s.statement?.ref?.kind==='curated-file'){
    statementCount++;
    const p=s.statement.ref.path; assert(existsSync(resolve(root,p)),`${s.versionId}: missing statement ${p}`);
    selectedOwners.push({versionId:s.versionId,owner:{kind:'statement'},path:p});
  } else assert(s.statement?.status==='unavailable',`${s.versionId}: statement neither curated nor unavailable`);
  if(s.solutions?.status==='verified'){
    for(const item of s.solutions.items??[]){
      assert(item.ref?.kind==='curated-file',`${s.versionId}/${item.id}: solution not curated-file`);
      solutionCount++;
      assert(existsSync(resolve(root,item.ref.path)),`${s.versionId}/${item.id}: missing solution file`);
      selectedOwners.push({versionId:s.versionId,owner:{kind:'solution',id:item.id},path:item.ref.path});
    }
  }
}
assert(statementCount===769,`expected 769 selected statements; got ${statementCount}`);
assert(solutionCount===800,`expected 800 selected solution files; got ${solutionCount}`);

const bindingKey=(versionId,owner,sourceKey)=>`${versionId}|${owner.kind}|${owner.id??''}|${sourceKey}`;
const bindingMap=new Map();
const assetTypeCounts={png:0,jpg:0,svg:0};
const checkedAssetPaths=new Set();
for(const b of bindings){
  assert(b.source?.kind==='curated-file',`${b.versionId}: non-curated asset binding`);
  assert(existsSync(resolve(root,b.source.path)),`${b.versionId}: missing bound asset ${b.source.path}`);
  if(!checkedAssetPaths.has(b.source.path)){const info=imageDimensions(b.source.path); assetTypeCounts[info.type]++; checkedAssetPaths.add(b.source.path);}
  const k=bindingKey(b.versionId,b.owner,b.sourceKey); assert(!bindingMap.has(k),`duplicate asset binding ${k}`); bindingMap.set(k,b);
}
assert(checkedAssetPaths.size===207,`expected 207 selected asset files; got ${checkedAssetPaths.size}`);
assert(assetTypeCounts.png===117&&assetTypeCounts.jpg===89&&assetTypeCounts.svg===1,`unexpected selected asset type counts ${JSON.stringify(assetTypeCounts)}`);
const markdownImageRe=/!\[[^\]]*\]\(([^)\s]+)(?:\s+['"][^'"]*['"])?\)/g;
const referenced=new Set();
const hardBad=[];
for(const o of selectedOwners){
  const md=read(o.path);
  if(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/u.test(md))hardBad.push(`${o.path}: control character`);
  if(md.includes('\uFFFD'))hardBad.push(`${o.path}: U+FFFD replacement`);
  if(md.includes('丰'))hardBad.push(`${o.path}: known corrupt character 丰`);
  if(/##\s+4\s+Number Theory\s*$/m.test(md))hardBad.push(`${o.path}: known PDF header debris`);
  if(/B\s+ALTIC\s+WAY|FLENSBURG\s+2023/u.test(md))hardBad.push(`${o.path}: known contest branding debris`);
  for(const m of md.matchAll(markdownImageRe)){
    const sourceKey=m[1];
    if(/^(?:https?:|\/)/i.test(sourceKey))fail(`${o.path}: remote/absolute image reference ${sourceKey}`);
    const k=bindingKey(o.versionId,o.owner,sourceKey);
    assert(bindingMap.has(k),`${o.path}: image ${sourceKey} lacks owner-local binding`);
    referenced.add(k);
  }
}
assert(hardBad.length===0,`publication hard hygiene failures:\n${hardBad.join('\n')}`);
assert(referenced.size===207,`expected 207 referenced bindings; got ${referenced.size}`);
const unused=[...bindingMap.keys()].filter(k=>!referenced.has(k));
assert(unused.length===0,`unreferenced selected bindings: ${unused.join(', ')}`);

// Public asset projection universe: referenced bindings owned by public exercise Versions.
const publicVersionIds=new Set(publicFinals.map(x=>x.version.id));
for(const x of shortlist.filter(x=>x.readable)) publicVersionIds.add(x.versionId);
const publicBindings=bindings.filter(b=>publicVersionIds.has(b.versionId));
assert(publicBindings.length===112,`expected 112 public asset bindings; got ${publicBindings.length}`);
const publicHashes=new Set(publicBindings.map(b=>shaFile(b.source.path)));
assert(publicHashes.size===112,`expected 112 unique public asset bytes; got ${publicHashes.size}`);

// AoPS coverage.
assert(aops.schema==='bw26-aops-year-references','unexpected AoPS schema');
assert(aops.years.length===36,'expected 36 AoPS year mappings');
const aopsYears=new Set(aops.years.map(x=>x.year));
for(let y=1990;y<=2025;y++) assert(aopsYears.has(y),`AoPS missing ${y}`);
assert(aops.years.find(x=>x.year===2020)?.collectionUrl==='https://artofproblemsolving.com/community/c1594133','unexpected 2020 AoPS URL');
assert(publicFinals.every(x=>aopsYears.has(x.appearance.year)),'a public final lacks AoPS year coverage');

// Results coverage / matrices.
assert(resultRegistry.coverage.years===34,'expected 34 result years');
assert(resultRegistry.years.length===34,'expected 34 result registry rows');
let teamParticipations=0;
const resultYears=new Set();
for(const row of resultRegistry.years){
  assert(row.status==='imported',`results ${row.year} not imported`);
  const p=`data/product/results/${row.localFile}`; const d=json(p);
  assert(d.year===row.year,`${p}: year mismatch`); assert(d.problemCount===20,`${p}: problemCount`);
  assert(d.teams.length===row.teamCount,`${p}: team count mismatch`);
  for(const t of d.teams){
    assert(Number.isInteger(t.rank)&&t.rank>0,`${p}: invalid rank`);
    assert(typeof t.teamName==='string'&&t.teamName.trim(),`${p}: blank team`);
    assert(Array.isArray(t.scores)&&t.scores.length===20,`${p}/${t.teamName}: score shape`);
    for(const s of t.scores) assert(Number.isInteger(s)&&s>=0&&s<=5,`${p}/${t.teamName}: invalid score`);
    assert(t.scores.reduce((a,b)=>a+b,0)===t.total,`${p}/${t.teamName}: total mismatch`);
  }
  teamParticipations+=d.teams.length; resultYears.add(row.year);
}
assert(teamParticipations===362,`expected 362 team participations; got ${teamParticipations}`);
for(let y=1992;y<=2025;y++) assert(resultYears.has(y),`results missing ${y}`);
assert(publicFinals.filter(x=>resultYears.has(x.appearance.year)).length===340,'expected 340 result-backed public finals');
assert(dailyFinals.every(x=>resultYears.has(x.appearance.year)),'all Daily finals should have historical results');

// Daily manifest and schedule invariants.
assert(daily.schema==='bw26-daily-schedule'&&daily.version===1,'unexpected Daily schema');
assert(daily.timezone==='Europe/Tallinn','Daily timezone must be Europe/Tallinn');
assert(daily.epoch==='2026-09-25','Daily epoch mismatch');
assert(daily.generator.policySha256===shaBytes(Buffer.from(stableJson(policy))),'Daily policy fingerprint mismatch');
assert(daily.generator.cycleDays===45&&daily.generator.rounds===5&&daily.generator.daysPerRound===9,'Daily generator shape mismatch');
assert(daily.generator.crossCycleSameProblemMinGapDays===9,'Daily cross-cycle minimum mismatch');
assert(daily.cycles.length===8,`expected 8 initial cycles; got ${daily.cycles.length}`);

// Independently reproduce the deterministic generator and require byte-equivalent cycle choices.
const dailyDomains=['A','C','G','N'];
const dailyYears=[2017,2018,2019,2020,2021,2022,2023,2024,2025];
const offsets={A:0,C:2,G:4,N:6};
const generatorSeed='bw26-daily-v1|epoch=2026-09-25|years=2017-2025|cycle=45|rounds=5x9';
const dailyBy=new Map();
const dailyById=new Map();
for(const x of dailyFinals){
  const p={id:x.appearance.id,year:x.appearance.year,number:Number(x.appearance.number),domain:x.classification.primaryDomain,subtopics:x.classification.subtopics??[]};
  dailyById.set(p.id,p);
  const k=`${p.year}|${p.domain}`; const list=dailyBy.get(k)??[]; list.push(p); dailyBy.set(k,list);
}
for(const year of dailyYears) for(const domain of dailyDomains){
  const list=dailyBy.get(`${year}|${domain}`)??[]; list.sort((a,b)=>a.number-b.number);
  assert(list.length===5,`${year}/${domain}: expected five Daily pool problems`);
}
const shaText=(v)=>createHash('sha256').update(v).digest('hex');
function reproduceCycle(index,salt){
  const perms=new Map();
  for(const [key,list] of dailyBy){
    const [year,domain]=key.split('|');
    perms.set(key,[...list].sort((a,b)=>shaText(`${generatorSeed}|cycle=${index}|salt=${salt}|${domain}|${year}|${a.id}`).localeCompare(shaText(`${generatorSeed}|cycle=${index}|salt=${salt}|${domain}|${year}|${b.id}`))));
  }
  const days=[]; const cycleShift=(index*3+salt)%9;
  for(let round=0;round<5;round++) for(let day=0;day<9;day++){
    const entries={};
    for(const domain of dailyDomains){
      const year=dailyYears[(day+offsets[domain]+cycleShift+2*round)%9];
      const q=perms.get(`${year}|${domain}`)[round]; entries[domain]={id:q.id,year:q.year,number:q.number};
    }
    days.push(entries);
  }
  return days;
}
function boundaryAccept(previous,current,minGap=9){
  if(!previous)return true; const pos=new Map();
  previous.forEach((d,i)=>Object.values(d).forEach(q=>pos.set(q.id,i)));
  for(let j=0;j<current.length;j++) for(const q of Object.values(current[j])){const i=pos.get(q.id); if(i!==undefined&&(45-i)+j<minGap)return false;}
  return true;
}
function adjacencyScore(days){
  let score=0;
  for(const domain of dailyDomains){let prev=null; for(const d of days){const subs=new Set(dailyById.get(d[domain].id).subtopics); if(prev)for(const x of subs)if(prev.has(x))score++; prev=subs;}}
  return score;
}
function chooseReproducedCycle(index,previous){
  const valid=[];
  for(let salt=0;salt<2048;salt++){const days=reproduceCycle(index,salt); if(!boundaryAccept(previous,days,9))continue; valid.push({salt,score:adjacencyScore(days),days}); if(valid.length>=128)break;}
  assert(valid.length>0,`cycle ${index+1}: no reproduced candidate`);
  valid.sort((a,b)=>a.score-b.score||a.salt-b.salt); return valid[0];
}
let reproducedPrevious=null;
for(let i=0;i<daily.cycles.length;i++){
  const q=chooseReproducedCycle(i,reproducedPrevious); const actual=daily.cycles[i];
  assert(actual.salt===q.salt,`${actual.id}: deterministic salt mismatch ${actual.salt} != ${q.salt}`);
  assert(actual.softSubtopicAdjacencyScore===q.score,`${actual.id}: deterministic soft score mismatch`);
  const actualProblems=actual.days.map(d=>d.problems);
  assert(JSON.stringify(actualProblems)===JSON.stringify(q.days),`${actual.id}: deterministic problem arrangement mismatch`);
  reproducedPrevious=q.days;
}

const dailyPoolIds=new Set(dailyFinals.map(x=>x.appearance.id));
const occurrence=new Map();
let expectedDate=daily.epoch;
for(let ci=0;ci<daily.cycles.length;ci++){
  const c=daily.cycles[ci];
  assert(c.id===`daily-v1-c${String(ci+1).padStart(3,'0')}`,`${c.id}: unexpected cycle id`);
  assert(c.startDate===expectedDate,`${c.id}: unexpected start date`);
  assert(c.days.length===45,`${c.id}: expected 45 days`);
  const seen=new Set(); const domainCount={A:0,C:0,G:0,N:0};
  for(let di=0;di<c.days.length;di++){
    const d=c.days[di]; const date=isoAdd(c.startDate,di); assert(d.date===date,`${c.id}: date discontinuity`);
    const years=[];
    for(const domain of ['A','C','G','N']){
      const p=d.problems?.[domain]; assert(p,`${d.date}: missing ${domain}`);
      assert(dailyPoolIds.has(p.id),`${d.date}: ineligible Daily ID ${p.id}`);
      assert(!seen.has(p.id),`${c.id}: repeated ${p.id}`); seen.add(p.id); domainCount[domain]++; years.push(p.year);
      const idExpected=`bw:${p.year}:${String(p.number).padStart(2,'0')}`; assert(p.id===idExpected,`${d.date}: malformed problem ref ${p.id}`);
      const arr=occurrence.get(p.id)??[]; arr.push(dayNumber(d.date)); occurrence.set(p.id,arr);
    }
    assert(new Set(years).size===4,`${d.date}: expected four distinct contest years`);
  }
  assert(seen.size===180,`${c.id}: expected all 180 problems once`);
  for(const id of dailyPoolIds) assert(seen.has(id),`${c.id}: omitted ${id}`);
  for(const domain of ['A','C','G','N']) assert(domainCount[domain]===45,`${c.id}/${domain}: expected 45`);
  expectedDate=isoAdd(c.startDate,45);
}
for(const [id,arr] of occurrence){
  assert(arr.length===8,`${id}: expected once in each cycle`);
  for(let i=1;i<arr.length;i++) assert(arr[i]-arr[i-1]>=9,`${id}: cross-cycle gap ${arr[i]-arr[i-1]} < 9`);
}
const allDailyDays=daily.cycles.flatMap(c=>c.days);
assert(allDailyDays.length===360,'expected 360 Daily days');
assert(allDailyDays[0].date==='2026-09-25','unexpected first Daily date');
assert(allDailyDays.at(-1).date==='2027-09-19','unexpected last Daily date');

// Production route source topology and no fixture dependency.
const requiredPaths=[
  'src/pages/problems/[year]/[number].astro','src/pages/et/problems/[year]/[number].astro',
  'src/pages/problems/[year]/index.astro','src/pages/et/problems/[year]/index.astro',
  'src/pages/shortlist/index.astro','src/pages/et/shortlist/index.astro',
  'src/pages/shortlist/[year]/[slug].astro','src/pages/et/shortlist/[year]/[slug].astro',
  'src/pages/daily/index.astro','src/pages/et/daily/index.astro','src/pages/_qa/[...path].astro'
];
for(const p of requiredPaths) assert(existsSync(resolve(root,p)),`missing route ${p}`);
assert(!existsSync(resolve(root,'src/pages/problems/[id].astro')),'old fixture problem route still exists');
assert(!existsSync(resolve(root,'src/pages/et/problems/[id].astro')),'old ET fixture problem route still exists');
function walk(dir,out=[]){for(const n of readdirSync(resolve(root,dir))){const p=join(dir,n);const st=statSync(resolve(root,p));if(st.isDirectory())walk(p,out);else out.push(p)}return out}
const productionSources=[...walk('src/pages'),...walk('src/views'),...walk('src/components'),...walk('src/lib/product'),...walk('src/lib/corpus')].filter(p=>/\.(?:astro|ts)$/.test(p));
for(const p of productionSources){const s=read(p); assert(!/problemFixtures/.test(s),`${p}: production source imports/references problemFixtures`);}

// Logical route uniqueness/parity independent of Astro compilation.
const enFinalRoutes=new Set(publicFinals.map(x=>`/problems/${x.appearance.year}/${Number(x.appearance.number)}/`));
assert(enFinalRoutes.size===379,'final route collision');
const readableShortlist=shortlist.filter(x=>x.readable);
const slugs=readableShortlist.map(x=>{
  const a=x.appearanceId; const m=/^bw-cand:(\d{4}):(.+)$/.exec(a); assert(m,`unexpected shortlist appearance ${a}`); return `/shortlist/${m[1]}/${m[2]}/`;
});
assert(new Set(slugs).size===50,'shortlist route collision');
assert([...enFinalRoutes].every(p=>!p.includes('/1999/')&&!p.includes('/2009/')&&!p.includes('/2011/')&&!p.includes('/2016/')),'inactive year leaked to public final routes');

console.log('BW26 P3E-1 dependency-free foundation verification passed.');
console.log(`  Canonical finals:                 719`);
console.log(`  Website finals / inactive:       ${publicFinals.length} / ${hiddenFinals.length}`);
console.log(`  Readable / unavailable shortlist:${readableShortlist.length} / ${shortlist.length-readableShortlist.length}`);
console.log(`  Selected statements / solutions: ${statementCount} / ${solutionCount}`);
console.log(`  Asset bindings referenced:       ${referenced.size}/${bindings.length}`);
console.log(`  Selected asset headers/dims:     ${checkedAssetPaths.size}/207 (PNG ${assetTypeCounts.png} / JPG ${assetTypeCounts.jpg} / SVG ${assetTypeCounts.svg})`);
console.log(`  Public asset bindings:           ${publicBindings.length} (${publicHashes.size} unique byte objects)`);
console.log(`  Daily pool:                      ${dailyFinals.length} (A${dailyDomainCounts.A}/C${dailyDomainCounts.C}/G${dailyDomainCounts.G}/N${dailyDomainCounts.N})`);
console.log(`  Daily schedule:                  ${daily.cycles.length} cycles / ${allDailyDays.length} days / ${allDailyDays[0].date} -> ${allDailyDays.at(-1).date}`);
console.log(`  AoPS year mappings:              ${aops.years.length}/36`);
console.log(`  Result years / teams:            ${resultYears.size}/34 / ${teamParticipations}`);
console.log(`  Result-backed public finals:     ${publicFinals.filter(x=>resultYears.has(x.appearance.year)).length}/${publicFinals.length}`);
console.log(`  Logical final routes EN/ET:      ${enFinalRoutes.size}/${enFinalRoutes.size}`);
console.log(`  Logical shortlist routes EN/ET:  ${slugs.length}/${slugs.length}`);
