import type { PracticeExercise } from '../product/practice-catalog';
import type { Domain } from '../problems/types';
const DOMAIN_ORDER: Domain[]=['A','C','G','N'];
export type BrowseFilters={years:number[];domains:Domain[];subtopics:string[];verifiedSolutionOnly:boolean};

export function normalizeBrowseFilters(input:Partial<BrowseFilters>|null|undefined, validYears:readonly number[], validTopics:readonly string[]):BrowseFilters{
  const yearSet=new Set(validYears);
  const topicSet=new Set(validTopics);
  const years=Array.isArray(input?.years)?[...new Set(input!.years.filter((y):y is number=>Number.isInteger(y)&&yearSet.has(y)))].sort((a,b)=>a-b):[...validYears].sort((a,b)=>a-b);
  const domains=Array.isArray(input?.domains)?DOMAIN_ORDER.filter(d=>input!.domains!.includes(d)):[...DOMAIN_ORDER];
  const subtopics=Array.isArray(input?.subtopics)?[...new Set(input!.subtopics.filter((t):t is string=>typeof t==='string'&&topicSet.has(t)))].sort():[];
  return{years,domains,subtopics,verifiedSolutionOnly:input?.verifiedSolutionOnly===true};
}

export function filterProblemBrowse(catalog:readonly PracticeExercise[],filters:BrowseFilters):PracticeExercise[]{
  const years=new Set(filters.years),domains=new Set(filters.domains),topics=new Set(filters.subtopics);
  return catalog.filter(x=>x.collection==='contest'&&years.has(x.year)&&domains.has(x.domain)&&(topics.size===0||x.subtopicIds.some(t=>topics.has(t)))&&(!filters.verifiedSolutionOnly||x.solutionAvailable));
}

export function encodeBrowseQuery(filters:BrowseFilters,validYears:readonly number[]):string{
  const params=new URLSearchParams();
  if(filters.years.length!==validYears.length)params.set('years',filters.years.length?[...filters.years].sort((a,b)=>a-b).join(','):'none');
  if(filters.domains.length!==DOMAIN_ORDER.length)params.set('domains',filters.domains.length?DOMAIN_ORDER.filter(d=>filters.domains.includes(d)).join(','):'none');
  if(filters.subtopics.length)params.set('topics',[...filters.subtopics].sort().join(','));
  if(filters.verifiedSolutionOnly)params.set('solution','1');
  return params.toString();
}
