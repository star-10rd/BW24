import type { Messages } from './types';

export const et: Messages = {
  meta: {
    description: 'Baltic Way võistkonna treening.',
  },
  nav: {
    label: 'Põhinavigatsioon',
    today: 'Täna',
    problems: 'Ülesanded',
    training: 'Treening',
    materials: 'Materjalid',
  },
  common: {
    skipToContent: 'Liigu sisu juurde',
    changeLanguage: 'Vaheta keelt',
    useEnglish: 'Kasuta inglise keelt',
    useEstonian: 'Kasuta eesti keelt',
    changeTheme: 'Vaheta kujundust',
    useLightTheme: 'Kasuta heledat kujundust',
    useDarkTheme: 'Kasuta tumedat kujundust',
  },
  home: {
    kicker: 'Baltic Way 2026',
    title: 'Täna',
    intro: 'Selge ja rahulik koht võistkonna ülesannete, treeningute ja materjalide jaoks.',
    problemsLabel: 'Ülesanded',
    problemsText: 'Siin loodud ülesandevaate peale ehitatakse staatiline Baltic Way arhiiv.',
    trainingLabel: 'Treening',
    trainingText: 'Valitud komplektid ja võistkonna treeningud hakkavad kasutama samu kanoonilisi ülesandeid.',
    materialsLabel: 'Materjalid',
    materialsText: 'Konspektid ja teemamaterjalid jäävad neid toetavate ülesannete lähedale.',
  },
  sections: {
    problems: {
      title: 'Ülesanded',
      description: 'Enne kogu Baltic Way arhiivi importimist viime lõpuni ülesande lugemise ja lahenduste kuvamise süsteemi.',
    },
    training: {
      title: 'Treening',
      description: 'Valitud ülesandekomplektid ja võistkonna treeningud hakkavad kasutama ühist ülesandesüsteemi.',
    },
    materials: {
      title: 'Materjalid',
      description: 'Treeningmaterjalid korrastatakse teemade järgi ja seotakse sobivate ülesannetega.',
    },
  },
  problem: {
    backToProblems: 'Ülesanded',
    fixtureNote: 'Renderduse test — see on sünteetiline testisisu, mitte Baltic Way arhiivi ülesanne.',
    statement: 'Ülesande tekst',
    solutions: 'Lahendused',
    solution: 'Lahendus',
    source: 'Allikas',
    alsoAppeared: 'Esines ka kujul',
    mathnetFutureNote: 'Kanooniline allikaviide ja MathNeti kirjeviited lisatakse korpuse importimisel.',
    previewTitle: 'Ülesande renderdaja',
    previewDescription: 'Tahtlikult nõudlik test matemaatika, jooniste, lahenduste, allikakirjete, tumeda režiimi ja eri ekraanisuuruste jaoks.',
    previewAction: 'Ava test',
    domains: {
      A: 'Algebra',
      N: 'Arvuteooria',
      C: 'Kombinatoorika',
      G: 'Geomeetria',
    },
  },
  notFound: {
    title: 'Lehte ei leitud',
    description: 'Otsitud lehte ei ole olemas.',
    action: 'Tagasi tänase juurde',
  },
};
