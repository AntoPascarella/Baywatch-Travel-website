# External Integrations

**Analysis Date:** 2026-03-11

## APIs & External Services

**None Detected**

The application does not currently integrate with any external APIs or third-party services for business logic.

## Data Storage

**Databases:**
- None - No database configured
- All data is static and stored in TypeScript/JSON files

**Static Data Sources:**
- `data/destinations.ts` - Array of destination objects with hardcoded travel data
- `dictionaries/it.json` - Italian language translations
- `dictionaries/en.json` - English language translations

**File Storage:**
- Local filesystem only
- Public assets at `/public/images/` directory
- No cloud storage integration

**Caching:**
- None - Next.js default caching strategies apply

## Authentication & Identity

**Auth Provider:**
- None - No authentication required
- Application is a public marketing website with no user accounts
- Contact form has no authentication

## Communication Channels

**WhatsApp:**
- Direct messaging link integration
- Implementation: `components/WhatsAppButton.tsx`
- Phone number: hardcoded as "390813331096"
- Uses WhatsApp Web deep link: `https://wa.me/{phoneNumber}?text={encodedMessage}`
- Message: "Ciao! Vorrei informazioni su un viaggio."

**Contact Form:**
- Endpoint: `app/api/contact/route.ts`
- Method: POST to `/api/contact`
- Current behavior: Mock implementation (logs to console, returns success after 1-second delay)
- No backend processing or email sending
- Form validation via Zod schema

## Monitoring & Observability

**Error Tracking:**
- None detected
- Basic console.error logging in contact form error handling

**Logs:**
- Console logging only
- Contact form submissions logged to server console

## CI/CD & Deployment

**Hosting:**
- Not configured
- Capable of deployment to Vercel, Netlify, or any Node.js/static hosting

**CI Pipeline:**
- None detected
- No GitHub Actions, GitLab CI, or other automation configured

## Environment Configuration

**Required env vars:**
- None - Application is fully self-contained

**Secrets location:**
- No secrets management in place
- Phone number hardcoded in component
- No sensitive data in codebase

## Localization Services

**Internationalization (i18n):**
- Implementation: Custom server-side i18n with file-based translations
- Supported locales: `it` (Italian, default), `en` (English)
- Language detection: Automatic via HTTP Accept-Language header negotiation
- Architecture: `middleware.ts` redirects requests to localized routes (e.g., `/it/`, `/en/`)
- Translation files: `dictionaries/it.json`, `dictionaries/en.json`
- Loader: Dynamic imports via `lib/i18n/get-dictionary.ts`

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None - Contact form data is not sent anywhere after submission

## Future Integration Points

**What Would Be Needed For:**

**Email Notifications:**
- Contact form currently doesn't send emails
- Would require: Email service (SendGrid, Mailgun, AWS SES, or custom SMTP)
- Implementation point: `app/api/contact/route.ts`

**Real Backend Processing:**
- Currently contact form only logs to console
- Would require: Database to persist submissions
- Service: Could use Supabase, Firebase, MongoDB, or PostgreSQL

**Analytics:**
- Not implemented
- Could add: Google Analytics, Plausible, or Vercel Analytics

**Payment Processing:**
- Not needed for current marketing website
- Could add later: Stripe, PayPal for booking functionality

**WhatsApp API (Programmatic):**
- Currently using deep link only
- Could upgrade to: WhatsApp Business API for two-way messaging
- Would require: WhatsApp Business account and API credentials

---

*Integration audit: 2026-03-11*
