# Technology Stack

**Analysis Date:** 2026-03-11

## Languages

**Primary:**
- TypeScript 5 - All application code, configuration, and middleware
- JavaScript - JSON configuration files, PostCSS config

**Secondary:**
- CSS 3 - Styling with Tailwind CSS v4

## Runtime

**Environment:**
- Node.js 18+ (based on @types/node ^20)

**Package Manager:**
- npm 11.9.0
- Lockfile: package-lock.json (present and committed)

## Frameworks

**Core:**
- Next.js 16.1.6 - Full-stack React framework with App Router, SSR, API routes
- React 19.2.3 - UI library and component framework
- React DOM 19.2.3 - React rendering to DOM

**Styling:**
- Tailwind CSS 4 - Utility-first CSS framework
- @tailwindcss/postcss 4 - PostCSS plugin for Tailwind CSS v4

**Forms & Validation:**
- react-hook-form 7.71.1 - Lightweight form state management
- @hookform/resolvers 5.2.2 - Resolver adapters for validation schemas
- Zod 4.3.6 - TypeScript-first schema validation

**Internationalization:**
- @formatjs/intl-localematcher 0.8.1 - Locale matching for i18n
- negotiator 1.0.0 - HTTP header language negotiation

**Utilities:**
- server-only 0.0.1 - Ensures code runs only on server

## Key Dependencies

**Critical:**
- Next.js 16.1.6 - Framework for SSR, API routes, and static generation
- react 19.2.3 - Core UI rendering
- TypeScript 5 - Type safety and development tooling
- Tailwind CSS 4 - All styling and design system
- zod 4.3.6 - Form validation and runtime type checking

**Forms & Validation:**
- react-hook-form 7.71.1 - Handles contact form state and submission
- @hookform/resolvers 5.2.2 - Integrates Zod validation with react-hook-form

**i18n Infrastructure:**
- @formatjs/intl-localematcher 0.8.1 - Matches browser language preferences to supported locales
- negotiator 1.0.0 - Parses Accept-Language headers for language detection

## Configuration

**Environment:**
- No environment variables detected as required
- WhatsApp phone number hardcoded in `components/WhatsAppButton.tsx`
- Contact API endpoint at `/api/contact` is local (no external service)

**Build:**
- `tsconfig.json` - TypeScript compiler config with `strict: true` mode enabled
- `next.config.ts` - Next.js configuration with image optimization settings for SVG support
- `postcss.config.mjs` - PostCSS config with Tailwind CSS v4 plugin
- `eslint.config.mjs` - ESLint config with Next.js best practices and TypeScript support

## Platform Requirements

**Development:**
- Node.js 18 or later
- npm 7 or later
- TypeScript 5
- ESLint 9
- PostCSS 8+

**Production:**
- Node.js 18+
- Static export capability (Next.js can generate static HTML)
- No external database required (all data is static JSON)

## Development Scripts

**Available Commands:**
```bash
npm run dev      # Next.js dev server (port 3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint linting
```

## Key Fonts (Google Fonts)

**Typography Stack:**
- **Display:** DM Serif Display (serif, for headings)
- **Body:** Inter (sans-serif, for body text)
- **Secondary:** Josefin Sans (geometric sans, weights 400/600/700)
- **Accent:** Cormorant Garamond (serif, weights 600/700)
- **Tertiary:** Jost (geometric sans, weights 300/400)

All fonts loaded via Next.js `next/font/google` with `display: 'swap'` strategy for optimal performance.

## CSS Architecture

**Tailwind CSS v4:**
- Using `@import "tailwindcss"` in `app/globals.css`
- Custom design tokens defined as CSS variables (--color-cream, --color-mint, etc.)
- `@theme inline` block exposes design tokens to Tailwind
- Custom animations (scroll-left animation for carousel)
- Responsive typography using CSS `clamp()` for fluid scaling

## Build Output

**Static Generation:**
- App uses `generateStaticParams()` in `app/[locale]/layout.tsx` to statically generate pages for all locales (it, en)
- Supports both static export and serverless deployment
- Next.js outputs to `.next/` directory (excluded from git)

---

*Stack analysis: 2026-03-11*
