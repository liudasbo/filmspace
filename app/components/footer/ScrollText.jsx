import React from "react";

export default function ScrollText({ text }) {
  const repeatedText = `${text} • `.repeat(30);

  return (
    <div className="w-full overflow-hidden bg-black py-12">
      <div className="relative w-full sm:text-[144px] text-9xl flex items-center font-bold">
        <div
          className="flex animate-marquee"
          style={{
            WebkitTextStroke: "2px #BEBEBE",
            color: "transparent",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          <span>{repeatedText}</span>
          <span aria-hidden="true">{repeatedText}</span>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 860s linear infinite;
        }
      `}</style>
    </div>
  );
}
