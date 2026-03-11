# Requirements: Baywatch Travel — Editorial Redesign

**Defined:** 2026-03-11
**Core Value:** A prospective traveler lands on the site and immediately feels they've discovered something rare — a beautifully curated guide to South Italy that makes them want to book before they finish scrolling.

---

## v1 Requirements

### Design System

- [ ] **DESIGN-01**: Site uses a refined editorial color palette (ink, stone, sand, cream) replacing the current pastel/gradient template palette
- [ ] **DESIGN-02**: Typography system uses a serif/sans pairing with correct font loading (no flash), fluid type scale using `clamp()`, and eyebrow label pattern (Josefin Sans ALL CAPS, wide letter-spacing)
- [ ] **DESIGN-03**: All image containers have `rounded-none` (no border radius) — square-edged images are mandatory for editorial aesthetic
- [ ] **DESIGN-04**: Images use `object-position` focal point control to prevent bad auto-crops on cinematic photography
- [ ] **DESIGN-05**: Design tokens defined as CSS custom properties in `globals.css` and registered via `@theme inline` for Tailwind v4 utility access

### Navigation

- [ ] **NAV-01**: Header has a working mobile navigation (hamburger menu or slide-over) — currently completely absent on mobile
- [ ] **NAV-02**: Header transitions correctly between transparent (hero) and solid states on scroll
- [ ] **NAV-03**: Footer includes address, contact info, and social links (Instagram)

### Homepage

- [ ] **HOME-01**: Full-screen cinematic hero opens with a large Castello Aragonese background image and an evocative short headline evoking la dolce vita in Ischia
- [ ] **HOME-02**: Hero text overlay uses restrained typography — large serif display headline, minimal supporting text, single CTA — no decorative gradients or blob backgrounds
- [ ] **HOME-03**: 6 featured destination tabs displayed below hero in an asymmetric editorial grid (not a uniform 3-column catalogue grid): Ischia, Capri, Procida, Amalfi, Positano, Roma
- [ ] **HOME-04**: Each destination tab on the homepage correctly links to its individual destination detail page (`/[locale]/destinazioni/[slug]`)
- [ ] **HOME-05**: Destination cards render the destination `subTitle` as an editorial eyebrow label (e.g. "L'Isola Verde", "The Pearl of the Mediterranean")
- [ ] **HOME-06**: Short "Chi siamo" introductory paragraph placed below the destination tabs, explaining the agency's connection to Ischia and philosophy
- [ ] **HOME-07**: Services section presents 4 named service cards with editorial framing: Transfers, Hiking Experiences, Short & Long Stays, Thermal Parks — no prose paragraphs
- [ ] **HOME-08**: "Plan your trip" section includes a WhatsApp CTA button and email contact link (currently section has no CTA)
- [ ] **HOME-09**: Testimonial block displays 2-3 placeholder testimonials with placeholder names and trip context (to be replaced with real content)
- [ ] **HOME-10**: Partners section shows partner logos with names below (not just anonymous logos scrolling)

### Destinations

- [ ] **DEST-01**: Individual destination detail pages exist at `/[locale]/destinazioni/[slug]` for all 6 destinations: ischia, capri, procida, amalfi, positano, roma
- [ ] **DEST-02**: Each destination detail page has a full-screen editorial hero with the destination's primary image
- [ ] **DEST-03**: Each destination detail page shows: full description, highlights/points of interest, best season chip, destination type tags, and an inquiry CTA
- [ ] **DEST-04**: Destination listing page (`/destinazioni`) displays all 6 destinations in an editorial asymmetric card grid (not a uniform catalogue)
- [ ] **DEST-05**: All destination card links updated from `#slug` anchors to real routes (`/[locale]/destinazioni/[slug]`)
- [ ] **DEST-06**: Destination detail pages use `generateStaticParams` to statically generate all locale × slug combinations at build time

### Chi Siamo

