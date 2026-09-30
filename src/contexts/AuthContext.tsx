import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Session } from '@supabase/supabase-js'
import type { Profile } from '@/types'
import { isSupabaseConfigured, loginToEmail, setRememberDevice, supabase } from '@/lib/supabase'
import { fetchMyProfile, logActivity } from '@/lib/api'

export type AuthStatus = 'loading' | 'signedOut' | 'signedIn'

export type SignInFailure = 'invalid' | 'disabled' | 'network' | 'not_configured'
export type SignInResult = { ok: true } | { ok: false; reason: SignInFailure }

interface AuthContextValue {
  status: AuthStatus
  user: Profile | null
  isAdmin: boolean
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
  const [state, setState] = useState<AuthState>({ status: isSupabaseConfigured ? 'loading' : 'signedOut', user: null })

  const loadProfile = useCallback(async (session: Session | null) => {
    if (!session) {
      setState({ status: 'signedOut', user: null })
      return
    }
    try {
      const profile = await fetchMyProfile()
      if (!profile || !profile.isActive) {
        await supabase.auth.signOut()
        setState({ status: 'signedOut', user: null })
        return
      }
      setState({ status: 'signedIn', user: profile })
    } catch {
      // Network hiccup while restoring the session: keep the user signed in with what we have.
      setState((prev) => (prev.user ? prev : { status: 'signedOut', user: null }))
    }
  }, [])

  useEffect(() => {
    if (!isSupabaseConfigured) return
    let cancelled = false

    supabase.auth.getSession().then(({ data }) => {
      if (!cancelled) void loadProfile(data.session)
    })

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (cancelled) return
      if (event === 'SIGNED_OUT') {
        setState({ status: 'signedOut', user: null })
        return
      }
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED' || event === 'USER_UPDATED') {
        // Defer: Supabase warns against awaiting client calls inside this callback.
        setTimeout(() => {
          if (!cancelled) void loadProfile(session)
        }, 0)
      }
    })

    return () => {
      cancelled = true
      sub.subscription.unsubscribe()
    }
  }, [loadProfile])

  const signIn = useCallback(
    async (login: string, password: string, remember: boolean): Promise<SignInResult> => {
      if (!isSupabaseConfigured) return { ok: false, reason: 'not_configured' }
      setRememberDevice(remember)
      const { data, error } = await supabase.auth.signInWithPassword({ email: loginToEmail(login), password })
      if (error) {
        const status = (error as { status?: number }).status
        if (/banned/i.test(error.message) || (error as { code?: string }).code === 'user_banned') {
          return { ok: false, reason: 'disabled' }
        }
        if (status === 400 || status === 401 || status === 403 || status === 422) return { ok: false, reason: 'invalid' }
        return { ok: false, reason: 'network' }
      }
      let profile: Profile | null = null
      try {
        profile = await fetchMyProfile()
      } catch {
        await supabase.auth.signOut()
        return { ok: false, reason: 'network' }
      }
      if (!profile || !profile.isActive) {
        await supabase.auth.signOut()
        return { ok: false, reason: 'disabled' }
      }
      setState({ status: 'signedIn', user: profile })
      if (data.user) logActivity(data.user.id, 'login')
      return { ok: true }
    },
    [],
  )

  const signOut = useCallback(async () => {
    await supabase.auth.signOut()
    setState({ status: 'signedOut', user: null })
  }, [])

  const refreshProfile = useCallback(async () => {
    const profile = await fetchMyProfile()
    setState((prev) => ({ ...prev, user: profile ?? prev.user }))
  }, [])

  const value = useMemo<AuthContextValue>(
    () => ({
      status: state.status,
      user: state.user,
      isAdmin: state.user?.role === 'admin',
      configured: isSupabaseConfigured,
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
