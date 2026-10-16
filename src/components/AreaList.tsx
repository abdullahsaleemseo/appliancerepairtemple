import Link from 'next/link';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { Icon } from './Icon';
import { PhoneLink } from './PhoneLink';

const points = [
  { x: 74, y: 178, n: 'Killeen', dy: 22 },
  { x: 140, y: 168, n: 'Harker Heights', dy: -14 },
  { x: 205, y: 160, n: 'Belton', dy: 22 },
  { x: 214, y: 232, n: 'Salado', dy: 22 },
  { x: 312, y: 52, n: 'Troy', dy: -12 },
];

export function AreaMap() {
  return (
    <div className="grain relative overflow-hidden rounded-card bg-ink">
      <svg viewBox="0 0 400 300" className="relative h-full w-full" role="img" aria-label={`Map showing ${site.city} at the center of the service area`}>
        <defs>
          <radialGradient id="glow" cx="62%" cy="42%" r="45%">
            <stop offset="0" stopColor="#FF7A3D" stopOpacity=".45" />
            <stop offset="1" stopColor="#FF7A3D" stopOpacity="0" />
          </radialGradient>
          <pattern id="dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="#fff" fillOpacity=".08" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#dots)" />
        <rect width="400" height="300" fill="url(#glow)" />
        <circle cx="250" cy="125" r="120" fill="none" stroke="#fff" strokeOpacity=".12" strokeDasharray="4 6" />
        <circle cx="250" cy="125" r="70" fill="none" stroke="#fff" strokeOpacity=".1" strokeDasharray="4 6" />
        <path d="M265 0 C258 80 246 140 228 300" stroke="#fff" strokeOpacity=".16" strokeWidth="3" fill="none" />
        <path d="M20 182 C120 176 180 160 250 125" stroke="#fff" strokeOpacity=".16" strokeWidth="3" fill="none" />
        {points.map((p) => (
          <g key={p.n}>
            <circle cx={p.x} cy={p.y} r="4.5" fill="#9CCBFF" />
            <text x={p.x} y={p.y + p.dy} textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" fillOpacity=".75">
              {p.n}
            </text>
          </g>
        ))}
        <circle cx="250" cy="125" r="16" fill="#FF7A3D" fillOpacity=".25" />
        <circle cx="250" cy="125" r="8" fill="#FF7A3D" />
        <text x="268" y="121" fontSize="18" fontWeight="800" fill="#fff">
          {site.city}
        </text>
      </svg>
      <p className="absolute bottom-3 right-4 text-[11px] text-white/40">Not to scale</p>
    </div>
  );
}

export function AreaBlock() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
      <AreaMap />
      <div>
        <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">{site.city} ZIP codes</h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {site.templeZips.map((z) => (
            <li key={z} className="rounded-full bg-ink px-4 py-2 font-display font-semibold tracking-wide text-white">
              {z}
            </li>
          ))}
        </ul>
        <h3 className="mt-10 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">Nearby towns</h3>
        <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
          {site.nearbyTowns.map((t) => {
            const a = areas.find((x) => x.name === t);
            return (
              <li key={t} className="flex items-center gap-2 text-ink-body">
                <Icon name="pin" className="h-4 w-4 shrink-0 text-flame" />
                {a ? (
                  <Link href={areaHref(a)} className="font-semibold text-ink underline decoration-flame/50 underline-offset-4 hover:decoration-flame">
                    {t}
                  </Link>
                ) : (
                  t
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-10 rounded-2xl border border-sand bg-white p-5 text-ink-body">
          Don’t see your town? <PhoneLink location="area_block" className="font-semibold text-ink underline decoration-flame underline-offset-4" label="Call" /> or{' '}
          <Link href={routes.areas} className="font-semibold text-ink underline decoration-flame underline-offset-4">
            see the full area
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
