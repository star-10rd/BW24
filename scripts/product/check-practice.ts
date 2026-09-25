import { readFileSync } from 'node:fs';
import { getPracticeCatalog, type PracticeExercise } from '../../src/lib/product/practice-catalog';
import { getDailyDays } from '../../src/lib/product/daily';
import { encodeBrowseQuery, filterProblemBrowse, normalizeBrowseFilters } from '../../src/lib/client/problems-browse';
import { resolvePracticeContextData } from '../../src/lib/client/practice-context';
import {
  createPermutation,
  createRandomPool,
  emptyRandomState,
  filterRandomCatalog,
  nextRandomProblem,
  normalizeRandomFilters,
  parseRandomState,
  type IntegerRng,
  type RandomPoolV2,
} from '../../src/lib/client/random';
import { addRecent, emptyRecentState, sanitizeRecent } from '../../src/lib/client/recent';
import { createTrainingSession, filterTrainingCatalog, normalizeTrainingFilters, validateTrainingSession } from '../../src/lib/client/training';

const practice = await getPracticeCatalog();
const days = await getDailyDays();

// Browser-bootstrap regression checks. These are deliberately structural rather
// than browser-specific: the project must not rely on Astro's development
// toolbar during QA, and BW26's own problem runtime must wait for a real body.
const astroConfigSource = readFileSync('astro.config.mjs', 'utf8');
assert(/devToolbar\s*:\s*\{[\s\S]*?enabled\s*:\s*false[\s\S]*?\}/.test(astroConfigSource), 'Astro development toolbar is disabled for project QA');
const layoutSource = readFileSync('src/layouts/BaseLayout.astro', 'utf8');
const inlineHeadMatch = layoutSource.match(/<script is:inline>([\s\S]*?)<\/script>/);
assert(inlineHeadMatch, 'BaseLayout pre-paint script exists');
const inlineHead = inlineHeadMatch[1]!;
assert(!inlineHead.includes('document.body'), 'pre-paint never reads or mutates document.body');
assert(!inlineHead.includes('sessionStorage'), 'pre-paint does not validate Practice-set storage before body exists');
assert(!inlineHead.includes('history.state'), 'pre-paint does not restore review history before body exists');
const problemExperienceSource = readFileSync('src/lib/client/problem-experience.ts', 'utf8');
assert(problemExperienceSource.includes("document.readyState === 'loading' || !document.body"), 'problem experience waits for DOM/body readiness');
assert(problemExperienceSource.includes("document.addEventListener('DOMContentLoaded', initProblemExperience, { once: true })"), 'problem experience defers itself to DOMContentLoaded when necessary');
const problemPageSource = readFileSync('src/components/problem/ProblemPage.astro', 'utf8');
assert(problemPageSource.includes("document.addEventListener('DOMContentLoaded', bootProblemExperience, { once: true })"), 'problem page bootstrap waits for DOMContentLoaded');
assert(problemPageSource.includes('data-context-date-label'), 'Daily context date uses a dedicated leaf marker');
assert(problemExperienceSource.includes("document.querySelector<HTMLElement>('[data-context-date-label]')"), 'Daily context date lookup cannot select the html experience-state root');
assert(!problemExperienceSource.includes("document.querySelector<HTMLElement>('[data-context-date]')"), 'Daily context date lookup never targets the root data-context-date state attribute');
assert(practice.contest.length === 379, `contest practice baseline ${practice.contest.length}`);
assert(practice.shortlist.length === 50, `shortlist practice baseline ${practice.shortlist.length}`);
assert(practice.exercises.length === 429, `practice total ${practice.exercises.length}`);
assert(practice.exercises.filter((x) => x.solutionAvailable).length === 402, 'verified-solution practice baseline');
assert(practice.topics.length === 32, `topic count ${practice.topics.length}`);
assert(practice.contest.every((x) => x.randomEligible && x.trainingEligible), 'contest mode eligibility');
assert(practice.shortlist.every((x) => x.randomEligible && x.trainingEligible), 'shortlist mode eligibility');
assert(practice.exercises.every((x) => x.route === (x.collection === 'contest' ? `/problems/${x.year}/${Number(x.numberOrSlug)}/` : `/shortlist/${x.year}/${x.numberOrSlug}/`)), 'canonical practice routes');
const publicYears = [...new Set(practice.contest.map((x) => x.year))].sort((a,b)=>a-b);
assert(JSON.stringify(publicYears) === JSON.stringify([1990,1991,1992,1993,1994,1995,1996,1997,1998,2010,2017,2018,2019,2020,2021,2022,2023,2024,2025]), 'public contest years');
const controlled = new Set(practice.topics.map((x) => x.id));
assert(practice.exercises.every((x) => x.subtopicIds.every((id) => controlled.has(id))), 'controlled subtopics only');
const byDomain = Object.fromEntries(['A','C','G','N'].map((domain) => [domain, practice.exercises.filter((x) => x.domain === domain).length]));
assert(JSON.stringify(byDomain) === JSON.stringify({A:107,C:107,G:115,N:100}), `practice domain distribution ${JSON.stringify(byDomain)}`);

