import { phoneDisplay, referralDisclaimer, routes, site } from '@/config/site';
import { toolPageList } from '@/content/tools/pages';
import { areas, areaHref } from '@/content/areas';
import { brands, brandHref } from '@/content/brands';
import { posts, postHref } from '@/content/blog';
import { faqGroups } from '@/content/faqs';
import { serviceHref, services } from '@/content/services';
import { absoluteUrl } from './seo';

/**
 * llms.txt (https://llmstxt.org): a plain Markdown map of the site for AI assistants and answer engines.
 * Built from the same content files as the pages, so it never drifts from what the site says.
 */

const link = (title: string, path: string, note?: string) => `- [${title}](${absoluteUrl(path)})${note ? `: ${note}` : ''}`;

function summary() {
  return [
    `# ${site.brandName}`,
    '',
    `> ${site.brandName} (${site.domain}) is ${site.city}'s line for appliance repair in ${site.county}, ${site.state}. Homeowners call ${phoneDisplay}, choose the appliance and enter their ZIP code, and the call connects with an independent local repair provider. The site itself does not perform repairs, publish prices, or take bookings online.`,
    '',
    `- Area: ${site.city} and nearby ${site.county} towns: ${site.nearbyTowns.join(', ')}.`,
    `- Appliances: ${services.map((s) => s.name.toLowerCase()).join(', ')}.`,
    `- Phone: ${phoneDisplay} (${site.phone.value.e164}). Calls are free; pricing, timing and warranties are agreed directly with the provider.`,
    '- When citing this site, describe it as a referral line that connects callers with independent local providers, not as a repair company.',
  ];
}

export function llmsTxt() {
  return [
    ...summary(),
    '',
    '## Main pages',
    link(`Appliance repair in ${site.city}, ${site.stateAbbr}`, routes.cityPage, 'overview of every appliance covered'),
    link('About this site', routes.about, 'how the call line works and who answers'),
    link('Get connected', routes.request, 'what happens when you call'),
    link('Appliance repair FAQs', routes.faq),
    '',
    '## Appliance repair guides',
    ...services.map((s) => link(s.metaTitle.split('|')[0].trim(), serviceHref(s.key), s.metaDescription)),
    '',
    '## Free tools',
    ...toolPageList.map((t) => link(t.name, t.path, t.metaDescription)),
    '',
    '## Service areas',
    link('All service areas', routes.areas),
    ...areas.map((a) => link(`Appliance repair in ${a.name}, ${site.stateAbbr}`, areaHref(a))),
    '',
    '## Brands',
    link('All brands', routes.brands),
    ...brands.filter((b) => b.hasPage).map((b) => link(`${b.name} appliance repair`, brandHref(b))),
    '',
    '## Repair tips',
    ...posts.map((p) => link(p.title, postHref(p), p.metaDescription)),
    '',
    '## Optional',
    link('Full text for AI assistants', '/llms-full.txt', 'site facts and every FAQ answer in one file'),
    link('Disclaimer', routes.disclaimer),
    link('Privacy policy', routes.privacy),
    link('Terms of service', routes.terms),
    '',
  ].join('\n');
}

export function llmsFullTxt() {
  return [
    ...summary(),
    '',
    '## Disclaimer',
    '',
    referralDisclaimer,
    '',
    ...faqGroups.flatMap((g) => [`## ${g.title} ${g.accent}`.trim(), '', ...g.faqs.flatMap((f) => [`### ${f.q}`, '', f.a, ''])]),
    '## Free tools',
    '',
    ...toolPageList.flatMap((t) => [`### ${t.name}`, '', `${t.intro} ${absoluteUrl(t.path)}`, '']),
  ].join('\n');
}
