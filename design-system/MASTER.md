# Design System — MASTER (YPW Sites)

> Source of truth for the YPW Sites landing page. Generated via ui-ux-pro-max
> (category: professional services / conversion landing) and constrained by the
> agency's non-negotiable rules (design-system-base).

## Pattern
- **Conversion landing** — single page, repeated CTAs leading to one brief form.
- **CTA strategy:** primary CTA ("Get my free preview") anchors to `#brief`;
  secondary CTA ("See how it works") anchors to `#how-it-works`.
- **Trust-first:** transparent single price ($199), no fake anchor/strikethrough.

## Style
- **Premium tech-studio meets approachable** — dark, dramatic midnight-navy
  sections (hero, showcase, responsive, form) alternating with clean light
  content sections. High contrast makes the colorful example sites pop.
- "Show, don't tell": realistic browser-framed site previews carry the message.
- Generous whitespace, soft shadows, rounded cards, gradient accents.
- Performance over decoration (Core Web Vitals first).

## Colors
| Role | Token | Hex |
|------|-------|-----|
| Primary | brand-500 | #3B82F6 |
| Primary deep | brand-600 | #2563EB |
| Indigo glow | indigo-glow | #6366F1 |
| Cyan glow | cyan-glow | #22D3EE |
| CTA (warm) | cta-500 | #F97316 |
| Dark base | ink | #070B16 |
| Dark elevated | ink-2 / ink-3 | #0D1424 / #131C30 |
| Light bg | paper | #FFFFFF |
| Tinted bg | paper-tint | #F3F7FF |
| Body text | text-soft | #3C465C |
| Muted text | muted | #5A6478 |

Signature gradient: indigo `#6366F1` → blue `#3B82F6` → cyan `#22D3EE`
(used in `.text-gradient` and icon chips). Warm orange CTA for max contrast
on the dark field. All text pairings meet WCAG AA.

## Typography
- **Display / headings:** Sora (700–800)
- **Body:** Inter (400–600)
- Max 2 families (agency rule). Body min 16px; line-height 1.5–1.75.

## Effects (subtle, opt-out via prefers-reduced-motion)
- Reveal-on-scroll (opacity + translateY), staggered via `--reveal-delay`.
- Hero mockup cluster: ambient float + mouse parallax (transform only).
- Showcase cards: pointer tilt (perspective rotate, transform only).
- Niche marquee strip; header glass-on-scroll.
- Hover: translate/shadow/color only — no layout-shifting size changes.

## Generated assets
- `public/showcase/{barber,restaurant,fitness,clinic}.webp` — AI-generated
  editorial photos (nano_banana_2) used inside the site-preview mockups.

## Icons
- SVG only (inline, Lucide-style 24×24 stroke). No emoji icons.

## Anti-patterns to avoid
- Fake price anchors / strikethrough pricing.
- Hidden contact info or complex navigation.
- Invented statistics — speak in true, general terms.
- Inline CSS; colors not from tokens.

## Pre-delivery checklist
- [x] No emoji icons (SVG only)
- [x] cursor-pointer on clickable elements
- [x] Smooth hover transitions (150–300ms)
- [x] Text contrast ≥ 4.5:1
- [x] Visible focus states
- [x] prefers-reduced-motion respected
- [x] Responsive at 375 / 768 / 1024 / 1440px
