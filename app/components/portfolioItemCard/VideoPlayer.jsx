"use client";

import { useState } from "react";
import Image from "next/image";

export default function VideoPlayer({ videoId, thumbnail }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video overflow-hidden bg-zinc-900 group cursor-pointer xl:max-h-150 lg:max-h-120 md:max-h-70 sm:max-h-50 col-span-2">
      {!isPlaying ? (
        <div
          className="relative w-full h-full"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={thumbnail}
            alt="Video viršelis"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

          {/* Play mygtukas per vidurį */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
