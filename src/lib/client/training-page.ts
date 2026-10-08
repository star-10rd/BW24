import type { PracticeExercise } from '../product/practice-catalog';
import { tallinnDate } from './tallinn-day';
import { dailyIdsForDate } from './daily-selection';
import { RECENT_STORAGE_KEY, sanitizeRecent } from './recent';
import {
  TRAINING_STORAGE_KEY,
  createTrainingSession,
  filterTrainingCatalog,
  normalizeTrainingFilters,
  validateTrainingSession,
  type TrainingFilters,
  type TrainingSessionV2,
} from './training';
import { safeGet, safeRemove, safeSet, storageAvailable } from './storage';

interface TrainingPageData {
  locale: 'en' | 'et';
  catalogFingerprint: string;
  publicSetFingerprint: string;
  catalog: PracticeExercise[];
  labels: {
    eligible: string;
    noStorage: string;
    noMatches: string;
    capped: string;
    continueLabel: string;
    problemOf: string;
    shortlistProblem: string;
    overviewTitle: string;
    current: string;
    reviewed: string;
  };
}

export function initTrainingPage(): void {
  const dataNode = document.getElementById('bw26-training-data');
  const form = document.querySelector<HTMLFormElement>('[data-training-form]');
  if (!dataNode || !form) return;
  let data: TrainingPageData;
  try { data = JSON.parse(dataNode.textContent || '{}') as TrainingPageData; } catch { return; }
  if (!Array.isArray(data.catalog) || typeof data.catalogFingerprint !== 'string') return;

  const sessionStorage = storageAvailable('sessionStorage');
  const localStorage = storageAvailable('localStorage');
  const count = document.querySelector<HTMLElement>('[data-training-count]');
  const status = document.querySelector<HTMLElement>('[data-training-status]');
  const size = form.querySelector<HTMLInputElement>('input[name="size"]');
  const builder = document.querySelector<HTMLElement>('[data-training-builder]');
  const continueBox = document.querySelector<HTMLElement>('[data-training-continue]');
  const continueLink = document.querySelector<HTMLAnchorElement>('[data-training-continue-link]');
  const continueMeta = document.querySelector<HTMLElement>('[data-training-continue-meta]');
  const overview = document.querySelector<HTMLElement>('[data-training-overview]');
  const overviewList = document.querySelector<HTMLOListElement>('[data-training-overview-list]');
  const overviewMeta = document.querySelector<HTMLElement>('[data-training-overview-meta]');
  const overviewContinue = document.querySelector<HTMLAnchorElement>('[data-training-overview-continue]');
  const buildNew = document.querySelector<HTMLButtonElement>('[data-training-build-new]');
  const overviewEnd = document.querySelector<HTMLButtonElement>('[data-training-overview-end]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const catalogById = new Map(data.catalog.map((item) => [item.id, item]));

  const loadSession = (): TrainingSessionV2 | null => {
    if (!sessionStorage) return null;
    const raw = safeGet(sessionStorage, TRAINING_STORAGE_KEY);
    if (!raw) return null;
    let parsed: unknown;
    try { parsed = JSON.parse(raw); } catch { parsed = null; }
    return validateTrainingSession(parsed, data.catalogFingerprint);
  };

  const recentIds = (): Set<string> => {
    if (!localStorage) return new Set();
    const raw = safeGet(localStorage, RECENT_STORAGE_KEY);
    let parsed: unknown = null;
    if (raw) { try { parsed = JSON.parse(raw); } catch { parsed = null; } }
    return new Set(sanitizeRecent(parsed, data.publicSetFingerprint, new Set(data.catalog.map((item) => item.id))).entries.map((item) => item.id));
  };

  const getFilters = (): TrainingFilters => {
    const domains = [...form.querySelectorAll<HTMLInputElement>('input[name="domain"]:checked')].map((input) => input.value as TrainingFilters['domains'][number]);
    const allYears = [...new Set(data.catalog.map((exercise) => exercise.year))].sort((a, b) => a - b);
    const selectedYears = [...form.querySelectorAll<HTMLInputElement>('input[name="year"]:checked')].map((input) => Number(input.value)).filter((year) => allYears.includes(year));
    const years = selectedYears.length === allYears.length ? null : selectedYears;
    const subtopics = [...form.querySelectorAll<HTMLInputElement>('input[name="topic"]:checked')].map((input) => input.value);
    return normalizeTrainingFilters({
      includeShortlist: form.querySelector<HTMLInputElement>('input[name="shortlist"]')?.checked === true,
      domains,
      years,
      subtopics,
      verifiedSolutionOnly: form.querySelector<HTMLInputElement>('input[name="verified"]')?.checked === true,
    });
  };

  const syncSimpleDomainToAdvanced = (): void => {
    const selected = form.querySelector<HTMLInputElement>('input[name="simple-domain"]:checked')?.value ?? 'all';
    for (const input of form.querySelectorAll<HTMLInputElement>('input[name="domain"]')) input.checked = selected === 'all' || input.value === selected;
  };

  const syncAdvancedDomainToSimple = (): void => {
    const selected = [...form.querySelectorAll<HTMLInputElement>('input[name="domain"]:checked')].map((input) => input.value);
    for (const radio of form.querySelectorAll<HTMLInputElement>('input[name="simple-domain"]')) radio.checked = selected.length === 4 ? radio.value === 'all' : selected.length === 1 ? radio.value === selected[0] : false;
  };

  const syncSimpleSize = (): void => {
    const selected = Number(form.querySelector<HTMLInputElement>('input[name="simple-size"]:checked')?.value ?? 5);
    if (size) size.value = String(selected);
  };

  const syncAdvancedSize = (): void => {
    const value = Number(size?.value ?? 5);
    for (const radio of form.querySelectorAll<HTMLInputElement>('input[name="simple-size"]')) radio.checked = Number(radio.value) === value;
  };

  const makeTrainingHref = (route: string, sessionId: string): string => {
    const target = new URL(localize(route, data.locale), location.origin);
    target.searchParams.set('context', 'training');
    target.searchParams.set('session', sessionId);
    return `${target.pathname}${target.search}`;
  };

  const renderOverview = (training: TrainingSessionV2): void => {
    if (!overview || !overviewList || !overviewMeta || !overviewContinue || !builder) return;
    overviewList.replaceChildren();
    const currentId = training.lastProblemId ?? training.items[0]!.id;
    const currentIndex = Math.max(0, training.items.findIndex((item) => item.id === currentId));
    training.items.forEach((item, index) => {
      const exercise = catalogById.get(item.id);
      if (!exercise) return;
      const li = document.createElement('li');
      if (item.id === currentId) li.dataset.current = 'true';
      const anchor = document.createElement('a');
      anchor.href = makeTrainingHref(item.route, training.sessionId);
      const number = document.createElement('span'); number.className = 'training-overview-number'; number.textContent = String(index + 1);
      const title = document.createElement('span'); title.className = 'training-overview-title'; title.textContent = exercise.collection === 'contest' ? `${data.locale === 'et' ? 'Balti Tee' : 'Baltic Way'} ${exercise.year} · ${exercise.numberOrSlug}` : `${data.locale === 'et' ? 'Balti Tee' : 'Baltic Way'} ${exercise.year} · ${data.labels.shortlistProblem}`;
      const meta = document.createElement('span'); meta.className = 'training-overview-domain'; meta.textContent = exercise.domain;
      const state = document.createElement('span'); state.className = 'training-overview-state'; state.textContent = item.id === currentId ? data.labels.current : (training.reviewedIds.includes(item.id) ? data.labels.reviewed : '');
      anchor.append(number, title, meta, state); li.append(anchor); overviewList.append(li);
    });
    overviewMeta.textContent = data.labels.problemOf.replace('{current}', String(currentIndex + 1)).replace('{total}', String(training.items.length));
    overviewContinue.href = makeTrainingHref(training.items[currentIndex]!.route, training.sessionId);
    overview.hidden = false;
    builder.hidden = true;
    if (continueBox) continueBox.hidden = true;
  };

  const updateContinue = (): void => {
    const training = loadSession();
    const requestedSession = new URLSearchParams(location.search).get('session');
    if (training && requestedSession === training.sessionId) { renderOverview(training); return; }
    if (!continueBox || !continueLink || !continueMeta) return;
    if (!training) { continueBox.hidden = true; return; }
    const current = training.items.find((item) => item.id === training.lastProblemId) ?? training.items[0]!;
    const index = training.items.findIndex((item) => item.id === current.id);
    continueLink.href = makeTrainingHref(current.route, training.sessionId);
    continueMeta.textContent = data.labels.problemOf.replace('{current}', String(index + 1)).replace('{total}', String(training.items.length));
    continueBox.hidden = false;
  };

  const updateCount = (): number => {
    const matching = filterTrainingCatalog(data.catalog, getFilters(), dailyIdsForDate(tallinnDate()));
    if (count) count.textContent = `${matching.length} ${data.labels.eligible}`;
    if (size) {
      const max = Math.min(50, Math.max(2, matching.length));
      size.max = String(max);
      if (matching.length >= 2 && Number(size.value) > max) size.value = String(max);
    }
    if (submit) submit.disabled = !sessionStorage || matching.length < 2;
    if (status) status.textContent = !sessionStorage ? data.labels.noStorage : (matching.length < 2 ? data.labels.noMatches : '');
    return matching.length;
  };

  buildNew?.addEventListener('click', () => {
    if (overview) overview.hidden = true;
    if (builder) builder.hidden = false;
    history.replaceState(history.state, '', location.pathname);
  });
  overviewEnd?.addEventListener('click', () => {
    if (sessionStorage) safeRemove(sessionStorage, TRAINING_STORAGE_KEY);
    if (overview) overview.hidden = true;
    if (continueBox) continueBox.hidden = true;
    if (builder) builder.hidden = false;
    history.replaceState(history.state, '', location.pathname);
  });

  form.addEventListener('change', (event) => {
    const target = event.target as HTMLInputElement;
    if (target.name === 'simple-domain') syncSimpleDomainToAdvanced();
    if (target.name === 'domain') syncAdvancedDomainToSimple();
    if (target.name === 'simple-size') syncSimpleSize();
    updateCount();
  });
  form.addEventListener('input', (event) => { if ((event.target as HTMLInputElement).name === 'size') { syncAdvancedSize(); updateCount(); } });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!sessionStorage) { if (status) status.textContent = data.labels.noStorage; return; }
    const available = updateCount();
    if (available < 2) return;
    const requested = Math.max(2, Math.min(50, Number(size?.value ?? 5) || 5));
    const result = createTrainingSession(data.catalog, getFilters(), requested, data.catalogFingerprint, dailyIdsForDate(tallinnDate()), { recentIds: recentIds() });
    if (!result.session) { if (status) status.textContent = data.labels.noMatches; return; }
    if (result.capped && status) status.textContent = data.labels.capped.replace('{count}', String(result.actual));
    if (!safeSet(sessionStorage, TRAINING_STORAGE_KEY, JSON.stringify(result.session))) { if (status) status.textContent = data.labels.noStorage; return; }
    location.assign(makeTrainingHref(result.session.items[0]!.route, result.session.sessionId));
  });

  const params = new URLSearchParams(location.search);
  const requestedDomain = params.get('domain');
  if (requestedDomain === 'A' || requestedDomain === 'C' || requestedDomain === 'G' || requestedDomain === 'N' || requestedDomain === 'all') {
    const radio = form.querySelector<HTMLInputElement>(`input[name="simple-domain"][value="${requestedDomain}"]`);
    if (radio) radio.checked = true;
  }
  const requestedSize = params.get('size');
  if (requestedSize === '5' || requestedSize === '10') {
    const radio = form.querySelector<HTMLInputElement>(`input[name="simple-size"][value="${requestedSize}"]`);
    if (radio) radio.checked = true;
  }
  if (params.get('shortlist') === '1') {
    const shortlist = form.querySelector<HTMLInputElement>('input[name="shortlist"]');
    if (shortlist) shortlist.checked = true;
  }
  syncSimpleDomainToAdvanced(); syncSimpleSize(); updateContinue(); updateCount();
  if (params.get('start') === '1') {
    history.replaceState(history.state, '', location.pathname);
    form.requestSubmit();
  }
}

function localize(route: string, locale: 'en' | 'et'): string {
  return locale === 'et' ? `/et${route}` : route;
}
