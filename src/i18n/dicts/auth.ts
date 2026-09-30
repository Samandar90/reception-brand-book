import type { Language } from '@/types'

export const authDict = {
  'login.loginLabel': { ru: 'Логин', uz: 'Login', en: 'Login' },
  'login.loginPlaceholder': { ru: 'например, aziza.k', uz: 'masalan, aziza.k', en: 'e.g. aziza.k' },
  'login.passwordLabel': { ru: 'Пароль', uz: 'Parol', en: 'Password' },
  'login.passwordPlaceholder': { ru: 'Введите пароль', uz: 'Parolni kiriting', en: 'Enter your password' },
  'login.signIn': { ru: 'Войти', uz: 'Kirish', en: 'Sign in' },
  'login.signingIn': { ru: 'Входим...', uz: 'Kirilmoqda...', en: 'Signing in...' },
  'login.required': { ru: 'Введите логин и пароль', uz: 'Login va parolni kiriting', en: 'Enter your login and password' },
  'login.invalidCredentials': {
    ru: 'Неверный логин или пароль',
    uz: "Login yoki parol noto'g'ri",
    en: 'Incorrect login or password',
  },
  'login.accountDisabled': {
    ru: 'Аккаунт отключён. Обратитесь к администратору.',
    uz: "Hisob o'chirilgan. Administratorga murojaat qiling.",
    en: 'This account is disabled. Contact your administrator.',
  },
  'login.networkError': {
    ru: 'Нет связи с сервером. Попробуйте ещё раз.',
    uz: "Server bilan aloqa yo'q. Qayta urinib ko'ring.",
    en: 'Cannot reach the server. Please try again.',
  },
  'login.notConfigured': {
    ru: 'Приложение не подключено к базе данных (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY).',
    uz: "Ilova ma'lumotlar bazasiga ulanmagan (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY).",
    en: 'The app is not connected to a database (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY).',
  },
  'login.hint': {
    ru: 'Логин и пароль выдаёт администратор',
    uz: 'Login va parolni administrator beradi',
    en: 'Your administrator provides your login and password',
  },
  'login.firstLaunch': {
    ru: 'Первый запуск: создать аккаунт владельца',
    uz: 'Birinchi ishga tushirish: egasining hisobini yaratish',
    en: 'First launch: create the owner account',
  },
  'setup.title': { ru: 'Первый запуск', uz: 'Birinchi ishga tushirish', en: 'First launch' },
  'setup.subtitle': {
    ru: 'Создайте аккаунт владельца. Потом в админ-панели вы откроете аккаунты сотрудникам.',
    uz: 'Egasining hisobini yarating. Keyin admin panelda xodimlarga hisob ochasiz.',
    en: 'Create the owner account. Then you will open accounts for your staff in the admin panel.',
  },
  'setup.keyLabel': { ru: 'Ключ установки', uz: "O'rnatish kaliti", en: 'Setup key' },
  'setup.keyHint': {
    ru: 'Секрет ADMIN_BOOTSTRAP_KEY из настроек Supabase (Edge Functions → Secrets).',
    uz: 'Supabase sozlamalaridagi ADMIN_BOOTSTRAP_KEY maxfiy kaliti (Edge Functions → Secrets).',
    en: 'The ADMIN_BOOTSTRAP_KEY secret from Supabase (Edge Functions → Secrets).',
  },
  'setup.nameLabel': { ru: 'Ваше имя', uz: 'Ismingiz', en: 'Your name' },
  'setup.loginHint': {
    ru: '3–32 символа: латинские буквы, цифры, точка, дефис',
    uz: '3–32 belgi: lotin harflari, raqamlar, nuqta, chiziqcha',
    en: '3–32 characters: latin letters, digits, dot, dash',
  },
  'setup.submit': { ru: 'Создать аккаунт владельца', uz: 'Egasining hisobini yaratish', en: 'Create owner account' },
  'setup.alreadyDone': {
    ru: 'Аккаунт владельца уже создан. Войдите со своим логином.',
    uz: 'Egasining hisobi allaqachon yaratilgan. Loginingiz bilan kiring.',
    en: 'The owner account already exists. Sign in with your login.',
  },
  'setup.errorKey': { ru: 'Неверный ключ установки', uz: "O'rnatish kaliti noto'g'ri", en: 'Wrong setup key' },
  'setup.errorExists': {
    ru: 'Владелец уже создан — войдите со своим логином',
    uz: 'Egasi allaqachon yaratilgan — loginingiz bilan kiring',
    en: 'The owner already exists — sign in with your login',
  },
  'setup.errorLogin': {
    ru: 'Логин: 3–32 символа, латиница, цифры, точка, дефис',
    uz: 'Login: 3–32 belgi, lotin harflari, raqamlar, nuqta, chiziqcha',
    en: 'Login: 3–32 characters, latin letters, digits, dot, dash',
  },
  'setup.errorPassword': {
    ru: 'Пароль должен быть не короче 6 символов',
    uz: "Parol kamida 6 belgidan iborat bo'lishi kerak",
    en: 'The password must be at least 6 characters',
  },
  'setup.errorName': { ru: 'Введите имя', uz: 'Ismni kiriting', en: 'Enter your name' },
} satisfies Record<string, Record<Language, string>>
