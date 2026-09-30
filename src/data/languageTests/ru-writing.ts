import type { WritingPrompt } from '@/types'

export const ruWriting: WritingPrompt[] = [
  {
    id: 'ru-writing-a2-01',
    language: 'ru',
    level: 'A2',
    instruction: {
      ru: 'Ответьте гостю в WhatsApp. Поздоровайтесь, успокойте его: стойка регистрации работает круглосуточно. Ответьте на вопрос о трансфере и попросите номер рейса.',
      uz: 'Mehmonga WhatsApp orqali javob yozing. Salomlashing, uni tinchlantiring: qabulxona 24 soat ishlaydi. Transfer haqidagi savolga javob bering va reys raqamini so\'rang.',
      en: 'Reply to the guest on WhatsApp. Greet them and reassure them that reception is open 24 hours. Answer the question about the transfer and ask for the flight number.',
    },
    situation: 'Сообщение в WhatsApp, 22:40: «Здравствуйте! Мой рейс задерживается, буду в отеле примерно в час ночи. Ресепшен ещё будет работать? И можно ли заказать трансфер из аэропорта?»',
    minWords: 30,
    maxWords: 60,
  },
  {
    id: 'ru-writing-a2-02',
    language: 'ru',
    level: 'A2',
    instruction: {
      ru: 'Ответьте гостю в чате. Сообщите время завтрака (07:00–10:30) и где он проходит, подтвердите, что завтрак включён в стоимость, и предложите вариант для раннего выезда — например, завтрак с собой.',
      uz: 'Mehmonga chatda javob yozing. Nonushta vaqti (07:00–10:30) va joyini ayting, nonushta narxga kiritilganini tasdiqlang va erta ketish uchun variant taklif qiling — masalan, nonushtani o\'zi bilan olib ketish.',
      en: 'Reply to the guest in the chat. Give the breakfast time (07:00–10:30) and place, confirm that breakfast is included, and offer an option for the early departure — for example, a breakfast box to take away.',
    },
    situation: 'Чат Booking.com: «Добрый вечер. Подскажите, во сколько у вас завтрак и входит ли он в стоимость номера? Мы уезжаем рано утром, в 7:00».',
    minWords: 30,
    maxWords: 60,
  },
  {
    id: 'ru-writing-b1-01',
    language: 'ru',
    level: 'B1',
    instruction: {
      ru: 'Напишите ответ по электронной почте. Объясните, что стандартное время заезда — с 14:00, но вы постараетесь подготовить номер раньше и сообщите об этом. Предложите камеру хранения, завтрак или лобби для ожидания. Ответьте на все вопросы гостя.',
      uz: 'Elektron pochta orqali javob yozing. Standart joylashish vaqti 14:00 dan ekanini tushuntiring, lekin xonani ertaroq tayyorlashga harakat qilishingizni va bu haqda xabar berishingizni ayting. Yuk saqlash xonasi, nonushta yoki kutish uchun lobbini taklif qiling. Mehmonning barcha savollariga javob bering.',
      en: 'Write an email reply. Explain that standard check-in is from 14:00, but you will try to prepare the room earlier and let them know. Offer luggage storage, breakfast or the lobby for waiting. Answer all of the guest\'s questions.',
    },
    situation: 'Письмо от гостя: «Здравствуйте! Мы с семьёй приезжаем ночным поездом и будем в отеле около 8 утра. Можно ли заселиться пораньше? Дети будут очень уставшие. Если нет — где нам подождать и куда поставить чемоданы?»',
    minWords: 50,
    maxWords: 90,
  },
  {
    id: 'ru-writing-b1-02',
    language: 'ru',
    level: 'B1',
    instruction: {
      ru: 'Ответьте гостю в WhatsApp. Сообщите, что очки нашла горничная и они хранятся на ресепшене. Объясните варианты получения: забрать лично, передать через доверенное лицо или отправить курьером за счёт гостя. Попросите данные, которые вам нужны.',
      uz: 'Mehmonga WhatsApp orqali javob yozing. Ko\'zoynakni xizmatchi topganini va u qabulxonada saqlanayotganini ayting. Olish variantlarini tushuntiring: shaxsan olib ketish, ishonchli odam orqali olish yoki mehmon hisobidan kuryer bilan jo\'natish. Sizga kerakli ma\'lumotlarni so\'rang.',
      en: 'Reply to the guest on WhatsApp. Tell them housekeeping found the glasses and they are kept at reception. Explain the options: collect in person, send a trusted person, or courier delivery at the guest\'s expense. Ask for the details you need.',
    },
    situation: 'WhatsApp, на следующий день после выезда: «Добрый день! Вчера я выехал из номера 412 и, кажется, забыл в тумбочке очки в синем футляре. Вы их не находили? Я уже в Самарканде, как мне их получить?»',
    minWords: 50,
    maxWords: 90,
  },
  {
    id: 'ru-writing-b2-01',
    language: 'ru',
    level: 'B2',
    instruction: {
      ru: 'Напишите ответ по электронной почте от имени отеля. Искренне извинитесь, признайте, что ночная реакция была недостаточной, и коротко объясните, какие меры приняты. Предложите конкретную компенсацию (например, скидку на эту ночь и переселение в тихий номер) и покажите, что вам важно сохранить доверие гостя. Не оправдывайтесь и не перекладывайте вину на других гостей.',
      uz: 'Mehmonxona nomidan elektron pochta orqali javob yozing. Samimiy uzr so\'rang, tungi javob yetarli bo\'lmaganini tan oling va qanday choralar ko\'rilganini qisqacha tushuntiring. Aniq kompensatsiya taklif qiling (masalan, shu tun uchun chegirma va tinch xonaga ko\'chirish) va mehmon ishonchini saqlash siz uchun muhimligini ko\'rsating. O\'zingizni oqlamang va aybni boshqa mehmonlarga yuklamang.',
      en: 'Write an email reply on behalf of the hotel. Apologise sincerely, acknowledge that the night-time response was not good enough, and briefly explain what has been done. Offer specific compensation (for example a discount on that night and a move to a quiet room) and show that keeping the guest\'s trust matters to you. Do not make excuses or blame the other guests.',
    },
    situation: 'Письмо, полученное утром: «Ночью в соседнем номере до двух часов громко праздновали. Я звонил на ресепшен, но ничего не изменилось. В итоге я не спал, а в 9 утра у меня важные переговоры. Считаю, что платить полную цену за такую ночь несправедливо — что вы предлагаете?»',
    minWords: 70,
    maxWords: 120,
  },
  {
    id: 'ru-writing-c1-01',
    language: 'ru',
    level: 'C1',
    instruction: {
      ru: 'Напишите дипломатичный ответ по электронной почте. Выразите сочувствие, поблагодарите за многолетнюю лояльность и корректно объясните условия невозвратного тарифа, не отказывая резко. Предложите достойную альтернативу — перенос дат без штрафа, ваучер на ту же сумму или частичный возврат по согласованию с руководством — и дайте понять, что будете рады организовать празднование годовщины позже. Не реагируйте на упоминание отзыва как на угрозу.',
      uz: 'Elektron pochta orqali diplomatik javob yozing. Hamdardlik bildiring, ko\'p yillik sodiqlik uchun rahmat ayting va qaytarilmaydigan tarif shartlarini keskin rad etmasdan, xushmuomalalik bilan tushuntiring. Munosib muqobil taklif qiling — sanalarni jarimasiz ko\'chirish, xuddi shu summaga vaucher yoki rahbariyat bilan kelishilgan holda qisman qaytarish — va nikoh yilligini keyinroq nishonlashni tashkil qilishdan xursand bo\'lishingizni bildiring. Sharh haqidagi gapga tahdid sifatida munosabat bildirmang.',
      en: 'Write a diplomatic email reply. Express sympathy, thank the guest for years of loyalty and explain the non-refundable terms tactfully, without a blunt refusal. Offer a worthy alternative — moving the dates without penalty, a voucher for the same amount, or a partial refund subject to management approval — and make it clear you would be glad to arrange the anniversary celebration later. Do not treat the mention of a review as a threat.',
    },
    situation: 'Письмо от постоянного гостя: «Добрый день! Я бронировал у вас люкс на 12–14 октября по невозвратному тарифу, чтобы отметить годовщину свадьбы, но жену кладут в больницу, и поездка отменяется. Я останавливаюсь у вас уже пятый год и рассчитываю на полный возврат. Если это невозможно, буду очень разочарован и напишу об этом в отзыве».',
    minWords: 90,
    maxWords: 150,
  },
]
