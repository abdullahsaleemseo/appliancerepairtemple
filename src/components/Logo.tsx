import { site } from '@/config/site';

/**
 * Brand logo. Files live in /public/brand:
 * - logo-compact.svg: header lockup, emblem sized to the text so the words stay legible at small heights
 * - logo.svg: full lockup for larger placements such as the footer
 * - *-on-light.svg: the same artwork with dark text for light backgrounds
 * - mark.svg: emblem only
 */
export function Logo({ variant = 'compact', className = '' }: { variant?: 'compact' | 'full'; className?: string }) {
  const compact = variant === 'compact';
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={compact ? '/brand/logo-compact.svg' : '/brand/logo.svg'}
      alt={site.brandName}
      width={compact ? 1083 : 1429}
      height={compact ? 316 : 614}
      className={`w-auto ${className}`}
      decoding="async"
    />
  );
}
