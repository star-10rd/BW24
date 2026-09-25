import { getProductCatalog } from '../../src/lib/product/catalog';
import { dailyDomainOrder, loadDailySchedule } from '../../src/lib/product/daily';
import { productPolicyFingerprint } from '../../src/lib/product/policy';

const root = process.cwd();
const [schedule, catalog, policySha256] = await Promise.all([
  loadDailySchedule(root),
  getProductCatalog(root),
  productPolicyFingerprint(root),
]);
const eligible = new Set(catalog.finals.filter((problem) => problem.dailyEligible).map((problem) => problem.key));

if (eligible.size !== 180) throw new Error(`expected 180 Daily eligible; got ${eligible.size}`);
if (schedule.generator.policySha256 !== policySha256) throw new Error('Daily policy fingerprint mismatch');

function nextUtcDate(date: string): string {
  const value: Date = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + 1);
  return value.toISOString().slice(0, 10);
}

let previousDate: string | null = null;
let previousPositions: Map<string, number> | null = null;

for (let cycleIndex = 0; cycleIndex < schedule.cycles.length; cycleIndex++) {
  const cycle = schedule.cycles[cycleIndex]!;
  if (cycle.days.length !== 45) throw new Error(`${cycle.id}: expected 45 days`);

  const ids: string[] = [];
  for (let dayIndex = 0; dayIndex < cycle.days.length; dayIndex++) {
    const day = cycle.days[dayIndex]!;
    if (previousDate && day.date !== nextUtcDate(previousDate)) {
      throw new Error(`${cycle.id}: noncontiguous date ${day.date}`);
    }
    previousDate = day.date;

    if (JSON.stringify(Object.keys(day.problems)) !== JSON.stringify(dailyDomainOrder)) {
      throw new Error(`${day.date}: expected A/C/G/N exactly`);
    }

    const years = new Set<number>();
    for (const domain of dailyDomainOrder) {
      const problem = day.problems[domain];
      if (!eligible.has(problem.id)) throw new Error(`${day.date}: ineligible ${problem.id}`);
      years.add(problem.year);
      ids.push(problem.id);
    }
    if (years.size !== 4) throw new Error(`${day.date}: expected four distinct contest years`);
  }

  if (ids.length !== 180 || new Set(ids).size !== 180) {
    throw new Error(`${cycle.id}: cycle must use 180 unique IDs`);
  }
  if (new Set(ids).size !== eligible.size || [...eligible].some((id) => !ids.includes(id))) {
    throw new Error(`${cycle.id}: cycle is not exact Daily pool`);
  }

  if (previousPositions) {
    for (let dayIndex = 0; dayIndex < cycle.days.length; dayIndex++) {
      for (const problem of Object.values(cycle.days[dayIndex]!.problems)) {
        const previousIndex = previousPositions.get(problem.id);
        if (
          previousIndex !== undefined &&
          (45 - previousIndex) + dayIndex < schedule.generator.crossCycleSameProblemMinGapDays
        ) {
          throw new Error(`${cycle.id}: cross-cycle repeat too close for ${problem.id}`);
        }
      }
    }
  }

  previousPositions = new Map<string, number>();
  cycle.days.forEach((day, dayIndex) => {
    for (const problem of Object.values(day.problems)) previousPositions!.set(problem.id, dayIndex);
  });
}

console.log('BW26 Daily schedule verification passed.');
console.log(`  cycles: ${schedule.cycles.length}`);
console.log(`  days: ${schedule.cycles.length * 45}`);
console.log(`  coverage: ${schedule.cycles[0]!.days[0]!.date} -> ${schedule.cycles.at(-1)!.days.at(-1)!.date}`);
console.log('  cycle pool: 180 unique problems; A/C/G/N daily; four distinct years/day');
console.log(`  cross-cycle same-problem minimum gap: ${schedule.generator.crossCycleSameProblemMinGapDays} days`);
