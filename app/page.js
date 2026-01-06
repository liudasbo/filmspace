import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import HeroSection from "./components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Portfolio />
    </>
  );
}
