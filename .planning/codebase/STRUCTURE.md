# Codebase Structure

**Analysis Date:** 2026-03-11

## Directory Layout

```
baywatch-travel-website/
├── app/                      # Next.js App Router
│   ├── [locale]/            # Locale-dynamic routes
│   │   ├── page.tsx         # Home page (/)
│   │   ├── layout.tsx       # Root layout (fonts, metadata, html setup)
│   │   ├── destinazioni/    # Destinations page
│   │   │   └── page.tsx
│   │   └── chi-siamo-contatti/  # Contact/About page
│   │       └── page.tsx
│   ├── api/                 # API routes
│   │   └── contact/
│   │       └── route.ts     # POST endpoint for contact form
│   └── globals.css          # Global styles, design tokens, @theme rules
├── components/              # Reusable UI components
│   ├── Header.tsx           # Fixed navigation header
│   ├── Footer.tsx           # Page footer
│   ├── ContactForm.tsx      # Contact form with React Hook Form
│   ├── DestinationCard.tsx  # Destination display card
│   ├── FadeIn.tsx           # Entrance animation wrapper
│   ├── WhatsAppButton.tsx   # Floating WhatsApp CTA
│   ├── PartnersSection.tsx  # Partners marquee section
│   ├── ReviewSection.tsx    # Customer review quote section
│   ├── ServicesSection.tsx  # Services/about split section
│   ├── PlanTripSection.tsx  # Trip planning CTA section
│   ├── VideoTextSection.tsx # Video + descriptive text section
│   ├── LangSwitcher.tsx     # Language toggle component
│   └── hooks/               # Custom React hooks
│       └── useHeaderState.ts # Scroll state management for header
├── data/                    # Static data structures
│   ├── destinations.ts      # Destination metadata array
│   └── partners.ts          # Partner companies/logos
├── lib/                     # Utilities and helpers
│   └── i18n/
│       └── get-dictionary.ts # Async dictionary loader with 'server-only' guard
├── dictionaries/            # Translation files
│   ├── en.json             # English translations
│   └── it.json             # Italian translations
├── public/                  # Static assets
│   ├── images/
│   │   ├── destinations/   # Per-destination images
│   │   ├── hero/          # Hero section backgrounds
│   │   └── partners/      # Partner logos
│   ├── fonts/             # Custom font files
│   ├── file.svg           # (empty/placeholder)
│   └── globe.svg          # (empty/placeholder)
├── memory/                  # Custom state persistence (reserved)
├── middleware.ts            # Locale detection and routing
├── i18n-config.ts          # i18n configuration (locales, defaults)
├── next.config.ts          # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── .next/                  # Build output (generated)
```

## Directory Purposes

