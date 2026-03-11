# Architecture Research

**Domain:** Premium editorial travel website — Next.js 16 App Router brownfield redesign
**Researched:** 2026-03-11
**Confidence:** HIGH (grounded in codebase inspection + official Next.js 16 docs + official Tailwind v4 docs)

---

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                         ROUTING LAYER                               │
│  app/[locale]/page.tsx          app/[locale]/destinazioni/page.tsx  │
│  app/[locale]/destinazioni/[slug]/page.tsx    chi-siamo-contatti/   │
└──────────────────────────────────┬──────────────────────────────────┘
                                   │ server-renders, passes dict+data
┌──────────────────────────────────▼──────────────────────────────────┐
│                        SECTION LAYER                                │
│  HeroSection   DestinationsGrid   ServicesSection   ReviewSection   │
│  DestinationDetailHero   HighlightsSection   InquiryCTA             │
│  (Server Components — receive dict + destination via props)         │
└──────────────────────────────────┬──────────────────────────────────┘
                                   │ compose from
┌──────────────────────────────────▼──────────────────────────────────┐
│                       COMPONENT LAYER                               │
│  DestinationCard   FadeIn   Header   Footer                         │
│  WhatsAppButton   LangSwitcher   ContactForm                        │
│  (mix of Server + Client — 'use client' only where needed)          │
└──────────────────────────────────┬──────────────────────────────────┘
                                   │ reads from
┌──────────────────────────────────▼──────────────────────────────────┐
│                         DATA LAYER                                  │
│   data/destinations.ts (Destination[])   data/partners.ts           │
│   dictionaries/it.json   dictionaries/en.json                       │
│   lib/i18n/get-dictionary.ts (async loader)                         │
└─────────────────────────────────────────────────────────────────────┘
                                   │ styled by
┌─────────────────────────────────────────────────────────────────────┐
│                      DESIGN SYSTEM LAYER                            │
│   app/globals.css:  :root tokens → @theme inline → Tailwind utils  │
│   Font variables injected at html element via layout.tsx            │
│   Component styling: Tailwind utility classes + inline style()      │
└─────────────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Server or Client |
|-----------|---------------|------------------|
| `app/[locale]/page.tsx` | Compose homepage sections, load dict | Server |
| `app/[locale]/destinazioni/page.tsx` | Render all destination cards | Server |
| `app/[locale]/destinazioni/[slug]/page.tsx` | Individual destination detail page | Server |
| Section components (e.g. `ServicesSection`) | Self-contained full-width content blocks | Server (default) |
| `DestinationCard` | Image-dominant card with hover state | Client (has hover) |
| `Header` | Scroll-aware fixed nav with state transitions | Client (scroll events) |
| `FadeIn` | IntersectionObserver entrance animation | Client |
| `ContactForm` | Validated form with React Hook Form | Client |
| `WhatsAppButton` | Floating CTA | Client |
| `data/destinations.ts` | Typed static data, single source of truth | n/a (data) |

---

## Recommended Project Structure

The existing structure is correct and should be extended as follows:

```
app/
├── [locale]/
│   ├── layout.tsx                    # Font setup, metadata, html element — DO NOT CHANGE
│   ├── page.tsx                      # Homepage sections
│   ├── destinazioni/
│   │   ├── page.tsx                  # All destinations grid (existing)
│   │   └── [slug]/
│   │       └── page.tsx              # NEW: individual destination detail page
│   └── chi-siamo-contatti/
│       └── page.tsx                  # Contact + about (existing)
│
components/
├── sections/                         # RECOMMENDED: group section components
│   ├── HeroSection.tsx               # Extracted from page.tsx inline sections
│   ├── DestinationsGridSection.tsx
│   ├── DestinationDetailHero.tsx     # NEW: full-bleed hero for detail pages
│   ├── HighlightsSection.tsx         # NEW: destination highlights list
│   ├── DestinationInquiryCTA.tsx     # NEW: inquiry CTA on detail pages
│   └── ...
├── DestinationCard.tsx               # Existing — keep at top-level
├── Header.tsx                        # Existing
├── Footer.tsx                        # Existing
├── FadeIn.tsx                        # Existing
├── WhatsAppButton.tsx                # Existing
└── hooks/
    └── useHeaderState.ts             # Existing

data/
├── destinations.ts                   # Extend Destination type with new fields
└── partners.ts

app/globals.css                       # All design tokens — extend here, not in components
```

