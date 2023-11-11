import { SimpleGrid, Container, Center, Text } from '@mantine/core';

import { useLanguageContext } from '@/context/LanguageContext';
import classes from './GoogleMapsIframe.module.css';
import * as ltTranslation from '@/dictionaries/maps/lt.json';
import * as enTranslation from '@/dictionaries/maps/en.json';

// single item
type singeItemProps = {
  title: string;
  mapPlace: string;
  iframeTitle: string;
};
const SingleItem = (data: singeItemProps) => (
  <Center style={{ flexDirection: 'column' }}>
    <Text size="lg" fw="500">
      {data.title}
    </Text>
    <iframe
      src={data.mapPlace}
      className={classes.gIframe}
      title={data.iframeTitle}
      aria-hidden="false"
      loading="lazy"
    />
  </Center>
);

const GoogleMapsIframe = () => {
  const { selectedLanguage } = useLanguageContext();

  return (
    <Container size="sm" pb="lg">
      <SimpleGrid spacing="lg" cols={{ base: 1, sm: 2 }}>
        {selectedLanguage === 'ltu'
          ? ltTranslation.map((place) => SingleItem(place))
          : enTranslation.map((place) => SingleItem(place))}
      </SimpleGrid>
    </Container>
  );
};

export default GoogleMapsIframe;
