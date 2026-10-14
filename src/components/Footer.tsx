import Link from 'next/link';
import { canShow, routes, site } from '@/config/site';
import { areas, areaHref } from '@/content/areas';
import { serviceLinks } from './nav';
import { Logo } from './Logo';
import { PhoneLink } from './PhoneLink';
import { VerifyTag } from './Verify';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-site gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
        <div>
          <Logo light />
          <p className="mt-4 text-[15px] leading-relaxed">{site.footerAreaLine}</p>
          <p className="mt-4">
            <PhoneLink location="footer" showTag className="text-xl font-extrabold text-white hover:text-brand" />
          </p>
          {canShow(site.email) ? (
            <p className="mt-2 text-[15px]">
              <a href={`mailto:${site.email.value}`} className="hover:text-white">
                {site.email.value}
              </a>
              {!site.email.verified ? <VerifyTag label="REPLACE EMAIL" /> : null}
            </p>
          ) : null}
          {canShow(site.hours) ? (
            <p className="mt-2 text-[15px]">
              {site.hours.value.long}
              {!site.hours.verified ? <VerifyTag label="VERIFY HOURS" /> : null}
            </p>
          ) : null}
        </div>

        <div>
          <h2 className="font-heading text-base font-bold text-white">Services</h2>
          <ul className="mt-4 space-y-2 text-[15px]">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-base font-bold text-white">Service Areas</h2>
          <ul className="mt-4 space-y-2 text-[15px]">
            <li>
              <Link href={routes.cityPage} className="hover:text-white">
                {site.city}, {site.stateAbbr}
              </Link>
            </li>
            {areas.map((a) => (
              <li key={a.slug}>
                <Link href={areaHref(a)} className="hover:text-white">
                  {a.name}, {site.stateAbbr}
                </Link>
              </li>
            ))}
            <li>
              <Link href={routes.areas} className="hover:text-white">
                All service areas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-base font-bold text-white">Company</h2>
          <ul className="mt-4 space-y-2 text-[15px]">
            <li><Link href={routes.about} className="hover:text-white">About</Link></li>
            <li><Link href={routes.brands} className="hover:text-white">Brands</Link></li>
            <li><Link href={routes.faq} className="hover:text-white">FAQs</Link></li>
            <li><Link href={routes.blog} className="hover:text-white">Repair tips</Link></li>
            <li><Link href={routes.contact} className="hover:text-white">Contact</Link></li>
            <li><Link href={routes.request} className="hover:text-white">Request Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:px-6">
          <p>
            © {year} {site.brandName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href={routes.privacy} className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href={routes.terms} className="hover:text-white">Terms of Service</Link></li>
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
        <p className="mx-auto max-w-site px-4 pb-6 text-xs text-white/60 lg:px-6">
          Brand names mentioned on this site are trademarks of their respective owners. {site.brandName} is an independent
          repair service and is not affiliated with or authorized by any appliance manufacturer.
        </p>
      </div>
    </footer>
  );
}
