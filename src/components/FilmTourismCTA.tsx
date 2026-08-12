import { motion } from 'motion/react';
import { IMAGES } from '../lib/data';

export const FilmTourismCTA = () => {
  return (
    <section id="film-tourism" className="relative py-32 md:py-48 px-6 overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0A0B]/80 z-10 mix-blend-multiply" />
        <img 
          src={IMAGES.mistyRoad} 
          alt="Cinematic Darjeeling Road" 
          className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 flex justify-center">
            <span className="border border-[#EBE6E0]/30 px-6 py-2 rounded-full text-[10px] tracking-[0.3em] uppercase text-[#EBE6E0] font-semibold">
              Film Tourism
            </span>
          </div>
          <h2 className="font-serif italic font-light tracking-tight text-5xl md:text-7xl mb-8 text-[#EBE6E0]">
            Your next story <br /> 
            <span className="not-italic font-sans font-black uppercase tracking-tighter opacity-90 block mt-4">COULD BE SHOT HERE.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#EBE6E0] opacity-70 max-w-3xl mx-auto leading-relaxed font-serif italic mb-12">
            From mist-covered mountains to colonial streets, tea estates and one of the world's most iconic heritage railways — Darjeeling offers a landscape unlike any other.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#EBE6E0] text-[#0A0A0B] text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center hover:bg-white transition-colors">
              Plan a Recce
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-white/20 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 text-[#EBE6E0] transition-colors">
              Explore Locations
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
