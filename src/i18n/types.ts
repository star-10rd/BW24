import type { Domain } from '../lib/problems/types';
export const locales=['en','et'] as const; export type Locale=typeof locales[number];
export type Messages={
 meta:{description:string};
 nav:{label:string;today:string;problems:string;random:string;training:string;materials:string};
 common:{skipToContent:string;changeLanguage:string;useEnglish:string;useEstonian:string;changeTheme:string;useLightTheme:string;useDarkTheme:string};
 home:{kicker:string;title:string;intro:string;problemsLabel:string;problemsText:string;randomLabel:string;randomText:string;trainingLabel:string;trainingText:string;materialsLabel:string;materialsText:string;dailyAction:string;problemsAction:string;randomAction:string;trainingAction:string;recentLabel:string;practiceLabel:string;todayLabel:string;openToday:string};
 sections:{problems:{title:string;description:string};random:{title:string;description:string};training:{title:string;description:string};materials:{title:string;description:string};daily:{title:string;description:string};shortlist:{title:string;description:string}};
 problem:{
  backToProblems:string;backToShortlist:string;backToDaily:string;backToRandom:string;backToTraining:string;statement:string;review:string;reviewPrompt:string;reviewAction:string;dailyLocked:string;topics:string;solutions:string;solution:string;solutionUnavailable:string;
  contestContext:string;resultsFrom:string;teams:string;meanScore:string;scoresFourOrFive:string;scoreDistribution:string;estonia:string;allTeamScores:string;team:string;score:string;elsewhere:string;aopsYear:string;officialResults:string;
  previous:string;next:string;shortlistProblem:string;dailyContext:string;randomContext:string;trainingContext:string;domains:Record<Domain,string>;
 };
 archive:{years:string;problems:string;problem:string;shortlist:string;solutionAvailable:string;solutionUnavailable:string;filters:string;results:string;noResults:string;selectedTopics:string;verifiedOnly:string;allYears:string};
 daily:{today:string;todayAction:string;date:string;nextDaily:string;previousDays:string;outsideCoverage:string;openProblem:string;previous:string;next:string;previousDay:string;nextDay:string;chooseDate:string;domains:Record<Domain,string>};
 practice:{
  collection:string;contestProblems:string;shortlistProblems:string;domain:string;years:string;allPublicYears:string;moreFilters:string;topics:string;verifiedSolutionOnly:string;eligible:string;giveProblem:string;
  randomUnavailableDaily:string;randomStateLost:string;storageFallback:string;selectionFailed:string;anotherProblem:string;changePool:string;
  buildSet:string;includeShortlist:string;includeShortlistShort:string;setSize:string;startTraining:string;continueTraining:string;replaceSession:string;noStorage:string;noMatches:string;capped:string;problemOf:string;previousProblem:string;nextProblem:string;endSession:string;
  focus:string;allDomains:string;customize:string;domainsAdvanced:string;practiceSet:string;startPractice:string;continuePractice:string;customSize:string;setOverview:string;currentProblem:string;reviewedInSession:string;buildAnotherSet:string;endPractice:string;fiveProblems:string;tenProblems:string;
  recent:string;randomSource:string;trainingSource:string;
 };
 taxonomy:{subtopics:Record<string,string>};
 notFound:{title:string;description:string;action:string};
};
