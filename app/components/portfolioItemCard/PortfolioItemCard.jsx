import React from "react";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";

export default function PortfolioItemCard({
  videoId,
  videoThumbnail,
  title,
  category,
  description,
  role,
  images = [],
}) {
  // Leisti perduoti description kaip string arba masyvą
  const descriptionArray = Array.isArray(description)
    ? description
    : [description];

  return (
    <section className="xl:px-50 lg:px-25 md:px-18 px-4 grid lg:gap-20 gap-10 pt-8 grid-cols-2">
      <VideoPlayer videoId={videoId} thumbnail={videoThumbnail} />

      <div className="w-full col-span-2 md:col-span-1 flex flex-col lg:gap-20 gap-10">
        {images.map((img, idx) => (
          <div className="w-full aspect-square relative" key={idx}>
            <Image
              src={img.src}
              alt={img.alt || title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-8 col-span-2 md:col-span-1 md:col-start-2 row-start-2">
        <h1 className="font-bold">{title}</h1>

        <div className="flex flex-col gap-2">
          <p className="text-white uppercase text-lg font-bold">Kategorija:</p>
          <p className="text-muted">{category}</p>
        </div>

        <div className="flex gap-2 flex-col">
          {descriptionArray.map(
            (desc, idx) =>
              desc && (
                <p className="text-muted" key={idx}>
                  {desc}
                </p>
              )
          )}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white uppercase text-lg font-bold">
            MANO VAIDMUO:
          </p>
          <p className="text-muted">{role}</p>
        </div>
      </div>
    </section>
  );
}
