import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";
import ContentContainer from "./components/ContentContainer";
import OneColumnContent from "./components/OneColumnContent";

export default function Home() {
  return (
    <main>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <NavBar />
        <HeroBanner />
        <ContentContainer>
          <OneColumnContent />
        </ContentContainer>
      </div>
    </main>
  );
}
