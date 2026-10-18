import { routes, site } from '@/config/site';
import { LegalPage } from '@/components/LegalPage';
import { PhoneLink } from '@/components/PhoneLink';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: `Accessibility | ${site.brandName}`,
  description: `How ${site.brandName} works to make ${site.domain} usable for everyone, the standard we aim for, and how to get help or report a problem.`,
  path: routes.accessibility,
});

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility" path={routes.accessibility} updated="October 18, 2026">
      <p>
        {site.brandName} wants everyone to be able to use this website and get connected with a local appliance repair pro,
        including people who use screen readers, keyboard navigation, magnification or voice control.
      </p>
      <h2>How the site is built</h2>
      <ul>
        <li>The site aims to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.</li>
        <li>Every phone number is a tap-to-call link with a clear label.</li>
        <li>All features work with a keyboard, with a visible focus outline.</li>
        <li>Text and buttons are built to meet AA color contrast.</li>
        <li>A skip link lets you jump straight to the main content.</li>
        <li>Motion is reduced when your device asks for it.</li>
      </ul>
      <h2>Found a problem?</h2>
      <p>
        If something on the site does not work for you, you can still call <PhoneLink location="accessibility" /> to be connected
        with a local provider. To report the problem itself, send a message through the site’s social media pages listed in the
        footer.
      </p>
      <h2>Known limits</h2>
      <p>
        Some content, such as linked manufacturer pages and PDF documents from other websites, is outside the site’s control and
        may not meet the same standard.
      </p>
      <p>{site.brandName} reviews this site for accessibility as pages are added or changed.</p>
    </LegalPage>
  );
}
