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
  3. **Savatcha (Cart) tizimi (Yangi qo'shildi)**:
     - Header va mobil menyuda dinamik hisoblagichli (badge) savatcha tugmasi.
     - Ekranning o'ng tomonida suzuvchi (floating) tezkor savatcha tugmasi.
     - O'ng tomondan silliq ochiluvchi Savatcha yon paneli (Cart Drawer).
     - Mahsulotlar ro'yxati, sonini o'zgartirish (+ / -), o'chirish, oraliq va jami summani hisoblash.
     - Savatchadagi mahsulotlarni to'g'ridan-to'g'ri anketaga o'tkazish.
     - `localStorage` orqali saqlash (sahifa yangilanganda ham saqlanib qoladi).
  4. **Mijozlar fikrlari (Testimonials / Feedback)**:
     - 4 ta ishonchli mijoz sharhlari (⭐⭐⭐⭐⭐).
  5. **Bog'lanish / Buyurtma anketasi (Lead capture form)**:
     - Savatchadagi barcha mahsulotlar va umumiy summa hisoblanib, buyurtma matniga kiritiladi.
     - Telegram Bot API orqali adminga to'liq ro'yxat va jami summa yuboriladi.

## Savol-javoblar jurnali (Q&A log)
### Q1-Q6 — Avvalgi sessiyada kelishilgan
*(Kompaniya nomi, format, 4 bo'lim, sharhlar, texnologik stek to'liq tasdiqlangan)*

### Q7 — Savatcha (Cart) bo'limini joriy etish (2026-10-14)
- **Talab**: Mijoz mahsulotlarni tanlaganda savatchaga qo'shilsin va savatcha bo'limi mavjud bo'lsin.
- **Qaror**: Interaktiv yon panel (Cart Drawer), Navbar va suzuvchi tezkor savatcha tugmasi, sonni boshqarish (+/-), jami narxni hisoblash va savatchadagi barcha tovarlar bilan anketani to'ldirish joriy qilindi.
- **Qaydlar/Flags**: Bajarildi.
