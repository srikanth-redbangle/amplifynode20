import { NextResponse } from 'next/server';

export function middleware(req) {
  const country = req.geo?.country; // e.g. 'IN'
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/work/featured') && country = 'IN') {
    const url = req.nextUrl.clone();
    url.pathname = '/collab';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/work/featured/:path*'],
};
