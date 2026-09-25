export const site={
  name:'BW26',
  season:2026,
  desktopNavigation:[
    {id:'problems',path:'problems'},
    {id:'today',path:'daily'},
    {id:'random',path:'random'},
    {id:'training',path:'training'},
    {id:'materials',path:'materials'},
  ],
  mobileNavigation:[
    {id:'today',path:'daily'},
    {id:'random',path:'random'},
    {id:'problems',path:'problems'},
    {id:'training',path:'training'},
  ],
} as const;
export type PrimaryRoute=(typeof site.desktopNavigation)[number]['id'];
