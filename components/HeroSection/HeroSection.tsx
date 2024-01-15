import { IconTruck, IconForklift, IconLicense, IconPackage } from '@tabler/icons-react';
import { Container, Group, Button, Box, Title, Stack } from '@mantine/core';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';

import classes from './HeroSection.module.css';

type HeroSectionProps = {};

export const HeroSection: React.FC<HeroSectionProps> = () => {
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
        <Stack w="80%" m="auto" gap="lg" ta="center">
          <Title order={1} className={classes.mainText}>
            {t('firstText')}
          </Title>
          <Title order={3} className={`${classes.mainText} ${classes.secondaryText}`}>
            {t('secondText')}
          </Title>
        </Stack>

        {/* Call to action btn */}
        <Box mt="lg" m="auto" ta="center">
          <Link href={t('btnLink')} className={classes.heroButton}>
            {t('btnText')}
          </Link>
        </Box>
      </Container>
    </Stack>
  );
};
