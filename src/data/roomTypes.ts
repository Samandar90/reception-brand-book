import type { RoomType } from '@/types'

export const roomTypes: RoomType[] = [
  {
    id: 'standard',
    name: { ru: 'Стандартный номер', uz: 'Standart xona', en: 'Standard Room' },
    description: {
      ru: 'Уютный номер с одной или двумя кроватями, идеально подходящий для короткого делового визита или бюджетного отдыха.',
      uz: "Bitta yoki ikkita krovatli qulay xona, qisqa muddatli ish safari yoki tejamkor dam olish uchun juda mos.",
      en: 'A cozy room with one or two beds, ideal for a short business trip or a budget-friendly stay.',
    },
    features: [
      { ru: 'Кровать размера queen или две отдельные кровати', uz: "Queen o'lchamdagi krovat yoki ikkita alohida krovat", en: 'Queen-size bed or two twin beds' },
      { ru: 'Бесплатный Wi-Fi и кондиционер', uz: 'Bepul Wi-Fi va konditsioner', en: 'Free Wi-Fi and air conditioning' },
      { ru: 'Рабочий стол и телевизор с плоским экраном', uz: 'Ish stoli va yassi ekranli televizor', en: 'Work desk and flat-screen TV' },
      { ru: 'Площадь номера около 20 м²', uz: 'Xona maydoni taxminan 20 m²', en: 'Approximately 20 m² of space' },
    ],
  },
  {
    id: 'superior',
    name: { ru: 'Номер Superior', uz: 'Superior xona', en: 'Superior Room' },
    description: {
      ru: 'Просторный номер с улучшенным видом и дополнительными удобствами для комфортного отдыха.',
      uz: "Yaxshilangan manzara va qo'shimcha qulayliklarga ega, qulay dam olish uchun keng xona.",
      en: 'A more spacious room with an upgraded view and extra amenities for a comfortable stay.',
    },
    features: [
      { ru: 'Вид на город или внутренний двор', uz: 'Shahar yoki ichki hovliga qaragan manzara', en: 'City or courtyard view' },
      { ru: 'Мини-бар и кофемашина в номере', uz: 'Xonada mini-bar va kofe mashinasi', en: 'In-room mini-bar and coffee machine' },
      { ru: 'Увеличенная площадь около 26 м²', uz: 'Kattalashtirilgan maydon, taxminan 26 m²', en: 'Larger footprint of about 26 m²' },
      { ru: 'Халат и тапочки в комплекте', uz: 'Xalat va shippak to\'plami', en: 'Bathrobe and slippers included' },
    ],
  },
  {
    id: 'deluxe',
    name: { ru: 'Делюкс номер', uz: 'Delyuks xona', en: 'Deluxe Room' },
    description: {
      ru: 'Элегантный номер с премиальной отделкой, просторной ванной комнатой и повышенным уровнем комфорта.',
      uz: 'Premium bezatilgan, keng hammom va yuqori qulaylikka ega nafis xona.',
      en: 'An elegant room with premium finishes, a spacious bathroom, and a higher level of comfort.',
    },
    features: [
      { ru: 'Панорамные окна с видом на город или бассейн', uz: 'Shahar yoki basseynga qaraydigan panorama derazalar', en: 'Panoramic windows with a city or pool view' },
      { ru: 'Ванна и отдельная душевая кабина', uz: 'Vanna va alohida dush kabinasi', en: 'Bathtub and separate walk-in shower' },
      { ru: 'Зона отдыха с диваном', uz: 'Divanli dam olish maydonchasi', en: 'Seating area with a sofa' },
      { ru: 'Бесплатный доступ в лаунж-зону', uz: 'Lounge-zonaga bepul kirish', en: 'Complimentary access to the lounge area' },
    ],
  },
  {
    id: 'junior-suite',
    name: { ru: 'Джуниор Сюит', uz: 'Junior Syut', en: 'Junior Suite' },
    description: {
      ru: 'Номер повышенной категории с чётким разделением на спальную и гостиную зоны, рассчитанный на длительное и комфортное проживание.',
      uz: "Yotoq va mehmon xonasi aniq ajratilgan, uzoq muddatli va qulay yashash uchun mo'ljallangan yuqori toifadagi xona.",
      en: 'An upscale room with a clearly defined sleeping and living area, designed for a longer and more comfortable stay.',
    },
    features: [
      { ru: 'Отдельная гостиная зона с креслами', uz: 'Kreslolar bilan jihozlangan alohida mehmon xonasi', en: 'Separate living area with armchairs' },
      { ru: 'Просторная ванная комната с гидромассажной ванной', uz: 'Gidromassaj vannali keng hammom', en: 'Spacious bathroom with a jacuzzi tub' },
      { ru: 'Площадь номера около 40 м²', uz: 'Xona maydoni taxminan 40 m²', en: 'Approximately 40 m² of space' },
      { ru: 'Услуга позднего выезда включена', uz: 'Kechroq chiqish xizmati kiritilgan', en: 'Late check-out privilege included' },
    ],
  },
  {
    id: 'executive-suite',
    name: { ru: 'Executive Сюит', uz: 'Executive Syut', en: 'Executive Suite' },
    description: {
      ru: 'Роскошные апартаменты для взыскательных гостей и деловых поездок, с отдельным кабинетом и эксклюзивными привилегиями.',
      uz: "Talabchan mehmonlar va ish safarlari uchun mo'ljallangan, alohida ish xonasi va eksklyuziv imtiyozlarga ega hashamatli apartamentlar.",
      en: 'Luxurious accommodations for discerning guests and business travel, featuring a separate study and exclusive privileges.',
    },
    features: [
      { ru: 'Отдельный кабинет для работы', uz: 'Ishlash uchun alohida kabinet', en: 'Separate study/work area' },
      { ru: 'Персональный дворецкий по запросу', uz: "So'rov bo'yicha shaxsiy xizmatkor", en: 'Personal butler service upon request' },
      { ru: 'Бесплатный трансфер до аэропорта', uz: 'Aeroportgacha bepul transfer', en: 'Complimentary airport transfer' },
      { ru: 'Доступ в VIP-лаунж с завтраком и напитками', uz: 'Nonushta va ichimliklar bilan VIP-lounjga kirish', en: 'Access to the VIP lounge with breakfast and refreshments' },
    ],
  },
  {
    id: 'family-room',
    name: { ru: 'Семейный номер', uz: 'Oilaviy xona', en: 'Family Room' },
    description: {
      ru: 'Просторный номер, спроектированный для комфортного проживания семей с детьми.',
      uz: "Bolali oilalar uchun qulay yashash sharoitlarini ta'minlaydigan keng xona.",
      en: 'A spacious room designed for families traveling with children to stay comfortably together.',
    },
    features: [
      { ru: 'Дополнительная односпальная или раскладная кровать для ребёнка', uz: "Bola uchun qo'shimcha bir kishilik yoki yig'iladigan krovat", en: 'An extra single or fold-out bed for a child' },
      { ru: 'Два раздельных спальных пространства', uz: 'Ikki alohida yotoq maydoni', en: 'Two separate sleeping areas' },
      { ru: 'Набор для детей: полотенца, тапочки и приветственный подарок', uz: "Bolalar uchun to'plam: sochiqlar, shippaklar va sovg'a", en: "A kids' amenity set with towels, slippers, and a welcome gift" },
      { ru: 'Площадь номера около 45 м²', uz: 'Xona maydoni taxminan 45 m²', en: 'Approximately 45 m² of space' },
    ],
  },
]

export default roomTypes
