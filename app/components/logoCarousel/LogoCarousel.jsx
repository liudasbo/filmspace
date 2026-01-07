"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Logotipų masyvas (pakeisk savo failų keliais)
const LOGOS = [
  { src: "/images/Neodenta-1.png", alt: "Partneris 1" },
  { src: "/images/Neodenta-1.png", alt: "Partneris 2" },
  { src: "/images/Neodenta-1.png", alt: "Partneris 3" },
  { src: "/images/Neodenta-1.png", alt: "Partneris 4" },
  { src: "/images/Neodenta-1.png", alt: "Partneris 5" },
  { src: "/images/Neodenta-1.png", alt: "Partneris 6" },
];

export default function LogoCarousel() {
  const autoplayOptions = {
    delay: 1900,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay(autoplayOptions),
  ]);

  return (
    <section className="bg-black py-16 pt-26">
      <div className="mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex-[0_0_50%] min-w-0 sm:flex-[0_0_33%] md:flex-[0_0_20%] lg:flex-[0_0_16.6%] px-8"
              >
                <div className="relative h-20 w-full flex justify-center items-center opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
