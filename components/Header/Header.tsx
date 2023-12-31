'use client';

import { Group, Divider, Burger, Drawer, ScrollArea, rem, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';

import { LocaleSwitch } from '@/components/LocaleSwitch';
import classes from './Header.module.css';

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const t = useTranslations('Header');

  // workaround, because the next-intl lib does not allow to use arrays in translations
  const keys = ['aboutLink', 'contactsLink'];

  const navigationLinks = keys.map((key) => (
    <Link
      href={t(`${key}.linksTo`)}
      className={classes.link}
      key={t(`${key}.name`)}
      onClick={closeDrawer}
    >
      {t(`${key}.name`)}
    </Link>
  ));

  return (
    <>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          {/* Company logo */}
          <a href="/">
            <img
              src="/Toten-Transport.svg"
              className={classes.logo}
              alt={t('logoAlt')}
              height="56px"
              width="200px"
            />
          </a>

          {/* Navigation items */}
          <Group h="100%" gap={0} visibleFrom="sm">
            {navigationLinks}
          </Group>

          {/* Language switch */}
          <Group visibleFrom="sm">
            <LocaleSwitch />
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
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" ta="center">
          <Divider my="sm" />
          <Stack align="center">{navigationLinks}</Stack>
          <Divider my="sm" />

          <LocaleSwitch />
        </ScrollArea>
      </Drawer>
    </>
  );
};
