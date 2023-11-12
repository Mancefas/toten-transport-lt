import {
  IconCalendarTime,
  IconFileInfo,
  IconCertificate,
  IconBuildingWarehouse,
} from '@tabler/icons-react';
import { Card, Text, Box, SimpleGrid } from '@mantine/core';

import classes from './Features.module.css';

// to map icon for feature
type FeatureIcon = 'certificat' | 'calendar' | 'file' | 'warehouse';
const iconComponents: Record<FeatureIcon, JSX.Element> = {
  certificat: <IconCertificate size={40} />,
  calendar: <IconCalendarTime size={40} />,
  file: <IconFileInfo size={40} />,
  warehouse: <IconBuildingWarehouse size={40} />,
};

// Feature item
type SingleFeatureProps = {
  id: string;
  featureHeading: string;
  featureText: string;
  featureIcon: string;
};
const SingleFeature = (feature: SingleFeatureProps) => (
  <Box py="lg" key={feature.id}>
    <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
      <Card.Section ta="center" className={classes.iconColor}>
        {iconComponents[feature.featureIcon as FeatureIcon]}
      </Card.Section>

      <Text fw={500} size="lg" ta="center">
        {feature.featureHeading}
      </Text>

      <Text size="sm" c="dimmed" ta="center">
        {feature.featureText}
      </Text>
    </Card>
  </Box>
);

type FeaturesProps = { 
  text: SingleFeatureProps[] 
}

const Features = ({text}: FeaturesProps) => {

  return (
    <div className={classes.boxForGrid}>
      <Box px="lg">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
          {text && text.map((feature: SingleFeatureProps) => SingleFeature(feature))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default Features;
