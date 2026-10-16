import type { Faq } from '@/content/types';
import { faqSchema } from '@/lib/schema';
import { JsonLd } from './JsonLd';

/** Native details/summary accordion: keyboard accessible with no JavaScript. Emits FAQPage schema for the visible questions. */
export function FaqList({ faqs, schema = true }: { faqs: Faq[]; schema?: boolean }) {
  return (
    <>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-sand bg-white transition open:shadow-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-flame [&::-webkit-details-marker]:hidden">
              <h3 className="text-left font-display text-[18px] font-semibold tracking-[-0.015em] text-ink">{f.q}</h3>
              <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-canvas transition group-open:rotate-45 group-open:bg-flame group-open:text-white" aria-hidden="true">
                <span className="absolute h-0.5 w-3.5 rounded bg-current" />
                <span className="absolute h-3.5 w-0.5 rounded bg-current" />
              </span>
            </summary>
            <p className="-mt-1 px-6 pb-6 pr-16 text-ink-body">{f.a}</p>
          </details>
        ))}
      </div>
      {schema ? <JsonLd data={faqSchema(faqs)} /> : null}
    </>
  );
}
