import type { ReactNode } from 'react'
import { Lightbulb, TriangleAlert, Sparkles, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import type { CalloutData } from '@/types'

const CALLOUT_CONFIG: Record<
  CalloutData['type'],
  { icon: typeof Lightbulb; classes: string; iconClasses: string }
> = {
  tip: {
    icon: Lightbulb,
    classes: 'border-sky-500/20 bg-sky-500/[0.06] dark:bg-sky-500/[0.08]',
    iconClasses: 'text-sky-500',
  },
  warning: {
    icon: TriangleAlert,
    classes: 'border-amber-500/20 bg-amber-500/[0.06] dark:bg-amber-500/[0.08]',
    iconClasses: 'text-amber-500',
  },
  'golden-rule': {
    icon: Sparkles,
    classes: 'border-violet-500/20 bg-violet-500/[0.06] dark:bg-violet-500/[0.08]',
    iconClasses: 'text-violet-500',
  },
  mistake: {
    icon: XCircle,
    classes: 'border-rose-500/20 bg-rose-500/[0.06] dark:bg-rose-500/[0.08]',
    iconClasses: 'text-rose-500',
  },
}

export function Callout({ callout }: { callout: CalloutData }) {
  const { tx } = useLanguage()
  const config = CALLOUT_CONFIG[callout.type]
  const Icon = config.icon

  return (
    <div className={cn('flex gap-3 rounded-2xl border p-4', config.classes)}>
      <Icon className={cn('mt-0.5 size-[18px] shrink-0', config.iconClasses)} />
      <div className="min-w-0">
        <p className="text-sm font-semibold">{tx(callout.title)}</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tx(callout.body)}</p>
      </div>
    </div>
  )
}

export function CalloutList({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-3">{children}</div>
}
