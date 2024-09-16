import Link from "next/link";
import NavBar from "./components/NavBar";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroBanner />
    </main>
  );
}
