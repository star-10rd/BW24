export const site = {
  name: 'BW26',
  season: 2026,
  primaryNavigation: [
    { id: 'today', path: '' },
    { id: 'problems', path: 'problems' },
    { id: 'training', path: 'training' },
    { id: 'materials', path: 'materials' },
  ],
} as const;

export type PrimaryRoute = (typeof site.primaryNavigation)[number]['id'];
