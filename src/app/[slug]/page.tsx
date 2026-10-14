import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { brands, brandHref } from '@/content/brands';
import { serviceByKey, serviceHref, services } from '@/content/services';
import { BrandChips } from '@/components/BrandChips';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PricingTable } from '@/components/PricingBlock';
import { ReviewsBlock, hasVerifiedReviews } from '@/components/ReviewsBlock';
import { ServicePageView } from '@/components/SiteClient';
import { VerifyTag } from '@/components/Verify';
import { QuickLeadForm } from '@/components/forms/QuickLeadForm';
import { serviceSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

type Params = { params: Promise<{ slug: string }> };

const find = (slug: string) => services.find((s) => s.slug === slug);

export async function generateMetadata({ params }: Params) {
  const s = find((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.metaTitle, description: s.metaDescription, path: `/${s.slug}/` });
}

const processSteps = [
  { title: 'Book', text: 'Call or send a request. We confirm a visit window.' },
  { title: 'Diagnose', text: 'The technician tests the parts and finds the fault.' },
  { title: 'Approve', text: 'You get the price. Work starts only after you say yes.' },
  { title: 'Repair and test', text: 'The part is replaced and the appliance is run to confirm the fix.' },
];

export default async function ServicePage({ params }: Params) {
  const s = find((await params).slug);
  if (!s) notFound();
  const path = `/${s.slug}/`;
  const relatedBrands = brands.filter((b) => b.appliances.some((a) => a.key === s.key));

  return (
    <>
      <ServicePageView service={s.key} />
      <JsonLd
        data={serviceSchema({
          name: s.h1,
          description: s.metaDescription,
          path,
          serviceType: `${s.name} repair`,
        })}
      />

      <section className="bg-surface">
        <div className="mx-auto max-w-site px-4 pb-12 pt-6 lg:px-6 lg:pb-16">
          <Breadcrumbs
            items={[
              { name: `Appliance Repair ${site.city}`, path: routes.cityPage },
              { name: s.navLabel, path },
            ]}
          />
          <div className="mt-6 flex items-start gap-4">
            <span className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-navy shadow-card sm:flex">
              <Icon name={s.icon} className="h-9 w-9" />
            </span>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">{s.h1}</h1>
          </div>
          {!s.offeredVerified ? (
            <p className="mt-2">
              <VerifyTag label="CONFIRM THIS SERVICE IS OFFERED BEFORE PUBLISHING" />
            </p>
          ) : null}
          <div className="prose-copy mt-6 max-w-3xl">
            {s.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-8">
            <CtaRow location={`service_${s.key}_hero`} />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-site gap-12 px-4 py-14 lg:grid-cols-[1fr_360px] lg:px-6">
        <div className="min-w-0 space-y-16">
          <section aria-labelledby="symptoms-heading">
            <h2 id="symptoms-heading" className="font-heading text-3xl font-extrabold tracking-tight text-navy">
              {s.symptomsHeading}
            </h2>
            <p className="mt-3 text-ink-body">Tap a symptom to see the usual cause.</p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {s.symptoms.map((sym) => (
                <details key={sym.title} className="group rounded-card bg-white shadow-card ring-1 ring-slate-100 open:ring-navy/20">
                  <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy [&::-webkit-details-marker]:hidden">
                    <h3 className="font-heading text-[17px] font-bold text-navy">{sym.title}</h3>
                    <Icon name="chevron" className="h-5 w-5 shrink-0 text-brand-dark transition group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-[15px] text-ink-body">{sym.cause}</p>
                    <p className="mt-3 flex items-start gap-2 rounded-lg bg-trust-light px-3 py-2 text-sm font-semibold text-trust-dark">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                      {sym.fixable}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <div className="lg:hidden">
            <QuickLeadForm formId={`service_${s.key}_inline`} title={`Get a ${s.name.toLowerCase()} repair quote`} defaultAppliance={s.key} />
          </div>

          <section aria-labelledby="diag-heading">
            <h2 id="diag-heading" className="font-heading text-3xl font-extrabold tracking-tight text-navy">
              {s.diagnostic.heading}
            </h2>
            <div className="prose-copy mt-4">
              {s.diagnostic.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.diagnostic.covers.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-ink">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-trust" strokeWidth={2.5} />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="pricing-heading">
            <h2 id="pricing-heading" className="font-heading text-3xl font-extrabold tracking-tight text-navy">
              {s.name} repair pricing
            </h2>
            <p className="mt-3 mb-6 text-ink-body">Typical ranges for common jobs. Your exact price comes after the diagnosis.</p>
            <PricingTable rows={s.pricingRows} />
          </section>

          <section aria-labelledby="process-heading">
            <h2 id="process-heading" className="mb-8 font-heading text-3xl font-extrabold tracking-tight text-navy">
              How the repair works
            </h2>
            <HowItWorks steps={processSteps} compact />
          </section>

          <section aria-labelledby="ror-heading">
            <h2 id="ror-heading" className="font-heading text-3xl font-extrabold tracking-tight text-navy">
              {s.repairOrReplace.heading}
            </h2>
            <div className="prose-copy mt-4">
              {s.repairOrReplace.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <ul>
                {s.repairOrReplace.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <aside className="mt-6 flex gap-3 rounded-card border-l-4 border-brand bg-brand-light/60 p-5">
              <Icon name="shield" className="h-6 w-6 shrink-0 text-brand-dark" />
              <p className="text-[15px] text-ink">
                <strong className="font-bold">Safety first:</strong> {s.safety}
              </p>
            </aside>
          </section>

          <section aria-labelledby="brands-heading">
            <h2 id="brands-heading" className="font-heading text-3xl font-extrabold tracking-tight text-navy">
              {s.name} brands we service
            </h2>
            <p className="mt-3 mb-5 text-ink-body">
              Don’t see yours? Call and ask. Have the model number ready if you can.
              <VerifyTag label="CONFIRM BRAND LIST WITH PROVIDER" />
            </p>
            <BrandChips names={s.brands} />
          </section>

          <section aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="mb-6 font-heading text-3xl font-extrabold tracking-tight text-navy">
              {s.name} repair questions
            </h2>
            <FaqList faqs={s.faqs} />
          </section>

          {hasVerifiedReviews(s.key) ? (
            <section aria-labelledby="reviews-heading">
              <h2 id="reviews-heading" className="mb-6 font-heading text-3xl font-extrabold tracking-tight text-navy">
                {s.name} repair reviews
              </h2>
              <ReviewsBlock service={s.key} />
            </section>
          ) : null}

          <nav aria-labelledby="related-heading" className="rounded-card bg-surface p-6 md:p-8">
            <h2 id="related-heading" className="font-heading text-xl font-extrabold text-navy">
              Related repairs and areas
            </h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2">
              <ul className="space-y-2">
                {s.related.map((k) => (
                  <li key={k}>
                    <Link href={serviceHref(k)} className="font-semibold text-navy hover:underline">
                      {serviceByKey[k].name.toLowerCase()} repair in {site.city}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href={routes.cityPage} className="font-semibold text-navy hover:underline">
                    all appliance repair in {site.city}
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                {relatedBrands.map((b) => (
                  <li key={b.key}>
                    <Link href={brandHref(b)} className="font-semibold text-navy hover:underline">
                      {b.name} {s.name.toLowerCase()} repair
                    </Link>
                  </li>
                ))}
                {areas.slice(0, 2).map((a) => (
                  <li key={a.slug}>
                    <Link href={areaHref(a)} className="font-semibold text-navy hover:underline">
                      appliance repair in {a.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <aside className="hidden lg:block" aria-label="Request a quote">
          <div className="sticky top-28">
            <QuickLeadForm formId={`service_${s.key}_sidebar`} title="Get my free quote" defaultAppliance={s.key} />
          </div>
        </aside>
      </div>

      <FinalCta
        title={`${s.name} acting up? Let’s take a look.`}
        appliance={s.key}
        formId={`service_${s.key}_final`}
      />
    </>
  );
}
