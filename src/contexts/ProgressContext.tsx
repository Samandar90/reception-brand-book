import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { ActivityEvent, ModuleProgressRow, NewAttemptInput, TestAttempt, TestGrant, TestKind } from '@/types'
import { TOTAL_MODULES } from '@/lib/constants'
import { modules } from '@/data/modules'
import { useAuth } from '@/contexts/AuthContext'
import {
  deleteModuleProgress,
  fetchAttempts,
  fetchModuleProgress,
  fetchOpenGrants,
  insertAttempt,
  insertModuleProgress,
  logActivity,
} from '@/lib/api'

interface ProgressContextValue {
  loaded: boolean
  /** True when the last load from the server failed (data shown may be empty). */
  loadError: boolean
  completedModules: string[]
  moduleProgress: ModuleProgressRow[]
  attempts: TestAttempt[]
  /** Unused, unexpired retake grants for language tests. */
  openGrants: TestGrant[]
  isModuleComplete: (slug: string) => boolean
  /** Marks a module complete; pass the "check yourself" result when it was passed through the mini-quiz. */
  markModuleComplete: (slug: string, check?: { score: number; total: number }) => Promise<void>
  markModuleIncomplete: (slug: string) => Promise<void>
  recordAttempt: (input: NewAttemptInput) => Promise<TestAttempt | null>
  logEvent: (event: ActivityEvent, meta?: Record<string, unknown>) => void
  resetModules: () => Promise<void>
  reload: () => Promise<void>
  attemptsOf: (kind: TestKind) => TestAttempt[]
  latestAttempt: (kind: TestKind) => TestAttempt | null
  bestPercent: (kind: TestKind) => number | null
  progressPercent: number
  completedCount: number
  remainingCount: number
  estimatedRemainingMinutes: number
}

const ProgressContext = createContext<ProgressContextValue | null>(null)

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth()
  const userId = user?.id ?? null
  const [moduleProgress, setModuleProgress] = useState<ModuleProgressRow[]>([])
  const [attempts, setAttempts] = useState<TestAttempt[]>([])
  const [openGrants, setOpenGrants] = useState<TestGrant[]>([])
  const [loaded, setLoaded] = useState(false)
  const [loadError, setLoadError] = useState(false)
  const completedModules = useMemo(() => moduleProgress.map((m) => m.moduleSlug), [moduleProgress])

  const reload = useCallback(async () => {
    if (!userId) {
      setModuleProgress([])
      setAttempts([])
      setOpenGrants([])
      setLoaded(false)
      return
    }
    try {
      const [mods, atts, grants] = await Promise.all([fetchModuleProgress(userId), fetchAttempts(userId), fetchOpenGrants(userId)])
      setModuleProgress(mods)
      setAttempts(atts)
      setOpenGrants(grants)
      setLoadError(false)
    } catch (e) {
      setLoadError(true)
      throw e
    } finally {
      setLoaded(true)
    }
  }, [userId])

  useEffect(() => {
    let cancelled = false
    setLoaded(false)
    if (!userId) {
      setModuleProgress([])
      setAttempts([])
      setOpenGrants([])
      return
    }
    Promise.all([fetchModuleProgress(userId), fetchAttempts(userId), fetchOpenGrants(userId)])
      .then(([mods, atts, grants]) => {
        if (cancelled) return
        setModuleProgress(mods)
        setAttempts(atts)
        setOpenGrants(grants)
        setLoadError(false)
        setLoaded(true)
      })
      .catch((e) => {
        console.warn('progress load failed', e)
        if (!cancelled) {
          setLoadError(true)
          setLoaded(true)
        }
      })
    return () => {
      cancelled = true
    }
  }, [userId])

  const isModuleComplete = useCallback((slug: string) => completedModules.includes(slug), [completedModules])

  const markModuleComplete = useCallback(
    async (slug: string, check?: { score: number; total: number }) => {
      if (!userId) return
      const existing = moduleProgress.find((m) => m.moduleSlug === slug)
      if (existing && !check) return
      const optimistic: ModuleProgressRow = {
        moduleSlug: slug,
        completedAt: new Date().toISOString(),
        checkScore: check?.score ?? existing?.checkScore ?? null,
        checkTotal: check?.total ?? existing?.checkTotal ?? null,
      }
      setModuleProgress((prev) => [...prev.filter((m) => m.moduleSlug !== slug), optimistic])
      try {
        await insertModuleProgress(userId, slug, check)
        logActivity(userId, 'lesson_complete', { module: slug, ...(check ?? {}) })
      } catch (e) {
        setModuleProgress((prev) => (existing ? [...prev.filter((m) => m.moduleSlug !== slug), existing] : prev.filter((m) => m.moduleSlug !== slug)))
        throw e
      }
    },
    [userId, moduleProgress],
  )

  const markModuleIncomplete = useCallback(
    async (slug: string) => {
      if (!userId) return
      setModuleProgress((prev) => prev.filter((m) => m.moduleSlug !== slug))
      await deleteModuleProgress(userId, slug)
    },
    [userId],
  )

  const recordAttempt = useCallback(
    async (input: NewAttemptInput) => {
      if (!userId) return null
      const attempt = await insertAttempt(userId, input)
      setAttempts((prev) => [attempt, ...prev])
      if (input.kind === 'english' || input.kind === 'russian') {
        fetchOpenGrants(userId).then(setOpenGrants).catch(() => undefined)
      }
      logActivity(userId, 'test_finish', { kind: input.kind, score: input.score, total: input.total, level: input.level ?? null })
      return attempt
    },
    [userId],
  )

  const logEvent = useCallback(
    (event: ActivityEvent, meta: Record<string, unknown> = {}) => {
      if (userId) logActivity(userId, event, meta)
    },
    [userId],
  )

  const resetModules = useCallback(async () => {
    if (!userId) return
    setModuleProgress([])
    await deleteModuleProgress(userId)
  }, [userId])

  const value = useMemo<ProgressContextValue>(() => {
    const completedCount = completedModules.length
    const remainingCount = Math.max(TOTAL_MODULES - completedCount, 0)
    const remainingMinutes = modules
      .filter((m) => !completedModules.includes(m.slug))
      .reduce((sum, m) => sum + m.readingTimeMin, 0)

    const attemptsOf = (kind: TestKind) => attempts.filter((a) => a.kind === kind)
    const latestAttempt = (kind: TestKind) => attemptsOf(kind)[0] ?? null
    const bestPercent = (kind: TestKind) => {
      // knowledge: only real assessments count (matches employee_overview.knowledge_best)
      const list = attemptsOf(kind).filter((a) => kind !== 'knowledge' || a.details.mode === 'assessment')
      return list.length ? Math.max(...list.map((a) => a.percent)) : null
    }

    return {
      loaded,
      loadError,
      completedModules,
      moduleProgress,
      attempts,
      openGrants,
      isModuleComplete,
      markModuleComplete,
      markModuleIncomplete,
      recordAttempt,
      logEvent,
      resetModules,
      reload,
      attemptsOf,
      latestAttempt,
      bestPercent,
      progressPercent: Math.round((completedCount / TOTAL_MODULES) * 100),
      completedCount,
      remainingCount,
      estimatedRemainingMinutes: remainingMinutes,
    }
  }, [
    loaded,
    loadError,
    completedModules,
    moduleProgress,
    attempts,
    openGrants,
    isModuleComplete,
    markModuleComplete,
    markModuleIncomplete,
    recordAttempt,
    logEvent,
    resetModules,
    reload,
  ])

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider')
  return ctx
}
