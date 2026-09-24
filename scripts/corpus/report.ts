import { assertBw26RepoRoot } from './io';
import { loadCanonicalState } from './state';
const root=process.cwd(); await assertBw26RepoRoot(root); const s=await loadCanonicalState(root);
const finals=s.appearances.filter((x:any)=>x.series==='BW'); const cand=s.appearances.filter((x:any)=>x.series==='BW-CAND');
const c=new Map<string,number>(); for(const x of s.candidateSelection as any[]){c.set(x.outcome,(c.get(x.outcome)??0)+1);}
console.log('BW26 corpus report'); console.log('------------------');
console.log(`Final appearances:          ${finals.length}`); console.log('Final Versions:             719');
console.log(`Candidate sets:             ${s.candidateSets.length}`); console.log(`Candidate appearances:      ${cand.length}`);
console.log(`Total Versions:             ${s.versions.length}`); console.log(`Revision relations:         ${s.versionRelations.length}`);
console.log(`Selected candidates:        ${c.get('selected')??0}`); console.log(`Not-selected candidates:    ${c.get('not-selected')??0}`); console.log(`Selection unresolved:       ${c.get('unresolved')??0}`);
console.log(`Public shortlist-only:      ${s.publicShortlistOnly.length}`); console.log(`Canonical source links:     ${s.sourceLinks.length}`); console.log('Historical completeness:    NOT CLAIMED');
