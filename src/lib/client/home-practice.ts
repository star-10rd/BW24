import { RECENT_STORAGE_KEY, sanitizeRecent } from './recent';
import { TRAINING_STORAGE_KEY, validateTrainingSession } from './training';
import { safeGet, safeSet, storageAvailable } from './storage';
import { tallinnDate } from './tallinn-day';
import type { Domain } from '../problems/types';

interface HomePracticeData {
  locale: 'en' | 'et';
  catalogFingerprint: string;
  publicSetFingerprint: string;
  publicIds: string[];
  dailyDays: Array<{ date: string; problems: Record<Domain, { id: string; year: number; number: number }> }>;
  labels: {
    recent: string;
    random: string;
    training: string;
    continueTraining: string;
    problemOf: string;
    shortlistProblem: string;
    problem: string;
    outsideCoverage: string;
    domains: Record<Domain, string>;
  };
}

export function initHomePractice(): void {
  const dataNode = document.getElementById('bw26-home-practice-data');
  if (!dataNode) return;
  let data: HomePracticeData;
  try { data = JSON.parse(dataNode.textContent || '{}') as HomePracticeData; } catch { return; }
  const local = storageAvailable('localStorage');
  const session = storageAvailable('sessionStorage');
  renderToday(data);

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
    for (const entry of recent.entries.slice(0, 5)) {
      const li = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = localize(entry.route, data.locale);
      const title = document.createElement('span');
      title.textContent = entry.collection === 'contest' ? `${entry.year} · ${data.labels.problem} ${entry.numberOrSlug}` : `${data.locale === 'et' ? 'Balti Tee' : 'Baltic Way'} ${entry.year} · ${data.labels.shortlistProblem}`;
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

function renderToday(data: HomePracticeData): void {
  const root = document.querySelector<HTMLElement>('[data-home-today-set]');
  const date = document.querySelector<HTMLElement>('[data-home-today-date]');
  const fallback = document.querySelector<HTMLElement>('[data-home-today-fallback]');
  if (!root || !date || !fallback) return;
  const today = tallinnDate();
  const day = data.dailyDays.find((item) => item.date === today);
  if (!day) {
    root.replaceChildren();
    fallback.hidden = false;
    return;
  }
  fallback.hidden = true;
  date.textContent = prettyDate(today, data.locale);
  const domains: Domain[] = ['A', 'C', 'G', 'N'];
  root.replaceChildren(...domains.map((domain) => {
    const problem = day.problems[domain];
    const anchor = document.createElement('a');
    anchor.className = 'home-today-problem';
    const prefix = data.locale === 'et' ? '/et' : '';
    anchor.href = `${prefix}/problems/${problem.year}/${problem.number}/?context=daily&date=${today}`;
    const mark = document.createElement('span'); mark.className = 'home-today-domain'; mark.textContent = domain;
    const name = document.createElement('span'); name.className = 'home-today-domain-name'; name.textContent = data.labels.domains[domain];
    const source = document.createElement('span'); source.className = 'home-today-source'; source.textContent = `${data.locale === 'et' ? 'Balti Tee' : 'Baltic Way'} ${problem.year} · ${data.labels.problem} ${problem.number}`;
    anchor.append(mark, name, source);
    return anchor;
  }));
}

function prettyDate(value: string, locale: 'en' | 'et'): string {
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat(locale === 'et' ? 'et-EE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Tallinn' }).format(new Date(Date.UTC(year!, month! - 1, day!, 12)));
}

function localize(route: string, locale: 'en' | 'et'): string {
  return locale === 'et' ? `/et${route}` : route;
}
