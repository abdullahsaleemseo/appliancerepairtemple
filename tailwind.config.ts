import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0B2B4C', 700: '#0F3760', 600: '#174A7E', 50: '#EAF2FA' },
        brand: { DEFAULT: '#F26A1B', dark: '#C2500C', light: '#FFF1E8' },
        trust: { DEFAULT: '#16A34A', dark: '#15803D', light: '#E8F7EE' },
        ink: { DEFAULT: '#1A2332', body: '#4A5568', muted: '#64748B' },
        surface: '#EAF2FA',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans Variable"', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(11,43,76,.08)',
        lift: '0 10px 32px rgba(11,43,76,.14)',
      },
      borderRadius: { card: '14px' },
      maxWidth: { site: '1200px' },
    },
  },
  plugins: [],
};

export default config;
