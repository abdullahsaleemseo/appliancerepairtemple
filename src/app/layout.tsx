import type { Metadata, Viewport } from 'next';
import './globals.css';
import { indexingAllowed, site } from '@/config/site';
import { Analytics } from '@/components/Analytics';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { MobileCallBar } from '@/components/MobileCallBar';
import { SiteClient } from '@/components/SiteClient';
import { UtilityBar } from '@/components/UtilityBar';
import { JsonLd } from '@/components/JsonLd';
import { websiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `Appliance Repair in ${site.city}, ${site.stateAbbr} | ${site.brandName}`, template: `%s | ${site.brandName}` },
  applicationName: site.brandName,
  robots: indexingAllowed ? undefined : { index: false, follow: false },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#0A0F1C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body className="pb-[96px] md:pb-0">
        <a
          href="#main"
          className="sr-only z-50 rounded bg-ink px-4 py-3 font-bold text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Skip to content
        </a>
        <JsonLd data={websiteSchema()} />
        <UtilityBar />
        <Header />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
        <SiteClient />
        <Analytics />
      </body>
    </html>
  );
}
