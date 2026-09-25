import schedule from '../../../data/product/daily-schedule.json';

export type ClientDailyProblem = { id: string; year: number; number: number };
export type ClientDailyDay = { date: string; problems: Record<'A' | 'C' | 'G' | 'N', ClientDailyProblem> };
const days: ClientDailyDay[] = schedule.cycles.flatMap((cycle) => cycle.days) as ClientDailyDay[];
const byDate = new Map(days.map((day) => [day.date, day]));

export function dailyDayForDate(date: string): ClientDailyDay | null {
  return byDate.get(date) ?? null;
}

export function dailyIdsForDate(date: string): Set<string> {
  const day = dailyDayForDate(date);
  return new Set(day ? Object.values(day.problems).map((problem) => problem.id) : []);
}

export function dailyCoverage(): { first: string | null; last: string | null } {
  return { first: days[0]?.date ?? null, last: days.at(-1)?.date ?? null };
}
