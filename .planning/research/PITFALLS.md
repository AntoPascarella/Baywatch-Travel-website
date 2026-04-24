# Pitfalls Research

**Domain:** Premium editorial travel website redesign (Next.js 16 + Tailwind CSS v4)
**Researched:** 2026-03-11
**Confidence:** HIGH — drawn from direct codebase audit + deep knowledge of editorial web design patterns

---

## Critical Pitfalls

### Pitfall 1: The Symmetric Grid Trap — Making Every Section a Centered 50/50 Split

**What goes wrong:**
Every content section becomes a centered, left-right split with equal columns — text on one side, image on the other, then flip, then repeat. The page reads like a product brochure template, not an editorial magazine. The current codebase already has this: `VideoTextSection` (flex, `lg:w-1/2` each side), `ServicesSection` (identical pattern). Stack them and the page feels like a corporate "features" page.

**Why it happens:**
Tailwind's `flex gap-12 items-center` pattern is fast to write and technically correct. It feels "balanced." Developers default to it because it's safe and always works. The problem is that editorial design is intentionally asymmetric — magazines use unexpected column widths (one-third / two-thirds, bleeds past the grid, text anchored to one edge while image dominates 70% of the viewport).

**How to avoid:**
- Use CSS Grid with named areas rather than flex splits. A section can be `grid-cols-[1fr_2fr]` or `grid-cols-[5fr_3fr]` — off-ratio columns feel art-directed, not templated.
- Break the container. Some text blocks should not be `container mx-auto` — they should be positioned at `max-w-[28rem]` flush to one edge while an image fills the rest of the viewport width.
- Introduce full-bleed moments: sections that escape the container entirely, where the image or colored band bleeds edge-to-edge.
- Vary vertical rhythm: not every section needs `var(--section-py)` top and bottom. Some sections should stack tighter; some need double the breathing room.

**Warning signs:**
Open the page on desktop. Every section has a centered block with two equal-width columns. Scrolling produces a metronomic left-right-left-right visual cadence. There is never a moment where an element bleeds to the viewport edge.

**Phase to address:** Design system / layout phase (before any content sections are built or rebuilt).

---

### Pitfall 2: The Color Palette That Prevents Cinematic Images

**What goes wrong:**
Pastel accent colors (peach `#FAD1AF`, soft coral `#F88379`, sea blue `#A9D6E5`, cream-dark `#F5EFC0`) are used as section backgrounds, card backgrounds, and decorative blobs. When a cinematic Mediterranean photograph sits adjacent to a `bg-peach` section, the image looks filtered or clipped. The color palette competes with the photographs instead of serving them.

This is visible in `destinazioni/page.tsx`: the page hero uses `bg-gradient-to-br from-midnight via-sea-blue-dark to-sea-blue` with decorative `bg-peach/10 rounded-full blur-3xl` shapes. This is a marketing-app pattern, not an editorial one. Editorial sites use near-neutral backgrounds — off-white, warm stone, or deep near-black — so photographs do all the color work.

**Why it happens:**
The palette was built with "Mediterranean" semantics in mind and each color is individually beautiful. The mistake is using all of them simultaneously, and using them as structural backgrounds rather than as restrained typographic or border accents.

**How to avoid:**
- Reserve the structural palette to three values: near-white (cream `#FFFDF7`), warm near-black (approximately `#111` or `#0f0f0f`), and one accent (choose one — the coral red is the strongest editorial choice for this brand).
- Pastel tones belong only in small doses: a thin rule, a label background at low opacity, a hover state. Never as full-section backgrounds visible behind photographs.
- Delete or strongly deprecate the decorative blob / `rounded-full blur-3xl` pattern. It reads as a 2021 SaaS design motif and has no place in an editorial travel brand.
- In Tailwind v4: replace multi-color `@theme` tokens with a leaner palette. Keep the CSS custom properties for the new constrained set.

**Warning signs:**
Screenshot the site and squint. If sections have visible colored backgrounds competing with image sections for visual dominance, the palette is fighting the photographs. If you can identify three or more distinct background colors within one scroll of the homepage, there are too many.

