# Portfolio Redesign – 4 Design Concepts
> Content stays 100% same. Only visuals change.

Your current design is: **Dark Luxury Editorial** – deep purple #0d0b14 bg, gold #c9a96e + violet #a78bfa accents, Cormorant Garamond + DM Mono, grain texture, soft borders. It's elegant but common in 2023-24 portfolios.

Here are 4 fresh directions. All keep your sections: Navbar, Hero, About, Education, Projects (5 cards), Skills (4 groups), Contact, Footer.

---

### CONCEPT A — "Paper & Ink"  |  Minimal Light Editorial

**Philosophy:** Stand out by going LIGHT. 90% of dev portfolios are dark. A light, print-magazine layout feels premium, confident, and readable in daylight. Inspired by Linear, Stripe Press, and architectural studios.

**Palette:**
- Background: #FAF8F5 (warm paper)
- Text Primary: #111111
- Text Muted: #6B6560 / #9A9590
- Border: #E8E0D5
- Accent: #FF4D2E (vermilion) for CTAs – or keep your gold #C9A96E but bolder
- Project accents stay per-project

**Typography:**
- Headings: Instrument Serif / Newsreader – 400, 70px huge
- Body: Inter / Geist Sans – 15px
- Mono: Geist Mono / JetBrains Mono – labels

**Layout Changes:**
- Hero: Left-aligned huge serif name "Nisadu Nimsitha" 2 lines, subtitle tiny caps below with line. Right side: square photo with hard shadow, not circle.
- Navbar: Thin 1px bottom border, uppercase 11px tracking, mix-blend.
- About: 2-column with big stats, no card background.
- Projects: NOT grid – vertical list with 01 / Title / Tags / Year / →  – like your mockup image. On hover, row inverts black.
- Skills: Pill clusters, no icon boxes, just text + tiny icons.
- Effects: No blur/glow. Just crisp borders, hover invert, sticky sections.

**Pros:** Very memorable, high readability, looks senior/designer.
**Cons:** Less "cozy" at night.

---

### CONCEPT B — "Noir Lab" | Brutalist Developer

**Philosophy:** You are a Computer Science student who loves systems. Show it. Brutalist, terminal-inspired, perfect for engineers. Inspired by Vercel engineering blogs, Linear.dev, and hacker terminals.

**Palette:**
- Background: #0A0A0A (true black)
- Surface: #141414 with 1px #222 border
- Text: #FFFFFF / #888
- Accent: #FFDB58 (mustard yellow) – high contrast, dev energy
- Status colors remain but desaturated.

**Typography:**
- Headings: Syne Bold 700 / Space Grotesk – ALL CAPS, tight leading
- Body: Space Mono / DM Mono – 13-14px
- Huge hero: "DEVELOPER. ENGINEER. PROBLEM SOLVER." like your image

**Layout Changes:**
- Navbar: Left vertical sidebar on desktop? Or top bar with /// comments like `// BUILDING DIGITAL EXPERIENCES`
- Hero: Terminal window with `> whoami` + typing animation.
- Stats: 4 boxes in row: 06+ Years / 32+ Projects / etc – like dashboards.
- Projects: 2-col with image left (wireframe preview), description right with tech stack yellow.
- Skills: `_LANGUAGES / _FRAMEWORKS` with yellow tags – terminal `ls` look.
- Effects: 1px grids, ASCII lines, no rounded corners ever. Hover = invert.

**Pros:** Strong personality, perfect for CS, recruiters remember it.
**Cons:** Can feel aggressive if overdone. Not for everyone.

---

### CONCEPT C — "Aurora Glass" | Modern SaaS Dark (Most Trendy)

**Philosophy:** 2025-2026 trend: glassmorphism + aurora gradients + bento grids. Feels like a product, not just a portfolio. Perfect for full-stack + AI apps.

**Palette:**
- Background: #080A12 – deep navy black
- Glass: rgba(255,255,255,0.06) blur 24px, border rgba(255,255,255,0.1)
- Gradients: Blue #2A4FFF, Purple #7C3AED, Cyan #06B6D4 radial orbs
- Text: #E2E8F0 / #94A3B8
- Accent: Gradient text blue→purple

**Typography:**
- Headings: Satoshi / General Sans / Inter – 48-72px, semi-bold, gradient
- Body: Inter 15px

**Layout Changes:**
- Left vertical nav rail with icons (like your image) + main bento grid.
- Hero: Large glass card "Crafting digital experiences that inspire & perform" with glowing purple orbs floating behind.
- Projects: Bento – Featured project large left, 2 small right. Each card has inner screenshot mockup.
- Skills: Icon tiles with colored icons (Figma pink, React cyan etc) inside glass – like dashboard.
- About / Experience / What I Do as 3 small cards.
- Effects: Backdrop-filter blur, rounded 2xl (24px), glow on hover, subtle parallax on orbs.

**Pros:** Feels most modern, agency-level, great for AI/Flutter projects.
**Cons:** Heavier visually, needs good performance optimization.

---

### CONCEPT D — "Monochrome Studio" | Luxury Dark V2 (Evolution)

**Philosophy:** Keep what works (your dark luxury) but level it up to 2026 standards. Remove purple, go warm monochrome charcoal + champagne. Horizontal scroll projects like a lookbook.

**Palette:**
- Background: #0F0F10 (warm charcoal) not purple
- Surface: #1A1A1B with 1px #2A2A2B
- Text: #F5F3EF (warm white) + #9A958E
- Accent: #C7B299 (champagne gold) – much more refined than old gold, line color #C7B29930
- Keep your project colors but mute them 20%

**Typography:**
- Headings: Fraunces / Instrument Serif – 56-84px, light weight, italic touches
- Body: General Sans / Satoshi 16px, 1.8 line height
- Labels: 10px uppercase tracking 0.2em

**Layout Changes:**
- Navbar: logo centered top "MONOCHROME STUDIO", thin line below, like fashion.
- Hero: Split – left big serif title (2 lines), right edge-to-edge B&W portrait with grain, gold dot.
- Projects: Horizontal scroll row (01 Ethereal Elegance etc) – your mockup image exactly. Each card is large with image + title overlay. Scroll indicator 01/06.
- About: Large whitespace, stats with line above.
- Skills: No cards – just lists under category with 1px divider.
- Effects: Grain texture heavier, image hover zoom, underline animations.

**Pros:** Direct upgrade from current, no risk, most elegant, timeless.
**Cons:** Still dark, not as distinctive as A or B.

---

## My Recommendation

For you, Nisadu:
- If you want to **stand out most** among other student portfolios: **A – Paper & Ink**. Light portfolios are rare and signal confidence.
- If you want to **lean into CS/dev identity**: **B – Noir Lab**.
- If you want **trendy, startup-ready**: **C – Aurora Glass**.
- If you want **safe but elevated**: **D – Monochrome Studio**.

You can also **mix**: e.g., Concept A layout + Concept D palette = Light monochrome luxury.

All 4 are built as live previews in `/design-previews/` folder – open `index.html` in that folder.

Next step: Tell me which number (A/B/C/D) you like, or if you want a hybrid, and I will apply it to your actual React code `my_portfolio/frontend/src/` without changing any content.