- [ ] **ABOUT-01**: Full "Chi siamo" section tells the agency story: who we are, connection to Ischia, philosophy of travel, what makes us different — intimate, refined, warm tone
- [ ] **ABOUT-02**: Chi siamo section leads with the Ischia-local positioning ("Based on the island", insider expertise angle)

### Quality & Polish

- [ ] **QUAL-01**: All page routes have correct metadata (`<title>`, `<meta description>`, OG tags): home, destinations, destination detail pages, chi-siamo-contatti
- [ ] **QUAL-02**: Mobile layout works correctly at 390px: images crop sensibly, CTAs are tap-friendly, text is readable, sections have adequate padding
- [ ] **QUAL-03**: Scroll-triggered fade animations are restrained — sections fade in, not individual cards with visible stagger delays
- [ ] **QUAL-04**: The destinations page hero eliminates the pastel gradient blob background, replaced with a clean editorial treatment

---

## v2 Requirements

### Content-Dependent (add when assets/content arrive)

- **CONT-01**: Real client testimonials with names and trip descriptions replace placeholder content
- **CONT-02**: "Best season" chips rendered on destination cards in the listing grid
- **CONT-03**: Video content in VideoTextSection (currently placeholder — replace when agency provides footage)
- **CONT-04**: Real office/team photography in ServicesSection (currently 404ing placeholder)
- **CONT-05**: Social media links populated in footer when channels are active
- **CONT-06**: Tour guide services added to Services section when service is defined

---

## Out of Scope

| Feature | Reason |
|---------|--------|
| Online booking / payment | High-touch boutique model — conversation is the product, not checkout |
| Reviews widget (TripAdvisor, Google Stars) | Uncontrollable aesthetics; destroys editorial brand feeling |
| Destination search / filter | With 6 destinations, filters are OTA-style overhead |
| Pop-up lead capture | Destroys the "rare discovery" feeling for affluent travelers |
| Real-time availability calendar | Wrong model — availability discussed in inquiry |
| User accounts / login | No personalization needed for v1 |
| Blog / CMS | Static content correct for v1; editorial content lives in destination pages |
| Chat widget (Intercom, Drift) | WhatsApp already in place; third-party widgets add GDPR overhead and look generic |
| Animations on every interaction | Excessive motion distracts from imagery — only restrained scroll fade |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| DESIGN-01 | Phase 1 | Pending |
| DESIGN-02 | Phase 1 | Pending |
| DESIGN-03 | Phase 1 | Pending |
| DESIGN-04 | Phase 1 | Pending |
| DESIGN-05 | Phase 1 | Pending |
| NAV-01 | Phase 2 | Pending |
| NAV-02 | Phase 2 | Pending |
| NAV-03 | Phase 2 | Pending |
| HOME-01 | Phase 3 | Pending |
| HOME-02 | Phase 3 | Pending |
| HOME-03 | Phase 3 | Pending |
| HOME-04 | Phase 3 | Pending |
| HOME-05 | Phase 3 | Pending |
| HOME-06 | Phase 3 | Pending |
| HOME-07 | Phase 3 | Pending |
| HOME-08 | Phase 3 | Pending |
| HOME-09 | Phase 3 | Pending |
| HOME-10 | Phase 3 | Pending |
| DEST-01 | Phase 4 | Pending |
| DEST-02 | Phase 4 | Pending |
| DEST-03 | Phase 4 | Pending |
| DEST-04 | Phase 4 | Pending |
| DEST-05 | Phase 4 | Pending |
| DEST-06 | Phase 4 | Pending |
| ABOUT-01 | Phase 3 | Pending |
| ABOUT-02 | Phase 3 | Pending |
| QUAL-01 | Phase 4 | Pending |
| QUAL-02 | Phase 4 | Pending |
| QUAL-03 | Phase 4 | Pending |
| QUAL-04 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 28 total
- Mapped to phases: 28
- Unmapped: 0 ✓

---
*Requirements defined: 2026-03-11*
*Last updated: 2026-03-11 after initial definition*
