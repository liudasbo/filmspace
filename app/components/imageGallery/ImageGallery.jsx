"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export default function ImageGallery({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
      skipSnaps: false,
      containScroll: "trimSnaps",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [slideStyles, setSlideStyles] = useState([]);

  // Dinaminis mastelis ir permatomumas pagal atstumą iki centro
  const updateStyles = useCallback(() => {
    if (!emblaApi) return;
    const selected = emblaApi.selectedScrollSnap();
    const slides = emblaApi.scrollSnapList().map((_, i) => {
      const diff = Math.abs(selected - i);
      // Mastelis ir permatomumas: centras > šonai > kiti
      const scale = diff === 0 ? 1.1 : diff === 1 ? 0.8 : 0.6;
      const opacity = diff === 0 ? 1 : diff === 1 ? 0.5 : 0.2;
      const zIndex = diff === 0 ? 30 : diff === 1 ? 20 : 10;
      return { scale, opacity, zIndex };
    });
    setSlideStyles(slides);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    updateStyles();
    emblaApi.on("select", updateStyles);
    emblaApi.on("scroll", updateStyles);
    return () => {
      emblaApi.off("select", updateStyles);
      emblaApi.off("scroll", updateStyles);
    };
  }, [emblaApi, updateStyles]);

  return (
    <div className="bg-black py-12 flex justify-center w-full">
      <div className="w-full">
        <div ref={emblaRef} className="overflow-hidden w-full">
          <div className="flex w-full">
            {images.map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center transition-all duration-700"
                style={{
                  minWidth: "33.3333%",
                  maxWidth: "33.3333%",
                  margin: "0",
                  transform: `scale(${slideStyles[i]?.scale || 0.6})`,
                  opacity: slideStyles[i]?.opacity || 0.2,
                  zIndex: slideStyles[i]?.zIndex || 10,
                }}
              >
                <div className="relative w-full h-[32vw] rounded-lg overflow-hidden bg-black flex items-center justify-center shadow-lg">
                  <Image
                    src={img}
                    alt={`Gallery ${i}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 800px) 100vw, 33vw"
                    priority={i === 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
