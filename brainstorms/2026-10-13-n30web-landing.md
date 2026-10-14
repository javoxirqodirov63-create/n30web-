# n30 Mahsulotlar Landing Page: Brainstorm va Rejalashtirish Qaydlari
Sana: 2026-10-13 · Yangilandi: 2026-10-14 · Maqsad: "Ozuqa-don" mahsulotlarini namoyish etuvchi, mijozlar fikrlari, interaktiv savatcha (Cart) va buyurtma anketasiga ega zamonaviy veb-sayt.

## Asosiy qarorlar va xulosa
- **Kompaniya / Brend**: "Ozuqa-don"
- **Soha / Yo'nalish**: Qushlar va parrandalar uchun sifatli ozuqa, don va yem mahsulotlari.
- **Format**: Bitta sahifali veb-sayt (Single-page landing page, 100% responsive).
- **Texnologik stek**: HTML5 + Tailwind CSS + Vanilla JavaScript.
- **Ranglar palitrasi**: Tabiiy yashil (Emerald green), iliq don/qum sariq ohanglari (Warm amber/wheat), toza oq fon va o'qilishi qulay to'q rangli matnlar.
- **Asosiy bo'limlar**:
  1. **Kompaniya haqida (Hero / About)**:
     - Katta shior: *"Qushlaringiz va parrandalaringiz uchun 100% tabiiy, toza saralangan ozuqalar"*
     - Tavsif: *"Ozuqa-don — qushlarning sog'lom o'sishi va baquvvat bo'lishi uchun kerakli barcha vitaminlarga boy sara don mahsulotlari."*
     - 3 ta ustunlik belgisi (100% toza, tezkor yetkazib berish, hamyonbop narxlar).
  2. **Mahsulotlar katalogi (~10 ga yaqin mahsulot turlari)**:
     - Har bir kartochkada "Savatchaga qo'shish" tugmasi.
     - Bir marta bosish bilan mahsulot savatchaga qo'shiladi va sonini oshirish mumkin.
  3. **Savatcha (Cart) tizimi**:
     - Header va mobil menyuda dinamik hisoblagichli (badge) savatcha tugmasi.
     - Ekranning o'ng tomonida suzuvchi (floating) tezkor savatcha tugmasi.
     - O'ng tomondan silliq ochiluvchi Savatcha yon paneli (Cart Drawer).
     - Mahsulotlar ro'yxati, sonini o'zgartirish (+ / -), o'chirish, oraliq va jami summani hisoblash.
  4. **Mijozlar fikrlari (Testimonials / Feedback)**:
     - 4 ta ishonchli mijoz sharhlari (⭐⭐⭐⭐⭐).
  5. **Bog'lanish / Buyurtma anketasi (Yangilandi: 3-savol qo'shimchasi)**:
     - **Mijoz kiritadigan ma'lumotlar**:
       1. Ism
       2. Telefon raqam
       3. **Qabul qilish turi**: *"Yetkazib berish"* (kuryer orqali) yoki *"O'zim olib ketaman"* (do'kondan/omborxonadan olib ketish) tanlovi.
       4. Manzil (Yetkazib berish manzili yoki qachon olib ketish bo'yicha izoh).
     - Savatchadagi barcha tovarlar va jami summa hisoblanib, qabul qilish turi bilan birgalikda Telegram bot orqali adminga yuboriladi.

## Savol-javoblar jurnali (Q&A log)
### Q1 — Kompaniya nomi va mahsulot yo'nalishi
- **Savol**: Kompaniyangizning nomi nima va saytda aynan qanday mahsulotlar (qaysi soha / yo'nalish) taqdim etiladi?
- **Javob**: "Ozuqa-don" (qushlar va parrandalar ozuqa mahsulotlari).
- **Qaydlar/Flags**: Hal qilindi.

### Q2 — Mahsulot kartochkalari va buyurtma oqimi
- **Savol**: Mahsulotlar bo'limidagi 10 ga yaqin kartochkalarda qanday ma'lumotlar aks etadi va mijoz ulardan birini tanlaganda nima sodir bo'lishi kerak?
- **Javob**: Mahsulot rasmi, nomi, og'irligi (kg), narxi va savatchaga qo'shish imkoni.
- **Qaydlar/Flags**: Hal qilindi.

### Q3 — Anketa maydonlari va qabul qilish turi (Yangilandi)
- **Savol**: Xaridor savatchadagi mahsulotlarni rasmiylashtirayotganda qanday ma'lumotlarni kiritishi kerak?
- **Javob**: Ism, telefon, manzil va qabul qilish turi ("O'zim olib ketaman" yoki "Yetkazib berish" tanlovi bilan).
- **Qaydlar/Flags**: Hal qilindi va tizimga integratsiya qilindi.

### Q4 — Mijozlar fikrlari (Feedback) tuzilishi
- **Savol**: Mijozlardan kelgan feedbacklar bo'limi qanday tuzilishda bo'ladi?
- **Javob**: 3–4 ta sharh grid ko'rinishida: Ism va shahar, yulduzchalar, xarid mahsuloti, fikr matni.
- **Qaydlar/Flags**: Hal qilindi.

### Q5 — Kompaniya haqida (Hero / About) bo'limi
- **Savol**: Saytning eng yuqori qismida — Kompaniya haqida (Hero) bo'limida qanday ma'lumotlar bo'ladi?
- **Javob**: Shior, tavsif, 3 ta afzallik va harakat tugmasi.
- **Qaydlar/Flags**: Hal qilindi.

### Q6 — Texnologik stek va dizayn
- **Savol**: Texnologiya steki va ranglar palitrasi?
- **Javob**: HTML5 + Tailwind CSS + JavaScript. Yashil + sariq/qum ranglari.
- **Qaydlar/Flags**: Hal qilindi.
