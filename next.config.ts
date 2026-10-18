import type { NextConfig } from 'next';
import { resolvedAllowIndexing, resolvedSiteMode } from './src/config/launch';

const indexingAllowed = resolvedSiteMode === 'production' && resolvedAllowIndexing;

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    const security = {
      source: '/:path*',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    };
    if (indexingAllowed) return [security];
    // Staging: tell crawlers not to index any URL, including files and API responses.
    return [security, { source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
  },
  async redirects() {
    return [
      { source: '/get-a-quote', destination: '/get-connected/', permanent: true },
      { source: '/quote', destination: '/get-connected/', permanent: true },
      { source: '/services', destination: '/appliance-repair-temple-tx/', permanent: true },
      { source: '/request-service', destination: '/get-connected/', permanent: true },
      { source: '/contact', destination: '/get-connected/', permanent: true },
      { source: '/reviews', destination: '/', permanent: true },
      { source: '/gallery', destination: '/', permanent: true },
      { source: '/thank-you', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
