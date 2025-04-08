import { Stack } from "expo-router";

import { BackDoorScreenContent } from "~/components/BDSC";
import { AddNewItem } from "~/components/BackDoorComps";
import { Container } from "~/components/Container";

export default function Backend() {
  return (
    <>
      <Stack.Screen options={{ title: "Back door" }} />
      <Container>
        <BackDoorScreenContent path="app/backend.tsx" title="Back Door">
          <AddNewItem />
        </BackDoorScreenContent>
      </Container>
    </>
  );
}
