import Link from 'next/link';
import { routes, site } from '@/config/site';
import { generalFaqs } from '@/content/faqs';
import { serviceHref, services } from '@/content/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FaqList } from '@/components/FaqList';
import { FinalCta } from '@/components/FinalCta';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Appliance Repair FAQ | ${site.brandName}, ${site.city} ${site.stateAbbr}`,
  description: `Answers about appliance repair in ${site.city}: brands, same-day visits, diagnostic visits, repair vs replace, gas appliances, ZIP codes and scheduling.`,
  path: routes.faq,
});

export default function FaqPage() {
  return (
    <>
      <div className="bg-surface">
        <div className="mx-auto max-w-4xl px-4 pb-16 pt-6 lg:px-6">
          <Breadcrumbs items={[{ name: 'FAQs', path: routes.faq }]} />
          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-navy md:text-5xl">
            Appliance Repair Questions
          </h1>
          <p className="mt-4 text-lg text-ink-body">
            Straight answers to what people in {site.city} ask us most. Don’t see yours? Call and ask.
          </p>
          <div className="mt-10">
            <FaqList faqs={generalFaqs} />
          </div>
          <h2 className="mt-12 font-heading text-2xl font-extrabold text-navy">Questions about a specific appliance</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.key}>
                <Link href={`${serviceHref(s.key)}#faq-heading`} className="font-semibold text-navy underline">
                  {s.name} repair FAQ
                </Link>
              </li>
            ))}
            <li>
              <Link href={routes.cityPage} className="font-semibold text-navy underline">
                Appliance repair in {site.city}
              </Link>
            </li>
            <li>
              <Link href={routes.request} className="font-semibold text-navy underline">
                Request service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <FinalCta formId="faq_final" />
    </>
  );
}
