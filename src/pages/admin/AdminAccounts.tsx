import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CircleCheck,
  Ellipsis,
  ExternalLink,
  KeyRound,
  Pencil,
  Trash2,
  UserCheck,
  UserPlus,
  UserX,
} from 'lucide-react'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { SearchInput } from '@/components/shared/SearchInput'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/i18n/LanguageContext'
import { useAuth } from '@/contexts/AuthContext'
import { createAccount, deleteAccount, fetchEmployeeOverview, updateProfile } from '@/lib/adminApi'
import type { EmployeeOverview, UserRole } from '@/types'
import {
  CredentialsBlock,
  EASE,
  ErrorState,
  LOGIN_RE,
  LoadingState,
  MIN_PASSWORD,
  PasswordField,
  ResetPasswordDialog,
  ToggleActiveDialog,
  accountErrorKey,
  normalizeLogin,
  useAdminFormat,
} from './adminKit'

interface Created {
  fullName: string
  login: string
  password: string
}

type DialogState = { type: 'edit' | 'reset' | 'toggle' | 'delete'; row: EmployeeOverview } | null

export default function AdminAccounts() {
  const { t, tf } = useLanguage()
  const { user } = useAuth()
  const fmt = useAdminFormat()
  const [rows, setRows] = useState<EmployeeOverview[] | null>(null)
  const [error, setError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const [query, setQuery] = useState('')
  const [created, setCreated] = useState<Created | null>(null)
  const [dialog, setDialog] = useState<DialogState>(null)

  useEffect(() => {
    let cancelled = false
    fetchEmployeeOverview()
      .then((data) => {
        if (cancelled) return
        setRows(data)
        setError(false)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [reloadKey])

  function retry() {
    setError(false)
    setRows(null)
    setReloadKey((k) => k + 1)
  }

  /** Re-fetch in the background (keeps the current list on screen). */
  function refresh() {
    setReloadKey((k) => k + 1)
  }

  function patchRow(id: string, patch: Partial<EmployeeOverview>) {
    setRows((prev) => prev && prev.map((r) => (r.id === id ? { ...r, ...patch } : r)))
  }

  const visible = useMemo(() => {
    const q = query.trim().toLocaleLowerCase()
    const list = rows ?? []
    if (!q) return list
    return list.filter(
      (r) =>
        r.fullName.toLocaleLowerCase().includes(q) ||
        r.login.toLocaleLowerCase().includes(q) ||
        (r.position ?? '').toLocaleLowerCase().includes(q),
    )
  }, [rows, query])

  const closeDialog = () => setDialog(null)

  return (
    <div className="flex flex-col gap-6">
      <AnimatePresence mode="wait" initial={false}>
        {created ? (
          <motion.section
            key="created"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="rounded-2xl border border-emerald-500/30 bg-card p-5 shadow-premium sm:p-6"
          >
            <div className="mb-4 flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/12">
                <CircleCheck className="size-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h2 className="font-semibold tracking-tight">{tf('admin.acc.createdTitle', { name: created.fullName })}</h2>
                <p className="mt-0.5 text-sm text-muted-foreground">{t('admin.acc.createdHint')}</p>
              </div>
            </div>
            <div className="max-w-xl">
              <CredentialsBlock fullName={created.fullName} login={created.login} password={created.password} />
            </div>
            <Button variant="outline" onClick={() => setCreated(null)} className="mt-4 gap-2">
              <UserPlus className="size-4" />
              {t('admin.acc.createAnother')}
            </Button>
          </motion.section>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <CreateAccountCard
              onCreated={(c) => {
                setCreated(c)
                refresh()
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">{t('admin.acc.listTitle')}</h2>
            {rows && <p className="text-sm text-muted-foreground">{tf('admin.acc.count', { n: rows.length })}</p>}
          </div>
          <SearchInput value={query} onChange={setQuery} className="sm:w-72" />
        </div>

        {error ? (
          <ErrorState onRetry={retry} />
        ) : !rows ? (
          <LoadingState />
        ) : (
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-premium">
            {visible.length === 0 ? (
              <p className="px-6 py-12 text-center text-sm text-muted-foreground">{t('common.noResults')}</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>{t('admin.ov.colName')}</TableHead>
                    <TableHead>{t('login.loginLabel')}</TableHead>
                    <TableHead>{t('admin.acc.role')}</TableHead>
                    <TableHead>{t('admin.acc.position')}</TableHead>
                    <TableHead>{t('common.status')}</TableHead>
                    <TableHead>{t('admin.acc.created')}</TableHead>
                    <TableHead className="text-right">
                      <span className="sr-only">{t('common.actions')}</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visible.map((row) => {
                    const isSelf = row.id === user?.id
                    return (
                      <TableRow key={row.id} className={cn(!row.isActive && 'text-muted-foreground')}>
                        <TableCell>
                          <div className="flex min-w-40 items-center gap-2">
                            <Link to={`/admin/employees/${row.id}`} className="truncate font-medium text-foreground hover:underline">
                              {row.fullName}
                            </Link>
                            {isSelf && (
                              <Badge variant="outline" className="rounded-full text-[11px]">
                                {t('admin.acc.you')}
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-[13px]">{row.login}</TableCell>
                        <TableCell>{row.role === 'admin' ? t('common.admin') : t('common.employee')}</TableCell>
                        <TableCell className="max-w-48 truncate">{row.position || '—'}</TableCell>
                        <TableCell>
                          {row.isActive ? (
                            <Badge className="rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
                              {t('admin.active')}
                            </Badge>
                          ) : (
                            <Badge variant="secondary" className="rounded-full">
                              {t('admin.inactive')}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{fmt.date(row.createdAt)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu modal={false}>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon-sm" aria-label={t('common.actions')}>
                                <Ellipsis className="size-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-60">
                              <DropdownMenuItem onSelect={() => setDialog({ type: 'edit', row })}>
                                <Pencil />
                                {t('admin.acc.editProfile')}
                              </DropdownMenuItem>
                              <DropdownMenuItem onSelect={() => setDialog({ type: 'reset', row })}>
                                <KeyRound />
                                {t('admin.acc.resetPassword')}
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link to={`/admin/employees/${row.id}`}>
                                  <ExternalLink />
                                  {t('admin.acc.openResults')}
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem disabled={isSelf} onSelect={() => setDialog({ type: 'toggle', row })}>
                                {row.isActive ? <UserX /> : <UserCheck />}
                                {row.isActive ? t('admin.acc.deactivate') : t('admin.acc.activate')}
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                variant="destructive"
                                disabled={isSelf || row.isActive}
                                onSelect={() => setDialog({ type: 'delete', row })}
                              >
                                <Trash2 />
                                <span className="flex flex-col">
                                  {t('common.delete')}
                                  {row.isActive && !isSelf && (
                                    <span className="text-[11px] text-muted-foreground">{t('admin.acc.deactivateFirst')}</span>
                                  )}
                                </span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            )}
          </div>
        )}
      </section>

      {dialog?.type === 'edit' && (
        <EditProfileDialog
          row={dialog.row}
          onClose={closeDialog}
          onSaved={(fullName, position) => patchRow(dialog.row.id, { fullName, position })}
        />
      )}
      {dialog?.type === 'reset' && <ResetPasswordDialog account={dialog.row} onClose={closeDialog} />}
      {dialog?.type === 'toggle' && (
        <ToggleActiveDialog
          account={dialog.row}
          onClose={closeDialog}
          onDone={(isActive) => patchRow(dialog.row.id, { isActive })}
        />
      )}
      {dialog?.type === 'delete' && (
        <DeleteAccountDialog
          row={dialog.row}
          onClose={closeDialog}
          onDeleted={() => setRows((prev) => prev && prev.filter((r) => r.id !== dialog.row.id))}
        />
      )}
    </div>
  )
}

// ─── Create ──────────────────────────────────────────────────────────────────

type Field = 'fullName' | 'login' | 'password'

function CreateAccountCard({ onCreated }: { onCreated: (c: Created) => void }) {
  const { t } = useLanguage()
  const [fullName, setFullName] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [position, setPosition] = useState('')
  const [role, setRole] = useState<UserRole>('employee')
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({})
  const [pending, setPending] = useState(false)

  function validate(): Partial<Record<Field, string>> {
    const next: Partial<Record<Field, string>> = {}
    if (fullName.trim().length < 2) next.fullName = t('admin.err.invalidName')
    if (!LOGIN_RE.test(login)) next.login = t('admin.err.invalidLogin')
    if (password.length < MIN_PASSWORD) next.password = t('admin.err.weakPassword')
    return next
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (pending) return
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length) return
    setPending(true)
    try {
      const profile = await createAccount({ login, password, fullName: fullName.trim(), position: position.trim(), role })
      toast.success(t('admin.acc.createdToast'))
      onCreated({ fullName: profile.fullName, login: profile.login, password })
    } catch (err) {
      const key = accountErrorKey(err)
      if (key === 'admin.err.loginTaken' || key === 'admin.err.invalidLogin') setErrors({ login: t(key) })
      else if (key === 'admin.err.weakPassword') setErrors({ password: t(key) })
      else if (key === 'admin.err.invalidName') setErrors({ fullName: t(key) })
      else toast.error(t(key))
    } finally {
      setPending(false)
    }
  }

  const clearError = (field: Field) => setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev))

  return (
    <section className="rounded-2xl border border-border/60 bg-card p-5 shadow-premium sm:p-6">
      <div className="mb-5 flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl gradient-accent">
          <UserPlus className="size-5 text-white" />
        </div>
        <div>
          <h2 className="font-semibold tracking-tight">{t('admin.acc.createTitle')}</h2>
          <p className="mt-0.5 text-sm text-muted-foreground">{t('admin.acc.createHint')}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="acc-name">{t('admin.acc.fullName')}</Label>
          <Input
            id="acc-name"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value)
              clearError('fullName')
            }}
            placeholder={t('admin.acc.fullNamePlaceholder')}
            autoComplete="off"
            maxLength={120}
            aria-invalid={!!errors.fullName || undefined}
            disabled={pending}
            className="h-10"
          />
          {errors.fullName && <FieldError>{errors.fullName}</FieldError>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="acc-login">{t('login.loginLabel')}</Label>
          <Input
            id="acc-login"
            value={login}
            onChange={(e) => {
              setLogin(normalizeLogin(e.target.value))
              clearError('login')
            }}
            placeholder={t('login.loginPlaceholder')}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            maxLength={32}
            aria-invalid={!!errors.login || undefined}
            disabled={pending}
            className="h-10 font-mono"
          />
          {errors.login ? (
            <FieldError>{errors.login}</FieldError>
          ) : (
            <p className="text-xs text-muted-foreground">{t('admin.acc.loginHint')}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="acc-password">{t('login.passwordLabel')}</Label>
          <PasswordField
            id="acc-password"
            value={password}
            onChange={(v) => {
              setPassword(v)
              clearError('password')
            }}
            invalid={!!errors.password}
            disabled={pending}
          />
          {errors.password ? (
            <FieldError>{errors.password}</FieldError>
          ) : (
            <p className="text-xs text-muted-foreground">{t('admin.acc.passwordHint')}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="acc-position">{t('admin.acc.position')}</Label>
          <Input
            id="acc-position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder={t('admin.acc.positionPlaceholder')}
            autoComplete="off"
            maxLength={120}
            disabled={pending}
            className="h-10"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="acc-role">{t('admin.acc.role')}</Label>
          <Select value={role} onValueChange={(v) => setRole(v as UserRole)} disabled={pending}>
            <SelectTrigger id="acc-role" className="h-10 w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="employee">{t('common.employee')}</SelectItem>
              <SelectItem value="admin">{t('common.admin')}</SelectItem>
            </SelectContent>
          </Select>
          {role === 'admin' && <p className="text-xs text-amber-600 dark:text-amber-400">{t('admin.acc.adminWarning')}</p>}
        </div>

        <div className="flex items-end">
          <Button type="submit" size="lg" disabled={pending} className="h-10 w-full gap-2 sm:w-auto">
            <UserPlus className="size-4" />
            {pending ? t('admin.acc.creating') : t('admin.acc.create')}
          </Button>
        </div>
      </form>
    </section>
  )
}

function FieldError({ children }: { children: string }) {
  return <p className="text-xs text-rose-600 dark:text-rose-400">{children}</p>
}

// ─── Dialogs ─────────────────────────────────────────────────────────────────

function EditProfileDialog({
  row,
  onClose,
  onSaved,
}: {
  row: EmployeeOverview
  onClose: () => void
  onSaved: (fullName: string, position: string | null) => void
}) {
  const { t } = useLanguage()
  const [fullName, setFullName] = useState(row.fullName)
  const [position, setPosition] = useState(row.position ?? '')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (pending) return
    const name = fullName.trim()
    if (name.length < 2) {
      setError(t('admin.err.invalidName'))
      return
    }
    setPending(true)
    try {
      const profile = await updateProfile(row.id, { fullName: name, position: position.trim() || null })
      onSaved(profile.fullName, profile.position)
      toast.success(t('admin.saved'))
      onClose()
    } catch {
      toast.error(t('common.saveFailed'))
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog open onOpenChange={(open) => !open && !pending && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('admin.acc.editProfile')}</DialogTitle>
          <DialogDescription className="font-mono">@{row.login}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="edit-name">{t('admin.acc.fullName')}</Label>
            <Input
              id="edit-name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value)
                setError(null)
              }}
              maxLength={120}
              aria-invalid={!!error || undefined}
              disabled={pending}
              className="h-10"
            />
            {error && <FieldError>{error}</FieldError>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="edit-position">{t('admin.acc.position')}</Label>
            <Input
              id="edit-position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder={t('admin.acc.positionPlaceholder')}
              maxLength={120}
              disabled={pending}
              className="h-10"
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={pending}>
              {t('common.cancel')}
            </Button>
            <Button type="submit" disabled={pending}>
              {pending ? t('common.saving') : t('common.save')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function DeleteAccountDialog({
  row,
  onClose,
  onDeleted,
}: {
  row: EmployeeOverview
  onClose: () => void
  onDeleted: () => void
}) {
  const { t, tf } = useLanguage()
  const [confirm, setConfirm] = useState('')
  const [pending, setPending] = useState(false)
  const matches = normalizeLogin(confirm) === row.login

  async function handleDelete() {
    if (pending || !matches) return
    setPending(true)
    try {
      await deleteAccount(row.id)
      toast.success(t('admin.acc.deleted'))
      onDeleted()
      onClose()
    } catch (err) {
      toast.error(t(accountErrorKey(err)))
    } finally {
      setPending(false)
    }
  }

  return (
    <Dialog open onOpenChange={(open) => !open && !pending && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{tf('admin.acc.deleteTitle', { name: row.fullName })}</DialogTitle>
          <DialogDescription>{t('admin.acc.deleteBody')}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Label htmlFor="delete-confirm">{tf('admin.acc.deleteConfirmLabel', { login: row.login })}</Label>
          <Input
            id="delete-confirm"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            disabled={pending}
            className="h-10 font-mono"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={pending}>
            {t('common.cancel')}
          </Button>
          <Button variant="destructive" onClick={() => void handleDelete()} disabled={pending || !matches} className="gap-2">
            <Trash2 className="size-4" />
            {pending ? t('admin.acc.deleting') : t('admin.acc.deleteForever')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
