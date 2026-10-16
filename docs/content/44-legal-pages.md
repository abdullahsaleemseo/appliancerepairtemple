# Page 44: Legal pages (Privacy Policy, Terms of Service, Accessibility)

Status: **live on the staging site, awaiting approval. Owner and legal review still required (tagged on the draft site).**
Sources: `src/app/privacy-policy/page.tsx`, `src/app/terms-of-service/page.tsx`, `src/app/accessibility/page.tsx`, layout `src/components/LegalPage.tsx`.

This was a language and accuracy pass, not legal advice. A lawyer or the owner should review the final text before launch.

---

## What changed

**All three**
- "Last updated" moved to October 15, 2026.
- Meta descriptions rewritten to 145 to 160 characters.

**Privacy Policy**
- New "Cookies" section: Google Analytics cookies, and campaign tags kept for the visit (matches `src/lib/attribution.ts`, which uses session storage).
- New "How we protect it" section: HTTPS, limited access, no sensitive data in forms. No security guarantees.

**Terms of Service**
- New "Scheduling and availability" section: same-day with the availability qualifier, response times are typical figures and not guaranteed arrival times, a visit is confirmed only by phone.
- New "Changes to these terms" section.

**Accessibility**
- New "Known limits" section covering third-party manufacturer pages and PDFs linked from guides, with phone help offered.

## SEO metadata

| Page | Title tag | Meta description |
|---|---|---|
| Privacy | Privacy Policy \| Appliance Repair Temple | How Appliance Repair Temple collects, uses, shares and protects the information you submit through appliancerepairtemple.com, and the choices you have about it. (160) |
| Terms | Terms of Service \| Appliance Repair Temple | The terms that apply when you use appliancerepairtemple.com or request appliance repair service, including scheduling, repair work, trademarks and liability. (157) |
| Accessibility | Accessibility \| Appliance Repair Temple | How Appliance Repair Temple works to make appliancerepairtemple.com usable for everyone, the standard we aim for, and how to get help or report a problem. (154) |

## Owner decisions needed

- [x] **Who performs the repairs.** Owner confirmed (October 15, 2026): Appliance Repair Temple does the repairs itself. Updated to match:
  - Privacy Policy: requests stay with us; no forwarding to an outside repair provider; consent covers calls and texts from us only.
  - Terms of Service: repairs are performed by our own technicians; pricing, any repair warranty and payment terms are given before work starts.
  - Form consent text (every form): "I agree that Appliance Repair Temple may call or text me at the number above about this request."
  - Draft-only verification labels and LAUNCH-CHECKLIST.md no longer refer to a "provider".
- [ ] Legal review of all three pages before launch.
- [ ] Phone number and email (pending).

---

## Page copy: Privacy Policy

# Privacy Policy

Last updated October 15, 2026. Applies to appliancerepairtemple.com. [OWNER AND LEGAL REVIEW REQUIRED]

This policy explains what information Appliance Repair Temple (“we”, “us”) collects through this website, how we use it, and who we share it with. We only collect what we need to respond to a repair request.

## Information you give us

When you fill out a request or contact form, we collect:

- Your name, phone number, ZIP code and, if you choose, your email address
- The appliance type, brand and a description of the problem
- Your preferred contact time
Please do not include payment card numbers, Social Security numbers or other sensitive information in the form.

## Information collected automatically

When you visit the site, we may record the page you landed on, the website that referred you, campaign tags in the link (such as UTM parameters), your general device type and how you interacted with the site, including phone number clicks and form submissions. We use Google Analytics for this. Google Analytics uses cookies; you can opt out with Google’s browser add-on or your browser’s cookie settings.

We may also use Cloudflare Turnstile to block automated spam. It processes limited technical data to tell people from bots.

## How we use your information

- To call or text you about your repair request and schedule a visit
- To send a technician, perform the repair and follow up on it
- To understand which pages and campaigns bring in requests, so we can improve the site
- To prevent spam and abuse
## Who we share it with

