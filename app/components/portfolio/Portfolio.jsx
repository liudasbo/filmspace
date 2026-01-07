import React from "react";
import PortfolioVideoCard from "./PortfolioVideoCard";

export default function Portfolio() {
  return (
    <div className="bg-black" id="portfolio">
      <div className="heading-container">
        <h2>
          ATLIKTI <span className="font-bold">VIDEO</span> PROJEKTAI
        </h2>
        <p className="text-muted">
          Mano, kaip patyrusio video operatoriaus ir videografo, patirtis apima
          darbą su didžiausiais Lietuvos televizijos projektais bei privačiais
          užsakovais. Nuo populiarių TV serialų filmavimo paslaugų ir
          dokumentikos video produkcijos kūrimo iki kūrybiškų muzikinių klipų
          bei reklamų įgyvendinimo. Kiekviename projekte siekiu aukščiausios
          vaizdo estetikos ir techninės kokybės. Mūsų filmavimas ir montažas
          garantuoja profesionalų rezultatą.
        </p>
      </div>

      <div>
        <PortfolioVideoCard
          videoSrc="/videos/tiltas-intro-optimized.mp4"
          title="Serialas Tiltas"
          category="TV serialas"
          direction="ltr"
          href="/portfolio-item/tiltas"
        />
        <PortfolioVideoCard
          videoSrc="/videos/tiltas-intro-optimized.mp4"
          title="Projekto pavadinimas"
          category="TV serialas"
          direction="rtl"
          href="/portfolio-item/tiltas"
        />
        <PortfolioVideoCard
          videoSrc="/videos/tiltas-intro-optimized.mp4"
          title="Projekto pavadinimas"
          category="TV serialas"
          direction="ltr"
          href="/portfolio-item/tiltas"
        />
        <PortfolioVideoCard
          videoSrc="/videos/tiltas-intro-optimized.mp4"
          title="Projekto pavadinimas"
          category="TV serialas"
          direction="rtl"
          href="/portfolio-item/tiltas"
        />
        <PortfolioVideoCard
          videoSrc="/videos/tiltas-intro-optimized.mp4"
          title="Projekto pavadinimas"
          category="TV serialas"
          direction="ltr"
          href="/portfolio-item/tiltas"
        />
      </div>
    </div>
  );
}
