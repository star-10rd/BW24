import type { Domain } from '../lib/problems/types';
export const locales=['en','et'] as const; export type Locale=typeof locales[number];
export type Messages={
 meta:{description:string};
 nav:{label:string;today:string;problems:string;training:string;materials:string};
 common:{skipToContent:string;changeLanguage:string;useEnglish:string;useEstonian:string;changeTheme:string;useLightTheme:string;useDarkTheme:string};
 home:{kicker:string;title:string;intro:string;problemsLabel:string;problemsText:string;trainingLabel:string;trainingText:string;materialsLabel:string;materialsText:string;dailyAction:string;problemsAction:string};
 sections:{problems:{title:string;description:string};training:{title:string;description:string};materials:{title:string;description:string};daily:{title:string;description:string};shortlist:{title:string;description:string}};
 problem:{
  backToProblems:string;backToShortlist:string;backToDaily:string;statement:string;review:string;reviewPrompt:string;reviewAction:string;dailyLocked:string;topics:string;solutions:string;solution:string;solutionUnavailable:string;
  contestContext:string;resultsFrom:string;teams:string;meanScore:string;scoresFourOrFive:string;scoreDistribution:string;estonia:string;allTeamScores:string;team:string;score:string;elsewhere:string;aopsYear:string;officialResults:string;
  previous:string;next:string;shortlistProblem:string;dailyContext:string;domains:Record<Domain,string>;
 };
 archive:{years:string;problems:string;problem:string;shortlist:string;solutionAvailable:string;solutionUnavailable:string};
 daily:{today:string;date:string;nextDaily:string;previousDays:string;outsideCoverage:string;openProblem:string;domains:Record<Domain,string>};
 taxonomy:{subtopics:Record<string,string>};
 notFound:{title:string;description:string;action:string};
};
