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

export interface QuizAttempt {
  score: number
  total: number
  date: string
}

export interface RoomType {
  id: string
  name: LocalizedText
  description: LocalizedText
  features: LocalizedText[]
}
