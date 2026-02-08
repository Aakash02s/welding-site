# Shree Laxmi Welding Works — Design System

Local service business, mobile-first, Core Web Vitals–friendly.

---

## Color palette (hex)

| Role | Hex | Usage |
|------|-----|--------|
| Background | `#0c0c0c` | Page background |
| Surface | `#161616` | Cards, panels |
| Surface elevated | `#1e1e1e` | Inputs |
| Border | `#2a2a2a` | Dividers, card borders |
| Text | `#fafafa` | Primary text |
| Text secondary | `#a1a1aa` | Body, captions |
| Primary (accent) | `#ea580c` | CTAs, links, welding accent |
| Primary hover | `#c2410c` | Call / primary hover |
| Primary muted | `#fb923c` | Headings (H1, H2, H3) |
| CTA Call | `#ea580c` | Call Now button |
| CTA WhatsApp | `#22c55e` | WhatsApp button |
| CTA Quote | `#f59e0b` | Get Quote button |

CSS variables: `--welding-*` in `src/app/globals.css`.

---

## Font pairing (Google Fonts)

- **Headings:** Plus Jakarta Sans — `600`, `700` — variable: `--font-heading`
- **Body:** DM Sans — `400`, `500`, `600` — variable: `--font-body`
- **Display:** `swap` for both (fast load, no FOIT)

Loaded in `src/app/layout.js` via `next/font/google`.

---

## Base CSS (body, headings, buttons)

- **Body:** `font-family: var(--font-body)`, antialiased, `--welding-bg` background on `.welding-page`.
- **H1:** `clamp(1.75rem, 5vw, 2.75rem)`, weight 700, `--welding-primary-muted`.
- **H2:** `clamp(1.35rem, 3.5vw, 1.65rem)`, weight 600, center, `--welding-section-title`.
- **H3:** `1.125rem`, weight 600, `--welding-card-title`.
- **Buttons:** `.welding-cta-call`, `.welding-cta-whatsapp`, `.welding-cta-quote` — pill shape, 180ms ease hover (slight translateY), lightweight shadow.

---

## Section-specific CSS

| Section | Class | Notes |
|---------|--------|--------|
| Hero | `.welding-hero` | Centered, badge, chip links, hero-ctas flex |
| Services | `.welding-section` + `.welding-services-grid` | Grid 1→2→3 cols, `.welding-card` |
| Why Choose Us | `.welding-why` + `.welding-why-inner` | 1→2→4 cols, surface bg |
| Gallery | `.welding-gallery` | 2→4 cols, img hover border |
| Reviews | `.welding-reviews` + `.welding-review-card` | 1→3 cols |
| Contact / Map | `.welding-contact-map` | iframe rounded, border |

Utilities: `.welding-input`, `.welding-chip`, `.welding-sticky-ctas`, `.welding-footer`.

---

## Mobile responsiveness rules

- **Breakpoints:** 640px (sm), 768px (md), 1024px (lg).
- **Mobile-first:** Base styles for small screens; `min-width` for larger.
- **Hero:** Intro text left-align on mobile, center from 640px.
- **Grids:** Services/Reviews 1 col → 2 (640px) → 3 (768px); Why Choose Us 1 → 2 → 4.
- **Gallery:** 2 cols → 4 at 768px; img height 10rem → 11rem.
- **Sticky CTAs:** `.welding-sticky-ctas` visible only below 768px; fixed bottom center.
- **Touch:** CTAs min 44px tap target; hover uses `translateY(-1px)` only (no heavy animation).

---

## Core Web Vitals

- No heavy animations; 500ms max for slider opacity.
- Smooth hover only (180ms ease, light shadow).
- Fonts: `display: swap`.
- Background: flat + single gradient; no large blur or extra layers.
