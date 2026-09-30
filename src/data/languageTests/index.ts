import type { LanguageQuestion, TestLanguage, WritingPrompt } from '@/types'
import { enA1 } from './en-a1'
import { enA2 } from './en-a2'
import { enB1 } from './en-b1'
import { enB2 } from './en-b2'
import { enC1 } from './en-c1'
import { ruA1 } from './ru-a1'
import { ruA2 } from './ru-a2'
import { ruB1 } from './ru-b1'
import { ruB2 } from './ru-b2'
import { ruC1 } from './ru-c1'
import { enWriting } from './en-writing'
import { ruWriting } from './ru-writing'

/** Placement-test banks: 10 questions per CEFR level (A1–C1) per language. */
export const languageBank: Record<TestLanguage, LanguageQuestion[]> = {
  en: [...enA1, ...enA2, ...enB1, ...enB2, ...enC1],
  ru: [...ruA1, ...ruA2, ...ruB1, ...ruB2, ...ruC1],
}

export const writingPrompts: Record<TestLanguage, WritingPrompt[]> = {
  en: enWriting,
  ru: ruWriting,
}

const byId = new Map<string, LanguageQuestion>([...languageBank.en, ...languageBank.ru].map((q) => [q.id, q]))

export function getLanguageQuestion(id: string): LanguageQuestion | undefined {
  return byId.get(id)
}

const promptById = new Map<string, WritingPrompt>([...enWriting, ...ruWriting].map((p) => [p.id, p]))

export function getWritingPrompt(id: string): WritingPrompt | undefined {
  return promptById.get(id)
}
