export const domains = ['A', 'N', 'C', 'G'] as const;
export type Domain = (typeof domains)[number];

export type ProblemSeries = 'BW' | 'BW-SL';

export type ProblemAppearance = {
  series: ProblemSeries;
  year: number;
  number: string;
};

export type ProblemText = {
  language: 'en';
  markdown: string;
};

export type ProblemAsset = {
  key: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  presentation: 'diagram' | 'image';
};

export type ProblemSolution = {
  id: string;
  language: 'en';
  markdown: string;
};

export type ProblemDocument = {
  id: string;
  domain: Domain;
  statement: ProblemText;
  appearances: ProblemAppearance[];
  topics?: string[];
  assets: ProblemAsset[];
  solutions: ProblemSolution[];
};
