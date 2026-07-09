import type { Module } from '@/types'
import greetingGuests from './01-greeting-guests'
import checkIn from './02-check-in'
import checkOut from './03-check-out'
import phoneCommunication from './04-phone-communication'
import whatsappCommunication from './05-whatsapp-communication'
import bookingComGuests from './06-booking-com-guests'
import walkInGuests from './07-walk-in-guests'
import upsellingRooms from './08-upselling-rooms'
import lateCheckout from './09-late-checkout'
import earlyCheckin from './10-early-checkin'
import complaints from './11-complaints'
import vipGuests from './12-vip-guests'
import foreignGuests from './13-foreign-guests'
import lostItems from './14-lost-items'
import emergencyProcedures from './15-emergency-procedures'

export const modules: Module[] = [
  greetingGuests,
  checkIn,
  checkOut,
  phoneCommunication,
  whatsappCommunication,
  bookingComGuests,
  walkInGuests,
  upsellingRooms,
  lateCheckout,
  earlyCheckin,
  complaints,
  vipGuests,
  foreignGuests,
  lostItems,
  emergencyProcedures,
]

export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug)
}

export function getAdjacentModules(slug: string): { prev?: Module; next?: Module } {
  const index = modules.findIndex((m) => m.slug === slug)
  if (index === -1) return {}
  return { prev: modules[index - 1], next: modules[index + 1] }
}
