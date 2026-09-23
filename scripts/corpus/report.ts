import { resolve } from 'node:path';
import { assertBw26RepoRoot, corpusPaths, readJson } from './io';
import { loadCanonicalState } from './state';
const root=process.cwd(); await assertBw26RepoRoot(root); const state=await loadCanonicalState(root); const report=await readJson<any>(resolve(root,corpusPaths.reconciliationReport));
const arg=process.argv.slice(2); const yi=arg.indexOf('--year'); const year=yi>=0?Number(arg[yi+1]):undefined;
console.log('BW26 corpus reconciliation report'); console.log('--------------------------------');
console.log(`Final appearances:        ${state.appearances.length}`); console.log(`Final Versions:           ${state.versions.length}`); console.log(`MathNet source links:     ${state.sourceLinks.length}`); console.log(`SAME:                     ${report.same}`); console.log(`RELATED:                  ${report.related}`); console.log(`NONE:                     ${report.none}`); console.log(`OPEN:                     ${report.open}`);
if(year!==undefined){ const y=report.years.find((x:any)=>x.year===year); if(!y) throw new Error(`No report for year ${year}`); console.log(''); console.log(`${year}: FINAL ${y.finals} / SAME ${y.same} / RELATED ${y.related} / NONE ${y.none} / OPEN ${y.open}`); }
