import Link from 'next/link';
import { routes, site } from '@/config/site';
import { faqGroups, generalFaqs } from '@/content/faqs';
import { serviceHref, services } from '@/content/services';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { faqSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair FAQ | ${site.city}, ${site.stateAbbr} Answers Before You Call`,
  description: `Appliance repair FAQ for ${site.city}, ${site.stateAbbr}: how the free call works, checking a license and insurance, repair or replace, brands, areas and safety.`,
  path: routes.faq,
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <PageHero crumbs={[{ name: 'FAQs', path: routes.faq }]} title={`${site.city} Appliance Repair FAQ,`} accent="answered plainly.">
        <div className="prose-copy prose-dark">
          <p>
            These are the questions homeowners in {site.city} and the nearby towns ask most, from how the free call works and how to
            check a provider&rsquo;s license and insurance to deciding whether an old appliance is worth fixing. {site.brandName}
            connects you with independent local appliance repair pros. If your question is not here, call and ask.
          </p>
        </div>
        <div className="mt-8">
          <CtaRow location="faq_hero" dark />
        </div>
      </PageHero>

      <div className="mx-auto grid max-w-site gap-12 px-4 py-20 lg:grid-cols-[1fr_2.2fr] lg:px-6">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-label="FAQ topics" className="card p-7">
            <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">Topics</h2>
            <ul className="mt-5 space-y-3">
              {faqGroups.map((g) => (
                <li key={g.id}>
                  <a href={`#${g.id}`} className="link-arrow">
                    {g.title} {g.accent}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 font-display text-xl font-bold tracking-[-0.02em] text-ink">By appliance</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.key}>
                  <Link href={`${serviceHref(s.key)}#faq-heading`} className="link-arrow">
                    {s.name} repair FAQ
                  </Link>
                </li>
              ))}
              <li>
                <Link href={routes.cityPage} className="link-arrow">
                  Appliance repair in {site.city}
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <div className="space-y-16">
          {faqGroups.map((g) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-heading`} className="scroll-mt-28">
              <h2 id={`${g.id}-heading`} className="h-display mb-6 text-3xl text-ink sm:text-4xl">
                {g.title} <span className="accent text-flame">{g.accent}</span>
              </h2>
              <FaqList faqs={g.faqs} schema={false} />
            </section>
          ))}
        </div>
      </div>

      <FinalCta formId="faq_final" />
    </>
  );
}
