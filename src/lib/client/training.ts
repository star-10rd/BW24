import type { PracticeExercise } from '../product/practice-catalog';
import type { Domain } from '../problems/types';
import { createPermutation, randomHexId, randomIntCrypto, type IntegerRng } from './random';

export const TRAINING_STORAGE_KEY = 'bw26.practice.training.v2';
export const TRAINING_SCHEMA = 2 as const;
export const TRAINING_MAX_SIZE = 50;
const DOMAIN_ORDER: Domain[] = ['A', 'C', 'G', 'N'];

export type TrainingFilters = {
  includeShortlist: boolean;
  domains: Domain[];
  years: number[] | null;
  subtopics: string[];
  verifiedSolutionOnly: boolean;
};
export type TrainingSessionV2 = {
  schema: 2;
  sessionId: string;
  catalogFingerprint: string;
  filters: TrainingFilters;
  items: Array<{ id: string; route: string }>;
  reviewedIds: string[];
  lastProblemId: string | null;
  createdAt: number;
};
export type TrainingBuildResult = { session: TrainingSessionV2 | null; available: number; requested: number; actual: number; capped: boolean };

export function normalizeTrainingFilters(input: Partial<TrainingFilters> | null | undefined): TrainingFilters {
  const domains = Array.isArray(input?.domains)
    ? DOMAIN_ORDER.filter((domain) => input!.domains!.includes(domain))
    : [...DOMAIN_ORDER];
  const years = Array.isArray(input?.years)
    ? [...new Set(input!.years.filter((year): year is number => Number.isInteger(year) && year >= 1900 && year <= 2200))].sort((a, b) => a - b)
    : null;
  const subtopics = Array.isArray(input?.subtopics)
    ? [...new Set(input!.subtopics.filter((value): value is string => typeof value === 'string' && /^[a-z0-9-]{1,80}$/.test(value)))].sort()
    : [];
  return { includeShortlist: input?.includeShortlist === true, domains, years, subtopics, verifiedSolutionOnly: input?.verifiedSolutionOnly === true };
}

export function filterTrainingCatalog(catalog: readonly PracticeExercise[], filters: TrainingFilters, dailyIds: ReadonlySet<string> = new Set()): PracticeExercise[] {
  const f = normalizeTrainingFilters(filters);
  const domains = new Set(f.domains);
  const years = f.years ? new Set(f.years) : null;
  const topics = new Set(f.subtopics);
  return catalog.filter((exercise) => {
    if (!exercise.trainingEligible || dailyIds.has(exercise.id)) return false;
    if (exercise.collection === 'shortlist' && !f.includeShortlist) return false;
    if (!domains.has(exercise.domain)) return false;
    if (years && !years.has(exercise.year)) return false;
    if (topics.size > 0 && !exercise.subtopicIds.some((id) => topics.has(id))) return false;
    if (f.verifiedSolutionOnly && !exercise.solutionAvailable) return false;
    return true;
  });
}

export function createTrainingSession(
  catalog: readonly PracticeExercise[],
  filters: TrainingFilters,
  requestedSize: number,
  catalogFingerprint: string,
  dailyIds: ReadonlySet<string> = new Set(),
  options: { rng?: IntegerRng; now?: number; sessionId?: string; recentIds?: ReadonlySet<string> } = {},
): TrainingBuildResult {
  const matching = filterTrainingCatalog(catalog, filters, dailyIds);
  const requested = Math.max(2, Math.min(TRAINING_MAX_SIZE, Number.isFinite(requestedSize) ? Math.floor(requestedSize) : 5));
  const actual = Math.min(requested, matching.length);
  if (actual < 2) return { session: null, available: matching.length, requested, actual: 0, capped: requested > matching.length };
  const rng = options.rng ?? randomIntCrypto;
  const recent = options.recentIds ?? new Set<string>();
  const selected = selectBalanced(matching, actual, rng, recent);
  const items = selected.map(({ id, route }) => ({ id, route }));
  const session: TrainingSessionV2 = {
    schema: TRAINING_SCHEMA,
    sessionId: options.sessionId ?? randomHexId(16),
    catalogFingerprint,
    filters: normalizeTrainingFilters(filters),
    items,
    reviewedIds: [],
    lastProblemId: items[0]?.id ?? null,
    createdAt: options.now ?? Date.now(),
  };
  return { session, available: matching.length, requested, actual: items.length, capped: items.length < requested };
}

