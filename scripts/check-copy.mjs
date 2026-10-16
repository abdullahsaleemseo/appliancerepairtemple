#!/usr/bin/env node
// Enforces the content standard: no em or en dashes, no banned AI-tone phrases, no lorem ipsum,
// no "free quote/estimate/inspection" wording and no lead or contact forms.
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
  { re: /\b(TODO|FIXME|XXX)\b/, why: 'placeholder comment' },
  { re: /[\u{1F300}-\u{1FAFF}\u{2600}-\u{2604}\u{2606}-\u{26FF}\u{2700}-\u{27BF}]/u, why: 'emoji' },
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (exts.some((e) => p.endsWith(e))) out.push(p);
  }
  return out;
}

let problems = 0;
for (const d of dirs) {
  for (const file of walk(join(root, d))) {
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, i) => {
      for (const r of rules) {
        if (r.re.test(line)) {
          problems++;
          console.log(`${relative(root, file)}:${i + 1}  ${r.why}  ${line.trim().slice(0, 110)}`);
        }
      }
    });
  }
}

if (problems) {
  console.error(`\n${problems} copy problem(s) found.`);
  process.exit(1);
}
console.log('Copy check passed.');
