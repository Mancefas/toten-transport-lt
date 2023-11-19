import { IconPhoneCall, IconMail, IconUser } from '@tabler/icons-react';
import { Accordion, Container, Box, Text, Group, Stack } from '@mantine/core';
import { useTranslations } from 'next-intl'

import classes from './ContactsAccordion.module.css';

const totenColor = '#E31937';

const ContactsAccordion = () => {
  const translationKey = 'Contacts'
  const t = useTranslations(translationKey)
  const contactsKeys = ["INo", "IsNo", "Muit", "Kiti", "Fin", "Buh", "Rel", "Sand", "Vad"];

return (
  <Container size="sm" className={classes.accordionContainer}>
    <Box ta="center">
      <IconPhoneCall size="32" color="green" />
    </Box>
    <Accordion>
      {contactsKeys.map((contact) => {
        // if no translation next-intl returns a ${namespace}.${key} string. 
        const hasOptionalMail = t(`${contact}.mail2`) !== `${translationKey}.${contact}.mail2`;

      return (
            <Accordion.Item value={t(`${contact}.id`)} key={t(`${contact}.id`)}>
              <Accordion.Control>{t(`${contact}.name`)}</Accordion.Control>
              <Accordion.Panel>
                <Box ta="center">
                  <Stack justify="center" gap="xs">
                    <Group justify="center">
                      <IconUser size="24" color={totenColor} />
                      <Text tt="uppercase" fw={500}>
                        {t(`${contact}.person`)}
                      </Text>
                    </Group>
          
                    <Group justify="center" gap="xs">
                      <IconPhoneCall size="16" color={totenColor} />
                      <a href={`tel:${t(`${contact}.mobHref`)}`}>{`Mob.${t(`${contact}.mobHref`)}`}</a>
                      <br />
                    </Group>
          
                    <Group justify="center" gap="xs">
                      <IconMail size="16" color={totenColor} />
                      <a href={`mailto:${t(`${contact}.mailHref`)}`}>{t(`${contact}.mail`)}</a>
                    </Group>
          
                    {hasOptionalMail && (
                      <Group justify="center" gap="xs">
                        <IconMail size="16" color={totenColor} />
                        <a href={`mailto:${t(`${contact}.mailHref2`)}`}>{t(`${contact}.mail2`)}</a>
                      </Group>
                    )}
                  </Stack>
                </Box>
              </Accordion.Panel>
            </Accordion.Item>)}
      )}
    </Accordion>
  </Container>
);}

export default ContactsAccordion;
