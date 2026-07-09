import type { TranslationKey } from '@/i18n/translations'
import {
  LayoutDashboard,
  BookOpen,
  MessagesSquare,
  Phone,
  MessageCircle,
  CalendarCheck,
  ShieldAlert,
  TrendingUp,
  BedDouble,
  LogIn,
  LogOut,
  Siren,
  GraduationCap,
  Award,
  Settings as SettingsIcon,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  labelKey: TranslationKey
  path: string
  icon: LucideIcon
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'nav.dashboard', path: '/', icon: LayoutDashboard },
  { labelKey: 'nav.receptionStandards', path: '/reception-standards', icon: BookOpen },
  { labelKey: 'nav.communication', path: '/communication', icon: MessagesSquare },
  { labelKey: 'nav.phoneCalls', path: '/phone-calls', icon: Phone },
  { labelKey: 'nav.whatsapp', path: '/whatsapp', icon: MessageCircle },
  { labelKey: 'nav.bookingCom', path: '/booking-com', icon: CalendarCheck },
  { labelKey: 'nav.conflictSituations', path: '/modules/complaints', icon: ShieldAlert },
  { labelKey: 'nav.salesTechniques', path: '/modules/upselling-rooms', icon: TrendingUp },
  { labelKey: 'nav.roomTypes', path: '/room-types', icon: BedDouble },
  { labelKey: 'nav.checkIn', path: '/modules/check-in', icon: LogIn },
  { labelKey: 'nav.checkOut', path: '/modules/check-out', icon: LogOut },
  { labelKey: 'nav.emergency', path: '/modules/emergency-procedures', icon: Siren },
  { labelKey: 'nav.knowledgeTest', path: '/quiz', icon: GraduationCap },
  { labelKey: 'nav.certificates', path: '/certificate', icon: Award },
  { labelKey: 'nav.settings', path: '/settings', icon: SettingsIcon },
]
