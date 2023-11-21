'use client';

import {
  IconCalendarTime,
  IconFileInfo,
  IconCertificate,
  IconBuildingWarehouse,
} from '@tabler/icons-react';
import { Card, Text, Box, SimpleGrid } from '@mantine/core';
import { useTranslations } from 'next-intl';

import classes from './Features.module.css';

// to map icon for feature
type FeatureIcon = 'certificat' | 'calendar' | 'file' | 'warehouse';
const iconComponents: Record<FeatureIcon, JSX.Element> = {
  certificat: <IconCertificate size={40} />,
  calendar: <IconCalendarTime size={40} />,
  file: <IconFileInfo size={40} />,
  warehouse: <IconBuildingWarehouse size={40} />,
};

type FeaturesProps = {};

export const Features: React.FC<FeaturesProps> = () => {
  const t = useTranslations('Feature');
  const featuresKeys = ['1', '2', '3', '4'];

  return (
    <div className={classes.boxForGrid}>
      <Box px="lg">
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
          {featuresKeys.map((key) => (
            <Box py="lg" key={t(`${key}.id`)}>
              <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
                <Card.Section ta="center" className={classes.iconColor}>
                  {iconComponents[t(`${key}.featureIcon`) as FeatureIcon]}
                </Card.Section>

                <Text fw={500} size="lg" ta="center">
                  {t(`${key}.featureHeading`)}
                </Text>

                <Text size="sm" c="dimmed" ta="center">
                  {t(`${key}.featureText`)}
                </Text>
              </Card>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};
