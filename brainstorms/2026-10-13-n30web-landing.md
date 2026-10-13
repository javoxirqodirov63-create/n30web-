# n30 Mahsulotlar Landing Page: Brainstorm va Rejalashtirish Qaydlari
Sana: 2026-10-13 · Maqsad: "Ozuqa-don" mahsulotlarini namoyish etuvchi, mijozlar fikrlari va murojaat anketasiga ega zamonaviy bir sahifali veb-sayt (Landing page) yaratish.

## Asosiy qarorlar va xulosa
- **Kompaniya / Brend**: "Ozuqa-don"
- **Soha / Yo'nalish**: Qushlar va parrandalar uchun sifatli ozuqa, don va yem mahsulotlari.
- **Format**: Bitta sahifali veb-sayt (Single-page landing page, 100% responsive).
- **Texnologik stek**: HTML5 + Tailwind CSS + Vanilla JavaScript.
- **Ranglar palitrasi**: Tabiiy yashil (Emerald green), iliq don/qum sariq ohanglari (Warm amber/wheat), toza oq fon va o'qilishi qulay to'q rangli matnlar.
- **Asosiy bo'limlar (4 ta)**:
  1. **Kompaniya haqida (Hero / About)**:
     - Katta shior: *"Qushlaringiz va parrandalaringiz uchun 100% tabiiy, toza saralangan ozuqalar"*
     - Tavsif: *"Ozuqa-don — qushlarning sog'lom o'sishi va baquvvat bo'lishi uchun kerakli barcha vitaminlarga boy sara don mahsulotlari."*
     - 3 ta ustunlik belgisi:
       - 🌾 100% toza, chang va begona o'tlardan saralangan
       - 🚚 Tezkor va qulay yetkazib berish xizmati
       - 💰 Ishlab chiqaruvchidan to'g'ridan-to'g'ri hamyonbop narxlar
     - Asosiy harakat tugmasi: *"Mahsulotlarni ko'rish"* (katalogga silliq tushiradi).
  2. **Mahsulotlar katalogi (~10 ga yaqin mahsulot turlari)**:
     - Kartochka tarkibi: Mahsulot rasmi, nomi (To'ti doni, Bedana doni, Kanareka ozuqasi...), og'irligi (kg), narxi va *"Buyurtma berish"* tugmasi.
     - Xarid oqimi: Tugma bosilganda sahifa pastidagi anketaga o'tadi va anketadagi *"Tanlangan mahsulot"* maydonini avtomatik to'ldiradi.
  3. **Mijozlar fikrlari (Testimonials / Feedback)**:
     - 3–4 ta ishonchli mijoz sharhlari (grid ko'rinishida).
     - Tarkibi: Mijoz ismi va shahri, baholash yulduzchalari (⭐⭐⭐⭐⭐), xarid qilingan mahsulot, qisqa va samimiy fikri.
  4. **Bog'lanish / Murojaat qilish anketasi (Lead capture form)**:
     - Maydonlar: Ism, Telefon raqam, Tanlangan mahsulot, Yetkazib berish manzili yoki qisqa izoh.
     - Xabarnoma integratsiyasi: Real vaqt rejimida Telegram Bot API orqali adminga xabar yuboriladi.
     - Mijoz interfeysi: Muvaffaqiyatli qabul qilinganlik xabari (Success modal/alert).

## Savol-javoblar jurnali (Q&A log)
### Q1 — Kompaniya nomi va mahsulot yo'nalishi
- **Savol**: Kompaniyangizning nomi nima va saytda aynan qanday mahsulotlar (qaysi soha / yo'nalish) taqdim etiladi?
- **Javob**: "Ozuqa-don" (qushlar va parrandalar ozuqa mahsulotlari).
- **Qaydlar/Flags**: Hal qilindi.

### Q2 — Mahsulot kartochkalari va buyurtma oqimi
- **Savol**: Mahsulotlar bo'limidagi 10 ga yaqin kartochkalarda qanday ma'lumotlar aks etadi va mijoz ulardan birini tanlaganda nima sodir bo'lishi kerak?
- **Javob**: Mahsulot rasmi, nomi (To'ti doni, Bedana doni, Kanareka ozuqasi va h.k.), og'irligi (kg), narxi va "Buyurtma berish" tugmasi. Tugma bosilganda anketaga tushib, mahsulot maydoni avtomatik to'ldiriladi.
- **Qaydlar/Flags**: Hal qilindi.

### Q3 — Anketa maydonlari va xabarnoma mexanizmi
- **Savol**: Bog'lanish / buyurtma anketasida qanday maydonlar (inputlar) bo'lishi kerak va mijoz anketani to'ldirib yuborganida ma'lumotlar qayerga borib tushishi kerak?
- **Javob**: Maydonlar: Ism, Telefon raqam, Tanlangan mahsulot, Manzil/izoh. Yuborish: Telegram bot orqali adminga boradi.
- **Qaydlar/Flags**: Hal qilindi.

### Q4 — Mijozlar fikrlari (Feedback) tuzilishi
- **Savol**: Mijozlardan kelgan feedbacklar (sharhlar) bo'limi qanday tuzilishda bo'lishini xohlaysiz va har bir sharh kartochkasida qanday ma'lumotlar ko'rinadi?
- **Javob**: 3–4 ta sharh grid ko'rinishida: Ism va shahar, yulduzchalar, xarid mahsuloti, fikr matni.
- **Qaydlar/Flags**: Hal qilindi.

### Q5 — Kompaniya haqida (Hero / About) bo'limi
- **Savol**: Saytning eng yuqori qismida — Kompaniya haqida (Hero / About) bo'limida qanday asosiy shior, 3 ta afzallik va qanday tugma bo'lishi kerak?
- **Javob**: Shior: "Qushlaringiz va parrandalaringiz uchun 100% tabiiy, toza saralangan ozuqalar". Tavsif, 3 ta afzallik (🌾 toza, 🚚 tezkor yetkazib berish, 💰 hamyonbop narxlar) va "Mahsulotlarni ko'rish" tugmasi.
- **Qaydlar/Flags**: Hal qilindi.

### Q6 — Texnologik stek va dizayn uslubi
- **Savol**: Saytning texnologik steki va vizual ko'rinishi bo'yicha qanday qaror qilamiz? Shuningdek, biz hali qamrab olmagan yana biror qo'shimcha talab yoki funksiya bormi?
- **Javob**: HTML5 + Tailwind CSS + JavaScript. Ranglar: Tabiiy zumrad yashil + don/qum sariq ohanglar + toza oq fon. Boshqa bo'lim shart emas, shu 4 ta bo'lim to'liq.
- **Qaydlar/Flags**: Hal qilindi.

## Ochiq qolgan masalalar (Open flags)
- [ ] Telegram bot token va chat ID (forma integratsiyasi vaqtida sozlanadi)
