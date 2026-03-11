# Baywatch Travel — Website

## What This Is

A premium editorial travel website for Baywatch Travel, an Ischia-based travel agency specialising in curated South Italy experiences. The site serves as both a discovery platform and a conversion tool, presenting destinations like Ischia, Capri, Procida, Amalfi, Positano, and Rome through the lens of a beautifully art-directed online travel magazine — not a corporate agency site.

The experience is built on the editorial logic of reference sites like the Sailing Collective Journal: image-dominant, story-first, spacious, cinematic, and elegantly modular.

## Core Value

A prospective traveler lands on the site and immediately feels they've discovered something rare — a beautifully curated guide to South Italy that makes them want to book before they finish scrolling.

## Requirements

### Validated

- ✓ Next.js 16 App Router with locale routing (IT/EN) — existing
- ✓ Contact form with React Hook Form + Zod validation — existing
- ✓ Basic destination card component — existing
- ✓ Header / Footer — existing
- ✓ Page scaffolding: home, /destinazioni, /chi-siamo-contatti — existing
- ✓ WhatsApp floating CTA button — existing
- ✓ Partners section — existing
- ✓ i18n infrastructure (IT/EN dictionaries) — existing

### Active

- [ ] Full-screen hero with Castle of Ischia image and evocative la dolce vita copy
- [ ] 6 featured destination tabs on homepage (Ischia, Capri, Procida, Amalfi, Positano, Roma)
- [ ] Short "Chi siamo" intro paragraph on homepage
- [ ] Dedicated destinations section — all 6 with editorial card layout, each linking to detail page
- [ ] Individual destination detail pages with full description, highlights, and photo
- [ ] Services section (transfers, hiking, short/long stays, tour guides, thermal parks, curated experiences)
- [ ] Full "Chi siamo" section — brand story, philosophy, connection to Ischia, editorial tone
- [ ] Complete visual redesign: editorial typography system, cinematic image dominance, spacious layout
- [ ] Premium design system: color palette, spacing, type scale matching Sailing Collective aesthetic
- [ ] Responsive layout — mobile-first, image-led at all breakpoints

### Out of Scope

| Feature | Reason |
|---------|--------|
| Online booking / payment | High-touch service model — inquiries drive conversion |
| User accounts / login | No personalization needed for v1 |
| Blog / CMS | Editorial content is static for now |
| Real-time availability | Not needed — inquiry model |

## Context

**Brand:** Baywatch Travel — travel agency rooted in Ischia, South Italy. Guides travelers through the island and surrounding destinations with authenticity and local expertise.

**Visual Reference:** https://journal.sailingcollective.com/ — editorial layout logic, typography treatment, image dominance, modular sections, cinematic mood. Understated luxury, not corporate.

**Design Target:** Premium Mediterranean editorial brand. Think beautifully art-directed online magazine, not travel booking engine. La dolce vita atmosphere, slow living, curated discovery.

**Destinations (v1):** Ischia, Capri, Procida, Amalfi, Positano, Roma

**Photography:** Some images already in `/public/images/`. Additional images will be added over time. Design must accommodate placeholder states gracefully.

**Stack:** Next.js 16, TypeScript, Tailwind CSS v4, App Router. All styling via Tailwind + CSS custom properties in `globals.css`. i18n via async dictionary loading.

**Language:** Site supports both Italian and English. "Chi siamo" = "About us". "Destinazioni" = "Destinations".

## Constraints

- **Tech stack:** Next.js 16 + Tailwind CSS v4 — no framework changes
- **No CMS:** All content is static (data files + hardcoded copy) for v1
- **Photos:** Some exist, placeholders acceptable for missing ones
- **Brand tone:** Intimate, refined, warm — never corporate, never template-looking

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Keep existing Next.js + Tailwind stack | Brownfield — no reason to change working infrastructure | — Pending |
| Inquiry-first conversion model | High-touch travel service, not commodity booking | — Pending |
| Static content (no CMS) | Fastest path to quality result, agency updates infrequently | — Pending |
| Editorial aesthetic over marketing aesthetic | Differentiates from generic travel agency sites, builds trust | — Pending |

---
*Last updated: 2026-03-11 after initialization*
