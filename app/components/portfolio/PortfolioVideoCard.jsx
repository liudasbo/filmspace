"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PortfolioVideoCard({
  videoSrc,
  title,
  category,
  direction = "ltr",
  href,
}) {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);
  const router = useRouter();
  const isRtl = direction === "rtl";

  const handleMouseEnter = () => {
    setIsHovering(true);
    videoRef.current?.play().catch((e) => console.log("Video play blocked"));
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // LOGIKA TELEFONAMS
  const handleClick = (e) => {
    // Jei tai mobilus įrenginis ir video dar nebuvo aktyvuotas (ne hover būsenoj)
    if (window.matchMedia("(max-width: 1024px)").matches && !isHovering) {
      e.preventDefault(); // Sustabdom router.push
      setIsHovering(true);
      videoRef.current?.play();
    } else {
      // Jei jau aktyvuota arba tai Desktopas - keliaujam į href
      if (href) router.push(href);
    }
  };

  return (
    <div
      className="relative w-full bg-black overflow-hidden group cursor-pointer h-90 border-t border-b border-gray-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick} // Naudojam naują handleClick funkciją
    >
      <style>{`
        @keyframes scrollLtr { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollRtl { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        .scroll-text-ltr { display: flex; align-items: center; gap: 2rem; animation: scrollLtr 50s linear infinite; }
        .scroll-text-rtl { display: flex; align-items: center; gap: 2rem; animation: scrollRtl 50s linear infinite; }
      `}</style>

      <video
        ref={videoRef}
        src={videoSrc}
        className={`pointer-events-none w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline // LABAI SVARBU: neleidžia video iššokti į visą ekraną iPhone/Android
        webkit-playsinline="true"
      />

      <div className="absolute top-20 left-0 right-0 z-20 text-center pointer-events-none px-4">
        <p className="text-muted text-sm uppercase tracking-widest text-white/70">
          {category}
        </p>
      </div>

      <div className="absolute inset-0 flex items-center overflow-hidden">
        <div className={isRtl ? "scroll-text-rtl" : "scroll-text-ltr"}>
          {Array.from({ length: 6 }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="font-bold text-white sm:text-8xl text-5xl uppercase tracking-tight shrink-0 whitespace-nowrap">
                {title}
              </span>
              <div className="relative w-16 h-16 sm:w-24 sm:h-24 shrink-0">
                <Image
                  src="/images/cropped-logo.png"
                  alt={title}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
