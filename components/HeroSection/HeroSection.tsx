import Link from "next/link";
import {
  IconTruck,
  IconForklift,
  IconLicense,
  IconPackage,
} from "@tabler/icons-react";
import {
  Container,
  Group,
  Button,
  Box,
  Title,
  Stack,
} from "@mantine/core";

import { useLanguageContext } from '@/context/LanguageContext';
import classes from "./HeroSection.module.css"
import * as ltText from "@/dictionaries/hero/lt.json"
import * as enText from "@/dictionaries/hero/en.json"

const HeroSection = () => {
  const { selectedLanguage } = useLanguageContext();
  const totenColor = "#E31937"

  return (
    <Stack
      justify="center"
      gap="xl"
      className={classes.mainBgPhoto}
    >
        {/* Icons  */}
      <Container className={classes.zIndex}>
        <Group justify="center" className={classes.icons}>
          <IconForklift size="40" className={classes.forklift} />
          <IconPackage size="25" className={classes.box} />
          <IconTruck size="65" />
          <IconLicense size="40" />
        </Group>
      </Container>

        {/* Main text */}
      <Container className={classes.zIndex}>
        <Box w='80%' m='auto'>
          <Title className={classes.mainText}>
          {selectedLanguage === 'ltu' ? ltText.firstText : enText.firstText}
          </Title>
        </Box>

        {/* Call to action btn */}
        <Box mt='lg' m='auto' ta="center">
          <Link href="/kontaktai" passHref>
            <Button
              component="a"
              variant="gradient"
              gradient={{ from: "#cc9494", to: `${totenColor}`, deg: 60 }}
              radius="md"
              size="lg"
            >
              {selectedLanguage === 'ltu' ? ltText.btnText : enText.btnText}
            </Button>
          </Link>
        </Box>
      </Container>
    </Stack>
  );
};

export default HeroSection;
