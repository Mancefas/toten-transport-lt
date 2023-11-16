'use client';

import { Container, Group, Anchor, Text } from '@mantine/core';
import classes from './Footer.module.css';
import WorkingTime from '../WorkingTime/WorkingTime';

type FooterProps = {
  text: {
      workingTime: {weekdays: string[], time: string, working: string};
      rights: string;
      links: { link: string; label: string;}[];
  }
}

export function Footer({text}: FooterProps) {
  const { workingTime, rights, links } = text;

  const items = links.map((link) => (
    <Anchor<'a'>
      target="_blank"
      key={link.label}
      href={link.link}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="md">
          ©️ {new Date().getFullYear()}{' '}
          {rights}
        </Text>
        <WorkingTime workingTime={workingTime} />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
