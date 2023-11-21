'use client';

import { IconPhoneCall, IconMail, IconUser, IconLicense } from '@tabler/icons-react';
import { Accordion, Container, Box, Text, Group, Stack } from '@mantine/core';
import { useTranslations } from 'next-intl';

import classes from './ContactsAccordion.module.css';

const totenColor = '#E31937';

type ContactsAccordionProps = {};

export const ContactsAccordion: React.FC<ContactsAccordionProps> = () => {
  const translationKey = 'Contacts';
  const t = useTranslations(translationKey);
  const contactsKeys = ['Vad', 'INo', 'IsNo', 'Muit', 'Kiti', 'Fin', 'Buh', 'Rel', 'Sand', 'Inv'];

  return (
    <Container size="sm" className={classes.accordionContainer}>
      <Box ta="center">
        <IconPhoneCall size="32" color="green" />
      </Box>
      <Accordion>
        {contactsKeys.map((contact) => (
          <Accordion.Item value={t(`${contact}.id`)} key={t(`${contact}.id`)}>
            <Accordion.Control>{t(`${contact}.name`)}</Accordion.Control>
            <Accordion.Panel>
              <Box ta="center">
                <Stack justify="center" gap="xs">
                  {/* user name */}
                  <Group justify="center">
                    {t(`${contact}.person`) ? (
                      <>
                        <IconUser size="24" color={totenColor} />
                        <Text tt="uppercase" fw={500}>
                          {t(`${contact}.person`)}
                        </Text>
                      </>
                    ) : (
                      <IconLicense size="24" color={totenColor} />
                    )}
                  </Group>

                  {/* phone number */}
                  {t(`${contact}.mobHref`) && (
                    <Group justify="center" gap="xs">
                      <IconPhoneCall size="16" color={totenColor} />
                      <a href={`tel:${t(`${contact}.mobHref`)}`}>
                        {`Mob.${t(`${contact}.mobHref`)}`}
                      </a>
                      <br />
                    </Group>
                  )}

                  {/* email */}
                  {t(`${contact}.mailHref`) && (
                    <Group justify="center" gap="xs">
                      <IconMail size="16" color={totenColor} />
                      <a href={`mailto:${t(`${contact}.mailHref`)}`}>{t(`${contact}.mail`)}</a>
                    </Group>
                  )}
                </Stack>
              </Box>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};