const fixtureDay = days[0]!;
const fixtureDate = fixtureDay.date;
const dailyIds = new Set(Object.values(fixtureDay.problems).map((problem) => problem.id));
const seeded = (seed: number): IntegerRng => {
  let value = seed >>> 0;
  return (max) => { value = (Math.imul(value, 1664525) + 1013904223) >>> 0; return value % max; };
};

const defaultRandom = normalizeRandomFilters({ includeShortlist:false, domains:['A','C','G','N'], years:null, subtopics:[], verifiedSolutionOnly:false });
const contestMatching = filterRandomCatalog(practice.exercises, defaultRandom);
assert(contestMatching.length === 379, 'Random default contest baseline');
const withShortlist = normalizeRandomFilters({ includeShortlist:true, domains:['A','C','G','N'], years:null, subtopics:[], verifiedSolutionOnly:false });
assert(filterRandomCatalog(practice.exercises, withShortlist).length === 429, 'Random shortlist opt-in adds 50 exercises');
const geometry = filterRandomCatalog(practice.exercises, normalizeRandomFilters({ includeShortlist:false, domains:['G'], years:null, subtopics:[], verifiedSolutionOnly:false }));
assert(geometry.length > 40, 'representative Geometry pool');

simulateCycles(createRandomPool('aaaaaaaaaaaaaaaa', defaultRandom, practice.exercises, 0, seeded(1)), dailyIds, 20, seeded(2));
simulateCycles(createRandomPool('bbbbbbbbbbbbbbbb', withShortlist, practice.exercises, 0, seeded(3)), dailyIds, 20, seeded(4));
simulateCycles(makePool(geometry, seeded(5)), dailyIds, 20, seeded(6));
const mini = practice.exercises.filter((x) => !dailyIds.has(x.id)).slice(0,3);
simulateCycles(makePool(mini, seeded(7)), dailyIds, 20, seeded(8));
const single = makePool(mini.slice(0,1), seeded(9));
let singleState = single;
for(let i=0;i<5;i++){const result=nextRandomProblem(singleState,{dailyIds,dailyDate:fixtureDate,rng:seeded(10+i)});assert(result.item?.id===mini[0]!.id,'one-problem pool selection');singleState=result.pool;}
const emptyPool=makePool([],seeded(11));assert(nextRandomProblem(emptyPool,{dailyIds,dailyDate:fixtureDate,rng:seeded(12)}).item===null,'zero pool returns null');
const dailyOnly=makePool(practice.exercises.filter(x=>dailyIds.has(x.id)),seeded(13));const blocked=nextRandomProblem(dailyOnly,{dailyIds,dailyDate:fixtureDate,rng:seeded(14)});assert(blocked.item===null&&blocked.blockedByDaily,'Daily-only Random pool blocked');
const recentMini=makePool(mini,seeded(15));
const nonRecent=mini[2]!.id;
const recentResult=nextRandomProblem(recentMini,{dailyIds,recentIds:new Set([mini[0]!.id,mini[1]!.id]),dailyDate:fixtureDate,rng:seeded(16)});
assert(recentResult.item?.id===nonRecent,'Recent avoidance prefers a non-recent candidate');
const allRecentResult=nextRandomProblem(makePool(mini,seeded(17)),{dailyIds,recentIds:new Set(mini.map(x=>x.id)),dailyDate:fixtureDate,rng:seeded(18)});
assert(allRecentResult.item!==null,'Recent avoidance relaxes for narrow/all-recent pool');
const staleState={...emptyRandomState('old'),catalogFingerprint:'old'};assert(parseRandomState(staleState,practice.fingerprint)===null,'stale Random fingerprint rejected');