function selectBalanced(matching: PracticeExercise[], size: number, rng: IntegerRng, recent: ReadonlySet<string>): PracticeExercise[] {
  const byDomain = new Map<Domain, PracticeExercise[]>();
  for (const domain of DOMAIN_ORDER) {
    const group = matching.filter((item) => item.domain === domain);
    if (group.length) byDomain.set(domain, group);
  }
  const domains = [...byDomain.keys()];
  if (domains.length <= 1) return selectDiverse(matching, size, rng, recent, new Set<number>());

  const shuffledDomains = createPermutation(domains.length, rng).map((index) => domains[index]!);
  const base = Math.floor(size / domains.length);
  const remainder = size % domains.length;
  const selected: PracticeExercise[] = [];
  const chosen = new Set<string>();
  const usedYears = new Set<number>();
  for (let index = 0; index < shuffledDomains.length; index++) {
    const domain = shuffledDomains[index]!;
    const quota = base + (index < remainder ? 1 : 0);
    const picks = selectDiverse(byDomain.get(domain) ?? [], quota, rng, recent, usedYears);
    for (const item of picks) {
      selected.push(item);
      chosen.add(item.id);
      usedYears.add(item.year);
    }
  }
  if (selected.length < size) {
    const remaining = matching.filter((item) => !chosen.has(item.id));
    const picks = selectDiverse(remaining, size - selected.length, rng, recent, usedYears);
    for (const item of picks) {
      selected.push(item);
      usedYears.add(item.year);
    }
  }
  return interleaveDomains(selected, rng).slice(0, size);
}

function selectDiverse(items: PracticeExercise[], count: number, rng: IntegerRng, recent: ReadonlySet<string>, usedYears: Set<number>): PracticeExercise[] {
  const remaining = createPermutation(items.length, rng).map((index) => items[index]!);
  const result: PracticeExercise[] = [];
  while (result.length < count && remaining.length) {
    let index = remaining.findIndex((item) => !recent.has(item.id) && !usedYears.has(item.year));
    if (index < 0) index = remaining.findIndex((item) => !usedYears.has(item.year));
    if (index < 0) index = remaining.findIndex((item) => !recent.has(item.id));
    if (index < 0) index = 0;
    const [item] = remaining.splice(index, 1);
    if (!item) break;
    result.push(item);
    usedYears.add(item.year);
  }
  return result;
}

function interleaveDomains(items: PracticeExercise[], rng: IntegerRng): PracticeExercise[] {
  const buckets = new Map<Domain, PracticeExercise[]>();
  for (const domain of DOMAIN_ORDER) buckets.set(domain, items.filter((item) => item.domain === domain));
  const result: PracticeExercise[] = [];
  let last: Domain | null = null;
  while (result.length < items.length) {
    const candidates = DOMAIN_ORDER.filter((domain) => (buckets.get(domain)?.length ?? 0) > 0 && domain !== last);
    const fallback = DOMAIN_ORDER.filter((domain) => (buckets.get(domain)?.length ?? 0) > 0);
    const pool = candidates.length ? candidates : fallback;
    if (!pool.length) break;
    const domain = pool[rng(pool.length)]!;
    result.push(buckets.get(domain)!.shift()!);
    last = domain;
  }
  return result;
}

export function validateTrainingSession(value: unknown, fingerprint: string): TrainingSessionV2 | null {
  if (!value || typeof value !== 'object') return null;
  const session = value as Partial<TrainingSessionV2>;
  if (session.schema !== TRAINING_SCHEMA || session.catalogFingerprint !== fingerprint || typeof session.sessionId !== 'string' || !/^[a-f0-9]{16,64}$/.test(session.sessionId)) return null;
  if (!Array.isArray(session.items) || session.items.length < 1 || session.items.length > TRAINING_MAX_SIZE || !session.items.every((item) => item && typeof item.id === 'string' && typeof item.route === 'string' && item.route.startsWith('/'))) return null;
  if (new Set(session.items.map((item) => item.id)).size !== session.items.length) return null;
  const itemIds = new Set(session.items.map((item) => item.id));
  const reviewedIds = Array.isArray(session.reviewedIds) ? [...new Set(session.reviewedIds.filter((id): id is string => typeof id === 'string' && itemIds.has(id)))].slice(0, session.items.length) : [];
  const lastProblemId = typeof session.lastProblemId === 'string' && itemIds.has(session.lastProblemId) ? session.lastProblemId : session.items[0]!.id;
  return {
    schema: TRAINING_SCHEMA,
    sessionId: session.sessionId,
    catalogFingerprint: fingerprint,
    filters: normalizeTrainingFilters(session.filters as TrainingFilters),
    items: session.items.map((item) => ({ id: item.id, route: item.route })),
    reviewedIds,
    lastProblemId,
    createdAt: Number.isFinite(session.createdAt) ? session.createdAt! : Date.now(),
  };
}

export function markTrainingReviewed(session: TrainingSessionV2, problemId: string): TrainingSessionV2 {
  if (!session.items.some((item) => item.id === problemId)) return session;
  return { ...session, reviewedIds: [...new Set([...session.reviewedIds, problemId])].slice(0, session.items.length), lastProblemId: problemId };
}
