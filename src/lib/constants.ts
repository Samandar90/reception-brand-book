export const HOTEL_NAME = 'Hotel Academy'

export const TOTAL_MODULES = 15

/** Pass mark of the knowledge test. */
export const KNOWLEDGE_PASS_PERCENT = 90

/**
 * The certificate is issued for the live final test: a result of at least this percent, counted only once the
 * administrator has graded every open answer of that session.
 */
export const CERTIFICATE_MIN_FINAL_PERCENT = 80

/** Seconds per question in the knowledge test; a question not confirmed in time counts as wrong. */
export const QUIZ_QUESTION_SECONDS = 45

/** Seconds per question in a lesson "Check yourself"; running out of time counts as a wrong answer. */
export const MODULE_CHECK_QUESTION_SECONDS = 30

/** Hours that must pass after a knowledge-test attempt before it can be retaken (enforced by the server). */
export const KNOWLEDGE_RETAKE_HOURS = 24

export const MODULE_ORDER = [
  'greeting-guests',
  'check-in',
  'check-out',
  'phone-communication',
  'whatsapp-communication',
  'booking-com-guests',
  'walk-in-guests',
  'upselling-rooms',
  'late-checkout',
  'early-checkin',
  'complaints',
  'vip-guests',
  'foreign-guests',
  'lost-items',
  'emergency-procedures',
] as const

export const SETTINGS_STORAGE_KEY = 'academy_settings'
