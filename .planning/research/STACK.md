# Stack Research

**Domain:** Premium editorial travel website — Mediterranean magazine aesthetic
**Researched:** 2026-03-11
**Confidence:** HIGH (based on direct codebase audit + established CSS/editorial patterns)

---

## Context: What Already Exists vs What Needs Upgrading

This is a brownfield redesign. The stack is fixed. Research addresses: what techniques, within Next.js 16 + Tailwind CSS v4 + the existing conventions, produce the cinematic editorial feel of the Sailing Collective Journal reference.

**What already works and should be kept:**
- `FadeIn` component using `IntersectionObserver` with `useSyncExternalStore` for reduced-motion — solid, keep as-is
- Fluid type scale via `clamp()` in CSS custom properties — correct pattern, extend it
- `@theme inline` in `globals.css` exposing design tokens to Tailwind — correct v4 pattern
- `next/font/google` with `display: 'swap'` — correct
- `DestinationCard` with dual-gradient overlay and `group-hover:scale-[1.04]` — right direction, needs refinement

**What needs replacing or upgrading:**
- `DestinationCard` uses `aspect-[3/4]` but the grid is a uniform 3-col pattern — editorial grids break symmetry deliberately
- `ServicesSection` / `VideoTextSection` use `flex` with `lg:w-1/2` split — too symmetric, too "landing page"
- Destinations page hero uses a gradient background with decorative `blur-3xl` shapes — looks generic, not editorial
- `ReviewSection` has image and quote as separate stacked blocks — editorial blockquotes should overlay or bleed
- No `object-position` control on hero/card images — critical for face/subject composition on crop

---

## Recommended Stack

### Core Technologies (fixed — do not change)

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Next.js | 16.1.6 | App Router, SSG, Image optimization | Already in use. `next/image` with `fill` + `sizes` is the correct editorial image primitive |
| React | 19.2.3 | UI rendering | Already in use |
| TypeScript | 5 | Type safety | Already in use, strict mode enabled |
| Tailwind CSS | 4 | Utility-first styling with CSS custom properties | Already in use via `@import "tailwindcss"` + `@theme inline` |

### CSS Techniques for Editorial Feel

These are the specific techniques that create the cinematic, spacious, image-dominant feel. Each is compatible with the existing Tailwind v4 setup.

#### 1. Asymmetric CSS Grid — The Core Editorial Layout Primitive

**Why:** Uniform column grids (all cards same size) feel like e-commerce. Editorial sites break the grid — one hero card spans 2 columns, others are uniform. This visual hierarchy makes the eye move as the editor intends.

**Technique:** Named CSS grid areas with different aspect ratios per slot.

```css
/* In globals.css — add to @theme or as a utility class */
.editorial-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: clamp(0.75rem, 1.5vw, 1.25rem);
}

/* Hero card spans 8 of 12 columns */
.editorial-grid__hero {
  grid-column: span 8;
}

/* Two side cards each span 4 */
.editorial-grid__side {
  grid-column: span 4;
}
```

For the existing destination cards on homepage: use a 12-col grid where Ischia gets `col-span-8` (portrait 3:4 crop) and Capri + Procida sit in a 4-col stack beside it. Mobile collapses to single-column.

**Tailwind v4 equivalent:**
```html
<div class="grid grid-cols-12 gap-3 lg:gap-4">
  <div class="col-span-12 lg:col-span-8"><!-- Hero destination --></div>
  <div class="col-span-12 lg:col-span-4 grid grid-rows-2 gap-3 lg:gap-4">
    <div><!-- Destination 2 --></div>
    <div><!-- Destination 3 --></div>
  </div>
</div>
```

#### 2. Controlled `aspect-ratio` + `object-position`

**Why:** `next/image` with `fill` crops from center by default. Editorial photography is compositionally intentional — the castle in Ischia sits top-center, Positano's village is left-third. Incorrect crop destroys the shot.

**Technique:** Add `objectPosition` prop to `<Image>` and expose it as a `Destination` data field.

