# Launch checklist

Nothing below may be invented. Each item needs confirmation from the business owner or repair provider.

## Business facts (`src/config/site.ts`)
- [ ] `site.phone`: real number (or call tracking number that keeps NAP consistent), then `verified: true`.
      The phone shows in production even when unverified, because the site needs a number to work. Replace the 555 number before launch.
- [ ] `site.email`, then `verified: true`
- [x] `site.hours`: Monday to Saturday, 8:00 AM to 8:00 PM (verified)
- [ ] `site.spanishSpoken`: only if the owner confirms
- [ ] `site.social`: real profiles only
- [ ] `site.emergencyBanner.enabled`: switch on only on days with open same-day slots

## Claims (`claims` in `src/config/site.ts`)
Verified by the owner on Oct 15, 2026: Licensed & Insured, Same-Day Service, 4+ Years of Experience, 100+ Repairs Completed,
4.9 Average Rating, Typical Response about 60 minutes, Flexible Payment Options Available, Mon-Sat 8 AM to 8 PM.
- [ ] Platform and review count behind the 4.9 rating (needed before showing a source or adding review markup)
- [ ] Brand list (`claims.brandsServiced`)
- [ ] Callback time shown on the thank-you page
- [ ] Gas appliance service
- [x] Pricing policy: no prices, fees, ranges, coupons or financing terms anywhere on the site

## Content
- [ ] Confirm each service is offered, then set `offeredVerified: true` in `services.ts` (microwave especially)
- [ ] Confirm the brand lists on service pages and the brand pages (Whirlpool, GE, Samsung)
- [ ] Confirm each nearby city is really served, and the travel and scheduling notes in `areas.ts`
- [ ] Check the Belton, Killeen, Harker Heights and Salado ZIP lists against USPS
- [ ] Real prices in `pricingRows` for every service
- [ ] Real reviews in `src/content/reviews.ts`, copied exactly, with source and date
- [ ] Owner story and real photos on the About page; real technician photo for the homepage hero
- [ ] "How we work" promises on the About page match how the provider actually works
- [ ] Privacy Policy and Terms reviewed by the owner (and ideally a lawyer)
- [ ] Read every page aloud. If it sounds like a chatbot, rewrite it.

## Technical
- [ ] `NEXT_PUBLIC_SITE_MODE=production` and `NEXT_PUBLIC_SITE_URL` set on the host
- [ ] Launch day only: `NEXT_PUBLIC_ALLOW_INDEXING=true`, redeploy, then check robots.txt allows crawling on the real domain
- [ ] `LEAD_WEBHOOK_URL` set, and a test lead received at the destination
- [ ] Turnstile keys set, and a test submission passes
- [ ] `NEXT_PUBLIC_GA_ID` set; check `click_to_call`, `form_start` and `generate_lead` in GA4 DebugView
- [ ] Mark `generate_lead` as a key event in GA4 and import it into Google Ads if running ads
- [ ] Search Console verified; sitemap submitted
- [ ] Rich Results Test on the home page, one service page and the FAQ page
- [ ] PageSpeed Insights on mobile for home and one service page (target LCP < 2.5s, CLS < 0.1)
- [ ] `npm run check` passes
- [ ] Exit-intent quote offer on desktop: not built. Add it only as an A/B test, per the brief.
