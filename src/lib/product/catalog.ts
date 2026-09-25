import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { AppearanceRecord, AssetBindingRecord } from '../../../scripts/corpus/schema';
import { loadPublicCanonicalState } from '../corpus/load';
import { loadProductPolicy, yearIsWebsitePublic } from './policy';
import type { Domain } from '../problems/types';

export type ProductSolutionSource = { id: string; language: 'en'; path: string; compatibility: 'native'|'verified-compatible'|'adapted' };
export type ProductProblem = {
  key: string;
  kind: 'final' | 'shortlist';
  versionId: string;
  year: number;
  number: string;
  slug: string;
  domain: Domain;
  subtopicIds: string[];
  statementPath: string;
  solutionsStatus: 'verified' | 'unavailable';
  solutions: ProductSolutionSource[];
  assetBindings: AssetBindingRecord[];
  website: true;
  randomEligible: boolean;
  trainingEligible: boolean;
  dailyEligible: boolean;
};

export type ProductCatalog = {
  finals: ProductProblem[];
  shortlist: ProductProblem[];
  allExercises: ProductProblem[];
  inactiveFinalIds: string[];
};

let cached: Promise<ProductCatalog> | null = null;
export function getProductCatalog(root = process.cwd()): Promise<ProductCatalog> {
  if (root !== process.cwd()) return build(root);
  cached ??= build(root);
  return cached;
}

