# Ozuqa-don — Mahsulotlar Landing Page (n30web)

Ushbu loyiha **"Ozuqa-don"** brendi uchun yaratilgan zamonaviy, tezkor va to'liq moslashuvchan (responsive) bir sahifali veb-sayt (Landing page).

## Loyiha tarkibi

- [`index.html`](./index.html) — Asosiy veb-sahifa (HTML5 + Tailwind CSS + JavaScript).
- [`images/`](./images/) — Mahsulot rasmlari (Kanareka, Amadinka, Kokil, Bedana va b.).
- [`brainstorms/`](./brainstorms/) — `grill-me-n30` ko'nikmasi orqali yozilgan tahlil va rejalashtirish qaydlari.
- [`AGENTS.md`](./AGENTS.md) — Antigravity, Codex va Claude Code uchun qoidalar to'plami.
- [`.agents/skills/grill-me-n30/`](./.agents/skills/grill-me-n30/) — Maxsus Antigravity ko'nikmasi.

## Bo'limlar

1. **Kompaniya haqida (Hero)** — 100% toza donlar shiori, 3 ta asosiy ustunlik va "Mahsulotlarni ko'rish" tugmasi.
2. **Mahsulotlar katalogi** — 10 ta sara mahsulot kartochkasi, narxlar va "Buyurtma berish" tugmasi.
3. **Mijozlar fikrlari** — 4 ta ishonchli sharhlar bloki (baholash yulduzchalari va xaridor fikrlari).
4. **Murojaat anketasi** — Ism, telefon, tanlangan mahsulot va manzil. Buyurtma tushganda avtomatik qayta ishlanadi.

## Saytni ochish

`index.html` faylini istalgan brauzerda (Chrome, Edge, Safari) ikki marta bosib ochishingiz mumkin.

Yoki lokal server orqali ochish:
```powershell
# Python orqali:
python -m http.server 3000

# Yoki VS Code Live Server / Antigravity orqali
```

## Telegram Bot orqali buyurtmalarni qabul qilish

`index.html` faylining pastki qismidagi `<script>` bo'limida:
```javascript
const TELEGRAM_CONFIG = {
  botToken: "SIZNING_BOT_TOKENINGIZ",
  chatId: "SIZNING_CHAT_IDINGIZ"
};
```
o'z Telegram botingiz ma'lumotlarini kiritsangiz, har bir buyurtma avtomatik tarzda Telegramingizga kelib tushadi!
