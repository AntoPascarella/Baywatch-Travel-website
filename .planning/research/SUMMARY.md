# Project Research Summary

**Project:** Baywatch Travel — Premium Editorial Travel Website
**Domain:** Boutique South Italy travel agency — Mediterranean magazine aesthetic
**Researched:** 2026-03-11
**Confidence:** HIGH

## Executive Summary

Baywatch Travel is a brownfield redesign of an existing Next.js 16 + Tailwind CSS v4 site. The technical stack is fixed and solid — no new dependencies are needed. The entire effort is editorial design work within that stack: making the existing components achieve the cinematic, image-dominant feel of references like the Sailing Collective Journal. The codebase already has the right architectural skeleton (App Router, static generation, i18n, FadeIn, design token system) but every section currently applies safe, symmetric, "landing page" patterns rather than editorial ones. The redesign mission is to replace those patterns with asymmetric grids, full-bleed photography, restrained typography hierarchy, and deliberate whitespace variation — without adding a single npm package.

The recommended approach is to work strictly in dependency order: design system tokens first (so all typography and color decisions are settled before any component is touched), then navigation shell, then individual section components rebuilt to editorial standards, then page assembly. The highest-value functional gap is the missing destination detail pages — destination cards currently link to `#slug` anchors rather than real routes, which is the single most trust-destroying issue for an affluent traveler. Building the `[slug]` route early unblocks content work and signals a complete product.

The key risks are aesthetic, not technical. The most dangerous trap is defaulting to 50/50 symmetric layouts, pastel section backgrounds that compete with photography, and over-animation (FadeIn on every element). These patterns are already present in the codebase and must be explicitly identified and reversed. Font loading is a secondary technical risk: Futura is referenced as a CSS variable but may not be loaded via `next/font`, causing a visible flash of wrong style in the hero. Both risks are resolvable in Phase 1 before any visible component work begins.

---

## Key Findings

### Recommended Stack

The stack requires no changes. Next.js 16 (App Router), React 19, TypeScript 5, and Tailwind CSS v4 with `@theme inline` are all in place and correctly configured. The editorial upgrade is entirely CSS and component-level: asymmetric 12-column CSS grid for destination cards, `clamp()`-based fluid typography extended with editorial scale tokens (`--text-editorial-xl`, `--text-eyebrow`, `--text-pullquote`), standardized gradient scrim utilities in `globals.css`, and `next/image` configured with AVIF format priority and cream-colored `blurDataURL` placeholders. The existing `FadeIn` component should be extended with a `variant` prop rather than replaced. No motion libraries should be added.

**Core technologies:**
- **Next.js 16 + App Router**: SSG via `generateStaticParams` — already the correct pattern for all destination routes
- **Tailwind CSS v4 `@theme inline`**: Design token source of truth — extend in `globals.css`, never in component files
- **`next/image` with `fill` + `sizes`**: Editorial image primitive — add `objectPosition` focal point control and AVIF format
- **`FadeIn` with IntersectionObserver**: Animation primitive — extend with variants, do not add framer-motion
- **CSS Grid 12-column asymmetric**: Core editorial layout — hero card spans 8 cols, companions span 4

**Explicit no-adds:** framer-motion, react-spring, GSAP, @tailwindcss/typography, any parallax library.

### Expected Features

The site already has the structural scaffolding. The redesign fills quality gaps and adds one critical missing functional piece.

**Must have (table stakes):**
- Individual destination detail pages at `/[locale]/destinazioni/[slug]` — currently a dead anchor link; the single biggest trust gap
- Fix `DestinationCard` href from `#slug` to the real route
- Named service cards replacing the current prose paragraph in `ServicesSection`
- About section expanded with Ischia-local positioning and agency philosophy
- Testimonials with real names, trip context, and attribution (replace placeholder quote)
- `PlanTripSection` WhatsApp CTA button — section exists but has no call-to-action
- All route metadata (title, description, OG tags) audited and completed
- Mobile navigation (hamburger or slide-over) — currently absent; a blocking issue

