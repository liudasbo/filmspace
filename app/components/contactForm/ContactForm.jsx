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

      <div className="flex gap-4 mt-8 text-lg">
        <p>○ hello@filmspace.lt</p>
        <p>○ +370 630 85194</p>
      </div>
    </div>
  );
}
