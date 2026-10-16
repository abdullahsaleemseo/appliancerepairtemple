import Link from 'next/link';
import { serviceByKey, serviceHref } from '@/content/services';
import type { ApplianceKey } from '@/content/types';

const rows: { key: ApplianceKey; types: string; problems: string }[] = [
  { key: 'refrigerator', types: 'Top-freezer, bottom-freezer, side-by-side and French door refrigerators', problems: 'Not cooling, leaking, ice maker not working, frost buildup, noisy, error codes' },
  { key: 'freezer', types: 'Chest and upright freezers, including garage units', problems: 'Not freezing, frosting up, running constantly, door or lid not sealing' },
  { key: 'washer', types: 'Top-load, front-load and high-efficiency washers', problems: 'Not draining, not spinning, leaking, shaking, door lock errors' },
  { key: 'dryer', types: 'Electric and gas dryers, including propane', problems: 'Not heating, taking too long, squealing or thumping, not turning on' },
  { key: 'dishwasher', types: 'Built-in dishwashers', problems: 'Not draining, not cleaning, leaking, not drying, not starting' },
  { key: 'oven', types: 'Gas and electric ranges, ovens, wall ovens and cooktops', problems: 'Not heating, uneven baking, burner not lighting, control or display faults' },
  { key: 'microwave', types: 'Over-the-range and built-in microwaves', problems: 'Not heating, turntable stopped, fan or light out, touchpad not responding' },
];

/** All seven services with the types covered and common problems, each linking to its service page. */
export function ServicesTable({ place }: { place: string }) {
  return (
    <div className="overflow-hidden rounded-card border border-sand">
      <table className="w-full text-left text-[15px]">
        <caption className="sr-only">Appliance repair services in {place}, the types covered and common problems</caption>
        <thead className="bg-canvas text-[13px] uppercase tracking-[0.1em] text-ink-muted">
          <tr>
            <th scope="col" className="px-5 py-4 font-semibold">Service</th>
            <th scope="col" className="hidden px-5 py-4 font-semibold md:table-cell">Types we repair</th>
            <th scope="col" className="px-5 py-4 font-semibold">Common problems</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-sand bg-white">
          {rows.map((g) => (
            <tr key={g.key}>
              <th scope="row" className="px-5 py-4 align-top font-semibold text-ink">
                <Link href={serviceHref(g.key)} className="underline decoration-flame/50 underline-offset-4 hover:decoration-flame">
                  {serviceByKey[g.key].name} repair
                </Link>
                <span className="mt-1 block text-[13px] font-normal text-ink-muted md:hidden">{g.types}</span>
              </th>
              <td className="hidden px-5 py-4 align-top text-ink-body md:table-cell">{g.types}</td>
              <td className="px-5 py-4 align-top text-ink-body">{g.problems}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
