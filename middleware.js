export function middleware() {
  return new Response('Middleware running on Amplify', { status: 200 });
}

export const config = {
  matcher: ['/collab/:path*'],
};
