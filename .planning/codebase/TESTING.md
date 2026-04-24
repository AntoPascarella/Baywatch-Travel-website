# Testing Patterns

**Analysis Date:** 2026-03-11

## Test Framework

**Runner:**
- No test framework configured
- No test scripts in `package.json`
- No Jest, Vitest, or other test runner dependencies

**Assertion Library:**
- Not applicable - no testing infrastructure present

**Run Commands:**
```bash
npm run lint              # Only available test-adjacent command
```

## Test File Organization

**Location:**
- No test files found in codebase
- No `__tests__` or `*.test.*` / `*.spec.*` files in source directories
- Components are server-rendered or client components without isolated tests

**Naming:**
- Not applicable - no test files present

**Structure:**
- Not applicable - no test files present

## Test Structure

**Suite Organization:**
- Not applicable - no test framework in place

**Patterns:**
- Not applicable

## Mocking

**Framework:**
- No mocking library (msw, jest.mock, vitest mocking, etc.)

**Patterns:**
- Not applicable

**What to Mock:**
- Not applicable

**What NOT to Mock:**
- Not applicable

## Fixtures and Factories

**Test Data:**
- Not applicable - no test infrastructure

**Location:**
- Data constants stored in `data/destinations.ts` and `data/partners.ts`
- Could be reused by future tests but not currently used for testing

## Coverage

**Requirements:** None enforced

**View Coverage:**
- No coverage tool configured

## Test Types

**Unit Tests:**
- Not implemented
- Good candidates for testing:
  - `useHeaderState` hook in `components/hooks/useHeaderState.ts` - scroll event handling and state transitions
  - `getDictionary` in `lib/i18n/get-dictionary.ts` - locale resolution and dynamic imports
  - Zod schema validation in `ContactForm.tsx` - form validation rules
  - Helper functions like `getErrorMessage()` in `ContactForm.tsx`

**Integration Tests:**
- Not implemented
- Good candidates:
  - Form submission flow in `ContactForm.tsx` (POST to `/api/contact`)
  - Middleware locale detection in `middleware.ts` - header parsing and redirection
  - i18n flow: request locale → middleware → getDictionary → component rendering

**E2E Tests:**
- No E2E framework configured (no Playwright, Cypress, Selenium)
- Could test: hero section navigation, form submission end-to-end, locale switching

## Common Patterns

**Async Testing:**
- Not demonstrated in existing code
- Opportunity for future tests:
  - API routes use `async function` (e.g., `route.ts`)
  - Form submission is async with try-catch (line 60-81 in `ContactForm.tsx`)
  - getDictionary uses async dynamic imports (line 6-7 in `get-dictionary.ts`)

**Error Testing:**
- Error paths exist but not tested:
  - Form validation errors displayed (lines 116-123, 138-145, 197-206 in `ContactForm.tsx`)
  - API error handling in try-catch (lines 69-71 in `ContactForm.tsx`)
  - Zod validation with error messages (lines 9-15 in `ContactForm.tsx`)

## Testing Recommendations

**To Implement:**
1. Set up test runner (Vitest recommended for Next.js 16, or Jest)
2. Add test script to `package.json`: `"test": "vitest"` or `"test": "jest"`
3. Create test configuration file (`vitest.config.ts` or `jest.config.js`)
4. Start with unit tests for:
   - `useHeaderState` scroll behavior
   - Form validation schema
   - Locale detection in middleware
5. Add integration tests for form submission flow
6. Consider E2E tests for critical user journeys (contact form, navigation)

**Test File Location Convention:**
- Option 1 (recommended): Co-locate with source: `ContactForm.tsx` → `ContactForm.test.tsx`
- Option 2: Separate directory: `components/` → `__tests__/components/`

**Test Coverage Gaps:**
- **Form submission** (`ContactForm.tsx`): No tests for validation, error states, success feedback
- **Scroll detection** (`useHeaderState.ts`): No tests for state transitions, timeout handling
- **i18n flow** (`middleware.ts`, `get-dictionary.ts`): No tests for locale matching, fallbacks
- **API routes** (`app/api/contact/route.ts`): No tests for request/response handling

---

*Testing analysis: 2026-03-11*
