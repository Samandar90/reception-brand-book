import type { Module } from '@/types'

const whatsappCommunication: Module = {
  slug: 'whatsapp-communication',
  order: 5,
  icon: 'MessageCircle',
  title: { ru: 'Общение в WhatsApp', uz: 'WhatsApp orqali muloqot', en: 'WhatsApp Communication' },
  description: {
    ru: 'Переписка требует другой дисциплины, чем звонок: гость видит текст, а не слышит тон голоса. Научитесь отвечать быстро, писать тепло и по делу.',
    uz: 'Yozishmalar qo\'ng\'iroqdan farqli intizomni talab qiladi: mehmon ovoz ohangini emas, matnni ko\'radi. Tez javob berishni, iliq va lo\'nda yozishni o\'rganing.',
    en: 'Messaging requires a different discipline than a call: the guest sees text, not the tone of your voice. Learn to reply quickly and write warmly and to the point.',
  },
  readingTimeMin: 6,
  difficulty: 'intermediate',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Особенности переписки', uz: 'Yozishmaning o\'ziga xosligi', en: 'What makes messaging different' },
      body: {
        ru: 'В WhatsApp гости ожидают ответ гораздо быстрее, чем на email — в идеале в течение нескольких минут, максимум в течение получаса в рабочее время. Тон должен быть тёплым, но профессиональным: не сухим канцеляритом, но и не панибратским. Уместны один-два эмодзи для смягчения тона, но не гирлянды из смайликов. Важные договорённости — даты, цену, условия — всегда фиксируйте письменно, чтобы избежать недопонимания.',
        uz: 'WhatsApp\'da mehmonlar javobni email\'dan ancha tezroq kutishadi — ideal holda bir necha daqiqa ichida, ish vaqtida esa eng ko\'pi bilan yarim soat ichida. Ohang iliq, lekin professional bo\'lishi kerak: na quruq rasmiy uslub, na haddan tashqari erkin. Ohangni yumshatish uchun bir-ikkita emoji joizdir, lekin smayliklar to\'plami emas. Muhim kelishuvlarni — sanalar, narx, shartlar — tushunmovchiliklarning oldini olish uchun har doim yozma ravishda mustahkamlang.',
        en: 'On WhatsApp, guests expect a much faster reply than by email — ideally within a few minutes, or at most within half an hour during working hours. The tone should be warm but professional: not stiff and formal, but not overly casual either. One or two emoji to soften the tone are fine, but not strings of smileys. Always confirm important agreements — dates, price, conditions — in writing to avoid misunderstandings.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Избегайте стены текста', uz: 'Matn devoridan saqlaning', en: 'Avoid walls of text' },
          body: {
            ru: 'Разбивайте ответ на короткие сообщения по 1–2 предложения вместо одного длинного абзаца — так гостю легче читать с телефона.',
            uz: 'Javobni bitta uzun abzats o\'rniga 1-2 gapdan iborat qisqa xabarlarga bo\'ling — shunda mehmonga telefondan o\'qish osonroq bo\'ladi.',
            en: 'Break your reply into short messages of 1–2 sentences instead of one long paragraph — it\'s much easier for the guest to read on a phone screen.',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры переписки', uz: 'Yozishma namunalari', en: 'Example message exchanges' },
      body: {
        ru: 'Сравните удачную и неудачную переписку с гостем, уточняющим бронь.',
        uz: 'Bronni aniqlashtirayotgan mehmon bilan muvaffaqiyatli va muvaffaqiyatsiz yozishmani solishtiring.',
        en: 'Compare a good and a poor message exchange with a guest confirming a booking.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'guest',
              text: { ru: 'Здравствуйте! Подскажите, можно ли заселиться пораньше, около 11 утра?', uz: 'Assalomu alaykum! Aytingchi, ertaroq, soat 11 atrofida joylashish mumkinmi?', en: 'Hi! Could I check in a bit earlier, around 11am?' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Добрый день! Спасибо за сообщение 🙂 Уточню у горничных, свободен ли номер к этому времени, и напишу вам в течение 15 минут.',
                uz: 'Assalomu alaykum! Xabaringiz uchun rahmat 🙂 Xonaning shu vaqtga tayyor bo\'lishini farroshlardan aniqlab, 15 daqiqa ichida sizga yozaman.',
                en: 'Good afternoon! Thanks for reaching out 🙂 I\'ll check with housekeeping whether the room will be ready by then and get back to you within 15 minutes.',
              },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Хорошие новости — номер будет готов к 11:00, ждём вас! Если приедете раньше, можем оставить багаж на стойке.',
                uz: 'Yaxshi xabar — xona soat 11:00 ga tayyor bo\'ladi, sizni kutamiz! Agar erta kelsangiz, yukni stoykada qoldirishimiz mumkin.',
                en: 'Good news — the room will be ready by 11:00, we look forward to your arrival! If you arrive earlier, we can hold your luggage at the desk.',
              },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'guest', text: { ru: 'Здравствуйте! Можно заселиться пораньше, около 11 утра?', uz: 'Assalomu alaykum! Ertaroq, soat 11 atrofida joylashish mumkinmi?', en: 'Hi! Can I check in earlier, around 11am?' } },
            { speaker: 'receptionist', text: { ru: 'нет', uz: 'yoq', en: 'no' } },
          ],
          note: {
            ru: 'Односложный ответ без объяснения, без предложения альтернативы и без базовой вежливости выглядит грубо и обрывает диалог.',
            uz: 'Tushuntirishsiz, muqobil taklif qilmasdan va oddiy xushmuomalaliksiz bir bo\'g\'inli javob qo\'pol ko\'rinadi va suhbatni to\'xtatib qo\'yadi.',
            en: 'A one-word reply with no explanation, no alternative offered, and no basic courtesy feels rude and shuts down the conversation.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Полезные советы', uz: 'Foydali maslahatlar', en: 'Helpful tips' },
      body: {
        ru: 'Приёмы, которые делают переписку профессиональной и приятной.',
        uz: 'Yozishmani professional va yoqimli qiladigan usullar.',
        en: 'Techniques that make messaging feel professional and pleasant.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Отвечайте максимально быстро', uz: 'Iloji boricha tez javob bering', en: 'Reply as fast as possible' },
          body: {
            ru: 'В мессенджере гость ожидает почти мгновенной реакции. Если ответ требует времени на уточнение, сразу напишите об этом, а не оставляйте сообщение без ответа.',
            uz: 'Messenjerda mehmon deyarli zudlik bilan javob kutadi. Agar javob uchun aniqlashtirish vaqti kerak bo\'lsa, buni darhol yozing, xabarni javobsiz qoldirmang.',
            en: 'In a messenger app, guests expect an almost instant response. If the answer needs time to confirm, say so right away instead of leaving the message unanswered.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Фиксируйте договорённости письменно', uz: 'Kelishuvlarni yozma ravishda mustahkamlang', en: 'Confirm agreements in writing' },
          body: {
            ru: 'После телефонного звонка или устной договорённости отправьте короткое сообщение с итогами: даты, цена, условия. Это защищает и гостя, и отель от недоразумений.',
            uz: 'Telefon qo\'ng\'irog\'i yoki og\'zaki kelishuvdan so\'ng, natijalar bilan qisqa xabar yuboring: sanalar, narx, shartlar. Bu mehmon va mehmonxonani tushunmovchiliklardan himoya qiladi.',
            en: 'After a phone call or verbal agreement, send a short message summarizing the outcome: dates, price, conditions. This protects both the guest and the hotel from misunderstandings.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Отвечать с большой задержкой, спустя часы', uz: 'Soatlab kechikib javob berish', en: 'Replying with a long delay, hours later' },
    { ru: 'Писать сухим, слишком формальным тоном', uz: 'Quruq, haddan tashqari rasmiy uslubda yozish', en: 'Writing in a stiff, overly formal tone' },
    { ru: 'Использовать слишком много эмодзи или сленга', uz: 'Juda ko\'p emoji yoki jargon ishlatish', en: 'Using too many emoji or slang' },
    { ru: 'Присылать одно длинное неструктурированное сообщение', uz: 'Bitta uzun, tuzilmasiz xabar yuborish', en: 'Sending one long, unstructured message' },
    { ru: 'Не подтверждать письменно важные детали брони', uz: 'Bron haqidagi muhim tafsilotlarni yozma tasdiqlamaslik', en: 'Not confirming important booking details in writing' },
  ],
  goldenRules: [
    { ru: 'Отвечайте быстро, в идеале в течение нескольких минут', uz: 'Tez javob bering, ideal holda bir necha daqiqa ichida', en: 'Reply quickly, ideally within a few minutes' },
    { ru: 'Пишите тепло, но профессионально', uz: 'Iliq, lekin professional yozing', en: 'Write warmly, but stay professional' },
    { ru: 'Используйте эмодзи умеренно и уместно', uz: 'Emojini me\'yorida va o\'rinli ishlating', en: 'Use emoji sparingly and appropriately' },
    { ru: 'Разбивайте текст на короткие сообщения', uz: 'Matnni qisqa xabarlarga bo\'ling', en: 'Break text into short messages' },
    { ru: 'Всегда фиксируйте важные детали письменно', uz: 'Muhim tafsilotlarni har doim yozma tasdiqlang', en: 'Always confirm important details in writing' },
  ],
}

export default whatsappCommunication