### Structure Rationale

- **`components/sections/`**: Grouping section-level components keeps the root `components/` uncluttered as the editorial redesign adds hero variants, split layouts, and detail-page sections. Top-level components (`DestinationCard`, `Header`, `FadeIn`) remain at root because they are shared utilities, not page-specific sections.
- **`app/[locale]/destinazioni/[slug]/`**: Nested inside the existing `destinazioni/` folder — mirrors the URL (`/it/destinazioni/ischia`) and keeps destination routing co-located.
- **`data/destinations.ts` as the only data source**: No CMS, no fetch calls. The `Destination` type should be extended (add `fullDescription`, `gallery`, `services`) rather than creating parallel data files.

---

## Architectural Patterns

### Pattern 1: Static Destination Detail Pages via generateStaticParams

**What:** Export `generateStaticParams` from `app/[locale]/destinazioni/[slug]/page.tsx` to pre-render all 12 destination × 2 locale combinations at build time. No server-side rendering at request time, no dynamic fetching.

**When to use:** All destination data is static (`data/destinations.ts`). This is the only correct approach for static-content sites — avoids any runtime delay and enables CDN caching.

**Trade-offs:** Build must re-run if destination data changes. Acceptable given the "no CMS" constraint — content changes are code changes anyway.

**Example:**
```typescript
// app/[locale]/destinazioni/[slug]/page.tsx

import { destinations } from '@/data/destinations';
import { i18n } from '@/i18n-config';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import type { Locale } from '@/i18n-config';

export async function generateStaticParams() {
  return i18n.locales.flatMap((locale) =>
    destinations.map((dest) => ({ locale, slug: dest.slug }))
  );
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  const dict = await getDictionary(locale);

  return (
    <>
      <DestinationDetailHero destination={destination} lang={locale} />
      <HighlightsSection destination={destination} dict={dict} />
      <DestinationInquiryCTA destination={destination} dict={dict} lang={locale} />
    </>
  );
}
```

**Note on params typing:** In Next.js 16 (which uses React 19), `params` is a Promise and must be awaited. This matches the pattern already used in `app/[locale]/page.tsx` and `app/[locale]/destinazioni/page.tsx` in this codebase — do not use the synchronous params pattern from pre-15 examples.

---

### Pattern 2: Server-First Section Composition

**What:** Page files (`page.tsx`) act as thin orchestrators — they await the dictionary, find the relevant data, then pass everything as props to section components. Section components are Server Components by default (no `'use client'` directive) and receive only what they need.

**When to use:** Every new section should start as a Server Component. Only add `'use client'` when the component genuinely needs browser APIs (scroll, intersection, user events, form state).

**Trade-offs:** Requires passing `dict` and `destination` as props through each layer. Acceptable — this is exactly the pattern already established in `ServicesSection`, `ReviewSection`, and `PlanTripSection`.

