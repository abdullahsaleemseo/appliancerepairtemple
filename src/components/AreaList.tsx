import Link from 'next/link';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { Icon } from './Icon';
import { PhoneLink } from './PhoneLink';

export function AreaBlock() {
  const pageNames = new Set(areas.map((a) => a.name));
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.4fr]">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-card bg-surface">
        <svg viewBox="0 0 400 300" className="h-full w-full" role="img" aria-label={`Map showing ${site.city} at the center of the service area`}>
          <defs>
            <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0v24" fill="none" stroke="#0B2B4C" strokeOpacity=".06" />
            </pattern>
          </defs>
          <rect width="400" height="300" fill="url(#grid)" />
          <circle cx="230" cy="130" r="115" fill="#0B2B4C" fillOpacity=".05" stroke="#0B2B4C" strokeOpacity=".15" strokeDasharray="6 6" />
          <path d="M250 10 C245 80 238 140 225 290" stroke="#0B2B4C" strokeOpacity=".2" strokeWidth="5" fill="none" />
          <path d="M40 160 C120 158 170 150 230 130" stroke="#0B2B4C" strokeOpacity=".2" strokeWidth="5" fill="none" />
          {[
            { x: 70, y: 166, n: 'Killeen' },
            { x: 140, y: 160, n: 'Harker Heights', above: true },
            { x: 200, y: 150, n: 'Belton' },
            { x: 210, y: 215, n: 'Salado' },
            { x: 300, y: 40, n: 'Troy' },
          ].map((p) => (
            <g key={p.n}>
              <circle cx={p.x} cy={p.y} r="5" fill="#0B2B4C" />
              <text x={p.x} y={'above' in p ? p.y - 12 : p.y + 20} textAnchor="middle" fontSize="12" fontWeight="600" fill="#1A2332">
                {p.n}
              </text>
            </g>
          ))}
          <circle cx="245" cy="118" r="11" fill="#F26A1B" />
          <circle cx="245" cy="118" r="4" fill="#fff" />
          <text x="262" y="114" fontSize="16" fontWeight="800" fill="#0B2B4C">
            {site.city}
          </text>
        </svg>
        <p className="absolute bottom-2 right-3 text-xs text-ink-muted">Not to scale</p>
      </div>
      <div>
        <h3 className="font-heading text-lg font-extrabold text-navy">{site.city} ZIP codes</h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {site.templeZips.map((z) => (
            <li key={z} className="rounded-full bg-white px-4 py-2 font-semibold text-navy shadow-card">
              {z}
            </li>
          ))}
        </ul>
        <h3 className="mt-8 font-heading text-lg font-extrabold text-navy">Nearby areas we serve</h3>
        <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
          {site.nearbyTowns.map((t) => {
            const a = areas.find((x) => x.name === t);
            return (
              <li key={t} className="flex items-center gap-2 text-ink-body">
                <Icon name="pin" className="h-4 w-4 shrink-0 text-brand-dark" />
                {a && pageNames.has(t) ? (
                  <Link href={areaHref(a)} className="font-semibold text-navy hover:underline">
                    {t}
                  </Link>
                ) : (
                  t
                )}
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-ink-body">
          Don’t see your area? <PhoneLink location="area_block" className="font-bold text-navy underline" label="Call us at" /> or{' '}
          <Link href={routes.areas} className="font-semibold text-navy underline">
            see the full service area
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
