import { CERTIFICATE_MIN_FINAL_PERCENT } from '@/lib/constants'
import type { TestAttempt } from '@/types'

/** A final-test attempt counts only when no open answer of it is still waiting for grading. */
export function isFinalGraded(a: TestAttempt): boolean {
  return a.details.gradingStatus !== 'pending'
}

/** The best graded final attempt that reaches the certificate mark, or null. */
export function certificateAttempt(finalAttempts: TestAttempt[]): TestAttempt | null {
  const passed = finalAttempts.filter((a) => isFinalGraded(a) && a.percent >= CERTIFICATE_MIN_FINAL_PERCENT)
  if (!passed.length) return null
  return passed.reduce((best, a) => (a.percent > best.percent ? a : best), passed[0])
}

/** Best final result so far (graded or not), for progress hints. */
export function bestFinalAttempt(finalAttempts: TestAttempt[]): TestAttempt | null {
  if (!finalAttempts.length) return null
  return finalAttempts.reduce((best, a) => (a.percent > best.percent ? a : best), finalAttempts[0])
}
