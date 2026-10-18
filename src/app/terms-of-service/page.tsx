import Link from 'next/link';
import { referralDisclaimer, routes, site } from '@/config/site';
import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Terms of Service | ${site.brandName}`,
  description: `The terms for using ${site.domain}, a free referral service that connects homeowners with independent local appliance repair providers by phone.`,
  path: routes.terms,
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" path={routes.terms} updated="October 18, 2026">
      <p>
        By using {site.domain} you agree to these terms. If you do not agree, please do not use the site.
      </p>

      <h2>What this site does</h2>
      <p>
        {site.brandName} is a free referral service. It publishes appliance repair information and a phone number. When you call
        that number, your call is connected with an independent appliance repair provider that serves your area. The site does
        not perform repairs, does not employ technicians and does not schedule appointments.
      </p>

      <h2>Independent providers</h2>
      <p>
        Providers reached through this site are independent businesses. They are not employees, agents or partners of{' '}
        {site.brandName}. Any agreement for repair work, including the price, the timing, the parts used, payment and any warranty,
        is made directly between you and the provider you choose.
      </p>
      <p>
        The site does not warrant or guarantee any work performed. It is your responsibility to verify that the provider you hire
        holds any license and insurance required for the work. Ask for proof before work starts.
      </p>

      <h2>Availability</h2>
      <p>
        Provider availability varies by location, time and demand. The site does not promise that a provider will be available,
        or that a visit will happen within any time frame. Emergency help may be available from local providers.
      </p>

      <h2>Calls</h2>
      <p>
        Calls to the number on this site are routed through a call tracking service to a provider. Calls may be recorded for
        quality and routing purposes. See the <Link href={routes.privacy}>Privacy Policy</Link> for how call information is handled.
      </p>

      <h2>Information on this site</h2>
      <p>
        Troubleshooting articles are general guidance and may not apply to your model. Always follow your owner’s manual, disconnect
        power before inspecting an appliance and stop if anything seems unsafe. Do not attempt gas, refrigerant or high-voltage
        repairs yourself. The site is not responsible for damage or injury that results from do-it-yourself repairs.
      </p>

      <h2>Photos</h2>
      <p>All persons depicted in a photo or video on this site are actors or models and not providers listed on this site.</p>

      <h2>Trademarks</h2>
      <p>
        Appliance brand names mentioned on this site belong to their owners. Their use here only identifies appliances and does not
        mean any manufacturer endorses or is affiliated with {site.brandName}.
      </p>

      <h2>Acceptable use</h2>
      <p>Do not attempt to disrupt the site or use automated tools to scrape or overload it.</p>

      <h2>Limitation of liability</h2>
      <p>
        The site is provided as is. To the extent allowed by law, {site.brandName} is not liable for the acts or omissions of any
        provider, or for indirect or consequential damages arising from use of the site or from any repair work.
      </p>

      <h2>Disclaimer</h2>
      <p>{referralDisclaimer}</p>

      <h2>Changes to these terms</h2>
      <p>These terms may be updated from time to time. The date at the top of this page shows when they last changed.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of {site.state}.</p>
    </LegalPage>
  );
}
