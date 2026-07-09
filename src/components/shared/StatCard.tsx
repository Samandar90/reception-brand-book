import type { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string | number
  accent?: 'default' | 'gradient'
  className?: string
}

export function StatCard({ icon: Icon, label, value, accent = 'default', className }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'rounded-2xl border border-border/60 bg-card p-5 shadow-premium',
        className,
      )}
    >
      <div
        className={cn(
          'mb-3 flex size-10 items-center justify-center rounded-xl',
          accent === 'gradient' ? 'gradient-accent' : 'bg-muted',
        )}
      >
        <Icon className={cn('size-5', accent === 'gradient' ? 'text-white' : 'text-foreground')} strokeWidth={2} />
      </div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      <p className="mt-0.5 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}
