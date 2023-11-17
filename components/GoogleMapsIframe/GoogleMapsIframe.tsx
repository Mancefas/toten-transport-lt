import { SimpleGrid, Container, Center, Text } from '@mantine/core';

import classes from './GoogleMapsIframe.module.css';

// single item
type SingeItemProps = {
  title: string;
  mapPlace: string;
  iframeTitle: string;
};
const SingleItem = (data: SingeItemProps) => (
  <Center style={{ flexDirection: 'column' }} key={data.title}>
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

type PropsType = {
  text: SingeItemProps[];
};

const GoogleMapsIframe = ({ text }: PropsType) => (
  <Container size="sm" pb="lg">
    <SimpleGrid spacing="lg" cols={{ base: 1, sm: 2 }}>
      {text && text.map((place) => SingleItem(place))}
    </SimpleGrid>
  </Container>
);

export default GoogleMapsIframe;
