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
    <LegalPage title="Accessibility" path={routes.accessibility} updated="October 15, 2026">
      <p>
        We want everyone to be able to use this website and request a repair, including people who use screen readers, keyboard
        navigation, magnification or voice control.
      </p>
      <h2>What we do</h2>
      <ul>
        <li>We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.</li>
        <li>Every form field has a label, and errors are announced and described in text.</li>
        <li>All features work with a keyboard, with a visible focus outline.</li>
        <li>Text and buttons are built to meet AA color contrast.</li>
        <li>A skip link lets you jump straight to the main content.</li>
        <li>Motion is reduced when your device asks for it.</li>
      </ul>
      <h2>Need help or found a problem?</h2>
      <p>
        If something on the site does not work for you, call <PhoneLink location="accessibility" /> and we will take your request
        by phone. Please also tell us what went wrong so we can fix it.
      </p>
      <h2>Known limits</h2>
      <p>
        Some content, such as linked manufacturer pages and PDF documents from other websites, is outside our control and may not
        meet the same standard. If you need information from one of those sources in another format, call and we will help.
      </p>
      <p>{site.brandName} reviews this site for accessibility as pages are added or changed.</p>
    </LegalPage>
  );
}
