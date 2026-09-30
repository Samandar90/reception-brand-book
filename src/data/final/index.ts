import type { FinalChoiceQuestion, FinalOpenQuestion, FinalQuestion } from '@/types'
import { finalChoice1 } from './choice-1'
import { finalChoice2 } from './choice-2'
import { finalOpen } from './open'

/** 30 scenario multiple-choice questions for the live final test. */
export const finalChoiceQuestions: FinalChoiceQuestion[] = [...finalChoice1, ...finalChoice2]

/** 8 open-ended tasks graded by the administrator (0-5). */
export const finalOpenQuestions: FinalOpenQuestion[] = finalOpen

export const finalQuestions: FinalQuestion[] = [...finalChoiceQuestions, ...finalOpenQuestions]

const byId = new Map<string, FinalQuestion>(finalQuestions.map((q) => [q.id, q]))

export function getFinalQuestion(id: string): FinalQuestion | undefined {
  return byId.get(id)
}
