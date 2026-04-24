# Feature Research

**Domain:** Premium editorial boutique travel agency — South Italy (Ischia-based)
**Researched:** 2026-03-11
**Confidence:** HIGH (site audit + deep knowledge of comparable editorial travel brands)

---

## Context: What the Existing Site Already Has

Before cataloguing features, it is worth noting what is already scaffolded so that research focuses on gaps and redesign quality rather than net-new build:

- Full-screen hero with image + headline + CTA
- 6-destination card grid on homepage
- Video + text split section
- Services / about split section (text + office photo)
- Single editorial testimonial / review quote section with background image
- "Plan your trip" text CTA section
- Partners logo marquee
- Header + footer + WhatsApp float button
- Contact page: info cards + form + WhatsApp CTA
- Destinations listing page: gradient hero + card grid
- i18n (IT / EN) throughout
- Individual destination detail pages: NOT YET BUILT

The redesign mission is: make every existing section achieve editorial premium quality, and add what is missing for a boutique South Italy agency targeting affluent travelers.

---

## Feature Landscape

### Table Stakes (Users Expect These)

Features affluent travelers assume exist on a premium travel site. Missing these destroys trust or feels incomplete.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Full-screen cinematic hero with strong headline | Every premium travel site starts with a visual declaration — absence feels generic or unfinished | LOW | Already exists; redesign = typography refinement and overlay tuning |
| Individual destination detail pages | Clicking a destination card and hitting a dead anchor (#slug) instead of a real page breaks trust immediately | MEDIUM | Currently links to `#slug` on the destinations listing, not a dedicated page — this is the single biggest functional gap |
| Clear services list with named offerings | Affluent buyers need to know exactly what to ask for before contacting you; vague "we do it all" is a red flag | LOW | Currently one prose paragraph in ServicesSection — needs structured service cards or named list |
| Contact form with field-level feedback | Standard expectation; broken or poorly validated forms signal an amateurish operation | LOW | Already exists via React Hook Form + Zod; needs visual polish |
| WhatsApp CTA (primary for Italian agencies) | Italian travel agencies are WhatsApp-first; a floating button is expected, not a differentiator | LOW | Already exists |
| About / team section with genuine content | Boutique travelers want to know who they are trusting their holiday with; a faceless agency loses to OTAs | LOW | Currently a single paragraph + office photo placeholder — needs expansion |
| Responsive mobile layout | 60%+ of discovery traffic is mobile; a site that breaks on phone is disqualifying | MEDIUM | Existing layout is mobile-first but image-heavy sections need mobile-specific cropping and spacing review |
| Language toggle (IT / EN) | Italian agency targeting international affluent travelers must be bilingual | LOW | Already exists |
| Footer with address, contact, social | Legitimacy signal — missing or skeleton footer is a trust killer | LOW | Already exists; needs social links if any are active |
| Image-dominant presentation | For travel, images are the product — text-heavy or stock-photo pages feel like a brochure from 2005 | MEDIUM | Already the design intent; execution needs the right image-to-text ratio per section |
| Page metadata (title, description) | SEO and social sharing credibility; a tab that reads "localhost:3000" when shared is embarrassing | LOW | Partially done on destinations page — needs audit across all routes |

### Differentiators (Competitive Advantage)

Features that separate a boutique editorial agency from generic travel sites and OTAs. These are where Baywatch Travel should compete.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Editorial destination pages (not spec sheets) | Each destination feels like a magazine spread, not a hotel listing — evokes desire, not information | MEDIUM | The data model (highlights, bestSeason, types) exists; the page template does not. Editorial copy + hero image + pull-quote + highlights section = the priority build |
| "La dolce vita" opening manifesto section | Instead of "we are a travel agency," an opening section that declares a philosophy — slow travel, authenticity, local knowledge — signals a different kind of company | LOW | The VideoTextSection is the slot for this; currently it just describes services. Rewriting copy + replacing placeholder video with a proper evocative still image is the quick win |
| Named services with evocative framing | "Thermal park experiences" vs "Hiking in the Ischian hills at dawn" — editorial naming of services creates desire rather than just listing capabilities | LOW | No new tech; just rewriting ServicesSection with named cards or a structured list with short editorial descriptions |
| Testimonials with specificity and attribution | A single quote from "Marco R." is weak. A testimonial with a specific trip ("We spent 5 days exploring Ischia and Sant'Angelo with their guide — it changed how we see travel") attributed to a real name and nationality signals genuine experience | LOW | ReviewSection currently shows one placeholder quote — should become a proper testimonial block with 2-3 curated quotes, names, and optionally a trip name |
| Destination micro-subtitles (evocative framing) | Each destination already has a subtitle in the data (e.g., "L'Isola Verde", "The Pearl of the Mediterranean") — surfacing these consistently on cards and detail pages adds editorial voice | LOW | The DestinationCard does not currently render destination.subTitle — a one-line change with real design impact |
| "Best season" and "type" chips on destination cards | Helps affluent travelers self-select without needing to read everything; a small editorial curation signal | LOW | Data already exists (bestSeason, types) on each destination; just not rendered on cards |
| Inquiry-first conversion with WhatsApp as primary | High-touch agencies should make WhatsApp feel prestigious, not like a workaround. A dedicated "Plan your trip" section with a WhatsApp-first CTA (not just the floating button) signals that conversation is the product | LOW | PlanTripSection exists but has no CTA button — add a WhatsApp link + email link as styled CTAs |
| Partners section with named relationships | Logos scrolling anonymously is generic. If Baywatch Travel has named partners (ferry companies, thermal parks, private villas), naming them in context ("We work with Terme di Poseidon to offer exclusive access") elevates credibility | LOW | PartnersSection currently scrolls unnamed logos — at minimum add partner names below logos |
| Ischia-specific local expertise signal | No other agency leads from Ischia. Leaning into the hyper-local angle ("Based on the island since [year]", "Our guides know every path") is a genuine differentiator vs Amalfi-coast-generic agencies | LOW | Currently absent — the about section should lead with this |
| Atmospheric photography that signals insider access | Images of secret coves, off-season Procida, dawn light on Castello Aragonese — not the same 5 tourist shots everyone uses. The right image selection alone differentiates. | MEDIUM | Depends on photography assets; design should accommodate tall/cinematic crops (3:4 or even 2:3) not landscape thumbnails |
| IT/EN copy that reflects the same editorial voice in both languages | Most bilingual travel sites machine-translate or have flat EN copy. If the Italian reads with personality and so does the English, it signals a brand that respects both audiences | LOW | Currently handled via dictionary files — the redesign should include a copy pass on both languages |

### Anti-Features (Deliberately NOT Build)

| Feature | Why It Gets Requested | Why It's Wrong Here | Alternative |
|---------|----------------------|---------------------|-------------|
| Online booking / payment flow | "Competitors have instant booking" | High-touch boutique positioning is destroyed by a generic checkout. Affluent travelers expect a conversation, not a cart. Also: enormous technical complexity for v1. | Inquiry form + WhatsApp CTA — make the conversation feel premium, not the booking engine |
| Reviews / ratings widget (TripAdvisor embed, Google Stars) | Social proof | Widget aesthetics are uncontrollable and look generic/corporate. The star rating frame makes a boutique feel like a commodity. | Curated editorial testimonials with names and trip context — same social proof, editorial control |
| Destination filter / search bar | "Users need to find things quickly" | With 6-12 destinations, filtering is UI overhead that makes the site feel like an OTA. Discovery through editorial presentation is the differentiator. | Clear visual grid with type tags (Beach, Culture, etc.) as readable metadata, not interactive filters |
| Pop-up lead capture / newsletter signup | Lead generation | Nothing kills the "rare discovery" feeling faster than a pop-up. Affluent travelers exit sites that do this. | WhatsApp CTA in natural section breaks and a plan-your-trip section — opt-in intent, not interruption |
| Real-time availability / calendar | "Users want to know if dates are free" | Wrong model entirely. This is a bespoke service — availability is discussed in the inquiry. A broken or always-open calendar would mislead. | Clear copy: "Availability is discussed directly — contact us to plan your dates" |
| User accounts / login | "Returning customers" | Entirely premature for v1. Adds authentication complexity with zero current benefit. | If returning customer management becomes needed, a CRM or simple email follow-up handles it without website login |
| Blog / CMS | "Content marketing will drive SEO" | Static content is the right call for v1. A CMS adds infrastructure complexity. An empty or thin blog hurts more than no blog. | If editorial content is needed, individual destination pages with rich copy ARE the editorial content — no separate blog needed |
| Animated transitions on every interaction | "Premium sites have animations" | Excessive animation slows perceived performance and distracts from imagery. The reference site (Sailing Collective) uses very restrained motion. | Subtle fade-in on scroll (already implemented via FadeIn component), hover scale on cards — nothing more |
| Chat widget (Intercom, Drift, etc.) | "Customers need live chat" | Third-party chat widgets add cookie/GDPR overhead, look generic, and are often unmanned at relevant hours for an Ischia-based agency. | WhatsApp is the equivalent and is already in place — it is asynchronous, personal, and expected by Italian agencies |

---

## Feature Dependencies

```
Individual Destination Detail Pages
    └──requires──> Destination data model (EXISTS in data/destinations.ts)
    └──requires──> Page routing at /[locale]/destinazioni/[slug]/page.tsx (NOT YET BUILT)
    └──requires──> Editorial copy per destination (NOT YET WRITTEN)
    └──requires──> Hero image per destination (PARTIALLY — 5/12 have real images)

DestinationCard → detail page
    └──currently links to──> #slug anchor (WRONG)
    └──should link to──> /[locale]/destinazioni/[slug] (needs routing fix)

PlanTripSection CTA
    └──enhances──> ContactForm (routes traffic to the right conversion point)
    └──enhances──> WhatsAppButton (gives WhatsApp a named section entry point)

Services named cards
    └──enhances──> About/Chi siamo section (services and story reinforce each other)

Testimonials block
    └──requires──> Real testimonial content (agency must supply)
    └──enhances──> ReviewSection (replaces current single placeholder)

Partners section named relationships
    └──requires──> Partner names / context copy (agency must supply)
    └──enhances──> PartnersSection (adds meaning to logo marquee)
```

### Dependency Notes

- **Destination detail pages require routing fix:** The current DestinationCard links to `#slug` on the destinations listing page. Before any editorial content can be presented, the route `/[locale]/destinazioni/[slug]` must be created and cards must link to it.
- **Editorial copy is a content dependency, not a tech dependency:** Several differentiating features (evocative service names, manifesto copy, testimonials) require content decisions from the agency, not just development work.
- **Photography is a design constraint:** The editorial aesthetic depends on having cinematic, high-quality images. Where images are missing (svg placeholders for Napoli, Sorrento, Pompei, Sicilia, Sardegna, Toscana), the design must handle graceful placeholder states.

---

## MVP Definition

### Launch With (v1 — the editorial redesign)

- [x] Cinematic full-screen hero with refined typography and evocative headline (EXISTS, needs polish)
- [ ] Individual destination detail pages at `/[locale]/destinazioni/[slug]` — the single biggest functional gap
- [ ] Fix DestinationCard href from `#slug` to `/[locale]/destinazioni/[slug]`
- [ ] Render destination.subTitle on DestinationCard (one-line change, immediate editorial lift)
- [ ] ServicesSection: replace prose paragraph with named service cards (4-6 services)
- [ ] About section: expand to include Ischia-local positioning, who-we-are, philosophy paragraph
- [ ] ReviewSection: replace placeholder with 2-3 real testimonials with names and trip context
- [ ] PlanTripSection: add WhatsApp CTA button (currently section has no CTA)
- [ ] PartnersSection: add partner names below logos (or remove if partners remain anonymous)
- [ ] All page metadata (title, description, OG tags) across all routes
- [ ] Mobile layout audit: image cropping, spacing, CTA tap targets at 390px viewport

### Add After Validation (v1.x)

- [ ] "Best season" and "type" chips rendered on DestinationCards — add when images are in place and layout has room
- [ ] Evocative video in VideoTextSection — currently placeholder; add when agency provides footage
- [ ] Office / team photo in ServicesSection — currently 404ing placeholder; add when photo is supplied
- [ ] Expanded Chi siamo page with fuller brand story and possibly team photos
- [ ] Social links in footer (Instagram especially — visual travel content is Instagram-native)

### Future Consideration (v2+)

- [ ] CMS for destination content — when the agency wants to update copy without code changes
- [ ] Blog / editorial journal — only if there is a content production commitment
- [ ] Dynamic testimonials — only if there are enough to rotate
- [ ] Structured data / Schema.org for destination pages — SEO value once content is solid

---

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Individual destination detail pages | HIGH | MEDIUM | P1 |
| Fix DestinationCard href to real page | HIGH | LOW | P1 |
| Named service cards (replacing prose paragraph) | HIGH | LOW | P1 |
| Destination subTitle rendered on cards | MEDIUM | LOW | P1 |
| About section — local positioning + philosophy | HIGH | LOW | P1 |
| Testimonials with real content | HIGH | LOW | P1 |
| PlanTripSection WhatsApp CTA button | HIGH | LOW | P1 |
| All page metadata | MEDIUM | LOW | P1 |
| Mobile layout audit | HIGH | MEDIUM | P1 |
| Best season / type chips on cards | MEDIUM | LOW | P2 |
| Partner names in marquee | LOW | LOW | P2 |
| Video in VideoTextSection | MEDIUM | LOW (tech) / HIGH (content) | P2 |
| Team / office photography | MEDIUM | LOW (tech) / HIGH (content) | P2 |
| Social media links in footer | LOW | LOW | P2 |
| CMS integration | MEDIUM | HIGH | P3 |
| Editorial journal / blog | MEDIUM | HIGH | P3 |

**Priority key:**
- P1: Must have for the editorial redesign to feel complete and trustworthy
- P2: Meaningful improvement, add when assets/content are available
- P3: Future investment, defer until content strategy is clearer

---

## Competitor Feature Analysis

Reference sites analyzed: Sailing Collective Journal, Mr & Mrs Smith (boutique hotels), Aman Resorts (ultra-premium), classic.com (curated car / travel editorial).

| Feature | Sailing Collective Journal | Mr & Mrs Smith | Our Approach |
|---------|---------------------------|----------------|--------------|
| Homepage hero | Full-screen image, minimal text overlay, single CTA | Large image with editorial caption | Full-screen cinematic image, serif headline, single CTA — matches intent |
| Destination presentation | Individual editorial posts, long-form | Card grid linking to full hotel profiles | Individual editorial pages per destination — closer to Mr & Mrs Smith than a blog post |
| Services | Not applicable (editorial, not agency) | Curated via taste editors; no services page | Named service cards with editorial framing — not a bullet list |
| About / story | Founders' story told as narrative | "Our story" with founder photography | Philosophy paragraph + local Ischia positioning — personal, not corporate |
| Social proof | Social media embeds, community | "Trusted by" press mentions | 2-3 curated testimonials with trip context — more intimate than press logos |
| Conversion | Newsletter + trip planning links | Direct hotel booking | Inquiry form + WhatsApp — appropriate for high-touch boutique model |
| Mobile | Image-dominant, single column | Full-width cards, stacked | Full-width images, generous padding, touch-friendly CTAs |
| Navigation | Minimal — Logo + 3-4 links | Minimal — Logo + search | Minimal — Logo + 3 nav items + contact CTA |

---

## Sources

- Existing codebase audit: `/components/`, `/app/[locale]/`, `/data/destinations.ts`
- Project goals: `.planning/PROJECT.md`
- Reference brand: https://journal.sailingcollective.com (visual reference per PROJECT.md)
- Comparable premium editorial travel brands: Mr & Mrs Smith, Aman, Condé Nast Traveller digital
- Pattern analysis from editorial site category: spacious layout, image dominance, minimal navigation, inquiry-first conversion
- Confidence note: Competitor feature claims based on well-established brands with stable design patterns; no live scraping performed (WebFetch/WebSearch unavailable in this session)

---

*Feature research for: Baywatch Travel — premium editorial travel website, South Italy*
*Researched: 2026-03-11*
