import { createClient, type SupportedStorage } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

/** False when the build has no Supabase credentials — the login page explains what to configure. */
export const isSupabaseConfigured = Boolean(url && anonKey)

const REMEMBER_KEY = 'academy_remember'

function rememberDevice(): boolean {
  try {
    return localStorage.getItem(REMEMBER_KEY) !== '0'
  } catch {
    return true
  }
}

/** "Remember this device": sessions go to localStorage when true, sessionStorage when false. */
export function setRememberDevice(value: boolean): void {
  try {
    localStorage.setItem(REMEMBER_KEY, value ? '1' : '0')
  } catch {
    // storage unavailable — fall back to the default (remember)
  }
}

const sessionStorageAdapter: SupportedStorage = {
  getItem: (key) => {
    try {
      return localStorage.getItem(key) ?? sessionStorage.getItem(key)
    } catch {
      return null
    }
  },
  setItem: (key, value) => {
    try {
      if (rememberDevice()) {
        localStorage.setItem(key, value)
        sessionStorage.removeItem(key)
      } else {
        sessionStorage.setItem(key, value)
        localStorage.removeItem(key)
      }
    } catch {
      // ignore quota / private mode errors — the app keeps working in memory
    }
  },
  removeItem: (key) => {
    try {
      localStorage.removeItem(key)
      sessionStorage.removeItem(key)
    } catch {
      // ignore
    }
  },
}

export const supabase = createClient(url ?? 'http://127.0.0.1:54321', anonKey ?? 'not-configured', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: false,
    storageKey: 'academy_session',
    storage: sessionStorageAdapter,
  },
})

/** Logins are usernames; Supabase Auth needs an email, so we map them onto a reserved domain. */
export const LOGIN_EMAIL_DOMAIN = 'academy.local'

export function loginToEmail(login: string): string {
  const trimmed = login.trim().toLowerCase()
  return trimmed.includes('@') ? trimmed : `${trimmed}@${LOGIN_EMAIL_DOMAIN}`
}
