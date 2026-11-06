/**
 * Static checks of every question bank. Run with `npm run validate:banks`.
 * Fails (exit 1) on broken structure or on banks too small for the test rules.
 */
import { languageBank, writingPrompts } from '../src/data/languageTests/index.ts'
import { quizQuestions } from '../src/data/quizQuestions.ts'
import { finalChoiceQuestions, finalOpenQuestions } from '../src/data/final/index.ts'
import { MODULE_ORDER } from '../src/lib/constants.ts'
import { PER_SKILL, SKILLS } from '../src/lib/languageTest.ts'
import { CEFR_LEVELS } from '../src/types/index.ts'
import type { LocalizedText } from '../src/types/index.ts'

const problems: string[] = []
const warnings: string[] = []
const warn = (msg: string) => warnings.push(msg)
const bad = (msg: string) => problems.push(msg)

const LANGS = ['ru', 'uz', 'en'] as const
function localized(where: string, text: LocalizedText | undefined, minLen = 1) {
  if (!text) return bad(`${where}: missing localized text`)
  for (const l of LANGS) {
    const v = text[l]
    if (typeof v !== 'string' || v.trim().length < minLen) bad(`${where}: empty or too short "${l}" text`)
  }
}
function uniqueIds(where: string, ids: string[]) {
  const seen = new Set<string>()
  for (const id of ids) {
    if (seen.has(id)) bad(`${where}: duplicate id ${id}`)
    seen.add(id)
  }
}
function distinctOptions(where: string, options: string[]) {
  const norm = options.map((o) => o.trim().toLowerCase())
  if (new Set(norm).size !== norm.length) bad(`${where}: duplicate options`)
  if (options.length !== 4) bad(`${where}: expected 4 options, got ${options.length}`)
  if (options.some((o) => !o.trim())) bad(`${where}: empty option`)
}
function keyBalance(where: string, keys: number[]) {
  if (keys.length < 8) return
  const counts = [0, 0, 0, 0]
  for (const k of keys) counts[k] = (counts[k] ?? 0) + 1
  const max = Math.max(...counts)
  if (max > keys.length * 0.5) warn(`${where}: correct answer is at the same position in ${max}/${keys.length} items`)
}

// ─── Language placement banks ────────────────────────────────────────────────
const MIN_PER_SKILL = PER_SKILL + 1 // enough variety for a retake with unseen items
for (const lang of ['en', 'ru'] as const) {
  const bank = languageBank[lang]
  uniqueIds(`lang ${lang}`, bank.map((q) => q.id))
  const keys: number[] = []
  for (const q of bank) {
    const where = `lang ${q.id}`
    if (q.language !== lang) bad(`${where}: language mismatch`)
    if (!CEFR_LEVELS.includes(q.level)) bad(`${where}: bad level ${q.level}`)
    if (!SKILLS.includes(q.skill)) bad(`${where}: bad skill ${q.skill}`)
    if (!q.prompt?.trim()) bad(`${where}: empty prompt`)
    distinctOptions(where, q.options)
    if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3) bad(`${where}: bad correctIndex`)
    else keys.push(q.correctIndex)
    localized(where + ' explanation', q.explanation, 20)
    if (q.skill === 'reading' && (q.context ?? '').length < 120) warn(`${where}: reading passage is short (${(q.context ?? '').length} chars)`)
  }
  keyBalance(`lang ${lang}`, keys)
  for (const level of CEFR_LEVELS) {
    for (const skill of SKILLS) {
      const n = bank.filter((q) => q.level === level && q.skill === skill).length
      if (n < MIN_PER_SKILL) bad(`lang ${lang} ${level}/${skill}: ${n} items, need at least ${MIN_PER_SKILL}`)
    }
  }
  const prompts = writingPrompts[lang]
  uniqueIds(`writing ${lang}`, prompts.map((p) => p.id))
  for (const p of prompts) {
    const where = `writing ${p.id}`
    if (p.language !== lang) bad(`${where}: language mismatch`)
    localized(where + ' instruction', p.instruction, 20)
    if (!p.situation?.trim()) bad(`${where}: empty situation`)
    if (!(p.minWords > 0 && p.maxWords > p.minWords)) bad(`${where}: bad word limits`)
  }
  for (const level of CEFR_LEVELS.filter((l) => l !== 'A1')) {
    const n = prompts.filter((p) => p.level === level).length
    if (n < 2) bad(`writing ${lang} ${level}: ${n} prompts, need at least 2`)
  }
}

