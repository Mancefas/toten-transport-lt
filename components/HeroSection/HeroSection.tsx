import Link from 'next/link';
import { IconTruck, IconForklift, IconLicense, IconPackage } from '@tabler/icons-react';
import { Container, Group, Button, Box, Title, Stack } from '@mantine/core';
import { useTranslations } from 'next-intl'

import classes from './HeroSection.module.css';

type HeroSectionProps = {
  text: {
    firstText: string;
    secondText: string;
    btnText: string;
    btnLink: string;
  };
};

const HeroSection = ({ text }: HeroSectionProps) => {
  const totenColor = '#E31937';
  const { firstText, btnText, btnLink } = text;
  const t = useTranslations('Hero')

  return (
    <Stack justify="center" gap="xl" className={classes.mainBgPhoto}>
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
        <Box w="80%" m="auto">
          <Title className={classes.mainText}>{firstText}</Title>
        </Box>

        {/* Call to action btn */}
        <Box mt="lg" m="auto" ta="center">
          {text && (
              <Button
                component="a"
                href={btnLink}
                variant="gradient"
                gradient={{ from: '#cc9494', to: `${totenColor}`, deg: 60 }}
                radius="md"
                size="lg"
              >
                {btnText}
              </Button>
          )}
        </Box>
      </Container>
    </Stack>
  );
};

export default HeroSection;
