import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
 
export function generateStaticParams() {
  return [{locale: 'lt'}, {locale: 'en'}];
}
 
export default async function LocaleLayout({children, params: {locale}}) {
  let messages;
  try {
    messages = (await import(`../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}