**Example:**
```typescript
// Section component — Server Component (no 'use client')
// components/sections/HighlightsSection.tsx

import type { Destination } from '@/data/destinations';

export default function HighlightsSection({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <section style={{ paddingTop: 'var(--section-py)', paddingBottom: 'var(--section-py)' }}>
      <div className="container mx-auto px-4">
        <ul className="grid md:grid-cols-2 gap-4">
          {destination.highlights.map((h) => (
            <li key={h} className="text-body text-midnight">{h}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

---

### Pattern 3: Design System via CSS Custom Properties + @theme inline

**What:** All design decisions live in `app/globals.css` as `:root` CSS custom properties. Tailwind v4 `@theme inline` then maps those properties to Tailwind utility classes. Components consume design decisions through Tailwind classes (`text-midnight`, `bg-cream`, `shadow-card`) or via `style={{ padding: 'var(--section-py)' }}` for values without a corresponding utility.

**When to use:** All new tokens (colors, spacing, type scales, shadows) should be added first to `:root` in `globals.css`, then registered in the `@theme inline` block. Never hardcode hex values or pixel values in component files.

**Trade-offs:** Single file concentration means globals.css grows, but it remains the authoritative source of truth. The alternative — scattered inline values per component — creates inconsistency that is hard to audit or change.

**How Tailwind v4 @theme inline works (from official docs):**
- `@theme inline` causes utilities to reference the CSS variable by value (i.e., `var(--font-inter)`) rather than by variable name — critical for font variables where the variable itself is set by Next.js font loader at runtime.
- `@theme` (without `inline`) creates a static mapping — correct for color values that are literal hex/oklch values.
- The existing `globals.css` correctly uses `@theme inline` for fonts and colors. This pattern should be extended, not changed.

**Example — adding a new token:**
```css
/* 1. Define in :root */
:root {
  --color-terracotta: #C4714A;
  --text-caption: 0.75rem;
}

/* 2. Register in @theme inline so Tailwind generates utilities */
@theme inline {
  --color-terracotta: var(--color-terracotta);
  --text-caption: var(--text-caption);
}

/* Now usable as: text-terracotta, bg-terracotta, text-caption in className */
```

---

### Pattern 4: Extending the Destination Type

**What:** The `Destination` type in `data/destinations.ts` currently holds `highlights[]` and `shortDescription`. For detail pages, additional fields are needed. Extend the type — do not create separate data files.

**When to use:** Before building `DestinationDetailHero` or `HighlightsSection`, add the required fields to the `Destination` type and populate them for each destination object.

**Recommended additions:**
```typescript
export type Destination = {
  slug: string;
  name: string;
  subTitle: string;
  region: string;
  types: ('Beach' | 'Culture' | 'Nature' | 'Food' | 'History')[];
  bestSeason: string;
  shortDescription: string;
  // --- NEW for detail pages ---
  fullDescription: string;          // 2-4 paragraph editorial narrative
  gallery: string[];                // Additional image paths beyond `image`
  services: string[];               // What Baywatch offers at this destination
  highlights: string[];             // Already exists — keep
  image: string;
  alt: { it: string; en: string };
};
```

---

## Data Flow

### Detail Page Request Flow

```
User navigates to /it/destinazioni/ischia
    ↓
middleware.ts: locale already present, passes through
    ↓
app/[locale]/destinazioni/[slug]/page.tsx
    ↓ (build time: already statically generated via generateStaticParams)
await params → { locale: 'it', slug: 'ischia' }
    ↓
destinations.find(d => d.slug === 'ischia') → Destination object
await getDictionary('it') → dict
    ↓
<Header dict={dict} lang="it" />
<DestinationDetailHero destination={dest} lang="it" />
<HighlightsSection destination={dest} dict={dict} />
<DestinationInquiryCTA destination={dest} dict={dict} lang="it" />
<Footer dict={dict} lang="it" />
    ↓
Static HTML served from CDN edge
```

### Design Token Consumption Flow

```
layout.tsx: loads Google Fonts, attaches CSS variables to <html>
    ↓
globals.css: :root defines all design tokens
globals.css: @theme inline maps tokens → Tailwind utility classes
    ↓
Component className="text-midnight bg-cream font-display"
    → resolved at build time to: color: var(--color-midnight), etc.

Component style={{ padding: 'var(--section-py)' }}
    → resolved at runtime by browser from :root
