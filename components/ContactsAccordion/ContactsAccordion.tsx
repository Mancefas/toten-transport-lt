import { IconPhoneCall, IconMail, IconUser } from '@tabler/icons-react';
import { Accordion, Container, Box, Text, Group, Stack } from '@mantine/core';

import classes from './ContactsAccordion.module.css';

const totenColor = '#E31937';

// accordion item
type AccordionItemProps = {
  id: string;
  name: string;
  person: string;
  mobHref: string;
  mob: string;
  mailHref: string;
  mail: string;
  mailHref2?: string;
  mail2?: string;
};
const AccordionItem = ({
  id,
  name,
  person,
  mobHref,
  mob,
  mailHref,
  mail,
  mailHref2 = '',
  mail2 = '',
}: AccordionItemProps) => (
  <Accordion.Item value={id} key={id}>
    <Accordion.Control>{name}</Accordion.Control>
    <Accordion.Panel>
      <Box ta="center">
        <Stack justify="center" gap="xs">
          <Group justify="center">
            <IconUser size="24" color={totenColor} />
            <Text tt="uppercase" fw={500}>
              {person}
            </Text>
          </Group>

          <Group justify="center" gap="xs">
            <IconPhoneCall size="16" color={totenColor} />
            <a href={`tel:${mobHref}`}>{`Mob.${mob}`}</a>
            <br />
          </Group>

          <Group justify="center" gap="xs">
            <IconMail size="16" color={totenColor} />
            <a href={`mailto:${mailHref}`}>{mail}</a>
          </Group>

          {mail2 && (
            <Group justify="center" gap="xs">
              <IconMail size="16" color={totenColor} />
              <a href={`mailto:${mailHref2}`}>{mail2}</a>
            </Group>
          )}
        </Stack>
      </Box>
    </Accordion.Panel>
  </Accordion.Item>
);

type ContactsAccordionProps = {
  text: AccordionItemProps[];
};

const ContactsAccordion = ({ text }: ContactsAccordionProps) => (
  <Container size="sm" className={classes.accordionContainer}>
    <Box ta="center">
      <IconPhoneCall size="32" color="green" />
    </Box>
    <Accordion>{text && text.map((item: AccordionItemProps) => AccordionItem(item))}</Accordion>
  </Container>
);

export default ContactsAccordion;