const trainingFilters=normalizeTrainingFilters({includeShortlist:false,domains:['A','C','G','N'],years:null,subtopics:[],verifiedSolutionOnly:false});
const trainingAvailable=filterTrainingCatalog(practice.exercises,trainingFilters,dailyIds);assert(trainingAvailable.length===375,`Practice-set effective contest pool ${trainingAvailable.length}`);
const training5=createTrainingSession(practice.exercises,trainingFilters,5,practice.fingerprint,dailyIds,{rng:seeded(20),sessionId:'cccccccccccccccc',now:1});
assert(training5.session&&training5.actual===5&&new Set(training5.session.items.map(x=>x.id)).size===5,'Practice-set preset 5');
assert(training5.session!.items.every(x=>!dailyIds.has(x.id)),'Practice set excludes current Daily');
assertBalanced(training5.session!.items, practice.exercises, '5-item all-domain balance');
assertYearDiversity(training5.session!.items, practice.exercises, 5, '5-item year diversity');
const training10=createTrainingSession(practice.exercises,trainingFilters,10,practice.fingerprint,dailyIds,{rng:seeded(21),sessionId:'dddddddddddddddd'});assert(training10.actual===10,'Practice-set preset 10');assertBalanced(training10.session!.items,practice.exercises,'10-item all-domain balance');assertYearDiversity(training10.session!.items,practice.exercises,9,'10-item year diversity');
const geometryTraining=normalizeTrainingFilters({includeShortlist:false,domains:['G'],years:null,subtopics:[],verifiedSolutionOnly:false});
const oneDomain=createTrainingSession(practice.exercises,geometryTraining,10,practice.fingerprint,dailyIds,{rng:seeded(22),sessionId:'eeeeeeeeeeeeeeee'});assert(oneDomain.session?.items.every(item=>practice.exercises.find(x=>x.id===item.id)?.domain==='G'),'one-domain practice set');
const shortlistTraining=normalizeTrainingFilters({includeShortlist:true,domains:['A','C','G','N'],years:null,subtopics:[],verifiedSolutionOnly:false});
assert(filterTrainingCatalog(practice.exercises,shortlistTraining,dailyIds).length===425,'Practice-set shortlist opt-in adds 50 subject to Daily exclusion');
const maxTraining=createTrainingSession(practice.exercises,trainingFilters,50,practice.fingerprint,dailyIds,{rng:seeded(23),sessionId:'ffffffffffffffff'});assert(maxTraining.actual===50,'Practice-set max 50');
const narrowExercises=practice.exercises.filter(x=>!dailyIds.has(x.id)).slice(0,3);const narrowCatalog=narrowExercises.map(x=>({...x,trainingEligible:true}));const capped=createTrainingSession(narrowCatalog,trainingFilters,50,practice.fingerprint,dailyIds,{rng:seeded(24),sessionId:'1111111111111111'});assert(capped.actual===3&&capped.capped,'Practice set caps to effective pool without duplication');
const oneExercise=narrowCatalog.slice(0,1);const tooNarrow=createTrainingSession(oneExercise,trainingFilters,5,practice.fingerprint,new Set(),{rng:seeded(25),sessionId:'1212121212121212'});assert(tooNarrow.session===null&&tooNarrow.actual===0,'Practice set requires at least two unique problems');
const shortageCatalog=[...practice.exercises.filter(x=>!dailyIds.has(x.id)&&x.domain==='A').slice(0,1),...practice.exercises.filter(x=>!dailyIds.has(x.id)&&x.domain==='C').slice(0,10),...practice.exercises.filter(x=>!dailyIds.has(x.id)&&x.domain==='G').slice(0,10),...practice.exercises.filter(x=>!dailyIds.has(x.id)&&x.domain==='N').slice(0,10)];const redistributed=createTrainingSession(shortageCatalog,trainingFilters,10,practice.fingerprint,new Set(),{rng:seeded(26),sessionId:'1313131313131313'});assert(redistributed.session&&redistributed.actual===10&&new Set(redistributed.session.items.map(x=>x.id)).size===10,'Practice-set domain shortfall redistributes without duplication');assert(redistributed.session.items.filter(item=>shortageCatalog.find(x=>x.id===item.id)?.domain==='A').length===1,'Practice-set scarce domain contributes its available item');
const validSession=validateTrainingSession(training10.session,practice.fingerprint);assert(validSession!==null,'valid Practice-set session accepted');
const corruptSession={...training10.session,reviewedIds:['not-a-member',training10.session!.items[0]!.id]};const sanitizedSession=validateTrainingSession(corruptSession,practice.fingerprint);assert(sanitizedSession?.reviewedIds.length===1&&sanitizedSession.reviewedIds[0]===training10.session!.items[0]!.id,'reviewed IDs bounded to session');
assert(validateTrainingSession({...training10.session,catalogFingerprint:'bad'},practice.fingerprint)===null,'stale Practice-set fingerprint rejected');