**Should have (differentiators):**
- Destination `subTitle` rendered on cards — data exists, one-line render change, immediate editorial lift
- Evocative editorial voice in both IT and EN copy
- `bestSeason` and `types` chips on destination cards when imagery is in place
- Partner names shown in context alongside logos
- Hyper-local Ischia positioning front-and-center in the about narrative

**Defer to v2+:**
- CMS integration (static data works; add only when agency needs to self-edit)
- Blog / editorial journal (only with genuine content production commitment)
- Structured data / Schema.org (add after destination pages have stable editorial copy)
- Online booking or payment flow (wrong model for this brand)

### Architecture Approach

The architecture follows a strict four-layer model: Routing (page files as thin orchestrators), Section Layer (Server Components receiving dict + destination props), Component Layer (Client components only where browser APIs are needed), and Data Layer (static `destinations.ts` as single source of truth). All new destination detail pages should use `generateStaticParams` to pre-render 12 destinations × 2 locales = 24 static HTML files at build time. The `Destination` type must be extended with `fullDescription`, `gallery`, and `services` fields before detail page templates are built. Design tokens belong exclusively in `globals.css` — never hardcoded in component files.

**Major components:**
1. **`app/[locale]/destinazioni/[slug]/page.tsx`** — NEW: static detail page with `generateStaticParams`; the critical routing fix
2. **`components/sections/`** — NEW grouping for section-level components (DestinationDetailHero, HighlightsSection, DestinationInquiryCTA)
3. **`globals.css` @theme inline block** — Extended with editorial type scale, spacing variants, scrim utilities, and constrained color palette
4. **`DestinationCard.tsx`** — Updated: asymmetric grid placement, `objectPosition` focal point, no rounded corners, href corrected
5. **`FadeIn.tsx`** — Extended: `variant` prop (`up`, `left`, `right`, `scale`, `reveal`); section-level use only

**Key patterns:**
- Server-first composition: `'use client'` only for scroll events, intersection, form state
- Design tokens via CSS custom properties — `@theme inline` maps to Tailwind utilities
- i18n via dictionary files — destination copy in `dictionaries/it.json` + `dictionaries/en.json`, not hardcoded in data

### Critical Pitfalls

1. **Symmetric grid trap** — Both `VideoTextSection` and `ServicesSection` use identical `flex lg:w-1/2` splits; stacked, they read as a brochure. Replace with asymmetric CSS Grid ratios (`5fr 3fr`, `1fr 2fr`) and introduce full-bleed moments that escape the container entirely.

2. **Pastel palette competing with photography** — The destinations page uses a `bg-gradient-to-br` with `blur-3xl` blobs — indistinguishable from a Tailwind UI starter template. Reserve the structural palette to cream + near-black + one accent (soft coral, sparingly). Remove all decorative blob patterns unconditionally.

3. **Typography mixing Tailwind defaults with custom scale** — `text-lg` and `text-xl` appear adjacent to `text-h2 font-serif` in the same sections. The custom scale in `globals.css` must be the only scale in use; `text-lg` in a component file is a warning sign.

4. **Image focal point and rounded corners destroying editorial photography** — `object-cover` crops center by default; Ischia's castle and Positano's village are not at center. Add `objectPosition` per-image. Remove `rounded-lg` from all image containers — sharp edges are non-negotiable for cinematic editorial photography.

5. **Missing mobile navigation is a blocking issue** — The header hides nav on small viewports with no hamburger or slide-over replacement. Mobile users cannot navigate the site. This must be resolved in the header phase before any other mobile work is reviewed.

6. **Font flash (Futura loaded outside `next/font`)** — `--font-futuramed` may be a manual `@font-face` declaration rather than a `next/font/local` load. On a cold cache with throttled connection this produces a visible font swap in the nav and hero. Must be resolved in Phase 1 before layout metrics are set.

---

## Implications for Roadmap

Based on the dependency graph across all four research files, five phases are suggested. The order is non-negotiable — each phase unblocks the next.

