import { Container, Title, Text, Box } from '@mantine/core';
import classes from './AboutUs.module.css';
import { useTranslations } from 'next-intl'

const AboutUs = () => {
  const t = useTranslations('About')

  return (
    <Container size="md" className={classes.container}>
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
          {t('phone')} - <b>+370 37 302375</b>
        </Text>

        <Text>
          {t('email')} - <b>info@toten-transport.lt</b>
        </Text>
      </Box>
    </Container>
  );
};

export default AboutUs;