```tsx
// In DestinationCard.tsx — add objectPosition to Image
<Image
  src={destination.image}
  alt={altText}
  fill
  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
  style={{ objectPosition: destination.focalPoint ?? 'center center' }}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

Add `focalPoint?: string` to the `Destination` type in `data/destinations.ts`. Values like `'center 30%'` (castle in sky), `'70% center'` (cliff edge).

**Aspect ratios for editorial hierarchy:**
- Hero card: `aspect-[2/3]` (portrait — tall, cinematic)
- Featured pair: `aspect-[3/4]` (portrait — keeps current pattern)
- Wide editorial break: `aspect-[16/9]` or `aspect-[21/9]` (landscape cinema)
- Inline story images: `aspect-[4/3]` (classic editorial photo ratio)

#### 3. Full-Bleed Image Sections with Text Overlay

**Why:** The Sailing Collective Journal aesthetic is defined by images that run edge-to-edge with text overlaid, not images inside containers with padding. The key is eliminating the `container mx-auto px-4` wrapper for certain sections.

**Pattern — full-bleed with contained text:**
```html
<!-- Full-bleed: NO container wrapper -->
<section class="relative min-h-[70vh] overflow-hidden">
  <!-- Image fills entire section -->
  <Image fill class="object-cover object-center" />
  <!-- Gradient scrim -->
  <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
  <!-- Text IS contained, inside the full-bleed section -->
  <div class="absolute bottom-0 left-0 right-0">
    <div class="max-w-screen-xl mx-auto px-6 lg:px-16 pb-16">
      <h2 class="text-white font-serif">...</h2>
    </div>
  </div>
</section>
```

The `ReviewSection` should use this pattern: image covers the entire section, quote overlays at bottom third, no separate white block below.

#### 4. Fluid Typography with `clamp()` — Extend What Exists

**Why:** The existing type scale in `globals.css` is correct but incomplete. The `--text-display` stops at `5.5rem`. For editorial impact, hero headlines need to be viewport-relative and optically enormous on large screens.

**Extend the existing scale:**
```css
/* Add to :root in globals.css */
--text-editorial-xl: clamp(4rem, 9vw, 9rem);   /* Feature hero headline */
--text-eyebrow: clamp(0.625rem, 1.2vw, 0.75rem); /* Category labels, all-caps, tracked */
--text-caption: clamp(0.75rem, 1vw, 0.875rem);   /* Image captions */
--text-pullquote: clamp(1.5rem, 3vw, 2.5rem);    /* In-body pullquotes */
```

**Font pairing for editorial hierarchy (uses existing fonts):**
- Display headlines: `var(--font-display)` (DM Serif Display) — large, light weight, generous tracking
- Eyebrow labels: `var(--font-futura)` (Josefin Sans) — ALL CAPS, `letter-spacing: 0.25em`, `font-size: 0.7rem`
- Body copy: `var(--font-inter)` at `1rem` / `line-height: 1.75` — generous leading for reading
- Pullquotes / standfirst: `var(--font-cormorant)` (Cormorant Garamond) italic — the most elegant choice for quotes
- Data / labels: `var(--font-jost)` — clean geometric for tags, metadata

**The eyebrow label pattern** is the single most important editorial typography convention:
```html
<p class="font-[var(--font-futura)] text-[0.6875rem] font-semibold uppercase tracking-[0.28em] text-midnight/60 mb-3">
  Le Destinazioni
</p>
<h2 class="text-display font-serif font-normal leading-[1.05]">
  Ischia, l'isola verde
