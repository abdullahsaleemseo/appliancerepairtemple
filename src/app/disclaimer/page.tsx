import { claims, routes, site } from '@/config/site';
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
      <p>
        This site is a free service to assist homeowners in connecting with local service contractors. All contractors are
        independent and this site does not warrant or guarantee any work performed. It is the responsibility of the homeowner to
        verify that the hired contractor furnishes the necessary license and insurance required for the work being performed. All
        persons depicted in a photo or video are actors or models and not contractors listed on this site.
      </p>

      <h2>Trademarks</h2>
      <p>
        {site.brandName} is not affiliated with, endorsed by or sponsored by any appliance manufacturer. Brand names are
        trademarks of their respective owners and are used only to identify the appliances serviced.
      </p>

      <h2>Availability</h2>
      <p>Same-day and emergency service is {claims.availabilityQualifier}.</p>
    </LegalPage>
  );
}
