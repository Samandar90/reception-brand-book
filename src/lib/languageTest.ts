import type { CefrLevel, LanguageQuestion, LanguageSkill, TestLanguage, WritingPrompt } from '@/types'
import { CEFR_LEVELS } from '@/types'
import { shuffle } from '@/lib/shuffle'

// ─── Rules ───────────────────────────────────────────────────────────────────

/** Questions asked per level: 2 of each skill. */
export const QUESTIONS_PER_LEVEL = 8
export const PER_SKILL = 2
/** Correct answers needed (out of 8) to unlock the next level. */
export const LEVEL_PASS_SCORE = 6
/** Seconds allowed per level section. */
export const LEVEL_SECONDS = 300
/** Seconds allowed for the writing task. */
export const WRITING_SECONDS = 600
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
 * Picks 8 questions for a level: 2 per skill, preferring ones the employee has not seen in
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
  version: 1
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
    if (parsed.version !== 1 || parsed.userId !== userId || parsed.language !== language) return null
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

/** The level reached so far: the highest passed level, or 'A0' if A1 was failed. */
export function reachedLevel(results: LevelResult[]): ReachedLevel {
  const passed = results.filter((r) => r.passed).map((r) => r.level)
  if (!passed.length) return 'A0'
  return passed.reduce((best, l) => (CEFR_LEVELS.indexOf(l) > CEFR_LEVELS.indexOf(best) ? l : best), passed[0])
}

export function perLevelScores(results: LevelResult[]): Record<string, number> {
  return Object.fromEntries(results.map((r) => [r.level, r.score]))
}

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length
}
