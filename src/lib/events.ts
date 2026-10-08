import type { SeasonEvent } from '../data/events';
export type EventState = 'pending' | 'upcoming' | 'current' | 'past';

export function eventDay(now: Date, timeZone: string): string {
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(now);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}
export function eventState(event: SeasonEvent, now = new Date()): EventState {
  if (!event.startDate) return 'pending';
  const today = eventDay(now, event.timeZone);
  if (today > (event.endDate ?? event.startDate)) return 'past';
  if (event.startAt && now.getTime() < Date.parse(event.startAt)) return 'upcoming';
  return today < event.startDate ? 'upcoming' : 'current';
}
export function daysUntil(event: SeasonEvent, now = new Date()): number | null {
  if (!event.startDate) return null;
  // Calendar days, not 24-hour periods: remains correct across DST changes.
  return Math.max(0, Math.round((Date.parse(`${event.startDate}T00:00:00Z`) - Date.parse(`${eventDay(now, event.timeZone)}T00:00:00Z`)) / 86400000));
}
export function nextEvent(events: SeasonEvent[], now = new Date()): SeasonEvent | undefined {
  const dated = events.filter((event) => event.startDate).sort((a, b) => a.startDate!.localeCompare(b.startDate!));
  return dated.find((event) => eventState(event, now) === 'current') ?? dated.find((event) => eventState(event, now) === 'upcoming');
}
export function countdownParts(startAt: string, now = new Date()): number[] {
  let seconds = Math.max(0, Math.ceil((Date.parse(startAt) - now.getTime()) / 1000));
  return [86400, 3600, 60, 1].map((unit) => { const n = Math.floor(seconds / unit); seconds %= unit; return n; });
}
export function eventDateLabel(event: SeasonEvent, locale: 'en' | 'et'): string {
  if (!event.startDate) return locale === 'et' ? 'Kuupäev selgumisel' : 'Date to be confirmed';
  const formatter = new Intl.DateTimeFormat(locale === 'et' ? 'et-EE' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const start = new Date(`${event.startDate}T12:00:00Z`);
  return event.endDate && event.endDate !== event.startDate
    ? formatter.formatRange(start, new Date(`${event.endDate}T12:00:00Z`)) : formatter.format(start);
}