### Phase 1: Design System Foundation
**Rationale:** Typography metrics, color palette, and spacing tokens affect every component file. Changing them after components are built multiplies rework. Pitfalls 2, 3, and 6 (palette, typography inconsistency, font flash) must be killed here before any visual work begins.
**Delivers:** A single source of truth in `globals.css` — extended type scale tokens, constrained color palette (cream/ink/one accent), scrim utilities, spacing variants, and Futura loaded via `next/font/local`.
**Addresses:** Table-stakes metadata audit (quick win done in parallel); font loading fix.
**Avoids:** Typography drift, palette competition with photography, font flash on load.
**Research flag:** Standard patterns — no deeper research needed. All decisions are grounded in existing codebase conventions and Tailwind v4 `@theme inline` docs.

### Phase 2: Navigation Shell
**Rationale:** Header appears on every page. Building it correctly once — including mobile navigation — prevents multiplied test effort as pages are built in Phase 4. The missing mobile nav is a blocking issue; it cannot be deferred to a polish phase.
**Delivers:** Refined `Header.tsx` with functional mobile hamburger/slide-over nav, editorial type treatment in nav links, and scroll-aware state that matches the cinematic aesthetic. Refined `Footer.tsx` with correct layout and social link slots.
**Addresses:** Mobile navigation (blocking UX pitfall), consistent shell for all pages.
**Avoids:** Mobile breakpoint collapse (Pitfall 6 — mobile nav specifically).
**Research flag:** Standard patterns — hamburger nav is well-documented in React/Next.js. No research phase needed.

### Phase 3: Section Components (Editorial Vocabulary)
**Rationale:** Section components are the reusable atoms. Building them in isolation — tested and correct — means page assembly in Phase 4 is pure composition with no visual debugging. This phase also applies the asymmetric grid, full-bleed patterns, and image focal point fixes.
**Delivers:** Rebuilt section components: `HeroSection`, `DestinationCard` (asymmetric grid, focal point, no border radius, corrected href), `ServicesSection` (named service cards), `ReviewSection` (real testimonials), `PlanTripSection` (WhatsApp CTA added), `DestinationDetailHero`, `HighlightsSection`, `DestinationInquiryCTA`.
**Addresses:** Destination `subTitle` rendered, `objectPosition` per image, `FadeIn` variant extension, scrim utility usage, all P1 feature work except routing.
**Avoids:** Symmetric grid trap (Pitfall 1), rounded corners on photography (Pitfall 4), uniform section density (Pitfall 5), developer-default animation (Pitfall 7).
**Research flag:** Standard patterns for all section rebuilds. The asymmetric grid approach is fully documented in STACK.md with working Tailwind v4 markup.

### Phase 4: Page Assembly + Destination Routing
**Rationale:** Pages compose sections built in Phase 3. The critical functional gap — destination detail pages — is built here with `generateStaticParams`. DestinationCard href is corrected to the real route simultaneously.
**Delivers:** Homepage (`page.tsx`) using extracted section components; destinations index with editorial 12-column grid; NEW `[slug]/page.tsx` route for all 12 destinations × 2 locales (24 static pages); about/contact page with editorial brand narrative and correctly sized contact form.
**Addresses:** The single biggest trust gap (dead destination card links), `Destination` type extension (`fullDescription`, `gallery`, `services`), dictionary entries for destination copy in both locales.
**Avoids:** Anti-pattern of `[slug]/page.tsx` without `generateStaticParams` (would leave pages as dynamic renders unnecessarily); anchor-based href on cards post-routing-fix.
**Research flag:** Standard patterns — `generateStaticParams` pattern is already used in this codebase for locale generation. Direct extension of existing code.

### Phase 5: Mobile Audit + Polish
**Rationale:** After all sections and pages exist, a full mobile audit on real devices catches the accumulated responsive issues that are invisible during desktop-first development. Animation polish is the last step — it should not be finalized until layout and content are correct, because animation changes depend on what is actually on screen.
**Delivers:** Mobile-verified layout at 390px (hero CTA above fold, card grid with snap-scroll or alternating aspect ratios, tap targets); image lazy-loading discipline for destination card grid; `FadeIn` usage audited (one per section, not per element); hover states verified (no card translateY); gradient blob removal verified; form field count and CTA copy reviewed.
**Addresses:** P2 features (bestSeason/types chips if assets available, social links), "Looks Done But Isn't" checklist from PITFALLS.md.
**Avoids:** Mobile breakpoint collapse (Pitfall 6), developer-default animations (Pitfall 7), transactional contact section (Pitfall 9).
**Research flag:** No research needed — this is verification and polish work against known checklists.

