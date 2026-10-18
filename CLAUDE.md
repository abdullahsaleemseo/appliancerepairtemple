# Project notes

- Next.js 15 App Router, TypeScript, Tailwind 3. Content lives in `src/content/*.ts`; business facts and claims in `src/config/site.ts`.
- Never invent business facts (prices, reviews, warranty, years, credentials). Add them unverified (`verified: false`) so they show as tagged placeholders in draft and disappear in production.
- Copy rules: no em or en dashes, no AI-tone filler, no emojis, no unproven superlatives. `npm run check:copy` enforces it.
- Every phone number goes through `PhoneLink`, `CallButton` or a `tel` link with `data-call-location`, so `click_to_call` is tracked.
- Before committing: `npm run check` and `npm run build`.

## Deploys and launch switches

- The owner approved pushing straight to `main` (Oct 16, 2026). Vercel deploys `main` to appliancerepairtemple.com in 1 to 2 minutes. Run `npm run check` and `npm run build` before every push.
- Launch switches live in `src/config/launch.ts`: `siteMode`, `allowIndexing`, `siteUrl`, `gaId`. Change them there and push; no Vercel dashboard needed. A Vercel environment variable with the same purpose overrides the file, so do not add `NEXT_PUBLIC_ALLOW_INDEXING` on Vercel.
- The site is a referral service for a pay-per-call network (Ringba, "Main Appliance Repair" offer): calls are connected with independent local providers. Never write as the repair company (no "we repair", "our technician", "call us"). No credentials, years, ratings, reviews, same-day or response-time claims, hours, booking or visit windows, payment options or warranties. Emergency wording is limited to "Emergency help may be available from local providers." The footer and `/disclaimer/` carry `referralDisclaimer` from `src/config/site.ts`. Schema is limited to WebSite, BreadcrumbList, FAQPage and Article. No forms, no prices, no "free quote/estimate/inspection". Every CTA is a tracked call (`CallButton`, `CallCard`, `PhoneLink`). `npm run check:copy` enforces these rules.
- Indexing stays off until the owner says to switch it on.
- Commits must be authored as the owner (Abdullah Saleem, seo.abdullahsaleem@gmail.com; set in the repo git config). Vercel Hobby blocks deploys of commits by any other author on this private repo.
