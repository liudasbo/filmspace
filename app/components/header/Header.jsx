"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Pagrindinis" },
    { href: "/#services", label: "Paslaugos" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#about", label: "Apie mane" },
    { href: "/#contact", label: "Kontaktai" },
  ];

  // Helper: ar nuoroda yra anchor (su #)
  const isAnchor = (href) => href.startsWith("/#");

  return (
    <header className="sm:p-8 p-6 flex text-white sm:justify-between items-center">
      <Image
        src="/images/filmspace-logo-horizontal.svg"
        alt="Filmspace logo"
        width={200}
        height={60}
        priority
        onClick={() => router.push("/")}
        className="cursor-pointer w-auto"
      />

      {/* Desktop meniu */}
      <ul className="hidden lg:flex gap-8 mx-auto">
        {navLinks.map((link) => (
          <li key={link.href}>
            {isAnchor(link.href) ? (
              <a
                href={link.href}
                className="hover:text-[#dc3918] hover:underline transition text-lg"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="hover:text-[#dc3918] hover:underline transition text-lg"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <ul className="hidden sm:flex gap-8">
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

      {/* Mobile meniu ikona */}
      <button
        className="lg:hidden text-4xl hover:text-[#dc3918] cursor-pointer sm:ml-24 ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "x" : "☰"}
      </button>

      {/* Mobile meniu */}
      {isOpen && (
        <ul className="absolute z-40 top-20 left-0 right-0 bg-black flex flex-col gap-4 p-8 lg:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              {isAnchor(link.href) ? (
                <a
                  href={link.href}
                  className="hover:text-[#dc3918] hover:underline transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="hover:text-[#dc3918] hover:underline transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="flex w-full mt-8">
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
          </li>
        </ul>
      )}
    </header>
  );
}
