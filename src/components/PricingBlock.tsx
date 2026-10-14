import { canShow, claims } from '@/config/site';
import { DraftBlock } from './Verify';

type Row = { label: string; note: string; price?: string };

/** Prices come from the owner. Rows without a confirmed price keep the block in draft. */
export function PricingTable({ rows }: { rows: Row[] }) {
  const complete = rows.every((r) => r.price);
  return (
    <DraftBlock show={complete} label="REAL PRICES ONLY: REPLACE BEFORE LAUNCH">
      <div className="card overflow-hidden">
        <table className="w-full text-left">
          <caption className="sr-only">Typical repair pricing</caption>
          <thead className="text-[12px] uppercase tracking-[0.14em] text-ink-muted">
            <tr className="border-b border-sand">
              <th scope="col" className="px-6 py-4 font-semibold">Repair</th>
              <th scope="col" className="px-6 py-4 text-right font-semibold">Typical price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sand/70">
            {rows.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="px-6 py-5 font-normal">
                  <span className="block font-semibold text-ink">{r.label}</span>
                  <span className="text-sm text-ink-muted">{r.note}</span>
                </th>
                <td className="px-6 py-5 text-right font-display text-lg font-bold text-ink">{r.price ?? '[PRICE]'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="bg-canvas px-6 py-4 text-sm text-ink-body">
          Final price depends on the model and the part. The technician gives you the exact number before any work starts.
        </p>
      </div>
    </DraftBlock>
  );
}

export function PricingCards() {
  const fee = claims.diagnosticFee;
  if (!canShow(fee)) return null;
  const cards = [
    {
      title: 'Diagnostic visit',
      price: fee.value.amount,
      text: fee.value.waivedWithRepair ? 'Credited toward the repair if you go ahead with it.' : 'Covers testing and a written repair price.',
      featured: false,
    },
    { title: 'Common repairs', price: 'from [PRICE]', text: 'Fan motors, pumps, igniters, belts, switches and valves.', featured: true },
    {
      title: 'No surprise fees',
      price: 'Price first',
      text: 'You approve the price before work starts. No charge for the trip beyond the diagnostic fee.',
      featured: false,
    },
  ];
  return (
    <DraftBlock show={fee.verified} label="REAL PRICES ONLY: REPLACE BEFORE LAUNCH">
      <ul className="grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <li key={c.title} className={`rounded-card p-7 ${c.featured ? 'grain bg-ink text-white shadow-lift' : 'card'}`}>
            <h3 className={`text-[13px] font-semibold uppercase tracking-[0.14em] ${c.featured ? 'text-flame-glow' : 'text-ink-muted'}`}>{c.title}</h3>
            <p className={`mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] ${c.featured ? 'text-white' : 'text-ink'}`}>{c.price}</p>
            <p className={`mt-3 ${c.featured ? 'text-white/65' : 'text-ink-body'}`}>{c.text}</p>
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
      <div className="flex flex-col items-start gap-2 rounded-card border border-sand bg-white/60 px-7 py-5 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-lg font-bold text-ink">Flexible payment options. Ask for details.</p>
        <p className="text-ink-body">{p.value.join(' · ')}</p>
      </div>
    </DraftBlock>
  );
}
