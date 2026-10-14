import Link from 'next/link';
import { routes, site } from '@/config/site';
import { generalFaqs } from '@/content/faqs';
import { serviceHref, services } from '@/content/services';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { PageHero } from '@/components/PageHero';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair FAQ | ${site.brandName}, ${site.city} ${site.stateAbbr}`,
  description: `Answers about appliance repair in ${site.city}: brands, same-day visits, diagnostic visits, repair vs replace, gas appliances, ZIP codes and scheduling.`,
  path: routes.faq,
});

export default function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ name: 'FAQs', path: routes.faq }]} title="Appliance Repair" accent="Questions">
        <p className="text-lg text-white/70">Straight answers to what people in {site.city} ask us most. Don’t see yours? Call and ask.</p>
      </PageHero>
      <div className="mx-auto grid max-w-site gap-12 px-4 py-20 lg:grid-cols-[1.6fr_1fr] lg:px-6">
        <FaqList faqs={generalFaqs} />
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="card p-7">
            <h2 className="font-display text-xl font-bold tracking-[-0.02em] text-ink">By appliance</h2>
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
              <li>
                <Link href={routes.request} className="link-arrow">
                  Request service
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
      <FinalCta formId="faq_final" />
    </>
  );
}
