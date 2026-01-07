import PortfolioItemCard from "@/app/components/portfolioItemCard/PortfolioItemCard";
import React from "react";

export default function Tiltas() {
  return (
    <>
      <PortfolioItemCard
        videoId="dQw4w9WgXcQ"
        videoThumbnail="/images/BenasMainImg-1.webp"
        title="Tiltas"
        category="TV serialas"
        description={[
          "Filmavimo paslaugos kuriant pirmąjį lietuvišką realybės šou serialą „TILTAS“ (skirtą Telia Play+) pareikalavo maksimalaus profesionalumo ir techninio pasirengimo. Kaip filmavimo komandos dalis, prisidėjau prie šio ambicingo projekto, kuris vyko atokioje Žemaitijos gamtoje. Čia 12 dalyvių per 13 dienų turėjo pastatyti 300 metrų tiltą iki salos, kovodami dėl 30000 eurų prizo.",
          "Šis video filmavimas truko daugiau nei tris savaites, o procese dalyvavo virš 50 profesionalų komanda. Darbas off-grid sąlygomis tapo rimtu iššūkiu: nuolatinė adaptacija prie kintančio oro, natūralios šviesos suvaldymas ir realaus laiko fiksavimas reikalavo operatyvių sprendimų. Mūsų tikslas buvo užtikrinti, kad video produkcija išlaikytų aukščiausią vaizdo ir garso kokybę net ir sudėtingiausiomis aplinkybėmis.",
          "Projekte dirbau kaip lauko filmavimo komandos narys, specializuodamasis „GoPro“ kamerų sistemų valdyme. Tai leido užfiksuoti itin įtraukiančias dalyvių perspektyvas ir autentišką šou dinamiką iš arti. Šis projektas puikiai atspindi mano, kaip operatoriaus, patirtį teikiant TV laidų filmavimo paslaugas bei dirbant su sudėtingais realybės formatais, kur reikalingas preciziškas video montažas ir techninis lankstumas.",
        ]}
        role="GoPro"
        images={[
          { src: "/images/benas-scaled.jpg", alt: "Benas" },
          { src: "/images/benas-scaled.jpg", alt: "Benas 2" },
        ]}
      />
    </>
  );
}
