import { bindingsForOwner, materializeProblemAsset, type ProjectableAsset } from '../corpus/assets';
import { loadPublicCanonicalState } from '../corpus/load';
import { getProductCatalog, readPublicationMarkdown, exerciseRoute, type ProductProblem } from './catalog';
import { getAopsYearMap } from './references';
import { getProblemResults, type ProblemResults } from './results';
import { getDailyDatesForProblem } from './daily';
import type { Domain } from '../problems/types';

export type PublicSolutionModel={id:string;language:'en';markdown:string;assets:ProjectableAsset[]};
export type PublicProblemPageModel={
  key:string; kind:'final'|'shortlist'; versionId:string; year:number; number:string; slug:string; domain:Domain;
  subtopics:Array<{id:string;label:string}>; statement:{language:'en';markdown:string;assets:ProjectableAsset[]};
  solutionsStatus:'verified'|'unavailable'; solutions:PublicSolutionModel[]; results:ProblemResults|null;
  aopsUrl:string|null; officialResultsUrl:string|null; route:string; dailyDates:string[];
  previous:{number:number;route:string}|null; next:{number:number;route:string}|null;
};

const cache=new Map<string,Promise<PublicProblemPageModel>>();
export function buildPublicProblemPage(problem:ProductProblem,root=process.cwd()):Promise<PublicProblemPageModel>{
  const key=`${root}|${problem.key}`; const hit=cache.get(key); if(hit)return hit; const value=build(problem,root); cache.set(key,value); return value;
}
async function build(problem:ProductProblem,root:string):Promise<PublicProblemPageModel>{
  const catalog=await getProductCatalog(root); const canonical=await loadPublicCanonicalState(root);
  const taxonomy=new Map(canonical.taxonomy.subtopics.map(x=>[x.id,x.label]));
  const statementAssets=await Promise.all(bindingsForOwner(problem.assetBindings,problem.versionId,{kind:'statement'}).map(b=>materializeProblemAsset(b,root)));
  const solutions=await Promise.all(problem.solutions.map(async solution=>({ id:solution.id, language:solution.language, markdown:await readPublicationMarkdown(solution.path,root), assets:await Promise.all(bindingsForOwner(problem.assetBindings,problem.versionId,{kind:'solution',id:solution.id}).map(b=>materializeProblemAsset(b,root))) })));
  let results:ProblemResults|null=null,aopsUrl:string|null=null,officialResultsUrl:string|null=null;
  if(problem.kind==='final'){
    const number=Number(problem.number); results=await getProblemResults(problem.year,number,root); officialResultsUrl=results?.officialResultsUrl??null;
    aopsUrl=(await getAopsYearMap(root)).get(problem.year)??null;
  }
  const siblings=problem.kind==='final'?catalog.finals.filter(x=>x.year===problem.year):[]; const index=siblings.findIndex(x=>x.key===problem.key);
  const previous=index>0?siblings[index-1]!:null; const next=index>=0&&index<siblings.length-1?siblings[index+1]!:null;
  return {
    key:problem.key,kind:problem.kind,versionId:problem.versionId,year:problem.year,number:problem.number,slug:problem.slug,domain:problem.domain,
    subtopics:problem.subtopicIds.map(id=>({id,label:taxonomy.get(id)??id})),
    statement:{language:'en',markdown:await readPublicationMarkdown(problem.statementPath,root),assets:statementAssets},
    solutionsStatus:problem.solutionsStatus,solutions,results,aopsUrl,officialResultsUrl,route:exerciseRoute(problem),dailyDates:await getDailyDatesForProblem(problem.key,root),
    previous:previous?{number:Number(previous.number),route:exerciseRoute(previous)}:null,
    next:next?{number:Number(next.number),route:exerciseRoute(next)}:null,
  };
}
