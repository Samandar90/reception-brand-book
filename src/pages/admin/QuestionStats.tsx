import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ChartColumn, Lightbulb, TriangleAlert } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations'
import { fetchQuestionStats, type QuestionStat } from '@/lib/adminApi'
import { quizQuestions } from '@/data/quizQuestions'
import { getModuleBySlug } from '@/data/modules'
import { getLanguageQuestion } from '@/data/languageTests'
import type { LanguageSkill } from '@/types'
import { EASE, ErrorState, LoadingState } from './adminKit'

type Kind = QuestionStat['kind']
type Flag = 'hard' | 'easy' | null

/** Answers needed before a question is judged. */
const MIN_ANSWERS = 8
const HARD_BELOW = 30
const EASY_ABOVE = 95

const KINDS: { kind: Kind; labelKey: TranslationKey }[] = [
  { kind: 'knowledge', labelKey: 'test.knowledge' },
  { kind: 'english', labelKey: 'test.english' },
  { kind: 'russian', labelKey: 'test.russian' },
]

const SKILL_KEY: Record<LanguageSkill, TranslationKey> = {
  grammar: 'admin.q.skill.grammar',
  vocabulary: 'admin.q.skill.vocabulary',
  dialogue: 'admin.q.skill.dialogue',
  reading: 'admin.q.skill.reading',
}

const quizById = new Map(quizQuestions.map((q) => [q.id, q]))

interface Row {
  stat: QuestionStat
  text: string | null
  context: string | null
  tags: string[]
  correctAnswer: string | null
  flag: Flag
}

function flagOf(s: QuestionStat): Flag {
  if (s.answered < MIN_ANSWERS) return null
  if (s.pctCorrect < HARD_BELOW) return 'hard'
  if (s.pctCorrect > EASY_ABOVE) return 'easy'
  return null
}

