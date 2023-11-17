import '@mantine/core/styles.css';
import { ReactNode } from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '@/theme';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';

import headerTranslations from '@/dictionaries/header/en.json';
import footerTranslations from '@/dictionaries/footer/en.json';
import metaDataTranslations from '@/dictionaries/metaData/en.json';

export const metadata = metaDataTranslations;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
          <Header text={headerTranslations} />
          {children}
          <Footer text={footerTranslations} />
        </MantineProvider>
      </body>
    </html>
  );
}
