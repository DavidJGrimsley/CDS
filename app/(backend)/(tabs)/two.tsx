import { Sales, WebsiteTraffic } from "~/components/BackDoorComps";
import { Container } from "~/components/Container";
import { ScreenContent } from "~/components/ScreenContent";

export default function Home() {
  return (
    <>
      <Container>
        <ScreenContent
          path="app/(backend)/(tabs)/two.tsx"
          title="Statistics and Analytics"
        >
          <Sales />
          <WebsiteTraffic />
        </ScreenContent>
      </Container>
    </>
  );
}
