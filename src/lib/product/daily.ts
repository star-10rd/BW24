import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export const dailyDomainOrder = ['A','C','G','N'] as const;
export type DailyDomain = typeof dailyDomainOrder[number];
export type DailyProblemRef = { id:string; year:number; number:number };
export type DailyDay = { date:string; problems:Record<DailyDomain,DailyProblemRef> };
export type DailyCycle = { id:string; startDate:string; generatorVersion:number; salt:number; softSubtopicAdjacencyScore:number; days:DailyDay[] };
export type DailySchedule = {
  schema:'bw26-daily-schedule'; version:1; timezone:'Europe/Tallinn'; epoch:string;
  generator:{version:number;seed:string;policySha256:string;cycleDays:45;rounds:5;daysPerRound:9;crossCycleSameProblemMinGapDays:number};
  cycles:DailyCycle[];
};
let cached:Promise<DailySchedule>|null=null;
export function loadDailySchedule(root=process.cwd()):Promise<DailySchedule>{ if(root!==process.cwd())return load(root); cached??=load(root); return cached; }
async function load(root:string){ const x=JSON.parse(await readFile(resolve(root,'data/product/daily-schedule.json'),'utf8')) as DailySchedule; if(x.schema!=='bw26-daily-schedule'||x.version!==1||x.timezone!=='Europe/Tallinn') throw new Error('invalid Daily schedule'); return x; }
export function flattenDailySchedule(schedule:DailySchedule):DailyDay[]{ return schedule.cycles.flatMap(c=>c.days); }
export async function getDailyDays(root=process.cwd()):Promise<DailyDay[]>{ return flattenDailySchedule(await loadDailySchedule(root)); }
export async function getDailyDatesForProblem(problemId:string,root=process.cwd()):Promise<string[]>{ return (await getDailyDays(root)).filter(d=>Object.values(d.problems).some(p=>p.id===problemId)).map(d=>d.date); }
export async function getDailyDay(date:string,root=process.cwd()):Promise<DailyDay|null>{ return (await getDailyDays(root)).find(d=>d.date===date)??null; }
export async function validateDailyContext(problemId:string,date:string,root=process.cwd()):Promise<boolean>{ const day=await getDailyDay(date,root); return !!day&&Object.values(day.problems).some(p=>p.id===problemId); }
