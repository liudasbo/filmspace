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

  const isRtl = direction === "rtl";

  const router = useRouter();

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="relative w-full bg-black overflow-hidden group cursor-pointer h-90 border-t border-b border-gray-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => href && router.push(href)}
    >
      <style>{`
        @keyframes scrollLtr {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRtl {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .scroll-text-ltr {
          display: flex;
          align-items: center;
          gap: 2rem;
          animation: scrollLtr 50s linear infinite;
        }
        .scroll-text-rtl {
          display: flex;
          align-items: center;
          gap: 2rem;
          animation: scrollRtl 50s linear infinite;
        }
      `}</style>

      <video
        ref={videoRef}
        src={videoSrc}
        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-300 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
      />

      <div className="absolute top-20 text-muted left-0 right-0 z-20 text-center pointer-events-none">
        <p className="  text-sm uppercase tracking-widest">{category}</p>
      </div>

      <div className="absolute inset-0 flex items-center overflow-hidden">
        <div className={isRtl ? "scroll-text-rtl" : "scroll-text-ltr"}>
          {Array.from({ length: 6 }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="font-bold text-white sm:text-8xl text-6xl uppercase tracking-tight shrink-0 whitespace-nowrap">
                {title}
              </span>
              <Image
                src="/images/cropped-logo.png"
                alt={title}
                width={100}
                height={100}
                className="rounded-lg object-cover shrink-0"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
