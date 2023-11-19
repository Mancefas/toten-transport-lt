import { ReactNode } from 'react';
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/theme';

import { NextIntlClientProvider } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server';
import { locales } from '@/lib/navigation';

import { Header } from '@/components/Header/Header';
import Footer from '@/components/Footer';

import metaDataTranslations from '@/dictionaries/metaData/en.json';

type Props = {
  children: ReactNode
  params: { locale: string }
}

export const metadata: Metadata = metaDataTranslations;

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages(locale)

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header/>
          {children}
          <Footer />
        </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
