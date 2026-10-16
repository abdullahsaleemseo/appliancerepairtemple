import { NextResponse, type NextRequest } from 'next/server';

/** Vercel preview and project URLs (*.vercel.app) are never indexed, even when indexing is switched on for the real domain. */
export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  if ((req.headers.get('host') || '').endsWith('.vercel.app')) {
    res.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }
  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
};