**Phase to address:** Design tokens phase — establish new palette before any layout or component work begins.

---

### Pitfall 3: Typography That Announces Itself as Tailwind

**What goes wrong:**
Using Tailwind's default type scale utilities (`text-xl`, `text-lg`, `text-sm`) directly in editorial components creates inconsistent sizing and the visual signature of a Tailwind project, not a designed brand. Worse: mixing utility classes (`text-h2`, `text-lg`, `text-xl`) on adjacent elements causes unintentional size jumps that look accidental.

The current codebase shows both `text-h2 font-serif` (custom scale) and `text-lg text-black/65` (Tailwind default) on adjacent elements within the same section (`VideoTextSection`). The heading uses the editorial scale; the body reverts to Tailwind defaults.

A second problem: line height. Editorial magazines use looser leading for headlines (`line-height: 1.0` to `1.1`) and tighter leading for display text than Tailwind's defaults. The current `leading-tight` (`1.25`) on headlines is still too loose for the cinematic display style where characters almost touch.

**How to avoid:**
- Commit to the custom type scale in `globals.css` (`--text-display`, `--text-h1`, etc.) for every heading. Remove `text-xl` and `text-lg` from heading contexts entirely.
- Define body text sizes via the custom scale too — add `--text-body-large: 1.125rem` if needed rather than reaching for `text-lg`.
- For editorial hero headlines: set `line-height` explicitly to `0.95`–`1.05`, not via Tailwind's `leading-` utilities. In Tailwind v4 this is `leading-[0.98]` or a CSS custom property.
- Add `letter-spacing` as a design decision, not an afterthought. Hero text: `-0.01em` to `-0.02em` (slightly tight). Labels / nav: `0.12em`–`0.18em` (wide). Body: `0` or `0.01em`. Never mix tracking widths on adjacent same-level elements.
- Use `font-cormorant` for editorial display moments and `font-futuramed` for structural labels. The current code already has Cormorant Garamond and Futura in the stack — but they're applied inconsistently. Define which font belongs to which typographic role in a single decision, document it, and enforce it.

**Warning signs:**
Open the page and look only at the text — cover all images. If the font sizes feel arbitrary (not part of a clear hierarchy), or if the body copy and a subheading are visually too close in size, the scale is broken. If `text-lg` appears in a component file, it is a warning sign.

**Phase to address:** Typography system phase (same as design tokens — establish before building components).

---

### Pitfall 4: Image Handling That Makes Photography Look Like Stock

**What goes wrong:**
Three specific patterns make editorial photography feel like stock imagery:

1. **Rounded corners on full-bleed images.** `rounded-lg` on destination images adds a UI frame that signals "this is a card in a web app," not "this is a window into a place." Editorial sites either use sharp-cornered images or extreme crops — never the web app default border radius.

2. **Fixed aspect ratios that crop badly on mobile.** `aspect-[3/4]` is a strong portrait crop on desktop but becomes a thumbnail at mobile widths. At 375px wide a `3/4` ratio card is 281px tall — too small for cinematic impact. Editorial mobile design uses taller portrait ratios (`aspect-[2/3]`) or allows the image to fill the full viewport height.

3. **`object-cover` without controlling the focal point.** Ischia, Capri, and Positano photographs often have the subject (castle, cliff, bay) in the lower two-thirds of the frame. `object-cover` defaults to center, cropping away the sky and the feet of the scene. Cinematic travel photography needs `object-position: center 30%` (or similar per-image tuning) to preserve the sky and horizon.

**How to avoid:**
- Remove `rounded-lg` from all destination image containers and hero images. Use `rounded-none` or omit the class. Reserve border-radius for small UI elements (buttons, form inputs, badges).
- For destination cards on mobile: switch to `aspect-[2/3]` or allow the card to fill the screen width at viewport-relative height (`h-[80svh]`).
- In `DestinationCard.tsx` and any new image components: add `data-focal-point` as a prop and map to `object-position` via inline style. Default to `center 35%` rather than `center center`.
- Never use Next.js `<Image>` with `fill` inside a container that has both `rounded-lg` and `overflow-hidden` at the same level — this is the exact pattern that creates the "stock photo card" look.

