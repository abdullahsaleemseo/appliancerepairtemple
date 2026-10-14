/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      { source: '/get-a-quote', destination: '/request-service/', permanent: true },
      { source: '/quote', destination: '/request-service/', permanent: true },
      { source: '/services', destination: '/appliance-repair-temple-tx/', permanent: true },
    ];
  },
};

export default nextConfig;
