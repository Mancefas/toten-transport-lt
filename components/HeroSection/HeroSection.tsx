import { IconTruck, IconForklift, IconLicense, IconPackage } from '@tabler/icons-react';
import { Container, Group, Button, Box, Title, Stack } from '@mantine/core';

import { useTranslations } from 'next-intl';

import classes from './HeroSection.module.css';

type HeroSectionProps = {};

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const totenColor = '#E31937';
  const t = useTranslations('Hero');

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
          <Title className={classes.mainText}>{t('firstText')}</Title>
        </Box>

        {/* Call to action btn */}
        <Box mt="lg" m="auto" ta="center">
          <Button
            component="a"
            href={t('btnLink')}
            variant="gradient"
            gradient={{ from: '#cc9494', to: `${totenColor}`, deg: 60 }}
            radius="md"
            size="lg"
          >
            {t('btnText')}
          </Button>
        </Box>
      </Container>
    </Stack>
  );
};
