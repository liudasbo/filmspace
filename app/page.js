import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import HeroSection from "./components/HeroSection/HeroSection";
import ImageGallery from "./components/imageGallery/ImageGallery";
import AboutMe from "./components/aboutMe/AboutMe";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <Portfolio />
      <ImageGallery
        images={[
          "/images/BenasMainImg-1.webp",
          // "/images/cropped-logo.png",
          "/images/BenasMainImg-1.webp",
          "/images/BenasMainImg-1.webp",
          "/images/BenasMainImg-1.webp",
          "/images/BenasMainImg-1.webp",
        ]}
      />
      <AboutMe />
    </>
  );
}
