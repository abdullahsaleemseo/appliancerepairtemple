import { claims, routes, site } from '@/config/site';
import { LegalPage } from '@/components/LegalPage';
import { PhoneLink } from '@/components/PhoneLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Terms of Service | ${site.brandName}`,
  description: `The terms that apply when you use ${site.domain} or request appliance repair service, including scheduling, repair work, trademarks and liability.`,
  path: routes.terms,
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" path={routes.terms} updated="October 15, 2026">
      <p>
        By using {site.domain} you agree to these terms. If you do not agree, please do not use the site.
      </p>

      <h2>What this site does</h2>
      <p>
        This site provides information about appliance repair and lets you request a callback. Submitting a form requests a call
        back. It does not book an appointment or create a contract for repair. Appointments, prices and repair terms are agreed
        directly with the technician or repair provider before any work begins.
      </p>

      <h2>Scheduling and availability</h2>
      <p>
        Same-day service is available, {claims.availabilityQualifier}. Response times shown on this site are typical figures, not
        guaranteed arrival times. A visit is confirmed only when a time is agreed with you by phone.
      </p>

      <h2>Repair work</h2>
      <p>
        Repairs are performed by an independent local appliance repair provider. Pricing, warranty coverage and payment terms for
        a repair are set by that provider and given to you before work starts. Any warranty applies only as stated in writing by
        the provider.
      </p>

      <h2>Information on this site</h2>
      <p>
        Troubleshooting articles are general guidance and may not apply to your model. Always follow your owner’s manual, disconnect
        power before inspecting an appliance and stop if anything seems unsafe. Do not attempt gas, refrigerant or high-voltage
        repairs yourself. We are not responsible for damage or injury that results from do-it-yourself repairs.
      </p>

      <h2>Trademarks</h2>
      <p>
        Appliance brand names mentioned on this site belong to their owners. Their use here only describes the products we work
        on and does not mean any manufacturer endorses or is affiliated with us.
      </p>

      <h2>Acceptable use</h2>
      <p>Do not submit false requests, attempt to disrupt the site or use automated tools to send form submissions.</p>

      <h2>Limitation of liability</h2>
      <p>
        The site is provided as is. To the extent allowed by law, we are not liable for indirect or consequential damages arising
        from use of the site.
      </p>

      <h2>Changes to these terms</h2>
      <p>We may update these terms from time to time. The date at the top of this page shows when they last changed.</p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of {site.state}.</p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <PhoneLink location="terms" />.
      </p>
    </LegalPage>
  );
}
