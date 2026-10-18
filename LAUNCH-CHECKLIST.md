# Launch checklist

Nothing below may be invented. Each item needs confirmation from the business owner.

## Referral model (October 18, 2026)
The site is a referral service for a pay-per-call network (Ringba, "Main Appliance Repair" offer). Calls are connected
with independent local providers. The network's review asked for the changes below; all were made on Oct 18, 2026.
- [x] Third-person or homeowner-advice voice on every page; no "we repair", "our technician", "call us"
- [x] Removed: Licensed & Insured, years of experience, repairs completed, average rating, the Reviews page and review prompts, the Gallery page
- [x] Removed: same-day and response-time claims, hours, "urgent calls get priority"; emergency wording limited to "may be available from local providers"
- [x] Removed: payment options and warranty or pricing promises; Terms rewritten for a referral service
- [x] "Request Service" / "Book by Phone" replaced with "Call to get connected" (`/get-connected/`, old URLs redirect)
- [x] Referral disclaimer in the footer of every page and on `/disclaimer/`
- [x] Schema limited to WebSite, BreadcrumbList, FAQPage and Article
- [ ] Network re-review passed
- [x] Ringba tracking number (254) 615-2088 in `site.phone`, tel links and WebSite/Article ContactPoint schema (Oct 2026)

## Business facts (`src/config/site.ts`)
- [x] `site.phone`: (254) 615-2088, +12546152088 (verified)
- [ ] `site.social`: real profiles only

## Content
- [x] Confirm each service is offered (`offeredVerified: true` for all 7 services)
- [x] Confirm the brand lists on service pages and the 12 brand pages
- [x] Confirm each nearby city is really served, and the travel and scheduling notes in `areas.ts` (owner confirmed October 15, 2026)
- [x] Area ZIP lists checked against zip-codes.com for all 11 towns (optional: spot-check with the USPS lookup)
- [x] Social profiles in the footer (Oct 17, 2026); Organization schema removed Oct 18, 2026
- [ ] Privacy Policy and Terms reviewed by the owner (and ideally a lawyer)
- [ ] Read every page aloud. If it sounds like a chatbot, rewrite it.

## Technical
- [x] Live on appliancerepairtemple.com via Vercel, production mode, noindex (Oct 16, 2026). Switches now in `src/config/launch.ts`
- [x] (Oct 18, 2026) Launch day only: set `allowIndexing: true` in `src/config/launch.ts` and push, then check robots.txt allows crawling on the real domain
- [x] Call-only site: no contact, quote or feedback forms; footer disclaimer on every page; no prices; no "free quote/estimate/inspection" wording, enforced by `npm run check:copy` (Oct 16, 2026)
- [ ] Test call to (254) 615-2088 from a phone on several pages
- [x] (Oct 18, 2026: G-NME9DJ8LRG) GA4 ID set in `src/config/launch.ts` (`gaId`); check `click_to_call` (with `data-call-location`) in GA4 DebugView
- [ ] Mark `click_to_call` as a key event in GA4 and import it into Google Ads if running ads
- [ ] Remove `LEAD_WEBHOOK_URL` and any Turnstile keys from Vercel; the site no longer uses them
- [ ] Search Console verified (meta tag added Oct 18, 2026; press Verify in GSC) (DNS record, or the meta tag value in `launch.googleVerification`); sitemap submitted; URL inspection run on the home page, the city page and one service page
- [ ] Bing Webmaster Tools verified (import from Search Console, or `launch.bingVerification`); sitemap submitted
- [ ] Vercel domains: `www.appliancerepairtemple.com` redirects permanently to the apex domain
- [x] Technical SEO audit before indexing (Oct 18, 2026): og/twitter image on every page, favicon.ico, apple icon, web manifest, llms.txt and llms-full.txt, AI crawlers named in robots.txt, real sitemap dates, Organization `sameAs`, security headers, blog and tool internal links, Lighthouse SEO 100 and accessibility 100 on the tested pages
- [ ] Rich Results Test on the home page, one service page and the FAQ page
- [ ] PageSpeed Insights on mobile for home and one service page (target LCP < 2.5s, CLS < 0.1)
- [x] `npm run check` passes
- [x] Production-mode build scanned: no draft placeholder tags on any of the 49 sitemap pages (Oct 15, 2026)
- [ ] Exit-intent quote offer on desktop: not built. Add it only as an A/B test, per the brief.