**app/[locale]/**
- Purpose: Server-rendered pages with locale context
- Contains: Page components (page.tsx), layout wrapper (layout.tsx), metadata
- Key files: `layout.tsx` (root setup), `page.tsx` (home), `destinazioni/page.tsx`, `chi-siamo-contatti/page.tsx`

**app/api/**
- Purpose: Backend API routes
- Contains: Route handlers for form submissions and data endpoints
- Key files: `contact/route.ts` (POST handler for contact form)

**components/**
- Purpose: Reusable UI building blocks
- Contains: Layout components (Header, Footer), section components, forms, cards, animations, custom hooks
- Key files:
  - Section components: `Header.tsx`, `Footer.tsx`, `PartnersSection.tsx`, `ServicesSection.tsx`, `ReviewSection.tsx`, `PlanTripSection.tsx`, `VideoTextSection.tsx`
  - Feature components: `ContactForm.tsx`, `DestinationCard.tsx`, `FadeIn.tsx`, `WhatsAppButton.tsx`, `LangSwitcher.tsx`
  - Hooks: `hooks/useHeaderState.ts`

**data/**
- Purpose: Static, application-wide data
- Contains: TypeScript-typed data structures and arrays
- Key files: `destinations.ts` (Destination type + 12-item array), `partners.ts`

**lib/i18n/**
- Purpose: Internationalization utilities
- Contains: Dictionary loading logic with server-only enforcement
- Key files: `get-dictionary.ts` (async loader for JSON dictionaries)

**dictionaries/**
- Purpose: Translation content
- Contains: JSON files with all UI strings for each locale
- Key files: `en.json` (English), `it.json` (Italian)

**public/**
- Purpose: Static assets served directly
- Contains: Images (destinations, hero, partners), fonts, SVGs
- Key files:
  - Images: `images/destinations/`, `images/hero/`, `images/partners/`
  - Fonts: `fonts/` (if any)

**middleware.ts**
- Purpose: Per-request middleware before page routing
- Contains: Locale detection logic, browser Accept-Language header parsing
- Pattern: Used by Next.js automatically for matching routes

**i18n-config.ts**
- Purpose: Centralized i18n configuration
- Contains: Locale list, default locale, Locale type definition
- Key exports: `i18n` object, `Locale` type

**lib/**
- Purpose: Shared utilities and helpers
- Contains: i18n submodule currently; can grow with utility functions
- Pattern: Import as `@/lib/...` via path alias

## Key File Locations

**Entry Points:**
- `app/[locale]/layout.tsx`: Root HTML setup, font loading, metadata
- `app/[locale]/page.tsx`: Home page (hero + featured destinations + services + review + partners)
- `app/[locale]/destinazioni/page.tsx`: All destinations grid
- `app/[locale]/chi-siamo-contatti/page.tsx`: Contact form + info cards
- `middleware.ts`: Locale redirect logic (runs before all routes)

**Configuration:**
- `tsconfig.json`: Path alias `@/*` → root, strict mode enabled
- `next.config.ts`: Image optimization settings (SVG support, CSP)
- `postcss.config.mjs`: PostCSS + Tailwind setup
- `i18n-config.ts`: Locale definitions and defaults

**Core Logic:**
- `data/destinations.ts`: Destination metadata (12 locations: Ischia, Capri, Procida, Napoli, Sorrento, Amalfi, Pompei, Sicilia, Sardegna, Roma, Toscana, Positano)
- `lib/i18n/get-dictionary.ts`: Lazy-load translations per locale
- `components/hooks/useHeaderState.ts`: Scroll state detection (three states: top, scrolled, top-overscroll)
- `app/api/contact/route.ts`: Form submission handler

**Styling:**
- `app/globals.css`: Design tokens (colors, typography scales, spacing, shadows, animations), @theme declarations
- Component styles: Inline Tailwind classes via className attributes

**Static Content:**
- `dictionaries/en.json`: English UI strings (home, destinations, contact, forms)
- `dictionaries/it.json`: Italian UI strings

## Naming Conventions

**Files:**
- Pages: `page.tsx` (Next.js convention)
- Layouts: `layout.tsx` (Next.js convention)
- API routes: `route.ts` (Next.js convention)
- Components: PascalCase (e.g., `Header.tsx`, `DestinationCard.tsx`)
- Utilities: camelCase (e.g., `get-dictionary.ts`)
- Hooks: camelCase prefixed with `use` (e.g., `useHeaderState.ts`)
- Data files: camelCase (e.g., `destinations.ts`, `partners.ts`)
- Styles: `globals.css` for global, component styles inline

**Directories:**
- Features: lowercase with hyphens if multi-word (e.g., `destinazioni`, `chi-siamo-contatti`, `api/contact`)
- Dynamic segments: brackets (e.g., `[locale]`)
- Component groups: lowercase (e.g., `components/hooks`)

**TypeScript/Variables:**
- Types: PascalCase (e.g., `Destination`, `FormLabels`, `HeaderState`)
- Constants: UPPER_SNAKE_CASE or camelCase (e.g., `destinations` array is exported as camelCase)
- Props interfaces: Component name + `Props` suffix OR inline with destructuring

**CSS/Design:**
- CSS variables: `--kebab-case` (e.g., `--color-cream`, `--section-py`, `--font-display`)
- Color palette: `--color-{name}` (e.g., `--color-midnight`, `--color-sea-blue-dark`)
- Tailwind classes: Utility-first approach (no custom component classes except globals)

## Where to Add New Code

**New Feature (e.g., Blog, Testimonials, Booking):**
- Primary code: `app/[locale]/{feature-name}/page.tsx` (page component)
- Components: `components/{FeatureName}.tsx` or `components/{feature-name}/` (sub-components)
- Data: `data/{feature-name}.ts` (if needed)
- Translations: Add strings to `dictionaries/en.json` and `dictionaries/it.json`
- Styling: Use existing design tokens from `globals.css`, add inline Tailwind classes

**New Component:**
- Implementation: `components/{ComponentName}.tsx`
- If client-side: Add `'use client'` directive at top
- Accept locale via props for i18n (or pass dict as prop)
- Export as default export

**New Hook:**
- Implementation: `components/hooks/use{HookName}.ts`
- Pattern: Follow `useHeaderState.ts` (client-side, document dependencies)

**New API Endpoint:**
- Implementation: `app/api/{resource}/route.ts`
- Pattern: Export named function `GET`, `POST`, etc. using Next.js handler signature
- Return `NextResponse` JSON responses

**Utilities/Helpers:**
- Shared logic: `lib/{feature}/` (create subdirectory if needed)
- Import via `@/lib/{feature}/{file}`

**Database/Backend (if added in future):**
- ORM models: `lib/db/models/`
- Database client: `lib/db/client.ts`
- Server actions: `lib/actions/` (if using Next.js Server Actions)

## Special Directories

**public/**
- Purpose: Static files served at root URL
- Generated: No (manually managed)
- Committed: Yes (all images and fonts committed to git)
- Access: Import images in code as `/images/...` (relative to public root)

**.next/**
- Purpose: Next.js build output
- Generated: Yes (created by `npm run build`)
- Committed: No (should be in .gitignore)

**memory/**
- Purpose: Currently unused; reserved for potential state persistence
- Generated: Unknown (appears to be placeholder)
- Committed: Yes (exists in repo)

**dictionaries/**
- Purpose: Translation JSON files
- Generated: No (manually edited)
- Committed: Yes (part of source)

---

*Structure analysis: 2026-03-11*
