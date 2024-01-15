import { redirect } from 'next/navigation';
import { SupportedLocale } from '@/lib/navigation';

export default function RootPage({ params: { locale } }: { params: { locale: SupportedLocale } }) {
  const languageMap: Record<SupportedLocale, string> = {
    lt: '/lt',
    en: '/en',
    no: '/no',
  };

  // Use the language code to get the corresponding URL from the map
  const redirectURL = languageMap[locale] || '/lt'; // Default to Lithuanian

  redirect(redirectURL);
}
