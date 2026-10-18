import Link from 'next/link';
import { phoneDisplay, routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { AreaBlock } from '@/components/AreaList';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/Section';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair Near ${site.city} ${site.stateAbbr} | Belton, Killeen, Salado`,
  description: `Fridge, washer or dryer trouble in Belton, Killeen, Harker Heights, Salado or another town near ${site.city}? See ZIP codes for ${areas.length + 1} towns. Call ${phoneDisplay}.`,
  path: routes.areas,
});

export default function AreasPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Service Areas', path: routes.areas }]} title={`Appliance Repair Service Areas Near ${site.city}`}>
        <div className="prose-copy prose-dark">
          <p>
            A warm fridge in Belton, a leaking washer in Killeen, a barn freezer that quit outside Salado: {site.brandName} is
            the appliance repair line for {site.city}, most of {site.county} and a few towns just past it. Repairs happen at
            your home, so the technician comes to you.
          </p>
          <p>
            Each town below has its own page with ZIP codes, housing notes and the brand problems people there look up. When
            you call, give your street address and ZIP so the call reaches a technician who covers your town, and ask about
            timing, pricing and licensing then, since each provider sets their own.
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
          intro="Plenty of towns around Temple are covered without a page of their own. Call with your address to check yours."
        />
        <AreaBlock />
      </Section>

      <FinalCta
        formId="areas_final"
        title="Somewhere near Temple?"
        accent="Call with your address."
        text="From Belton and Killeen to Holland and Moody, one call puts you in touch with a technician who works in your town."
      />
    </>
  );
}
