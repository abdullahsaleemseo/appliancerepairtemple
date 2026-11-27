import Link from 'next/link';
import { routes, site } from '@/config/site';
import { LegalPage } from '@/components/LegalPage';
import { PhoneLink } from '@/components/PhoneLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Disclaimer | ${site.brandName}`,
  description: `Disclaimer for ${site.domain}: a free service that helps homeowners connect with independent appliance repair providers in Temple and Bell County.`,
  path: routes.disclaimer,
  noindex: true,
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Disclaimer" path={routes.disclaimer} updated="November 27, 2026">
      <h2>What the service is</h2>
      <p>
        {site.brandName} is a free service that helps homeowners in Temple and Bell County connect with independent appliance repair
        providers. Calling the number on this website costs nothing. The repair itself, including the visit, the price and the work, is
        arranged between you and the provider you choose.
      </p>

      <h2>No warranty or guarantee</h2>
      <p>
        The providers are independent businesses. Because of that, {site.brandName} doesn&rsquo;t warrant or guarantee their work, their
        prices, how soon they can come or the results of a repair. Any promise about those things comes from the provider, so get it from
        them directly.
      </p>

      <h2>Your checks before work starts</h2>
      <p>A few questions protect you, whoever you hire:</p>
      <ul>
        <li>
          Confirm the provider holds any license and insurance the job requires. For example, refrigerant work needs EPA Section 608
          certification, and gas line work needs a licensed plumber.
        </li>
        <li>Ask for the price before any work begins.</li>
        <li>Ask whether parts and labor come with a warranty, and for how long.</li>
      </ul>

      <h2>Information on this website</h2>
      <p>
        The repair guides, error code meanings, cost levels, checklists and tools here are general information, not professional advice.
        Appliances differ by brand, model and installation, so follow your owner&rsquo;s manual and the manufacturer&rsquo;s safety
        instructions. If you&rsquo;re unsure about any step, stop and call a professional. The cost estimator shows rough levels, not quotes,
        and no guide can see your appliance the way a technician in your kitchen can.
      </p>
      <p>
        If you smell gas, leave the home right away and call the gas company or 911 from outside. Don&rsquo;t switch lights or
        appliances on or off on your way out.
      </p>

      <h2>Brand names</h2>
      <p>
        Appliance brand names belong to their owners and are used only to identify appliances. {site.brandName} isn&rsquo;t affiliated with
        or endorsed by any manufacturer. The <Link href={routes.terms}>terms of service</Link> explain how the website may be used.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclaimer? Call <PhoneLink location="disclaimer" className="font-semibold underline" />.
      </p>
    </LegalPage>
  );
}
