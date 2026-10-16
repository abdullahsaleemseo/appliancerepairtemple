import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0A0F1C', 800: '#0F1626', 700: '#151E33', 600: '#1E2942', body: '#4B5263', muted: '#6B7180' },
        canvas: { DEFAULT: '#F6F3EE', 2: '#EFEAE2' },
        sand: '#E4DDD1',
        flame: { DEFAULT: '#C2500C', hover: '#A8430A', bright: '#FF7A3D', glow: '#FF9A5C', soft: '#FFF0E6' },
        frost: { DEFAULT: '#9CCBFF', soft: '#E6F1FF' },
        mint: { DEFAULT: '#0E8A5F', bright: '#3DDC97', soft: '#E3F6EE' },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Geist Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,15,28,.04), 0 8px 24px -8px rgba(10,15,28,.10)',
        lift: '0 2px 4px rgba(10,15,28,.05), 0 24px 48px -16px rgba(10,15,28,.22)',
        cta: 'inset 0 1px 0 rgba(255,255,255,.22), 0 10px 24px -8px rgba(194,80,12,.55)',
        glow: '0 0 0 1px rgba(255,255,255,.06), 0 30px 80px -20px rgba(0,0,0,.6)',
      },
      borderRadius: { card: '20px', xl2: '28px' },
      maxWidth: { site: '1240px' },
      letterSpacing: { tightest: '-0.045em' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        pulseDot: { '0%,100%': { opacity: '1' }, '50%': { opacity: '.35' } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        pulseDot: 'pulseDot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
