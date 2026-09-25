import { createHash } from 'node:crypto';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { getProductCatalog, type ProductProblem } from '../../src/lib/product/catalog';
import type { DailyCycle, DailyDay, DailyDomain, DailyProblemRef, DailySchedule } from '../../src/lib/product/daily';
import { productPolicyFingerprint } from '../../src/lib/product/policy';

const domains:DailyDomain[]=['A','C','G','N'];
const years=[2017,2018,2019,2020,2021,2022,2023,2024,2025];
const offsets:Record<DailyDomain,number>={A:0,C:2,G:4,N:6};
const seed='bw26-daily-v1|epoch=2026-09-25|years=2017-2025|cycle=45|rounds=5x9';
const epoch='2026-09-25';
const sha=(value:string)=>createHash('sha256').update(value).digest('hex');
const isoAdd=(date:string,days:number)=>{ const d=new Date(`${date}T00:00:00Z`); d.setUTCDate(d.getUTCDate()+days); return d.toISOString().slice(0,10); };

type Candidate=ProductProblem & {year:number};
type DayEntries=Record<DailyDomain,DailyProblemRef>;

async function inputs(root=process.cwd()){
  const catalog=await getProductCatalog(root); const pool=catalog.finals.filter(x=>x.dailyEligible);
  if(pool.length!==180) throw new Error(`expected 180 Daily problems; got ${pool.length}`);
  const by=new Map<string,Candidate[]>(); const byId=new Map(pool.map(x=>[x.key,x]));
  for(const problem of pool){ const k=`${problem.year}|${problem.domain}`; const list=by.get(k)??[]; list.push(problem as Candidate); by.set(k,list); }
  for(const year of years) for(const domain of domains){ const list=by.get(`${year}|${domain}`)??[]; list.sort((a,b)=>Number(a.number)-Number(b.number)); if(list.length!==5) throw new Error(`${year}/${domain}: expected 5 Daily problems; got ${list.length}`); }
  return {by,byId};
}

function makeCycle(index:number,salt:number,by:Map<string,Candidate[]>):DayEntries[]{
  const perms=new Map<string,Candidate[]>();
  for(const [key,list] of by){ const [year,domain]=key.split('|'); perms.set(key,[...list].sort((a,b)=>sha(`${seed}|cycle=${index}|salt=${salt}|${domain}|${year}|${a.key}`).localeCompare(sha(`${seed}|cycle=${index}|salt=${salt}|${domain}|${year}|${b.key}`)))); }
  const days:DayEntries[]=[]; const cycleShift=(index*3+salt)%9;
  for(let round=0;round<5;round++) for(let day=0;day<9;day++){
    const entries={} as DayEntries;
    for(const domain of domains){ const year=years[(day+offsets[domain]+cycleShift+2*round)%9]!; const p=perms.get(`${year}|${domain}`)![round]!; entries[domain]={id:p.key,year:p.year,number:Number(p.number)}; }
    days.push(entries);
  }
  return days;
}
function boundaryOk(previous:DayEntries[]|null,current:DayEntries[],minGap=9){ if(!previous)return true; const pos=new Map<string,number>(); previous.forEach((d,i)=>Object.values(d).forEach(p=>pos.set(p.id,i))); for(let j=0;j<current.length;j++) for(const p of Object.values(current[j]!)){ const i=pos.get(p.id); if(i!==undefined && (45-i)+j<minGap)return false; } return true; }
function softScore(days:DayEntries[],byId:Map<string,ProductProblem>){ let score=0; for(const domain of domains){ let prev:Set<string>|null=null; for(const day of days){ const subs=new Set(byId.get(day[domain].id)!.subtopicIds); if(prev) for(const s of subs) if(prev.has(s))score++; prev=subs; } } return score; }
function chooseCycle(index:number,previous:DayEntries[]|null,by:Map<string,Candidate[]>,byId:Map<string,ProductProblem>){ const valid:Array<{score:number;salt:number;days:DayEntries[]}>=[]; for(let salt=0;salt<2048;salt++){ const days=makeCycle(index,salt,by); if(!boundaryOk(previous,days,9))continue; valid.push({score:softScore(days,byId),salt,days}); if(valid.length>=128)break; } if(!valid.length)throw new Error(`no valid deterministic Daily cycle ${index+1}`); valid.sort((a,b)=>a.score-b.score||a.salt-b.salt); return valid[0]!; }

export async function generateInitialDailySchedule(root=process.cwd(),cycleCount=8):Promise<DailySchedule>{
  const {by,byId}=await inputs(root); const policySha256=await productPolicyFingerprint(root); const cycles:DailyCycle[]=[]; let previous:DayEntries[]|null=null;
  for(let index=0;index<cycleCount;index++){
    const chosen=chooseCycle(index,previous,by,byId); const startDate=isoAdd(epoch,index*45); const days:DailyDay[]=chosen.days.map((problems,i)=>({date:isoAdd(startDate,i),problems}));
    cycles.push({id:`daily-v1-c${String(index+1).padStart(3,'0')}`,startDate,generatorVersion:1,salt:chosen.salt,softSubtopicAdjacencyScore:chosen.score,days}); previous=chosen.days;
  }
  return {schema:'bw26-daily-schedule',version:1,timezone:'Europe/Tallinn',epoch,generator:{version:1,seed,policySha256,cycleDays:45,rounds:5,daysPerRound:9,crossCycleSameProblemMinGapDays:9},cycles};
}

export async function extendDailySchedule(existing:DailySchedule,additionalCycles:number,root=process.cwd()):Promise<DailySchedule>{
  const {by,byId}=await inputs(root); const currentPolicy=await productPolicyFingerprint(root);
  if(existing.generator.policySha256!==currentPolicy) throw new Error('Daily policy changed; extending an existing schedule requires an explicit reviewed policy migration');
  const cycles=[...existing.cycles]; let previous=cycles.length?cycles.at(-1)!.days.map(d=>d.problems):null;
  for(let index=cycles.length;index<cycles.length+additionalCycles;index++){
    const chosen=chooseCycle(index,previous,by,byId); const startDate=isoAdd(epoch,index*45); const days:DailyDay[]=chosen.days.map((problems,i)=>({date:isoAdd(startDate,i),problems}));
    cycles.push({id:`daily-v1-c${String(index+1).padStart(3,'0')}`,startDate,generatorVersion:1,salt:chosen.salt,softSubtopicAdjacencyScore:chosen.score,days}); previous=chosen.days;
  }
  return {...existing,cycles};
}

if(process.argv[1] && import.meta.url===pathToFileURL(resolve(process.argv[1])).href){ const root=process.cwd(); const schedule=await generateInitialDailySchedule(root,8); await writeFile(resolve(root,'data/product/daily-schedule.json'),`${JSON.stringify(schedule,null,2)}\n`); console.log(`Generated ${schedule.cycles.length} Daily cycles: ${schedule.cycles[0]!.days[0]!.date} -> ${schedule.cycles.at(-1)!.days.at(-1)!.date}`); }
