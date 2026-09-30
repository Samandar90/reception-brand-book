import type { Language } from '@/types'

/** Employee phone screen of the live final test (pages/FinalTest.tsx). */
export const finalDict = {
  'final.subtitle': {
    ru: 'Живой тест вместе со всей командой',
    uz: 'Butun jamoa bilan jonli test',
    en: 'Live test with the whole team',
  },
  'final.live': { ru: 'В эфире', uz: 'Jonli', en: 'Live' },
  'final.offline': {
    ru: 'Нет интернета — переподключаемся…',
    uz: "Internet yo'q — qayta ulanmoqda…",
    en: 'No internet — reconnecting…',
  },

  // Administrator
  'final.adminBanner': {
    ru: 'Вы администратор — откройте экран ведущего',
    uz: 'Siz administratorsiz — boshlovchi ekranini oching',
    en: 'You are the administrator — open the host screen',
  },
  'final.adminOpenHost': { ru: 'Экран ведущего', uz: 'Boshlovchi ekrani', en: 'Host screen' },
  'final.adminJoin': {
    ru: 'Участвовать как сотрудник (для проверки)',
    uz: 'Xodim sifatida qatnashish (sinov uchun)',
    en: 'Take part as an employee (for testing)',
  },
  'final.adminNotJoined': {
    ru: 'Вы не участвуете в этой сессии.',
    uz: 'Siz bu sessiyada qatnashmayapsiz.',
    en: 'You are not taking part in this session.',
  },
  'final.adminNoSession': {
    ru: 'Сейчас нет активной сессии. Создайте её в админ-панели.',
    uz: "Hozir faol sessiya yo'q. Uni admin panelda yarating.",
    en: 'There is no live session right now. Create one in the admin panel.',
  },
  'final.adminGoToPanel': { ru: 'Открыть админ-панель', uz: 'Admin panelni ochish', en: 'Open admin panel' },

  // Waiting & identity
  'final.waitingTitle': {
    ru: 'Ждём, когда ведущий начнёт',
    uz: 'Boshlovchi testni boshlashini kutyapmiz',
    en: 'Waiting for the host to start',
  },
  'final.waitingText': {
    ru: 'Не закрывайте эту страницу — тест появится здесь автоматически.',
    uz: "Bu sahifani yopmang — test shu yerda avtomatik paydo bo'ladi.",
    en: 'Keep this page open — the test will appear here automatically.',
  },
  'final.youAre': { ru: 'Вы вошли как', uz: 'Siz', en: 'You are' },
  'final.notYou': { ru: 'Это не вы?', uz: 'Bu siz emasmisiz?', en: 'Not you?' },
  'final.signOut': { ru: 'Выйти', uz: 'Chiqish', en: 'Sign out' },

  // Lobby
  'final.joinedTitle': { ru: 'Вы подключены!', uz: 'Siz ulandingiz!', en: "You're in!" },
  'final.joinedText': {
    ru: 'Тест скоро начнётся. Не закрывайте страницу и не блокируйте телефон.',
    uz: 'Test tez orada boshlanadi. Sahifani yopmang va telefonni qulflamang.',
    en: 'The test will start soon. Keep this page open and your phone unlocked.',
  },
  'final.joining': { ru: 'Подключаемся…', uz: 'Ulanmoqda…', en: 'Joining…' },
  'final.joinFailed': {
    ru: 'Не удалось подключиться к сессии. Проверьте интернет.',
    uz: "Sessiyaga ulanib bo'lmadi. Internetni tekshiring.",
    en: 'Could not join the session. Check your internet connection.',
  },
  'final.participants': { ru: 'Участников: {count}', uz: 'Qatnashchilar: {count}', en: 'Participants: {count}' },

  // Question
  'final.questionOf': { ru: 'Вопрос {k} из {n}', uz: '{n} tadan {k}-savol', en: 'Question {k} of {n}' },
  'final.secondsLeft': { ru: 'Осталось секунд: {s}', uz: 'Qolgan soniyalar: {s}', en: '{s} seconds left' },
  'final.scenario': { ru: 'Ситуация', uz: 'Vaziyat', en: 'Situation' },
  'final.timeUp': { ru: 'Время вышло', uz: 'Vaqt tugadi', en: 'Time is up' },
  'final.timeUpText': {
    ru: 'Ответы больше не принимаются. Результаты — на экране ведущего.',
    uz: 'Javoblar endi qabul qilinmaydi. Natijalar boshlovchi ekranida.',
    en: 'Answers are no longer accepted. Watch the results on the host screen.',
  },
  'final.received': { ru: 'Ответ принят', uz: 'Javob qabul qilindi', en: 'Answer received' },
  'final.receivedText': { ru: 'Дождитесь результатов', uz: 'Natijalarni kuting', en: 'Wait for the results' },
  'final.yourAnswer': { ru: 'Ваш ответ', uz: 'Sizning javobingiz', en: 'Your answer' },
  'final.noConnection': { ru: 'Нет соединения', uz: "Ulanish yo'q", en: 'No connection' },
  'final.noConnectionText': {
    ru: 'Ответ не отправлен. Проверьте интернет и попробуйте снова.',
    uz: "Javob yuborilmadi. Internetni tekshirib, qayta urinib ko'ring.",
    en: 'Your answer was not sent. Check your connection and try again.',
  },
  'final.emptyAnswer': {
    ru: 'Ответ не может быть пустым',
    uz: "Javob bo'sh bo'lishi mumkin emas",
    en: 'The answer cannot be empty',
  },
  'final.sending': { ru: 'Отправляем…', uz: 'Yuborilmoqda…', en: 'Sending…' },
  'final.openPlaceholder': {
    ru: 'Напишите ответ так, как сказали бы его гостю…',
    uz: 'Javobni mehmonga aytgandek yozing…',
    en: 'Write your answer the way you would say it to the guest…',
  },
  'final.words': { ru: 'Слов: {count}', uz: "So'zlar: {count}", en: 'Words: {count}' },
  'final.submit': { ru: 'Отправить ответ', uz: 'Javobni yuborish', en: 'Submit answer' },
  'final.autoSubmitHint': {
    ru: 'Черновик сохраняется. Когда время закончится, ответ отправится автоматически.',
    uz: 'Qoralama saqlanadi. Vaqt tugaganda javob avtomatik yuboriladi.',
    en: 'Your draft is saved. When time runs out, the answer is sent automatically.',
  },

  // Reveal
  'final.correct': { ru: 'Верно!', uz: "To'g'ri!", en: 'Correct!' },
  'final.incorrect': { ru: 'Неверно', uz: "Noto'g'ri", en: 'Incorrect' },
  'final.noAnswer': { ru: 'Нет ответа', uz: 'Javob berilmadi', en: 'No answer' },
  'final.pointsUnit': { ru: 'баллов', uz: 'ball', en: 'points' },
  'final.explanation': { ru: 'Пояснение', uz: 'Izoh', en: 'Explanation' },
  'final.yourScore': { ru: 'Ваши баллы', uz: 'Sizning ballingiz', en: 'Your score' },
  'final.yourPlace': { ru: 'Ваше место', uz: "Sizning o'rningiz", en: 'Your place' },
  'final.placeOf': { ru: '{place} из {total}', uz: '{total} tadan {place}', en: '{place} of {total}' },
  'final.openSaved': {
    ru: 'Ваш ответ сохранён — администратор оценит его позже.',
    uz: 'Javobingiz saqlandi — administrator uni keyinroq baholaydi.',
    en: 'Your answer was saved — the administrator will grade it.',
  },
  'final.openMissed': {
    ru: 'Вы не ответили на этот вопрос.',
    uz: 'Siz bu savolga javob bermadingiz.',
    en: 'You did not answer this question.',
  },
  'final.teamCorrect': {
    ru: 'Правильно ответили: {correct} из {answered}',
    uz: "To'g'ri javob berganlar: {answered} tadan {correct}",
    en: '{correct} of {answered} answered correctly',
  },
  'final.waitNext': { ru: 'Ждём следующий вопрос', uz: 'Keyingi savolni kutamiz', en: 'Waiting for the next question' },

  // Finished / cancelled
  'final.finishedTitle': { ru: 'Тест завершён', uz: 'Test yakunlandi', en: 'The test is over' },
  'final.finishedText': { ru: 'Спасибо за участие!', uz: 'Ishtirokingiz uchun rahmat!', en: 'Thank you for taking part!' },
  'final.totalPoints': { ru: 'Всего баллов', uz: 'Jami ball', en: 'Total points' },
  'final.correctAnswers': { ru: 'Верных ответов', uz: "To'g'ri javoblar", en: 'Correct answers' },
  'final.correctOf': { ru: '{correct} из {total}', uz: '{total} tadan {correct}', en: '{correct} of {total}' },
  'final.finishedNote': {
    ru: 'Полный результат, включая оценку открытых ответов, позже появится на странице «Тесты».',
    uz: "To'liq natija, jumladan ochiq javoblar bahosi, keyinroq «Testlar» sahifasida paydo bo'ladi.",
    en: 'Your full result, including the graded open answers, will appear on the Tests page later.',
  },
  'final.notParticipated': {
    ru: 'Вы не участвовали в этой сессии.',
    uz: 'Siz bu sessiyada qatnashmadingiz.',
    en: 'You did not take part in this session.',
  },
  'final.goToTests': { ru: 'Перейти к тестам', uz: "Testlarga o'tish", en: 'Go to Tests' },
  'final.cancelledTitle': { ru: 'Сессия отменена', uz: 'Sessiya bekor qilindi', en: 'The session was cancelled' },
  'final.cancelledText': {
    ru: 'Ведущий отменил эту сессию, результаты не сохранены.',
    uz: 'Boshlovchi bu sessiyani bekor qildi, natijalar saqlanmadi.',
    en: 'The host cancelled this session. No results were saved.',
  },
  'final.toDashboard': { ru: 'На главную', uz: 'Bosh sahifaga', en: 'Back to dashboard' },
} satisfies Record<string, Record<Language, string>>
