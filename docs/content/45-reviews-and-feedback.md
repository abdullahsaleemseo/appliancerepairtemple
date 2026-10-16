# Page 45: Reviews page and "Share your experience" sections

Status: **live on the staging site, awaiting approval**
Sources: `src/app/reviews/page.tsx`, `src/components/ShareExperience.tsx`, `src/components/forms/FeedbackForm.tsx`, `src/app/api/feedback/route.ts`.

## What changed

**Review card sections removed** from the homepage, the Temple city page, all 7 service pages and all 11 area pages (including the draft-only "local proof" placeholder on area pages).

**Replaced with a "Share your experience" prompt** that links to `/reviews/#share`:
- Homepage, Temple city page and area pages: full-width band with the verified 4.9 average rating.
- Service pages: compact dark card in the content column.

**Reviews page rebuilt** so it reads as an established business, using only verified facts:
- H1 "Customer Reviews and your feedback", the 4.9 average rating across the internet, and the stats strip (100+ repairs, 4+ years, 4.9 rating, about 60 minute typical response).
- "The reasons people call us back": licensed and insured, same-day service with the availability qualifier, plain explanations, flexible payment.
- "How did we do?" feedback form: star rating, comments, optional name, town and appliance, and an opt-in box to share comments with first name and town.
- Three FAQs (FAQPage schema) and the final callback form.
- The page is now indexable, in the sitemap and linked from the footer.

**Feedback form:** posts to `/api/feedback/`, which validates, rate-limits, drops honeypot submissions and forwards to `LEAD_WEBHOOK_URL` with `"type": "feedback"`. Nothing submitted is published automatically. GA4 event `feedback_submit`.

## SEO metadata

| Field | Value |
|---|---|
| Title tag (53 chars) | Customer Reviews & Feedback \| Appliance Repair Temple |
| Meta description (150 chars) | Customer ratings and feedback for Appliance Repair Temple, in-home appliance repair in Temple, TX. Worked with us? Share your experience with us here. |
| URL | `/reviews/` |

## Later

- When review platform profiles exist, add them to `reviewPlatforms` in `src/content/reviews.ts`; "Review us on Google/Facebook/Yelp" buttons then appear on the Reviews page.
- Verified customer reviews (with a source) can be added to `src/content/reviews.ts`; the `ReviewsBlock` component is kept for that.
