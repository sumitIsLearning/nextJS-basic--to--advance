import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { logger } from './middlewares/logger'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  const logResponse = logger(request);

  if(logResponse) return logResponse;

  return NextResponse.redirect(new URL('/',request.url))
}
 
// // See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}