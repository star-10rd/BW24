import { resolve } from 'node:path';
import { appearanceSortKey, sourceRefKey } from './ids';
import { assertBw26RepoRoot, corpusPaths, readJson, readJsonl, writeJson, writeJsonl } from './io';
import type { AppearanceRecord, AssetBindingRecord, SourceLinkRecord } from './schema';

function stable(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, item]) => [key, stable(item)]));
  }
  return value;
}

async function formatJsonl(path: string, sortKey: (value: any) => string): Promise<void> {
  const values = await readJsonl<any>(path);
  values.sort((a, b) => sortKey(a).localeCompare(sortKey(b), 'en'));
  await writeJsonl(path, values.map(stable));
}

const root = process.cwd();
await assertBw26RepoRoot(root);

await formatJsonl(resolve(root, corpusPaths.sourceRegistry), (value) => value.id);
await formatJsonl(resolve(root, corpusPaths.candidateSets), (value) => value.id);
await formatJsonl(resolve(root, corpusPaths.candidateSelection), (value) => value.appearanceId);
await formatJsonl(resolve(root, corpusPaths.publicShortlistOnly), (value) => value.appearanceId);
await formatJsonl(resolve(root, corpusPaths.appearances), (value: AppearanceRecord) => appearanceSortKey(value));
await formatJsonl(resolve(root, corpusPaths.versions), (value) => value.id);
await formatJsonl(resolve(root, corpusPaths.versionRelations), (value) => `${value.fromVersionId}|${value.toVersionId}`);
await formatJsonl(resolve(root, corpusPaths.sourceLinks), (value: SourceLinkRecord) => `${sourceRefKey(value.source)}|${value.versionId}`);
await formatJsonl(resolve(root, corpusPaths.contentSelections), (value) => value.versionId);
await formatJsonl(resolve(root, corpusPaths.assetBindings), (value: AssetBindingRecord) => `${value.versionId}|${JSON.stringify(value.owner)}|${value.sourceKey}`);
await formatJsonl(resolve(root, corpusPaths.reviews), (value) => value.id);

const policies = await readJson<any[]>(resolve(root, corpusPaths.finalYearPolicies));
policies.sort((a, b) => a.year - b.year);
await writeJson(resolve(root, corpusPaths.finalYearPolicies), stable(policies));
const candidateCoverage = await readJson<any[]>(resolve(root, corpusPaths.candidateYearCoverage)); candidateCoverage.sort((a,b)=>a.year-b.year); await writeJson(resolve(root, corpusPaths.candidateYearCoverage), stable(candidateCoverage));
await writeJson(resolve(root, corpusPaths.schemaVersion), stable(await readJson(resolve(root, corpusPaths.schemaVersion))));
await writeJson(resolve(root, corpusPaths.mathnetLock), stable(await readJson(resolve(root, corpusPaths.mathnetLock))));

console.log('BW26 corpus canonical files formatted.');
