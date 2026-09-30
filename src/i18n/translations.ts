import type { Language } from '@/types'
import { commonDict } from './dicts/common'
import { authDict } from './dicts/auth'
import { testsDict } from './dicts/tests'
import { finalDict } from './dicts/final'
import { adminDict } from './dicts/admin'
import { learningDict } from './dicts/learning'
import { finalAdminDict } from './dicts/finalAdmin'

export const LANGUAGE_LABELS: Record<Language, string> = {
  ru: 'Русский',
  uz: "O'zbek",
  en: 'English',
}

export const LANGUAGE_FLAGS: Record<Language, string> = {
  ru: '🇷🇺',
  uz: '🇺🇿',
  en: '🇬🇧',
}

const base = {
  appName: { ru: 'Hotel Academy', uz: 'Hotel Academy', en: 'Hotel Academy' },
  appSubtitle: {
    ru: 'Портал обучения ресепшена',
    uz: 'Resepshen o\'quv portali',
    en: 'Reception Training Portal',
  },

  // common
  'common.loading': { ru: 'Загрузка...', uz: 'Yuklanmoqda...', en: 'Loading...' },
  'common.save': { ru: 'Сохранить', uz: 'Saqlash', en: 'Save' },
  'common.cancel': { ru: 'Отмена', uz: 'Bekor qilish', en: 'Cancel' },
  'common.continue': { ru: 'Продолжить', uz: 'Davom etish', en: 'Continue' },
  'common.back': { ru: 'Назад', uz: 'Orqaga', en: 'Back' },
  'common.previous': { ru: 'Предыдущий', uz: 'Oldingi', en: 'Previous' },
  'common.next': { ru: 'Следующий', uz: 'Keyingi', en: 'Next' },
  'common.markComplete': { ru: 'Отметить как пройдено', uz: 'Bajarildi deb belgilash', en: 'Mark as complete' },
  'common.completed': { ru: 'Пройдено', uz: 'Bajarildi', en: 'Completed' },
  'common.search': { ru: 'Поиск...', uz: 'Qidiruv...', en: 'Search...' },
  'common.copy': { ru: 'Копировать', uz: 'Nusxalash', en: 'Copy' },
  'common.copied': { ru: 'Скопировано', uz: 'Nusxalandi', en: 'Copied' },
  'common.download': { ru: 'Скачать', uz: 'Yuklab olish', en: 'Download' },
  'common.print': { ru: 'Печать', uz: 'Chop etish', en: 'Print' },
  'common.noResults': { ru: 'Ничего не найдено', uz: 'Hech narsa topilmadi', en: 'No results found' },
  'common.minutes': { ru: 'мин', uz: 'daqiqa', en: 'min' },

  // login
  'login.rememberDevice': { ru: 'Запомнить это устройство', uz: 'Bu qurilmani eslab qolish', en: 'Remember this device' },
  'login.unlock': { ru: 'Войти', uz: 'Kirish', en: 'Unlock' },

  // nav
  'nav.dashboard': { ru: 'Дашборд', uz: 'Boshqaruv paneli', en: 'Dashboard' },
  'nav.receptionStandards': { ru: 'Стандарты ресепшена', uz: 'Resepshen standartlari', en: 'Reception Standards' },
  'nav.communication': { ru: 'Общение', uz: 'Muloqot', en: 'Communication' },
  'nav.phoneCalls': { ru: 'Телефонные звонки', uz: 'Telefon qo\'ng\'iroqlari', en: 'Phone Calls' },
  'nav.whatsapp': { ru: 'WhatsApp', uz: 'WhatsApp', en: 'WhatsApp' },
  'nav.bookingCom': { ru: 'Booking.com', uz: 'Booking.com', en: 'Booking.com' },
  'nav.conflictSituations': { ru: 'Конфликтные ситуации', uz: 'Ziddiyatli vaziyatlar', en: 'Conflict Situations' },
  'nav.salesTechniques': { ru: 'Техники продаж', uz: 'Sotish texnikalari', en: 'Sales Techniques' },
  'nav.roomTypes': { ru: 'Типы номеров', uz: 'Xona turlari', en: 'Room Types' },
  'nav.checkIn': { ru: 'Заезд', uz: 'Ro\'yxatdan o\'tish', en: 'Check-in' },
  'nav.checkOut': { ru: 'Выезд', uz: 'Chiqish', en: 'Check-out' },
  'nav.emergency': { ru: 'Экстренные ситуации', uz: 'Favqulodda vaziyatlar', en: 'Emergency' },
  'nav.knowledgeTest': { ru: 'Проверка знаний', uz: 'Bilim testi', en: 'Knowledge Test' },
  'nav.certificates': { ru: 'Сертификаты', uz: 'Sertifikatlar', en: 'Certificates' },
  'nav.settings': { ru: 'Настройки', uz: 'Sozlamalar', en: 'Settings' },

  // dashboard
  'dashboard.welcome': { ru: 'С возвращением', uz: 'Xush kelibsiz', en: 'Welcome back' },
  'dashboard.subtitle': {
    ru: 'Продолжайте обучение и станьте мастером гостеприимства',
    uz: 'O\'qishni davom eting va mehmondo\'stlik ustasiga aylaning',
    en: 'Keep learning and become a master of hospitality',
  },
  'dashboard.todayProgress': { ru: 'Прогресс обучения', uz: 'O\'quv jarayoni', en: "Training progress" },
  'dashboard.completedLessons': { ru: 'Пройдено уроков', uz: 'Bajarilgan darslar', en: 'Completed lessons' },
  'dashboard.remainingLessons': { ru: 'Осталось уроков', uz: 'Qolgan darslar', en: 'Remaining lessons' },
  'dashboard.estimatedTime': { ru: 'Осталось времени', uz: 'Qolgan vaqt', en: 'Estimated time left' },
  'dashboard.viewAllModules': { ru: 'Все модули', uz: 'Barcha modullar', en: 'View all modules' },
  'dashboard.continueLearning': { ru: 'Продолжить обучение', uz: 'O\'qishni davom ettirish', en: 'Continue learning' },
  'dashboard.quickLinks': { ru: 'Быстрые ссылки', uz: 'Tezkor havolalar', en: 'Quick links' },

  // modules index
  'modules.title': { ru: 'Учебные модули', uz: 'O\'quv modullari', en: 'Training Modules' },
  'modules.subtitle': {
    ru: 'Все 15 модулей академии ресепшена',
    uz: 'Resepshen akademiyasining barcha 15 ta moduli',
    en: 'All 15 modules of the Reception Academy',
  },

  // lesson
  'lesson.readingTime': { ru: 'Время чтения', uz: 'O\'qish vaqti', en: 'Reading time' },
  'lesson.difficulty': { ru: 'Сложность', uz: 'Murakkablik', en: 'Difficulty' },
  'lesson.difficulty.beginner': { ru: 'Начальный', uz: 'Boshlang\'ich', en: 'Beginner' },
  'lesson.difficulty.intermediate': { ru: 'Средний', uz: "O'rta", en: 'Intermediate' },
  'lesson.difficulty.advanced': { ru: 'Продвинутый', uz: 'Yuqori', en: 'Advanced' },
  'lesson.toc': { ru: 'Содержание', uz: 'Mundarija', en: 'On this page' },
  'lesson.commonMistakes': { ru: 'Частые ошибки', uz: 'Keng tarqalgan xatolar', en: 'Common mistakes' },
  'lesson.goldenRules': { ru: 'Золотые правила', uz: 'Oltin qoidalar', en: 'Golden rules' },
  'lesson.goodExample': { ru: 'Правильный пример', uz: 'To\'g\'ri namuna', en: 'Good example' },
  'lesson.badExample': { ru: 'Неправильный пример', uz: 'Noto\'g\'ri namuna', en: 'Bad example' },
  'lesson.prevModule': { ru: 'Пред. модуль', uz: 'Oldingi modul', en: 'Previous module' },
  'lesson.nextModule': { ru: 'След. модуль', uz: 'Keyingi modul', en: 'Next module' },
  'lesson.receptionist': { ru: 'Ресепшен', uz: 'Resepshen', en: 'Receptionist' },
  'lesson.guest': { ru: 'Гость', uz: 'Mehmon', en: 'Guest' },

  // quiz
  'quiz.title': { ru: 'Проверка знаний', uz: 'Bilim testi', en: 'Knowledge Test' },
  'quiz.subtitle': {
    ru: 'Проверьте свои знания по всем модулям',
    uz: 'Barcha modullar bo\'yicha bilimingizni sinab ko\'ring',
    en: 'Test your knowledge across all modules',
  },
  'quiz.question': { ru: 'Вопрос', uz: 'Savol', en: 'Question' },
  'quiz.of': { ru: 'из', uz: 'dan', en: 'of' },
  'quiz.submit': { ru: 'Ответить', uz: 'Javob berish', en: 'Submit' },
  'quiz.nextQuestion': { ru: 'Следующий вопрос', uz: 'Keyingi savol', en: 'Next question' },
  'quiz.finish': { ru: 'Завершить тест', uz: 'Testni yakunlash', en: 'Finish quiz' },
  'quiz.retake': { ru: 'Пройти заново', uz: 'Qayta topshirish', en: 'Retake quiz' },
  'quiz.correct': { ru: 'Верно!', uz: 'To\'g\'ri!', en: 'Correct!' },
  'quiz.incorrect': { ru: 'Неверно', uz: 'Noto\'g\'ri', en: 'Incorrect' },
  'quiz.yourScore': { ru: 'Ваш результат', uz: 'Sizning natijangiz', en: 'Your score' },
  'quiz.explanation': { ru: 'Пояснение', uz: 'Izoh', en: 'Explanation' },

  // certificate
  'certificate.title': { ru: 'Сертификат', uz: 'Sertifikat', en: 'Certificate' },
  'certificate.subtitle': {
    ru: 'Завершите все модули, чтобы получить сертификат',
    uz: 'Sertifikat olish uchun barcha modullarni yakunlang',
    en: 'Complete all modules to earn your certificate',
  },
  'certificate.employeeName': { ru: 'Имя сотрудника', uz: 'Xodim ismi', en: 'Employee name' },
  'certificate.generate': { ru: 'Создать сертификат', uz: 'Sertifikat yaratish', en: 'Generate certificate' },
  'certificate.downloadPdf': { ru: 'Скачать PDF', uz: 'PDF yuklab olish', en: 'Download PDF' },
  'certificate.congrats': {
    ru: 'Поздравляем!',
    uz: 'Tabriklaymiz!',
    en: 'Congratulations!',
  },
  'certificate.presentedTo': { ru: 'Вручается', uz: 'Taqdim etiladi', en: 'This certifies that' },
  'certificate.forCompleting': {
    ru: 'успешно завершил(а) программу обучения Reception Academy',
    uz: 'Reception Academy o\'quv dasturini muvaffaqiyatli yakunladi',
    en: 'has successfully completed the Reception Academy training program',
  },
  'certificate.date': { ru: 'Дата', uz: 'Sana', en: 'Date' },
  'certificate.locked': {
    ru: 'Пройдите все 15 модулей и сдайте тест знаний минимум на 80 %, чтобы получить сертификат',
    uz: 'Sertifikat olish uchun barcha 15 modulni yakunlang va bilim testini kamida 80 % ga topshiring',
    en: 'Complete all 15 modules and score at least 80% on the knowledge test to unlock your certificate',
  },
  'certificate.levels': { ru: 'Уровень языка', uz: 'Til darajasi', en: 'Language level' },

  // settings
  'settings.title': { ru: 'Настройки', uz: 'Sozlamalar', en: 'Settings' },
  'settings.theme': { ru: 'Тема', uz: 'Mavzu', en: 'Theme' },
  'settings.light': { ru: 'Светлая', uz: 'Yorug\'', en: 'Light' },
  'settings.dark': { ru: 'Тёмная', uz: 'Qorong\'i', en: 'Dark' },
  'settings.system': { ru: 'Системная', uz: 'Tizim', en: 'System' },
  'settings.language': { ru: 'Язык', uz: 'Til', en: 'Language' },
  'settings.fontSize': { ru: 'Размер шрифта', uz: 'Shrift o\'lchami', en: 'Font size' },
  'settings.small': { ru: 'Маленький', uz: 'Kichik', en: 'Small' },
  'settings.medium': { ru: 'Средний', uz: 'O\'rta', en: 'Medium' },
  'settings.large': { ru: 'Большой', uz: 'Katta', en: 'Large' },
  'settings.animations': { ru: 'Анимации', uz: 'Animatsiyalar', en: 'Animations' },
  'settings.on': { ru: 'Вкл', uz: 'Yoqilgan', en: 'On' },
  'settings.off': { ru: 'Выкл', uz: 'O\'chirilgan', en: 'Off' },
  'settings.resetProgress': { ru: 'Сбросить прогресс модулей', uz: 'Modullar jarayonini tiklash', en: 'Reset module progress' },
  'settings.resetConfirmTitle': { ru: 'Сбросить прогресс модулей?', uz: 'Modullar jarayoni tiklansinmi?', en: 'Reset module progress?' },
  'settings.resetConfirmBody': {
    ru: 'Все модули снова станут непройденными. Результаты тестов сохраняются и остаются видны администратору.',
    uz: 'Barcha modullar yana bajarilmagan bo\'ladi. Test natijalari saqlanib qoladi va administratorga ko\'rinadi.',
    en: 'All modules will be marked as not completed. Test results are kept and stay visible to the administrator.',
  },
  'settings.resetConfirmAction': { ru: 'Да, сбросить', uz: 'Ha, tiklash', en: 'Yes, reset' },
  'settings.logout': { ru: 'Выйти', uz: 'Chiqish', en: 'Log out' },

  // search / phrasebook
  'phrase.category': { ru: 'Категория', uz: 'Toifa', en: 'Category' },
} satisfies Record<string, Record<Language, string>>

const dict = {
  ...base,
  ...commonDict,
  ...authDict,
  ...testsDict,
  ...finalDict,
  ...adminDict,
  ...learningDict,
  ...finalAdminDict,
} satisfies Record<string, Record<Language, string>>

export type TranslationKey = keyof typeof dict

export function translate(key: TranslationKey, lang: Language): string {
  return dict[key]?.[lang] ?? key
}

export default dict
