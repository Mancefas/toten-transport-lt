import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
export const locales = ['lt', 'en'] as const;

export type SupportedLocale = 'lt' | 'en';
 
export const {Link, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation({locales});