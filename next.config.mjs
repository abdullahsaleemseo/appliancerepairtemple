const indexingAllowed =
  process.env.NEXT_PUBLIC_SITE_MODE === 'production' && process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    if (indexingAllowed) return [];
    // Staging: tell crawlers not to index any URL, including files and API responses.
    return [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] }];
  },
  async redirects() {
    return [
      { source: '/get-a-quote', destination: '/request-service/', permanent: true },
      { source: '/quote', destination: '/request-service/', permanent: true },
      { source: '/services', destination: '/appliance-repair-temple-tx/', permanent: true },
    ];
  },
};

export default nextConfig;
