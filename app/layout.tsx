import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata = {
  title: 'Change this title',
  description: 'Add description!',
};

export default function RootLayout({ children }: { children: any }) {
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
        <LanguageProvider>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
