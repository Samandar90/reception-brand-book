import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import type { QuizAttempt } from '@/types'
import { readStorage, writeStorage } from '@/lib/storage'
import { PROGRESS_STORAGE_KEY, TOTAL_MODULES } from '@/lib/constants'
import { modules } from '@/data/modules'

interface ProgressState {
  completedModules: string[]
  quizAttempts: QuizAttempt[]
}

const DEFAULT_PROGRESS: ProgressState = {
  completedModules: [],
  quizAttempts: [],
}

interface ProgressContextValue {
  completedModules: string[]
  quizAttempts: QuizAttempt[]
  isModuleComplete: (slug: string) => boolean
  markModuleComplete: (slug: string) => void
  markModuleIncomplete: (slug: string) => void
  recordQuizAttempt: (score: number, total: number) => void
  resetProgress: () => void
  progressPercent: number
  completedCount: number
  remainingCount: number
  estimatedRemainingMinutes: number
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>(() => readStorage(PROGRESS_STORAGE_KEY, DEFAULT_PROGRESS))

  const persist = useCallback((next: ProgressState) => {
    setProgress(next)
    writeStorage(PROGRESS_STORAGE_KEY, next)
  }, [])

  const isModuleComplete = useCallback(
    (slug: string) => progress.completedModules.includes(slug),
    [progress.completedModules],
  )

  const markModuleComplete = useCallback(
    (slug: string) => {
      if (progress.completedModules.includes(slug)) return
      persist({ ...progress, completedModules: [...progress.completedModules, slug] })
    },
    [progress, persist],
  )

  const markModuleIncomplete = useCallback(
    (slug: string) => {
      persist({ ...progress, completedModules: progress.completedModules.filter((s) => s !== slug) })
    },
    [progress, persist],
  )

  const recordQuizAttempt = useCallback(
    (score: number, total: number) => {
      const attempt: QuizAttempt = { score, total, date: new Date().toISOString() }
      persist({ ...progress, quizAttempts: [...progress.quizAttempts, attempt] })
    },
    [progress, persist],
  )

  const resetProgress = useCallback(() => {
    persist(DEFAULT_PROGRESS)
  }, [persist])

  const value = useMemo<ProgressContextValue>(() => {
    const completedCount = progress.completedModules.length
    const remainingCount = Math.max(TOTAL_MODULES - completedCount, 0)
    const remainingMinutes = modules
      .filter((m) => !progress.completedModules.includes(m.slug))
      .reduce((sum, m) => sum + m.readingTimeMin, 0)

    return {
      completedModules: progress.completedModules,
      quizAttempts: progress.quizAttempts,
      isModuleComplete,
      markModuleComplete,
      markModuleIncomplete,
      recordQuizAttempt,
      resetProgress,
      progressPercent: Math.round((completedCount / TOTAL_MODULES) * 100),
      completedCount,
      remainingCount,
      estimatedRemainingMinutes: remainingMinutes,
    }
  }, [progress, isModuleComplete, markModuleComplete, markModuleIncomplete, recordQuizAttempt, resetProgress])

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
