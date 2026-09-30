import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Profile } from '@/types'
import { fetchMyProfile } from '@/lib/api'
import { apiPost, ApiError, UNAUTHORIZED_EVENT } from '@/lib/http'

export type AuthStatus = 'loading' | 'signedOut' | 'signedIn'

export type SignInFailure = 'invalid' | 'disabled' | 'network' | 'not_configured' | 'rate_limited'
export type SignInResult = { ok: true } | { ok: false; reason: SignInFailure }

interface AuthContextValue {
  status: AuthStatus
  user: Profile | null
  isAdmin: boolean
  /** Kept for the login page: the academy server is always part of the same site. */
  configured: boolean
  signIn: (login: string, password: string, remember: boolean) => Promise<SignInResult>
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | null>(null)

interface AuthState {
  status: AuthStatus
  user: Profile | null
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({ status: 'loading', user: null })

  useEffect(() => {
    let cancelled = false
    fetchMyProfile()
      .then((user) => {
        if (!cancelled) setState(user && user.isActive ? { status: 'signedIn', user } : { status: 'signedOut', user: null })
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'signedOut', user: null })
      })
    // Any API call answered with 401 means the session ended (expired, reset or account disabled).
    const onUnauthorized = () => setState({ status: 'signedOut', user: null })
    window.addEventListener(UNAUTHORIZED_EVENT, onUnauthorized)
    return () => {
      cancelled = true
      window.removeEventListener(UNAUTHORIZED_EVENT, onUnauthorized)
    }
  }, [])

  const signIn = useCallback(async (login: string, password: string, remember: boolean): Promise<SignInResult> => {
    try {
      const { user } = await apiPost<{ user: Profile }>('/auth/login', {
        login: login.trim().toLowerCase(),
        password,
        remember,
      })
      setState({ status: 'signedIn', user })
      return { ok: true }
    } catch (e) {
      if (e instanceof ApiError) {
        if (e.code === 'disabled') return { ok: false, reason: 'disabled' }
        if (e.code === 'too_many_attempts') return { ok: false, reason: 'rate_limited' }
        if (e.status === 400 || e.status === 401) return { ok: false, reason: 'invalid' }
      }
      return { ok: false, reason: 'network' }
    }
  }, [])

  const signOut = useCallback(async () => {
    try {
      await apiPost('/auth/logout')
    } catch {
      // signing out locally is what matters
    }
    setState({ status: 'signedOut', user: null })
  }, [])

  const refreshProfile = useCallback(async () => {
    const profile = await fetchMyProfile()
    setState((prev) => (profile ? { status: 'signedIn', user: profile } : prev))
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      status: state.status,
      user: state.user,
      isAdmin: state.user?.role === 'admin',
      configured: true,
      signIn,
      signOut,
      refreshProfile,
    }),
    [state, signIn, signOut, refreshProfile],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
