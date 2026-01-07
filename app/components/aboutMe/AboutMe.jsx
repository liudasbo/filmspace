import React from "react";
import Image from "next/image";
import ContactForm from "../contactForm/ContactForm";

export default function AboutMe() {
  return (
    <div
      className="bg-black grid lg:grid-cols-4 lg:px-36 sm:px-12 px-4 lg:gap-24 gap-12"
      id="about"
    >
      <div className="sm:col-span-2 flex flex-col justify-center gap-20">
        <div className="flex flex-col gap-8">
          <h2>
            <span className="font-bold">APIE</span> MANE
          </h2>
          <div className="text-muted flex flex-col gap-4">
            <p>
              Esu Benas Černiauskas – profesionalus videografas ir patyręs video
              operatorius, turintis daugiau nei 8 metų patirtį media rinkoje.
              Per šį laikotarpį dirbau su įvairiausiais projektais: nuo didelio
              masto TV laidų filmavimo ir realybės šou parodukcijos iki aukštos
              kokybės meninių dokumentinių filmų filmavimo Lietuvoje ir
              užsienyje.
            </p>
            <p>
              Teikiu pilno ciklo filmavimo paslaugas. Mano stiprybė – ne tik
              darbas filmavimo aikštelėje, bet ir visa post-produkcija: atlieku
              profesionalų video montažą kaip patyręs video montuotojas, spalvų
              korekciją bei garso suvedimą. Naudoju tik profesionalią kino
              techniką, kad užtikrinčiau kinematografišką vaizdo kokybę.
            </p>
            <p>
              Mano tikslas – paversti Jūsų idėją išskirtine video produkcija,
              kuri pasiektų verslo tikslus. Nesvarbu, ar tai dinamiškas renginio
              aftermovie, ar pardavimus skatinantis reklaminis klipas –
              garantuoju estetiškai kokybišką ir įtraukiantį rezultatą.
            </p>
            <p>
              Jei ieškote patikimo, techniškai stipraus partnerio, kuris
              įgyvendintų Jūsų viziją nuo koncepcijos iki galutinio video
              montažo, susisiekite dėl konsultacijos ir filmavimo kainos
              aptarimo.
            </p>
          </div>
        </div>

        <div id="contact">
          <h2 className="pb-8">
            <span className="font-bold">Susisiekime</span>
          </h2>
          <ContactForm />
        </div>
      </div>

      <div className="flex flex-col col-span-2">
        <div className="flex flex-col items-center justify-center">
          <div className="relative rounded-full overflow-hidden aspect-square w-92 -ml-15 flex items-center justify-center">
            <Image
              src="/images/benas-scaled.jpg"
              fill
              alt="Benas"
              className="object-cover"
              sizes="(max-width: 640px) 12rem, (max-width: 1024px) 18rem, 400px"
              priority
            />
          </div>

          <div className="flex flex-col -mt-15">
            <Image
              src="/images/cropped-logo.png"
              width={200}
              height={200}
              alt="Benas"
              className="ml-auto"
            />

            <Image
              src="/images/signature.png"
              width={800}
              height={300}
              alt="Benas"
              className="-mt-15"
            />
          </div>

          <div className="mx-auto -mt-16"></div>
        </div>
      </div>
    </div>
  );
}
