# Design

## Theme

Light, futuristic, clean. Off-white background with subtle indigo/cyan accent gradients used purposefully (hero, CTA, logo, brand moments) — not as default decoration.

## Color (OKLCH)

```css
--bg: oklch(0.985 0.005 240);       /* near-white with cool tint #fafbff */
--surface: oklch(1 0 0);             /* pure white for cards */
--ink: oklch(0.18 0.04 240);         /* deep ink for body, near-black */
--ink-muted: oklch(0.42 0.02 240);   /* readable muted, not washed */

--brand-1: oklch(0.55 0.21 275);     /* indigo #4f46e5 */
--brand-2: oklch(0.72 0.13 220);     /* cyan #06b6d4 */
--brand-purple: oklch(0.65 0.20 295);

--border: oklch(0.92 0.005 240);     /* subtle borders */
```

**Strategy:** Restrained. One brand accent (indigo→cyan gradient) used sparingly. Body bg stays near-white with cool chroma 0.005 tint. Not warm. Not "AI-cream".

**Gradient usage:** Hero word "fremtiden", primary CTA, logo orbit, "Book et møte" card. NOT on every heading, NOT as body bg, NOT on every card.

## Typography

- **Family:** Geist Sans (display + body), Geist Mono (code if needed). One family, weight contrast does the work.
- **Display H1:** clamp(2.5rem, 7vw, 5.5rem), weight 800, letter-spacing -0.03em, line-height 0.95, text-wrap balance
- **H2:** clamp(2rem, 4vw, 3rem), weight 800, letter-spacing -0.025em
- **H3:** 1.5rem, weight 700
- **Body:** 1rem, line-height 1.65, max-width 65ch
- **Body large:** 1.125rem, line-height 1.6
- **Eyebrow labels:** Used sparingly (max 2 per page), NOT above every section
- **No all-caps body copy**

## Spacing

Tailwind 4px base scale. Section padding: `py-24` desktop, `py-16` mobile. Card padding: `p-8` to `p-12`. Vary rhythm — not every section identical.

## Motion

- Reveals on scroll: fade-up with stagger (delay 100ms between siblings)
- Ease curves: `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quart)
- Hover: scale 1.02–1.05, shadow lift, color shift on accent elements
- **Reduced motion:** all reveals become instant, all transitions become crossfades
- **No bounce, no elastic, no parallax**

## Components

- **Buttons:** pill (rounded-full), gradient bg for primary, glass for secondary, ≥40px tall, no border + shadow combo
- **Cards:** rounded-2xl (16px), white surface, 1px border in `--border`, NO mixed border + shadow
- **Nav:** glass effect with backdrop-blur, fixed top, 64px tall
- **Inputs:** rounded-full for chat, rounded-lg for forms, 2px focus ring in brand-1
- **Chatbot:** floating circle bottom-right, 64px, gradient bg, glass-effect popup window

## Layout

- Container max-width: 1280px (`max-w-7xl`)
- Hero: centered, full viewport feel without forcing 100vh
- Sections: alternate centered text with grid layouts to vary rhythm
- Mobile-first: stack everything on small, grid on `md:`

## Effects

- **Background:** subtle grid-pattern + 3 soft blur orbs (indigo/cyan/purple), positioned for depth not noise
- **Glass:** `backdrop-blur(20px)` on nav, chat window, key cards — sparingly
- **Shadows:** brand-tinted (`shadow-indigo-500/30`), used on interactive elements, not decoration

## Anti-patterns to avoid

- Side-stripe borders (border-left as accent)
- Gradient text on every heading (only on intentional brand moments)
- Glassmorphism as default (use sparingly)
- Hero-metric template (big number, label, repeated)
- Identical card grids (icon + heading + text, repeated)
- Tiny uppercase eyebrow above every section
- Numbered section markers (01 / 02 / 03) as default scaffolding
- Border 1px + shadow ≥16px on same element (ghost-card pattern)
- Card border-radius ≥24px (cards top out at 16px)
- Text overflowing containers at any breakpoint
