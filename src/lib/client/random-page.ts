import type { PracticeExercise } from '../product/practice-catalog';
import { tallinnDate } from './tallinn-day';
import { dailyIdsForDate } from './daily-selection';
import {
  RANDOM_STORAGE_KEY,
  createRandomPool,
  emptyRandomState,
  filterRandomCatalog,
  makeRandomFilterSignature,
  nextRandomProblem,
  normalizeRandomFilters,
  parseRandomState,
  randomHexId,
  randomIntCrypto,
  touchRandomPool,
  type RandomFilters,
  type RandomStateV2,
} from './random';
import { RECENT_STORAGE_KEY, sanitizeRecent } from './recent';
import { safeGet, safeSet, storageAvailable } from './storage';

interface RandomPageData {
  locale: 'en' | 'et';
  catalogFingerprint: string;
  publicSetFingerprint: string;
  catalog: PracticeExercise[];
  labels: { eligible: string; unavailableDaily: string; storageFallback: string; selectionFailed: string };
}

export function initRandomPage(): void {
  const dataNode = document.getElementById('bw26-random-data');
  const form = document.querySelector<HTMLFormElement>('[data-random-form]');
  if (!dataNode || !form) return;
  let data: RandomPageData;
  try { data = JSON.parse(dataNode.textContent || '{}') as RandomPageData; } catch { return; }
  if (!Array.isArray(data.catalog) || typeof data.catalogFingerprint !== 'string') return;

  const count = document.querySelector<HTMLElement>('[data-random-count]');
  const status = document.querySelector<HTMLElement>('[data-random-status]');
  const local = storageAvailable('localStorage');
  const session = storageAvailable('sessionStorage');
  const randomStorage = local ?? session;
  const allIds = new Set(data.catalog.map((exercise) => exercise.id));
  let starting = false;

  const readRecentIds = (): Set<string> => {
    if (!local) return new Set();
    const raw = safeGet(local, RECENT_STORAGE_KEY);
    let parsed: unknown = null;
    if (raw) { try { parsed = JSON.parse(raw); } catch { parsed = null; } }
    const recent = sanitizeRecent(parsed, data.publicSetFingerprint, allIds);
    safeSet(local, RECENT_STORAGE_KEY, JSON.stringify(recent));
    return new Set(recent.entries.map((entry) => entry.id));
  };

  const loadState = (): RandomStateV2 => {
    if (!randomStorage) return emptyRandomState(data.catalogFingerprint);
    const raw = safeGet(randomStorage, RANDOM_STORAGE_KEY);
    if (!raw) return emptyRandomState(data.catalogFingerprint);
    let parsed: unknown;
    try { parsed = JSON.parse(raw); } catch { parsed = null; }
    return parseRandomState(parsed, data.catalogFingerprint) ?? emptyRandomState(data.catalogFingerprint);
  };

  const getFilters = (): RandomFilters => {
    const domains = [...form.querySelectorAll<HTMLInputElement>('input[name="domain"]:checked')].map((input) => input.value as RandomFilters['domains'][number]);
    const allYears = [...new Set(data.catalog.map((exercise) => exercise.year))].sort((a, b) => a - b);
    const selectedYears = [...form.querySelectorAll<HTMLInputElement>('input[name="year"]:checked')].map((input) => Number(input.value)).filter((year) => allYears.includes(year));
    const years = selectedYears.length === allYears.length ? null : selectedYears;
    const subtopics = [...form.querySelectorAll<HTMLInputElement>('input[name="topic"]:checked')].map((input) => input.value);
    return normalizeRandomFilters({
      includeShortlist: form.querySelector<HTMLInputElement>('input[name="shortlist"]')?.checked === true,
      domains,
      years,
      subtopics,
      verifiedSolutionOnly: form.querySelector<HTMLInputElement>('input[name="verified"]')?.checked === true,
    });
  };

  const syncSimpleToAdvanced = (): void => {
    const selected = form.querySelector<HTMLInputElement>('input[name="simple-domain"]:checked')?.value ?? 'all';
    for (const input of form.querySelectorAll<HTMLInputElement>('input[name="domain"]')) input.checked = selected === 'all' || input.value === selected;
  };

  const syncAdvancedToSimple = (): void => {
    const selected = [...form.querySelectorAll<HTMLInputElement>('input[name="domain"]:checked')].map((input) => input.value);
    const radios = [...form.querySelectorAll<HTMLInputElement>('input[name="simple-domain"]')];
    for (const radio of radios) radio.checked = selected.length === 4 ? radio.value === 'all' : selected.length === 1 ? radio.value === selected[0] : false;
  };

  const updateCount = (): { matching: PracticeExercise[]; available: PracticeExercise[] } => {
    const filters = getFilters();
    const matching = filterRandomCatalog(data.catalog, filters);
    const daily = dailyIdsForDate(tallinnDate());
    const available = matching.filter((exercise) => !daily.has(exercise.id));
    if (count) count.textContent = `${available.length} ${data.labels.eligible}`;
    if (status) {
      const blocked = matching.length - available.length;
      status.textContent = available.length === 0 && blocked > 0 ? data.labels.unavailableDaily : (!randomStorage ? data.labels.storageFallback : '');
    }
    return { matching, available };
  };

  const selectAndGo = (): void => {
    if (starting) return;
    const { matching, available } = updateCount();
    if (available.length === 0) return;
    starting = true;
    const filters = getFilters();
    const today = tallinnDate();
    const daily = dailyIdsForDate(today);
    if (!randomStorage) {
      const exercise = available[randomIntCrypto(available.length)]!;
      location.assign(localize(exercise.route, data.locale));
      return;
    }
    let state = loadState();
    const signature = makeRandomFilterSignature(filters);
    let pool = state.pools.find((candidate) => candidate.signature === signature && candidate.items.length === matching.length && candidate.items.every((item) => matching.some((exercise) => exercise.id === item.id))) ?? null;
    if (!pool) pool = createRandomPool(randomHexId(16), filters, data.catalog);
    const result = nextRandomProblem(pool, { recentIds: readRecentIds(), dailyIds: daily, dailyDate: today });
    if (!result.item) {
      starting = false;
      if (status) status.textContent = data.labels.selectionFailed;
      return;
    }
    state = touchRandomPool(state, result.pool);
    if (!safeSet(randomStorage, RANDOM_STORAGE_KEY, JSON.stringify(state)) && status) status.textContent = data.labels.storageFallback;
    const target = new URL(localize(result.item.route, data.locale), location.origin);
    target.searchParams.set('context', 'random');
    target.searchParams.set('pool', result.pool.id);
    location.assign(`${target.pathname}${target.search}`);
  };

  form.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.name === 'simple-domain') syncSimpleToAdvanced();
    if (target.name === 'domain') syncAdvancedToSimple();
    updateCount();
  });
  form.addEventListener('submit', (event) => { event.preventDefault(); selectAndGo(); });
  window.addEventListener('storage', (event) => { if (event.key === RANDOM_STORAGE_KEY || event.key === RECENT_STORAGE_KEY) updateCount(); });

  const params = new URLSearchParams(location.search);
  const requestedDomain = params.get('domain');
  if (requestedDomain === 'A' || requestedDomain === 'C' || requestedDomain === 'G' || requestedDomain === 'N' || requestedDomain === 'all') {
    const radio = form.querySelector<HTMLInputElement>(`input[name="simple-domain"][value="${requestedDomain}"]`);
    if (radio) radio.checked = true;
  }
  if (params.get('shortlist') === '1') {
    const shortlist = form.querySelector<HTMLInputElement>('input[name="shortlist"]');
    if (shortlist) shortlist.checked = true;
  }
  syncSimpleToAdvanced();
  updateCount();
  if (params.get('start') === '1') {
    history.replaceState(history.state, '', location.pathname);
    queueMicrotask(selectAndGo);
  }
}

function localize(route: string, locale: 'en' | 'et'): string {
  return locale === 'et' ? `/et${route}` : route;
}