Appliance Repair Temple performs the repairs itself, so your request stays with us. We use a small number of service providers that host the site, process form submissions and provide analytics, and they handle information only to provide those services to us. We may also share information when the law requires it. We do not sell your personal information, and we do not share it with unrelated third parties for their own marketing.

## Calls and text messages

By checking the consent box on a form, you agree that we may call or text the number you provided about your request. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to any text to opt out.

## Cookies

The site uses a small number of cookies and similar browser storage. Google Analytics uses cookies to count visits and see how pages are used. We also keep campaign tags from the link you arrived on for the length of your visit, so a request can be matched to the ad or page that brought you here. You can block or delete cookies in your browser settings; the site will still work.

## How we protect it

The site uses an encrypted (HTTPS) connection, and form submissions are sent over that connection. We limit access to request details to the people who need them to respond to you. No method of transmission or storage is completely secure, so please do not send sensitive information through the form.

## How long we keep it

We keep request records only as long as needed to provide service, handle follow-up questions and meet legal obligations.

## Your choices

You can ask us to access, correct or delete the information we hold about you by contacting us below. We will respond within a reasonable time.

## Children

This site is not directed to children under 13, and we do not knowingly collect information from them.

## Changes

If we change this policy, we will update the date at the top of this page.

## Contact

Questions about this policy: call (254) 555-0147 or email service@appliancerepairtemple.com .


---

## Page copy: Terms of Service

# Terms of Service

Last updated October 15, 2026. Applies to appliancerepairtemple.com. [OWNER AND LEGAL REVIEW REQUIRED]

By using appliancerepairtemple.com you agree to these terms. If you do not agree, please do not use the site.

## What this site does

This site provides information about appliance repair and lets you request a callback. Submitting a form requests a call back. It does not book an appointment or create a contract for repair. Appointments, prices and repair terms are agreed directly with us before any work begins.

## Scheduling and availability

Same-day service is available, subject to technician availability, location, and current demand. Response times shown on this site are typical figures, not guaranteed arrival times. A visit is confirmed only when a time is agreed with you by phone.

## Repair work

Repairs are performed by Appliance Repair Temple’s own technicians. The technician explains what failed and what the repair involves, and work starts only after you approve it. Pricing, any warranty on the repair and payment terms are given to you before work starts. Any warranty applies only as stated in writing by us.

## Information on this site

Troubleshooting articles are general guidance and may not apply to your model. Always follow your owner’s manual, disconnect power before inspecting an appliance and stop if anything seems unsafe. Do not attempt gas, refrigerant or high-voltage repairs yourself. We are not responsible for damage or injury that results from do-it-yourself repairs.

## Trademarks

Appliance brand names mentioned on this site belong to their owners. Their use here only describes the products we work on and does not mean any manufacturer endorses or is affiliated with us.

## Acceptable use

Do not submit false requests, attempt to disrupt the site or use automated tools to send form submissions.

## Limitation of liability

The site is provided as is. To the extent allowed by law, we are not liable for indirect or consequential damages arising from use of the site.

## Changes to these terms

We may update these terms from time to time. The date at the top of this page shows when they last changed.

## Governing law

These terms are governed by the laws of the State of Texas.

## Contact

Questions about these terms: (254) 555-0147 .


---

## Page copy: Accessibility

# Accessibility

Last updated October 15, 2026. Applies to appliancerepairtemple.com. [OWNER AND LEGAL REVIEW REQUIRED]

We want everyone to be able to use this website and request a repair, including people who use screen readers, keyboard navigation, magnification or voice control.

## What we do

- We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.
- Every form field has a label, and errors are announced and described in text.
- All features work with a keyboard, with a visible focus outline.
- Text and buttons are built to meet AA color contrast.
- A skip link lets you jump straight to the main content.
- Motion is reduced when your device asks for it.
## Need help or found a problem?

If something on the site does not work for you, call (254) 555-0147 and we will take your request by phone. Please also tell us what went wrong so we can fix it.

## Known limits

Some content, such as linked manufacturer pages and PDF documents from other websites, is outside our control and may not meet the same standard. If you need information from one of those sources in another format, call and we will help.

Appliance Repair Temple reviews this site for accessibility as pages are added or changed.
