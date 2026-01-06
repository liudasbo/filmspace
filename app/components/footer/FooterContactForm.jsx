import React from "react";

export default function FooterContactForm() {
  return (
    <div>
      <form className="flex flex-col gap-14">
        <input type="email" placeholder="El. paštas..." />

        <textarea placeholder="Žinutė..." rows={4} className="h-18"></textarea>
      </form>
      <button type="submit">Siųsti</button>
    </div>
  );
}
