import type { Messages } from './types';

export const en: Messages = {
  meta: {
    description: 'Baltic Way team training.',
  },
  nav: {
    label: 'Primary navigation',
    today: 'Today',
    problems: 'Problems',
    training: 'Training',
    materials: 'Materials',
  },
  common: {
    skipToContent: 'Skip to content',
    changeLanguage: 'Change language',
    useEnglish: 'Use English',
    useEstonian: 'Use Estonian',
    changeTheme: 'Change theme',
    useLightTheme: 'Use light theme',
    useDarkTheme: 'Use dark theme',
  },
  home: {
    kicker: 'Baltic Way 2026',
    title: 'Today',
    intro: 'A focused place for the team’s problems, training, and materials.',
    problemsLabel: 'Problems',
    problemsText: 'A static Baltic Way archive will grow from the problem renderer established here.',
    trainingLabel: 'Training',
    trainingText: 'Curated sets and team sessions will build on the same canonical problems.',
    materialsLabel: 'Materials',
    materialsText: 'Handouts and topic resources will stay close to the problems they support.',
  },
  sections: {
    problems: {
      title: 'Problems',
      description: 'The problem experience is being established before the full Baltic Way archive is imported.',
    },
    training: {
      title: 'Training',
      description: 'Curated problem sets and team training will be built on the shared problem system.',
    },
    materials: {
      title: 'Materials',
      description: 'Training material will be structured by topic and connected to relevant problems.',
    },
  },
  problem: {
    backToProblems: 'Problems',
    fixtureNote: 'Renderer fixture — this is synthetic test content, not an archived Baltic Way problem.',
    statement: 'Problem statement',
    solutions: 'Solutions',
    solution: 'Solution',
    source: 'Source',
    alsoAppeared: 'Also appeared as',
    mathnetFutureNote: 'Canonical source attribution and MathNet record references are added during corpus ingestion.',
    previewTitle: 'Problem renderer',
    previewDescription: 'A deliberately demanding fixture for mathematics, figures, solutions, source appearances, dark mode, and responsive reading.',
    previewAction: 'Open fixture',
    domains: {
      A: 'Algebra',
      N: 'Number Theory',
      C: 'Combinatorics',
      G: 'Geometry',
    },
  },
  notFound: {
    title: 'Page not found',
    description: 'The page you were looking for does not exist.',
    action: 'Back to Today',
  },
};
