# Appliance Repair Temple (appliancerepairtemple.com)

Lead generation site for in-home appliance repair in Temple, TX. Next.js 15 (App Router), TypeScript, Tailwind CSS.
Everything is statically generated except the lead API.

## Run it

```bash
npm install
cp .env.example .env.local
npm run dev           # http://localhost:3000
npm run check         # typecheck + copy standards check
npm run build && npm start
```

## Draft vs production mode

`NEXT_PUBLIC_SITE_MODE` controls what can be shown.

| | Draft (default) | `production` |
|---|---|---|
| Unverified claims (ratings, years, warranty, prices, same-day) | Shown with a yellow `[VERIFY ...]` / `[REPLACE ...]` tag | Removed |
| Placeholder review cards, photo frames, owner story | Shown, outlined in yellow | Removed |
| robots.txt and meta robots | `Disallow: /` and `noindex` | Still `noindex` unless `NEXT_PUBLIC_ALLOW_INDEXING=true` |
| `/reviews/` | Placeholder page | 404 until real reviews exist |

A claim only appears in production after you set `verified: true` on it.

## Staging and indexing

The site is staging by default. Every page sends `noindex, nofollow` (meta tag and `X-Robots-Tag` header) and
robots.txt blocks all crawlers. Indexing turns on only when both `NEXT_PUBLIC_SITE_MODE=production` and
`NEXT_PUBLIC_ALLOW_INDEXING=true` are set at build time. `*.vercel.app` URLs stay `noindex` even then, so only the real
domain can be indexed. On Vercel, set these in Project Settings > Environment Variables and redeploy.

## Where things live

| What | File |
|---|---|
| Brand name, phone, email, hours, ZIPs, nearby towns, banner toggle | `src/config/site.ts` (`site`) |
| Trust claims, stats, warranty, diagnostic fee, payment options | `src/config/site.ts` (`claims`) |
| Service pages (7 appliances) | `src/content/services.ts` |
| Brand pages | `src/content/brands.ts` |
| Nearby-city pages | `src/content/areas.ts` |
| FAQs | `src/content/faqs.ts` |
| Blog posts | `src/content/blog.ts` |
| Reviews and review platform links | `src/content/reviews.ts` |
| Hero photo | `heroPhoto` in `src/components/HeroVisual.tsx` (put the file in `public/images/`) |
| Service pricing | `pricingRows[].price` in `services.ts` (rows without a price keep the table in draft) |

To clone for another market, change `site` (city, slugs, ZIPs), rewrite the content files with real local copy, and
rename `src/app/appliance-repair-temple-tx/` to match the new `routes.cityPage`.

## Routes

`/`, `/appliance-repair-temple-tx/`, `/{refrigerator|washer|dryer|dishwasher|oven-stove|freezer|microwave}-repair-temple-tx/`,
`/brands/`, `/brands/{whirlpool|ge|samsung}-appliance-repair-temple-tx/`, `/service-areas/`,
`/service-areas/{belton|killeen|harker-heights|salado}-tx/`, `/about/`, `/contact/`, `/request-service/`, `/thank-you/` (noindex),
`/faq/`, `/reviews/`, `/blog/` + 6 posts, `/privacy-policy/`, `/terms-of-service/`, `/accessibility/`, a custom 404,
`/sitemap.xml`, `/robots.txt`, `/opengraph-image`.
`/get-a-quote` and `/quote` redirect to `/request-service/`.

## Leads

Forms POST to `/api/lead/`. The route validates the input, drops honeypot hits, verifies Cloudflare Turnstile when
`TURNSTILE_SECRET_KEY` is set, and rate-limits each IP. Valid leads are POSTed as JSON to `LEAD_WEBHOOK_URL`
(Zapier, Make, CRM or email relay). Every lead also writes a JSON line to the server log with a timestamp, landing URL, UTM
values, device, form ID and delivery status, with contact details masked. If the webhook fails, the full record goes to
the error log and the visitor is asked to call.

A successful submission redirects to `/thank-you/`, which fires `generate_lead` once per lead.

## Analytics

Set `NEXT_PUBLIC_GA_ID` to load GA4 (after the page is interactive). Events:
`click_to_call` (every `tel:` link, with its location), `form_start`, `generate_lead`, `cta_click`, `service_page_view`.
UTM parameters and click IDs from the first page of a visit are stored for the session and sent with the lead.

## Content rules

`npm run check:copy` fails on em or en dashes, banned AI-tone words and phrases, unproven superlatives, emojis,
lorem ipsum and TODO comments anywhere in `src/`. Run it before every deploy.