</h2>
```
This eyebrow + headline pairing is what separates editorial from marketing.

#### 5. Generous, Deliberate Whitespace via CSS Custom Properties

**Why:** The existing `--section-py: clamp(5rem, 10vw, 8rem)` is correct. The problem is some sections ignore it and use inline padding. Editorial spacing must be consistent and expansive.

**Pattern — section spacing token discipline:**
```css
/* In globals.css — add section-specific tokens */
--section-py-hero: clamp(6rem, 12vw, 10rem);
--section-py-story: clamp(4rem, 8vw, 7rem);
--section-gap-editorial: clamp(3rem, 6vw, 5rem);  /* Space between editorial modules */
```

All sections should use `style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}` consistently — never ad-hoc Tailwind spacing classes for vertical rhythm. This pattern already exists in `ServicesSection.tsx` and `VideoTextSection.tsx` — enforce it everywhere.

**Horizontal padding for editorial feel:** Switch from `px-4` to responsive padding that creates more breathing room at wider viewports:
```html
<!-- Replace container mx-auto px-4 with: -->
<div class="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
```
This creates the "margin of luxury" that distinguishes editorial from template sites.

#### 6. Image Overlay Gradient System

**Why:** The existing dual-gradient in `DestinationCard` (top gradient for title, bottom gradient for CTA) is correct. The issue is it's hardcoded inline — it needs to become a reusable CSS utility in `globals.css`.

**Add to globals.css:**
```css
/* Gradient overlays — standardized scrim system */
.scrim-bottom {
  background: linear-gradient(to top,
    rgba(0,0,0,0.82) 0%,
    rgba(0,0,0,0.38) 45%,
    rgba(0,0,0,0) 100%
  );
}

.scrim-top {
  background: linear-gradient(to bottom,
    rgba(0,0,0,0.55) 0%,
    rgba(0,0,0,0) 100%
  );
}

.scrim-cinematic {
  /* Full-screen hero: darker center to edges, cinematic vignette */
  background: radial-gradient(ellipse at center,
    rgba(0,0,0,0.15) 0%,
    rgba(0,0,0,0.45) 100%
  );
}

.scrim-story {
  /* For inline story images: just enough for text */
  background: linear-gradient(to top,
    rgba(0,0,0,0.65) 0%,
    rgba(0,0,0,0) 60%
  );
}
```

#### 7. Entrance Animations — Extend Existing `FadeIn`

**Why:** The existing `FadeIn` component is correct but single-purpose (fade + translateY). Editorial entrances use variation: some elements slide horizontally, some scale up, some reveal via clip-path. The `FadeIn` component is well-architected — extend it, don't replace it.

**Add `variant` prop to FadeIn:**
```tsx
type FadeInVariant = 'up' | 'left' | 'right' | 'scale' | 'reveal';

// 'up'    — current behavior: opacity + translateY (default, keep)
// 'left'  — opacity + translateX(-20px) — for left-anchored text blocks
// 'right' — opacity + translateX(20px) — for right-anchored elements
// 'scale' — opacity + scale(0.97) — for image-forward cards
// 'reveal'— clip-path from bottom: clipPath: 'inset(100% 0 0 0)' → 'inset(0% 0 0 0)'
```

CSS classes to add to `globals.css` for each variant:
```css
/* Initial states */
.fade-left-hidden  { opacity: 0; transform: translateX(-24px); }
.fade-right-hidden { opacity: 0; transform: translateX(24px); }
.fade-scale-hidden { opacity: 0; transform: scale(0.97); }

/* Visible state — applied via JS (same transition as existing) */
.fade-visible { opacity: 1; transform: translateX(0) translateY(0) scale(1); }
```

**Stagger pattern** (already partially used with `delay` prop): For the destination grid, use `delay={i * 80}` — keep this. Editorial entrance feels right at 80-100ms per item stagger.

**Do not add motion libraries.** The existing `IntersectionObserver` + CSS transitions in `FadeIn.tsx` is sufficient, well-implemented, and respects `prefers-reduced-motion` correctly.

#### 8. Next.js Image — Correct Configuration for Editorial

**Why:** `next/image` does the right things automatically (WebP conversion, lazy loading, blur placeholder) but needs specific configuration for the editorial use case.

**`next.config.ts` additions needed:**
```ts
// Already handles SVG. Add for editorial:
images: {
  formats: ['image/avif', 'image/webp'],  // AVIF first — better compression for photos
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
}
```

**`blurDataURL` pattern for editorial placeholder states:**
```tsx
// Generate in data/destinations.ts or compute at build time
// Placeholder: solid cream color base64 — avoids jarring white flash
const CREAM_BLUR = 'data:image/jpeg;base64,/9j/4AAQSkZJRgAB...' // 1x1 cream pixel