**Warning signs:**
View destination cards on a phone at 375px width. If they look like small thumbnails with rounded corners, the image treatment is wrong. View the hero image — if the sky is cropped off a landscape photo, `object-position` needs tuning.

**Phase to address:** Component / image system phase (DestinationCard rebuild, hero redesign).

---

### Pitfall 5: The Uniform-Density Page — No Cinematic Breathing Room

**What goes wrong:**
The current `--section-py: clamp(5rem, 10vw, 8rem)` token is applied uniformly to every section. The page has the same density everywhere: same vertical rhythm, same container width, same padding. This reads as a brochure with consistent formatting, not as an editorial spread where some moments are wide and sparse, others are narrow and text-heavy.

Editorial magazines work with deliberate density variation: a full-bleed image takes the entire viewport with no padding; the next section is a narrow column of text with generous margin; the next is a dense grid of cards. Readers feel the pacing change.

**Why it happens:**
Using a single spacing token is architecturally clean and fast. The mistake is applying the same token everywhere.

**How to avoid:**
- Establish at least three section density modes in `globals.css`:
  - `--section-py-tight: clamp(3rem, 5vw, 4rem)` — for text-heavy sections that follow open ones
  - `--section-py` (existing) — standard
  - Full-bleed / zero-padding — for image sections that go edge-to-edge
- On the homepage, ensure at least one section per "screen" uses the full viewport without any `container mx-auto`. The hero already does this — but the rest of the page collapses into the same container-padded rhythm.
- Add a `max-w-[52rem]` constraint to some text sections, creating a deliberate narrow column that emphasizes the spaciousness around it.

**Warning signs:**
Take a full-page screenshot and measure the left/right margins of every section. If they are all the same width, density variation is missing.

**Phase to address:** Layout architecture phase (can be a CSS token + layout wrapper decision, then enforced during component builds).

---

### Pitfall 6: Mobile Breakpoints That Collapse the Cinematic Feeling

**What goes wrong:**
The header collapses but has no defined mobile navigation pattern (the current code shows a desktop-only nav with phone and button — but mobile behavior is not visible in `Header.tsx`, suggesting it is either hidden or not yet built). On mobile, three things kill the editorial feeling:

1. **The hero loses full-screen dominance.** If the hero is `min-h-screen` but the mobile browser chrome takes 100px and the header takes 64px, the visible hero at page load is `calc(100svh - 64px)`. If the text is `text-display` clamp with a min of `3rem`, it stacks onto three lines at 375px and pushes the CTA below the fold. The hero no longer feels cinematic — it feels broken.

2. **Destination cards become a flat vertical list.** `grid md:grid-cols-2 lg:grid-cols-3` means mobile sees one column of portrait cards stacked vertically. This is fine conceptually, but if each card is `aspect-[3/4]` at full mobile width (375px), each card is ~500px tall. Six cards = 3000px of identical-sized portrait images scrolling past, with no layout variation. This is exhausting, not editorial.

3. **Typography does not re-anchor.** On desktop, centered hero text can feel majestic. On mobile, centered text in a narrow column feels cramped. Editorial mobile designs often left-align headlines and shift copy to the left edge for intimacy and directness.

**How to avoid:**
- Build a proper mobile navigation (hamburger or slide-over) as part of the header redesign. Without it, the site is broken on mobile regardless of how good the desktop version looks.
- Use `100svh` (small viewport height) not `100vh` for hero sections to account for mobile browser chrome.
- For the hero: set a mobile-specific min-height of `85svh` so the fold is consistently visible on phone. Reduce the headline clamp minimum: `clamp(2.25rem, 8vw, 5.5rem)`.
- On mobile, change destination card grid to horizontal scroll (one-at-a-time peek) rather than vertical stack: `flex overflow-x-auto snap-x snap-mandatory`. Or use alternating full-width cards with different aspect ratios to break the repetition.
- Left-align body copy and section headings on mobile (`text-left sm:text-center`), preserving centering only for display headlines.

