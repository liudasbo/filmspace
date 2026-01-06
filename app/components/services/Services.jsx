import React from "react";
import VideoCard from "./VideoCard";

const videos = [
  {
    id: 1,
    src: "/videos/Private-events-preview-0p5MB.webm",
    title: "Aftermovie ir renginių filmavimas",
    description:
      "Dinamiški renginių video, konferencijų reportažai ir festivalių aftermovie. Pagauname geriausias emocijas ir atmosferą.",
  },
  {
    id: 2,
    src: "/videos/video-2.webm",
    title: "Privačių švenčių filmavimas",
    description:
      "Jautrus ir estetiškas vestuvių filmavimas, krikštynos bei asmeninės šventės. Kuriame prisiminimus, kurie išlieka visam gyvenimui.",
  },
  {
    id: 3,
    src: "/videos/video-3.webm",
    title: "TV laidų filmavimas",
    description:
      "Profesionali TV laidų gamyba, reportažų rengimas ir techninis aptarnavimas televiziniams projektams.",
  },
  {
    id: 4,
    src: "/videos/video-4.webm",
    title: "Reklaminių video filmavimas",
    description:
      "Efektyvūs reklaminiai klipai verslui, socialiniams tinklams (Reels/TikTok) ir produktų pristatymai. Didinkite savo pardavimus vaizdu.",
  },
  {
    id: 5,
    src: "/videos/video-5.webm",
    title: "Dokumentinių filmų filmavimas",
    description:
      "Išsamūs dokumentiniai pasakojimai, interviu filmavimas ir istorijų kūrimas (storytelling) su kinematografine kokybe.",
  },
  {
    id: 6,
    src: "/videos/Music-Clips-preview-0p5MB.webm",
    title: "Muzikinių klipų filmavimas",
    description:
      "Kūrybiški vizualiniai sprendimai atlikėjams. Muzikinių klipų gamyba nuo scenarijaus iki galutinio montažo.",
  },
];

export default function Services() {
  return (
    <div className="bg-black">
      <div className="heading-container">
        <h2 id="services">
          <span className="font-bold">VIDEO</span> KŪRIMO{" "}
          <span className="font-bold">IR</span>{" "}
          <span className="font-bold">FILMAVIMO</span> PASLAUGOS
        </h2>
        <p className="text-muted">
          Teikiame profesionalias video paslaugas ir video montavimą. Mūsų
          specializacija – nuo dinamiškų renginių aftermovie ir aukščiausios
          kokybės reklaminių klipų gamybos iki TV projektų įgyvendinimo. Kuriame
          estetišką vaizdo turinį, kuris įtraukia ir pasiekia verslo tikslus.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            src={video.src}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>
    </div>
  );
}
