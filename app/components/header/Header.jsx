"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Pagrindinis" },
    { href: "/#services", label: "Paslaugos" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#about", label: "Apie mane" },
    { href: "/#contact", label: "Kontaktai" },
  ];

  return (
    <header className="p-8 flex items-center justify-between bg-black text-white">
      <Image
        src="/images/filmspace-logo-horizontal.svg"
        alt="Filmspace logo"
        width={200}
        height={60}
        priority
      />

      {/* Desktop meniu */}
      <ul className="hidden md:flex gap-8 mx-auto">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-gray-400 transition">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile meniu ikona */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile meniu */}
      {isOpen && (
        <ul className="absolute top-20 left-0 right-0 bg-black flex flex-col gap-4 p-8 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-gray-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
