'use client';

import { Container, Title, Text, Box } from '@mantine/core';
import { useTranslations } from 'next-intl';

import classes from './AboutUs.module.css';

type AboutUsProps = {};

export const AboutUs: React.FC<AboutUsProps> = () => {
  const t = useTranslations('About');

  return (
    <Container className={classes.container}>
      <Title order={1} ta="center" className="toten-red" mb="lg">
        Toten Transport Lithuania, UAB
      </Title>
      {/* Paragraphs item */}
      <Box>
        <Text>{t('firstText')}</Text>
        <Text>{t('totenText')}</Text>
        <Text fw={500} py="lg">
          {t('secondText')}
        </Text>
      </Box>

      <Box mt="lg">
        <Text>
          {t('code')} - <b>110842421</b>
        </Text>

        <Text>
          {t('vat')} - <b>LT108424219</b>
        </Text>

        <Text>
          {t('address')} - <b>A.Juozapavičiaus pr 3B, Kaunas</b>
        </Text>

        <Text>
          {t('phone')} - <b>+370 618 73017</b>
        </Text>

        <Text>
          {t('email')} - <b>info@toten-transport.lt</b>
        </Text>
      </Box>
    </Container>
  );
};
