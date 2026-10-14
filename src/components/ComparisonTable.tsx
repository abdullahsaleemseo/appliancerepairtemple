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
  return (
    <DraftBlock show={visible.every((r) => r.claim.verified)} label="VERIFY EACH ROW WITH THE OWNER">
      <div className="card-dark overflow-hidden">
        <table className="w-full text-left">
          <caption className="sr-only">How our service compares with typical repair shops</caption>
          <thead>
            <tr className="border-b border-white/10 text-[13px] uppercase tracking-[0.12em] text-white/50">
              <th scope="col" className="px-5 py-4 font-semibold md:px-7">What you get</th>
              <th scope="col" className="w-20 px-2 py-4 text-center font-semibold text-flame-glow md:w-28">Us</th>
              <th scope="col" className="w-24 px-2 py-4 text-center font-semibold md:w-32">Typical</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.06]">
            {visible.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="px-5 py-5 text-[15px] font-medium text-white md:px-7">{r.label}</th>
                <td className="px-2 py-5 text-center">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-mint-bright/15 text-mint-bright">
                    <Icon name="check" className="h-5 w-5" strokeWidth={2.5} title="Yes" />
                  </span>
                </td>
                <td className="px-2 py-5 text-center text-white/30">
                  <span aria-label="Varies">Varies</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DraftBlock>
  );
}
