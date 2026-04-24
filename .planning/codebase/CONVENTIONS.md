# Coding Conventions

**Analysis Date:** 2026-03-11

## Naming Patterns

**Files:**
- Components: PascalCase (e.g., `ContactForm.tsx`, `DestinationCard.tsx`)
- Utilities/hooks: camelCase (e.g., `useHeaderState.ts`, `get-dictionary.ts`)
- API routes: lowercase with hyphens (e.g., `route.ts` in `app/api/contact/route.ts`)
- Data files: camelCase (e.g., `destinations.ts`, `partners.ts`)

**Functions:**
- Components: PascalCase (e.g., `export default function ContactForm()`)
- Hooks: camelCase with `use` prefix (e.g., `useHeaderState`, `useSyncExternalStore`)
- Utility functions: camelCase (e.g., `getLocale()`, `getErrorMessage()`)
- Async server functions: camelCase (e.g., `getDictionary()`)

**Variables:**
- Constants: camelCase (e.g., `isCompact`, `phoneNumber`, `message`)
- State variables: camelCase (e.g., `isSubmitting`, `isSuccess`, `state`)
- Type/Interface names: PascalCase (e.g., `HeaderState`, `Destination`, `FormLabels`)
- Component props: camelCase (e.g., `variant`, `delay`, `lang`, `dict`)

**Types:**
- Exported types: PascalCase (e.g., `type Destination`, `type HeaderState`, `type FormLabels`)
- Generic type usage: Capitalized (e.g., `Promise<{ locale: Locale }>`)
- Union types: use string literals (e.g., `'default' | 'compact'`)

## Code Style

**Formatting:**
- No explicit formatter configured (no .prettierrc or biome.json)
- Manual formatting observed in codebase
- Single quotes used in JavaScript/TypeScript (e.g., `'use client'`, `'scroll'`)
- Double quotes in JSX attributes (e.g., `className="..."`)
- Semicolons consistently used at end of statements

**Linting:**
- ESLint 9 with Next.js configuration (`eslint-config-next`)
- Web vitals and TypeScript strict mode enabled
- Config: `eslint.config.mjs` with `nextVitals` and `nextTs` presets
- Ignores: `.next/**`, `out/**`, `build/**`
- Uses `eslint-disable-next-line` pragmatically (e.g., line 7 of `Footer.tsx` for explicit `any`)

**Strict TypeScript:**
- `strict: true` in `tsconfig.json`
- Explicit type annotations on props and return types required
- `noEmit: true` - TypeScript for type checking only
- Type inference used for local variables where clear (e.g., `const isCompact = variant === 'compact'`)

## Import Organization

**Order:**
1. React/external libraries first (e.g., `import { useState } from 'react'`)
2. Next.js specific imports (e.g., `import Link from 'next/link'`, `import Image from 'next/image'`)
3. Type imports (e.g., `import type { Destination }`)
4. Local module imports (e.g., `import { useHeaderState } from './hooks/useHeaderState'`)
5. Local data imports (e.g., `import { destinations } from '@/data/destinations'`)

**Path Aliases:**
- `@/*` resolves to project root (configured in `tsconfig.json`)
- Used consistently: `@/components/`, `@/lib/`, `@/data/`, `@/i18n-config`

**File imports:**
- Extensions omitted in imports (e.g., `import Header from '@/components/Header'` not `.tsx`)
- Default exports used for page components and main components
- Named imports for utilities and hooks when multiple exports

## Error Handling

**Patterns:**
- Form validation: Zod schemas with `react-hook-form` and `@hookform/resolvers`
- Example from `ContactForm.tsx`: schema definition at top with validation messages keyed to labels
- Try-catch blocks used for async operations: see `onSubmit` in `ContactForm.tsx` (lines 62-80)
- Console.error for client-side errors (e.g., line 76 of `ContactForm.tsx`)
- Alert for user-facing error feedback (simple approach, could be improved)
- Server-side: minimal error handling observed (see `route.ts` mock endpoint)

**Validation:**
- Zod v4.3.6 for schema validation
- Schema messages reference locale keys (e.g., `{ message: 'error_name' }`)
- Error messages resolved via labels lookup: `labels[errorKey as keyof FormLabels]`

## Logging

**Framework:** console (no dedicated logger)

**Patterns:**
- `console.error()` for client-side error reporting
- `console.log()` for server-side debugging (e.g., `console.log('Form submission:', body)` in `route.ts`)
- No structured logging or log levels observed
- Minimal logging in production-ready components

## Comments

**When to Comment:**
- Architectural or non-obvious logic explained (e.g., `// Hook: subscribe to the prefers-reduced-motion` in `FadeIn.tsx`)
- HTML structure comments for complex sections (e.g., `{/* ── LEFT: Logo icon 28px, -2px margin ── */}` in `Header.tsx`)
- Section dividers for readability (e.g., `{/* ═══════════════════════════════════ */}`)
- Workarounds or browser-specific behavior documented (e.g., `// Some browsers (Safari) natively report < 0 during rubber-banding`)
- Inline comments for non-obvious conditions (e.g., `// Safeguard: only at top`)

**JSDoc/TSDoc:**
- Not systematically used in codebase
- Only function/component signatures have inline type definitions
- Props types defined inline where small, via `{ prop: Type }` destructuring

## Function Design

**Size:** Functions generally 20-50 lines for components, 10-30 for utilities

**Parameters:**
- Destructuring in function signature (preferred): `function Header({ lang }: { dict?: Record<string, unknown>; lang: Locale })`
- Props object with inline type definition for components
- Async functions receive `Request` or `Promise<params>` in Next.js context

**Return Values:**
- Components return JSX
- Hooks return objects or values (e.g., `{ state, isCompact }` from `useHeaderState`)
- Async functions return typed responses (e.g., `NextResponse.json()` in API routes)
- Early returns used for guards (e.g., line 57 in `FadeIn.tsx`: `if (prefersReducedMotion || isVisible) return`)

## Module Design

**Exports:**
- Default export for component files (e.g., `export default function ContactForm`)
- Named exports for utilities and types (e.g., `export const getDictionary`, `export type Destination`)
- Server-only marker used: `import 'server-only'` in `get-dictionary.ts`

**Barrel Files:**
- Not used; imports reference specific file paths directly
- Example: `import { destinations } from '@/data/destinations'` not `@/data/`

**Props Pattern:**
- Props types defined inline in function signature
- Optional props marked with `?` (e.g., `variant?: 'default' | 'compact'`)
- Props object destructuring with defaults (e.g., `variant = 'default'`)

---

*Convention analysis: 2026-03-11*
