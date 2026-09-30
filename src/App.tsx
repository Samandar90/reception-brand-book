import { lazy, Suspense, type ReactNode } from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { SettingsProvider } from '@/contexts/SettingsContext'
import { LanguageProvider } from '@/i18n/LanguageContext'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'
import { ProgressProvider } from '@/contexts/ProgressContext'
import { AppShell } from '@/components/layout/AppShell'
import Login from '@/pages/Login'
import Setup from '@/pages/Setup'
import NotFound from '@/pages/NotFound'

const Dashboard = lazy(() => import('@/pages/Dashboard'))
const ReceptionStandards = lazy(() => import('@/pages/ReceptionStandards'))
const Communication = lazy(() => import('@/pages/Communication'))
const PhoneCalls = lazy(() => import('@/pages/PhoneCalls'))
const WhatsApp = lazy(() => import('@/pages/WhatsApp'))
const BookingCom = lazy(() => import('@/pages/BookingCom'))
const RoomTypes = lazy(() => import('@/pages/RoomTypes'))
const ModulesIndex = lazy(() => import('@/pages/ModulesIndex'))
const ModuleLesson = lazy(() => import('@/pages/ModuleLesson'))
const Quiz = lazy(() => import('@/pages/Quiz'))
const Certificate = lazy(() => import('@/pages/Certificate'))
const SettingsPage = lazy(() => import('@/pages/Settings'))
const TestsHub = lazy(() => import('@/pages/Tests'))
const LanguageTest = lazy(() => import('@/pages/LanguageTest'))
const FinalTest = lazy(() => import('@/pages/FinalTest'))
const AdminLayout = lazy(() => import('@/pages/admin/AdminLayout'))
const AdminOverview = lazy(() => import('@/pages/admin/AdminOverview'))
const AdminAccounts = lazy(() => import('@/pages/admin/AdminAccounts'))
const EmployeeDetail = lazy(() => import('@/pages/admin/EmployeeDetail'))
const QuestionStats = lazy(() => import('@/pages/admin/QuestionStats'))
const AdminFinal = lazy(() => import('@/pages/admin/AdminFinal'))
const FinalResults = lazy(() => import('@/pages/admin/FinalResults'))
const FinalPresenter = lazy(() => import('@/pages/admin/FinalPresenter'))

function PageFallback() {
  return (
    <div className="flex min-h-[50svh] items-center justify-center">
      <div className="size-8 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
    </div>
  )
}

function withSuspense(node: ReactNode) {
  return <Suspense fallback={<PageFallback />}>{node}</Suspense>
}

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { status } = useAuth()
  if (status === 'loading') return <PageFallback />
  if (status === 'signedOut') return <Navigate to="/login" replace />
  return <>{children}</>
}

function AdminRoute({ children }: { children: ReactNode }) {
  const { isAdmin } = useAuth()
  if (!isAdmin) return <Navigate to="/" replace />
  return <>{children}</>
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/setup" element={<Setup />} />
      <Route
        element={
          <ProtectedRoute>
            <AppShell />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={withSuspense(<Dashboard />)} />
        <Route path="/reception-standards" element={withSuspense(<ReceptionStandards />)} />
        <Route path="/communication" element={withSuspense(<Communication />)} />
        <Route path="/phone-calls" element={withSuspense(<PhoneCalls />)} />
        <Route path="/whatsapp" element={withSuspense(<WhatsApp />)} />
        <Route path="/booking-com" element={withSuspense(<BookingCom />)} />
        <Route path="/room-types" element={withSuspense(<RoomTypes />)} />
        <Route path="/modules" element={withSuspense(<ModulesIndex />)} />
        <Route path="/modules/:slug" element={withSuspense(<ModuleLesson />)} />
        <Route path="/quiz" element={withSuspense(<Quiz />)} />
        <Route path="/certificate" element={withSuspense(<Certificate />)} />
        <Route path="/settings" element={withSuspense(<SettingsPage />)} />
        <Route path="/tests" element={withSuspense(<TestsHub />)} />
        <Route path="/tests/:language" element={withSuspense(<LanguageTest />)} />
        <Route path="/final" element={withSuspense(<FinalTest />)} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              {withSuspense(<AdminLayout />)}
            </AdminRoute>
          }
        >
          <Route index element={withSuspense(<AdminOverview />)} />
          <Route path="accounts" element={withSuspense(<AdminAccounts />)} />
          <Route path="employees/:id" element={withSuspense(<EmployeeDetail />)} />
          <Route path="questions" element={withSuspense(<QuestionStats />)} />
          <Route path="final" element={withSuspense(<AdminFinal />)} />
          <Route path="final/:id/results" element={withSuspense(<FinalResults />)} />
        </Route>
      </Route>
      <Route
        path="/present/:id"
        element={
          <ProtectedRoute>
            <AdminRoute>{withSuspense(<FinalPresenter />)}</AdminRoute>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default function App() {
  return (
    <SettingsProvider>
      <LanguageProvider>
        <AuthProvider>
          <ProgressProvider>
            <TooltipProvider delayDuration={200}>
              <HashRouter>
                <AppRoutes />
              </HashRouter>
              <Toaster position="top-center" />
            </TooltipProvider>
          </ProgressProvider>
        </AuthProvider>
      </LanguageProvider>
    </SettingsProvider>
  )
}
