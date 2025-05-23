import { Stack } from "expo-router";

import { Container } from "~/components/Container";
import { ScreenContent } from "~/components/ScreenContent";

export default function Home() {
  const test = "test";
  return (
    <>
      <Stack.Screen options={{ title: "Tab One" }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Tab One">
          {test}
        </ScreenContent>
      </Container>
    </>
  );
}

