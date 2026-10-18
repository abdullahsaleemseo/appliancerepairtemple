import { routes, site } from '@/config/site';
import { LegalPage } from '@/components/LegalPage';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Privacy Policy | ${site.brandName}`,
  description: `How ${site.brandName}, a free referral service, handles information from visits to ${site.domain} and calls to local repair providers.`,
  path: routes.privacy,
});

const facebook = site.social.find((s) => s.key === 'facebook');

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path={routes.privacy} updated="October 18, 2026">
      <p>
        This policy explains what information {site.brandName} collects through {site.domain} and the phone number on it, how that
        information is used and who it is shared with. {site.brandName} is a free referral service that connects homeowners with
        independent local appliance repair providers. It does not perform repairs.
      </p>

      <h2>This site has no forms</h2>
      <p>
        There are no contact, quote or request forms on this site. The only way to use the service is to call the phone number shown
        on the site.
      </p>

      <h2>Calls</h2>
      <p>
        Calls to the number on this site are handled by a call tracking service, which routes each call to an independent appliance
        repair provider that serves the caller’s area. The call tracking service may record the phone number you call from, the
        date, time and length of the call, the page you called from and your general location. Calls may be recorded for quality and
        routing purposes.
      </p>
      <p>
        When your call is connected, the provider receives what you share on the call, such as your name, phone number, address and
        a description of the appliance problem. The provider uses that information under its own privacy practices. Ask the provider
        directly how it handles your information.
      </p>

      <h2>Information collected automatically</h2>
      <p>
        When you visit the site, it may record the page you landed on, the website that referred you, campaign tags in the link (such
        as UTM parameters), your general device type and how you interacted with the site, including phone number clicks. Google
        Analytics is used for this. Google Analytics uses cookies; you can opt out with Google’s browser add-on or your browser’s
        cookie settings.
      </p>
      <p>
        Some pages show an embedded Google Map of the area. When the map loads, Google may receive your IP address and set cookies
        under its own privacy policy.
      </p>

      <h2>How information is used</h2>
      <ul>
        <li>To connect your call with an independent local appliance repair provider</li>
        <li>To understand which pages and campaigns lead to calls, so the site can be improved</li>
        <li>To prevent spam, fraud and abuse</li>
      </ul>

      <h2>Who information is shared with</h2>
      <p>
        Call details are shared with the call tracking service and with the provider your call is connected to. The site also uses a
        small number of service providers for hosting and analytics, which handle information only to provide those services.
        Information may also be shared when the law requires it. {site.brandName} does not sell your personal information.
      </p>

      <h2>Cookies</h2>
      <p>
        The site uses a small number of cookies and similar browser storage. Google Analytics uses cookies to count visits and see
        how pages are used. Campaign tags from the link you arrived on are kept for the length of your visit, so a call can be
        matched to the ad or page that led to it. The free tools keep your answers in this browser tab&rsquo;s session storage so a
        reload does not lose them; nothing you enter in a tool is sent to the site, and closing the tab clears it. You can block or
        delete cookies in your browser settings; the site will still work.
      </p>

      <h2>Security</h2>
      <p>The site uses an encrypted (HTTPS) connection. No method of transmission or storage is completely secure.</p>

      <h2>Your choices</h2>
      <p>
        You can ask for access to, correction of or deletion of information connected to your use of the site. Requests about
        information held by a provider should go to that provider.
      </p>

      <h2>Children</h2>
      <p>This site is not directed to children under 13 and does not knowingly collect information from them.</p>

      <h2>Changes</h2>
      <p>If this policy changes, the date at the top of this page will be updated.</p>

      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent as a message to the site’s{' '}
        {facebook ? (
          <a href={facebook.url} rel="noopener" target="_blank">
            Facebook page
          </a>
        ) : (
          'social media pages'
        )}
        .
      </p>
      <p>This website is owned and operated by Abdullah Saleem. Updated October 17, 2026.</p>
    </LegalPage>
  );
}
