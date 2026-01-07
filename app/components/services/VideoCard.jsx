"use client";

import { useState } from "react";

export default function VideoCard({ src, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full aspect-video overflow-hidden border border-gray-500 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover sm:p-4 p-2"
      >
        <source src={src} type="video/webm" />
        Jūsų naršyklė nepalaiko vaizdo įrašų.
      </video>

      {isHovered && (
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-8 transition-all duration-300">
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300 text-sm text-center">{description}</p>
        </div>
      )}
    </div>
  );
}
