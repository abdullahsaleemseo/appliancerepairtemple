import Link from 'next/link';
import { phoneDisplay, routes, site, tel } from '@/config/site';
import { serviceHref, services } from '@/content/services';
import { CallButton } from '@/components/Buttons';
import { Icon } from '@/components/Icon';

export const metadata = {
  title: { absolute: `Page Not Found | ${site.brandName}` },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="grain relative overflow-hidden bg-ink">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-flame/25 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:py-28">
        <p className="font-serif text-[120px] italic leading-none text-flame-glow md:text-[180px]">404</p>
        <h1 className="h-display mt-4 text-4xl text-white md:text-6xl">This page isn’t here.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/65">
          The link may be old or mistyped. If your appliance needs fixing, you can still get help. Pick it below, or call to be connected with a local appliance repair pro.
        </p>
        <div className="mt-9 flex justify-center">
          <CallButton location="404" label="Call to get connected" />
        </div>
        <ul className="mt-14 grid gap-3 text-left sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.key}>
              <Link href={serviceHref(s.key)} className="card-dark flex items-center gap-3 px-5 py-4 font-medium text-white transition hover:bg-white/[0.08]">
                <Icon name={s.icon} className="h-5 w-5 text-flame-glow" />
                {s.navLabel}
              </Link>
            </li>
          ))}
          <li>
            <a href={tel} data-call-location="not_found_list" className="flex items-center justify-between rounded-card bg-flame px-5 py-4 font-semibold text-white">
              Call Now {phoneDisplay}
              <Icon name="phone" className="h-4 w-4" />
            </a>
          </li>
        </ul>
        <p className="mt-10 text-white/60">
          Or go to the{' '}
          <Link href="/" className="font-semibold text-white underline decoration-flame underline-offset-4">home page</Link>,{' '}
          <Link href={routes.areas} className="font-semibold text-white underline decoration-flame underline-offset-4">service areas</Link> or{' '}
          <Link href={routes.faq} className="font-semibold text-white underline decoration-flame underline-offset-4">FAQs</Link>.
        </p>
      </div>
    </div>
  );
}