const contextRandomState={schema:2 as const,catalogFingerprint:practice.fingerprint,pools:[createRandomPool('abababababababab',defaultRandom,practice.exercises,0,seeded(30))]};
const contextProblem=contextRandomState.pools[0]!.items.find(item=>!dailyIds.has(item.id))!;
const randomContext=resolvePracticeContextData({problemId:contextProblem.id,dailyDates:[],today:fixtureDate,context:'random',date:null,poolId:contextRandomState.pools[0]!.id,sessionId:null,randomState:contextRandomState,trainingSession:null,historyReviewed:true});
assert(randomContext.experience==='random'&&randomContext.reviewState==='review','Random context resolution');
const trainingContext=resolvePracticeContextData({problemId:training10.session!.items[0]!.id,dailyDates:[],today:fixtureDate,context:'training',date:null,poolId:null,sessionId:training10.session!.sessionId,randomState:null,trainingSession:{...training10.session!,reviewedIds:[training10.session!.items[0]!.id]}});
assert(trainingContext.experience==='training'&&trainingContext.reviewState==='review','Practice-set context resolution');
const currentDailyId=Object.values(fixtureDay.problems)[0]!.id;
const lockedContext=resolvePracticeContextData({problemId:currentDailyId,dailyDates:[fixtureDate],today:fixtureDate,context:'archive',date:null,poolId:null,sessionId:null,randomState:null,trainingSession:null});
assert(lockedContext.reviewState==='locked','current Daily lock has absolute precedence');
const dailyContext=resolvePracticeContextData({problemId:currentDailyId,dailyDates:[fixtureDate],today:fixtureDate,context:'daily',date:fixtureDate,poolId:null,sessionId:null,randomState:null,trainingSession:null});
assert(dailyContext.experience==='daily'&&dailyContext.contextDate===fixtureDate&&dailyContext.reviewState==='locked','valid current Daily context remains canonical and locked');
const laterDate=days[1]!.date;
const pastDailyContext=resolvePracticeContextData({problemId:currentDailyId,dailyDates:[fixtureDate],today:laterDate,context:'daily',date:fixtureDate,poolId:null,sessionId:null,randomState:null,trainingSession:null});
assert(pastDailyContext.experience==='daily'&&pastDailyContext.reviewState==='solve','past Daily context remains canonical and reviewable by deliberate action');
const futureDailyContext=resolvePracticeContextData({problemId:currentDailyId,dailyDates:[laterDate],today:fixtureDate,context:'daily',date:laterDate,poolId:null,sessionId:null,randomState:null,trainingSession:null});
assert(futureDailyContext.experience==='archive'&&futureDailyContext.reviewState==='available','future Daily context is rejected without locking unrelated problem content');
const malformedDaily=resolvePracticeContextData({problemId:currentDailyId,dailyDates:[fixtureDate],today:fixtureDate,context:'daily',date:'2000-01-01',poolId:null,sessionId:null,randomState:null,trainingSession:null});
assert(malformedDaily.experience==='archive'&&malformedDaily.reviewState==='locked','malformed Daily context falls back while current-Daily lock survives');
const badContext=resolvePracticeContextData({problemId:contextProblem.id,dailyDates:[],today:fixtureDate,context:'random',date:null,poolId:'missing',sessionId:null,randomState:contextRandomState,trainingSession:null});
assert(badContext.experience==='archive'&&badContext.reviewState==='available','invalid practice context falls back to Archive');

