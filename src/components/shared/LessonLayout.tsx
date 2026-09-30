import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, BarChart3, ChevronLeft, ChevronRight, CircleCheck, Sparkles, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { DialogueExample } from './DialogueExample'
import { Callout } from './Callout'
import { ModuleCheck } from './ModuleCheck'
import { useLanguage } from '@/i18n/LanguageContext'
import { useProgress } from '@/contexts/ProgressContext'
import { useAuth } from '@/contexts/AuthContext'
import { logActivityKeepalive } from '@/lib/api'
import { getAdjacentModules } from '@/data/modules'
import type { Module } from '@/types'
import type { TranslationKey } from '@/i18n/translations'
import { cn } from '@/lib/utils'

/** Minimum reading time (seconds) worth logging as a lesson view. */
const MIN_VIEW_SECONDS = 5

interface LessonView {
  startedAt: number
  hiddenMs: number
  hiddenSince: number | null
  sent: boolean
}

const DIFFICULTY_KEY: Record<Module['difficulty'], TranslationKey> = {
  beginner: 'lesson.difficulty.beginner',
  intermediate: 'lesson.difficulty.intermediate',
  advanced: 'lesson.difficulty.advanced',
}

export function LessonLayout({ module }: { module: Module }) {
  const { tx, t } = useLanguage()
  const { isModuleComplete } = useProgress()
  const { user } = useAuth()
  const userId = user?.id ?? null
  const viewRef = useRef<LessonView | null>(null)
  const [activeSection, setActiveSection] = useState(module.sections[0]?.id)
  const complete = isModuleComplete(module.slug)
  const { prev, next } = getAdjacentModules(module.slug)

  function scrollTo(id: string) {
    setActiveSection(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const tocItems = [
    ...module.sections.map((s) => ({ id: s.id, label: tx(s.heading) })),
    { id: 'common-mistakes', label: t('lesson.commonMistakes') },
    { id: 'golden-rules', label: t('lesson.goldenRules') },
    { id: 'module-check', label: t('learn.check.title') },
  ]

  useEffect(() => {
    const ids = tocItems.map((item) => item.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-96px 0px -70% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [module.slug])

  // One 'lesson_view' event per visit, sent when the reader leaves (unmount / next module / pagehide).
  // Time while the tab is hidden is not counted.
  useEffect(() => {
    if (!userId) return
    const slug = module.slug
    const now = Date.now()
    const view: LessonView = {
      startedAt: now,
      hiddenMs: 0,
      hiddenSince: document.visibilityState === 'hidden' ? now : null,
      sent: false,
    }
    viewRef.current = view

    const flush = () => {
      if (view.sent) return
      view.sent = true
      const end = Date.now()
      const hidden = view.hiddenMs + (view.hiddenSince !== null ? end - view.hiddenSince : 0)
      const durationSec = Math.round(Math.max(0, end - view.startedAt - hidden) / 1000)
      if (durationSec >= MIN_VIEW_SECONDS) logActivityKeepalive(userId, 'lesson_view', { module: slug, durationSec })
    }
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') {
        if (view.hiddenSince === null) view.hiddenSince = Date.now()
      } else if (view.hiddenSince !== null) {
        view.hiddenMs += Date.now() - view.hiddenSince
        view.hiddenSince = null
      }
    }
    const onPageShow = (e: PageTransitionEvent) => {
      // Restored from the back/forward cache: start a fresh visit.
      if (!e.persisted) return
      view.startedAt = Date.now()
      view.hiddenMs = 0
      view.hiddenSince = null
      view.sent = false
    }

    window.addEventListener('pagehide', flush)
    window.addEventListener('pageshow', onPageShow)
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      window.removeEventListener('pagehide', flush)
      window.removeEventListener('pageshow', onPageShow)
      document.removeEventListener('visibilitychange', onVisibility)
      flush()
      if (viewRef.current === view) viewRef.current = null
    }
  }, [module.slug, userId])

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_220px]">
      <div className="min-w-0">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1">
              <Clock className="size-3.5" />
              {module.readingTimeMin} {t('common.minutes')}
            </Badge>
            <Badge variant="secondary" className="gap-1.5 rounded-full px-3 py-1">
              <BarChart3 className="size-3.5" />
              {t(DIFFICULTY_KEY[module.difficulty])}
            </Badge>
            {complete && (
              <Badge className="gap-1.5 rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-600 hover:bg-emerald-500/15 dark:text-emerald-400">
                <CircleCheck className="size-3.5" />
                {t('common.completed')}
              </Badge>
            )}
          </div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{tx(module.title)}</h1>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            {tx(module.description)}
          </p>
        </motion.header>

        <div className="mt-8 flex flex-col gap-8">
          {module.sections.map((section, i) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="scroll-mt-24"
            >
              <h2 className="text-xl font-semibold tracking-tight">{tx(section.heading)}</h2>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{tx(section.body)}</p>

              {section.dialogues && section.dialogues.length > 0 && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {section.dialogues.map((d, idx) => (
                    <DialogueExample key={idx} example={d} />
                  ))}
                </div>
              )}

              {section.callouts && section.callouts.length > 0 && (
                <div className="mt-4 flex flex-col gap-3">
                  {section.callouts.map((c, idx) => (
                    <Callout key={idx} callout={c} />
                  ))}
                </div>
              )}
            </motion.section>
          ))}

          <motion.section
            id="common-mistakes"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="scroll-mt-24 rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-5 dark:bg-rose-500/[0.06]"
          >
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <XCircle className="size-5 text-rose-500" />
              {t('lesson.commonMistakes')}
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {module.commonMistakes.map((m, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-rose-500/60" />
                  {tx(m)}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            id="golden-rules"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="scroll-mt-24 rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-5 dark:bg-violet-500/[0.06]"
          >
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Sparkles className="size-5 text-violet-500" />
              {t('lesson.goldenRules')}
            </h2>
            <ul className="mt-3 flex flex-col gap-2">
              {module.goldenRules.map((r, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-violet-500/60" />
                  {tx(r)}
                </li>
              ))}
            </ul>
          </motion.section>

          <ModuleCheck key={module.slug} module={module} />
        </div>

        {(prev || next) && (
          <nav className="mt-10 flex items-center justify-between gap-3 border-t border-border/60 pt-6">
            {prev && (
              <Button variant="outline" asChild className="gap-1.5">
                <Link to={`/modules/${prev.slug}`}>
                  <ChevronLeft className="size-4" />
                  {t('lesson.prevModule')}
                </Link>
              </Button>
            )}
            {next && (
              <Button variant="outline" asChild className="ml-auto gap-1.5">
                <Link to={`/modules/${next.slug}`}>
                  {t('lesson.nextModule')}
                  <ChevronRight className="size-4" />
                </Link>
              </Button>
            )}
          </nav>
        )}
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-24 flex flex-col gap-4">
          <Progress value={complete ? 100 : 0} className="h-1.5" />
          <div>
            <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t('lesson.toc')}
            </p>
            <nav className="flex flex-col gap-0.5">
              {tocItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    'rounded-lg px-2.5 py-1.5 text-left text-sm transition-colors',
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </div>
  )
}
