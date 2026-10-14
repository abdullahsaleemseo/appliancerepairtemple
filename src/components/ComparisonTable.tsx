import { canShow, claims } from '@/config/site';
import { Icon } from './Icon';
import { DraftBlock } from './Verify';

const rows = [
  { label: 'Repair price given before work starts', claim: claims.upfrontPricing },
  { label: 'Same-day slots when the schedule allows', claim: claims.sameDay },
  { label: claims.warranty.value.long, claim: claims.warranty },
  { label: 'Background-checked technicians', claim: claims.backgroundChecked },
];

/** Only verified rows survive in production. If none are verified, the table is dropped. */
export function ComparisonTable() {
  const visible = rows.filter((r) => canShow(r.claim));
  if (!visible.length) return null;
  const allVerified = visible.every((r) => r.claim.verified);
  return (
    <DraftBlock show={allVerified} label="VERIFY EACH ROW WITH THE OWNER">
      <div className="overflow-hidden rounded-card bg-white shadow-card">
        <table className="w-full text-left">
          <caption className="sr-only">How our service compares with typical repair shops</caption>
          <thead>
            <tr className="bg-navy text-white">
              <th scope="col" className="px-4 py-4 text-[15px] font-semibold md:px-6">What you get</th>
              <th scope="col" className="w-24 px-2 py-4 text-center text-[15px] font-semibold md:w-40">Us</th>
              <th scope="col" className="w-24 px-2 py-4 text-center text-[15px] font-semibold md:w-40">Typical shops</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {visible.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="px-4 py-4 font-medium text-ink md:px-6">{r.label}</th>
                <td className="px-2 py-4 text-center">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-trust-light text-trust-dark">
                    <Icon name="check" className="h-5 w-5" strokeWidth={2.5} title="Yes" />
                  </span>
                </td>
                <td className="px-2 py-4 text-center text-xl font-bold text-slate-400">
                  <span aria-label="Varies">-</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DraftBlock>
  );
}
