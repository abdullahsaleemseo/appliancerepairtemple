import { canShow, routes, site } from '@/config/site';
import { LegalPage } from '@/components/LegalPage';
import { PhoneLink } from '@/components/PhoneLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Privacy Policy | ${site.brandName}`,
  description: `How ${site.brandName} collects, uses, shares and protects the information you submit through ${site.domain}, and the choices you have about it.`,
  path: routes.privacy,
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path={routes.privacy} updated="October 15, 2026">
      <p>
        This policy explains what information {site.brandName} (“we”, “us”) collects through this website, how we use it, and who
        we share it with. We only collect what we need to respond to a repair request.
      </p>

      <h2>Information you give us</h2>
      <p>When you fill out a request or contact form, we collect:</p>
      <ul>
        <li>Your name, phone number, ZIP code and, if you choose, your email address</li>
        <li>The appliance type, brand and a description of the problem</li>
        <li>Your preferred contact time</li>
      </ul>
      <p>Please do not include payment card numbers, Social Security numbers or other sensitive information in the form.</p>

      <h2>Information collected automatically</h2>
      <p>
        When you visit the site, we may record the page you landed on, the website that referred you, campaign tags in the link
        (such as UTM parameters), your general device type and how you interacted with the site, including phone number clicks and
        form submissions. We use Google Analytics for this. Google Analytics uses cookies; you can opt out with Google’s browser
        add-on or your browser’s cookie settings.
      </p>
      <p>We may also use Cloudflare Turnstile to block automated spam. It processes limited technical data to tell people from bots.</p>

      <h2>How we use your information</h2>
      <ul>
        <li>To call or text you about your repair request and schedule a visit</li>
        <li>To send a technician, perform the repair and follow up on it</li>
        <li>To understand which pages and campaigns bring in requests, so we can improve the site</li>
        <li>To prevent spam and abuse</li>
      </ul>

      <h2>Who we share it with</h2>
      <p>
        {site.brandName} performs the repairs itself, so your request stays with us. We use a small number of service providers
        that host the site, process form submissions and provide analytics, and they handle information only to provide those
        services to us. We may also share information when the law requires it. We do not sell your personal information, and we
        do not share it with unrelated third parties for their own marketing.
      </p>

      <h2>Calls and text messages</h2>
      <p>
        By checking the consent box on a form, you agree that we may call or text the number you provided
        about your request. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to any text to opt
        out.
      </p>

      <h2>Cookies</h2>
      <p>
        The site uses a small number of cookies and similar browser storage. Google Analytics uses cookies to count visits and
        see how pages are used. We also keep campaign tags from the link you arrived on for the length of your visit, so a request
        can be matched to the ad or page that brought you here. You can block or delete cookies in your browser settings; the site
        will still work.
      </p>

      <h2>How we protect it</h2>
      <p>
        The site uses an encrypted (HTTPS) connection, and form submissions are sent over that connection. We limit access to
        request details to the people who need them to respond to you. No method of transmission or storage is completely secure,
        so please do not send sensitive information through the form.
      </p>

      <h2>How long we keep it</h2>
      <p>We keep request records only as long as needed to provide service, handle follow-up questions and meet legal obligations.</p>

      <h2>Your choices</h2>
      <p>
        You can ask us to access, correct or delete the information we hold about you by contacting us below. We will respond
        within a reasonable time.
      </p>

      <h2>Children</h2>
      <p>This site is not directed to children under 13, and we do not knowingly collect information from them.</p>

      <h2>Changes</h2>
      <p>If we change this policy, we will update the date at the top of this page.</p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: call <PhoneLink location="privacy" />
        {canShow(site.email) ? (
          <>
            {' '}
            or email <a href={`mailto:${site.email.value}`}>{site.email.value}</a>
          </>
        ) : null}
        .
      </p>
    </LegalPage>
  );
}
