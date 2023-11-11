import React from 'react';
import { Container, Group, Stack, Text, Card, Popover, Flex } from '@mantine/core';

import { useLanguageContext } from '@/context/LanguageContext';
import * as ltTranslation from '@/dictionaries/footer/lt.json';
import * as enTranslation from '@/dictionaries/footer/en.json';

const WorkingTime = () => {
  const { selectedLanguage } = useLanguageContext();

  return (
    <Container size="sm">
      <Popover position="bottom">
        <Popover.Target>
          <Text size="md" className="nc-blue" style={{ cursor: 'pointer' }}>
            {selectedLanguage === 'ltu' ? ltTranslation.working : enTranslation.working}
          </Text>
        </Popover.Target>

        <Popover.Dropdown>
          <Card withBorder radius="sm">
            <Group>
              <Stack>
                {selectedLanguage === 'ltu' &&
                  ltTranslation.weekdays.map((day) => (
                    <Flex gap="sm" justify="center">
                      <Text>{day}</Text> <Text>{ltTranslation.time}</Text>
                    </Flex>
                  ))}
                {selectedLanguage === 'eng' &&
                  enTranslation.weekdays.map((day) => (
                    <Flex gap="sm" justify="center">
                      <Text>{day}</Text> <Text>{enTranslation.time}</Text>
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

export default WorkingTime;
