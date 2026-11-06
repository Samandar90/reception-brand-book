import type { CefrLevel, LanguageQuestion, LanguageSkill, TestLanguage, WritingPrompt } from '@/types'
import { CEFR_LEVELS } from '@/types'
import { shuffle } from '@/lib/shuffle'

// ─── Rules ───────────────────────────────────────────────────────────────────

/**
 * One placement test of TOTAL_QUESTIONS items: from every level A1–C1 one grammar, one vocabulary, one dialogue
 * and one reading item, shown from the easiest level to the hardest. A level counts as reached when at least
 * LEVEL_PASS_SCORE of its QUESTIONS_PER_LEVEL items are correct AND every lower level is reached too, so a lucky
 * guess on a hard item cannot lift the result.
 */
export const QUESTIONS_PER_LEVEL = 4
export const PER_SKILL = 1
export const TOTAL_QUESTIONS = 20
/** Correct answers needed (out of 4) for a level to count. */
export const LEVEL_PASS_SCORE = 3
/** Seconds for the whole 20-question test (45 s per question on average). */
export const TEST_SECONDS = 900
/** Seconds allowed for the writing task. */
export const WRITING_SECONDS = 480
/** Writing is offered once this level has been reached. */
export const WRITING_MIN_LEVEL: CefrLevel = 'A2'

export const SKILLS: LanguageSkill[] = ['grammar', 'vocabulary', 'dialogue', 'reading']

export type ReachedLevel = 'A0' | CefrLevel

export function nextLevel(level: CefrLevel): CefrLevel | null {
  const i = CEFR_LEVELS.indexOf(level)
  return i >= 0 && i < CEFR_LEVELS.length - 1 ? CEFR_LEVELS[i + 1] : null
}

export function levelAtLeast(level: ReachedLevel, min: CefrLevel): boolean {
  if (level === 'A0') return false
  return CEFR_LEVELS.indexOf(level) >= CEFR_LEVELS.indexOf(min)
}

// ─── Question selection ──────────────────────────────────────────────────────

/**
 * Picks the questions of one level: PER_SKILL per skill, preferring ones the employee has not seen in
 * previous attempts. Falls back to seen ones (and to other skills) if the bank is short.
 */
export function buildLevelSet(bank: LanguageQuestion[], level: CefrLevel, seen: ReadonlySet<string>): LanguageQuestion[] {
  const pool = bank.filter((q) => q.level === level)
  const picked: LanguageQuestion[] = []
  const used = new Set<string>()

  for (const skill of SKILLS) {
    const ofSkill = pool.filter((q) => q.skill === skill)
    const unseen = shuffle(ofSkill.filter((q) => !seen.has(q.id)))
    const seenOnes = shuffle(ofSkill.filter((q) => seen.has(q.id)))
    for (const q of [...unseen, ...seenOnes]) {
      if (picked.filter((p) => p.skill === skill).length >= PER_SKILL) break
      picked.push(q)
      used.add(q.id)
    }
  }
  if (picked.length < QUESTIONS_PER_LEVEL) {
    const rest = shuffle(pool.filter((q) => !used.has(q.id)))
    for (const q of rest) {
      if (picked.length >= QUESTIONS_PER_LEVEL) break
      picked.push(q)
    }
  }
  return shuffle(picked)
}

/** The whole placement test: every level's set, from A1 to C1 (shuffled inside a level only). */
export function buildPlacementSet(bank: LanguageQuestion[], seen: ReadonlySet<string>): LanguageQuestion[] {
  return CEFR_LEVELS.flatMap((level) => buildLevelSet(bank, level, seen))
}

/** Returns the option order for display: indexes into `question.options`, shuffled. */
export function optionOrder(question: LanguageQuestion): number[] {
  return shuffle(question.options.map((_, i) => i))
}

