# Codebase Concerns

**Analysis Date:** 2026-03-11

## Tech Debt

**Contact API endpoint is a mock implementation:**
- Issue: `app/api/contact/route.ts` uses a hardcoded 1000ms delay and logs to console, but doesn't actually send the contact form data anywhere
- Files: `app/api/contact/route.ts`
- Impact: Form submissions are accepted but not delivered to any backend service, email list, or notification system. Users may not receive confirmation, and business may miss inquiries
- Fix approach: Implement actual email delivery service (SendGrid, Resend, Nodemailer) or integrate with CMS/CRM backend; add request validation with Zod; implement proper error handling and response codes

**Contact information is hardcoded throughout components:**
- Issue: Phone numbers (+39 081 123 4567), email addresses (info@baywatchtravel.it), and address strings are duplicated in multiple files as string literals
- Files: `components/Header.tsx` (line 196), `app/[locale]/chi-siamo-contatti/page.tsx` (lines 33, 42, 51), `components/Footer.tsx` (lines 88, 93, 125)
- Impact: Any business contact change requires updates in 5+ locations; risk of inconsistent information across site
- Fix approach: Create a centralized configuration file `lib/config/contact.ts` with single source of truth for all contact details; import throughout app

**Footer newsletter subscription has no backend:**
- Issue: `components/Footer.tsx` has newsletter signup input with button (lines 23-32) but no onSubmit handler or API integration
- Files: `components/Footer.tsx`
- Impact: Email capture functionality is non-functional; user emails are never submitted anywhere
- Fix approach: Add submit handler, create `/api/newsletter` endpoint, integrate with email service for list management

**Type safety gap with Dict type:**
- Issue: `components/Footer.tsx` (line 7-8) uses `any` type for dictionary with eslint-disable comment: `type Dict = Record<string, any>`
- Files: `components/Footer.tsx`, potentially other components using dictionary
- Impact: Reduces type safety for i18n data; easy to introduce runtime errors from missing keys
- Fix approach: Generate strict TypeScript types from dictionary JSON files using tools like json-to-ts; eliminate `any` types

**No test coverage:**
- Issue: No test files found in repository (no `.test.ts`, `.spec.ts`, Jest, or Vitest config)
- Files: Entire codebase
- Impact: No automated verification of functionality; refactoring is risky; form validation logic in `ContactForm.tsx` is untested
- Fix approach: Set up vitest or Jest; create unit tests for validation schemas in `ContactForm.tsx`; add E2E tests for page flows

## Security Considerations

**Insufficient contact form validation on backend:**
- Risk: `app/api/contact/route.ts` accepts raw JSON without validation. If connected to real email service, could enable email injection or spam
- Files: `app/api/contact/route.ts` (no Zod validation server-side)
- Current mitigation: Client-side Zod validation in `ContactForm.tsx`, but server-side validation is missing
- Recommendations: Add server-side Zod schema validation matching client schema; sanitize inputs; implement rate limiting on `/api/contact` endpoint; consider CSRF protection

**SVG image configuration allows arbitrary SVG files:**
- Risk: `next.config.ts` has `dangerouslyAllowSVG: true` which allows arbitrary SVG content to be served as images
- Files: `next.config.ts` (line 5)
- Current mitigation: `contentSecurityPolicy` directive restricts script execution, but inline handlers could still be risky
- Recommendations: Validate SVG content server-side; use stricter CSP like `default-src 'self'; img-src 'self' data:; script-src 'none'`; consider removing `dangerouslyAllowSVG` if SVGs aren't critical

**Hardcoded phone number and email visible in source:**
- Risk: Business contact info is hardcoded in client-side components, visible in HTML and browser dev tools
- Files: Multiple components (Header, Footer, Contact page)
- Current mitigation: None
- Recommendations: While not sensitive per se, consider moving to environment variables; implement bot detection on contact form; monitor for spam

**No input sanitization for dynamic content:**
- Risk: `ContactForm.tsx` displays user form data immediately on success without sanitization; if data were stored and displayed elsewhere, XSS risk exists
- Files: `ContactForm.tsx`, `app/api/contact/route.ts`
- Current mitigation: React escapes JSX by default; no server-side display of user data yet
- Recommendations: When implementing backend storage, sanitize all user inputs; never render form data unsanitized to other users

## Performance Bottlenecks

**Large Header component with heavy styling and multiple event listeners:**
- Problem: `components/Header.tsx` is 209 lines with complex inline styles, useSyncExternalStore, multiple useState hooks, and scroll/wheel/touch event handlers on window
- Files: `components/Header.tsx`
- Cause: All styling is inline rather than CSS; 4 event listeners created on every component render; header re-renders on every scroll event even with requestAnimationFrame optimization
- Improvement path: Extract styles to `globals.css` or CSS modules; memoize event handlers with useCallback; consider extracting logo as separate component; use CSS transitions instead of JS where possible

**ContactForm re-renders unnecessarily:**
- Problem: Form component uses `useState` for submit and success states, causing full component re-render. With complex error display, could impact perceived performance
- Files: `components/ContactForm.tsx` (lines 43-44)
- Cause: No memoization or state optimization; input fields re-render on every keystroke
- Improvement path: Wrap form inputs in React.memo; use useCallback for form submission; consider form library optimizations

