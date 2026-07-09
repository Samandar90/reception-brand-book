import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { readStorage, writeStorage } from '@/lib/storage'
import { ACADEMY_PIN, AUTH_STORAGE_KEY } from '@/lib/constants'

interface AuthState {
  unlocked: boolean
  employeeName: string
  rememberDevice: boolean
}

const DEFAULT_AUTH: AuthState = {
  unlocked: false,
  employeeName: '',
  rememberDevice: false,
}

interface AuthContextValue {
  unlocked: boolean
  employeeName: string
  login: (pin: string, name: string, remember: boolean) => boolean
  logout: () => void
  setEmployeeName: (name: string) => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>(() => {
    const stored = readStorage(AUTH_STORAGE_KEY, DEFAULT_AUTH)
    return stored.rememberDevice ? stored : DEFAULT_AUTH
  })

  const login = useCallback((pin: string, name: string, remember: boolean): boolean => {
    if (pin !== ACADEMY_PIN) return false
    const next: AuthState = { unlocked: true, employeeName: name.trim(), rememberDevice: remember }
    setAuth(next)
    if (remember) {
      writeStorage(AUTH_STORAGE_KEY, next)
    } else {
      writeStorage(AUTH_STORAGE_KEY, DEFAULT_AUTH)
    }
    return true
  }, [])

  const logout = useCallback(() => {
    setAuth(DEFAULT_AUTH)
    writeStorage(AUTH_STORAGE_KEY, DEFAULT_AUTH)
  }, [])

  const setEmployeeName = useCallback((name: string) => {
    setAuth((prev) => {
      const next = { ...prev, employeeName: name }
      if (prev.rememberDevice) writeStorage(AUTH_STORAGE_KEY, next)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ unlocked: auth.unlocked, employeeName: auth.employeeName, login, logout, setEmployeeName }),
    [auth.unlocked, auth.employeeName, login, logout, setEmployeeName],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}
