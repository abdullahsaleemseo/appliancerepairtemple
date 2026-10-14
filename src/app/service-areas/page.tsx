import Link from 'next/link';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { AreaBlock } from '@/components/AreaList';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { Section, SectionHeading } from '@/components/Section';
import { VerifyTag } from '@/components/Verify';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair Service Areas Near ${site.city}, ${site.stateAbbr} | ${site.brandName}`,
  description: `Appliance repair in ${site.city}, Belton, Killeen, Harker Heights, Salado and nearby ${site.region} towns. See ZIP codes and how scheduling works.`,
  path: routes.areas,
});

export default function AreasPage() {
  return (
    <>
      <section className="bg-surface">
        <div className="mx-auto max-w-site px-4 pb-12 pt-6 lg:px-6">
          <Breadcrumbs items={[{ name: 'Service Areas', path: routes.areas }]} />
          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
            Appliance Repair Service Areas Near {site.city}
          </h1>
          <div className="prose-copy mt-6 max-w-3xl">
            <p>
              {site.city} is the center of our route. From there we cover most of {site.county} and a few towns just outside it. We
              do not have a storefront. Technicians drive to you.
            </p>
            <p>
              Here is how availability works: when you call or send a request, we check the schedule for your ZIP code and give you
              the earliest open visit window. Towns closer to {site.city} usually have more openings. Towns at the edge of the area
              are scheduled on set days.
              <VerifyTag label="CONFIRM COVERAGE RADIUS AND SCHEDULING WITH PROVIDER" />
            </p>
          </div>
          <div className="mt-8">
            <CtaRow location="areas_hero" />
          </div>
        </div>
      </section>

      <Section labelledBy="pages-heading">
        <SectionHeading id="pages-heading" title="Towns with their own page" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <li>
            <Link href={routes.cityPage} className="flex h-full flex-col rounded-card bg-navy p-5 text-white shadow-card hover:bg-navy-700">
              <Icon name="pin" className="h-6 w-6 text-brand" />
              <span className="mt-3 font-heading text-lg font-extrabold">{site.city}</span>
              <span className="text-sm text-white/75">Home base</span>
            </Link>
          </li>
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={areaHref(a)} className="flex h-full flex-col rounded-card bg-white p-5 shadow-card ring-1 ring-slate-100 hover:shadow-lift">
                <Icon name="pin" className="h-6 w-6 text-brand-dark" />
                <span className="mt-3 font-heading text-lg font-extrabold text-navy">{a.name}</span>
                <span className="text-sm text-ink-muted">ZIP {a.zips.join(', ')}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="surface" labelledBy="map-heading">
        <SectionHeading id="map-heading" title="Full coverage" intro="Other nearby towns are covered too. They don’t have their own page yet, but you can still book." />
        <AreaBlock />
      </Section>

      <FinalCta formId="areas_final" />
    </>
  );
}
