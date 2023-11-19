// maybe later will add different paths on en/ and lt/

import {Pathnames} from 'next-intl/navigation';
import { locales } from './navigation';

export const pathnames = {
  '/': '/',
  '/about': {
    en: '/about',
    lt: '/apie'
  }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;