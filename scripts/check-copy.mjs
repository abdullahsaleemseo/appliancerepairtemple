#!/usr/bin/env node
// Enforces the content standard: no em or en dashes, no banned AI-tone phrases, no lorem ipsum,
// no "free quote/estimate/inspection" wording, no lead or contact forms, no invented track-record claims,
// and (since Nov 2026, when the site became a local repair business) no referral or directory wording.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dirs = ['src'];
const exts = ['.ts', '.tsx', '.css', '.md', '.mjs'];

const rules = [
  { re: /—/, why: 'em dash' },
  { re: /–/, why: 'en dash' },
  { re: /&mdash;|&ndash;/, why: 'dash entity' },
  { re: /lorem ipsum/i, why: 'lorem ipsum' },
  { re: /look no further/i, why: 'cliche opener' },
  { re: /in today'?s fast[- ]paced/i, why: 'cliche opener' },
  { re: /when it comes to/i, why: 'cliche opener' },
  { re: /\b(delve|moreover|furthermore|seamless(ly)?|elevate[sd]?|game[- ]changer|cutting[- ]edge|vibrant|bustling|nestled|unmatched|unparalleled|top[- ]notch|world[- ]class)\b/i, why: 'banned filler word' },
  { re: /we'?ve got you covered/i, why: 'formulaic phrase' },
  { re: /whether you'?re .{1,60} or /i, why: 'formulaic phrase' },
  { re: /not only .{1,60} but also/i, why: 'formulaic phrase' },
  { re: /from .{1,30} to .{1,30}, we/i, why: 'formulaic phrase' },
  { re: /\bthe best\b|#1\b|\bnumber one\b/i, why: 'unproven superlative' },
  { re: /welcome to our website/i, why: 'generic copy' },
  { re: /\b(free|no[- ]cost|complimentary)\s+(in[- ]home\s+)?(quotes?|estimates?|inspections?|diagnos\w*|service calls?|consultations?)\b/i, why: 'free quote/estimate/inspection wording' },
  { re: /\b(quotes?|estimates?|inspections?)\s+(are|is)\s+(always\s+)?free\b/i, why: 'free quote/estimate/inspection wording' },
  { re: /<form\b|\b(QuickLeadForm|MultiStepForm|FeedbackForm)\b/, why: 'lead or contact form (the site is call-only)' },
  { re: /rest assured|hassle[- ]free|second to none|your trusted partner|one[- ]stop shop|\bnavigat(e|ing) (the|your|through)\b|\b(the|today'?s) landscape\b/i, why: 'banned filler phrase' },
  // Business facts must come from src/config/site.ts. No invented credentials, ratings or reviews.
  { re: /licensed (and|&|&amp;) insured|\b\d+\+? years of experience|repairs completed|average rating|leave us a review|share your experience/i, why: 'unverified credential or review claim' },
  { re: /\b(TODO|FIXME|XXX)\b/, why: 'placeholder comment' },
  { re: /[\u{1F300}-\u{1FAFF}\u{2600}-\u{2604}\u{2606}-\u{26FF}\u{2700}-\u{27BF}]/u, why: 'emoji' },
];

/**
 * Referral and directory wording from the old pay-per-call model. These fail the check everywhere except the
 * files below, which still carry the old copy and only produce warnings until they are rewritten. Remove a file
 * from the list as soon as its page is rewritten, so the rule starts enforcing there.
 */
const referralRules = [
  { re: /\bconnects? you with|\bconnecting (you|homeowners) with|\bfree call\b|a technician near you|\blocal pros?\b|\bour network\b|\bthis site\b|independent (local )?(appliance repair )?providers?|\bwe match you\b|free referral|referral service|enter (your|the) zip|phone menu|call the line\b/i, why: 'referral or directory wording' },
];
const referralLegacy = new Set([
  'src/app/brands/[brand]/page.tsx',
  'src/app/accessibility/page.tsx',
  // Legal pages use the owner's service description (Nov 27, 2026): "a free service that helps homeowners connect with independent appliance repair providers".
  'src/app/disclaimer/page.tsx',
  'src/app/get-connected/page.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/terms-of-service/page.tsx',
  'src/components/ProblemPicker.tsx',
  'src/config/legacyDisclaimer.ts',
  'src/components/tools/CostTool.tsx',
  'src/content/areas.ts',
  'src/content/blog.ts',
  'src/content/brands.ts',
  'src/content/faqs.ts',
  'src/content/services.ts',
  'src/content/tools/issues.ts',
  'src/content/tools/pages.ts',
]);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (exts.some((e) => p.endsWith(e))) out.push(p);
  }
  return out;
}

let problems = 0;
let warnings = 0;
for (const d of dirs) {
  for (const file of walk(join(root, d))) {
    const rel = relative(root, file);
    const legacy = referralLegacy.has(rel);
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, i) => {
      for (const r of rules) {
        if (r.re.test(line)) {
          problems++;
          console.log(`${rel}:${i + 1}  ${r.why}  ${line.trim().slice(0, 110)}`);
        }
      }
      for (const r of referralRules) {
        if (r.re.test(line)) {
          if (legacy) warnings++;
          else {
            problems++;
            console.log(`${rel}:${i + 1}  ${r.why}  ${line.trim().slice(0, 110)}`);
          }
        }
      }
    });
  }
}
if (warnings) console.log(`${warnings} referral phrase(s) left in ${referralLegacy.size} legacy file(s) awaiting rewrite (warnings only).`);

if (problems) {
  console.error(`\n${problems} copy problem(s) found.`);
  process.exit(1);
}
console.log('Copy check passed.');
