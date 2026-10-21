#!/usr/bin/env node
// Google Search Console report through a service account. No packages; Node 18+.
//
// Key: the service account JSON, from the GSC_SERVICE_ACCOUNT_JSON environment variable (the whole
// file contents) or a file in .secrets/ (git-ignored). Never commit the key.
// Property: GSC_SITE env var, default the URL-prefix property verified with the meta tag.
//
// Usage:
//   node scripts/gsc-report.mjs                 summary: sitemaps, top queries and pages, key URL status
//   node scripts/gsc-report.mjs --days 90       change the date range (default 28)
//   node scripts/gsc-report.mjs --submit-sitemap
//   node scripts/gsc-report.mjs --inspect /dryer-repair-temple-tx/
import { createSign } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const SITE = process.env.GSC_SITE || 'https://appliancerepairtemple.com/';
const ORIGIN = 'https://appliancerepairtemple.com';
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const value = (name, fallback) => (args.includes(name) ? args[args.indexOf(name) + 1] : fallback);

function loadKey() {
  if (process.env.GSC_SERVICE_ACCOUNT_JSON) return JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);
  const dir = join(process.cwd(), '.secrets');
  try {
    const file = readdirSync(dir).find((f) => f.endsWith('.json'));
    if (file) return JSON.parse(readFileSync(join(dir, file), 'utf8'));
  } catch {
    // No .secrets folder.
  }
  console.error('No key found. Set GSC_SERVICE_ACCOUNT_JSON or put the JSON key in .secrets/.');
  process.exit(1);
}

const b64url = (v) => Buffer.from(typeof v === 'string' ? v : JSON.stringify(v)).toString('base64url');

async function accessToken(key, write) {
  const now = Math.floor(Date.now() / 1000);
  const scope = `https://www.googleapis.com/auth/webmasters${write ? '' : '.readonly'}`;
  const unsigned = `${b64url({ alg: 'RS256', typ: 'JWT' })}.${b64url({ iss: key.client_email, scope, aud: key.token_uri, iat: now, exp: now + 3600 })}`;
  const signature = createSign('RSA-SHA256').update(unsigned).sign(key.private_key).toString('base64url');
  const res = await fetch(key.token_uri, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${signature}` }),
  });
  const json = await res.json();
  if (!json.access_token) throw new Error(`Token error: ${JSON.stringify(json)}`);
  return json.access_token;
}

let token;
async function api(method, url, body) {
  const res = await fetch(url, {
    method,
    headers: { Authorization: `Bearer ${token}`, ...(body ? { 'Content-Type': 'application/json' } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${url} -> ${res.status} ${text}`);
  return text ? JSON.parse(text) : {};
}

const site = encodeURIComponent(SITE);
const wm = 'https://www.googleapis.com/webmasters/v3';

async function searchAnalytics(dimensions, days, rowLimit = 25) {
  const end = new Date(Date.now() - 2 * 864e5);
  const start = new Date(end.getTime() - (days - 1) * 864e5);
  const d = (x) => x.toISOString().slice(0, 10);
  const r = await api('POST', `${wm}/sites/${site}/searchAnalytics/query`, { startDate: d(start), endDate: d(end), dimensions, rowLimit });
  return { range: `${d(start)} to ${d(end)}`, rows: r.rows ?? [] };
}

async function inspect(path) {
  const r = await api('POST', 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    inspectionUrl: new URL(path, ORIGIN).href,
    siteUrl: SITE,
  });
  const s = r.inspectionResult?.indexStatusResult ?? {};
  return { url: path, verdict: s.verdict, coverage: s.coverageState, lastCrawl: s.lastCrawlTime ?? '-', canonical: s.googleCanonical ?? '-' };
}

const row = (r) => `${r.keys.join(' | ').padEnd(60)} clicks ${String(r.clicks).padStart(4)}  impr ${String(r.impressions).padStart(6)}  ctr ${(r.ctr * 100).toFixed(1).padStart(5)}%  pos ${r.position.toFixed(1)}`;

async function main() {
  const key = loadKey();
  const write = flag('--submit-sitemap');
  token = await accessToken(key, write);
  console.log(`Property: ${SITE}\nService account: ${key.client_email}\n`);

  if (write) {
    await api('PUT', `${wm}/sites/${site}/sitemaps/${encodeURIComponent(`${ORIGIN}/sitemap.xml`)}`);
    console.log('Sitemap submitted.\n');
  }
  if (flag('--inspect')) {
    console.table([await inspect(value('--inspect', '/'))]);
    return;
  }

  const sm = await api('GET', `${wm}/sites/${site}/sitemaps`);
  console.log('Sitemaps');
  for (const s of sm.sitemap ?? []) {
    const c = s.contents?.[0];
    console.log(`  ${s.path}  submitted ${s.lastSubmitted ?? '-'}  downloaded ${s.lastDownloaded ?? '-'}  urls ${c?.submitted ?? '-'}  errors ${s.errors ?? 0}  warnings ${s.warnings ?? 0}`);
  }
  if (!sm.sitemap?.length) console.log('  none yet (run with --submit-sitemap)');

  const days = Number(value('--days', 28));
  for (const dim of ['query', 'page']) {
    const { range, rows } = await searchAnalytics([dim], days);
    console.log(`\nTop ${dim === 'query' ? 'queries' : 'pages'} (${range})`);
    console.log(rows.length ? rows.map(row).join('\n') : '  no data yet');
  }

  console.log('\nIndex status of key pages');
  const keyPages = ['/', '/appliance-repair-temple-tx/', '/refrigerator-repair-temple-tx/', '/washer-repair-temple-tx/', '/dryer-repair-temple-tx/', '/service-areas/belton-tx/', '/service-areas/killeen-tx/'];
  const results = [];
  for (const p of keyPages) results.push(await inspect(p));
  console.table(results);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
