# n30web

Bu loyiha uchun `grill-me-n30` ko'nikmasi (skill) Google Antigravity muhiti uchun maxsus sozlangan. Ushbu qoidalar Antigravity, Claude Code, Codex va barcha AI yordamchilar uchun amal qiladi.

## Ko'nikmalar (Skills)

Ushbu papkada quyidagi ko'nikma mavjud:
- **grill-me-n30** (`.agents/skills/grill-me-n30/SKILL.md` va `.claude/skills/grill-me-n30/SKILL.md`): Loyiha, dizayn yoki rejalarni sinchiklab tahlil qilish, foydalanuvchini savollarga tutish (interview) va har bir javobni Antigravity vositalari orqali darhol `brainstorms/` papkasiga saqlab borish (checkpoint).

## Ishlash qoidalari

1. **Til**: Foydalanuvchi bilan sodda va tushunarli o'zbek tilida (lotin yozuvida) muloqot qiling.
2. **Grill Me faollashtirish**:
   - Foydalanuvchi "grill me", "grill-me n30", "grill-me-n30", "/grill-me", "savol-javob qilaylik", "meni savolga tut", "loyihani rejalashtiraylik" deganida yoki yangi reja/arxitektura muhokama qilinayotganda `grill-me-n30` ko'nikmasidan foydalaning.
3. **Brainstorm fayli (Antigravity Checkpoint qoidasi)**:
   - Har qanday intervyu boshlanishidan oldin darhol `brainstorms/{YYYY-MM-DD}-{mavzu}.md` faylini `write_to_file` orqali yarating.
   - Har bir savol-javobdan keyin **darhol** ushbu faylga ma'lumotlarni yozib (checkpoint) boring. Hech qachon bir nechta javobni yig'ib keyin yozmang.
4. **Bitta savol qoidasi**:
   - Bir vaqtning o'zida faqat bitta aniq savol bering va o'zingizning tavsiya etilgan variantingizni (recommended answer) keltiring.