export function pickWritingPrompt(prompts: WritingPrompt[], level: CefrLevel, seen: ReadonlySet<string>): WritingPrompt | null {
  const idx = CEFR_LEVELS.indexOf(level)
  // exact level first, then the nearest lower level
  for (let i = idx; i >= 0; i--) {
    const ofLevel = prompts.filter((p) => p.level === CEFR_LEVELS[i])
    if (!ofLevel.length) continue
    const unseen = ofLevel.filter((p) => !seen.has(p.id))
    return shuffle(unseen.length ? unseen : ofLevel)[0]
  }
  return null
}

// ─── Attempt state (kept in localStorage so a refresh does not lose the test) ─

export interface LevelResult {
  level: CefrLevel
  score: number
  total: number
  passed: boolean
  timedOut: boolean
}

export interface LanguageAnswerRecord {
  id: string
  level: CefrLevel
  skill: LanguageSkill
  selected: number | null
  correct: boolean
  ms: number
}

export interface LanguageAttemptState {
  /** 2 = single 20-question placement test (1 was the old level-by-level staircase). */
  version: 2
  language: TestLanguage
  userId: string
  startedAt: string
  /** 'level' while answering, 'writing' during the written task, 'done' when finished. */
  phase: 'level' | 'writing' | 'done'
  currentLevel: CefrLevel
  /** ids of the 8 questions of the current level, in display order */
  levelQuestionIds: string[]
  /** option order per question id */
  optionOrders: Record<string, number[]>
  /** index of the next unanswered question within the level */
  position: number
  levelStartedAt: number
  levelDeadlineAt: number
  levelCorrect: number
  answers: LanguageAnswerRecord[]
  levelResults: LevelResult[]
  focusLost: number
  writingPromptId: string | null
  writingStartedAt: number | null
  writingDeadlineAt: number | null
  writingText: string
}

export function attemptStorageKey(language: TestLanguage, userId: string): string {
  return `academy_langtest_${language}_${userId}`
}

export function loadAttemptState(language: TestLanguage, userId: string): LanguageAttemptState | null {
  try {
    const raw = localStorage.getItem(attemptStorageKey(language, userId))
    if (!raw) return null
    const parsed = JSON.parse(raw) as LanguageAttemptState
    // Runs saved by the old level-by-level format (version 1) are dropped; nothing of them reached the server.
    if (parsed.version !== 2 || parsed.userId !== userId || parsed.language !== language) return null
    return parsed
  } catch {
    return null
  }
}

export function saveAttemptState(state: LanguageAttemptState): void {
  try {
    localStorage.setItem(attemptStorageKey(state.language, state.userId), JSON.stringify(state))
  } catch {
    // ignore
  }
}

export function clearAttemptState(language: TestLanguage, userId: string): void {
  try {
    localStorage.removeItem(attemptStorageKey(language, userId))
  } catch {
    // ignore
  }
}

/** The level reached: the highest level passed with every lower level passed too, or 'A0' if A1 was failed. */
export function reachedLevel(results: LevelResult[]): ReachedLevel {
  let reached: ReachedLevel = 'A0'
  for (const level of CEFR_LEVELS) {
    if (!results.some((r) => r.level === level && r.passed)) break
    reached = level
  }
  return reached
}

/** Per-level results computed from the answers of a finished placement test. */
export function levelResultsOf(answers: LanguageAnswerRecord[], timedOut: boolean): LevelResult[] {
  return CEFR_LEVELS.map((level) => {
    const ofLevel = answers.filter((a) => a.level === level)
    const score = ofLevel.filter((a) => a.correct).length
    return {
      level,
      score,
      total: ofLevel.length,
      passed: ofLevel.length > 0 && score >= LEVEL_PASS_SCORE,
      timedOut: timedOut && ofLevel.some((a) => a.selected === null),
    }
  })
}

export function perLevelScores(results: LevelResult[]): Record<string, number> {
  return Object.fromEntries(results.map((r) => [r.level, r.score]))
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}
