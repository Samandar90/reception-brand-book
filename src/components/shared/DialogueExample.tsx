import { CircleCheck, CircleX } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import type { DialogueExample as DialogueExampleType } from '@/types'

export function DialogueExample({ example }: { example: DialogueExampleType }) {
  const { tx, t } = useLanguage()
  const isGood = example.type === 'good'

  return (
    <div
      className={cn(
        'rounded-2xl border p-4 sm:p-5',
        isGood
          ? 'border-emerald-500/25 bg-emerald-500/[0.05] dark:bg-emerald-500/[0.07]'
          : 'border-rose-500/25 bg-rose-500/[0.05] dark:bg-rose-500/[0.07]',
      )}
    >
      <div
        className={cn(
          'mb-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide',
          isGood ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400',
        )}
      >
        {isGood ? <CircleCheck className="size-4" /> : <CircleX className="size-4" />}
        {isGood ? t('lesson.goodExample') : t('lesson.badExample')}
      </div>

      <div className="flex flex-col gap-2.5">
        {example.lines.map((line, i) => {
          const isReceptionist = line.speaker === 'receptionist'
          return (
            <div key={i} className={cn('flex flex-col gap-1', isReceptionist ? 'items-start' : 'items-end')}>
              <span className="px-1 text-[11px] font-medium text-muted-foreground">
                {isReceptionist ? t('lesson.receptionist') : t('lesson.guest')}
              </span>
              <div
                className={cn(
                  'max-w-[90%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed sm:max-w-[80%]',
                  isReceptionist
                    ? 'rounded-tl-sm bg-card border border-border/60'
                    : 'rounded-tr-sm bg-primary text-primary-foreground',
                )}
              >
                {tx(line.text)}
              </div>
            </div>
          )
        })}
      </div>

      {example.note && (
        <p className="mt-3 border-t border-border/50 pt-3 text-xs italic text-muted-foreground">{tx(example.note)}</p>
      )}
    </div>
  )
}
