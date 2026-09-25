import type { RandomStateV2 } from './random';
import type { TrainingSessionV2 } from './training';

export type ProblemExperience = 'archive' | 'daily' | 'random' | 'training';
export type ReviewState = 'available' | 'solve' | 'review' | 'locked';
export type ResolvedPracticeContext = {
  experience: ProblemExperience;
  reviewState: ReviewState;
  contextDate: string | null;
  poolId: string | null;
  sessionId: string | null;
};

export function resolvePracticeContextData(input: {
  problemId: string;
  dailyDates: readonly string[];
  today: string;
  context: string | null;
  date: string | null;
  poolId: string | null;
  sessionId: string | null;
  randomState: RandomStateV2 | null;
  trainingSession: TrainingSessionV2 | null;
  historyReviewed?: boolean;
}): ResolvedPracticeContext {
  let result: ResolvedPracticeContext = { experience: 'archive', reviewState: 'available', contextDate: null, poolId: null, sessionId: null };
  if (input.context === 'daily' && input.date && input.dailyDates.includes(input.date) && input.date <= input.today) {
    result = { experience: 'daily', reviewState: input.historyReviewed ? 'review' : 'solve', contextDate: input.date, poolId: null, sessionId: null };
  } else if (input.context === 'random' && input.poolId && input.randomState) {
    const pool = input.randomState.pools.find((candidate) => candidate.id === input.poolId);
    if (pool?.items.some((item) => item.id === input.problemId)) {
      result = { experience: 'random', reviewState: input.historyReviewed ? 'review' : 'solve', contextDate: null, poolId: pool.id, sessionId: null };
    }
  } else if (input.context === 'training' && input.sessionId && input.trainingSession?.sessionId === input.sessionId && input.trainingSession.items.some((item) => item.id === input.problemId)) {
    result = {
      experience: 'training',
      reviewState: input.trainingSession.reviewedIds.includes(input.problemId) ? 'review' : 'solve',
      contextDate: null,
      poolId: null,
      sessionId: input.trainingSession.sessionId,
    };
  }
  if (input.dailyDates.includes(input.today)) result.reviewState = 'locked';
  return result;
}