**Destination data is an in-memory array that grows with catalog:**
- Problem: All 13 destinations are hardcoded in `data/destinations.ts` and imported into every page that needs them
- Files: `data/destinations.ts`, imported in `app/[locale]/page.tsx`, `app/[locale]/destinazioni/page.tsx`, `components/ContactForm.tsx`
- Cause: No pagination, filtering, or database; entire array loaded on every request
- Improvement path: For current size (13) not an issue, but if catalog grows: implement pagination; move to database with query filters; use Next.js incremental static regeneration

**Navigation uses hardcoded links without dynamic route detection optimization:**
- Problem: `Header.tsx` manually defines navigation links instead of auto-discovering from route structure
- Files: `components/Header.tsx` (lines 51-55)
- Cause: If routes change, header links must be manually updated
- Improvement path: Consider using routes metadata or dynamic route discovery

## Fragile Areas

**Form error handling in ContactForm:**
- Files: `components/ContactForm.tsx` (lines 75-80)
- Why fragile: Generic `alert()` on error; error details lost; only logs to console
- Safe modification: Wrap error state in try-catch with specific error types; display error message to user; log structurally
- Test coverage: No tests for error states, validation, network failures

**Middleware locale detection:**
- Files: `middleware.ts` (lines 7-16)
- Why fragile: Uses `@ts-expect-error` to cast readonly array to mutable (line 14), suggesting type system gap
- Safe modification: Fix type issue at source; use safer type assertion; verify locale matching handles edge cases
- Test coverage: No tests for locale detection with different browser language headers

**Image error fallbacks:**
- Files: `components/Header.tsx` (lines 107-126), hardcoded "BT" text fallback
- Why fragile: Logo image error silently falls back to text with no user indication
- Safe modification: Add error logging; consider placeholder skeleton; test with missing images
- Test coverage: No tests for image load failures

**Dictionary import assumes valid locale:**
- Files: `lib/i18n/get-dictionary.ts` (line 11-14)
- Why fragile: Falls back to Italian if locale not found, no error logging
- Safe modification: Add logging when fallback occurs; validate locale in middleware before reaching this point
- Test coverage: No tests for invalid locales

## Missing Critical Features

**No form submission persistence:**
- Problem: Contact form cannot actually be submitted; no API implementation to store or send data
- Blocks: Actual business inquiries cannot be captured
- Priority: High - core feature non-functional

**No error boundary:**
- Problem: No error.tsx or Error boundary components for graceful error handling
- Blocks: Any runtime error crashes entire page without user-friendly fallback
- Priority: High - production issue

**No loading states for async operations:**
- Problem: Pages with async `getDictionary()` calls don't show loading UI while data loads
- Blocks: Poor perceived performance on slow connections
- Priority: Medium - UX improvement

**No 404/not-found page:**
- Problem: No not-found.tsx file for invalid routes
- Blocks: Users see default Next.js 404 instead of branded experience
- Priority: Medium - user experience

## Test Coverage Gaps

**No tests for form validation:**
- What's not tested: Zod schema in `ContactForm.tsx` (lines 9-15) - min length, email format validation
- Files: `components/ContactForm.tsx`
- Risk: Validation logic changes could go unnoticed; edge cases in email/phone validation uncaught
- Priority: High - validation is critical

**No tests for locale switching:**
- What's not tested: Middleware locale detection and routing behavior; locale parameter handling in pages
- Files: `middleware.ts`, `app/[locale]/page.tsx`, `lib/i18n/get-dictionary.ts`
- Risk: Language switching could silently break; invalid locales not caught
- Priority: High - user-facing feature

**No tests for component rendering:**
- What's not tested: Header state transitions (top → scrolled), destination card interactivity, footer newsletter
- Files: `components/Header.tsx`, `components/DestinationCard.tsx`, `components/Footer.tsx`
- Risk: UI changes break without detection
- Priority: Medium - visual regression risk

**No integration tests:**
- What's not tested: Full page flows (home → destinations → contact form submission)
- Files: All page files
- Risk: Complex interactions between components not validated
- Priority: Medium - overall user flows

## Dependencies at Risk

**TypeScript strict mode enabled but `any` types used:**
- Risk: Type safety inconsistency; any types bypass strict checks
- Impact: Potential runtime errors in dictionary access
- Migration plan: Add strict typing to all dictionaries; use generated types from JSON; remove all `any` usage

**Next.js 16.1.6 with React 19.2.3:**
- Risk: Relatively new versions; potential for edge case bugs
- Impact: Some experimental features may not be fully stable
- Current state: No explicit usage of experimental React features detected
- Migration plan: Monitor React/Next changelog; stay current with patch releases

**No explicit error boundary or error handling library:**
- Risk: Unhandled errors crash app
- Impact: Poor user experience on runtime errors
- Migration plan: Add React Error Boundary; consider error tracking service (Sentry)

## Scaling Limits

**Destination catalog hardcoded in code:**
- Current capacity: 13 destinations
- Limit: Adding new destinations requires code changes and redeployment
- Scaling path: Move destinations to CMS or database; create admin panel for management; implement pagination

**Newsletter and contact form not connected to backend:**
- Current capacity: Accepts submissions but nowhere to send them
- Limit: Cannot capture user data
- Scaling path: Implement email service integration; add database storage; create admin dashboard for inquiries

**Inline styling throughout components:**
- Current capacity: Works for current component count (~13 components)
- Limit: Increases component size; makes global theme changes difficult
- Scaling path: Extract to CSS modules or Tailwind utilities; create design tokens; document component design system

---

*Concerns audit: 2026-03-11*
