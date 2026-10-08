export const site = {
  name: 'BW26',
  season: 2026,
  primaryNavigation: [
    { id: 'today', path: 'daily' },
    { id: 'practice', path: 'practice' },
  ],
  utilityNavigation: [
    { id: 'search', path: 'search' },
  ],
  secondaryNavigation: [
    { id: 'materials', path: 'materials' },
  ],
} as const;

export type PrimaryRoute = (typeof site.primaryNavigation)[number]['id'];