```

---

## Build Order

This ordering reflects hard dependencies — each phase requires the previous to be complete.

### Phase 1: Design System Foundation
**Build first.** All visual work depends on a correct token set.

1. Audit `globals.css` — identify gaps vs. editorial reference (Sailing Collective)
2. Add missing tokens to `:root` and register in `@theme inline`:
   - Editorial typography: larger `--text-display`, tighter tracking, editorial serif weights
   - Spacing: `--section-py-tight`, `--section-py-loose` variants for rhythm
   - Overlay colors: `--color-sand`, `--color-stone` for editorial neutrals
   - Animation: `--duration-slow`, `--ease-cinematic` for image reveals
3. Verify `@theme inline` block stays in sync with `:root` additions
4. Test token availability via Tailwind classes in a single component before proceeding

**Why first:** If typography scale or color palette changes after components are built, every component file needs updating. Correct tokens before building components = single-source changes later.

---

### Phase 2: Core Layout + Navigation
**Build second.** All pages share the same header/footer shell.

1. Refine `Header.tsx` for editorial aesthetic (mobile nav, active state clarity)
2. Refine `Footer.tsx` for editorial layout
3. Ensure `FadeIn.tsx` animation timing matches editorial pacing

**Why second:** Header is on every page. Changing it after building 6 destination pages multiplies test effort.

---

### Phase 3: Section Components
**Build third.** Establishes the editorial vocabulary before page assembly.

Build each section component in isolation:
- `HeroSection` (full-screen, cinematic, overlay copy)
- `DestinationDetailHero` (full-bleed image, destination name + subtitle)
- `HighlightsSection` (editorial list with editorial typography)
- `ServicesSection` (refinement of existing)
- `ReviewSection` (refinement of existing)
- `DestinationInquiryCTA` (inquiry prompt with WhatsApp / contact link)

**Why third:** Section components are reusable atoms of pages. Building them before pages means pages are simple composition exercises.

---

### Phase 4: Page Assembly
**Build fourth.** Compose existing sections into pages.

1. Homepage (`app/[locale]/page.tsx`) — replace inline sections with extracted section components
2. Destinations index (`app/[locale]/destinazioni/page.tsx`) — editorial grid, refined cards
3. Destination detail (`app/[locale]/destinazioni/[slug]/page.tsx`) — NEW route with `generateStaticParams`
4. About/contact (`app/[locale]/chi-siamo-contatti/page.tsx`) — editorial brand story + form

---

## Anti-Patterns

### Anti-Pattern 1: Hardcoding Design Values in Component Files

**What people do:** Write `style={{ color: '#191970' }}` or `className="text-[#191970]"` directly in components.

**Why it's wrong:** A color change requires finding every instance across all component files. The design token system (`--color-midnight`) exists precisely to prevent this. If `midnight` changes shade, one edit in `globals.css` propagates everywhere.

**Do this instead:** Add the value as a `:root` token, register in `@theme inline`, then use `text-midnight` as a Tailwind class.

---

### Anti-Pattern 2: Client Components for Static Sections

**What people do:** Add `'use client'` at the top of a new section component because it "feels easier" — avoids thinking about where state lives.

**Why it's wrong:** Client Components ship JavaScript to the browser. A static section like `HighlightsSection` or `ReviewSection` has no interactivity and should render as pure HTML with zero JS weight. The Sailing Collective editorial aesthetic is image-dominant and fast — unnecessary JS bundle weight degrades this.

**Do this instead:** Only add `'use client'` to components that require: browser APIs (scroll, intersection, media query), user event handlers (click, hover with state), or React hooks (useState, useEffect, useRef). FadeIn, Header, ContactForm are correct uses. HighlightsSection, ServicesSection, ReviewSection are not.

---

### Anti-Pattern 3: Creating a Separate destinazioni/[slug] Route Without generateStaticParams

**What people do:** Create `app/[locale]/destinazioni/[slug]/page.tsx` without exporting `generateStaticParams`, leaving pages as dynamic (server-rendered on every request).

**Why it's wrong:** All destination data is static — it lives in `data/destinations.ts` at build time. Without `generateStaticParams`, Next.js cannot pre-render the pages, meaning every visit triggers a server render. Given the static nature of the content, this is pure waste.

**Do this instead:** Always export `generateStaticParams` for destination detail pages. Return all locale × slug combinations. This generates 24 static HTML files at build time (12 destinations × 2 locales). Confirmed pattern: this codebase already uses `generateStaticParams` in `layout.tsx` for locale generation — the same pattern extends to slug generation.

---

### Anti-Pattern 4: Bypassing the Dictionary for Destination Copy

**What people do:** Hardcode Italian or English strings directly into destination data or component files (e.g. `shortDescription: "Famosa per le terme..."` in only one language).

**Why it's wrong:** The i18n system already supports locale-aware strings via `dictionaries/it.json` and `dictionaries/en.json`. Destination descriptions should be in the dictionaries under a `destinations.descriptions` key (this pattern already exists in the homepage — `dict.destinations.descriptions[dest.slug]`). Hardcoding bypasses this and breaks the English locale.

**Do this instead:** Keep `shortDescription` in `destinations.ts` as an English fallback, but add translated versions to both dictionary files under `destinations.descriptions.{slug}`. The `DestinationCard` component already reads from `dict.destinations.descriptions` with a fallback to `destination.shortDescription` — extend this pattern to `fullDescription` for detail pages.

---

### Anti-Pattern 5: DestinationCard Linking to Anchor (#slug) Instead of Detail Page

**What people do:** Keep the current `DestinationCard` href of `/${lang}/destinazioni#${destination.slug}` after detail pages exist.

