import Link from 'next/link';
import { manufacturerDisclaimer, routes, site } from '@/config/site';
import { LegalPage } from '@/components/LegalPage';
import { PhoneLink } from '@/components/PhoneLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Disclaimer | ${site.brandName}`,
  description: `Disclaimer for ${site.domain}: repair guides and tools are general information, and brand names are used only to identify appliances.`,
  path: routes.disclaimer,
  noindex: true,
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" path={routes.disclaimer} updated="November 25, 2026">
      <p>{manufacturerDisclaimer}</p>

      <h2>Guides and tools</h2>
      <p>
        The repair guides, error code meanings, cost levels and checklists on {site.domain} are general information. Appliances differ
        by brand, model and installation, so check your owner&rsquo;s manual and stop if anything feels unsafe. For a diagnosis of your
        appliance, call us at <PhoneLink location="disclaimer" className="font-semibold underline" />. Pricing, timing and warranty
        terms are explained on the call and before any work starts.
      </p>

      <h2>Safety</h2>
      <p>
        If you smell gas, leave the house and call the gas company or 911 from outside. For smoke, sparks or a burning smell, switch the
        appliance off at the breaker and do not use it until it has been checked.
      </p>

      <h2>Trademarks</h2>
      <p>
        Brand names are trademarks of their respective owners and are used only to identify the appliances we repair. See the{' '}
        <Link href={routes.terms}>Terms of Service</Link> for more.
      </p>
    </LegalPage>
  );
}
