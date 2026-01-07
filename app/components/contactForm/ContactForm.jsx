import React from "react";

export default function ContactForm() {
  return (
    <div className="text-white pb-4">
      <form className="flex flex-col gap-8">
        <div className="flex gap-16">
          <input type="text" placeholder="Vardas..." />
          <input type="email" placeholder="El. paštas..." />
        </div>
        <textarea placeholder="Žinutė..." className="h-40"></textarea>
      </form>

      <button type="submit">Siųsti</button>

      <div className="flex gap-4 mt-18 text-xl">
        <a href="mailto:hello@filmspace.lt" className="hover:underline">
          ○ hello@filmspace.lt
        </a>
        <a href="tel:+37063085194" className="hover:underline">
          ○ +370 630 85194
        </a>
      </div>
    </div>
  );
}
