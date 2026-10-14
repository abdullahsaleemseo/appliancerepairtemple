# Project notes

- Next.js 15 App Router, TypeScript, Tailwind 3. Content lives in `src/content/*.ts`; business facts and claims in `src/config/site.ts`.
- Never invent business facts (prices, reviews, warranty, years, credentials). Add them unverified (`verified: false`) so they show as tagged placeholders in draft and disappear in production.
- Copy rules: no em or en dashes, no AI-tone filler, no emojis, no unproven superlatives. `npm run check:copy` enforces it.
- Every phone number goes through `PhoneLink`, `CallButton` or a `tel` link with `data-call-location`, so `click_to_call` is tracked.
- Before committing: `npm run check` and `npm run build`.
