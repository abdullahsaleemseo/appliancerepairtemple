import Link from 'next/link';
import { routes, site } from '@/config/site';
import { faqGroups, generalFaqs } from '@/content/faqs';
import { CtaRow } from '@/components/Buttons';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { faqSchema } from '@/lib/schema';
import { PhoneLink } from '@/components/PhoneLink';
import { pageMetadata } from '@/lib/seo';

/** FAQ page (source: content/faq-v2.md, Nov 2026). FAQPage schema comes from the same strings that render. */
export const metadata = pageMetadata({
  title: 'Appliance Repair FAQ Temple TX | Cost, Visits & Repairs',
  description:
    'Straight answers on appliance repair in Temple, TX: what to check before calling, how the price is worked out, the visit, and after the fix. (254) 615-2088.',
  path: routes.faq,
});

const white = 'font-semibold text-white underline decoration-white/40 underline-offset-4';

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(generalFaqs)} />
      <PageHero crumbs={[{ name: 'FAQs', path: routes.faq }]} title="Appliance Repair Questions," accent="Answered Plainly">
        <p className="text-lg leading-relaxed text-white/75 md:text-xl">
          These are the questions people in Temple ask before, during and after an appliance repair. If yours isn&apos;t here, or it depends on
          your appliance, phone us at <PhoneLink location="faq_intro" className={white} /> and ask it out loud.
        </p>
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

      <FinalCta
        formId="faq_final"
        title="Still have"
        accent="a question?"
        cardHeadingLevel="p"
        cardTitle="Ask it on the phone"
        text={
          <>
            Ring us at <PhoneLink location="faq_final_text" className={white} /> with the appliance, its brand and the trouble in a sentence.
            Every appliance we work on, from fridges to disposals, is laid out under{' '}
            <Link href={routes.home} className={white}>
              appliance repair in Temple
            </Link>
            .
          </>
        }
      />
    </>
  );
}
