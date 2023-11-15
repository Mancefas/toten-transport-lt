'use client';

import { Group, Box, Divider, Burger, Drawer, ScrollArea, rem, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Header.module.css';

type HeaderProps = {
  text: 
  { navLinks: { name: string; linksTo: string; }[],
    languageLinks: { name: string; linksTo: string; }[]
 }
}

export function Header({text} : HeaderProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const {navLinks} = text;

  const navigationLinks = navLinks.map(({linksTo, name}) => (<a href={linksTo} className={classes.link}>{name}</a>))
  const languageLinks = text.languageLinks.map(({linksTo, name}) => (<a href={linksTo} className={classes.link}>{name}</a>))

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
            {navigationLinks}
          </Group>

          <Group visibleFrom="sm">
            {languageLinks}
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
            {navigationLinks}
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            {languageLinks}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
