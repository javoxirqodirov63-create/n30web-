# Telegram Bot Integratsiyasi: Brainstorm va Rejalashtirish Qaydlari
Sana: 2026-10-15 · Maqsad: Saytdagi buyurtma anketasini Telegram botga to'liq ulash, buyurtmalar admin/guruhga real vaqtda yetib borishini ta'minlash.

## Asosiy qarorlar va xulosa
- **Bot holati**: Foydalanuvchida tayyor bot mavjud.
- **Arxitektura va Texnologiya**: **Node.js + Express** server.
  - Xavfsizlik: Bot tokeni va Chat ID `.env` faylida saqlanadi va brauzerga ko'rinmaydi.
  - Endpoint: `/api/order` orqali buyurtmalarni qabul qiladi va server tomondan Telegram Bot API (`https://api.telegram.org/bot<TOKEN>/sendMessage`) ga yuboradi.
  - Saytni uzatish: `index.html`, `admin.html` va barcha rasmlarni Express server orqali `http://localhost:3000` portida uzatadi.
- **Konfiguratsiya fayllari**:
  - `.env` — haqiqiy token va chat ID saqlanadigan fayl (git ga qo'shilmaydi).
  - `.env.example` — namuna shablon fayl.

## Savol-javoblar jurnali (Q&A log)
### Q1 — Bot mavjudligi va konfiguratsiya usuli
- **Savol**: Tayyor bot bormi yoki yangi ochamizmi?
- **Javob**: Tayyor bot bor, `.env` fayl orqali ulanishi kerak.

### Q2 — Server va integratsiya arxitekturasi
- **Qaror**: 1-variant — Node.js + Express. Tezkor, xavfsiz va kelgusida Vercel/VPS ga moslashuvchan.

## Tayyorlangan konfiguratsiya
```env
TELEGRAM_BOT_TOKEN=sizning_bot_tokeningiz
TELEGRAM_CHAT_ID=sizning_chat_idingiz
PORT=3000
```