### Phase Ordering Rationale

- **Tokens before components:** Color and type decisions propagate to every file — set them once, correctly.
- **Navigation before pages:** The shell wraps all pages; building it first eliminates per-page nav rework.
- **Components before pages:** Section components tested in isolation means pages are composition exercises, not debugging sessions.
- **Routing and page assembly together:** The destination detail route and the `DestinationCard` href fix are a single atomic change — separating them would leave broken links between phases.
- **Polish last:** Animation and responsive tuning require all content to be in place to be evaluated correctly.

### Research Flags

**Phases needing deeper research during planning:** None identified. All technical decisions are well-grounded in official docs and direct codebase inspection. The only open question — Futura font file sourcing — is an asset procurement task, not a research task.

**Content dependencies requiring agency input (not development work):**
- Real testimonial copy with names and trip context (Phase 3 / ReviewSection)
- Evocative editorial copy in both IT and EN for destination `fullDescription` fields (Phase 4)
- Partner names and relationship context (Phase 3 / PartnersSection)
- Photography for destinations currently using SVG placeholders: Napoli, Sorrento, Pompei, Sicilia, Sardegna, Toscana

**Standard patterns (no research phase needed):** All five phases. The entire redesign operates within well-documented, existing-codebase patterns.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Direct codebase audit + official Next.js 16 and Tailwind v4 docs; no speculative choices |
| Features | HIGH | Codebase audit confirms what exists and what is absent; competitor pattern analysis from stable, well-known brands |
| Architecture | HIGH | Based on official Next.js 16 App Router docs (fetched 2026-03-11) + live codebase inspection of existing patterns |
| Pitfalls | HIGH | Drawn from direct code inspection of existing anti-patterns (symmetric layouts, gradient blobs, anchor hrefs) — these are confirmed in the codebase, not hypothetical |

**Overall confidence:** HIGH

### Gaps to Address

- **Futura font file**: `--font-futuramed` is referenced in `globals.css` but the source of the font file is not confirmed. Before Phase 1 completes, confirm whether a `.woff2` file exists in `/public/fonts/` or needs to be sourced. If Futura is unavailable, Josefin Sans (already loaded via `next/font/google`) is the editorial fallback — it covers the same structural label role.
- **Photography asset completeness**: Six of twelve destinations use SVG placeholder images. The editorial redesign depends on cinematic photography. Where real images are absent, Phase 3/4 work should use a styled text-over-dark-background placeholder, not the SVG icon fallback, to maintain editorial atmosphere in review.
- **Real testimonial and partner content**: Several P1 features are content dependencies, not development dependencies. The roadmap should flag these as agency-supplied milestones that gate Phase 3 sign-off.

---

## Sources

### Primary (HIGH confidence)
- Direct codebase audit: `/components/`, `/app/[locale]/`, `globals.css`, `layout.tsx`, `data/destinations.ts` — stack, architecture, pitfall identification
- Official Next.js 16 documentation — Dynamic Routes, generateStaticParams, next/image — architecture decisions
- Official Tailwind CSS v4 documentation — `@theme inline`, CSS custom properties — token system

### Secondary (MEDIUM confidence)
- Sailing Collective Journal (https://journal.sailingcollective.com) — visual reference per PROJECT.md; analysis based on project brief and known editorial CSS patterns (WebFetch unavailable during research session)
- Mr & Mrs Smith, Aman Resorts — competitor feature analysis; stable brands with well-established design patterns

### Tertiary (context only)
- Condé Nast Traveller digital, Monocle, Kinfolk — editorial convention patterns for typography hierarchy and layout asymmetry; inferred from established editorial web design principles

---

*Research completed: 2026-03-11*
*Ready for roadmap: yes*