export default function QuestionStats() {
  const { t, tf, tx } = useLanguage()
  const [stats, setStats] = useState<QuestionStat[] | null>(null)
  const [error, setError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const [kind, setKind] = useState<Kind>('knowledge')
  const [onlyFlagged, setOnlyFlagged] = useState(false)

  useEffect(() => {
    let cancelled = false
    fetchQuestionStats()
      .then((data) => {
        if (cancelled) return
        setStats(data)
        setError(false)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  function retry() {
    setError(false)
    setStats(null)
    setReloadKey((k) => k + 1)
  }

  const byKind = useMemo(() => {
    const out: Record<Kind, Row[]> = { knowledge: [], english: [], russian: [] }
    for (const s of stats ?? []) {
      let row: Row
      if (s.kind === 'knowledge') {
        const q = quizById.get(s.questionId)
        const mod = q?.moduleSlug ? getModuleBySlug(q.moduleSlug) : undefined
        row = {
          stat: s,
          text: q ? tx(q.question) : null,
          context: null,
          tags: mod ? [tx(mod.title)] : [],
          correctAnswer: q ? (q.options[q.correctIndex] ? tx(q.options[q.correctIndex]) : null) : null,
          flag: flagOf(s),
        }
      } else {
        const q = getLanguageQuestion(s.questionId)
        row = {
          stat: s,
          text: q ? q.prompt : null,
          context: q?.context ?? null,
          tags: q ? [q.level, t(SKILL_KEY[q.skill])] : [],
          correctAnswer: q ? (q.options[q.correctIndex] ?? null) : null,
          flag: flagOf(s),
        }
      }
      if (out[s.kind]) out[s.kind].push(row)
    }
    for (const k of Object.keys(out) as Kind[]) {
      out[k].sort((a, b) => a.stat.pctCorrect - b.stat.pctCorrect || b.stat.answered - a.stat.answered)
    }
    return out
  }, [stats, t, tx])

  if (error) return <ErrorState onRetry={retry} />
  if (!stats) return <LoadingState />

  return (
    <div className="flex flex-col gap-6">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="flex gap-3 rounded-2xl border border-border/60 bg-card p-5 shadow-premium"
      >
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl gradient-accent">
          <Lightbulb className="size-5 text-white" />
        </div>
        <div className="text-sm">
          <h2 className="font-semibold tracking-tight">{t('admin.q.introTitle')}</h2>
          <p className="mt-1 text-muted-foreground">{tf('admin.q.intro', { min: MIN_ANSWERS })}</p>
          <ul className="mt-2 flex flex-col gap-1 text-muted-foreground">
            <li>
              <span className="font-medium text-rose-600 dark:text-rose-400">{tf('admin.q.hardRule', { pct: HARD_BELOW })}</span>{' '}
              — {t('admin.q.hardAction')}
            </li>
            <li>
              <span className="font-medium text-sky-600 dark:text-sky-400">{tf('admin.q.easyRule', { pct: EASY_ABOVE })}</span>{' '}
              — {t('admin.q.easyAction')}
            </li>
          </ul>
        </div>
      </motion.section>

      {stats.length === 0 ? (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-card px-6 py-14 text-center shadow-premium">
          <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
            <ChartColumn className="size-5" />
          </div>
          <p className="font-medium">{t('admin.q.emptyTitle')}</p>
          <p className="max-w-sm text-sm text-muted-foreground">{t('admin.q.emptyBody')}</p>
        </div>
      ) : (
        <Tabs value={kind} onValueChange={(v) => setKind(v as Kind)} className="gap-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="-mx-4 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
              <TabsList className="h-10! min-w-max">
                {KINDS.map((k) => {
                  const flagged = byKind[k.kind].filter((r) => r.flag === 'hard').length
                  return (
                    <TabsTrigger key={k.kind} value={k.kind} className="px-3">
                      {t(k.labelKey)}
                      <span className="text-xs tabular-nums text-muted-foreground">{byKind[k.kind].length}</span>
                      {flagged > 0 && (
                        <span className="flex size-5 items-center justify-center rounded-full bg-rose-500 text-[11px] font-semibold text-white">
                          {flagged}
                        </span>
                      )}
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>
            <div className="flex items-center gap-2.5">
              <Switch id="q-only-flagged" checked={onlyFlagged} onCheckedChange={setOnlyFlagged} />
              <Label htmlFor="q-only-flagged" className="cursor-pointer font-normal text-muted-foreground">
                {t('admin.q.onlyFlagged')}
              </Label>
            </div>
          </div>

          {KINDS.map((k) => {
            const rows = onlyFlagged ? byKind[k.kind].filter((r) => r.flag) : byKind[k.kind]
            return (
              <TabsContent key={k.kind} value={k.kind}>
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-premium">
                  {rows.length === 0 ? (
                    <p className="px-6 py-12 text-center text-sm text-muted-foreground">
                      {onlyFlagged ? t('admin.q.noFlagged') : t('admin.q.noAnswersKind')}
                    </p>
                  ) : (
                    <ul className="divide-y divide-border/60">
                      {rows.map((row) => (
                        <QuestionRow key={row.stat.questionId} row={row} />
                      ))}
                    </ul>
                  )}
                </div>
              </TabsContent>
            )
          })}
        </Tabs>
      )}
    </div>
  )
}

function QuestionRow({ row }: { row: Row }) {
  const { t, tf } = useLanguage()
  const { stat, flag } = row
  const pct = Math.max(0, Math.min(100, stat.pctCorrect))
  const barClass =
    pct < HARD_BELOW ? 'bg-rose-500' : pct < 60 ? 'bg-amber-500' : pct > EASY_ABOVE ? 'bg-sky-500' : 'bg-emerald-500'

  return (
    <li
      className={cn(
        'flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5',
        flag === 'hard' && 'bg-rose-500/5',
      )}
    >
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
          {row.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full text-[11px]">
              {tag}
            </Badge>
          ))}
          {flag === 'hard' && (
            <Badge className="h-auto rounded-full bg-rose-500/12 py-0.5 whitespace-normal text-[11px] text-rose-700 dark:text-rose-300">
              <TriangleAlert />
              {t('admin.q.flagHard')}
            </Badge>
          )}
          {flag === 'easy' && (
            <Badge className="rounded-full bg-sky-500/12 text-[11px] text-sky-700 dark:text-sky-300">{t('admin.q.flagEasy')}</Badge>
          )}
        </div>
        {row.context && <p className="line-clamp-2 text-xs italic text-muted-foreground">{row.context}</p>}
        <p className="text-sm font-medium leading-relaxed">
          {row.text ?? <span className="text-muted-foreground">{tf('admin.q.unknown', { id: stat.questionId })}</span>}
        </p>
        {flag === 'hard' && row.correctAnswer && (
          <p className="mt-1 text-xs text-muted-foreground">
            {t('admin.q.keyAnswer')}: <span className="font-medium text-foreground">{row.correctAnswer}</span>
          </p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-3 sm:w-60">
        <span className="w-20 text-xs tabular-nums text-muted-foreground">{tf('admin.q.answered', { n: stat.answered })}</span>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <div className={cn('h-full rounded-full', barClass)} style={{ width: `${pct}%` }} />
        </div>
        <span className="w-11 text-right text-sm font-semibold tabular-nums">{Math.round(pct)}%</span>
      </div>
    </li>
  )
}
