import { canShow, claims } from '@/config/site';
import { DraftBlock } from './Verify';

type Row = { label: string; note: string; price?: string };

/** Prices come from the owner. Rows without a confirmed price keep the block in draft. */
export function PricingTable({ rows }: { rows: Row[] }) {
  const complete = rows.every((r) => r.price);
  return (
    <DraftBlock show={complete} label="REAL PRICES ONLY: REPLACE BEFORE LAUNCH">
      <div className="overflow-hidden rounded-card bg-white shadow-card">
        <table className="w-full text-left">
          <caption className="sr-only">Typical repair pricing</caption>
          <thead className="bg-surface text-sm uppercase tracking-wide text-ink-muted">
            <tr>
              <th scope="col" className="px-5 py-3 font-semibold">Service</th>
              <th scope="col" className="px-5 py-3 text-right font-semibold">Typical price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="px-5 py-4 font-normal">
                  <span className="block font-bold text-navy">{r.label}</span>
                  <span className="text-sm text-ink-muted">{r.note}</span>
                </th>
                <td className="px-5 py-4 text-right font-heading font-extrabold text-navy">{r.price ?? '[PRICE]'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="border-t border-slate-100 px-5 py-4 text-sm text-ink-body">
          Final price depends on the model and the part. The technician gives you the exact number before any work starts.
        </p>
      </div>
    </DraftBlock>
  );
}

export function PricingCards() {
  const fee = claims.diagnosticFee;
  const cards = [
    {
      title: 'Diagnostic visit',
      price: fee.value.amount,
      text: fee.value.waivedWithRepair ? 'Credited toward the repair if you go ahead with it.' : 'Covers testing and a written repair price.',
    },
    { title: 'Common repairs', price: 'from [PRICE]', text: 'Fan motors, pumps, igniters, belts, switches and valves.' },
    { title: 'No surprise fees', price: 'Price first', text: 'You approve the price before work starts. No charge for the trip beyond the diagnostic fee.' },
  ];
  if (!canShow(fee)) return null;
  return (
    <DraftBlock show={fee.verified} label="REAL PRICES ONLY: REPLACE BEFORE LAUNCH">
      <ul className="grid gap-5 md:grid-cols-3">
        {cards.map((c) => (
          <li key={c.title} className="rounded-card bg-white p-6 shadow-card">
            <h3 className="font-heading text-lg font-extrabold text-navy">{c.title}</h3>
            <p className="mt-2 font-heading text-3xl font-extrabold text-brand-dark">{c.price}</p>
            <p className="mt-3 text-ink-body">{c.text}</p>
          </li>
        ))}
      </ul>
    </DraftBlock>
  );
}

export function PaymentStrip() {
  const p = claims.paymentOptions;
  if (!canShow(p)) return null;
  return (
    <DraftBlock show={p.verified} label="LIST ONLY PAYMENT OPTIONS THE OWNER CONFIRMS">
      <div className="flex flex-col items-start gap-2 rounded-card bg-white px-6 py-5 shadow-card md:flex-row md:items-center md:justify-between">
        <p className="font-heading text-lg font-bold text-navy">Flexible payment options available. Ask for details.</p>
        <p className="text-ink-body">{p.value.join(' · ')}</p>
      </div>
    </DraftBlock>
  );
}