<Image
  src={destination.image}
  alt={altText}
  fill
  placeholder="blur"
  blurDataURL={CREAM_BLUR}
  className="object-cover"
/>
```

This is critical: when images load on slower connections, a cream-colored blur placeholder maintains the editorial atmosphere instead of a white flash.

**`sizes` attribute discipline** — existing `DestinationCard` uses `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`. With the new asymmetric grid, update to match actual rendered sizes:
- Hero card (col-span-8): `(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw`
- Side cards (col-span-4): `(max-width: 768px) 100vw, 33vw`

#### 9. Tailwind v4 Specifics — Using `@theme inline` for Editorial Tokens

**Why:** Tailwind v4 replaces the `tailwind.config.js` `theme.extend` object with CSS `@theme` blocks. The codebase already uses this correctly. The editorial tokens should live here.

**Add to `@theme inline` block in `globals.css`:**
```css
@theme inline {
  /* ... existing tokens ... */

  /* Editorial spacing */
  --section-py-hero: clamp(6rem, 12vw, 10rem);
  --section-py-story: clamp(4rem, 8vw, 7rem);

  /* Editorial type */
  --text-editorial-xl: clamp(4rem, 9vw, 9rem);
  --text-eyebrow: clamp(0.625rem, 1.2vw, 0.75rem);
  --text-pullquote: clamp(1.5rem, 3vw, 2.5rem);
  --text-caption: clamp(0.75rem, 1vw, 0.875rem);

  /* Font shorthand for Tailwind utility classes */
  --font-cormorant: var(--font-cormorant);
  --font-futura: var(--font-futura);
  --font-jost: var(--font-jost);
}
```

Once tokens are in `@theme inline`, Tailwind v4 generates utility classes automatically: `text-editorial-xl`, `font-cormorant`, `font-futura`. No arbitrary values needed.

**Tailwind v4 arbitrary value pattern for one-offs:**
```html
<!-- When editorial spacing doesn't match a token: -->
<div class="pt-[clamp(2rem,5vw,4rem)]">
```
Use sparingly — prefer token-based classes for consistency.

#### 10. The Editorial Horizontal Rule / Divider System

**Why:** Print magazines use rules (thin lines) as compositional elements — not just as separators. The existing `section-divider` class is a `3rem` horizontal line, but it's used only as `margin: 1rem auto 0` centered. Editorial dividers are used directionally.

**Extend the divider system:**
```css
/* In globals.css */
.rule-left {
  /* Left-anchored rule — text sections */
  width: 3rem;
  height: 1px;
  background: currentColor;
  opacity: 0.3;
  margin-bottom: 1.5rem;
}

.rule-full {
  /* Section separator — full-width hairline */
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
}

.rule-accent {
  /* Colored accent rule — below eyebrow text */
  width: 2rem;
  height: 2px;
  background: var(--color-soft-coral);
  margin-bottom: 1rem;
}
```

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| (none — no new dependencies) | — | — | Avoid dependency bloat |

**Explicit decision: no new npm packages for the editorial redesign.**

The existing stack handles everything needed:
- Animations: `FadeIn.tsx` with `IntersectionObserver` (extend with variants)
- Layout: CSS Grid natively in Tailwind v4
- Images: `next/image` with AVIF + blur placeholder
- Typography: existing 5-font system
- Parallax-like effects: CSS `transform: translateY()` on scroll via a lightweight hook, not a library

---

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| `framer-motion` | 47kb added to bundle. `FadeIn` with CSS transitions covers 90% of editorial entrances. The existing `IntersectionObserver` pattern is more performant (no JS per-frame) | Extend `FadeIn.tsx` with `variant` prop |
| `react-spring` | Same concern as framer-motion. Springs are rarely the right feel for editorial — editorial uses ease-out curves, not physics | CSS `cubic-bezier(0.25, 0, 0, 1)` transitions |
| True CSS parallax (`perspective`/`translateZ`) | Causes paint/composite issues on mobile; iOS Safari has known bugs | `background-attachment: fixed` is also broken on iOS. Use `sticky` sections and scale transforms instead |
| `gsap` / ScrollTrigger | Massive dependency for what is achievable with `IntersectionObserver` + CSS custom properties. Justified only for scroll-linked animations (progress bars, etc.) — not needed here | Native `IntersectionObserver` (already used) |
| `@tailwindcss/typography` plugin | Tailwind v4 handles typography differently. The prose classes conflict with custom editorial type scale. More importantly, editorial type is intentional and bespoke — prose normalization fights against it | Custom type classes in `globals.css` |
| Uniform 3-column card grids for destinations | Creates e-commerce feel, not editorial. Symmetric grids communicate "catalogue" | Asymmetric 12-column grid with hero card spanning 8 cols |
| `rounded-lg` on editorial image cards | Rounded corners reduce the cinematic, full-bleed magazine feel | `rounded-none` (no border radius) or maximum `rounded-sm` (2px) for image containers |
| Decorative `blur-3xl` blob backgrounds | Looks like 2021 SaaS gradients, not a Mediterranean editorial brand. Already present in destinazioni page hero | Full-bleed photography with gradient scrim overlay |
| `drop-shadow-lg` on headline text | Creates cheap visual quality. Already used in destinations hero h1 | `text-shadow: 0 1px 8px rgba(0,0,0,0.25)` via `textShadow` inline style — subtle |
| `font-bold` on serif display fonts | DM Serif Display only has `weight: 400`. Applying `font-bold` causes browser faux-bold, degrading the font | `font-normal` on all display headlines — the font's elegance comes from its regular weight |

---

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Extend `FadeIn.tsx` with variants | `framer-motion` | Only if complex shared layout animations (route transitions with element continuity) are required — not needed for this static site |
| CSS Grid 12-col asymmetric | Masonry layout (`columns` CSS) | Only if content is truly variable-height and order doesn't matter — destination cards need intentional ordering |
| `next/image` with `blurDataURL` | `loading="lazy"` native HTML | `next/image` does more: AVIF conversion, responsive srcset, blur-up. Always prefer `next/image` in Next.js |
| `clamp()` fluid type | Tailwind responsive prefixes (`sm:text-4xl lg:text-6xl`) | Responsive prefixes create hard jumps at breakpoints. `clamp()` provides smooth continuous scaling — mandatory for editorial headlines |
| `object-position` focal point on images | CSS cropping / art direction with `<picture>` | `<picture>` with `source media` is better for art-directed crops (portrait vs landscape). Add only if specific destinations need radically different mobile crops |

---

## Stack Patterns by Section

**Hero section (full-screen):**
- `min-h-screen` + `position: relative` + `next/image` with `fill` + `priority`
- Overlay: `bg-gradient-to-b from-black/30 via-black/10 to-black/50` (not flat `bg-black/40`)
- Headline: `text-editorial-xl font-serif font-normal` with `leading-[1.02]` and `tracking-[0.01em]`
- Eyebrow above headline: Josefin Sans, all-caps, `tracking-[0.28em]`, `text-[0.6875rem]`
- Scroll indicator: existing `w-px h-12 bg-white/30` is correct — keep
- No `text-center` on desktop — left-aligned hero text is more editorial (center-alignment is marketing)

**Destination cards grid:**
- 12-column CSS Grid on desktop
- First card: `col-span-12 lg:col-span-8`, `aspect-[2/3]` (tall portrait)
- Cards 2-3: `col-span-6 lg:col-span-4`, `aspect-[3/4]` in a `grid-rows-2` sub-grid
- Cards 4-6: uniform `col-span-12 sm:col-span-6 lg:col-span-4`, `aspect-[3/4]`
- No border radius on image containers
- Hover: keep existing `group-hover:scale-[1.04]` — correct scale and duration

**Full-bleed story / feature image:**
- Width: 100% of viewport (no container)
- Height: `min-h-[60vh] max-h-[80vh]` or `aspect-[21/9]`
- Text block: absolutely positioned bottom-left, inside the image, with `scrim-bottom`
- This pattern replaces the separate image + text stacks in `ServicesSection` / `VideoTextSection`

**Pullquote / testimonial:**
- Font: Cormorant Garamond italic, `text-pullquote`
- Layout: image fills full section background, quote overlays in lower third
- Do not separate image and text into adjacent stacked blocks

**Section transitions:**
- Between light sections: `rule-full` hairline (`border-t border-black/5` already used — correct)
- Between image-heavy and light sections: no divider needed — whitespace is the divider
- Never use colored background bands between sections (coral, mint, etc.) — too "marketing"

---

## Version Compatibility

| Package | Compatible With | Notes |
|---------|-----------------|-------|
| Tailwind CSS v4 | PostCSS 8+ | Uses `@tailwindcss/postcss` — already configured correctly |
| Tailwind CSS v4 | `@theme inline` block | v4 requires `@theme` — replaces `tailwind.config.js extend`. Already set up |
| `next/image` fill | Next.js 13+ | `fill` prop requires parent to have `position: relative` and defined dimensions. All existing usages are correct |
| DM Serif Display | `font-normal` only | Weight 400 only — do not use `font-bold` or `font-semibold`. Browser will synthesize bold, degrading quality |
| Josefin Sans | weights 400, 600, 700 | Loaded in `layout.tsx`. Use `font-semibold` for eyebrow labels |
| Cormorant Garamond | weights 600, 700 | Loaded in `layout.tsx`. Use `italic` style for pullquotes — it's what this font was designed for |
| `clamp()` | All modern browsers | Supported in all browsers since 2021. No polyfill needed |
| `aspect-ratio` | All modern browsers | Supported since 2021. Use freely |
| `IntersectionObserver` | All modern browsers | Already used in `FadeIn.tsx`. No polyfill needed |

---

## Color Palette Assessment for Editorial

**Current palette analysis:**
- `--color-cream: #FFFDF7` — correct base, warm neutral, stays
- `--color-soft-coral: #F88379` — too bright for editorial; reserve as accent only, never background
- `--color-sea-blue: #A9D6E5` — too pastel/playful; de-emphasize in redesign
- `--color-midnight: #191970` — correct deep anchor color, but use sparingly as text color

**Editorial palette additions needed:**
```css
/* Add to :root in globals.css */
--color-ink: #111111;         /* Near-black — headline text on white */
--color-stone: #8C8279;       /* Warm gray — body text, captions */
--color-sand: #F0EBE3;        /* Slightly warmer cream — alternating section bg */
--color-dusk: rgba(0,0,0,0.65); /* Image overlay default */
```

The editorial aesthetic is monochromatic with rare accent moments. Midnight blue and soft coral should appear no more than 3-4 times per page, in small doses. The dominant palette is ink + cream + photography.

---

## Sources

- Direct codebase audit of `/components/`, `/app/[locale]/`, `globals.css`, `layout.tsx` — HIGH confidence
- Sailing Collective Journal (https://journal.sailingcollective.com) — visual reference analysis from PROJECT.md description — MEDIUM confidence (WebFetch unavailable; analysis based on project brief and known editorial CSS patterns)
- CSS Grid named areas, `clamp()`, `aspect-ratio`, `object-position` — W3C standards — HIGH confidence
- Next.js 16 `next/image` `fill`, `blurDataURL`, `sizes` — official Next.js docs patterns — HIGH confidence
- Tailwind CSS v4 `@theme inline` block pattern — established from existing codebase usage — HIGH confidence
- `IntersectionObserver` + `useSyncExternalStore` pattern in `FadeIn.tsx` — React 18/19 correct pattern — HIGH confidence

---

*Stack research for: Baywatch Travel editorial redesign — Next.js 16 + Tailwind CSS v4*
*Researched: 2026-03-11*