let recent=emptyRecentState(practice.publicSetFingerprint);
for(let i=0;i<50;i++){const x=practice.exercises[i]!;recent=addRecent(recent,{id:x.id,route:x.route,collection:x.collection,year:x.year,numberOrSlug:x.numberOrSlug,domain:x.domain,source:i%2?'random':'training',seenAt:i});}
assert(recent.entries.length===40,'Recent cap 40');
const duplicate=recent.entries[10]!;recent=addRecent(recent,{...duplicate,seenAt:999});assert(recent.entries[0]!.id===duplicate.id&&recent.entries.filter(x=>x.id===duplicate.id).length===1,'Recent dedup/latest first');
const sanitizedRecent=sanitizeRecent({...recent,entries:[...recent.entries,{...recent.entries[0]!,id:'hidden'}]},practice.publicSetFingerprint,new Set(practice.exercises.map(x=>x.id)));assert(!sanitizedRecent.entries.some(x=>x.id==='hidden'),'Recent invalid IDs removed');

const validYears=publicYears;const validTopics=practice.topics.map(x=>x.id);
const browse=normalizeBrowseFilters({years:[2025,2005],domains:['G'],subtopics:['cyclic-geometry','not-a-topic'],verifiedSolutionOnly:true},validYears,validTopics);
assert(JSON.stringify(browse.years)==='[2025]'&&JSON.stringify(browse.domains)==='["G"]'&&JSON.stringify(browse.subtopics)==='["cyclic-geometry"]','browse crafted values sanitized');
const browseResults=filterProblemBrowse(practice.exercises,browse);assert(browseResults.length>0&&browseResults.every(x=>x.collection==='contest'&&x.year===2025&&x.domain==='G'&&x.solutionAvailable&&x.subtopicIds.includes('cyclic-geometry')),'browse filter semantics');
const query=encodeBrowseQuery(browse,validYears);assert(query===encodeBrowseQuery(browse,validYears),'browse query normalization deterministic');assert(!query.includes('2005')&&!query.includes('not-a-topic'),'hidden/invalid browse query values absent');
const emptyBrowse=normalizeBrowseFilters({years:[],domains:[],subtopics:[],verifiedSolutionOnly:false},validYears,validTopics);const emptyQuery=encodeBrowseQuery(emptyBrowse,validYears);assert(emptyQuery.includes('years=none')&&emptyQuery.includes('domains=none'),'browse empty selections are shareable');assert(filterProblemBrowse(practice.exercises,emptyBrowse).length===0,'browse empty selections return zero rows');

