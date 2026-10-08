export type EventText = { en: string; et: string };
export interface SeasonEvent {
  id: string;
  title: EventText;
  timeZone: string;
  startDate?: string;
  endDate?: string;
  // Only add a timestamp with an explicit UTC offset after its time is confirmed.
  startAt?: string;
  location?: EventText;
  url?: string;
  contestDate?: string;
}

// Dates checked against the organisers on 2026-10-08. Contest day is supplied
// by the site owner; the official detailed timetable is still pending.
export const seasonEvents: SeasonEvent[] = [
  { id: 'autumn-open', title: { en: 'Autumn Open Competition', et: 'Sügisene lahtine võistlus' },
    timeZone: 'Europe/Tallinn', startDate: '2026-09-26',
    url: 'https://teaduskool.ut.ee/et/olumpiaadid/lahtised/matemaatika' },
  ...['I', 'II', 'III'].map((n, i) => ({ id: `camp-${i + 1}`,
    title: { en: `Training Camp ${i + 1}`, et: `Treeninglaager ${n}` }, timeZone: 'Europe/Tallinn' })),
  { id: 'baltic-way', title: { en: 'Baltic Way 2026', et: 'Balti Tee 2026' },
    timeZone: 'Europe/Vilnius', startDate: '2026-11-12', endDate: '2026-11-16',
    contestDate: '2026-11-14', location: { en: 'Vilnius, Lithuania', et: 'Vilnius, Leedu' },
    url: 'https://bw2026.lt/' },
];
