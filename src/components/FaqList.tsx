import type { Faq } from '@/content/types';
import { faqSchema } from '@/lib/schema';
import { Icon } from './Icon';
import { JsonLd } from './JsonLd';

/** Native details/summary accordion: keyboard accessible with no JavaScript. Emits FAQPage schema for the visible questions. */
export function FaqList({ faqs, schema = true }: { faqs: Faq[]; schema?: boolean }) {
  return (
    <>
      <div className="divide-y divide-slate-200 rounded-card bg-white shadow-card">
        {faqs.map((f) => (
          <details key={f.q} className="group px-5 md:px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-heading text-[17px] font-bold text-navy focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy [&::-webkit-details-marker]:hidden">
              <h3 className="text-left">{f.q}</h3>
              <Icon name="chevron" className="h-5 w-5 shrink-0 text-brand-dark transition group-open:rotate-180" />
            </summary>
            <p className="pb-5 text-ink-body">{f.a}</p>
          </details>
        ))}
      </div>
      {schema ? <JsonLd data={faqSchema(faqs)} /> : null}
    </>
  );
}
