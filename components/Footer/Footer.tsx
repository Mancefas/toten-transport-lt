'use client';

import { Container, Group, Anchor, Text } from '@mantine/core';

import { useTranslations } from 'next-intl';

import { WorkingTime } from './WorkingTime';
import classes from './Footer.module.css';

type FooterProps = {};

export const Footer: React.FC<FooterProps> = () => {
  const t = useTranslations('Footer');
  // workaround, because the next-intl lib does not allow to use arrays in translations
  const linksKeys = ['fbLink'];

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="md">
          ©️ {new Date().getFullYear()} {t('rights')}
        </Text>

        <WorkingTime />

        <Group className={classes.links}>
          {linksKeys.map((key) => (
            <Anchor<'a'> target="_blank" key={t(`${key}.label`)} href={t(`${key}.link`)}>
              {t(`${key}.label`)}
            </Anchor>
          ))}
        </Group>
      </Container>
    </footer>
  );
};
