import type { SeasonEvent } from '../../data/events';
import { countdownParts, daysUntil, eventDateLabel, eventState, nextEvent } from '../events';

export function initHomeEvents(): void {
  const node = document.getElementById('bw26-events-data');
  const feature = document.querySelector<HTMLElement>('[data-event-feature]');
  const calendar = document.querySelector<HTMLDetailsElement>('[data-event-calendar]');
  if (!node || !feature || !calendar) return;
  const { locale, events } = JSON.parse(node.textContent || '{}') as { locale: 'en' | 'et'; events: SeasonEvent[] };
  const et = locale === 'et';
  const labels = et ? { pending: 'Kuupäev selgumisel', upcoming: 'Tulekul', current: 'Toimub praegu', past: 'Toimunud' }
    : { pending: 'Date pending', upcoming: 'Upcoming', current: 'Happening now', past: 'Past' };
  const set = (selector: string, value: string) => { const el = feature.querySelector<HTMLElement>(selector); if (el && el.textContent !== value) el.textContent = value; };
  let lastKey = '';
  function render(): void {
    const now = new Date();
    const event = nextEvent(events, now);
    feature!.hidden = !event;
    const key = events.map((item) => `${item.id}:${eventState(item, now)}`).join('|');
    if (key !== lastKey) {
      for (const row of document.querySelectorAll<HTMLElement>('[data-event-row]')) {
        const item = events.find((candidate) => candidate.id === row.dataset.eventRow);
        if (!item) continue;
        const state = eventState(item, now);
        row.dataset.state = state;
        const label = row.querySelector('[data-event-state]');
        if (label) label.textContent = labels[state];
      }
      // Progressive enhancement: the complete calendar remains visible without JS.
      if (!lastKey) calendar!.open = !event;
      if (!event) calendar!.open = true;
      lastKey = key;
    }
    if (!event) return;
    const state = eventState(event, now);
    set('[data-event-eyebrow]', state === 'current' ? labels.current : et ? 'Järgmine sündmus' : 'Coming up');
    set('[data-event-title]', event.title[locale]);
    set('[data-event-meta]', [eventDateLabel(event, locale), event.location?.[locale]].filter(Boolean).join(' · '));
    set('[data-event-contest]', event.contestDate ? `${et ? 'Võistluspäev' : 'Contest day'}: ${eventDateLabel({ ...event, startDate: event.contestDate, endDate: undefined }, locale)} · ${et ? 'algusaeg selgumisel' : 'start time to be confirmed'}` : '');
    const source = feature!.querySelector<HTMLAnchorElement>('[data-event-source]');
    if (source) { source.hidden = !event.url; if (event.url) source.href = event.url; }
    const countdown = feature!.querySelector<HTMLElement>('[data-event-countdown]');
    if (!countdown) return;
    const precise = state === 'upcoming' && !!event.startAt;
    const values = precise ? countdownParts(event.startAt!, now) : [daysUntil(event, now) ?? 0];
    const units = precise ? (et ? ['päeva', 'tundi', 'minutit', 'sekundit'] : ['days', 'hours', 'minutes', 'seconds'])
      : [state === 'current' ? (et ? 'Toimub praegu' : 'Happening now') : et ? (values[0] === 1 ? 'päev alguseni' : 'päeva alguseni') : (values[0] === 1 ? 'day to go' : 'days to go')];
    countdown.classList.toggle('event-countdown--precise', precise);
    const signature = `${state}:${values.join(':')}:${units.join(':')}`;
    if (countdown.dataset.value !== signature) {
      countdown.dataset.value = signature;
      countdown.replaceChildren(...values.map((value, i) => {
        const cell = document.createElement('div');
        const number = document.createElement('strong');
        number.textContent = state === 'current' ? '●' : precise && i > 0 ? String(value).padStart(2, '0') : String(value);
        if (state === 'current') number.setAttribute('aria-hidden', 'true');
        const label = document.createElement('span'); label.textContent = units[i]!;
        cell.append(number, label); return cell;
      }));
    }
  }
  render();
  window.setInterval(() => { if (!document.hidden) render(); }, 1000);
  document.addEventListener('visibilitychange', render);
  window.addEventListener('pageshow', render);
}
