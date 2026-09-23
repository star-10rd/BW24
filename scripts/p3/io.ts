import { access, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export const p3Paths = {
  root: 'data/p3',
  schemaVersion: 'data/p3/schema-version.json',
  sourceRegistry: 'data/p3/sources/registry.jsonl',
  mathnetLock: 'data/p3/sources/mathnet-v0/lock.json',
  finalYearPolicies: 'data/p3/identity/final-year-policies.json',
  appearances: 'data/p3/identity/appearances.jsonl',
  versions: 'data/p3/identity/versions.jsonl',
  versionRelations: 'data/p3/identity/version-relations.jsonl',
  sourceLinks: 'data/p3/curation/source-links.jsonl',
  contentSelections: 'data/p3/curation/content-selections.jsonl',
  assetBindings: 'data/p3/curation/asset-bindings.jsonl',
  reviews: 'data/p3/research/reviews.jsonl',
  researchState: 'data/p3/research/research-state.json',
} as const;

export async function assertBw26RepoRoot(root = process.cwd()): Promise<void> {
  const pkg = await readJson<{ name?: string }>(resolve(root, 'package.json'));
  if (pkg.name !== 'bw26') throw new Error(`Expected BW26 package.json at ${root}`);
  await access(resolve(root, 'src/lib/problems/types.ts'));
}

export async function readJson<T = unknown>(path: string): Promise<T> {
  return JSON.parse(await readFile(path, 'utf8')) as T;
}

export async function readJsonl<T = unknown>(path: string): Promise<T[]> {
  const source = await readFile(path, 'utf8');
  const records: T[] = [];
  for (const [index, raw] of source.split(/\r?\n/).entries()) {
    const line = raw.trim();
    if (!line) continue;
    try {
      records.push(JSON.parse(line) as T);
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error);
      throw new Error(`${path}:${index + 1}: invalid JSONL: ${reason}`);
    }
  }
  return records;
}

export async function writeJson(path: string, value: unknown): Promise<void> {
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

export async function writeJsonl(path: string, values: readonly unknown[]): Promise<void> {
  const text = values.length > 0 ? `${values.map((value) => JSON.stringify(value)).join('\n')}\n` : '';
  await writeFile(path, text, 'utf8');
}
