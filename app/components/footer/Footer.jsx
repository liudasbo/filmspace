"use client";

import Image from "next/image";
import FooterContactForm from "./FooterContactForm";
import ScrollText from "./ScrollText";
import LogoCarousel from "../logoCarousel/LogoCarousel";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <LogoCarousel />
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

          <ul className="flex gap-6">
            <li className="hover:text-[#dc3918]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={26} />
              </a>
            </li>
            <li className="hover:text-[#dc3918]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={26} />
              </a>
            </li>
            <li className="hover:text-[#dc3918]">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={26} />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:mx-auto">
          <p className="font-bold mb-4 text-lg">Meniu</p>
          <ul className="flex flex-col gap-2 text-muted">
            <li>
              <a
                href="/"
                className="hover:text-[#dc3918] hover:underline transition"
              >
                Pagrindinis
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-[#dc3918] hover:underline transition"
              >
                Paslaugos
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-[#dc3918] hover:underline transition"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#aboutme"
                className="hover:text-[#dc3918] hover:underline transition"
              >
                Apie mane
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#dc3918] hover:underline transition"
              >
                Kontaktai
              </a>
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
