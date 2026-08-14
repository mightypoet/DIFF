import { motion } from 'motion/react';
import { IMAGES } from '../lib/data';

const TRAVEL_CARDS = [
  { title: "STAY", img: IMAGES.city },
  { title: "EAT", img: IMAGES.culture },
  { title: "EXPLORE", img: IMAGES.train },
  { title: "FILM", img: IMAGES.filmmaker },
  { title: "EXPERIENCE", img: IMAGES.tea },
];

export const TravelCTA = () => {
  return (
    <section className="py-32 px-6 bg-[#FFFFFF] border-t border-black/10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="font-serif italic font-light tracking-tight text-4xl md:text-6xl text-[#0A0A0B] mb-2">
          Come for the festival.
        </h2>
        <h2 className="font-sans font-black uppercase tracking-tighter text-4xl md:text-6xl text-[#0A0A0B] opacity-90 mb-8">
          STAY FOR DARJEELING.
        </h2>
        <p className="text-lg md:text-xl text-[#0A0A0B] opacity-60 font-serif italic max-w-3xl mx-auto leading-relaxed">
          Watch films. Meet creators. Ride the Toy Train. Walk through tea gardens. Taste the hills. Find your next frame.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 mb-16">
        {TRAVEL_CARDS.map((card, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="w-full sm:w-[calc(50%-8px)] md:w-[calc(20%-13px)] aspect-[3/4] relative group overflow-hidden bg-[#F5F5F0] border border-black/10 p-1 cursor-pointer"
          >
            <div className="w-full h-full relative overflow-hidden">
              <img src={card.img} alt={card.title} className="w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] to-transparent opacity-80" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="font-sans font-bold text-[11px] tracking-[0.2em] uppercase text-[#0A0A0B]">{card.title}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-4 border border-[#0A0A0B]/30 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#0A0A0B] hover:text-[#FFFFFF] text-[#0A0A0B] transition-colors inline-flex items-center gap-3">
          Explore Darjeeling <span className="text-lg">&rarr;</span>
        </button>
      </div>
    </section>
  );
};
