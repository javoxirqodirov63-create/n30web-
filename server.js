const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for JSON and urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files (index.html, admin.html, images, etc.)
app.use(express.static(path.join(__dirname)));

// Helper to format currency
function formatPrice(num) {
  return (num || 0).toLocaleString('ru-RU') + " so'm";
}

// POST endpoint for incoming orders
app.post('/api/order', async (req, res) => {
  try {
    const { name, phone, fulfillment, address, items, totalPrice } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, error: "Ism va telefon kiritilishi shart!" });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // Format products list
    const itemsList = (items || []).map((item, idx) => 
      `  ${idx + 1}. <b>${item.name}</b>\n     └ ${item.quantity} x ${formatPrice(item.price)} = <b>${formatPrice(item.price * item.quantity)}</b>`
    ).join('\n\n');

    const fulfillmentText = fulfillment === "Yetkazib berish" 
      ? "🚚 <b>Yetkazib berish (Kuryer)</b>" 
      : "🏬 <b>O'zim olib ketaman (Do'kondan)</b>";

    const timestamp = new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' });

    // HTML formatted message for Telegram
    const message = `🌾 <b>YANGI BUYURTMA (Ozuqa-don)</b>\n` +
                    `━━━━━━━━━━━━━━━━━━━\n` +
                    `👤 <b>Mijoz:</b> ${name}\n` +
                    `📞 <b>Telefon:</b> <code>${phone}</code>\n` +
                    `📦 <b>Qabul qilish:</b> ${fulfillmentText}\n` +
                    `📍 <b>Manzil / Izoh:</b> ${address || "Ko'rsatilmagan"}\n\n` +
                    `📋 <b>BUYURTMA TARKIBI:</b>\n${itemsList || "Mahsulot ko'rsatilmagan"}\n` +
                    `━━━━━━━━━━━━━━━━━━━\n` +
                    `💰 <b>JAMI SUMMA:</b> <b>${formatPrice(totalPrice)}</b>\n` +
                    `⏰ <b>Sana:</b> ${timestamp}`;

    let telegramSent = false;
    let telegramError = null;

    if (token && chatId) {
      try {
        const tgUrl = `https://api.telegram.org/bot${token}/sendMessage`;
        const response = await fetch(tgUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
          })
        });

        const tgResult = await response.json();
        if (tgResult.ok) {
          telegramSent = true;
          console.log(`[Telegram] Buyurtma #${Date.now()} yuborildi!`);
        } else {
          telegramError = tgResult.description;
          console.error('[Telegram API Error]:', tgResult);
        }
      } catch (err) {
        telegramError = err.message;
        console.error('[Telegram Fetch Error]:', err);
      }
    } else {
      console.warn('[Ogohlantirish]: .env faylida TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID belgilanmagan.');
    }

    return res.json({
      success: true,
      telegramSent,
      telegramError,
      message: telegramSent 
        ? "Buyurtmangiz qabul qilindi va Telegram botingizga yuborildi!" 
        : "Buyurtma qabul qilindi (.env bot ma'lumotlarini tekshiring)."
    });

  } catch (error) {
    console.error('[Server Error]:', error);
    return res.status(500).json({ success: false, error: "Serverda kutilmagan xatolik yuz berdi" });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🌾 Ozuqa-don serveri ishga tushdi:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`🔐 Admin: http://localhost:${PORT}/admin.html`);
  console.log(`===============================================`);
});
