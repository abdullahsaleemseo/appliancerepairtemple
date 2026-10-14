import type { Metadata } from 'next';
import { routes, site } from '@/config/site';
import { ThankYouContent } from './ThankYouContent';

export const metadata: Metadata = {
  title: { absolute: `Thank You | ${site.brandName}` },
  description: 'Your service request was received.',
  robots: { index: false, follow: false },
  alternates: { canonical: `${site.url}${routes.thankYou}` },
};

export default function ThankYouPage() {
  return <ThankYouContent />;
}
