import { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { MantineProvider } from '@mantine/core';

import { NextIntlClientProvider } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/navigation';

import { theme } from '@/theme';

import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import { MetaDataCustom } from '@/components/MetaDataCustom/MetaDataCustom';

import '@mantine/core/styles.css';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    return notFound();
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({ children, params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>
        <MetaDataCustom />
        <body>
          <MantineProvider theme={theme}>
            <Header />
            {children}
            <Footer />
          </MantineProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
