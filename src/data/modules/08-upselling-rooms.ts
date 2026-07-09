import type { Module } from '@/types'

const upsellingRooms: Module = {
  slug: 'upselling-rooms',
  order: 8,
  icon: 'TrendingUp',
  title: { ru: 'Допродажи номеров', uz: 'Xonalarni qo\'shimcha sotish', en: 'Upselling Rooms' },
  description: {
    ru: 'Грамотный апселлинг увеличивает доход отеля и одновременно улучшает опыт гостя. Научитесь предлагать больше, не будучи навязчивым.',
    uz: 'To\'g\'ri upselling mehmonxona daromadini oshiradi va mehmon tajribasini yaxshilaydi. Zerikarli bo\'lmasdan ko\'proq narsa taklif qilishni o\'rganing.',
    en: 'Skillful upselling grows hotel revenue while improving the guest experience. Learn to offer more without being pushy.',
  },
  readingTimeMin: 8,
  difficulty: 'advanced',
  sections: [
    {
      id: 'overview',
      heading: { ru: 'Апселлинг как забота, а не продажа', uz: 'Sotish emas, g\'amxo\'rlik sifatida upselling', en: 'Upselling as care, not a sales pitch' },
      body: {
        ru: 'Апселлинг — это не попытка выжать больше денег из гостя, а возможность предложить решение, которое сделает его пребывание удобнее. Номер делюкс с видом на город, завтрак, включённый в стоимость, трансфер из аэропорта после долгого перелёта — всё это реальная ценность, если предложено вовремя и уместно. Ключ — читать сигналы гостя: усталость после перелёта, семью с детьми, годовщину. Предложение должно звучать как рекомендация коллеги, а не как скрипт продаж.',
        uz: 'Upselling — mehmondan ko\'proq pul undirish urinishi emas, balki uning turar joyini qulayroq qiladigan yechimni taklif qilish imkoniyati. Shahar manzarali delyuks xona, narxga kiritilgan nonushta, uzoq parvozdan keyin aeroportdan transfer — barchasi o\'z vaqtida va o\'rinli taklif qilinsa, haqiqiy qiymatga ega. Asosiysi — mehmonning belgilarini o\'qish: parvozdan charchagan, bolali oila, yubiley kuni. Taklif sotuv skriptidek emas, hamkasbning tavsiyasidek yangramog\'i kerak.',
        en: 'Upselling is not about squeezing more money out of a guest — it is an opportunity to offer something that genuinely improves their stay. A deluxe room with a city view, breakfast added to the rate, an airport transfer after a long flight — these are real value when offered at the right moment. The key is reading the guest\'s cues: fatigue after travel, a family with children, an anniversary. The offer should sound like a colleague\'s recommendation, not a sales script.',
      },
      callouts: [
        {
          type: 'tip',
          title: { ru: 'Продавайте выгоду, а не номер', uz: 'Xonani emas, foydani soting', en: 'Sell the benefit, not the room' },
          body: {
            ru: 'Вместо "Хотите делюкс за дополнительную плату?" скажите "За небольшую доплату вы получите номер выше этажом с видом на парк — идеально для отдыха после перелёта".',
            uz: '"Qo\'shimcha to\'lov evaziga delyuks xonani xohlaysizmi?" deyish o\'rniga: "Ozgina qo\'shimcha to\'lov bilan siz park manzarali yuqoriroq qavatdagi xonaga ega bo\'lasiz — parvozdan keyin dam olish uchun juda mos" deng.',
            en: 'Instead of "Would you like a deluxe room for extra cost?" say "For a small difference in rate, I can put you on a higher floor with a park view — perfect for unwinding after your flight."',
          },
        },
      ],
    },
    {
      id: 'dialogue',
      heading: { ru: 'Примеры диалогов', uz: 'Muloqot namunalari', en: 'Example dialogues' },
      body: {
        ru: 'Сравните уместное предложение с навязчивым давлением.',
        uz: 'O\'rinli taklifni zo\'rlik bilan taqillashdan farqlang.',
        en: 'Compare a well-placed offer with pushy pressure.',
      },
      dialogues: [
        {
          type: 'good',
          lines: [
            {
              speaker: 'receptionist',
              text: {
                ru: 'Вижу, вы бронировали стандартный номер. Кстати, у нас сегодня есть делюкс с видом на бассейн всего на 15 долларов дороже — хотите, покажу фото?',
                uz: 'Ko\'rib turibman, standart xona bron qilibsiz. Aytgancha, bugun bizda basseyn manzarali delyuks xona bor, atigi 15 dollar qimmatroq — rasmini ko\'rsataymi?',
                en: 'I see you booked a standard room. We actually have a deluxe room with a pool view available today for just $15 more — would you like to see a photo?',
              },
            },
            {
              speaker: 'guest',
              text: { ru: 'О, звучит неплохо, покажите.', uz: 'Oh, yomon emas, ko\'rsating.', en: 'Oh, that sounds nice, show me.' },
            },
            {
              speaker: 'receptionist',
              text: {
                ru: 'Вот, пожалуйста — просторнее и тише, дальше от лифта. Если понравится, я оформлю доплату прямо сейчас.',
                uz: 'Mana, marhamat — kengroq va tinchroq, liftdan uzoqroq. Yoqsa, hozir qo\'shimcha to\'lovni rasmiylashtiraman.',
                en: 'Here you go — more spacious and quieter, further from the elevator. If you like it, I can process the upgrade right now.',
              },
            },
          ],
        },
        {
          type: 'bad',
          lines: [
            { speaker: 'receptionist', text: { ru: 'Вам точно нужен делюкс, обычный номер маленький и шумный.', uz: 'Sizga aniq delyuks kerak, oddiy xona kichkina va shovqinli.', en: 'You really need the deluxe — the regular room is small and noisy.' } },
            { speaker: 'guest', text: { ru: 'Нет, спасибо, меня устраивает то, что забронировано.', uz: 'Yo\'q, rahmat, bron qilinganidan qoniqaman.', en: 'No thanks, I\'m fine with what I booked.' } },
            { speaker: 'receptionist', text: { ru: 'Но делюкс правда намного лучше, вы уверены?', uz: 'Lekin delyuks haqiqatan ham ancha yaxshi, ishonchingiz komilmi?', en: 'But the deluxe is really much better, are you sure?' } },
          ],
          note: {
            ru: 'Преувеличение недостатков забронированного номера и повтор предложения после отказа создают давление и портят впечатление.',
            uz: 'Bron qilingan xona kamchiliklarini bo\'rttirib ko\'rsatish va rad javobidan keyin taklifni takrorlash bosim yaratadi va taassurotni buzadi.',
            en: 'Exaggerating flaws in the booked room and repeating the offer after a decline creates pressure and spoils the impression.',
          },
        },
      ],
    },
    {
      id: 'tips',
      heading: { ru: 'Практические советы', uz: 'Amaliy maslahatlar', en: 'Practical tips' },
      body: {
        ru: 'Успешный апселлинг строится на выборе момента и уважении к решению гостя.',
        uz: 'Muvaffaqiyatli upselling to\'g\'ri vaqtni tanlash va mehmon qaroriga hurmatga asoslanadi.',
        en: 'Successful upselling depends on timing and respecting the guest\'s decision.',
      },
      callouts: [
        {
          type: 'golden-rule',
          title: { ru: 'Один вежливый отказ — стоп', uz: 'Bir marta muloyim rad javobi — to\'xtash', en: 'One polite decline means stop' },
          body: {
            ru: 'Если гость сказал "нет" один раз, не повторяйте предложение в другой форме. Уважение к решению гостя важнее упущенной допродажи.',
            uz: 'Agar mehmon bir marta "yo\'q" desa, taklifni boshqa shaklda takrorlamang. Mehmon qaroriga hurmat qo\'shimcha sotuvdan muhimroq.',
            en: 'If the guest says "no" once, do not rephrase and offer again. Respecting the guest\'s decision matters more than a missed sale.',
          },
        },
        {
          type: 'tip',
          title: { ru: 'Предлагайте по одному', uz: 'Bir vaqtda bitta taklif qiling', en: 'Offer one thing at a time' },
          body: {
            ru: 'Не перечисляйте сразу номер, завтрак, трансфер и позднее выселение списком — это утомляет. Выберите один самый уместный вариант для этого гостя.',
            uz: 'Xona, nonushta, transfer va kech chiqishni birdaniga ro\'yxat qilib aytmang — bu charchatadi. Shu mehmon uchun eng mos bo\'lgan bitta variantni tanlang.',
            en: 'Do not list the room upgrade, breakfast, transfer, and late checkout all at once — it is overwhelming. Pick the one option most relevant to this guest.',
          },
        },
      ],
    },
  ],
  commonMistakes: [
    { ru: 'Предлагать апселлинг сразу, не узнав цель поездки гостя', uz: 'Mehmonning safar maqsadini bilmasdan darhol upselling taklif qilish', en: 'Offering an upsell before learning the purpose of the guest\'s trip' },
    { ru: 'Повторять предложение после отказа', uz: 'Rad javobidan keyin taklifni takrorlash', en: 'Repeating the offer after a decline' },
    { ru: 'Называть завышенную цену без объяснения ценности', uz: 'Qiymatni tushuntirmasdan yuqori narxni aytish', en: 'Quoting a higher price without explaining the value' },
    { ru: 'Создавать впечатление, что забронированный номер плохой', uz: 'Bron qilingan xona yomondek taassurot qoldirish', en: 'Making the booked room sound inferior' },
    { ru: 'Предлагать сразу несколько допродаж одновременно', uz: 'Bir vaqtning o\'zida bir nechta qo\'shimcha sotuvni taklif qilish', en: 'Pitching several upsells all at once' },
  ],
  goldenRules: [
    { ru: 'Предлагайте выгоду для гостя, а не выручку для отеля', uz: 'Mehmonxona foydasini emas, mehmon foydasini taklif qiling', en: 'Frame the offer as a benefit to the guest, not revenue for the hotel' },
    { ru: 'Читайте сигналы гостя перед предложением', uz: 'Taklif qilishdan oldin mehmonning belgilarini o\'qing', en: 'Read the guest\'s cues before making an offer' },
    { ru: 'Никогда не повторяйте предложение после вежливого отказа', uz: 'Muloyim rad javobidan keyin hech qachon taklifni takrorlamang', en: 'Never repeat an offer after a polite decline' },
    { ru: 'Говорите конкретно: цена, разница, преимущество', uz: 'Aniq gapiring: narx, farq, afzallik', en: 'Be specific: price, difference, benefit' },
    { ru: 'Апселлинг должен звучать как совет, а не как продажа', uz: 'Upselling maslahatdek yangrashi kerak, sotuvdek emas', en: 'An upsell should sound like advice, not a sales pitch' },
  ],
}

export default upsellingRooms
