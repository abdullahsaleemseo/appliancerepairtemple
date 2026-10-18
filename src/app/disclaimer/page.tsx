import Link from 'next/link';
import { referralDisclaimer, routes, site } from '@/config/site';
import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Disclaimer | ${site.brandName}`,
  description: `Disclaimer for ${site.domain}: how the site connects homeowners with local contractors, license and insurance checks, photos and trademarks.`,
  path: routes.disclaimer,
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" path={routes.disclaimer} updated="October 18, 2026">
      <p>{referralDisclaimer}</p>

      <h2>How the service works</h2>
      <p>
        {site.brandName} publishes appliance repair information and a phone number. Calls are connected with independent appliance
        repair providers serving {site.city} and nearby {site.county} towns. The site does not perform repairs and does not
        schedule appointments. Any price, timing, payment or warranty is agreed directly between you and the provider. See the{' '}
        <Link href={routes.terms}>Terms of Service</Link> for details.
      </p>

      <h2>Availability</h2>
      <p>
        Provider availability varies by location, time and demand, and no time frame is promised. Emergency help may be available
        from local providers.
      </p>

      <h2>Trademarks</h2>
      <p>
        {site.brandName} is not affiliated with, endorsed by or sponsored by any appliance manufacturer. Brand names are trademarks
        of their respective owners and are used only to identify appliances.
      </p>
    </LegalPage>
  );
}
