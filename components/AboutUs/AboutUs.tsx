import { Container, Title, Text, Box } from '@mantine/core';

import { useLanguageContext } from '@/context/LanguageContext';
import classes from './AboutUs.module.css';
import * as ltTranslation from '@/dictionaries/about/lt.json';
import * as enTranslation from '@/dictionaries/about/en.json';

// text paragraph item
type propType = {
  firstText: string;
  secondText: string;
  totenText: string;
  code: string;
  vat: string;
  address: string;
  phone: string;
  email: string;
};

const paragraphItem = (text: propType) => (
  <>
    <Box>
      <Text>{text.firstText}</Text>
      <Text>{text.totenText}</Text>
      <Text fw={500} py="lg">
        {text.secondText}
      </Text>
    </Box>

    <Box mt="lg">
      <Text>
        {text.code} - <b>110842421</b>
      </Text>

      <Text>
        {text.vat} - <b>LT108424219</b>
      </Text>

      <Text>
        {text.address} - <b>A.Juozapavičiaus pr 3B, Kaunas</b>
      </Text>

      <Text>
        {text.phone} - <b>+370 37 302375</b>
      </Text>

      <Text>
        {text.email} - <b>info@toten-transport.lt</b>
      </Text>
    </Box>
  </>
);

const AboutUs = () => {
  const { selectedLanguage } = useLanguageContext();

  return (
    <Container size="md" className={classes.container}>
      <Title order={1} ta="center" className="toten-red" mb="lg">
        Toten Transport Lithuania, UAB
      </Title>

      {selectedLanguage === 'ltu' ? paragraphItem(ltTranslation) : paragraphItem(enTranslation)}
    </Container>
  );
};

export default AboutUs;
