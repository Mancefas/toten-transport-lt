import { Container, Group, Anchor, Text } from '@mantine/core';
import classes from './Footer.module.css';
import { useLanguageContext } from '@/context/LanguageContext';
import WorkingTime from '../WorkingTime/WorkingTime';

const links = [
  { link: 'https://www.facebook.com/nordcarrier.lt', label: 'Facebook' },
  { link: '#', label: 'Google' },
  { link: 'https://rekvizitai.vz.lt/imone/nordcarrier_baltic/', label: 'Rekvizitai' },
];

export function Footer() {
  const { selectedLanguage } = useLanguageContext();

  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="md">
          ©️ {new Date().getFullYear()}{' '}
          {selectedLanguage === 'ltu' ? 'Visos teisės saugomos' : 'All rights reserved'}{' '}
        </Text>
        <WorkingTime />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
