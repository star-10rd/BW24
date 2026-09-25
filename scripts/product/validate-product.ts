import { getProductCatalog } from '../../src/lib/product/catalog';
import { getPracticeCatalog } from '../../src/lib/product/practice-catalog';
import { getAopsYearMap } from '../../src/lib/product/references';
import { getProblemResults } from '../../src/lib/product/results';

const [catalog, practice, aops] = await Promise.all([getProductCatalog(), getPracticeCatalog(), getAopsYearMap()]);
if(catalog.finals.length!==379||catalog.shortlist.length!==50||catalog.inactiveFinalIds.length!==340)throw new Error('product projection cardinality mismatch');
for(const p of catalog.finals){ if(!aops.has(p.year))throw new Error(`${p.key}: missing AoPS year reference`); }
const daily=catalog.finals.filter(x=>x.dailyEligible); const byDomain=Object.fromEntries(['A','C','G','N'].map(d=>[d,daily.filter(x=>x.domain===d).length])); if(JSON.stringify(byDomain)!==JSON.stringify({A:45,C:45,G:45,N:45}))throw new Error(`Daily domains mismatch ${JSON.stringify(byDomain)}`);
let results=0; for(const p of catalog.finals) if(await getProblemResults(p.year,Number(p.number)))results++; if(results!==340)throw new Error(`expected 340 result-backed public finals; got ${results}`);
if(practice.contest.length!==379||practice.shortlist.length!==50||practice.exercises.length!==429)throw new Error('practice catalogue cardinality mismatch');
const solutionPractice=practice.exercises.filter(x=>x.solutionAvailable).length;if(solutionPractice!==402)throw new Error(`expected 402 verified-solution practice exercises; got ${solutionPractice}`);
if(!/^[a-f0-9]{64}$/.test(practice.fingerprint)||!/^[a-f0-9]{64}$/.test(practice.publicSetFingerprint))throw new Error('invalid practice catalogue fingerprint');
if(practice.exercises.some(x=>!x.route.startsWith('/')||x.route.includes('..')))throw new Error('invalid practice route');
console.log('BW26 product projection verification passed.'); console.log(JSON.stringify({websiteFinals:379,inactiveFinals:340,shortlistExercises:50,randomFinals:catalog.finals.filter(x=>x.randomEligible).length,trainingFinals:catalog.finals.filter(x=>x.trainingEligible).length,dailyFinals:daily.length,dailyByDomain:byDomain,aopsBackedFinals:379,resultBackedFinals:results,practiceExercises:practice.exercises.length,verifiedSolutionPracticeExercises:solutionPractice,practiceFingerprint:practice.fingerprint},null,2));
