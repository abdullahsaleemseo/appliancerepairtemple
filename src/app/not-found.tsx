import Link from 'next/link';
import { routes, site } from '@/config/site';
import { serviceHref, services } from '@/content/services';
import { CallButton } from '@/components/Buttons';

export const metadata = {
  title: { absolute: `Page Not Found | ${site.brandName}` },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-24">
        <p className="font-heading text-6xl font-extrabold text-brand-dark">404</p>
        <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-navy">This page isn’t here</h1>
        <p className="mt-4 text-lg text-ink-body">
          The link may be old or mistyped. If your appliance needs fixing, we can still help. Pick it below or give us a call.
        </p>
        <div className="mt-8 flex justify-center">
          <CallButton location="404" label="Call us" />
        </div>
        <ul className="mt-12 grid gap-3 text-left sm:grid-cols-2">
          {services.map((s) => (
            <li key={s.key}>
              <Link href={serviceHref(s.key)} className="block rounded-card bg-white px-5 py-4 font-semibold text-navy shadow-card hover:shadow-lift">
                {s.navLabel}
              </Link>
            </li>
          ))}
          <li>
            <Link href={routes.request} className="block rounded-card bg-navy px-5 py-4 font-semibold text-white shadow-card">
              Request service online
            </Link>
          </li>
        </ul>
        <p className="mt-10 text-ink-body">
          Or go to the{' '}
          <Link href="/" className="font-semibold text-navy underline">
            home page
          </Link>
          ,{' '}
          <Link href={routes.areas} className="font-semibold text-navy underline">
            service areas
          </Link>{' '}
          or{' '}
          <Link href={routes.faq} className="font-semibold text-navy underline">
            FAQs
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
