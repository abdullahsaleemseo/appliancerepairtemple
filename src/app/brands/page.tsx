import Link from 'next/link';
import { routes, site } from '@/config/site';
import { brands, brandHref, otherBrands } from '@/content/brands';
import { serviceByKey } from '@/content/services';
import { BrandChips } from '@/components/BrandChips';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/Section';
import { VerifyTag } from '@/components/Verify';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Brands We Service in ${site.city}, ${site.stateAbbr} | ${site.brandName}`,
  description: `Whirlpool, GE, Samsung, LG, Frigidaire, Maytag, Bosch and more. See which appliance brands we repair in ${site.city}, ${site.stateAbbr}.`,
  path: routes.brands,
});

export default function BrandsPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'Brands', path: routes.brands }]} title={`Appliance Brands We Service in ${site.city}`}>
        <p className="text-lg leading-relaxed text-white/70">
          Most homes in {site.city} have a mix of brands, often whatever came with the house plus a newer washer or fridge. We
          repair the common household brands below. The model number helps us confirm parts before the visit.
        </p>
        <div className="mt-8">
          <CtaRow location="brands_hero" dark />
        </div>
      </PageHero>

      <Section labelledBy="brand-pages-heading">
        <SectionHeading id="brand-pages-heading" eyebrow="Repair guides" title="Brand-by-brand" accent="repair notes." />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {brands
            .filter((b) => b.hasPage)
            .map((b, i) => (
              <li key={b.key}>
                <Link
                  href={brandHref(b)}
                  className={`group relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-card p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lift ${
                    i === 0 ? 'grain bg-ink text-white' : 'card'
                  }`}
                >
                  <span className={`font-display text-5xl font-extrabold tracking-[-0.04em] ${i === 0 ? 'text-white' : 'text-ink'}`}>{b.name}</span>
                  <span className={`mt-4 flex-1 text-[15px] ${i === 0 ? 'text-white/60' : 'text-ink-body'}`}>
                    {b.appliances.map((a) => serviceByKey[a.key].name.toLowerCase()).join(', ')}
                  </span>
                  <span className={`mt-6 inline-flex items-center gap-1.5 font-semibold ${i === 0 ? 'text-flame-glow' : 'text-ink'}`}>
                    {b.name} repair in {site.city}
                    <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <Section tone="white" labelledBy="other-heading">
        <SectionHeading id="other-heading" eyebrow="Also" title="Other brands" accent="we work on." intro="No dedicated page yet, but we see these regularly." />
        <BrandChips names={otherBrands} />
        <p className="mt-12 max-w-3xl text-sm text-ink-muted">
          All brand names are trademarks of their respective owners. {site.brandName} is an independent repair service. We are not
          affiliated with, authorized by or endorsed by any manufacturer listed here. If your appliance is still under a
          manufacturer’s warranty, contact the manufacturer first.
        </p>
      </Section>

      <FinalCta formId="brands_final" />
    </>
  );
}