**Warning signs:**
Open the site on an iPhone. Does the hero CTA require a scroll to see? Is the mobile nav missing or broken? Are destination cards a long vertical scroll of identical-sized images? Any yes is a critical failure.

**Phase to address:** Responsive / mobile phase — but mobile nav must be unblocked in the header phase (Phase 1 or 2 of the roadmap).

---

### Pitfall 7: Animations That Signal "Developer Built This"

**What goes wrong:**
The current `FadeIn` component wraps nearly every element on every section. When everything fades in, nothing feels curated. Staggered `FadeIn` with `delay={i * 80}` on six destination cards means the page visually "loads" across a two-second window — which feels sluggish, not refined.

A second problem: `card:hover { transform: translateY(-2px) }` on destination cards is a generic web app hover interaction. Editorial sites rarely float cards upward on hover — they reveal information, shift overlays, or allow the image to breathe through a scale. The `-translate-y` hover pattern signals "this is a web app card component."

**Why it happens:**
`FadeIn` is the default animation tool in this codebase. Once it exists, it gets applied everywhere. The translateY card hover is a standard Tailwind card pattern.

**How to avoid:**
- Reserve `FadeIn` for section entry — one fade per section, not one per element. Individual child elements within a section should appear as a group or use a CSS `@keyframes` stagger that is much faster (max 0.4s total).
- Replace `translateY` card hover with an image-reveal approach: on hover, the bottom gradient opacity decreases slightly and the image scale increases (`scale-[1.03]`), creating a cinematic "lean in" rather than a floating card. The current `DestinationCard` already does the scale — but the parent `group` also translateY's, doubling the motion.
- For the hero scroll indicator (the vertical `w-px h-12 bg-white/30`): replace with a more editorial treatment — a thin animated line that grows downward, or small uppercase text reading "scroll" rotated 90 degrees. The bare line reads as "I ran out of time on this."

**Warning signs:**
Watch the page load. If the visible area takes more than 0.5 seconds to fully render (all elements visible), the animation is too slow. Hover a destination card: if it moves upward, the hover pattern needs replacing.

**Phase to address:** Animation / interaction polish phase (after layout and content are correct).

---

### Pitfall 8: The Destinations Page Hero That Signals "Template"

**What goes wrong:**
`destinazioni/page.tsx` uses `bg-gradient-to-br from-midnight via-sea-blue-dark to-sea-blue` with two `rounded-full blur-3xl` decorative blobs as the page hero. This is indistinguishable from a thousand Next.js + Tailwind starter templates. It actively signals that the site was built from a template, because it is — this pattern comes directly from Tailwind UI and similar component libraries.

An editorial travel site's inner page hero should be a real photograph — either a full-bleed atmospheric image from one of the South Italy locations, or a typographic moment on a plain dark or cream background. Never a gradient with blobs.

**Why it happens:**
When there is no hero image for a particular page, the pattern of "colored gradient + decorative elements" fills the space. It is fast to build and technically responsive.

**How to avoid:**
- For the destinations page: use the best available South Italy photograph as a full-bleed hero (even at 50vh), with a bold typographic title overlaid on a dark gradient.
- If a real photograph is unavailable: use a solid dark background (`#0f0f0f` or `#111`) with oversized display typography. Negative space is more editorial than a gradient.
- In Tailwind v4: add a `--color-deep-black: #111111` token and use it as the fallback for any page hero that lacks photography.
- Establish a rule: no decorative blob gradients (`rounded-full blur-3xl`) anywhere on the site. They are incompatible with the editorial brand.

**Warning signs:**
If any section or page hero has more than one background color that is not a photograph, the gradient-blob pattern has returned.

**Phase to address:** Inner page design phase (destinations page, chi-siamo page). Must reference the rule established in the design tokens phase.

---

### Pitfall 9: Contact / CTA Sections That Feel Transactional

**What goes wrong:**
Editorial travel brands convert through desire, not through forms. If the contact section reads as "fill out this form to request a quote," the brand feeling established by the rest of the site collapses. The current `PlanTripSection` exists but its content and visual treatment are unknown from the codebase alone — this pitfall is about the pattern, not the current implementation.

