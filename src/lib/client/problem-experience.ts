import { dailyIdsForDate } from './daily-selection';
import { resolvePracticeContextData } from './practice-context';
import { tallinnDate } from './tallinn-day';
import { RANDOM_STORAGE_KEY, nextRandomProblem, parseRandomState, touchRandomPool, type RandomStateV2 } from './random';
import { RECENT_STORAGE_KEY, addRecent, sanitizeRecent, type RecentEntry } from './recent';
import { TRAINING_STORAGE_KEY, markTrainingReviewed, validateTrainingSession, type TrainingSessionV2 } from './training';
import { safeGet, safeRemove, safeSet, storageAvailable, type StorageLike } from './storage';

interface ExperienceData {
  locale: 'en' | 'et';
  problemKey: string;
  dailyDates: string[];
  practiceCatalogFingerprint: string;
  publicSetFingerprint: string;
  qaEnabled?: boolean;
}
interface ProblemRuntimeData {
  locale: 'en' | 'et';
  problem: {
    id: string;
    route: string;
    collection: 'contest' | 'shortlist';
    year: number;
    numberOrSlug: string;
    domain: 'A' | 'C' | 'G' | 'N';
  };
  labels: {
    randomUnavailableDaily: string;
    randomStateLost: string;
    problemOf: string;
  };
}

