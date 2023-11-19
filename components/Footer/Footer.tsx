'use client';

import { Container, Group, Anchor, Text } from '@mantine/core';

import { useTranslations } from 'next-intl'

import classes from './Footer.module.css';
import WorkingTime from './WorkingTime';

export default function Footer() {
  const t = useTranslations('Footer')
  const linksKeys = ['fbLink', 'goLink']

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="md">
          ©️ {new Date().getFullYear()} {t('rights')}
        </Text>

        <WorkingTime />

        <Group className={classes.links}>
          {linksKeys.map((key) => (
          <Anchor<'a'> target="_blank" key={t(`${key}.label`)} href={t(`${key}.link`)}>
            {t(`${key}.label`)}
          </Anchor>))}
        </Group>

      </Container>
    </div>
  );
}
