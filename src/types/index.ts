export type Language = 'ru' | 'uz' | 'en'

export type LocalizedText = Record<Language, string>

export type Difficulty = 'beginner' | 'intermediate' | 'advanced'

export interface DialogueLine {
  speaker: 'receptionist' | 'guest'
  text: LocalizedText
}

export interface DialogueExample {
  type: 'good' | 'bad'
  lines: DialogueLine[]
  note?: LocalizedText
}

export type CalloutType = 'tip' | 'warning' | 'golden-rule' | 'mistake'

export interface CalloutData {
  type: CalloutType
  title: LocalizedText
  body: LocalizedText
}

export interface LessonSection {
  id: string
  heading: LocalizedText
  body: LocalizedText
  dialogues?: DialogueExample[]
  callouts?: CalloutData[]
}

export interface Module {
  slug: string
  order: number
  icon: string
  title: LocalizedText
  description: LocalizedText
  readingTimeMin: number
  difficulty: Difficulty
  sections: LessonSection[]
  commonMistakes: LocalizedText[]
  goldenRules: LocalizedText[]
}

export interface Phrase {
  id: string
  category: string
  ru: string
  uz: string
  en: string
}

export interface PhraseCategory {
  id: string
  label: LocalizedText
  icon: string
  phrases: Phrase[]
}

export interface CallScript {
  id: string
  title: LocalizedText
  description: LocalizedText
  lines: DialogueLine[]
}

export interface MessageTemplate {
  id: string
  title: LocalizedText
  ru: string
  uz: string
  en: string
}

export interface QuizQuestion {
  id: string
  moduleSlug?: string
  question: LocalizedText
  options: LocalizedText[]
  correctIndex: number
  explanation: LocalizedText
}

export interface WritingSubmission {
  promptId: string
  text: string
  wordCount: number
  durationSec: number
  /** Paste attempts blocked in the answer box (honesty signal for the administrator). */
  pasteAttempts?: number
}

/** Writing grading rubric: task completed, tone with the guest, grammar, level-appropriate vocabulary (0–1 each). */
export interface WritingRubricScores {
  task: number
  tone: number
  grammar: number
  vocabulary: number
}

export type ActivityEvent = 'login' | 'lesson_view' | 'lesson_complete' | 'test_start' | 'test_finish' | 'final_join'

/** One finished test, as stored in test_attempts. */
export interface TestAttempt {
  id: string
  userId: string
  kind: TestKind
  score: number
  total: number
  percent: number
  /** CEFR level for language tests ('A0' = below A1), null otherwise. */
  level: string | null
  details: Record<string, unknown>
  writing: WritingSubmission | null
  writingScore: number | null
  writingComment: string | null
  /** Admin's rubric: each criterion 0, 0.5 or 1. */
  writingRubric: WritingRubricScores | null
  sessionId: string | null
  startedAt: string
  finishedAt: string
  durationSec: number | null
}

export interface NewAttemptInput {
  kind: Exclude<TestKind, 'final'>
  score: number
  total: number
  level?: string | null
  details?: Record<string, unknown>
  writing?: WritingSubmission | null
  startedAt: string
  durationSec?: number
}

export interface RoomType {
  id: string
  name: LocalizedText
  description: LocalizedText
  features: LocalizedText[]
}

// ─── Assessment platform ─────────────────────────────────────────────────────

export type UserRole = 'admin' | 'employee'

export interface Profile {
  id: string
  login: string
  fullName: string
  role: UserRole
  position: string | null
  isActive: boolean
  createdAt: string
}

export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
export const CEFR_LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1']

export type TestLanguage = 'en' | 'ru'
export type LanguageSkill = 'grammar' | 'vocabulary' | 'reading' | 'dialogue'

/** One multiple-choice item of a language placement test. All content is in the target language. */
export interface LanguageQuestion {
  id: string
  language: TestLanguage
  level: CefrLevel
  skill: LanguageSkill
  /** Optional short passage / situation shown above the prompt (target language). */
  context?: string
  /** Question stem (target language). */
  prompt: string
  /** Exactly 4 options (target language). */
  options: string[]
  correctIndex: number
  /** Shown after the test in the UI language. */
  explanation: LocalizedText
}

