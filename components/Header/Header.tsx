'use client';

import { Group, Box, Divider, Burger, Drawer, ScrollArea, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Header.module.css';
import LanguageSelectBtn from '../LanguageSelectBtn/LanguageSelectBtn';


type HeaderProps = {
  text: {
    about: string;
    contacts: string;
  }
}

export function Header({text} : HeaderProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const {about, contacts} = text;

  return (
    <Box py={10}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* Company logo */}
          <a href="/">
            <img
              src="Toten-Transport.svg"
              className={classes.logo}
              alt="Toten transport logo"
              height="56px"
              width="200px"
            />
          </a>

          {/* Navigation items */}

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href={about} className={classes.link}>
              {about}
            </a>

            <a href={contacts} className={classes.link}>
              {contacts}
            </a>
          </Group>

          <Group visibleFrom="sm">
            <LanguageSelectBtn />
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      {/* Mobile hamburger menu */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Toten Transport Lithuania"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href={about} className={classes.link}>
              {about}
            </a>

            <a href={contacts} className={classes.link}>
              {contacts}
            </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <LanguageSelectBtn />
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
