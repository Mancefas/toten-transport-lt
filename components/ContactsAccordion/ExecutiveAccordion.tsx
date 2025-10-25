'use client';

import { IconPhoneCall, IconMail, IconUser, IconLicense } from '@tabler/icons-react';
import { Accordion, Container, Box, Text, Group, Stack } from '@mantine/core';
import { useTranslations } from 'next-intl';

import classes from './ContactsAccordion.module.css';

const totenColor = '#E31937';

export const ExecutiveAccordion = () => {
    const translationKey = 'Contacts';
    const t = useTranslations(translationKey);
    const directorsKeys = ['Dir', 'Vad'];

    return (
        <Accordion>
            <Accordion.Item value={t(`Executives.title`)} >
                <Accordion.Control>{t(`Executives.title`)}</Accordion.Control>
                    <Accordion.Panel>
                        <div className={classes.executiveAccordionInnerContainer}>
                            {directorsKeys.map((contact) => (
                                <div key={t(`${contact}.id`)}>
                                <Box ta="center" style={{alignSelf: 'start'}} >
                                    <Stack justify="center" gap="xs">

                                    {/* Title */}
                                    <Group>
                                        {t(`${contact}.person`) && (
                                        <>
                                            <Text tt="uppercase" ta="center" fw={500}>
                                            {t(`${contact}.name`)}
                                            </Text>
                                        </>
                                        )}
                                    </Group>

                                    {/* user name */}
                                    <Group>
                                        {t(`${contact}.person`) ? (
                                        <Group gap="xs">
                                            <IconUser size="24" color={totenColor} />
                                            <Text tt="uppercase" fw={500}>
                                            {t(`${contact}.person`)}
                                            </Text>
                                        </Group>
                                        ) : (
                                        <IconLicense size="24" color={totenColor} />
                                        )}
                                    </Group>

                                    {/* phone number */}
                                    {t(`${contact}.mobHref`) && (
                                        <Group gap="xs">
                                        <IconPhoneCall size="16" color={totenColor} />
                                        <a href={`tel:${t(`${contact}.mobHref`)}`}>
                                            {`Mob.${t(`${contact}.mobHref`)}`}
                                        </a>
                                        <br />
                                        </Group>
                                    )}

                                    {/* email */}
                                    {t(`${contact}.mailHref`) && (
                                        <Group gap="xs">
                                        <IconMail size="16" color={totenColor} />
                                        <a href={`mailto:${t(`${contact}.mailHref`)}`}>{t(`${contact}.mail`)}</a>
                                        </Group>
                                    )}
                                    </Stack>
                                </Box>
                                </div>
                            ))}
                        </div>
                    </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    )
}