/** A short written task given after the multiple-choice part, graded by the administrator. */
export interface WritingPrompt {
  id: string
  language: TestLanguage
  level: CefrLevel
  /** Task description shown in the UI language. */
  instruction: LocalizedText
  /** The guest's message / situation to respond to (target language). */
  situation: string
  minWords: number
  maxWords: number
}

export type TestKind = 'knowledge' | 'english' | 'russian' | 'final'

export interface FinalChoiceQuestion {
  id: string
  type: 'choice'
  moduleSlugs: string[]
  scenario: LocalizedText
  question: LocalizedText
  /** Exactly 4 options. */
  options: LocalizedText[]
  correctIndex: number
  explanation: LocalizedText
}

export interface FinalOpenQuestion {
  id: string
  type: 'open'
  moduleSlugs: string[]
  scenario: LocalizedText
  question: LocalizedText
  /** What a strong answer must contain — shown to the administrator while grading. */
  rubric: LocalizedText
}

export type FinalQuestion = FinalChoiceQuestion | FinalOpenQuestion

// ─── Live final test (mirrors the server tables) ─────────────────────────────

export type FinalStatus = 'lobby' | 'question' | 'reveal' | 'finished' | 'cancelled'

export interface FinalSessionSettings {
  choiceSeconds: number
  openSeconds: number
}

/** Question payload pushed to phones by open_final_question — never contains the answer key. */
export interface FinalCurrentQuestion {
  id: string
  type: 'choice' | 'open'
  scenario: LocalizedText
  question: LocalizedText
  options?: LocalizedText[]
}

export interface FinalReveal {
  questionId: string
  correctIndex: number | null
  explanation: LocalizedText | null
  distribution: number[]
  answered: number
  correctCount: number
}

export interface FinalSession {
  id: string
  title: string
  status: FinalStatus
  questionIds: string[]
  currentIndex: number
  askedCount: number
  currentQuestion: FinalCurrentQuestion | null
  reveal: FinalReveal | null
  questionStartedAt: string | null
  questionDeadlineAt: string | null
  settings: FinalSessionSettings
  createdBy: string | null
  createdAt: string
  finishedAt: string | null
}

export interface FinalParticipant {
  sessionId: string
  userId: string
  displayName: string
  joinedAt: string
  lastSeenAt: string
  answeredCount: number
  score: number
  rank: number | null
}

export interface FinalAnswer {
  sessionId: string
  userId: string
  questionId: string
  answerIndex: number | null
  answerText: string | null
  isCorrect: boolean | null
  points: number
  responseMs: number | null
  openScore: number | null
  answeredAt: string
}

// ─── Admin ───────────────────────────────────────────────────────────────────

export interface TestGrant {
  id: string
  userId: string
  kind: 'english' | 'russian'
  grantedBy: string | null
  createdAt: string
  expiresAt: string
  usedByAttemptId: string | null
  usedAt: string | null
}

export interface ModuleProgressRow {
  moduleSlug: string
  completedAt: string
  checkScore: number | null
  checkTotal: number | null
}

export interface ActivityRow {
  id: number
  event: ActivityEvent
  meta: Record<string, unknown>
  createdAt: string
}

/** One row of the employee_overview view. */
export interface EmployeeOverview {
  id: string
  login: string
  fullName: string
  role: UserRole
  position: string | null
  isActive: boolean
  createdAt: string
  modulesCompleted: number
  knowledgeBest: number | null
  knowledgeLast: number | null
  knowledgeAt: string | null
  englishLevel: string | null
  englishAt: string | null
  englishAttempts: number
  russianLevel: string | null
  russianAt: string | null
  russianAttempts: number
  finalPercent: number | null
  finalGradingStatus: 'pending' | 'graded' | null
  finalAt: string | null
  lastActiveAt: string | null
  ungradedWriting: number
  openGrants: number
}