async function build(root: string): Promise<ProductCatalog> {
  const [state, policy] = await Promise.all([loadPublicCanonicalState(root), loadProductPolicy(root)]);
  const appearanceById = new Map(state.appearances.map((x) => [x.id, x]));
  const versionByAppearance = new Map<string, typeof state.versions[number]>();
  for (const version of state.versions) for (const id of version.appearanceIds) versionByAppearance.set(id, version);
  const selectionByVersion = new Map(state.contentSelections.map((x) => [x.versionId, x]));
  const classificationByVersion = new Map(state.classifications.map((x) => [x.versionId, x]));
  const include = new Set(policy.contest.websiteInclude);
  const exclude = new Set(policy.contest.websiteExclude);
  const randomExclude = new Set(policy.contest.random.exclude);
  const trainingExclude = new Set(policy.contest.training.exclude);
  const dailyExclude = new Set(policy.contest.daily.exclude);
  const dailyYears = new Set(policy.contest.daily.years);

  const allFinals = state.appearances.filter((x): x is Extract<AppearanceRecord,{series:'BW'}> => x.series === 'BW')
    .sort((a,b) => a.year-b.year || Number(a.number)-Number(b.number));
  const allFinalIds = new Set(allFinals.map((x) => x.id));

  for (const [label, ids] of [
    ['websiteInclude', include],
    ['websiteExclude', exclude],
    ['random.exclude', randomExclude],
    ['training.exclude', trainingExclude],
    ['daily.exclude', dailyExclude],
  ] as const) {
    for (const id of ids) {
      if (!allFinalIds.has(id)) throw new Error(`${label}: unknown final appearance ID ${id}`);
    }
  }
  for (const id of include) {
    if (exclude.has(id)) throw new Error(`${id}: cannot appear in both websiteInclude and websiteExclude`);
  }

  const effectiveWebsiteIds = new Set(
    allFinals
      .filter((appearance) => (yearIsWebsitePublic(appearance.year, policy) || include.has(appearance.id)) && !exclude.has(appearance.id))
      .map((appearance) => appearance.id),
  );
  for (const [label, ids] of [
    ['random.exclude', randomExclude],
    ['training.exclude', trainingExclude],
  ] as const) {
    for (const id of ids) {
      if (!effectiveWebsiteIds.has(id)) throw new Error(`${label}: ${id} is not website-public and would be a no-op`);
    }
  }
  for (const id of dailyExclude) {
    const appearance = allFinals.find((x) => x.id === id)!;
    if (!effectiveWebsiteIds.has(id) || !dailyYears.has(appearance.year)) {
      throw new Error(`daily.exclude: ${id} is not in the effective Daily candidate pool and would be a no-op`);
    }
  }

  const finals: ProductProblem[] = [];
  const inactiveFinalIds: string[] = [];
  for (const appearance of allFinals) {
    const active = (yearIsWebsitePublic(appearance.year, policy) || include.has(appearance.id)) && !exclude.has(appearance.id);
    if (!active) { inactiveFinalIds.push(appearance.id); continue; }
    finals.push(toProductProblem(appearance, 'final'));
  }

  const shortlist: ProductProblem[] = [];
  for (const publicEntry of state.publicShortlistOnly) {
    const appearance = appearanceById.get(publicEntry.appearanceId);
    if (!appearance || appearance.series !== 'BW-CAND') throw new Error(`${publicEntry.appearanceId}: invalid public shortlist appearance`);
    const selection = selectionByVersion.get(publicEntry.versionId);
    if (!selection || 'status' in selection.statement) continue;
    shortlist.push(toProductProblem(appearance, 'shortlist', publicEntry.versionId));
  }
  shortlist.sort((a,b)=>a.year-b.year || a.slug.localeCompare(b.slug));

  if (finals.length !== 379) throw new Error(`expected 379 website finals; got ${finals.length}`);
  if (inactiveFinalIds.length !== 340) throw new Error(`expected 340 inactive finals; got ${inactiveFinalIds.length}`);
  if (shortlist.length !== 50) throw new Error(`expected 50 readable shortlist exercises; got ${shortlist.length}`);

  return { finals, shortlist, allExercises: [...finals, ...shortlist], inactiveFinalIds };

  function toProductProblem(appearance: AppearanceRecord, kind: 'final'|'shortlist', knownVersionId?: string): ProductProblem {
    const version = knownVersionId ? state.versions.find((x)=>x.id===knownVersionId) : versionByAppearance.get(appearance.id);
    if (!version) throw new Error(`${appearance.id}: no canonical Version`);
    const selection = selectionByVersion.get(version.id);
    if (!selection || 'status' in selection.statement) throw new Error(`${appearance.id}: public problem lacks selected statement`);
    if (selection.statement.ref.kind !== 'curated-file') throw new Error(`${appearance.id}: P3E requires curated statement selection`);
    const classification = classificationByVersion.get(version.id);
    if (!classification) throw new Error(`${appearance.id}: missing publication classification`);
    const solutionsStatus = selection.solutions.status;
    if (solutionsStatus === 'unresolved') throw new Error(`${appearance.id}: unresolved solutions cannot enter P3E`);
    const solutions = selection.solutions.items.map((item) => {
      if (item.ref.kind !== 'curated-file') throw new Error(`${appearance.id}/${item.id}: P3E requires curated solution selection`);
      return { id: item.id, language: item.language, path: item.ref.path, compatibility: item.compatibility };
    });
    const key = appearance.id;
    const final = kind === 'final';
    return {
      key, kind, versionId: version.id, year: appearance.year, number: appearance.number,
      slug: final ? String(Number(appearance.number)) : appearance.number,
      domain: classification.primaryDomain,
      subtopicIds: [...classification.subtopics],
      statementPath: selection.statement.ref.path,
      solutionsStatus,
      solutions,
      assetBindings: state.assetBindings.filter((x)=>x.versionId===version.id),
      website: true,
      randomEligible: final ? !randomExclude.has(key) : policy.shortlistOnly.random,
      trainingEligible: final ? !trainingExclude.has(key) : policy.shortlistOnly.training,
      dailyEligible: final && dailyYears.has(appearance.year) && !dailyExclude.has(key),
    };
  }
}

export async function readPublicationMarkdown(path: string, root = process.cwd()): Promise<string> {
  return readFile(resolve(root, path), 'utf8');
}

export function finalRoute(problem: ProductProblem): string {
  if (problem.kind !== 'final') throw new Error(`${problem.key}: not a final problem`);
  return `/problems/${problem.year}/${Number(problem.number)}/`;
}
export function shortlistRoute(problem: ProductProblem): string {
  if (problem.kind !== 'shortlist') throw new Error(`${problem.key}: not a shortlist problem`);
  return `/shortlist/${problem.year}/${problem.slug}/`;
}
export function exerciseRoute(problem: ProductProblem): string { return problem.kind === 'final' ? finalRoute(problem) : shortlistRoute(problem); }
