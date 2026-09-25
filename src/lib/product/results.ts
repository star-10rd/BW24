import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

type Team = { rank:number; teamName:string; countryCode:string|null; scores:number[]; total:number };
type ResultYear = { schema:string; version:number; year:number; maxProblemScore:5; problemCount:20; teams:Team[] };
type Registry = { schema:string; version:number; years:Array<{year:number;officialResultsUrl:string;localFile:string}> };
export type ProblemResults = {
  year:number; problemNumber:number; teamCount:number; meanScore:number; distribution:[number,number,number,number,number,number];
  fullScoreCount:number; scoreAtLeast4Count:number; estoniaScore:number|null; teams:Array<{teamName:string;score:number}>; officialResultsUrl:string;
};
let registryCache: Promise<Registry>|null=null; const years=new Map<number,Promise<ResultYear>>();
async function registry(root:string){
  if(root!==process.cwd()) return loadRegistry(root);
  registryCache??=loadRegistry(root); return registryCache;
}
async function loadRegistry(root:string){ const x=JSON.parse(await readFile(resolve(root,'data/product/results/registry.json'),'utf8')) as Registry; if(x.schema!=='bw26-balticway-results-registry'||x.version!==2) throw new Error('invalid result registry'); return x; }
async function loadYear(year:number,root:string){
  const key=root===process.cwd()?year:null; if(key!==null&&years.has(year)) return years.get(year)!;
  const p=(async()=>{ const reg=await registry(root); const entry=reg.years.find(x=>x.year===year); if(!entry) throw new Error(`no results for ${year}`); const x=JSON.parse(await readFile(resolve(root,'data/product/results',entry.localFile),'utf8')) as ResultYear; if(x.schema!=='bw26-balticway-results'||x.version!==2||x.year!==year) throw new Error(`invalid results ${year}`); return x; })();
  if(key!==null) years.set(year,p); return p;
}
export async function getProblemResults(year:number, problemNumber:number, root=process.cwd()):Promise<ProblemResults|null>{
  const reg=await registry(root); const entry=reg.years.find(x=>x.year===year); if(!entry) return null;
  if(problemNumber<1||problemNumber>20) throw new Error(`invalid problem number ${problemNumber}`);
  const data=await loadYear(year,root); const scores=data.teams.map(t=>t.scores[problemNumber-1]!); const distribution=[0,0,0,0,0,0] as ProblemResults['distribution'];
  for(const score of scores) distribution[score]++;
  const total=scores.reduce((a,b)=>a+b,0); const estonia=data.teams.find(t=>t.teamName==='Estonia');
  return { year, problemNumber, teamCount:scores.length, meanScore:total/scores.length, distribution, fullScoreCount:distribution[5], scoreAtLeast4Count:distribution[4]+distribution[5], estoniaScore:estonia?.scores[problemNumber-1]??null, teams:data.teams.map(t=>({teamName:t.teamName,score:t.scores[problemNumber-1]!})), officialResultsUrl:entry.officialResultsUrl };
}
