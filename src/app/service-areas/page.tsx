import Link from 'next/link';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { AreaBlock } from '@/components/AreaList';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/Section';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair Service Areas Near ${site.city}, ${site.stateAbbr}`,
  description: `Appliance repair in ${site.city} and ${areas.length} nearby towns, including Belton, Killeen, Harker Heights and Salado. See ZIP codes and how to get connected with a local pro.`,
  path: routes.areas,
});

export default function AreasPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Service Areas', path: routes.areas }]} title={`Appliance Repair Service Areas Near ${site.city}`}>
        <div className="prose-copy prose-dark">
          <p>
            {site.brandName} is a free referral service that connects homeowners in {site.city}, most of {site.county} and a
            few towns just outside it with independent local appliance repair pros. Repairs happen in your home; the technician comes to you.
          </p>
          <p>
            When you call, describe the problem and give your address and ZIP code, and you are connected with a local pro who
            serves your town. Each provider sets their own schedule and prices, so ask about availability, pricing and licensing on that call.
          </p>
        </div>
        <div className="mt-8">
          <CtaRow location="areas_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="pages-heading">
        <SectionHeading id="pages-heading" eyebrow="Local pages" title="Towns with their" accent="own page." />
        <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li>
            <Link href={routes.cityPage} className="grain group flex h-full min-h-[180px] flex-col rounded-card bg-ink p-6 text-white transition hover:-translate-y-1 hover:shadow-lift">
              <Icon name="pin" className="h-6 w-6 text-flame-glow" />
              <span className="mt-auto font-display text-2xl font-bold tracking-[-0.03em]">{site.city}</span>
              <span className="text-sm text-white/55">ZIP {site.templeZips.join(', ')}</span>
            </Link>
          </li>
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={areaHref(a)} className="card group flex h-full min-h-[180px] flex-col p-6 transition hover:-translate-y-1 hover:shadow-lift">
                <Icon name="pin" className="h-6 w-6 text-flame" />
                <span className="mt-auto font-display text-2xl font-bold tracking-[-0.03em] text-ink">{a.name}</span>
                <span className="text-sm text-ink-muted">ZIP {a.zips.join(', ')}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="map-heading">
        <SectionHeading
          id="map-heading"
          eyebrow="Coverage"
          title="The full"
          accent="service area."
          intro="Local pros serve other nearby towns too. They don’t have their own page yet, but you can still call to get connected."
        />
        <AreaBlock />
      </Section>

      <FinalCta formId="areas_final" />
    </>
  );
}