console.log('BW26 P3E-2 practice verification passed.');
console.log(`  Practice exercises:               ${practice.exercises.length} (contest ${practice.contest.length} / shortlist ${practice.shortlist.length})`);
console.log(`  Verified-solution exercises:      ${practice.exercises.filter(x=>x.solutionAvailable).length}`);
console.log(`  Random default / +shortlist:      379 / 429 before current-Daily exclusion`);
console.log(`  Practice-set presets / max:       5 / 10 / 50; domain-balanced when feasible`);
console.log(`  Current-Daily exclusion fixture:  ${fixtureDate} (${dailyIds.size} IDs)`);
console.log(`  Recent cap:                       40`);
console.log(`  Practice fingerprint:             ${practice.fingerprint}`);

function simulateCycles(initial:RandomPoolV2,daily:ReadonlySet<string>,completeCycles:number,rng:IntegerRng):void{
  const effective=initial.items.filter(item=>!daily.has(item.id)).length;assert(effective>1,'simulation pool needs >1 effective item');
  let pool=initial;let currentCycle=pool.cycle;let seen=new Set<string>();let previous:string|null=null;let completed=0;let safety=0;
  while(completed<completeCycles&&safety<effective*(completeCycles+2)*2){
    safety++;
    const result=nextRandomProblem(pool,{dailyIds:daily,dailyDate:fixtureDate,recentIds:new Set(),rng});assert(result.item!==null,'simulation unexpectedly blocked');
    if(result.pool.cycle!==currentCycle){assert(seen.size===effective,`cycle ${currentCycle} exhausted ${seen.size}/${effective}`);if(previous&&effective>1)assert(result.item!.id!==previous,'no immediate cycle-boundary repeat');seen=new Set();currentCycle=result.pool.cycle;completed++;}
    assert(!daily.has(result.item!.id),'Random selected current Daily');assert(!seen.has(result.item!.id),`repeat before cycle exhaustion ${result.item!.id}`);seen.add(result.item!.id);previous=result.item!.id;pool=result.pool;
  }
  assert(completed>=completeCycles,`completed ${completed}/${completeCycles} Random cycles`);
}
function makePool(exercises:PracticeExercise[],rng:IntegerRng):RandomPoolV2{return{id:'9999999999999999',signature:'fixture',filters:normalizeRandomFilters({includeShortlist:true,domains:['A','C','G','N'],years:null,subtopics:[],verifiedSolutionOnly:false}),items:exercises.map(x=>({id:x.id,route:x.route})),permutation:createPermutation(exercises.length,rng),cursor:0,cycle:0,lastSelectedId:null,updatedAt:0,dailyAvoidanceDate:null,dailyAvoidanceIds:[]};}
function assertBalanced(items:Array<{id:string}>,catalog:PracticeExercise[],message:string):void{const counts=new Map<string,number>();for(const item of items){const domain=catalog.find(x=>x.id===item.id)?.domain;assert(domain,`${message}: missing item`);counts.set(domain,(counts.get(domain)??0)+1);}const values=[...counts.values()];assert(values.length>=2,`${message}: expected multiple domains`);assert(Math.max(...values)-Math.min(...values)<=1,`${message}: ${JSON.stringify(Object.fromEntries(counts))}`);}
function assertYearDiversity(items:Array<{id:string}>,catalog:PracticeExercise[],minimum:number,message:string):void{const years=new Set(items.map(item=>catalog.find(x=>x.id===item.id)?.year).filter((year):year is number=>typeof year==='number'));assert(years.size>=minimum,`${message}: ${years.size}/${minimum}`);}
function assert(condition:unknown,message:string):asserts condition{if(!condition)throw new Error(`practice:check: ${message}`);}