export function initProblemExperience(): void {
  // Astro may bundle this module into the document head in dev/build output.
  // Never touch page DOM until the parser has produced a body.
  if (document.readyState === 'loading' || !document.body) {
    document.addEventListener('DOMContentLoaded', initProblemExperience, { once: true });
    return;
  }

  const experienceNode = document.getElementById('bw26-experience-data');
  const problemNode = document.getElementById('bw26-problem-data');
  if (!experienceNode || !problemNode) return;
  let experienceData: ExperienceData;
  let runtime: ProblemRuntimeData;
  try {
    experienceData = JSON.parse(experienceNode.textContent || '{}') as ExperienceData;
    runtime = JSON.parse(problemNode.textContent || '{}') as ProblemRuntimeData;
  } catch { return; }
  if (!experienceData.problemKey || runtime.problem.id !== experienceData.problemKey) return;

  const root = document.documentElement;
  if (root.dataset.bw26ExperienceReady === '1') return;
  root.dataset.bw26ExperienceReady = '1';

  const local = storageAvailable('localStorage');
  const session = storageAvailable('sessionStorage');
  const status = document.querySelector<HTMLElement>('[data-practice-status]');
  const reviewAction = document.querySelector<HTMLButtonElement>('[data-review-action]');
  const randomNext = document.querySelector<HTMLButtonElement>('[data-random-next]');
  const trainingPrev = document.querySelector<HTMLAnchorElement>('[data-training-prev]');
  const trainingNext = document.querySelector<HTMLAnchorElement>('[data-training-next]');
  const trainingEnd = document.querySelector<HTMLButtonElement>('[data-training-end]');
  const trainingOverview = document.querySelector<HTMLAnchorElement>('[data-training-overview-link]');
  const trainingBack = document.querySelector<HTMLAnchorElement>('.problem-back--training');
  const trainingProgress = document.querySelector<HTMLElement>('[data-training-progress]');
  const dailyBack = document.querySelector<HTMLAnchorElement>('[data-daily-back]');
  const contextDate = document.querySelector<HTMLElement>('[data-context-date-label]');

  const applyRuntimeContext = (): void => {
    if (experienceData.qaEnabled && new URLSearchParams(location.search).get('qa')) return;
    const params = new URLSearchParams(location.search);
    const requestedPoolId = params.get('pool');
    const requestedSessionId = params.get('session');
    const randomCandidate = loadRandomContextById(requestedPoolId);
    const trainingCandidate = loadTrainingContextById(requestedSessionId);
    const resolved = resolvePracticeContextData({
      problemId: runtime.problem.id,
      dailyDates: experienceData.dailyDates,
      today: tallinnDate(),
      context: params.get('context'),
      date: params.get('date'),
      poolId: requestedPoolId,
      sessionId: requestedSessionId,
      randomState: randomCandidate?.state ?? null,
      trainingSession: trainingCandidate?.session ?? null,
      historyReviewed: historyReviewed(),
    });
    applyResolvedContext(resolved);
  };

  // Runtime is authoritative. It may refine the conservative pre-paint state,
  // but initialization never navigates or replaces page content.
  applyRuntimeContext();

  let randomContext = loadRandomContext();
  let trainingContext = loadTrainingContext();
  updateNavigationCurrent(root.dataset.experience ?? 'archive');
  updateDailyContext();

  if (root.dataset.experience === 'random' && randomContext) addCurrentRecent('random');
  if (root.dataset.experience === 'training' && trainingContext) {
    trainingContext.session.lastProblemId = runtime.problem.id;
    safeSet(trainingContext.storage, TRAINING_STORAGE_KEY, JSON.stringify(trainingContext.session));
    addCurrentRecent('training');
    updateTrainingControls(trainingContext.session);
  }

  reviewAction?.addEventListener('click', () => {
    if (root.dataset.reviewState !== 'solve') return;
    if (root.dataset.experience === 'training') {
      const context = loadTrainingContext();
      if (context) {
        context.session = markTrainingReviewed(context.session, runtime.problem.id);
        safeSet(context.storage, TRAINING_STORAGE_KEY, JSON.stringify(context.session));
      }
    } else if (root.dataset.experience === 'random' || root.dataset.experience === 'daily') {
      const previous = history.state && typeof history.state === 'object' ? history.state : {};
      history.replaceState({ ...previous, bw26Review: { problemId: runtime.problem.id, reviewed: true } }, '');
    }
    root.dataset.reviewState = 'review';
  });

  randomNext?.addEventListener('click', () => {
    const context = loadRandomContext();
    if (!context) { if (status) status.textContent = runtime.labels.randomStateLost; return; }
    const recentIds = readRecentIds();
    const today = tallinnDate();
    const result = nextRandomProblem(context.pool, { recentIds, dailyIds: dailyIdsForDate(today), dailyDate: today });
    if (!result.item) { if (status) status.textContent = runtime.labels.randomUnavailableDaily; return; }
    const nextState = touchRandomPool(context.state, result.pool);
    if (!safeSet(context.storage, RANDOM_STORAGE_KEY, JSON.stringify(nextState))) { if (status) status.textContent = runtime.labels.randomStateLost; return; }
    const target = new URL(localize(result.item.route, runtime.locale), location.origin);
    target.searchParams.set('context', 'random');
    target.searchParams.set('pool', result.pool.id);
    location.assign(`${target.pathname}${target.search}`);
  });

  trainingEnd?.addEventListener('click', () => {
    if (session) safeRemove(session, TRAINING_STORAGE_KEY);
    location.assign(localize('/practice/', runtime.locale));
  });

  // A page may remain open across Tallinn midnight. Re-resolve disclosure state
  // without navigating or replacing any DOM so current-Daily locking rolls over.
  let observedTallinnDate = tallinnDate();
  window.setInterval(() => {
    const next = tallinnDate();
    if (next === observedTallinnDate) return;
    observedTallinnDate = next;
    applyRuntimeContext();
    randomContext = loadRandomContext();
    trainingContext = loadTrainingContext();
    updateNavigationCurrent(root.dataset.experience ?? 'archive');
    updateDailyContext();
    if (root.dataset.experience === 'training' && trainingContext) updateTrainingControls(trainingContext.session);
  }, 60_000);

  function historyReviewed(): boolean {
    const marker = history.state && typeof history.state === 'object' ? (history.state as { bw26Review?: { problemId?: string; reviewed?: boolean } }).bw26Review : null;
    return marker?.problemId === runtime.problem.id && marker.reviewed === true;
  }

  function applyResolvedContext(resolved: ReturnType<typeof resolvePracticeContextData>): void {
    root.dataset.experience = resolved.experience;
    root.dataset.reviewState = resolved.reviewState;
    if (resolved.contextDate) root.dataset.contextDate = resolved.contextDate; else delete root.dataset.contextDate;
    if (resolved.poolId) root.dataset.poolId = resolved.poolId; else delete root.dataset.poolId;
    if (resolved.sessionId) root.dataset.sessionId = resolved.sessionId; else delete root.dataset.sessionId;
  }

  function loadRandomContextById(poolId: string | null): { state: RandomStateV2; pool: RandomStateV2['pools'][number]; storage: StorageLike } | null {
    if (!poolId) return null;
    for (const storage of [local, session]) {
      if (!storage) continue;
      const raw = safeGet(storage, RANDOM_STORAGE_KEY);
      if (!raw) continue;
      let parsed: unknown;
      try { parsed = JSON.parse(raw); } catch { parsed = null; }
      const state = parseRandomState(parsed, experienceData.practiceCatalogFingerprint);
      const pool = state?.pools.find((candidate) => candidate.id === poolId);
      if (state && pool && pool.items.some((item) => item.id === runtime.problem.id)) return { state, pool, storage };
    }
    return null;
  }

  function loadTrainingContextById(sessionId: string | null): { session: TrainingSessionV2; storage: StorageLike } | null {
    if (!sessionId || !session) return null;
    const raw = safeGet(session, TRAINING_STORAGE_KEY);
    if (!raw) return null;
    let parsed: unknown;
    try { parsed = JSON.parse(raw); } catch { parsed = null; }
    const value = validateTrainingSession(parsed, experienceData.practiceCatalogFingerprint);
    if (!value || value.sessionId !== sessionId || !value.items.some((item) => item.id === runtime.problem.id)) return null;
    return { session: value, storage: session };
  }

  function loadRandomContext(): { state: RandomStateV2; pool: RandomStateV2['pools'][number]; storage: StorageLike } | null {
    return root.dataset.experience === 'random' ? loadRandomContextById(root.dataset.poolId ?? null) : null;
  }

  function loadTrainingContext(): { session: TrainingSessionV2; storage: StorageLike } | null {
    return root.dataset.experience === 'training' ? loadTrainingContextById(root.dataset.sessionId ?? null) : null;
  }

  function updateTrainingControls(training: TrainingSessionV2): void {
    const index = training.items.findIndex((item) => item.id === runtime.problem.id);
    if (index < 0) return;
    if (trainingProgress) trainingProgress.textContent = runtime.labels.problemOf.replace('{current}', String(index + 1)).replace('{total}', String(training.items.length));
    const overviewTarget = new URL(localize('/training/', runtime.locale), location.origin);
    overviewTarget.searchParams.set('session', training.sessionId);
    const overviewHref = `${overviewTarget.pathname}${overviewTarget.search}`;
    if (trainingOverview) trainingOverview.href = overviewHref;
    if (trainingBack) trainingBack.href = overviewHref;
    updateStepLink(trainingPrev, training.items[index - 1], training.sessionId);
    updateStepLink(trainingNext, training.items[index + 1], training.sessionId);
  }

  function updateStepLink(anchor: HTMLAnchorElement | null, item: TrainingSessionV2['items'][number] | undefined, sessionId: string): void {
    if (!anchor) return;
    if (!item) { anchor.removeAttribute('href'); anchor.hidden = true; return; }
    anchor.href = trainingHref(item.route, sessionId); anchor.hidden = false;
  }

  function trainingHref(route: string, sessionId: string): string {
    const target = new URL(localize(route, runtime.locale), location.origin);
    target.searchParams.set('context', 'training');
    target.searchParams.set('session', sessionId);
    return `${target.pathname}${target.search}`;
  }

  function addCurrentRecent(source: 'random' | 'training'): void {
    if (!local) return;
    const raw = safeGet(local, RECENT_STORAGE_KEY);
    let parsed: unknown = null;
    if (raw) { try { parsed = JSON.parse(raw); } catch { parsed = null; } }
    const base = sanitizeRecent(parsed, experienceData.publicSetFingerprint);
    const entry: RecentEntry = {
      id: runtime.problem.id,
      route: runtime.problem.route,
      collection: runtime.problem.collection,
      year: runtime.problem.year,
      numberOrSlug: runtime.problem.numberOrSlug,
      domain: runtime.problem.domain,
      source,
      seenAt: Date.now(),
    };
    safeSet(local, RECENT_STORAGE_KEY, JSON.stringify(addRecent(base, entry)));
  }

  function readRecentIds(): Set<string> {
    if (!local) return new Set();
    const raw = safeGet(local, RECENT_STORAGE_KEY);
    let parsed: unknown = null;
    if (raw) { try { parsed = JSON.parse(raw); } catch { parsed = null; } }
    return new Set(sanitizeRecent(parsed, experienceData.publicSetFingerprint).entries.map((entry) => entry.id));
  }

  function updateDailyContext(): void {
    if (dailyBack && root.dataset.contextDate) {
      const url = new URL(dailyBack.href, location.href);
      url.searchParams.set('date', root.dataset.contextDate);
      dailyBack.href = `${url.pathname}${url.search}`;
    }
    if (contextDate) {
      if (!root.dataset.contextDate) {
        contextDate.textContent = '';
      } else {
        const [year, month, day] = root.dataset.contextDate.split('-').map(Number);
        contextDate.textContent = new Intl.DateTimeFormat(runtime.locale === 'et' ? 'et-EE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Tallinn' }).format(new Date(Date.UTC(year!, month! - 1, day!, 12)));
      }
    }
  }

  function updateNavigationCurrent(experience: string): void {
    const route = experience === 'daily' ? 'today' : experience === 'random' || experience === 'training' ? 'practice' : null;
    for (const anchor of document.querySelectorAll<HTMLAnchorElement>('[data-nav-route]')) {
      if (route && anchor.dataset.navRoute === route) anchor.setAttribute('aria-current', 'page');
      else if (route) anchor.removeAttribute('aria-current');
    }
  }
}

function localize(route: string, locale: 'en' | 'et'): string {
  if (locale === 'en') return route;
  return route.startsWith('/et/') ? route : `/et${route}`;
}