// ─── Knowledge test / module checks ──────────────────────────────────────────
uniqueIds('quiz', quizQuestions.map((q) => q.id))
{
  const keys: number[] = []
  for (const q of quizQuestions) {
    const where = `quiz ${q.id}`
    if (!q.moduleSlug || !(MODULE_ORDER as readonly string[]).includes(q.moduleSlug)) bad(`${where}: unknown module ${q.moduleSlug}`)
    localized(where + ' question', q.question, 10)
    if (q.options.length !== 4) bad(`${where}: expected 4 options`)
    q.options.forEach((o, i) => localized(`${where} option ${i}`, o))
    for (const l of LANGS) distinctOptions(`${where} (${l})`, q.options.map((o) => o[l]))
    if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3) bad(`${where}: bad correctIndex`)
    else keys.push(q.correctIndex)
    localized(where + ' explanation', q.explanation, 20)
  }
  keyBalance('quiz', keys)
  for (const slug of MODULE_ORDER) {
    const n = quizQuestions.filter((q) => q.moduleSlug === slug).length
    if (n < 4) bad(`quiz ${slug}: ${n} questions, need at least 4`)
  }
}

// ─── Final test ──────────────────────────────────────────────────────────────
uniqueIds('final', [...finalChoiceQuestions, ...finalOpenQuestions].map((q) => q.id))
{
  const keys: number[] = []
  for (const q of finalChoiceQuestions) {
    const where = `final ${q.id}`
    if (q.type !== 'choice') bad(`${where}: type`)
    if (!q.moduleSlugs.length || q.moduleSlugs.some((s) => !(MODULE_ORDER as readonly string[]).includes(s))) bad(`${where}: bad moduleSlugs`)
    localized(where + ' scenario', q.scenario, 40)
    localized(where + ' question', q.question, 5)
    if (q.options.length !== 4) bad(`${where}: expected 4 options`)
    q.options.forEach((o, i) => localized(`${where} option ${i}`, o))
    for (const l of LANGS) distinctOptions(`${where} (${l})`, q.options.map((o) => o[l]))
    if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex > 3) bad(`${where}: bad correctIndex`)
    else keys.push(q.correctIndex)
    localized(where + ' explanation', q.explanation, 20)
  }
  keyBalance('final', keys)
  for (const q of finalOpenQuestions) {
    const where = `final ${q.id}`
    if (q.type !== 'open') bad(`${where}: type`)
    if (!q.moduleSlugs.length || q.moduleSlugs.some((s) => !(MODULE_ORDER as readonly string[]).includes(s))) bad(`${where}: bad moduleSlugs`)
    localized(where + ' scenario', q.scenario, 40)
    localized(where + ' question', q.question, 10)
    localized(where + ' rubric', q.rubric, 60)
  }
  const covered = new Set(finalChoiceQuestions.flatMap((q) => q.moduleSlugs))
  for (const slug of MODULE_ORDER) if (!covered.has(slug)) bad(`final: module ${slug} has no choice question`)
}

// ─── Report ──────────────────────────────────────────────────────────────────
const summary = {
  languageEn: languageBank.en.length,
  languageRu: languageBank.ru.length,
  writingEn: writingPrompts.en.length,
  writingRu: writingPrompts.ru.length,
  quiz: quizQuestions.length,
  finalChoice: finalChoiceQuestions.length,
  finalOpen: finalOpenQuestions.length,
}
console.log('banks:', JSON.stringify(summary))
for (const w of warnings) console.log('warn:', w)
if (problems.length) {
  for (const p of problems) console.error('FAIL:', p)
  console.error(`${problems.length} problem(s)`)
  process.exit(1)
}
console.log('all banks valid')
