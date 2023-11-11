'use client';

import { Group, Box, Divider, Burger, Drawer, ScrollArea, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './Header.module.css';
import { useLanguageContext } from '@/context/LanguageContext';
import LanguageSelectBtn from '../LanguageSelectBtn/LanguageSelectBtn';
import * as ltTranslation from '../../dictionaries/header/lt.json';
import * as enTranslation from '../../dictionaries/header/en.json';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const { selectedLanguage } = useLanguageContext();

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
            <a href="/" className={classes.link}>
              {selectedLanguage === 'ltu' ? ltTranslation.about : enTranslation.about}
            </a>

            <a href="#" className={classes.link}>
              {selectedLanguage === 'ltu' ? ltTranslation.contacts : enTranslation.contacts}
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

          <a href="/" className={classes.link}>
            {selectedLanguage === 'ltu' ? ltTranslation.about : enTranslation.about}
          </a>

          <a href="#" className={classes.link}>
            {selectedLanguage === 'ltu' ? ltTranslation.contacts : enTranslation.contacts}
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
