import React from "react";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";

export default function PortfolioItemCard() {
  return (
    <section className="px-50 grid grid-cols-2 gap-20 pt-8">
      <VideoPlayer
        videoId="dQw4w9WgXcQ"
        thumbnail="/images/BenasMainImg-1.webp"
      />

      <div className="w-full">
        <Image
          src="/images/benas-scaled.jpg"
          width={400}
          height={80}
          alt="Benas"
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="font-bold">Tiltas</h1>

        <div className="flex flex-col gap-2">
          <p className="text-white uppercase text-lg font-bold">Kategorija:</p>
          <p className="text-muted">TV serialas</p>
        </div>

        <p className="text-muted">
          Filmavimo paslaugos kuriant pirmąjį lietuvišką realybės šou serialą
          „TILTAS“ (skirtą Telia Play+) pareikalavo maksimalaus profesionalumo
          ir techninio pasirengimo. Kaip filmavimo komandos dalis, prisidėjau
          prie šio ambicingo projekto, kuris vyko atokioje Žemaitijos gamtoje.
          Čia 12 dalyvių per 13 dienų turėjo pastatyti 300 metrų tiltą iki
          salos, kovodami dėl 30000 eurų prizo. Šis video filmavimas truko
          daugiau nei tris savaites, o procese dalyvavo virš 50 profesionalų
          komanda. Darbas off-grid sąlygomis tapo rimtu iššūkiu: nuolatinė
          adaptacija prie kintančio oro, natūralios šviesos suvaldymas ir
          realaus laiko fiksavimas reikalavo operatyvių sprendimų. Mūsų tikslas
          buvo užtikrinti, kad video produkcija išlaikytų aukščiausią vaizdo ir
          garso kokybę net ir sudėtingiausiomis aplinkybėmis. Projekte dirbau
          kaip lauko filmavimo komandos narys, specializuodamasis „GoPro“ kamerų
          sistemų valdyme. Tai leido užfiksuoti itin įtraukiančias dalyvių
          perspektyvas ir autentišką šou dinamiką iš arti. Šis projektas puikiai
          atspindi mano, kaip operatoriaus, patirtį teikiant TV laidų filmavimo
          paslaugas bei dirbant su sudėtingais realybės formatais, kur
          reikalingas preciziškas video montažas ir techninis lankstumas.
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-white uppercase text-lg font-bold">
            MANO VAIDMUO:
          </p>
          <p className="text-muted">GoPro</p>
        </div>
      </div>
    </section>
  );
}
