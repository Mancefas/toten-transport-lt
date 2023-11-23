'use client';

import { SimpleGrid, Container, Center, Text } from '@mantine/core';

import { useTranslations } from 'next-intl';

import classes from './GoogleMapsIframe.module.css';

type GoogleMapsIframeProps = {};

const GoogleMapsIframe: React.FC<GoogleMapsIframeProps> = () => {
  const t = useTranslations('Maps');

  // workaround, because the next-intl lib does not allow to use arrays in translations
  const translationsKeys = ['Office', 'Warehouse'];

  return (
    <Container size="sm" pb="lg">
      <SimpleGrid spacing="lg" cols={{ base: 1, sm: 2 }}>
        {translationsKeys.map((place) => (
          <Center style={{ flexDirection: 'column' }} key={t(`${place}.title`)}>
            <Text size="lg" fw="500">
              {t(`${place}.title`)}
            </Text>
            <iframe
              src={t(`${place}.mapPlace`)}
              className={classes.gIframe}
              title={t(`${place}.iframeTitle`)}
              aria-hidden="false"
              loading="lazy"
            />
          </Center>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default GoogleMapsIframe;
