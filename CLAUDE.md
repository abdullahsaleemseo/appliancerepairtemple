# Project notes

- Next.js 15 App Router, TypeScript, Tailwind 3. Content lives in `src/content/*.ts`; business facts and claims in `src/config/site.ts`.
- Never invent business facts (prices, reviews, warranty, years, credentials). Add them unverified (`verified: false`) so they show as tagged placeholders in draft and disappear in production.
- Copy rules: no em or en dashes, no AI-tone filler, no emojis, no unproven superlatives. `npm run check:copy` enforces it.
- Every phone number goes through `PhoneLink`, `CallButton` or a `tel` link with `data-call-location`, so `click_to_call` is tracked.
- Before committing: `npm run check` (type check, copy check, unit tests) and `npm run build`.
- Interactive tools (maintenance checklist, error code decoder, cost estimator, symptom checker): see `TOOLS_IMPLEMENTATION.md`. Data in `src/content/tools/`, logic in `src/lib/tools/`, settings in `src/config/tools.ts`. The cost estimator shows levels, never currency.

## Deploys and launch switches

- The owner approved pushing straight to `main` (Oct 16, 2026). Vercel deploys `main` to appliancerepairtemple.com in 1 to 2 minutes. Run `npm run check` and `npm run build` before every push.
- Launch switches live in `src/config/launch.ts`: `siteMode`, `allowIndexing`, `siteUrl`, `gaId`. Change them there and push; no Vercel dashboard needed. A Vercel environment variable with the same purpose overrides the file, so do not add `NEXT_PUBLIC_ALLOW_INDEXING` on Vercel.
- Business model (Nov 2026): Appliance Repair Temple is a local appliance repair business. The Ringba pay-per-call model has ended. Write in first person plural ("we", "our technicians", "our team"); the reader is "you". Never use referral or directory wording ("connect you with", "free call", "a technician near you", "local pros", "our network", "this site", "independent providers", "we match you"). `npm run check:copy` enforces it; files still carrying old copy are listed in `referralLegacy` in `scripts/check-copy.mjs` and only warn. Remove a file from that list when its page is rewritten.
- Business facts: only what is in `src/config/site.ts` and the owner's brief. No invented years, licenses, review counts, ratings, awards, technician names or quotes. The diagnostic fee, warranty terms, hours and same-day availability are not published: point the reader to a call ("ask when you call") instead of stating them. Same-day visits may be described as often possible, depending on the schedule and parts.
- The footer carries no disclaimer (removed by the owner, Nov 2026). `manufacturerDisclaimer` in `src/config/site.ts` is used on the Disclaimer page, the Terms and llms.txt. Legal pages (privacy, terms, disclaimer, accessibility) are `noindex, follow` and are not in the sitemap.
- Voice: a local technician explaining things at the kitchen table: calm, practical, specific, grade 7 to 8 reading level, short paragraphs. Every page must be unique to its appliance, town or brand. Calls to action are short and worded differently on each page. Every CTA is a tracked call (`CallButton`, `CallCard`, `PhoneLink`).
- Indexing switched off by the owner (Nov 25, 2026) until the content revamp is complete: every page is noindex (meta tag and X-Robots-Tag header) while robots.txt still allows crawling so the noindex is seen. Turn it back on only when the owner says so. Keep `NEXT_PUBLIC_ALLOW_INDEXING` unset on Vercel so the file decides.
- Commits must be authored as the owner (Abdullah Saleem, seo.abdullahsaleem@gmail.com; set in the repo git config). Vercel Hobby blocks deploys of commits by any other author on this private repo.
