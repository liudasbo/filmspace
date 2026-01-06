"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative h-[80vh] w-full bg-black">
      <Image
        src="/images/BenasMainImg-1.webp"
        alt="Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 flex h-full w-full">
        <div className="flex sm:ml-16">
          <div className="text-white m-auto ml-4">
            <p className="mb-4 text-white tracking-widest">
              Videografas Benas Černiauskas | Vaizdo produkcija ir montažas
            </p>
            <h1 className="sm:w-4/6 mb-4">
              <span className="font-bold">Profesionalios</span> video{" "}
              <span className="font-bold">filmavimo</span> paslaugos
            </h1>
            <Link href="/#projects">
              <button className="mt-6 px-6 py-3 border hover:bg-white hover:text-black hover:border-white font-medium">
                Peržiūrėti projektus
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