The transactional failure modes: a form with too many fields, button copy that says "SUBMIT" or "INVIA RICHIESTA" in all caps, a section background that is `bg-white` with nothing else distinguishing it from the rest of the page, a layout that puts the form below a block of bulleted service features.

**How to avoid:**
- The contact section should feel like an invitation, not a checkout. Use a full-bleed or wide atmospheric image behind the section. A single sentence of evocative copy precedes the form.
- Reduce form fields to the minimum: name, email, destination interest, message. No dropdowns, no date pickers, no budget range.
- Button copy in Italian: "Scrivici" or "Inizia a pianificare" — not "INVIA" or "CONTATTACI." In English: "Write to us" or "Let's plan your trip."
- The section layout should not be `container mx-auto` at full width. Consider centering the form at `max-w-[32rem]` on a full-bleed image, making it feel like a postcard rather than a web form.

**Warning signs:**
Count the form fields. More than 5 is too many. Check the submit button copy. If it says "Submit" or "Invia" without context, the tone is wrong.

**Phase to address:** Contact / conversion section phase.

---

### Pitfall 10: Font Loading Causing Layout Shift and Flash of Wrong Style

**What goes wrong:**
The codebase uses at least four typefaces: DM Serif Display, Inter, Jost, Cormorant Garamond, and references a `--font-futuramed` / `--font-futura` CSS variable that does not appear to be loaded via `next/font`. If `var(--font-futura)` falls back to `var(--font-inter)`, the visual difference between these two faces — especially at nav-bar size — causes a visible flash of layout shift when the custom font loads.

For an editorial brand, this is especially damaging: the typography is the first impression. A flash of Inter in place of Futura at the top of the page signals that something is wrong with the site.

**Why it happens:**
Custom font variables like `--font-futuramed` are set somewhere outside of `next/font` (likely manual `@font-face` declarations), while Inter is loaded via `next/font/google`. The race condition between them is not prevented by `font-display: swap` — swap will show Inter first, then replace it.

**How to avoid:**
- Load all display fonts via `next/font` (for Google Fonts) or `next/font/local` (for self-hosted, like Futura). Do not use manual `@font-face` for display fonts that appear above the fold.
- For Futura (not available on Google Fonts): use `next/font/local` pointing to a `.woff2` file in `/public/fonts/`. This gives Next.js full control over preloading and eliminates the flash.
- Set `display: 'block'` (not `'swap'`) for display fonts that appear in the hero above the fold. `block` delays rendering briefly rather than showing a fallback — acceptable for a short delay, better than a visible replacement.
- In Tailwind v4: the `@theme` block cannot reference `var()` for font families in all cases — test that `--font-display: var(--font-display)` round-trips correctly, or declare the font directly as a string value.

**Warning signs:**
Load the site on a throttled connection (Chrome DevTools: Fast 3G). Watch the header and hero headline. If the font changes visibly after the page renders, there is a flash of unstyled text.

**Phase to address:** Typography / design system phase — font loading must be resolved before layout work, because font metrics affect all spacing.

---

## Technical Debt Patterns

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| `className` mixing Tailwind utilities with custom CSS class names (`.bay-btn`, `.btn`, `text-h2`) | Fast authoring, both systems available | No single source of truth for style; refactoring requires searching both files | Never — pick one system per component and be consistent |
| Inline `style={{}}` objects on layout elements | Bypasses Tailwind constraint system for one-off values | Invisible to Tailwind purge analysis; hard to override in responsive variants; inconsistent with design system | Only for truly one-off values with no design token equivalent (e.g., exact pixel values from reference spec) |
| `FadeIn` wrapper component on every content element | Easy animation without IntersectionObserver boilerplate | Every element is a separate animation, no choreography, slow perceived load | Use only for section-level fades, never individual text nodes |
| `container mx-auto px-4` as default section wrapper | Consistent containment, familiar pattern | Prevents full-bleed editorial moments; every section looks the same width | For text-heavy sections only; image sections must escape the container |
| Placeholder images with `onError` fallback to SVG icon | Prevents broken layout during development | SVG icons as image placeholders look like wireframes — stakeholders see "web app skeleton" not editorial site | Development only; never in review, staging, or production without a real image or a genuine visual placeholder |

