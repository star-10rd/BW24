import { RECENT_STORAGE_KEY, sanitizeRecent } from './recent';
import { TRAINING_STORAGE_KEY, validateTrainingSession } from './training';
import { safeGet, safeSet, storageAvailable } from './storage';

interface HomePracticeData {
  locale: 'en' | 'et';
  catalogFingerprint: string;
  publicSetFingerprint: string;
  publicIds: string[];
  labels: {
    recent: string;
    random: string;
    training: string;
    continueTraining: string;
    problemOf: string;
    shortlistProblem: string;
  };
}

export function initHomePractice(): void {
  const dataNode = document.getElementById('bw26-home-practice-data');
  if (!dataNode) return;
  let data: HomePracticeData;
  try { data = JSON.parse(dataNode.textContent || '{}') as HomePracticeData; } catch { return; }
  const local = storageAvailable('localStorage');
  const session = storageAvailable('sessionStorage');
  const recentSection = document.querySelector<HTMLElement>('[data-home-recent]');
  const recentList = document.querySelector<HTMLElement>('[data-home-recent-list]');
  const trainingContinue = document.querySelector<HTMLElement>('[data-home-training-continue]');
  const trainingLink = document.querySelector<HTMLAnchorElement>('[data-home-training-link]');
  const trainingMeta = document.querySelector<HTMLElement>('[data-home-training-meta]');

  if (local && recentSection && recentList) {
    const raw = safeGet(local, RECENT_STORAGE_KEY);
    let parsed: unknown = null;
    if (raw) { try { parsed = JSON.parse(raw); } catch { parsed = null; } }
    const recent = sanitizeRecent(parsed, data.publicSetFingerprint, new Set(data.publicIds));
    safeSet(local, RECENT_STORAGE_KEY, JSON.stringify(recent));
    recentList.replaceChildren();
    for (const entry of recent.entries.slice(0, 6)) {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = localize(entry.route, data.locale);
      const title = document.createElement('span');
      title.textContent = entry.collection === 'contest' ? `${entry.year} / ${entry.numberOrSlug}` : `Baltic Way ${entry.year} · ${data.labels.shortlistProblem}`;
      const meta = document.createElement('span');
      meta.textContent = `${entry.domain} · ${entry.source === 'random' ? data.labels.random : data.labels.training}`;
      anchor.append(title, meta);
      li.append(anchor);
      recentList.append(li);
    }
    recentSection.hidden = recent.entries.length === 0;
  }

  if (session && trainingContinue && trainingLink && trainingMeta) {
    const raw = safeGet(session, TRAINING_STORAGE_KEY);
    let parsed: unknown = null;
    if (raw) { try { parsed = JSON.parse(raw); } catch { parsed = null; } }
    const training = validateTrainingSession(parsed, data.catalogFingerprint);
    if (training) {
      const current = training.items.find((item) => item.id === training.lastProblemId) ?? training.items[0]!;
      const index = training.items.findIndex((item) => item.id === current.id);
      const target = new URL(localize(current.route, data.locale), location.origin);
      target.searchParams.set('context', 'training');
      target.searchParams.set('session', training.sessionId);
      trainingLink.href = `${target.pathname}${target.search}`;
      trainingMeta.textContent = data.labels.problemOf.replace('{current}', String(index + 1)).replace('{total}', String(training.items.length));
      trainingContinue.hidden = false;
    } else {
      trainingContinue.hidden = true;
    }
  }
}

function localize(route: string, locale: 'en' | 'et'): string {
  return locale === 'et' ? `/et${route}` : route;
}
