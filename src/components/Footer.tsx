import Link from 'next/link';
import { canShow, routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { serviceLinks } from './nav';
import { Logo } from './Logo';
import { PhoneLink } from './PhoneLink';
import { VerifyTag } from './Verify';

const col = 'text-[12px] font-semibold uppercase tracking-[0.18em] text-white/40';
const link = 'text-[15px] text-white/70 transition hover:text-white';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="grain relative overflow-hidden bg-ink text-white/70">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-flame/20 blur-[120px]" />
      <div className="relative mx-auto max-w-site px-4 pt-16 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo variant="full" className="-ml-1 h-[112px] lg:h-[128px]" />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed">{site.footerAreaLine}</p>
            <PhoneLink location="footer" showTag className="mt-6 inline-block font-display text-3xl font-bold tracking-[-0.03em] text-white hover:text-flame-glow" />
            <div className="mt-3 space-y-1 text-[15px]">
              {canShow(site.email) ? (
                <p>
                  <a href={`mailto:${site.email.value}`} className="hover:text-white">
                    {site.email.value}
                  </a>
                  {!site.email.verified ? <VerifyTag label="REPLACE EMAIL" /> : null}
                </p>
              ) : null}
              {canShow(site.hours) ? (
                <p>
                  {site.hours.value.long}
                  {!site.hours.verified ? <VerifyTag label="VERIFY HOURS" /> : null}
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <h2 className={col}>Repairs</h2>
            <ul className="mt-5 space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={col}>Areas</h2>
            <ul className="mt-5 space-y-2.5">
              <li>
                <Link href={routes.cityPage} className={link}>
                  {site.city}, {site.stateAbbr}
                </Link>
              </li>
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={areaHref(a)} className={link}>
                    {a.name}, {site.stateAbbr}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={routes.areas} className={link}>
                  All service areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={col}>Company</h2>
            <ul className="mt-5 space-y-2.5">
              <li><Link href={routes.about} className={link}>About</Link></li>
              <li><Link href={routes.reviews} className={link}>Reviews</Link></li>
              <li><Link href={routes.brands} className={link}>Brands</Link></li>
              <li><Link href={routes.faq} className={link}>FAQs</Link></li>
              <li><Link href={routes.blog} className={link}>Repair tips</Link></li>
              <li><Link href={routes.contact} className={link}>Contact</Link></li>
              <li><Link href={routes.request} className={link}>Request Service</Link></li>
            </ul>
          </div>
        </div>

      </div>

      {/* Decorative logo band: low-opacity lockups drifting right to left. Hidden from assistive tech; stops for reduced motion. */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative mt-14 select-none overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] lg:mt-20 lg:py-10"
      >
        <div className="flex w-max animate-marquee opacity-[0.07]" style={{ animationDuration: '60s' }}>
          {Array.from({ length: 12 }, (_, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src="/brand/logo-compact.svg"
              alt=""
              width={1083}
              height={316}
              loading="lazy"
              decoding="async"
              className="mx-8 h-16 w-auto shrink-0 sm:mx-12 sm:h-24 lg:mx-16 lg:h-36"
            />
          ))}
        </div>
      </div>

      <div className="relative border-t border-white/[0.08]">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-4 py-6 text-[13px] sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <p>
            © {year} {site.brandName}. Independent repair service, not affiliated with any appliance manufacturer.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href={routes.privacy} className="hover:text-white">Privacy</Link></li>
            <li><Link href={routes.terms} className="hover:text-white">Terms</Link></li>
            <li><Link href={routes.accessibility} className="hover:text-white">Accessibility</Link></li>
            {site.social.map((s) => (
              <li key={s.url}>
                <a href={s.url} className="hover:text-white" rel="noopener">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