---

## Integration Gotchas

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Next.js `<Image>` with `fill` prop | Forgetting `sizes` attribute causes full-resolution download on mobile; the `sizes="(max-width: 768px) 100vw, 50vw"` already in DestinationCard is correct — do not remove it | Always pair `fill` with a specific `sizes` string matching the actual rendered size at each breakpoint |
| Tailwind v4 `@theme inline` and CSS custom properties | Circular references: `--color-cream: var(--color-cream)` defined in both `:root` and `@theme inline` works but is fragile — any rename breaks one reference silently | Keep `:root` as the single source of truth; `@theme inline` simply aliases it. Test both direct CSS and Tailwind utility usage after any token rename |
| `next/font` + Tailwind v4 | Font variable injected by Next.js on `<html>` or `<body>` as a class, then consumed as CSS variable — works but breaks if the layout does not pass `className` from font object to the root element | Always add font variable to `<html>` in `layout.tsx` AND declare it in `@theme` before using it in component utilities |
| i18n dictionary typing | `(dict.destinations.descriptions as Record<string, string>)[dest.slug]` casts away type safety — a missing key returns `undefined` and renders nothing with no error | Type the dictionary fully; use `??` with a fallback string; add a dev-time assertion that all destination slugs exist as dictionary keys |

---

## Performance Traps

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Unoptimized hero image | Hero image takes 3-5s to appear on mobile; LCP score fails Core Web Vitals | Use `priority` prop on hero `<Image>` (already done), ensure image is WebP/AVIF, keep hero image under 200KB at mobile size | On first load on any mobile device |
| Multiple `'use client'` components above the fold | React hydration waterfall; visible content repaints after JavaScript loads | Make sections above the fold Server Components where possible; `FadeIn` forces client rendering — use CSS animations for above-fold elements instead | On every page load; worsens with network latency |
| Six destination cards with `fill` images loaded simultaneously | All six images compete for bandwidth; the bottom cards delay the top cards | Add `loading="lazy"` to cards below the fold; only the first 2-3 cards need eager loading | On mobile, on every destinations page view |
| Marquee animation on `PartnersSection` with `transform: translateX` | Causes layer compositing on older devices; stutters on low-end Android | Ensure the marquee element is `will-change: transform` — but only while animating, remove afterward | On any device with a GPU < 2016 vintage |

---

## UX Pitfalls

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| No mobile navigation (header hides nav on small viewports) | Mobile users cannot navigate the site | Build hamburger/slide-over nav as part of header redesign; this is a blocking issue |
| WhatsApp button covers content on mobile | Bottom-right floating button obscures CTAs and card elements at page bottom | Position WhatsApp button with `bottom-6 right-4` on mobile, ensure it does not overlap the primary page CTA; fade it out when the contact form is visible |
| Destination cards link to `#slug` anchors rather than dedicated pages | Anchor links scroll the destinations page — disorienting if the user is not already on that page | Link cards to `/destinazioni/[slug]` dedicated pages; the anchor pattern is a temporary scaffold |
| `line-clamp-2` on destination card descriptions | Description text is invisibly truncated; if the first two lines do not communicate the destination's appeal, the card is unconvincing | Write card descriptions so the first two lines are complete and compelling; or increase to `line-clamp-3` for portrait cards |
| Contact page and home page CTA both say "CONTATTACI" | No differentiation of intent; "contact us" is a generic action that does not inspire | Use different CTA copy per context: header = "CONTATTACI", hero = "Scopri le destinazioni", card = "Scopri", contact section = "Scrivici" |

---

## "Looks Done But Isn't" Checklist

