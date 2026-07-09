import type { LocalizedText } from '@/types'

export interface BookingComGuide {
  welcomeTips: LocalizedText[]
  paymentExplanation: LocalizedText
  commonQuestions: { question: LocalizedText; answer: LocalizedText }[]
  refundPolicy: LocalizedText
  cancellationPolicy: LocalizedText
  lateArrivalPolicy: LocalizedText
  noShowPolicy: LocalizedText
}

const bookingComGuide: BookingComGuide = {
  welcomeTips: [
    {
      ru: 'Приветствуйте гостя так же тепло, как и гостя с прямым бронированием — источник бронирования не должен влиять на качество сервиса.',
      uz: "Mehmonni to'g'ridan-to'g'ri bron qilgan mehmon kabi iliq kutib oling — bron manbai xizmat sifatiga ta'sir qilmasligi kerak.",
      en: 'Welcome the guest just as warmly as a guest who booked directly — the booking source should never affect the quality of service.',
    },
    {
      ru: 'Уточните номер бронирования Booking.com и сверьте детали (даты, тип номера, количество гостей) прямо при заезде.',
      uz: 'Booking.com bron raqamini aniqlashtiring va tafsilotlarni (sanalar, xona turi, mehmonlar soni) kelishda darhol solishtirib ko\'ring.',
      en: 'Confirm the Booking.com reservation number and verify the details (dates, room type, number of guests) right at check-in.',
    },
    {
      ru: 'Объясните гостю, включён ли завтрак и каков способ оплаты, поскольку в OTA-бронированиях это не всегда очевидно гостю.',
      uz: "Mehmonga nonushta kiritilganmi va to'lov usuli qanday ekanligini tushuntiring, chunki OTA orqali qilingan bronlarda bu mehmon uchun har doim ham aniq bo'lavermaydi.",
      en: "Explain to the guest whether breakfast is included and what the payment method is, since this isn't always clear to guests on OTA bookings.",
    },
    {
      ru: 'Поблагодарите гостя за выбор отеля через платформу и мягко предложите бронировать напрямую в следующий раз для лучших условий.',
      uz: "Mehmonni platforma orqali mehmonxonani tanlagani uchun rag'batlantiring va keyingi safar yaxshiroq shartlar uchun to'g'ridan-to'g'ri bron qilishni muloyimlik bilan taklif qiling.",
      en: 'Thank the guest for choosing the hotel through the platform, and gently suggest booking directly next time for better terms.',
    },
  ],
  paymentExplanation: {
    ru: 'Многие бронирования через Booking.com могут быть предоплачены картой при бронировании — в этом случае отель уже получил оплату (полностью или частично), и гостю не нужно платить повторно на ресепшене, за исключением депозита за возможный ущерб. Если бронирование отмечено как «оплата в отеле», гость должен оплатить проживание при заезде или выезде наличными или картой напрямую отелю. Всегда проверяйте статус оплаты в системе управления объектом (extranet) перед тем, как сообщать гостю сумму к оплате.',
    uz: "Booking.com orqali qilingan ko'plab bronlashlar bron qilish vaqtida karta orqali oldindan to'langan bo'lishi mumkin — bunday holda mehmonxona to'lovni allaqachon (to'liq yoki qisman) olgan bo'ladi va mehmon ehtimoliy zarar uchun depozitdan tashqari resepshenda qayta to'lov qilishi shart emas. Agar bron «mehmonxonada to'lash» deb belgilangan bo'lsa, mehmon kelganda yoki ketayotganda mehmonxonaga to'g'ridan-to'g'ri naqd yoki karta orqali to'lashi kerak. Mehmonga to'lanadigan summani aytishdan oldin har doim tizimdagi (extranet) to'lov holatini tekshiring.",
    en: 'Many Booking.com reservations may be prepaid by card at the time of booking — in that case the hotel has already received payment (in full or in part), and the guest does not need to pay again at the front desk, aside from a possible damage deposit. If the reservation is marked "pay at hotel," the guest must settle the stay directly with the hotel in cash or by card at check-in or check-out. Always verify the payment status in the property management system (extranet) before telling the guest an amount due.',
  },
  commonQuestions: [
    {
      question: {
        ru: 'Почему я должен показывать карту, если уже оплатил через Booking.com?',
        uz: "Nega Booking.com orqali to'lagan bo'lsam ham kartamni ko'rsatishim kerak?",
        en: 'Why do I need to show a card if I already paid through Booking.com?',
      },
      answer: {
        ru: 'Мы просим карту только для оформления депозита на случай возможного ущерба номеру, сама стоимость проживания уже оплачена и повторно списываться не будет.',
        uz: "Biz kartani faqat xonaga yetkazilishi mumkin bo'lgan zarar uchun depozit rasmiylashtirish uchun so'raymiz, turar joy narxi allaqachon to'langan va qayta yechilmaydi.",
        en: 'We only ask for a card to place a deposit in case of possible damage to the room — the cost of your stay is already paid and will not be charged again.',
      },
    },
    {
      question: {
        ru: 'Могу ли я изменить даты бронирования?',
        uz: 'Bron sanalarini o\'zgartirishim mumkinmi?',
        en: 'Can I change my reservation dates?',
      },
      answer: {
        ru: 'Да, при наличии свободных номеров мы можем изменить даты, но рекомендуем также обновить бронирование через приложение Booking.com, чтобы избежать путаницы.',
        uz: "Ha, bo'sh xonalar mavjud bo'lsa, sanalarni o'zgartirishimiz mumkin, lekin chalkashlikning oldini olish uchun Booking.com ilovasi orqali ham bronni yangilashni tavsiya qilamiz.",
        en: 'Yes, subject to availability we can change your dates, but we also recommend updating the booking through the Booking.com app to avoid confusion.',
      },
    },
    {
      question: {
        ru: 'Что делать, если моя карта отличается от той, что указана в брони?',
        uz: 'Agar kartam bronda ko\'rsatilgandan farq qilsa, nima qilish kerak?',
        en: "What if my card is different from the one listed on the booking?",
      },
      answer: {
        ru: 'Это не проблема — для депозита мы можем принять любую действующую карту на имя гостя, важно лишь удостоверение личности при регистрации.',
        uz: "Bu muammo emas — depozit uchun mehmon nomiga bo'lgan istalgan amaldagi kartani qabul qilishimiz mumkin, faqat ro'yxatdan o'tishda shaxsni tasdiqlovchi hujjat muhim.",
        en: "That's not a problem — for the deposit we can accept any valid card in the guest's name; identification at check-in is what matters most.",
      },
    },
    {
      question: {
        ru: 'Включён ли завтрак в мою бронь?',
        uz: 'Nonushta bronimga kiritilganmi?',
        en: 'Is breakfast included in my booking?',
      },
      answer: {
        ru: 'Это зависит от тарифного плана, который вы выбрали на Booking.com — уточните это в разделе «включено в цену» вашего подтверждения, или мы можем проверить это по номеру брони.',
        uz: "Bu Booking.com'da tanlagan tarif rejangizga bog'liq — buni tasdiqnomangizdagi «narxga kiritilgan» qismidan bilib olishingiz mumkin, yoki biz bron raqami orqali tekshirib beramiz.",
        en: 'That depends on the rate plan you selected on Booking.com — you can check the "included in the price" section of your confirmation, or we can verify it using your booking number.',
      },
    },
    {
      question: {
        ru: 'Почему цена в отеле отличается от цены на сайте?',
        uz: "Nega mehmonxonadagi narx saytdagidan farq qiladi?",
        en: 'Why is the hotel price different from the website price?',
      },
      answer: {
        ru: 'Иногда это связано с дополнительными услугами, налогами или курортным сбором, которые не всегда включены в отображаемую цену на платформе — мы всегда можем показать детальную разбивку счёта.',
        uz: "Ba'zan bu qo'shimcha xizmatlar, soliqlar yoki kurort yig'imi bilan bog'liq bo'lib, ular platformadagi ko'rsatilgan narxga har doim ham kiritilmagan bo'ladi — biz har doim hisobning batafsil taqsimotini ko'rsatib bera olamiz.",
        en: "This is sometimes due to extra services, taxes, or a resort fee that aren't always included in the price shown on the platform — we can always show you a detailed breakdown of the bill.",
      },
    },
  ],
  refundPolicy: {
    ru: 'Возвраты по бронированиям Booking.com обрабатываются в соответствии с тарифным планом, выбранным гостем на момент бронирования. Если тариф является возвратным (refundable) и отмена произошла в разрешённый срок, возврат средств инициируется через платформу Booking.com, а не напрямую отелем, и обычно занимает от 5 до 10 рабочих дней. Если тариф безвозвратный, возврат возможен только в исключительных случаях (например, форс-мажор) и требует согласования с менеджером отеля.',
    uz: "Booking.com bronlari bo'yicha pul qaytarish mehmon bron qilish vaqtida tanlagan tarif rejasiga muvofiq amalga oshiriladi. Agar tarif qaytariladigan (refundable) bo'lsa va bekor qilish ruxsat etilgan muddatda amalga oshirilgan bo'lsa, pul qaytarish mehmonxona orqali emas, Booking.com platformasi orqali boshlanadi va odatda 5 dan 10 ish kunigacha vaqt oladi. Agar tarif qaytarilmaydigan bo'lsa, pul qaytarish faqat istisno holatlarda (masalan, fors-major) va mehmonxona menejeri bilan kelishilgan holda mumkin.",
    en: 'Refunds for Booking.com reservations are processed according to the rate plan the guest selected at the time of booking. If the rate is refundable and the cancellation was made within the allowed window, the refund is initiated through the Booking.com platform rather than directly by the hotel, and typically takes 5 to 10 business days. If the rate is non-refundable, a refund is only possible in exceptional circumstances (such as force majeure) and requires approval from the hotel manager.',
  },
  cancellationPolicy: {
    ru: 'Гость может отменить бронирование самостоятельно через приложение или сайт Booking.com в любое время до истечения срока бесплатной отмены, указанного в условиях тарифа. Если срок бесплатной отмены истёк, с гостя может взиматься плата за первую ночь или полная стоимость бронирования, в зависимости от условий. Сотрудники ресепшена не должны отменять бронирование в системе отеля вручную — это может привести к расхождению данных с платформой; вместо этого направьте гостя в раздел «Управление бронированием» в его аккаунте Booking.com.',
    uz: "Mehmon bepul bekor qilish muddati tugagunga qadar Booking.com ilovasi yoki sayti orqali bronni mustaqil ravishda bekor qilishi mumkin. Agar bepul bekor qilish muddati o'tib ketgan bo'lsa, tarif shartlariga qarab mehmondan birinchi kecha uchun yoki bronning to'liq narxi uchun to'lov olinishi mumkin. Resepshen xodimlari bronni mehmonxona tizimida qo'lda bekor qilmasligi kerak — bu platforma bilan ma'lumotlar mos kelmasligiga olib kelishi mumkin; buning o'rniga mehmonni o'zining Booking.com hisobidagi «Bronni boshqarish» bo'limiga yo'naltiring.",
    en: 'The guest can cancel the reservation themselves through the Booking.com app or website at any time before the free cancellation deadline stated in the rate conditions. If the free cancellation window has passed, the guest may be charged for the first night or the full reservation amount, depending on the terms. Front desk staff should not cancel the reservation manually in the hotel system — this can cause data to fall out of sync with the platform; instead, direct the guest to the "Manage booking" section of their Booking.com account.',
  },
  lateArrivalPolicy: {
    ru: 'Если гость сообщает о позднем прибытии (после 22:00 или позже), необходимо оставить пометку в системе и, при возможности, связаться с ночной сменой, чтобы номер оставался забронированным. Гостю следует объяснить, что при отсутствии предупреждения бронирование без предоплаты может быть отменено ночным аудитом как no-show. Рекомендуется всегда просить гостя указать примерное время прибытия и контактный номер телефона.',
    uz: "Agar mehmon kech kelishi haqida xabar bersa (soat 22:00 dan keyin yoki undan ham kechroq), buni tizimda belgilab qo'yish va imkon bo'lsa, xona bron holicha qolishi uchun tungi smena bilan bog'lanish kerak. Mehmonga, agar oldindan xabar berilmasa, oldindan to'lanmagan bron tungi audit tomonidan no-show sifatida bekor qilinishi mumkinligini tushuntirish lozim. Har doim mehmondan taxminiy kelish vaqti va aloqa uchun telefon raqamini so'rash tavsiya etiladi.",
    en: "If a guest reports a late arrival (after 10 PM or later), this should be noted in the system, and the night shift should be contacted if possible so the room stays held. The guest should be told that, without advance notice, an unpaid reservation may be cancelled as a no-show during the night audit. It's recommended to always ask the guest for an estimated arrival time and a contact phone number.",
  },
  noShowPolicy: {
    ru: 'Если гость не заехал и не предупредил отель до конца расчётного дня, бронирование помечается как no-show во время ночного аудита. В зависимости от тарифа с гостя может быть списана стоимость первой ночи или полная стоимость бронирования через платёжные реквизиты, предоставленные Booking.com. Перед списанием необходимо убедиться, что не было пропущенного звонка или сообщения о задержке, и задокументировать ситуацию в системе управления объектом.',
    uz: "Agar mehmon kelmagan va hisob-kitob kunining oxirigacha mehmonxonani ogohlantirmagan bo'lsa, bron tungi audit paytida no-show sifatida belgilanadi. Tarifga qarab, mehmondan Booking.com tomonidan taqdim etilgan to'lov ma'lumotlari orqali birinchi kecha narxi yoki bronning to'liq narxi yechib olinishi mumkin. Pulni yechishdan oldin o'tkazib yuborilgan qo'ng'iroq yoki kechikish haqidagi xabar yo'qligiga ishonch hosil qilish va vaziyatni ob'ektni boshqarish tizimida hujjatlashtirish zarur.",
    en: 'If a guest does not arrive and has not notified the hotel by the end of the business day, the reservation is marked as a no-show during the night audit. Depending on the rate, the guest may be charged for the first night or the full reservation amount through the payment details provided by Booking.com. Before charging, staff should confirm there was no missed call or delay notification, and document the situation in the property management system.',
  },
}

export default bookingComGuide
