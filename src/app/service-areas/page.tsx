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
  description: `Appliance repair in ${site.city} and ${areas.length} nearby towns, including Belton, Killeen, Harker Heights and Salado. See each town’s ZIP codes and how scheduling works.`,
  path: routes.areas,
});

export default function AreasPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Service Areas', path: routes.areas }]} title={`Appliance Repair Service Areas Near ${site.city}`}>
        <div className="prose-copy prose-dark">
          <p>
            {site.city} is the center of our route. From there we cover most of {site.county} and a few towns just outside it.
            Repairs happen in your home; the technician comes to you.
          </p>
          <p>
            When you call, we check the schedule for your ZIP code and give you the earliest open visit window.
            Towns closer to {site.city} usually have more openings. Towns at the edge of the area are scheduled on set days.
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
              <span className="text-sm text-white/55">Home base</span>
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
          intro="Other nearby towns are covered too. They don’t have their own page yet, but you can still book."
        />
        <AreaBlock />
      </Section>

      <FinalCta formId="areas_final" />
    </>
  );
}
