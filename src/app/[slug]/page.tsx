import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { brands, brandHref } from '@/content/brands';
import { serviceByKey, serviceHref, services } from '@/content/services';
import { BrandChips } from '@/components/BrandChips';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { PaymentNote } from '@/components/PaymentNote';
import { ReviewsBlock, hasVerifiedReviews } from '@/components/ReviewsBlock';
import { ServicePageView } from '@/components/SiteClient';
import { TrustBadges } from '@/components/TrustBadges';
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
  { title: 'Approve', text: 'You hear what failed and what the fix involves. Work starts only after you say yes.' },
  { title: 'Repair and test', text: 'The part is replaced and the appliance is run to confirm the fix.' },
];

const h2 = 'h-section text-[2rem] md:text-[2.6rem]';

export default async function ServicePage({ params }: Params) {
  const s = find((await params).slug);
  if (!s) notFound();
  const path = `/${s.slug}/`;
  const relatedBrands = brands.filter((b) => b.appliances.some((a) => a.key === s.key));
  const [lead, ...rest] = s.intro;

  return (
    <>
      <ServicePageView service={s.key} />
      <JsonLd data={serviceSchema({ name: s.h1, description: s.metaDescription, path, serviceType: `${s.name} repair` })} />

      <PageHero
        crumbs={[
          { name: `Appliance Repair ${site.city}`, path: routes.cityPage },
          { name: s.navLabel, path },
        ]}
        title={s.h1}
        icon={<Icon name={s.icon} className="h-8 w-8" strokeWidth={1.6} />}
      >
        {!s.offeredVerified ? <VerifyTag label="CONFIRM THIS SERVICE IS OFFERED BEFORE PUBLISHING" /> : null}
        <p className="mt-3 text-lg leading-relaxed text-white/70 md:text-xl">{lead}</p>
        <div className="mt-8">
          <CtaRow location={`service_${s.key}_hero`} dark />
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <TrustBadges dark />
        </div>
      </PageHero>

      <div className="mx-auto grid max-w-site gap-14 px-4 py-20 lg:grid-cols-[1fr_380px] lg:px-6">
        <div className="min-w-0 space-y-24">
          {rest.length ? (
            <div className="prose-copy max-w-3xl">
              {rest.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          ) : null}

          <section aria-labelledby="symptoms-heading" className="reveal">
            <p className="eyebrow mb-4 text-flame">
              <span className="h-px w-6 bg-flame" aria-hidden="true" />
              Symptom checker
            </p>
            <h2 id="symptoms-heading" className={h2}>
              {s.symptomsHeading}
            </h2>
            <p className="mt-4 text-ink-body">Tap the one that sounds like yours to see the usual cause.</p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {s.symptoms.map((sym, i) => (
                <details key={sym.title} className="group rounded-2xl border border-sand bg-white transition open:border-ink/20 open:shadow-card">
                  <summary className="flex min-h-[72px] cursor-pointer list-none items-center gap-4 px-5 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-flame [&::-webkit-details-marker]:hidden">
                    <span className="font-serif text-2xl italic text-flame">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="flex-1 font-display text-[17px] font-semibold tracking-[-0.015em] text-ink">{sym.title}</h3>
                    <Icon name="chevron" className="h-5 w-5 shrink-0 text-ink-muted transition group-open:rotate-180" />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-[15px] text-ink-body">{sym.cause}</p>
                    <p className="mt-4 flex items-start gap-2 rounded-xl bg-mint-soft px-3.5 py-2.5 text-[14px] font-medium text-mint">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.5} />
                      {sym.fixable}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          <div className="lg:hidden">
            <QuickLeadForm formId={`service_${s.key}_inline`} title={`Get a ${s.name.toLowerCase()} quote`} defaultAppliance={s.key} />
          </div>

          <section aria-labelledby="diag-heading" className="reveal grain relative overflow-hidden rounded-xl2 bg-ink p-8 md:p-12">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-flame/25 blur-[100px]" />
            <h2 id="diag-heading" className={`${h2} relative text-white`}>
              {s.diagnostic.heading}
            </h2>
            <div className="prose-copy prose-dark relative mt-5">
              {s.diagnostic.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ul className="relative mt-8 grid gap-3 sm:grid-cols-2">
              {s.diagnostic.covers.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-[15px] text-white/85">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-mint-bright" strokeWidth={2.5} />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <div className="reveal">
            <PaymentNote />
          </div>

          <section aria-labelledby="process-heading" className="reveal">
            <h2 id="process-heading" className={`${h2} mb-10`}>
              How the repair <span className="accent text-flame">works</span>
            </h2>
            <HowItWorks steps={processSteps} />
          </section>

          <section aria-labelledby="ror-heading" className="reveal">
            <h2 id="ror-heading" className={h2}>
              {s.repairOrReplace.heading}
            </h2>
            <div className="prose-copy mt-6">
              {s.repairOrReplace.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 grid gap-3 md:grid-cols-3">
              {s.repairOrReplace.points.map((p) => (
                <li key={p} className="card p-5 text-[15px] font-medium text-ink">
                  {p}
                </li>
              ))}
            </ul>
            <aside className="mt-6 flex gap-4 rounded-2xl border border-flame/20 bg-flame-soft p-5">
              <Icon name="shield" className="h-6 w-6 shrink-0 text-flame" />
              <p className="text-[15px] text-ink">
                <strong className="font-semibold">Safety first:</strong> {s.safety}
              </p>
            </aside>
          </section>

          <section aria-labelledby="brands-heading" className="reveal">
            <h2 id="brands-heading" className={h2}>
              {s.name} brands <span className="accent text-flame">we service</span>
            </h2>
            <p className="mb-6 mt-4 text-ink-body">
              Don’t see yours? Call and ask. Have the model number ready if you can.
            </p>
            <BrandChips names={s.brands} />
          </section>

          <section aria-labelledby="faq-heading" className="reveal">
            <h2 id="faq-heading" className={`${h2} mb-8`}>
              {s.name} repair <span className="accent text-flame">questions</span>
            </h2>
            <FaqList faqs={s.faqs} />
          </section>

          {hasVerifiedReviews(s.key) ? (
            <section aria-labelledby="reviews-heading">
              <h2 id="reviews-heading" className={`${h2} mb-8`}>
                {s.name} repair reviews
              </h2>
              <ReviewsBlock service={s.key} />
            </section>
          ) : null}

          <nav aria-labelledby="related-heading" className="rounded-xl2 border border-sand bg-white p-7 md:p-9">
            <h2 id="related-heading" className="font-display text-2xl font-bold tracking-[-0.02em] text-ink">
              Related repairs and areas
            </h2>
            <div className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {s.related.map((k) => (
                <Link key={k} href={serviceHref(k)} className="link-arrow">
                  {serviceByKey[k].name.toLowerCase()} repair in {site.city}
                </Link>
              ))}
              <Link href={routes.cityPage} className="link-arrow">
                all appliance repair in {site.city}
              </Link>
              {relatedBrands.map((b) => (
                <Link key={b.key} href={brandHref(b)} className="link-arrow">
                  {b.name} {s.name.toLowerCase()} repair
                </Link>
              ))}
              {areas.slice(0, 2).map((a) => (
                <Link key={a.slug} href={areaHref(a)} className="link-arrow">
                  appliance repair in {a.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <aside className="hidden lg:block" aria-label="Request a quote">
          <div className="sticky top-28">
            <QuickLeadForm formId={`service_${s.key}_sidebar`} title="Request service" defaultAppliance={s.key} />
          </div>
        </aside>
      </div>

      <FinalCta title={`${s.name} acting up?`} accent="Let’s take a look." appliance={s.key} formId={`service_${s.key}_final`} />
    </>
  );
}
