import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CircleCheck, CircleX, RotateCcw, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import { useProgress } from '@/contexts/ProgressContext'
import { quizQuestions } from '@/data/quizQuestions'

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

export default function Quiz() {
  const { t, tx } = useLanguage()
  const { recordQuizAttempt } = useProgress()
  const [questions] = useState(() => shuffle(quizQuestions))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = questions[index]
  const total = questions.length
  const isLast = index === total - 1

  const percent = useMemo(() => ((index + (selected !== null ? 1 : 0)) / total) * 100, [index, selected, total])

  function handleSelect(optionIndex: number) {
    if (selected !== null) return
    setSelected(optionIndex)
    if (optionIndex === question.correctIndex) setScore((s) => s + 1)
  }

  function handleNext() {
    if (isLast) {
      recordQuizAttempt(score, total)
      setFinished(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  function handleRetake() {
    setIndex(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((score / total) * 100)
    return (
      <div className="mx-auto flex max-w-lg flex-col items-center gap-5 py-16 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex size-16 items-center justify-center rounded-2xl gradient-accent shadow-premium"
        >
          <Trophy className="size-8 text-white" />
        </motion.div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{t('quiz.yourScore')}</p>
          <p className="text-4xl font-semibold tracking-tight">
            {score}/{total} · {pct}%
          </p>
        </div>
        <Button onClick={handleRetake} className="gap-2">
          <RotateCcw className="size-4" />
          {t('quiz.retake')}
        </Button>
      </div>
    )
  }

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6">
      <header>
        <h1 className="text-3xl font-semibold tracking-tight">{t('quiz.title')}</h1>
        <p className="mt-2 text-[15px] text-muted-foreground">{t('quiz.subtitle')}</p>
      </header>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {t('quiz.question')} {index + 1} {t('quiz.of')} {total}
          </span>
          <span>{score} ✓</span>
        </div>
        <Progress value={percent} className="h-1.5" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6"
        >
          <h2 className="text-lg font-semibold leading-relaxed tracking-tight">{tx(question.question)}</h2>

          <div className="mt-5 flex flex-col gap-2.5">
            {question.options.map((option, i) => {
              const isCorrect = i === question.correctIndex
              const isSelected = i === selected
              const showState = selected !== null

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={selected !== null}
                  className={cn(
                    'flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors',
                    !showState && 'border-border/60 hover:border-primary/40 hover:bg-muted/50',
                    showState && isCorrect && 'border-emerald-500/40 bg-emerald-500/10',
                    showState && isSelected && !isCorrect && 'border-rose-500/40 bg-rose-500/10',
                    showState && !isSelected && !isCorrect && 'border-border/40 opacity-50',
                  )}
                >
                  <span>{tx(option)}</span>
                  {showState && isCorrect && <CircleCheck className="size-4 shrink-0 text-emerald-500" />}
                  {showState && isSelected && !isCorrect && <CircleX className="size-4 shrink-0 text-rose-500" />}
                </button>
              )
            })}
          </div>

          {selected !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.25 }}
              className="mt-4 overflow-hidden"
            >
              <div
                className={cn(
                  'flex items-start gap-2.5 rounded-xl p-4 text-sm leading-relaxed',
                  selected === question.correctIndex
                    ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
                    : 'bg-rose-500/10 text-rose-700 dark:text-rose-300',
                )}
              >
                {selected === question.correctIndex ? (
                  <CircleCheck className="mt-0.5 size-4 shrink-0" />
                ) : (
                  <CircleX className="mt-0.5 size-4 shrink-0" />
                )}
                <div>
                  <p className="font-semibold">
                    {selected === question.correctIndex ? t('quiz.correct') : t('quiz.incorrect')}
                  </p>
                  <p className="mt-1 text-muted-foreground">{tx(question.explanation)}</p>
                </div>
              </div>

              <Button onClick={handleNext} className="mt-4 w-full">
                {isLast ? t('quiz.finish') : t('quiz.nextQuestion')}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
