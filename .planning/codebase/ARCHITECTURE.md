# Architecture

**Analysis Date:** 2026-03-11

## Pattern Overview

**Overall:** Next.js App Router with Server Components and Client-Side Interactivity

**Key Characteristics:**
- File-based routing with dynamic locale segments (`[locale]`)
- Hybrid server/client component architecture
- Internationalization (i18n) via middleware and async dictionary loading
- Static content delivery with dynamic navigation
- Form handling with client-side validation (React Hook Form + Zod)
- Observability patterns for scroll state and animations

## Layers

**Page/Route Layer:**
- Purpose: Define routes and handle locale-aware rendering
- Location: `app/[locale]/` (page.tsx files), `app/api/` (API routes)
- Contains: Server components that load dictionaries, fetch data, and compose page content
- Depends on: Data layer, i18n layer, component library
- Used by: Browser requests via Next.js routing

**Component Layer:**
- Purpose: Reusable UI components for sections, forms, and interactive elements
- Location: `components/` directory
- Contains: Server and client components (marked with 'use client' where needed)
- Depends on: Data types, i18n (via props), custom hooks
- Used by: Page components, other components (composition)

**Data Layer:**
- Purpose: Provide static and dynamic data structures
- Location: `data/destinations.ts`, `data/partners.ts`
- Contains: Destination array (TypeScript-typed), partner information
- Depends on: Type definitions
- Used by: Pages and cards for rendering content

**I18n Layer:**
- Purpose: Manage localization and translation
- Location: `lib/i18n/get-dictionary.ts`, `i18n-config.ts`, `dictionaries/` (JSON)
- Contains: Dictionary loaders, locale configuration, translation files
- Depends on: None (core i18n utilities)
- Used by: Pages, layout, middleware

**Styling Layer:**
- Purpose: Design tokens, typography scales, and utility classes
- Location: `app/globals.css`, Tailwind CSS config
- Contains: CSS custom properties (design tokens), @theme declarations, animations
- Depends on: Tailwind CSS framework
- Used by: All components via className attributes

**Middleware Layer:**
- Purpose: Handle locale detection and routing before page render
- Location: `middleware.ts`
- Contains: Locale matching logic, request header negotiation
- Depends on: `@formatjs/intl-localematcher`, `negotiator`
- Used by: Next.js automatically for all non-API routes

**Hooks Layer:**
- Purpose: Custom React hooks for component logic
- Location: `components/hooks/`
- Contains: `useHeaderState` (scroll state management)
- Depends on: React browser APIs (scroll, wheel, touch events)
- Used by: Client components needing stateful logic

## Data Flow

**Page Load Flow:**

1. Browser requests `/` or `/destinazioni` (without locale)
2. Middleware (`middleware.ts`) detects locale from Accept-Language header
3. Middleware redirects to `/{locale}/destinazioni`
4. Next.js routes to `app/[locale]/destinazioni/page.tsx`
5. Server component awaits `getDictionary(locale)` async function
6. `getDictionary` dynamically imports locale-specific JSON from `dictionaries/`
7. Page imports static data from `data/destinations.ts`
8. Page composes UI by importing client components, passing data and translations as props
9. HTML renders with locale-aware content

**Form Submission Flow:**

1. User fills form in `ContactForm` (client component)
2. React Hook Form validates input against Zod schema
3. If valid, form submits POST to `/api/contact` endpoint
4. API route (`app/api/contact/route.ts`) receives JSON payload
5. Route responds with `{ status: 'ok', message: 'Message received' }`
6. Client component displays success state and offers reset

**Scroll State Flow:**

1. Header component imports `useHeaderState` hook
2. Hook sets up scroll listeners with `requestAnimationFrame` for performance
3. Hook detects three states: 'top', 'scrolled', 'top-overscroll'
4. Header visual changes based on state (transparent → white translucent)
5. Logo size changes via `isCompact` flag

## Key Abstractions

**Destination:**
- Purpose: Represent a travel destination with metadata
- Examples: `data/destinations.ts` defines `Destination` type and array
- Pattern: Immutable TypeScript-typed data structure, imported by pages and cards

**Dictionary:**
- Purpose: Hold all localized strings for a locale
- Examples: `dictionaries/it.json`, `dictionaries/en.json`
- Pattern: Async-loaded JSON, lazy-imported per-route, passed as props to components

**Layout Wrapper:**
- Purpose: Consistent page structure across routes
- Examples: Root layout in `app/[locale]/layout.tsx`
- Pattern: Async server component with font setup, metadata, HTML element configuration

**Section Component:**
- Purpose: Reusable full-width content sections
- Examples: `PartnersSection`, `ServicesSection`, `ReviewSection`, `PlanTripSection`
- Pattern: Accepts dict/content via props, handles internal layout and styling

**Animation Wrapper (FadeIn):**
- Purpose: Entrance animation with accessibility support
- Examples: `components/FadeIn.tsx`
- Pattern: Wraps children, uses IntersectionObserver for trigger, respects prefers-reduced-motion

## Entry Points

**Web Application:**
- Location: `app/[locale]/page.tsx` (home page)
- Triggers: User navigates to `/` or any path without locale prefix
- Responsibilities: Render hero, featured destinations, services, reviews, partners sections; handle locale

**Destinations Page:**
- Location: `app/[locale]/destinazioni/page.tsx`
- Triggers: User navigates to `/destinazioni`
- Responsibilities: Display all destinations in grid, show hero section with locale-aware copy

**Contact/About Page:**
- Location: `app/[locale]/chi-siamo-contatti/page.tsx`
- Triggers: User navigates to `/chi-siamo-contatti`
- Responsibilities: Contact form, business info cards, contact details

**API Contact Endpoint:**
- Location: `app/api/contact/route.ts`
- Triggers: POST request from ContactForm
- Responsibilities: Accept form data, simulate processing, return success response

**Middleware:**
- Location: `middleware.ts`
- Triggers: Every request except static assets and `/api/*`
- Responsibilities: Detect locale, redirect to locale-prefixed URL if missing

## Error Handling

**Strategy:** Graceful degradation with fallback values

**Patterns:**
- Dictionary loading: Falls back to `it` locale if requested locale not found (`getDictionary` line 11-14)
- Image loading: Uses Next.js Image component with fallback alt text
- Form validation: Client-side Zod schema prevents invalid submissions
- Header state: Defaults to 'top' state on server, syncs on client hydration
- Animations: Respects `prefers-reduced-motion` media query (FadeIn, Header components)

## Cross-Cutting Concerns

**Logging:** Console.log in API route for debugging form submissions (`app/api/contact/route.ts` line 8)

**Validation:** Zod schema in ContactForm enforces required fields (name, email) and minimum lengths

**Authentication:** Not implemented (public-facing website)

**Accessibility:**
- ARIA attributes on links and buttons
- Semantic HTML (header, main, footer, section elements)
- Focus styles on interactive elements
- Reduced motion support via `useSyncExternalStore` hook pattern
- Image alt text with locale-aware descriptions

**Internationalization:** Middleware + async dictionary loading pattern allows complete page localization without client-side switching

---

*Architecture analysis: 2026-03-11*
