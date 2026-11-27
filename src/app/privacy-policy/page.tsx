import { routes, site } from '@/config/site';
import { LegalPage } from '@/components/LegalPage';
import { PhoneLink } from '@/components/PhoneLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Privacy Policy | ${site.brandName}`,
  description: `How ${site.brandName} handles the information you share when you call or use ${site.domain}, in plain English.`,
  path: routes.privacy,
  noindex: true,
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path={routes.privacy} updated="November 27, 2026">
      <p>
        {site.brandName} is a free service that helps homeowners connect with independent appliance repair providers. This policy explains,
        in plain words, what information may be collected when you use {site.domain} or call the number on it, how it&rsquo;s used and who
        sees it. It takes effect on November 27, 2026.
      </p>

      <h2>What may be collected</h2>
      <ul>
        <li>
          <strong>What you share with us.</strong> When you call or get in touch, you may give your name, phone number, address or ZIP code,
          and details about the appliance and the problem.
        </li>
        <li>
          <strong>Basic website usage.</strong> Like most websites, this one records general information about visits: which pages were
          viewed, the type of device and browser, the website that sent you here and your approximate location (city level, not your
          address). This comes from cookies and analytics tools.
        </li>
      </ul>

      <h2>How it&rsquo;s used</h2>
      <ul>
        <li>To help connect your repair request with an independent appliance repair provider</li>
        <li>To respond to you when you call or get in touch</li>
        <li>To understand how the website is used and make it better</li>
      </ul>

      <h2>Who it&rsquo;s shared with</h2>
      <p>
        The details you give about your repair are shared with the provider handling your request, so they can contact you and do the job.
        That provider then handles your information under its own practices, so ask them directly if you have questions. A small number of
        service companies that host the website or count visits also process information on our behalf. Your information isn&rsquo;t sold
        for unrelated marketing. It may be disclosed if the law requires it.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        Cookies are small files a website saves in your browser. This website uses them, mainly through Google Analytics, to count visits and
        see which pages are useful. Some pages show an embedded Google map, and Google may set its own cookies when the map loads. The free
        tools keep your answers only in your browser tab while you use them; nothing you type into a tool is sent to us.
      </p>
      <p>
        You can block or delete cookies in your browser&rsquo;s settings, usually under Privacy or Security. The website still works without
        them. Google also offers a browser add-on that opts you out of Google Analytics.
      </p>

      <h2>How long it&rsquo;s kept</h2>
      <p>
        Information is kept only as long as it&rsquo;s needed to handle your request, answer questions and meet legal or record-keeping
        needs. Analytics data is kept in summary form.
      </p>

      <h2>Security</h2>
      <p>
        The website uses an encrypted (HTTPS) connection, and reasonable steps are taken to protect the information you share. No website or
        storage system can be made completely secure, so please don&rsquo;t send sensitive details, such as payment card numbers, through
        the website.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask to see the information held about you, or ask for it to be corrected or deleted, by calling{' '}
        <PhoneLink location="privacy" className="font-semibold underline" />. Requests about information a provider holds should go to that
        provider.
      </p>

      <h2>Children</h2>
      <p>This website isn&rsquo;t directed to children under 13, and information from children under 13 isn&rsquo;t knowingly collected.</p>

      <h2>Changes to this policy</h2>
      <p>
        This policy may be updated from time to time. The date at the top shows the latest version, which takes effect when it&rsquo;s
        posted.
      </p>

      <p>This website is owned and operated by Abdullah Saleem.</p>
    </LegalPage>
  );
}
