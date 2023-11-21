import React from 'react';
import { Container, Group, Stack, Text, Card, Popover, Flex } from '@mantine/core';

import { useTranslations } from 'next-intl';

type WorkingTimeProps = {};

export const WorkingTime: React.FC<WorkingTimeProps> = () => {
  const t = useTranslations('WorkingTime');
  const weekdaysKeys = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  return (
    <Container size="sm">
      <Popover position="bottom">
        <Popover.Target>
          <Text size="md" className="nc-blue" style={{ cursor: 'pointer' }}>
            {t('working')}
          </Text>
        </Popover.Target>

        <Popover.Dropdown>
          <Card withBorder radius="sm">
            <Group>
              <Stack>
                {weekdaysKeys.map((day) => (
                  <Flex gap="sm" justify="center" key={t(`${day}`)}>
                    <Text>{t(`${day}`)}</Text> <Text>{t('time')}</Text>
                  </Flex>
                ))}
              </Stack>
            </Group>
          </Card>
        </Popover.Dropdown>
      </Popover>
    </Container>
  );
};
