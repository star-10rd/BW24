import { resolve } from 'node:path';
import { assertBw26RepoRoot, p3Paths, readJson } from './io';
import { runFoundationStressTests } from './fixtures/foundation';
import { loadCanonicalState } from './state';
import { validateCanonicalState } from './validation';

const root = process.cwd();
await assertBw26RepoRoot(root);

const state = await loadCanonicalState(root);
await validateCanonicalState(state, {
  repoRoot: root,
  checkCuratedFiles: true,
  enforceFinalPolicyCompleteness: true,
});

for (const name of [
  'research-state.json',
  'final-coverage-1990-2025.json',
  'final-audit-2011-2019.json',
  'final-audit-2020-2025.json',
  'source-blocks.json',
  'shortlist-candidate-queue-2011-2023.json',
]) {
  const value = await readJson(resolve(root, 'data/p3/research', name));
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`data/p3/research/${name} must contain a JSON object.`);
  }
}

await runFoundationStressTests();

const research = await readJson<Record<string, unknown>>(resolve(root, p3Paths.researchState));
console.log(`BW26 P3A validation passed (research checkpoint: ${String(research.checkpoint ?? 'present')}).`);
