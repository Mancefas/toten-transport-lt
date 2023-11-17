import { Container, Title, Text, Box } from '@mantine/core';
import classes from './AboutUs.module.css';

// text paragraph item
type PropType = {
  text: {
    firstText: string;
    secondText: string;
    totenText: string;
    code: string;
    vat: string;
    address: string;
    phone: string;
    email: string;
  };
};

const AboutUs = ({ text }: PropType) => {
  const { firstText, secondText, totenText, code, vat, address, phone, email } = text;

  return (
    <Container size="md" className={classes.container}>
      <Title order={1} ta="center" className="toten-red" mb="lg">
        Toten Transport Lithuania, UAB
      </Title>
      {/* Paragraphs item */}
      <Box>
        <Text>{firstText}</Text>
        <Text>{totenText}</Text>
        <Text fw={500} py="lg">
          {secondText}
        </Text>
      </Box>

      <Box mt="lg">
        <Text>
          {code} - <b>110842421</b>
        </Text>

        <Text>
          {vat} - <b>LT108424219</b>
        </Text>

        <Text>
          {address} - <b>A.Juozapavičiaus pr 3B, Kaunas</b>
        </Text>

        <Text>
          {phone} - <b>+370 37 302375</b>
        </Text>

        <Text>
          {email} - <b>info@toten-transport.lt</b>
        </Text>
      </Box>
    </Container>
  );
};

export default AboutUs;
