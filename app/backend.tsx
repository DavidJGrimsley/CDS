import { Stack } from "expo-router";

import { Container } from "~/components/Container";
import { ScreenContent } from "~/components/ScreenContent";

export default function BackDoor() {
  return (
    <>
      <Stack.Screen options={{ title: "Back door" }} />
      <Container>
        <ScreenContent path="app/backend.tsx" title="Back Door" />
      </Container>
    </>
  );
}