**Why it's wrong:** The anchor-based href only makes sense when there are no individual destination pages. Once detail pages exist, all cards should link to `/${lang}/destinazioni/${destination.slug}`. The current `DestinationCard.tsx` constructs the href from `destination.slug` — a single-line change in one place updates all cards simultaneously.

**Do this instead:** Change `DestinationCard.tsx` href construction to `/${lang}/destinazioni/${destination.slug}` when building the detail page route.

---

## Integration Points

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Page → Section components | Props (dict, destination, lang) | Server-to-Server. No context or global state needed. |
| Page → Client components (Header, FadeIn) | Props at render boundary | React handles hydration automatically |
| Detail page → data layer | Direct import of `destinations` array | No async fetch — pure static data |
| Detail page → i18n layer | `await getDictionary(locale)` | Matches existing page pattern exactly |
| `generateStaticParams` → locale config | `import { i18n } from '@/i18n-config'` | Mirrors pattern in `layout.tsx` |

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Google Fonts | `next/font/google` in `layout.tsx` | Already configured — DM Serif, Inter, Josefin Sans, Cormorant, Jost all loaded |
| WhatsApp | `<a href="tel:">` / WhatsApp deep link | Static links only — no API |
| Contact form | POST to `/api/contact/route.ts` | Existing endpoint — no change needed for editorial redesign |

---

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| Current (static site, <1k sessions/month) | Current approach is ideal — fully static, CDN-served, zero server compute |
| Growth (1k-50k sessions/month) | No architecture change needed. Add `next/image` blur placeholders and `priority` flags for above-fold images as the only performance tuning required. |
| CMS introduction (future) | Replace `data/destinations.ts` with a fetch call inside `generateStaticParams` + ISR (`revalidate`). The component layer does not need to change — only the data layer. This is the correct "seam" for future CMS integration. |

---

## Sources

- Official Next.js 16 documentation — Dynamic Routes: https://nextjs.org/docs/app/api-reference/file-conventions/dynamic-routes (fetched 2026-03-11, version 16.1.6)
- Official Tailwind CSS v4 documentation — @theme: https://tailwindcss.com/docs/theme (fetched 2026-03-11)
- Codebase inspection: `app/globals.css`, `app/[locale]/layout.tsx`, `app/[locale]/page.tsx`, `components/DestinationCard.tsx`, `data/destinations.ts`, `components/Header.tsx`
- Existing architecture analysis: `.planning/codebase/ARCHITECTURE.md`

---

*Architecture research for: Baywatch Travel — premium editorial travel website (Next.js 16 App Router)*
*Researched: 2026-03-11*
