---
name: grill-me-n30
description: >-
  Antigravity muhitiga maxsus moslashtirilgan Grill Me ko'nikmasi. Foydalanuvchini loyiha, arxitektura yoki reja bo'yicha qat'iy savol-javobga tutadi (interview) va har bir javobni darhol diskdagi brainstorms/{YYYY-MM-DD}-{topic-slug}.md fayliga saqlab boradi. Use when the user says "grill me", "grill-me n30", "grill-me-n30", "grill-me", "/grill-me", "meni savolga tut", "savol-javob qilaylik", "boshlaylik", "loyihani rejalashtiraylik".
---

# Grill Me (n30 — Antigravity Edition)

Ushbu ko'nikma Google Antigravity muhiti uchun maxsus optimallashtirilgan.
Maqsad: Foydalanuvchining miyasidagi barcha g'oyalar, talablar va loyiha detallarini sinchiklab o'rganib chiqish hamda kontekst to'lib qolmasdan oldin ularni diskdagi mustahkam, tartibli markdown fayliga muhrlab borish.

---

## 1. Antigravity Vositalari va Muhit Qoidalari

1. **Fayllarni boshqarish vositalari**:
   - Yangi fayl yaratish yoki to'liq yangilash uchun Antigravity'ning `write_to_file` vositasidan foydalaning.
   - Mavjud qaydlarga yangi bo'limlar qo'shish yoki tahrirlash uchun `replace_file_content` yoki `write_to_file` vositasidan foydalaning.
   - Loyihadagi mavjud kod va hujjatlarni o'rganish uchun foydalanuvchidan so'rab o'tirmasdan, darhol `view_file` yoki `run_command` vositalari orqali tekshiring.
2. **Sana va Vaqt (Windows / Antigravity)**:
   - Antigravity tizimining kiruvchi ma'lumotlaridagi (metadata) joriy sanadan foydalaning yoki Windows PowerShell orqali `Get-Date -Format "yyyy-MM-dd"` sanasini oling.
3. **Muloqot tili**:
   - Intervyu va muloqot to'liq o'zbek tilida (lotin alifbosida), sodda, tushunarli va ravon olib boriladi.

---

## 2. Boshlang'ich Sozlash (Birinchi savoldan OLDIN bajaring)

1. **Qaydlar faylini yarating**:
   - Manzil: `brainstorms/{YYYY-MM-DD}-{topic-slug}.md` (agar `brainstorms/` papkasi bo'lmasa, `write_to_file` uni avtomatik yaratadi).
   - Har bir mavzu bitta faylga yoziladi.
2. **Faylni darhol quyidagi boshlang'ich tuzilma bilan oching**:
   - Sarlavha, sana, sessiya maqsadi va bo'sh "Ochiq masalalar (Open flags)" bo'limi.
3. **Foydalanuvchiga bir qatorda fayl qayerga saqlanayotganini bildiring**, so'ngra 1-savolni bering.

---

## 3. Checkpoint Qoidasi (Majburiy)

Har bir foydalanuvchi javobidan so'ng, **keyingi savolni berishdan OLDIN**:

- Diskdagi faylga `write_to_file` yoki `replace_file_content` orqali javobni saqlang:
  - Savol mavzusi;
  - Foydalanuvchi javobidagi asosiy faktlar va qarorlar (muhim joylari o'z so'zlari bilan);
  - Aniqlanmagan yoki keyinga qoldirilgan jihatlar (flags).
- Agar keyingi javob avvalgi qarorlarni o'zgartirsa, fayldagi oldingi yozuvlarni ham darhol yangilang.
- **Faqat shundan keyingina** keyingi savolga o'ting.
- *Hech qachon bir nechta javobni to'plab keyin bittada yozmang.*

---

## 4. Intervyu Olib Borish Metodikasi

- **Bitta xabarda faqat bitta savol**: Foydalanuvchini bir vaqtning o'zida bir nechta savol bilan chalg'itmang.
- **Tavsiya etilgan variant (Recommended answer)**: Har bir savol ostida o'z tavsiyangizni bering, shunda foydalanuvchi shunchaki "ha, shu to'g'ri" deyishi yoki o'zgartirishi oson bo'ladi.
- **Bog'liqliklarni ketma-ket hal qilish**: Dastlab asosiy poydevor (upstream) qarorlarni, keyin ularga bog'liq detallarni hal qiling.
- **Foydalanuvchi javob bera olmasa**: To'xtab qolmang! Uni "Ochiq masala (Flag)" sifatida qayd etib, keyingi savolga o'ting.
- **Tugallash**: Barcha shoxlar ko'rib chiqilgach, "Biz qamrab olmagan yana biror jihat qoldimi?" deb so'rang.

---

## 5. Qaydlar Fayli Tuzilmasi (Capture File Template)

```markdown
# {Mavzu}: Brainstorm va Rejalashtirish Qaydlari
Sana: {YYYY-MM-DD} · Maqsad: {bir qatorli maqsad}

## Asosiy qarorlar va xulosa
(intervyu davomida yangilanib boruvchi umumiy tushuncha)

## Savol-javoblar jurnali (Q&A log)
### Q1 — {mavzu}
- Savol: {berilgan savol}
- Javob: {aniq qarorlar, faktlar va tanlovlar}
- Qaydlar/Flags: {ochiq masala -> kim hal qiladi}

### Q2 — ...

## Ochiq qolgan masalalar (Open flags)
- [ ] {masala} -> {mas'ul shaxs / keyin hal qilinadi}
```

---

## 6. Sessiya Yakunida

1. Capture faylini to'liq tekshirib, qarama-qarshiliklar yo'qligiga ishonch hosil qiling.
2. Foydalanuvchiga qisqa xulosa bering:
   - Nimalar kelishildi;
   - Qanday ochiq masalalar qoldi;
   - Keyingi tavsiya etilgan qadam (masalan, arxitekturani qurish yoki `PLAN.md` yozish).
