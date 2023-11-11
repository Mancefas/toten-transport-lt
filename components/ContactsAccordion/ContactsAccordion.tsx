import { IconPhoneCall, IconMail, IconUser } from "@tabler/icons-react";
import { Accordion, Container, Box, Text, Group, Stack } from "@mantine/core";

import { useLanguageContext } from "@/context/LanguageContext";
import classes from "./ContactsAccordion.module.css"
import * as ltTranslation from "@/dictionaries/contacts/lt.json"
import * as enTranslation from "@/dictionaries/contacts/en.json"

const totenColor = "#E31937"

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
} 
const item = (contact: AccordionItemProps) => {
    return (
        <Accordion.Item value={contact.id} key={contact.id}>
        <Accordion.Control>{contact.name}</Accordion.Control>
        <Accordion.Panel>
          <Box ta="center">
            <Stack justify="center" gap="xs">

                <Group justify="center">
                  <IconUser size="24" color={totenColor} />
                  <Text tt="uppercase" fw={500}>
                    {contact.person}
                  </Text>
                </Group>
                
                <Group justify="center" gap="xs">
                  <IconPhoneCall size="16" color={totenColor} />
                  <a
                    href={`tel:${contact.mobHref}`}
                  >{`Mob.${contact.mob}`}</a>
                  <br />
                </Group>

                <Group justify="center" gap="xs">
                    <IconMail size="16" color={totenColor} />
                    <a href={`mailto:${contact.mailHref}`}>{contact.mail}</a>
                </Group>

                {contact.mail2 && (
                <Group justify="center" gap="xs">
                    <IconMail size="16" color={totenColor} />
                    <a href={`mailto:${contact.mailHref2}`}>{contact.mail2}</a>
                </Group>
                )}
              </Stack>
            
          </Box>
        </Accordion.Panel>
      </Accordion.Item>
    )
}

const ContactsAccordion = () => {
  const { selectedLanguage } = useLanguageContext();

  return (
    <Container
      size={"sm"}
      className={classes.accordionContainer}
    >
      <Box ta="center">
        <IconPhoneCall size="32" color="green" />
      </Box>
      <Accordion>
        {selectedLanguage === "ltu" ? 
            ltTranslation.map((contact) => item(contact)) :
            enTranslation.map((contact) => item(contact))}
      </Accordion>
    </Container>
  );
};

export default ContactsAccordion;
