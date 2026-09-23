import { resolve } from 'node:path';
import { assertBw26RepoRoot, p3Paths, readJson } from './io';
import { loadCanonicalState } from './state';

const root = process.cwd();
await assertBw26RepoRoot(root);
const state = await loadCanonicalState(root);
const research = await readJson<any>(resolve(root, p3Paths.researchState));

const openReviews = state.reviews.filter((review: any) => review?.status === 'open').length;
const resolvedReviews = state.reviews.filter((review: any) => review?.status === 'resolved').length;

console.log('BW26 P3A curation report');
console.log('-------------------------');
console.log(`Canonical sources:        ${state.sources.length}`);
console.log(`Final-year policies:      ${state.finalYearPolicies.length}`);
console.log(`Accepted appearances:     ${state.appearances.length}`);
console.log(`Accepted versions:        ${state.versions.length}`);
console.log(`Accepted source links:    ${state.sourceLinks.length}`);
console.log(`Content selections:       ${state.contentSelections.length}`);
console.log(`Asset bindings:           ${state.assetBindings.length}`);
console.log(`Open reviews:             ${openReviews}`);
console.log(`Resolved reviews:         ${resolvedReviews}`);

if (research?.finalManifest) {
  console.log('');
  console.log('Research checkpoint');
  console.log(`Final years:              ${research.finalManifest.years ?? 'unknown'}`);
  console.log(`Official appearances:     ${research.finalManifest.officialAppearances ?? 'unknown'}`);
  console.log(`Manifest status:          ${research.finalManifest.status ?? 'unknown'}`);
}
if (research?.mathnet) {
  console.log(`MathNet rows:             ${research.mathnet.rows ?? 'unknown'}`);
  console.log(`Final-related appearances:${String(research.mathnet.finalRelatedRowsByAppearance ?? 'unknown').padStart(6)}`);
  console.log(`No known related row:     ${research.mathnet.finalAppearancesWithNoKnownRelatedRow ?? 'unknown'}`);
}
