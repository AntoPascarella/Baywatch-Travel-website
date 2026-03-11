# Baywatch Travel — Project Memory

## Stack
- Next.js (App Router, `app/[locale]/`)
- Tailwind CSS v4
- next-intl / custom i18n via `getDictionary` + `Locale` type

## Key Files
- `components/DestinationCard.tsx` — destination card component (home + destinations page)
- `components/Header.tsx` — header with `bay-btn`/`bay-btn-light` CONTATTACI button
- `app/globals.css` — all design tokens, button/card utilities
- `data/destinations.ts` — `Destination` type; `shortDescription` is a plain `string` (not localized)
- `app/[locale]/page.tsx` — home page, renders DestinationCard in a 3-col grid

## Design Tokens (globals.css)
- `--font-display`: DM Serif Display (serif, luxury headings)
- `--font-inter`: Inter (body/UI)
- `--color-midnight`: #191970
- Button classes: `.btn`, `.bay-btn`, `.bay-btn-light`, `.bay-btn-dark`
- Shadow tokens: `--shadow-card`, `--shadow-card-hover`, `--shadow-elevated`

## CONTATTACI Button Style (.bay-btn)
Rectangular (border-radius: 0), border: 1px solid, padding: 10px 20px,
font-size: 10px, uppercase, letter-spacing: 0.15em, font-weight: 600.
Light variant: white text/border on transparent bg; hover → white bg, dark text.

## DestinationCard — Current Design (luxury INSPO style, Feb 2026)
- Full-image card with overlay (no content below image)
- `aspect-[3/4]`, no border-radius, `border border-black/[0.09]`
- Title (--font-futuramed, white, centered) in top overlay; description font 0.9375rem
- Description + "Scopri" CTA (`.bay-btn .bay-btn-light px-8 py-3 text-xs`) at bottom center
- Accepts `description?: string` prop — overrides `shortDescription` (used for i18n)
- Hover: `translateY(-6px)` + `shadow-[0_24px_64px_rgba(0,0,0,0.20)]`
- Two sibling `<Link>` elements (never nested): full-card link z-0 aria-hidden, CTA link z-10

## Destinations Section — page.tsx
- Section title: `--font-futura` (Josefin Sans), uppercase, `letterSpacing: 0.28em`, `clamp(0.6875rem,1.4vw,0.875rem)` — matches INSPO "CHOOSE A VOYAGE"
- Grid: `gap-x-4 gap-y-12 lg:gap-x-5 lg:gap-y-14` (tight columns, airy rows)
- Descriptions passed from `dict.destinations.descriptions[slug]` (locale-aware)

## i18n — Italian Descriptions
- `dictionaries/it.json` and `en.json` both have `destinations.descriptions` (keyed by slug)
- Covers: ischia, capri, procida, amalfi, positano, roma
- Access in page.tsx: `(dict.destinations.descriptions as Record<string,string>)[dest.slug]`
