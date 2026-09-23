import { resolve } from 'node:path';
import { appearanceSortKey, sourceRefKey } from './ids';
import { assertBw26RepoRoot, p3Paths, readJson, readJsonl, writeJson, writeJsonl } from './io';
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

await formatJsonl(resolve(root, p3Paths.sourceRegistry), (value) => value.id);
await formatJsonl(resolve(root, p3Paths.appearances), (value: AppearanceRecord) => appearanceSortKey(value));
await formatJsonl(resolve(root, p3Paths.versions), (value) => value.id);
await formatJsonl(resolve(root, p3Paths.versionRelations), (value) => `${value.fromVersionId}|${value.toVersionId}`);
await formatJsonl(resolve(root, p3Paths.sourceLinks), (value: SourceLinkRecord) => `${sourceRefKey(value.source)}|${value.versionId}`);
await formatJsonl(resolve(root, p3Paths.contentSelections), (value) => value.versionId);
await formatJsonl(resolve(root, p3Paths.assetBindings), (value: AssetBindingRecord) => `${value.versionId}|${JSON.stringify(value.owner)}|${value.sourceKey}`);
await formatJsonl(resolve(root, p3Paths.reviews), (value) => value.id);

const policies = await readJson<any[]>(resolve(root, p3Paths.finalYearPolicies));
policies.sort((a, b) => a.year - b.year);
await writeJson(resolve(root, p3Paths.finalYearPolicies), stable(policies));
await writeJson(resolve(root, p3Paths.schemaVersion), stable(await readJson(resolve(root, p3Paths.schemaVersion))));
await writeJson(resolve(root, p3Paths.mathnetLock), stable(await readJson(resolve(root, p3Paths.mathnetLock))));

console.log('BW26 P3A canonical files formatted.');
