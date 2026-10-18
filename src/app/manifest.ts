import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.brandName,
    short_name: 'AR Temple',
    description: `Appliance repair in ${site.city}, ${site.stateAbbr}: call to reach a technician for refrigerators, washers, dryers, dishwashers and ovens.`,
    start_url: '/',
    display: 'browser',
    background_color: '#0A0F1C',
    theme_color: '#0A0F1C',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