- [ ] **Mobile navigation:** Header hides nav items on small screens — verify a hamburger / slide-over exists and functions before calling header "complete"
- [ ] **Hero at 375px width:** Load the homepage on an actual iPhone (not just a DevTools emulator) — verify the headline fits on 2 lines or fewer and the CTA is visible above the fold without scrolling
- [ ] **Font rendering:** Load on a fresh browser with cold cache on a throttled connection — verify no flash of incorrect font in the nav bar or hero headline
- [ ] **Image focal points:** View each destination card with its real photograph — verify `object-cover` is not cropping the most important part of each image (check Ischia castle, Capri cliffs, Positano colored houses specifically)
- [ ] **Destination detail pages:** Cards link to `/destinazioni/[slug]` — verify these pages exist and are not 404s
- [ ] **Gradient blobs removed:** Search the codebase for `rounded-full blur-3xl` and `bg-gradient-to-br` — verify neither pattern exists in production components
- [ ] **Color competition:** Screenshot the full homepage, view at 25% zoom — verify photographs are the dominant visual element, not colored section backgrounds
- [ ] **Hover on desktop:** Hover a destination card — verify the card does not translateY upward (editorial feel), instead showing an image scale or overlay reveal

---

## Recovery Strategies

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Symmetric grid applied to all sections | MEDIUM | Rebuild each section independently with varied column ratios; no shared "section template" component |
| Gradient blob backgrounds on inner page heroes | LOW | Replace with `bg-[#111]` + display typography; takes 30 minutes per page |
| Color palette fighting photography | MEDIUM | Audit all section backgrounds in one pass; replace with cream or deep black; remove unused palette tokens from `@theme` |
| FadeIn on every element slowing perceived load | LOW | Remove `FadeIn` wrapper from individual elements; keep only one FadeIn per section; 1-2 hours of find/replace |
| Missing mobile navigation | HIGH | Requires building a new nav component from scratch; cannot be patched onto existing header; plan 1-2 days |
| Font flash (Futura not loaded via next/font) | MEDIUM | Source Futura `.woff2` files, configure `next/font/local`, update CSS variable references; 2-4 hours |

---

## Pitfall-to-Phase Mapping

| Pitfall | Prevention Phase | Verification |
|---------|-----------------|--------------|
| Symmetric grid trap | Layout architecture (early) | Audit: no two consecutive sections share identical column ratios |
| Pastel palette competing with photos | Design tokens (Phase 1) | Screenshot full page at 25% zoom — photographs dominate color |
| Typography inconsistency (Tailwind defaults vs. custom scale) | Typography system (Phase 1) | Grep for `text-lg`, `text-xl`, `text-2xl` in component files — none should remain |
| Image rounded corners and focal points | Component rebuild (DestinationCard) | View all 6 destination cards: no rounded corners on any photograph |
| Uniform section density | Layout architecture (Phase 2) | Full-page screenshot: at least one edge-to-edge section per viewport height |
| Mobile breakpoints collapsing cinematic feel | Responsive / mobile (parallel with layout) | Test on physical iPhone 14 at 390px — hero, nav, and cards all acceptable |
| Developer-default animation patterns | Interaction / polish (late phase) | No card translateY on hover; FadeIn present in ≤1 element per section |
| Gradient-blob page heroes | Inner page design | Grep for `rounded-full blur-3xl` — zero results |
| Transactional contact section | Contact / CTA section | Count form fields (≤5); verify button copy is invitation not command |
| Font flash on load | Typography system (Phase 1) | Cold cache load on Fast 3G: no visible font swap in hero or nav |

---

## Sources

- Direct codebase audit: `globals.css`, `DestinationCard.tsx`, `Header.tsx`, `VideoTextSection.tsx`, `ServicesSection.tsx`, `ReviewSection.tsx`, `app/[locale]/page.tsx`, `app/[locale]/destinazioni/page.tsx`
- Visual reference: Sailing Collective Journal (https://journal.sailingcollective.com/) — editorial layout logic used as design target per PROJECT.md
- Next.js 16 App Router documentation — `next/font` loading strategies, Image component `sizes` and `priority` behavior
- Tailwind CSS v4 documentation — `@theme inline` aliasing, CSS custom property integration
- Pattern knowledge: editorial magazine web design conventions (Condé Nast Digital, Monocle, Kinfolk web properties) — HIGH confidence based on established editorial web design principles

---
*Pitfalls research for: Premium editorial travel website — Baywatch Travel redesign*
*Researched: 2026-03-11*
