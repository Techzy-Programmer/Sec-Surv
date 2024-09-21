import { Video } from '@/components/video';
import { AppShell, AppShellHeader, AppShellMain, Box, Center, Text } from '@mantine/core';

export default function Home() {
  return (
    <AppShell
      header={{ height: 60 }}
      padding="sm"
    >
      <AppShellHeader p="sm">
        <Text
          fw={900}
          size="xl"
          variant="gradient"
          gradient={{ from: 'yellow', to: 'orange', deg: 90 }}
        >
          Sec-Surv
        </Text>
      </AppShellHeader>
      <AppShellMain>
        <Text
          ta="center"
          size="xl"
          fw={900}
          mb="sm"
          mt="xl"
        >
          Monitoring....
        </Text>
        <Center w={"100%"}>
          <Box w={"clamp(300px, 80%, 800px)"}>
            <Video></Video>
          </Box>
        </Center>
      </AppShellMain>
    </AppShell>
  );
}
