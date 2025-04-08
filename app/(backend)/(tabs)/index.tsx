import { Inventory } from "~/components/BackDoorComps";
import { Container } from "~/components/Container";
import { ScreenContent } from "~/components/ScreenContent";

export default function Home() {
  const test = "test";
  return (
    <>
      <Container>
        <ScreenContent path="app/(backend)/(tabs)/index.tsx" title="Inventory">
          <Inventory />
        </ScreenContent>
      </Container>
    </>
  );
}
