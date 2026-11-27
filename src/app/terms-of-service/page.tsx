import Link from 'next/link';
import { routes, site } from '@/config/site';
import { LegalPage } from '@/components/LegalPage';
import { PhoneLink } from '@/components/PhoneLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Terms of Service | ${site.brandName}`,
  description: `The terms for using ${site.domain}, a free service that helps homeowners connect with independent appliance repair providers.`,
  path: routes.terms,
  noindex: true,
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" path={routes.terms} updated="November 27, 2026">
      <p>
        These terms apply when you use {site.domain} or call the number shown on it. By doing either, you accept them. If you don&rsquo;t
        agree, please don&rsquo;t use the website or the number.
      </p>

      <h2>The service</h2>
      <p>
        {site.brandName} is a free service for homeowners. It helps you connect with independent appliance repair providers who work in
        Temple and Bell County, and it publishes repair guides and tools. {site.brandName} is not a party to any agreement you make with a
        provider.
      </p>

      <h2>Providers are independent</h2>
      <p>
        Providers are separate businesses. They set their own prices, schedules and warranties. Any agreement about a repair, any payment
        and any disagreement about the work is between you and the provider you choose. Ask them about price, timing and warranty before
        work begins.
      </p>

      <h2>No guarantee</h2>
      <p>
        {site.brandName} doesn&rsquo;t warrant or guarantee any provider&rsquo;s work, availability, response time or pricing. A provider
        may not be available in every area or at every time.
      </p>

      <h2>Your responsibilities</h2>
      <ul>
        <li>
          Check that the provider you hire holds any license and insurance the job requires, such as EPA Section 608 certification for
          refrigerant work or a licensed plumber for gas line work.
        </li>
        <li>Give accurate information about yourself, your address and the appliance when you call.</li>
        <li>
          Keep people, children and pets safe around appliances, especially during a repair, and follow the manufacturer&rsquo;s safety
          instructions.
        </li>
      </ul>

      <h2>Website content</h2>
      <p>
        Everything on this website is general information. Appliances differ by model and installation, so use the guides at your own risk
        and follow your owner&rsquo;s manual. The cost estimator, error code decoder, symptom checker and maintenance checklist give general
        guidance; they are not quotes, diagnoses or promises. Don&rsquo;t attempt gas, refrigerant or high-voltage repairs yourself.
      </p>

      <h2>Brand names</h2>
      <p>
        Appliance brand names belong to their owners. They appear here only to identify appliances and don&rsquo;t mean any manufacturer
        endorses or is affiliated with {site.brandName}.
      </p>

      <h2>Using the website fairly</h2>
      <p>Please don&rsquo;t try to disrupt the website, copy it in bulk or overload it with automated tools.</p>

      <h2>Limitation of liability</h2>
      <p>
        The website is provided as it is. To the extent the law allows, {site.brandName} isn&rsquo;t liable for work performed by any
        provider, or for any loss or damage that comes from using the website, its tools or its information.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        These terms may change from time to time. The date at the top shows when they were last updated, and using the website after a
        change means you accept the new version.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Texas.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Call <PhoneLink location="terms" className="font-semibold underline" />. How information is handled is
        explained in the <Link href={routes.privacy}>privacy policy</Link>.
      </p>
    </LegalPage>
  );
}
