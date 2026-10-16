import Link from 'next/link';
import { routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { Icon } from './Icon';
import { PhoneLink } from './PhoneLink';

const mapQuery = (place: string) => encodeURIComponent(`${place}, ${site.stateAbbr}`);

/** Google Map of one town, framed in the site style. Loads lazily and needs no API key. */
export function MapEmbed({ place, zoom = 12, note }: { place: string; zoom?: number; note?: string }) {
  const q = mapQuery(place);
  return (
    <figure className="overflow-hidden rounded-card border border-sand bg-white shadow-[0_24px_60px_-30px_rgba(11,17,32,0.35)]">
      <figcaption className="grain relative flex flex-wrap items-center justify-between gap-x-4 gap-y-2 overflow-hidden bg-ink px-5 py-4">
        <span className="relative flex items-center gap-2.5 font-display text-[17px] font-bold tracking-[-0.02em] text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-flame/20">
            <Icon name="pin" className="h-4 w-4 text-flame-glow" />
          </span>
          {place}, {site.stateAbbr}
        </span>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${q}`}
          target="_blank"
          rel="noopener"
          className="relative text-[14px] font-semibold text-white/80 underline decoration-flame underline-offset-4 hover:text-white"
        >
          Open in Google Maps
        </a>
      </figcaption>
      <div className="relative aspect-[4/3] bg-sand/40 sm:aspect-[16/11]">
        <iframe
          src={`https://maps.google.com/maps?q=${q}&z=${zoom}&output=embed`}
          title={`Map of ${place}, ${site.state}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0 [filter:saturate(0.8)_contrast(1.04)]"
        />
      </div>
      {note ? <p className="border-t border-sand px-5 py-3 text-[14px] text-ink-muted">{note}</p> : null}
    </figure>
  );
}

export function AreaBlock() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
      <MapEmbed place={site.city} note={`Based in ${site.city}. The technician comes to your home.`} />
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
