# TODO

## P.IVA
- [ ] Add the company's P.IVA (VAT number) to the site, usually in the footer bottom bar ([components/Footer.tsx](components/Footer.tsx)). Required by Italian law on business websites.
- [ ] While at it, confirm the legal company name and update `CONTROLLER.name` in [components/LegalPage.tsx](components/LegalPage.tsx) if it differs from "Baywatch Travel".

## SMTP password
- [ ] In `.env.local`, set `SMTP_PASS` to the password of `info@baywatchtravel.it` (and `SMTP_HOST` to the provider's SMTP server), then restart `npm run dev`.
- [ ] Set the same variables on the hosting provider and redeploy, otherwise the live contact form can't send.
