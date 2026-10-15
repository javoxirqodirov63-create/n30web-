const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS Middleware (istalgan domen, port yoki file:// protokolidan kelgan so'rovlarga ruxsat)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Middleware for JSON and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files (index.html, admin.html, images, etc.)
app.use(express.static(path.join(__dirname)));

// Helper to format currency
function formatPrice(num) {
  return (num || 0).toLocaleString('ru-RU') + " so'm";
}

// Helper to escape HTML characters for Telegram HTML mode
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Telegramga xabar yuborish funksiyasi (HTML xato bersa oddiy matn sifatida qayta urinadi)
async function sendTelegramMessage(token, chatId, htmlText, plainText) {
  const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;

  // 1-urinish: HTML formatida yuborish
  try {
    const res = await fetch(tgUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlText,
        parse_mode: 'HTML'
      })
    });
    const result = await res.json();
    if (result.ok) {
      return { ok: true, result };
    }
    console.warn('[Telegram HTML parsing ogohlantirish]:', result.description, '-> Oddiy matn sifatida qayta urinilmoqda...');
  } catch (err) {
    console.warn('[Telegram HTML fetch xatolik]:', err.message);
  }

  // 2-urinish: Oddiy matn sifatida qayta yuborish (fallback)
  try {
    const resPlain = await fetch(tgUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: plainText || htmlText.replace(/<[^>]*>/g, '')
      })
    });
    const resultPlain = await resPlain.json();
    return { ok: resultPlain.ok, result: resultPlain, error: resultPlain.description };
  } catch (fallbackErr) {
    return { ok: false, error: fallbackErr.message };
  }
}

// POST endpoint for incoming orders
app.post('/api/order', async (req, res) => {
  try {
    const { name, phone, fulfillment, address, items, totalPrice, orderId: clientOrderId } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, error: "Ism va telefon kiritilishi shart!" });
    }

    const orderId = clientOrderId || ('ORD-' + Math.floor(100000 + Math.random() * 900000));
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeAddress = escapeHtml(address || "Ko'rsatilmagan");
    const safeFulfillment = fulfillment === "Yetkazib berish" 
      ? "🚚 Yetkazib berish (Kuryer)" 
      : "🏬 O'zim olib ketaman (Do'kondan)";

    const token = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
    const chatId = (process.env.TELEGRAM_CHAT_ID || '').trim();

    // Format products list for HTML
    const itemsListHtml = (items || []).map((item, idx) => 
      `  ${idx + 1}. <b>${escapeHtml(item.name)}</b>\n     └ ${item.quantity} x ${formatPrice(item.price)} = <b>${formatPrice(item.price * item.quantity)}</b>`
    ).join('\n\n');

    // Format products list for Plain Text fallback
    const itemsListPlain = (items || []).map((item, idx) => 
      `  ${idx + 1}. ${item.name} (${item.quantity} x ${formatPrice(item.price)} = ${formatPrice(item.price * item.quantity)})`
    ).join('\n');

    const timestamp = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });

    // HTML formatted message
    const htmlMessage = `🌾 <b>YANGI BUYURTMA #${orderId} (Ozuqa-don)</b>\n` +
                        `━━━━━━━━━━━━━━━━━━━\n` +
                        `👤 <b>Mijoz:</b> ${safeName}\n` +
                        `📞 <b>Telefon:</b> <code>${safePhone}</code>\n` +
                        `📦 <b>Qabul qilish:</b> ${safeFulfillment}\n` +
                        `📍 <b>Manzil / Izoh:</b> ${safeAddress}\n\n` +
                        `📋 <b>BUYURTMA TARKIBI:</b>\n${itemsListHtml || "Mahsulot ko'rsatilmagan"}\n` +
                        `━━━━━━━━━━━━━━━━━━━\n` +
                        `💰 <b>JAMI SUMMA:</b> <b>${formatPrice(totalPrice)}</b>\n` +
                        `⏰ <b>Sana:</b> ${timestamp}`;

    // Plain text message (fallback)
    const plainMessage = `🌾 YANGI BUYURTMA #${orderId} (Ozuqa-don)\n` +
                         `━━━━━━━━━━━━━━━━━━━\n` +
                         `👤 Mijoz: ${name}\n` +
                         `📞 Telefon: ${phone}\n` +
                         `📦 Qabul qilish: ${safeFulfillment}\n` +
                         `📍 Manzil: ${address || "Ko'rsatilmagan"}\n\n` +
                         `📋 BUYURTMA TARKIBI:\n${itemsListPlain || "Mahsulot ko'rsatilmagan"}\n` +
                         `━━━━━━━━━━━━━━━━━━━\n` +
                         `💰 JAMI SUMMA: ${formatPrice(totalPrice)}\n` +
                         `⏰ Sana: ${timestamp}`;

    let telegramSent = false;
    let telegramError = null;

    if (token && chatId) {
      const sendRes = await sendTelegramMessage(token, chatId, htmlMessage, plainMessage);
      if (sendRes.ok) {
        telegramSent = true;
        console.log(`[Telegram ✅] Yangi buyurtma yuborildi! Mijoz: ${name} (${phone}) | Summa: ${formatPrice(totalPrice)}`);
      } else {
        telegramError = sendRes.error || (sendRes.result && sendRes.result.description) || "Xatolik yuz berdi";
        console.error(`[Telegram ❌] Yuborishda xatolik:`, telegramError);
      }
    } else {
      telegramError = ".env faylida TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID belgilanmagan";
      console.warn('[Ogohlantirish]: .env faylida bot kalitlari kiritilmagan.');
    }

    return res.json({
      success: true,
      telegramSent,
      telegramError,
      message: telegramSent 
        ? "Buyurtmangiz qabul qilindi va Telegram botingizga yuborildi!" 
        : `Buyurtma saytda qabul qilindi (Telegram xatosi: ${telegramError || "Noma'lum"})`
    });

  } catch (error) {
    console.error('[Server Error]:', error);
    return res.status(500).json({ success: false, error: "Serverda kutilmagan xatolik yuz berdi" });
  }
});

// Diagnostic endpoint: Telegram bot holatini tekshirish
app.get('/api/telegram-status', async (req, res) => {
  const token = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
  const chatId = (process.env.TELEGRAM_CHAT_ID || '').trim();

  if (!token) {
    return res.json({ ok: false, error: "TELEGRAM_BOT_TOKEN mavjud emas" });
  }

  try {
    const meRes = await fetch(`https://api.telegram.org/bot${token}/getMe`);
    const meData = await meRes.json();
    return res.json({
      ok: meData.ok,
      bot: meData.result,
      configuredChatId: chatId || "Kiritilmagan",
      hasChatId: Boolean(chatId)
    });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err.message });
  }
});

// Test Telegram endpoint: botga darhol test xabari yuborish
app.post('/api/test-telegram', async (req, res) => {
  const token = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
  const chatId = (process.env.TELEGRAM_CHAT_ID || '').trim();

  if (!token || !chatId) {
    return res.status(400).json({ ok: false, error: ".env faylida token yoki chat_id yo'q" });
  }

  const testMsg = `🌾 <b>Ozuqa-don Sinov Xabari</b>\n` +
                  `Telegram bot integratsiyasi muvaffaqiyatli ishlayapti!\n` +
                  `⏰ Vaqt: ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}`;

  const sendRes = await sendTelegramMessage(token, chatId, testMsg, testMsg.replace(/<[^>]*>/g, ''));
  return res.json(sendRes);
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🌾 Ozuqa-don serveri ishga tushdi:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`🔐 Admin: http://localhost:${PORT}/admin.html`);
  console.log(`===============================================`);
});

