import React from 'react';
import { Container, Group, Stack, Text, Card, Popover, Flex } from '@mantine/core';

type Props = {
  workingTime: { weekdays: string[]; time: string; working: string };
};

const WorkingTime = ({ workingTime }: Props) => {
  const { weekdays, time, working } = workingTime;

  return (
    <Container size="sm">
      <Popover position="bottom">
        <Popover.Target>
          <Text size="md" className="nc-blue" style={{ cursor: 'pointer' }}>
            {working}
          </Text>
        </Popover.Target>

        <Popover.Dropdown>
          <Card withBorder radius="sm">
            <Group>
              <Stack>
                {weekdays.map((day) => (
                  <Flex gap="sm" justify="center" key={day}>
                    <Text>{day}</Text> <Text>{time}</Text>
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
