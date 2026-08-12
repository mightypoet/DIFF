import { motion } from 'motion/react';
import { IMAGES } from '../lib/data';

export const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 bg-[#0A0A0B] overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0A0A0B]/80 z-10 mix-blend-multiply" />
        <img 
          src={IMAGES.hero} 
          alt="Darjeeling" 
          className="w-full h-full object-cover mix-blend-luminosity opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="w-16 h-16 border-2 border-[#EBE6E0] flex items-center justify-center font-serif text-3xl font-bold italic tracking-tighter text-[#EBE6E0] mx-auto mb-12">
            D
          </div>
          <h1 className="font-sans font-black uppercase tracking-tighter text-6xl md:text-8xl text-[#EBE6E0] opacity-90 mb-8">
            STORIES LIVE HERE.
          </h1>
          <p className="text-xl md:text-2xl text-[#EBE6E0] opacity-70 font-serif italic max-w-2xl mx-auto leading-relaxed mb-12">
            Come to Darjeeling. <br/>
            Discover a landscape of stories. <br/>
            Meet the people who create them. <br/>
            And make something of your own.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="w-full sm:w-auto px-10 py-5 bg-[#EBE6E0] text-[#0A0A0B] text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors">
              JOIN DIFF
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border border-white/20 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 text-[#EBE6E0] transition-colors">
              FILM IN DARJEELING
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
