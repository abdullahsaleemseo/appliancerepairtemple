import Link from 'next/link';
import { routes, site } from '@/config/site';
import { brands, brandHref, otherBrands } from '@/content/brands';
import { serviceByKey } from '@/content/services';
import { BrandChips } from '@/components/BrandChips';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaRow } from '@/components/Buttons';
import { FinalCta } from '@/components/FinalCta';
import { Icon } from '@/components/Icon';
import { Section } from '@/components/Section';
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
      <section className="bg-surface">
        <div className="mx-auto max-w-site px-4 pb-12 pt-6 lg:px-6">
          <Breadcrumbs items={[{ name: 'Brands', path: routes.brands }]} />
          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
            Appliance Brands We Service in {site.city}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-ink-body">
            Most homes in {site.city} have a mix of brands, often whatever came with the house plus a newer washer or fridge. We
            repair the common household brands below. If yours is not listed, call and ask. The model number helps us confirm
            parts before the visit.
            <VerifyTag label="CONFIRM BRANDS WITH PROVIDER" />
          </p>
          <div className="mt-8">
            <CtaRow location="brands_hero" />
          </div>
        </div>
      </section>

      <Section labelledBy="brand-pages-heading">
        <h2 id="brand-pages-heading" className="font-heading text-3xl font-extrabold text-navy">
          Brand repair guides
        </h2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {brands
            .filter((b) => b.hasPage)
            .map((b) => (
              <li key={b.key}>
                <Link
                  href={brandHref(b)}
                  className="group flex h-full flex-col rounded-card bg-white p-6 shadow-card ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lift"
                >
                  <h3 className="font-heading text-2xl font-extrabold text-navy">{b.name}</h3>
                  <p className="mt-2 flex-1 text-[15px] text-ink-body">
                    {b.appliances.map((a) => serviceByKey[a.key].name.toLowerCase()).join(', ')}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 font-bold text-brand-dark">
                    {b.name} repair in {site.city} <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <Section tone="surface" labelledBy="other-heading">
        <h2 id="other-heading" className="font-heading text-3xl font-extrabold text-navy">
          Other brands we work on
        </h2>
        <p className="mt-3 mb-6 text-ink-body">No dedicated page yet, but we see these regularly.</p>
        <BrandChips names={otherBrands} />
        <p className="mt-10 max-w-3xl text-sm text-ink-muted">
          All brand names are trademarks of their respective owners. {site.brandName} is an independent repair service. We are not
          affiliated with, authorized by or endorsed by any manufacturer listed here. If your appliance is still under a
          manufacturer’s warranty, contact the manufacturer first.
        </p>
      </Section>

      <FinalCta formId="brands_final" />
    </>
  );
}
