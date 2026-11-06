import type { Language } from '@/types'

/** Strings for the knowledge assessment (/quiz), the per-lesson "Check yourself" and the dashboard test summary. */
export const learningDict = {
  // ─── Knowledge assessment (/quiz) ──────────────────────────────────────────
  'learn.quiz.subtitle': {
    ru: 'Итоговая проверка знаний по всем 15 модулям',
    uz: "Barcha 15 modul bo'yicha yakuniy bilim tekshiruvi",
    en: 'Final knowledge assessment across all 15 modules',
  },
  'learn.quiz.youAre': { ru: 'Вы:', uz: 'Siz:', en: 'You are:' },
  'learn.quiz.notYou': { ru: 'Это не вы?', uz: 'Bu siz emasmisiz?', en: 'Not you?' },
  'learn.quiz.signOut': { ru: 'Выйти', uz: 'Chiqish', en: 'Sign out' },
  'learn.quiz.rulesTitle': { ru: 'Правила', uz: 'Qoidalar', en: 'Rules' },
  'learn.quiz.ruleQuestions': {
    ru: '{count} вопросов по всем {modules} модулям, порядок вопросов и ответов перемешан',
    uz: "Barcha {modules} modul bo'yicha {count} ta savol, savollar va javoblar tartibi aralashtirilgan",
    en: '{count} questions from all {modules} modules, in a shuffled order with shuffled answers',
  },
  'learn.quiz.ruleTimer': {
    ru: 'На каждый вопрос {sec} секунд. Не успели подтвердить ответ — вопрос засчитывается как неверный, вернуться к нему нельзя',
    uz: "Har bir savolga {sec} soniya. Javobni vaqtida tasdiqlamasangiz, savol noto'g'ri deb hisoblanadi va unga qaytib bo'lmaydi",
    en: '{sec} seconds per question. If you do not confirm in time, the question counts as wrong and cannot be revisited',
  },
  'learn.quiz.ruleNoHints': {
    ru: 'Во время теста нет подсказок и правильных ответов: выберите вариант и нажмите «Далее»',
    uz: "Test davomida maslahat va to'g'ri javoblar ko'rsatilmaydi: variantni tanlang va «Keyingi» tugmasini bosing",
    en: 'No hints or correct answers during the test: choose an option and tap "Next"',
  },
  'learn.quiz.ruleRecorded': {
    ru: 'Результат сохраняется и виден администратору',
    uz: "Natija saqlanadi va administratorga ko'rinadi",
    en: 'Your result is saved and visible to the administrator',
  },
  'learn.quiz.ruleFocus': {
    ru: 'Не уходите со страницы: переход в другую вкладку или приложение фиксируется, а открытый в этот момент вопрос засчитывается как неверный. Незавершённый тест не сохраняется',
    uz: "Sahifadan chiqmang: boshqa oyna yoki ilovaga o'tish qayd etiladi, o'sha paytda ochiq turgan savol esa noto'g'ri deb hisoblanadi. Tugallanmagan test saqlanmaydi",
    en: 'Stay on this page: switching to another tab or app is recorded, and the question open at that moment counts as wrong. An unfinished test is not saved',
  },
  'learn.quiz.ruleCooldown': {
    ru: 'Одна попытка в {hours} часа: пересдать тест можно не раньше чем через {hours} ч после предыдущей попытки',
    uz: "{hours} soatda bitta urinish: testni oldingi urinishdan kamida {hours} soat o'tgach qayta topshirish mumkin",
    en: 'One attempt per {hours} hours: the test can be retaken no sooner than {hours} h after the previous attempt',
  },
  'learn.quiz.cooldownNotice': {
    ru: 'Следующая попытка будет доступна {date}.',
    uz: 'Keyingi urinish {date} kuni ochiladi.',
    en: 'Your next attempt opens on {date}.',
  },
  'learn.quiz.cooldownToast': {
    ru: 'Пересдача пока недоступна: с предыдущей попытки должно пройти {hours} ч. Эта попытка не сохранена.',
    uz: "Qayta topshirish hali mumkin emas: oldingi urinishdan {hours} soat o'tishi kerak. Bu urinish saqlanmadi.",
    en: 'Retake not available yet: {hours} h must pass since your previous attempt. This attempt was not saved.',
  },
  'learn.quiz.timeOut': {
    ru: 'Время вышло — вопрос засчитан как неверный',
    uz: "Vaqt tugadi — savol noto'g'ri deb hisoblandi",
    en: 'Time is up — the question counts as wrong',
  },
  'learn.quiz.focusForfeit': {
    ru: 'Вы ушли со страницы — открытый вопрос засчитан как неверный',
    uz: "Siz sahifadan chiqdingiz — ochiq savol noto'g'ri deb hisoblandi",
    en: 'You left the page — the open question counts as wrong',
  },
  'learn.quiz.leaveConfirm': {
    ru: 'Выйти из теста? Ваши ответы не сохранятся.',
    uz: 'Testdan chiqasizmi? Javoblaringiz saqlanmaydi.',
    en: 'Leave the test? Your answers will not be saved.',
  },
  'learn.quiz.ruleCertificate': {
    ru: 'Для сертификата нужно пройти все модули и набрать не менее {min} %',
    uz: "Sertifikat uchun barcha modullarni yakunlash va kamida {min} % to'plash kerak",
    en: 'The certificate requires all modules completed and at least {min} %',
  },
  'learn.quiz.start': { ru: 'Начать тест', uz: 'Testni boshlash', en: 'Start the test' },
  'learn.quiz.bestSoFar': {
    ru: 'Ваш лучший результат: {percent} % · попыток: {count}',
    uz: 'Eng yaxshi natijangiz: {percent} % · urinishlar: {count}',
    en: 'Your best result: {percent} % · attempts: {count}',
  },
  'learn.quiz.counter': { ru: 'Вопрос {n} из {total}', uz: '{total} tadan {n}-savol', en: 'Question {n} of {total}' },
  'learn.quiz.next': { ru: 'Далее', uz: 'Keyingi', en: 'Next' },
  'learn.quiz.chooseHint': { ru: 'Выберите один вариант ответа', uz: 'Bitta javob variantini tanlang', en: 'Choose one answer' },
  'learn.quiz.saveFailedTitle': { ru: 'Результат не сохранён', uz: 'Natija saqlanmadi', en: 'Result not saved' },
  'learn.quiz.saveFailedBody': {
    ru: 'Ваши ответы не потеряны — не закрывайте страницу. Проверьте интернет и нажмите «Повторить».',
    uz: "Javoblaringiz yo'qolmagan — sahifani yopmang. Internetni tekshiring va «Qayta urinish» tugmasini bosing.",
    en: 'Your answers are not lost — keep this page open. Check your connection and tap "Retry".',
  },
  'learn.quiz.passed': { ru: 'Тест сдан', uz: 'Test topshirildi', en: 'Passed' },
  'learn.quiz.notPassed': {
    ru: 'Недостаточно для сертификата',
    uz: 'Sertifikat uchun yetarli emas',
    en: 'Not enough for the certificate',
  },
  'learn.quiz.passedBody': {
    ru: 'Отличный результат — он засчитывается для сертификата.',
    uz: 'Ajoyib natija — u sertifikat uchun hisobga olinadi.',
    en: 'Great result — it counts toward your certificate.',
  },
  'learn.quiz.failedBody': {
    ru: 'Для сертификата нужно не менее {min} %. Повторите самые слабые модули ниже и попробуйте снова.',
    uz: "Sertifikat uchun kamida {min} % kerak. Quyidagi eng zaif modullarni takrorlang va qaytadan urinib ko'ring.",
    en: 'The certificate needs at least {min} %. Review the weakest modules below and try again.',
  },
  'learn.quiz.byModule': { ru: 'Результат по модулям', uz: "Modullar bo'yicha natija", en: 'Results by module' },
  'learn.quiz.byModuleHint': {
    ru: 'Сначала самые слабые — нажмите, чтобы повторить урок',
    uz: 'Avval eng zaiflari — darsni takrorlash uchun bosing',
    en: 'Weakest first — tap a module to review the lesson',
  },
  'learn.quiz.toDashboard': { ru: 'На главную', uz: 'Bosh sahifaga', en: 'Back to dashboard' },

  // ─── "Check yourself" at the end of each lesson ────────────────────────────
  'learn.check.title': { ru: 'Проверь себя', uz: "O'zingizni tekshiring", en: 'Check yourself' },
  'learn.check.intro': {
    ru: 'Вопросов по этому уроку: {count}, на каждый {sec} секунд. Чтобы модуль засчитался, нужно ответить правильно на все {pass} — одна ошибка или просроченный вопрос означают повторную попытку.',
    uz: "Ushbu dars bo'yicha savollar: {count} ta, har biriga {sec} soniya. Modul hisobga olinishi uchun barcha {pass} tasiga to'g'ri javob berish kerak — bitta xato yoki vaqti o'tgan savol qayta urinishni bildiradi.",
    en: '{count} questions on this lesson, {sec} seconds each. To complete the module you must answer all {pass} correctly — one mistake or one timed-out question means another attempt.',
  },
  'learn.check.timeOut': {
    ru: 'Время вышло',
    uz: 'Vaqt tugadi',
    en: 'Time is up',
  },
  'learn.check.timeOutBody': {
    ru: 'Ответ не был дан за отведённое время, вопрос засчитан как неверный.',
    uz: "Ajratilgan vaqt ichida javob berilmadi, savol noto'g'ri deb hisoblandi.",
    en: 'No answer was given in the allotted time, so the question counts as wrong.',
  },
  'learn.check.start': { ru: 'Начать проверку', uz: 'Tekshiruvni boshlash', en: 'Start the check' },
  'learn.check.seeResult': { ru: 'Показать результат', uz: "Natijani ko'rish", en: 'See result' },
  'learn.check.passedTitle': { ru: 'Модуль пройден!', uz: 'Modul yakunlandi!', en: 'Module completed!' },
  'learn.check.score': {
    ru: 'Правильных ответов: {score} из {total}',
    uz: "To'g'ri javoblar: {total} tadan {score} ta",
    en: 'Correct answers: {score} of {total}',
  },
  'learn.check.passedToast': {
    ru: 'Модуль «{title}» пройден',
    uz: '«{title}» moduli yakunlandi',
    en: 'Module "{title}" completed',
  },
  'learn.check.failedTitle': { ru: 'Почти получилось', uz: 'Oz qoldi', en: 'Almost there' },
  'learn.check.failedBody': {
    ru: 'Правильно {score} из {total}, а нужно все {pass}. Перечитайте урок — особенно золотые правила и типичные ошибки — и попробуйте ещё раз.',
    uz: "{total} tadan {score} ta to'g'ri, barcha {pass} tasi kerak. Darsni, ayniqsa oltin qoidalar va tipik xatolarni qayta o'qing va yana urinib ko'ring.",
    en: '{score} of {total} correct — you need all {pass}. Re-read the lesson, especially the golden rules and common mistakes, and try again.',
  },
  'learn.check.stillComplete': {
    ru: 'Модуль по-прежнему засчитан.',
    uz: 'Modul avvalgidek hisobga olingan.',
    en: 'The module stays completed.',
  },
  'learn.check.tryAgain': { ru: 'Попробовать снова', uz: "Qayta urinib ko'rish", en: 'Try again' },
  'learn.check.reread': { ru: 'Перечитать урок', uz: "Darsni qayta o'qish", en: 'Re-read the lesson' },
  'learn.check.completedWithScore': {
    ru: 'Пройдено ✓ — проверка {score}/{total}, {date}',
    uz: 'Yakunlandi ✓ — tekshiruv {score}/{total}, {date}',
    en: 'Completed ✓ — check {score}/{total} on {date}',
  },
  'learn.check.completedOn': { ru: 'Пройдено ✓ — {date}', uz: 'Yakunlandi ✓ — {date}', en: 'Completed ✓ on {date}' },
  'learn.check.retake': { ru: 'Пройти проверку ещё раз', uz: 'Tekshiruvni qayta topshirish', en: 'Retake check' },
  'learn.check.markIncomplete': {
    ru: 'Отметить как непройденный',
    uz: 'Bajarilmagan deb belgilash',
    en: 'Mark as not completed',
  },
  'learn.check.noQuestions': {
    ru: 'Изучили урок? Отметьте его как пройденный.',
    uz: "Darsni o'rgandingizmi? Uni bajarilgan deb belgilang.",
    en: 'Finished the lesson? Mark it as complete.',
  },
  'learn.check.toKnowledgeTest': { ru: 'Перейти к тесту знаний', uz: "Bilim testiga o'tish", en: 'Go to the knowledge test' },

  // ─── Dashboard: tests summary ──────────────────────────────────────────────
  'learn.dash.testsTitle': { ru: 'Ваши тесты', uz: 'Testlaringiz', en: 'Your tests' },
  'learn.dash.allTests': { ru: 'Все тесты', uz: 'Barcha testlar', en: 'All tests' },
  'learn.dash.bestResult': { ru: 'Лучший результат', uz: 'Eng yaxshi natija', en: 'Best result' },
  'learn.dash.notTaken': { ru: 'Ещё не проходили', uz: 'Hali topshirilmagan', en: 'Not taken yet' },
  'learn.dash.passed': { ru: 'Сдан', uz: 'Topshirildi', en: 'Passed' },
  'learn.dash.needMin': { ru: 'Нужно {min} %', uz: 'Kerak: {min} %', en: 'Need {min} %' },
  'learn.dash.belowA1': { ru: 'Ниже A1', uz: 'A1 dan past', en: 'Below A1' },
  'learn.dash.writingReview': { ru: 'Письмо на проверке', uz: 'Yozma ish tekshirilmoqda', en: 'Writing under review' },
  'learn.dash.grading': { ru: 'Идёт проверка', uz: 'Baholanmoqda', en: 'Grading in progress' },
  'learn.dash.latestResult': { ru: 'Последний результат', uz: 'Oxirgi natija', en: 'Latest result' },
  'learn.dash.certReady': {
    ru: 'Сертификат доступен — откройте его',
    uz: 'Sertifikat tayyor — uni oching',
    en: 'Your certificate is ready — open it',
  },
  'learn.dash.certMissing': {
    ru: 'Для сертификата осталось: {items}',
    uz: 'Sertifikat uchun qoldi: {items}',
    en: 'Still needed for the certificate: {items}',
  },
  'learn.dash.certModules': { ru: 'модули {done}/{total}', uz: 'modullar {done}/{total}', en: 'modules {done}/{total}' },
  'learn.dash.certKnowledge': {
    ru: 'тест знаний от {min} %',
    uz: 'bilim testi kamida {min} %',
    en: 'knowledge test ≥ {min} %',
  },
  'learn.dash.finalCalloutTitle': {
    ru: 'Финальный тест проходит вживую',
    uz: "Yakuniy test jonli o'tkaziladi",
    en: 'The final test is run live',
  },
  'learn.dash.finalCalloutBody': {
    ru: 'Его запускает руководитель для всей команды. Когда тест начнётся, откройте страницу финального теста на телефоне и присоединитесь.',
    uz: "Uni rahbar butun jamoa uchun boshlaydi. Test boshlanganda, telefoningizda yakuniy test sahifasini oching va qo'shiling.",
    en: 'Your manager starts it for the whole team. When it begins, open the final test page on your phone and join.',
  },
} satisfies Record<string, Record<Language, string>>
