import {
  IconCalendarTime,
  IconFileInfo,
  IconCertificate,
  IconBuildingWarehouse,
} from "@tabler/icons-react";
import { Card, Text, Box, SimpleGrid } from "@mantine/core";

import { useLanguageContext } from "@/context/LanguageContext";
import  classes from "./Features.module.css"
import * as ltTranslation from "../../dictionaries/features/lt.json"
import * as enTranslation from "../../dictionaries/features/en.json"

// to map icon for feature
type FeatureIcon = 'certificat' | 'calendar' | 'file' | 'warehouse';
const iconComponents: Record<FeatureIcon, JSX.Element>  = {
    certificat: <IconCertificate size={40} />,
    calendar: <IconCalendarTime size={40} />,
    file: <IconFileInfo size={40} />,
    warehouse: <IconBuildingWarehouse size={40} />,
  };

// Feature item 
type featureProps = {
    id: string
    featureHeading: string
    featureText: string
    featureIcon: string
}
const singleFeature = (feature: featureProps) =>  (
    <Box py="lg">
      <Card
        shadow="sm"
        p="lg"
        radius="md"
        withBorder
        h="100%"
      >
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
  )


const Features = () => {
  const { selectedLanguage } = useLanguageContext();

  return (
      <div className={classes.boxForGrid}>
      <Box px="lg">
        <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 4 }}
        >
        {selectedLanguage === 'ltu' ? 
            ltTranslation.map((feature) => singleFeature(feature)) : 
            enTranslation.map((feature) => singleFeature(feature))
            }
        </SimpleGrid>
      </Box>
      </div>
  );
};

export default Features;
