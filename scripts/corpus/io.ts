import { access, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export const corpusPaths = {
  root: 'data/corpus',
  schemaVersion: 'data/corpus/schema-version.json',
  sourceRegistry: 'data/corpus/sources/registry.jsonl',
  mathnetLock: 'data/corpus/sources/mathnet-v0/lock.json',
  finalYearPolicies: 'data/corpus/identity/final-year-policies.json',
  candidateSets: 'data/corpus/identity/candidate-sets.jsonl',
  candidateYearCoverage: 'data/corpus/identity/candidate-year-coverage.json',
  candidateSelection: 'data/corpus/identity/candidate-selection.jsonl',
  publicShortlistOnly: 'data/corpus/identity/public-shortlist-only.jsonl',
  appearances: 'data/corpus/identity/appearances.jsonl',
  versions: 'data/corpus/identity/versions.jsonl',
  versionRelations: 'data/corpus/identity/version-relations.jsonl',
  sourceLinks: 'data/corpus/curation/source-links.jsonl',
  contentSelections: 'data/corpus/curation/content-selections.jsonl',
  assetBindings: 'data/corpus/curation/asset-bindings.jsonl',
  taxonomy: 'data/corpus/curation/taxonomy.json',
  classifications: 'data/corpus/curation/classifications.jsonl',
  reviews: 'data/corpus/research/reviews.jsonl',
  installationManifest: 'data/corpus/research/installation-manifest.json',
  reconciliationReport: 'data/corpus/research/reconciliation-report.json',
  finalReconciliation: 'data/corpus/research/final-reconciliation.jsonl',
  shortlistHandoff: 'data/corpus/research/shortlist-handoff.jsonl',
  semanticAudit: 'data/corpus/research/semantic-audit-resolutions.jsonl',
  earlyDomainReview: 'data/corpus/research/early-domain-review-1990-1991.jsonl',
  mathnetItems: 'data/corpus/sources/mathnet-v0/items.jsonl',
  mathnetSolutions: 'data/corpus/sources/mathnet-v0/solution-index.jsonl',
  mathnetImages: 'data/corpus/sources/mathnet-v0/image-index.jsonl',
  mathnetSummary: 'data/corpus/sources/mathnet-v0/inventory-summary.json',
} as const;

export async function assertBw26RepoRoot(root = process.cwd()): Promise<void> {
  const pkg = await readJson<{ name?: string }>(resolve(root, 'package.json'));
  if (pkg.name !== 'bw26') throw new Error(`Expected BW26 package.json at ${root}`);
  await access(resolve(root, 'src/lib/problems/types.ts'));
}
export async function readJson<T = unknown>(path: string): Promise<T> { return JSON.parse(await readFile(path, 'utf8')) as T; }
export async function readJsonl<T = unknown>(path: string): Promise<T[]> {
  const source = await readFile(path, 'utf8'); const records:T[]=[];
  for (const [index, raw] of source.split(/\r?\n/).entries()) { const line=raw.trim(); if (!line) continue; try { records.push(JSON.parse(line) as T); } catch (error) { const reason=error instanceof Error?error.message:String(error); throw new Error(`${path}:${index+1}: invalid JSONL: ${reason}`); } }
  return records;
}
export async function writeJson(path:string,value:unknown):Promise<void>{ await writeFile(path,`${JSON.stringify(value,null,2)}\n`,'utf8'); }
export async function writeJsonl(path:string,values:readonly unknown[]):Promise<void>{ const text=values.length?`${values.map(v=>JSON.stringify(v)).join('\n')}\n`:''; await writeFile(path,text,'utf8'); }
