import type { QuizQuestion } from '@/types'
import { quizPart1 } from './quiz/part1'
import { quizPart2 } from './quiz/part2'

/** Knowledge test bank: 4 scenario questions per module, 60 in total. Also feeds the lesson "Check yourself". */
export const quizQuestions: QuizQuestion[] = [...quizPart1, ...quizPart2]

export default quizQuestions
