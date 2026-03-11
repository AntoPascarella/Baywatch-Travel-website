# Roadmap: Baywatch Travel — Editorial Redesign

## Overview

A brownfield redesign of an existing Next.js 16 + Tailwind CSS v4 site, transforming it from a generic landing-page template into a premium editorial travel experience. Work proceeds in strict dependency order: design tokens first (so every downstream component inherits the right palette and type scale), then navigation shell (visible on every page), then the homepage and content sections rebuilt to editorial standards, then the destination detail pages that close the single biggest trust gap — dead-end anchor links that go nowhere. All four phases together deliver a site where a prospective traveler lands, feels they've discovered something rare, and wants to book before they finish scrolling.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

- [ ] **Phase 1: Design System Foundation** - Establish tokens, palette, typography, and image conventions in `globals.css` before any component is touched
- [ ] **Phase 2: Navigation Shell** - Build mobile-functional header and complete footer — the persistent chrome that wraps every page
- [ ] **Phase 3: Homepage + Content Sections** - Rebuild all homepage sections and the Chi siamo narrative to editorial standards
- [ ] **Phase 4: Destination Pages + Polish** - Create individual destination detail pages and audit the full site for mobile, metadata, and animation quality

## Phase Details

### Phase 1: Design System Foundation
**Goal**: A single source of truth for color, typography, and image conventions exists in `globals.css` — every subsequent component file can import tokens without making visual decisions
**Depends on**: Nothing (first phase)
**Requirements**: DESIGN-01, DESIGN-02, DESIGN-03, DESIGN-04, DESIGN-05
**Success Criteria** (what must be TRUE):
  1. The site palette is cream, ink, stone, and sand — no pastels, gradients, or template blues visible anywhere
  2. All headings use the serif display face; labels use Josefin Sans ALL CAPS with wide letter-spacing; body uses the defined sans — no Tailwind default `text-lg` or `text-xl` in component files
  3. No image on the site has rounded corners — every image container is square-edged
  4. Cinematic photography crops to a meaningful focal point (castle, coastline, village) rather than a centered default
  5. Design tokens are defined as CSS custom properties under `@theme inline` and are usable as Tailwind utilities (e.g., `text-editorial-xl`, `bg-cream`)
**Plans**: TBD

### Phase 2: Navigation Shell
**Goal**: The header and footer work correctly on all screen sizes and set the editorial visual register for every page
**Depends on**: Phase 1
**Requirements**: NAV-01, NAV-02, NAV-03
**Success Criteria** (what must be TRUE):
  1. A mobile user at 390px can open a navigation menu, see all page links, and tap to navigate — no dead hamburger icon, no invisible nav
  2. Scrolling down any page transitions the header from transparent (overlaying the hero) to a solid background without a jarring jump
  3. The footer shows the agency address, a contact email or phone, and an Instagram link slot — no empty placeholder columns
**Plans**: TBD

### Phase 3: Homepage + Content Sections
**Goal**: A visitor landing on the homepage experiences the full editorial arc — cinematic hero, destination discovery, agency story, services, and a clear path to make contact
**Depends on**: Phase 2
**Requirements**: HOME-01, HOME-02, HOME-03, HOME-04, HOME-05, HOME-06, HOME-07, HOME-08, HOME-09, HOME-10, ABOUT-01, ABOUT-02, QUAL-04
**Success Criteria** (what must be TRUE):
  1. The hero opens full-screen with the Castello Aragonese image, a large serif headline in evocative editorial Italian/English, and a single CTA — no gradient blobs, no decorative backgrounds
  2. Six destination tabs sit in an asymmetric editorial grid (not a uniform 3-column catalogue) and each card shows the destination's subTitle as an eyebrow label
  3. Every destination tab on the homepage links correctly to its detail page (not to a `#slug` anchor)
  4. The Chi siamo section tells the agency story with Ischia-local positioning front and center — a reader understands immediately that this is a team based on the island, not a remote booking platform
  5. The services, testimonials, and partner sections all present named, attributed content — no anonymous logos, no generic paragraph blurbs, no placeholder quote
  6. The destinations page hero has no pastel gradient blob — replaced with a clean editorial treatment
**Plans**: TBD

### Phase 4: Destination Pages + Polish
**Goal**: Every destination card leads to a real, content-rich page, and the full site passes a mobile and metadata quality bar
**Depends on**: Phase 3
**Requirements**: DEST-01, DEST-02, DEST-03, DEST-04, DEST-05, DEST-06, QUAL-01, QUAL-02, QUAL-03
**Success Criteria** (what must be TRUE):
  1. Clicking any destination card (from homepage or listings page) lands on a real page at `/[locale]/destinazioni/[slug]` — no 404s, no anchor links
  2. Each destination detail page has a full-screen editorial hero, a rich description, highlights or points of interest, and a direct inquiry CTA
  3. The destinations listing page displays all 6 destinations in an asymmetric editorial card grid — not a uniform catalogue
  4. Every page route (home, destinations, destination detail, chi-siamo-contatti) has a correct `<title>`, `<meta description>`, and OG tags
  5. On a 390px screen, images crop sensibly, CTAs are tap-friendly, text is readable, and sections have adequate breathing room
  6. Scroll-triggered animations are section-level and restrained — no staggered per-card reveals, no gratuitous motion
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Design System Foundation | 0/? | Not started | - |
| 2. Navigation Shell | 0/? | Not started | - |
| 3. Homepage + Content Sections | 0/? | Not started | - |
| 4. Destination Pages + Polish | 0/? | Not started | - |
