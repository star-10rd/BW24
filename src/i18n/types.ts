export const locales = ['en', 'et'] as const;
export type Locale = (typeof locales)[number];

export type Messages = {
  meta: {
    description: string;
  };
  nav: {
    label: string;
    today: string;
    problems: string;
    training: string;
    materials: string;
  };
  common: {
    skipToContent: string;
    changeLanguage: string;
    useEnglish: string;
    useEstonian: string;
    changeTheme: string;
    useLightTheme: string;
    useDarkTheme: string;
  };
  home: {
    kicker: string;
    title: string;
    intro: string;
    problemsLabel: string;
    problemsText: string;
    trainingLabel: string;
    trainingText: string;
    materialsLabel: string;
    materialsText: string;
  };
  sections: {
    problems: {
      title: string;
      description: string;
    };
    training: {
      title: string;
      description: string;
    };
    materials: {
      title: string;
      description: string;
    };
  };
  notFound: {
    title: string;
    description: string;
    action: string;
  };
};
