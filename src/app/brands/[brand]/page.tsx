import Link from 'next/link';
import { notFound } from 'next/navigation';
import { routes, site } from '@/config/site';
import { brands, brandHref } from '@/content/brands';
import { serviceByKey, serviceHref } from '@/content/services';
import { PageHero } from '@/components/PageHero';
import { PhoneLink } from '@/components/PhoneLink';
import { TrustBadges } from '@/components/TrustBadges';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { HowItWorks } from '@/components/HowItWorks';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { Section, SectionHeading } from '@/components/Section';
import { VerifyTag } from '@/components/Verify';
import { pageMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.filter((b) => b.hasPage).map((b) => ({ brand: b.slug }));
}

type Params = { params: Promise<{ brand: string }> };
const find = (slug: string) => brands.find((b) => b.slug === slug && b.hasPage);

export async function generateMetadata({ params }: Params) {
  const b = find((await params).brand);
  if (!b) return {};
  return pageMetadata({ title: b.metaTitle, description: b.metaDescription, path: brandHref(b) });
}

export default async function BrandPage({ params }: Params) {
  const b = find((await params).brand);
  if (!b) notFound();
  const path = brandHref(b);
  return (
    <>
      <PageHero
        crumbs={[
          { name: 'Brands', path: routes.brands },
          { name: b.name, path },
        ]}
        title={b.h1 ?? `${b.name} Appliance Repair in ${site.city}, ${site.state}`}
      >
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">{b.intro[0]}</p>
        <div className="mt-8">
          <CtaRow location={`brand_${b.key}_hero`} dark />
        </div>
        <div className="mt-8 border-t border-white/10 pt-6">
          <TrustBadges dark />
        </div>
      </PageHero>

      {b.intro.length > 1 ? (
        <Section labelledBy="about-heading" className="!pb-0">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <SectionHeading id="about-heading" eyebrow={b.name} title={`${b.name} repair`} accent={`in ${site.city}.`} />
            <div className="prose-copy">
              {b.intro.slice(1).map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </Section>
      ) : null}

      <Section labelledBy="types-heading">
        <SectionHeading id="types-heading" eyebrow="Appliances" title={`${b.name} appliances`} accent="we repair." />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {b.appliances.map((a) => {
            const s = serviceByKey[a.key];
            return (
              <li key={a.key}>
                <Link href={serviceHref(a.key)} className="card group flex h-full items-start gap-4 p-6 transition hover:-translate-y-1 hover:shadow-lift">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-canvas text-ink transition group-hover:bg-flame group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-bold tracking-[-0.02em] text-ink">
                      {b.name} {s.name.toLowerCase()} repair
                    </span>
                    <span className="mt-1 block text-[15px] text-ink-body">{a.note}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="ink" labelledBy="issues-heading">
        <SectionHeading
          id="issues-heading"
          eyebrow="What we see"
          title={`Common ${b.name} problems`}
          accent="and what they usually mean."
          intro="General patterns, not model-specific defects. The technician confirms the cause on your appliance before replacing anything."
          dark
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {b.issues.map((i) => (
            <li key={i.title} className="card-dark p-7">
              <h3 className="font-display text-[21px] font-bold tracking-[-0.025em] text-white">{i.title}</h3>
              <p className="mt-2 text-[15px] text-white/60">{i.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {b.haveReady || b.modelLocations ? (
        <Section labelledBy="ready-heading">
          <SectionHeading
            id="ready-heading"
            eyebrow="Before you call"
            title="What to have ready"
            accent="when you call."
            intro="A minute of prep helps the technician bring the right parts and often saves a second trip."
          />
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            {b.haveReady ? (
              <div className="card self-start p-7">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">Checklist</h3>
                <ul className="prose-copy">
                  {b.haveReady.map((t) => (
                    <li key={t.slice(0, 24)}>{t}</li>
                  ))}
                </ul>
                <p className="mt-6">
                  <PhoneLink location={`brand_${b.key}_ready`} withIcon label="Call" className="inline-flex items-center gap-2 font-semibold text-ink underline decoration-flame underline-offset-4" />
                </p>
              </div>
            ) : null}
            {b.modelLocations ? (
              <div className="card overflow-hidden">
                <table className="w-full text-left text-[15px]">
                  <caption className="px-6 pt-6 text-left font-display text-xl font-bold tracking-[-0.02em] text-ink">
                    Where to find the {b.name} model number
                  </caption>
                  <thead className="text-[12px] uppercase tracking-[0.14em] text-ink-muted">
                    <tr className="border-b border-sand">
                      <th scope="col" className="px-6 py-4 font-semibold">Appliance</th>
                      <th scope="col" className="px-6 py-4 font-semibold">Usually found</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand/70">
                    {b.modelLocations.map((m) => (
                      <tr key={m.appliance} className="align-top">
                        <th scope="row" className="px-6 py-4 font-semibold text-ink">{m.appliance}</th>
                        <td className="px-6 py-4 text-ink-body">{m.where}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {b.modelSource ? (
                  <p className="border-t border-sand bg-canvas px-6 py-4 text-[13px] text-ink-muted">
                    Locations vary by model. Source:{' '}
                    <a href={b.modelSource.url} rel="noopener" className="underline underline-offset-2 hover:text-ink">
                      {b.modelSource.name}
                    </a>
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>
        </Section>
      ) : null}

      <Section tone="white" labelledBy="process-heading">
        <SectionHeading id="process-heading" eyebrow="Process" title="How service" accent="works." center />
        <HowItWorks />
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading id="faq-heading" eyebrow="FAQ" title={`${b.name} repair`} accent="questions." />
            <div className="-mt-6 flex flex-col gap-3">
              <Link href={routes.cityPage} className="link-arrow">
                Appliance repair in {site.city}
              </Link>
              <Link href={routes.brands} className="link-arrow">
                All brands we service
              </Link>
            </div>
          </div>
          <FaqList faqs={b.faqs} />
        </div>
        <aside className="mt-12 rounded-2xl border border-sand bg-white p-6 text-[14px] leading-relaxed text-ink-body">
          <strong className="font-semibold text-ink">Trademark notice:</strong> {b.name} is a trademark of its respective owner.{' '}
          {site.brandName} is an independent repair service and is not affiliated with, authorized by or endorsed by {b.name}.
          Brand names are used only to describe the appliances we repair.
        </aside>
      </Section>

      <FinalCta formId={`brand_${b.key}_final`} title={`${b.name} acting up?`} accent="We can help." />
    </>
  );
}
