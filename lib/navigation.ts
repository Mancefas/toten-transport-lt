import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['lt', 'en', 'no'] as const;

export type SupportedLocale = 'lt' | 'en' | 'no';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
});
