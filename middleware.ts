// not needed with static export, because does not work with it
import createMiddleware from 'next-intl/middleware';
import { locales } from './lib/navigation';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
 
  // Used when no locale matches
  defaultLocale: 'lt'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(lt|en)/:path*']
};