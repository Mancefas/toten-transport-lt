import { ColorSchemeScript } from '@mantine/core';
import { useTranslations } from 'next-intl';

type MetaDataCustomProps = {};

export const MetaDataCustom: React.FC<MetaDataCustomProps> = () => {
  const t = useTranslations('MetaData');

  return (
    <head>
      <ColorSchemeScript />
      <link rel="shortcut icon" href="/favicon.svg" />
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
    </head>
  );
};
