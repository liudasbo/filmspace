"use client";

import Link from "next/link";
import Image from "next/image";
import FooterContactForm from "./FooterContactForm";
import ScrollText from "./ScrollText";

export default function Footer() {
  return (
    <div>
      <footer className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-16 text-white border-y border-gray-500">
        <div className="flex flex-col gap-8">
          <Image
            src="/images/filmspace-logo-horizontal.svg"
            width={310}
            height={110}
            alt="Filmspace Logo"
          />
          <p className="text-muted">
            Profesionalus video filmavimas. Visada atviras naujiems projektams
            ir bendradarbiavimui.
          </p>
        </div>

        <div className="flex flex-col sm:mx-auto">
          <p className="font-bold mb-4 text-lg">Meniu</p>
          <ul className="flex flex-col gap-2 text-muted">
            <li>
              <Link href="/">Pagrindinis</Link>
            </li>
            <li>
              <Link href="#services">Paslaugos</Link>
            </li>
            <li>
              <Link href="#portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="#aboutme">Apie mane</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-muted">
            Atviras naujiems filmavimo projektams ir bendradarbiavimui.
          </p>
          <FooterContactForm />
        </div>

        <div className="flex flex-col sm:items-center gap-8">
          <Image
            src="/images/footerImg.webp"
            width={300}
            height={200}
            alt="Footer Image"
          />
          <p className="text-muted">© filmspace</p>
        </div>
      </footer>
      <ScrollText text="Benas Černiauskas" />
    </div>
  );
}
