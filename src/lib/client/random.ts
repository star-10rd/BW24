import type { PracticeExercise } from '../product/practice-catalog';
import type { Domain } from '../problems/types';

export const RANDOM_STORAGE_KEY = 'bw26.practice.random.v2';
export const RANDOM_SCHEMA = 2 as const;
export const RANDOM_POOL_LIMIT = 8;
const DOMAIN_ORDER: Domain[] = ['A', 'C', 'G', 'N'];

export type RandomFilters = {
  includeShortlist: boolean;
  domains: Domain[];
  years: number[] | null;
  subtopics: string[];
  verifiedSolutionOnly: boolean;
};
export type RandomPoolItem = { id: string; route: string };
export type RandomPoolV2 = {
  id: string;
  signature: string;
  filters: RandomFilters;
  items: RandomPoolItem[];
  permutation: number[];
  cursor: number;
  cycle: number;
  lastSelectedId: string | null;
  updatedAt: number;
  dailyAvoidanceDate: string | null;
  dailyAvoidanceIds: string[];
};
export type RandomStateV2 = { schema: 2; catalogFingerprint: string; pools: RandomPoolV2[] };
export type IntegerRng = (maxExclusive: number) => number;

export function normalizeRandomFilters(input: Partial<RandomFilters> | null | undefined): RandomFilters {
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

export function makeRandomFilterSignature(filters: RandomFilters): string {
  const normalized = normalizeRandomFilters(filters);
  return JSON.stringify({
    l: normalized.includeShortlist,
    d: normalized.domains,
    y: normalized.years,
    t: normalized.subtopics,
    s: normalized.verifiedSolutionOnly,
  });
}

export function filterRandomCatalog(catalog: readonly PracticeExercise[], filters: RandomFilters): PracticeExercise[] {
  const f = normalizeRandomFilters(filters);
  const domains = new Set(f.domains);
  const years = f.years ? new Set(f.years) : null;
  const topics = new Set(f.subtopics);
  return catalog.filter((exercise) => {
    if (!exercise.randomEligible) return false;
    if (exercise.collection === 'shortlist' && !f.includeShortlist) return false;
    if (!domains.has(exercise.domain)) return false;
    if (years && !years.has(exercise.year)) return false;
    if (topics.size > 0 && !exercise.subtopicIds.some((id) => topics.has(id))) return false;
    if (f.verifiedSolutionOnly && !exercise.solutionAvailable) return false;
    return true;
  });
}

export function randomIntCrypto(maxExclusive: number): number {
  if (!Number.isSafeInteger(maxExclusive) || maxExclusive <= 0) throw new Error('maxExclusive must be a positive safe integer');
  const limit = Math.floor(0x1_0000_0000 / maxExclusive) * maxExclusive;
  const array = new Uint32Array(1);
  do { globalThis.crypto.getRandomValues(array); } while (array[0]! >= limit);
  return array[0]! % maxExclusive;
}

export function randomHexId(bytes = 16): string {
  if (!Number.isInteger(bytes) || bytes < 8 || bytes > 32) throw new Error('invalid random ID byte length');
  const buffer = new Uint8Array(bytes);
  globalThis.crypto.getRandomValues(buffer);
  return [...buffer].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

export function createPermutation(length: number, rng: IntegerRng = randomIntCrypto): number[] {
  if (!Number.isInteger(length) || length < 0 || length > 10000) throw new Error('invalid permutation length');
  const result = Array.from({ length }, (_, index) => index);
  for (let index = result.length - 1; index > 0; index--) {
    const swap = rng(index + 1);
    if (!Number.isInteger(swap) || swap < 0 || swap > index) throw new Error('RNG returned an invalid index');
    [result[index], result[swap]] = [result[swap]!, result[index]!];
  }
  return result;
}

export function createRandomPool(id: string, filters: RandomFilters, exercises: readonly PracticeExercise[], now = Date.now(), rng: IntegerRng = randomIntCrypto): RandomPoolV2 {
  const normalized = normalizeRandomFilters(filters);
  const matching = filterRandomCatalog(exercises, normalized);
  return {
    id,
    signature: makeRandomFilterSignature(normalized),
    filters: normalized,
    items: matching.map(({ id: itemId, route }) => ({ id: itemId, route })),
    permutation: createPermutation(matching.length, rng),
    cursor: 0,
    cycle: 0,
    lastSelectedId: null,
    updatedAt: now,
    dailyAvoidanceDate: null,
    dailyAvoidanceIds: [],
  };
}

export function startNextRandomCycle(pool: RandomPoolV2, rng: IntegerRng = randomIntCrypto): RandomPoolV2 {
  const next = clonePool(pool);
  next.permutation = createPermutation(next.items.length, rng);
  next.cursor = 0;
  next.cycle += 1;
  if (next.items.length > 1 && next.lastSelectedId) {
    const first = next.permutation[0];
    if (first !== undefined && next.items[first]?.id === next.lastSelectedId) {
      const replacementAt = next.permutation.findIndex((itemIndex, position) => position > 0 && next.items[itemIndex]?.id !== next.lastSelectedId);
      if (replacementAt > 0) [next.permutation[0], next.permutation[replacementAt]] = [next.permutation[replacementAt]!, next.permutation[0]!];
    }
  }
  return next;
}

export type NextRandomResult = { pool: RandomPoolV2; item: RandomPoolItem | null; blockedByDaily: boolean };
export function nextRandomProblem(
  source: RandomPoolV2,
  options: { recentIds?: ReadonlySet<string>; dailyIds?: ReadonlySet<string>; dailyDate?: string; now?: number; rng?: IntegerRng } = {},
): NextRandomResult {
  const recent = options.recentIds ?? new Set<string>();
  const daily = options.dailyIds ?? new Set<string>();
  const rng = options.rng ?? randomIntCrypto;
  let pool = clonePool(source);
  pool.dailyAvoidanceDate = options.dailyDate ?? null;
  pool.dailyAvoidanceIds = [...daily].sort();
  pool.updatedAt = options.now ?? Date.now();
  if (pool.items.length === 0) return { pool, item: null, blockedByDaily: false };
  if (pool.items.every((item) => daily.has(item.id))) return { pool, item: null, blockedByDaily: true };

  for (let attempt = 0; attempt < 2; attempt++) {
    const avoidBoundaryId = pool.cursor === 0 && pool.items.some((item) => !daily.has(item.id) && item.id !== pool.lastSelectedId) ? pool.lastSelectedId : null;
    const preferredPosition = findCandidatePosition(pool, daily, recent, true, avoidBoundaryId);
    const nonRecentFallback = preferredPosition >= 0 ? preferredPosition : findCandidatePosition(pool, daily, recent, false, avoidBoundaryId);
    const fallbackPosition = nonRecentFallback >= 0 ? nonRecentFallback : findCandidatePosition(pool, daily, recent, false, null);
    if (fallbackPosition >= 0) {
      [pool.permutation[pool.cursor], pool.permutation[fallbackPosition]] = [pool.permutation[fallbackPosition]!, pool.permutation[pool.cursor]!];
      const itemIndex = pool.permutation[pool.cursor]!;
      const item = pool.items[itemIndex]!;
      pool.cursor += 1;
      pool.lastSelectedId = item.id;
      return { pool, item, blockedByDaily: false };
    }
    pool = startNextRandomCycle(pool, rng);
    pool.dailyAvoidanceDate = options.dailyDate ?? null;
    pool.dailyAvoidanceIds = [...daily].sort();
    pool.updatedAt = options.now ?? Date.now();
  }
  return { pool, item: null, blockedByDaily: true };
}

function findCandidatePosition(pool: RandomPoolV2, daily: ReadonlySet<string>, recent: ReadonlySet<string>, requireNotRecent: boolean, avoidId: string | null): number {
  for (let position = pool.cursor; position < pool.permutation.length; position++) {
    const item = pool.items[pool.permutation[position]!]!;
    if (daily.has(item.id) || (avoidId && item.id === avoidId)) continue;
    if (requireNotRecent && recent.has(item.id)) continue;
    return position;
  }
  return -1;
}

export function parseRandomState(value: unknown, fingerprint: string): RandomStateV2 | null {
  if (!value || typeof value !== 'object') return null;
  const state = value as Partial<RandomStateV2>;
  if (state.schema !== RANDOM_SCHEMA || state.catalogFingerprint !== fingerprint || !Array.isArray(state.pools) || state.pools.length > RANDOM_POOL_LIMIT) return null;
  const pools: RandomPoolV2[] = [];
  for (const pool of state.pools) {
    const parsed = parseRandomPool(pool);
    if (!parsed) return null;
    pools.push(parsed);
  }
  return { schema: RANDOM_SCHEMA, catalogFingerprint: fingerprint, pools };
}

export function touchRandomPool(state: RandomStateV2, pool: RandomPoolV2): RandomStateV2 {
  const pools = [pool, ...state.pools.filter((item) => item.id !== pool.id)].sort((a, b) => b.updatedAt - a.updatedAt).slice(0, RANDOM_POOL_LIMIT);
  return { ...state, pools };
}

export function emptyRandomState(fingerprint: string): RandomStateV2 {
  return { schema: RANDOM_SCHEMA, catalogFingerprint: fingerprint, pools: [] };
}

function parseRandomPool(value: unknown): RandomPoolV2 | null {
  if (!value || typeof value !== 'object') return null;
  const pool = value as Partial<RandomPoolV2>;
  if (typeof pool.id !== 'string' || !/^[a-f0-9]{16,64}$/.test(pool.id) || typeof pool.signature !== 'string' || pool.signature.length > 4096) return null;
  if (!Array.isArray(pool.items) || pool.items.length > 1000 || !pool.items.every((item) => item && typeof item.id === 'string' && typeof item.route === 'string' && item.id.length <= 120 && item.route.startsWith('/'))) return null;
  if (!Array.isArray(pool.permutation) || pool.permutation.length !== pool.items.length) return null;
  const indexes = new Set<number>();
  for (const item of pool.permutation) {
    if (!Number.isInteger(item) || item < 0 || item >= pool.items.length || indexes.has(item)) return null;
    indexes.add(item);
  }
  if (typeof pool.cursor !== 'number' || !Number.isInteger(pool.cursor) || pool.cursor < 0 || pool.cursor > pool.permutation.length || typeof pool.cycle !== 'number' || !Number.isInteger(pool.cycle) || pool.cycle < 0) return null;
  if (pool.lastSelectedId !== null && typeof pool.lastSelectedId !== 'string') return null;
  if (typeof pool.updatedAt !== 'number' || !Number.isFinite(pool.updatedAt)) return null;
  const filters = normalizeRandomFilters(pool.filters as RandomFilters);
  if (makeRandomFilterSignature(filters) !== pool.signature) return null;
  return {
    id: pool.id, signature: pool.signature, filters,
    items: pool.items.map((item) => ({ id: item.id, route: item.route })),
    permutation: [...pool.permutation], cursor: pool.cursor, cycle: pool.cycle,
    lastSelectedId: pool.lastSelectedId ?? null, updatedAt: pool.updatedAt,
    dailyAvoidanceDate: typeof pool.dailyAvoidanceDate === 'string' ? pool.dailyAvoidanceDate : null,
    dailyAvoidanceIds: Array.isArray(pool.dailyAvoidanceIds) ? pool.dailyAvoidanceIds.filter((id): id is string => typeof id === 'string').slice(0, 8) : [],
  };
}

function clonePool(pool: RandomPoolV2): RandomPoolV2 {
  return { ...pool, filters: normalizeRandomFilters(pool.filters), items: pool.items.map((item) => ({ ...item })), permutation: [...pool.permutation], dailyAvoidanceIds: [...pool.dailyAvoidanceIds] };
}
