import { motion } from 'motion/react';

const SPONSORS = [
  "PRESENTING PARTNER", "PARTNER", "ASSOCIATE PARTNER", "MEDIA PARTNER", "TOURISM PARTNER",
  "PRESENTING PARTNER", "PARTNER", "ASSOCIATE PARTNER", "MEDIA PARTNER", "TOURISM PARTNER"
];

export const Sponsors = () => {
  return (
    <section className="py-24 bg-[#FFFFFF] border-y border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="font-sans font-black text-2xl text-[#0A0A0B] tracking-tighter uppercase opacity-80">
          OUR PARTNERS
        </h2>
      </div>

      <div className="relative w-full overflow-hidden flex whitespace-nowrap border-y border-black/5 py-8 mb-16">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {SPONSORS.map((sponsor, idx) => (
            <div key={idx} className="flex items-center mx-8">
              <span className="text-2xl md:text-4xl font-serif italic text-[#0A0A0B] opacity-30 hover:opacity-100 transition-opacity cursor-default">
                {sponsor}
              </span>
              <span className="mx-8 text-[#0A0A0B] opacity-20">&rarr;</span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless looping */}
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap absolute top-8 left-full">
          {SPONSORS.map((sponsor, idx) => (
            <div key={idx + SPONSORS.length} className="flex items-center mx-8">
              <span className="text-2xl md:text-4xl font-serif italic text-[#0A0A0B] opacity-30 hover:opacity-100 transition-opacity cursor-default">
                {sponsor}
              </span>
              <span className="mx-8 text-[#0A0A0B] opacity-20">&rarr;</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#0A0A0B] opacity-50 font-mono mb-6">Become a DIFF Partner</p>
        <button className="px-8 py-4 border border-black/20 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black/5 text-[#0A0A0B] transition-colors inline-flex items-center justify-center gap-3">
          Partner With Us <span className="text-lg">&rarr;</span>
        </button>
      </div>
    </section>
  );
};
