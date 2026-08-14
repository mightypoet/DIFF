import { motion } from 'motion/react';
import { IMAGES } from '../lib/data';

export const Community = () => {
  return (
    <section className="py-24 px-6 bg-[#FFFFFF] border-t border-black/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
            <span className="uppercase tracking-[0.4em] text-[11px] text-[#D4AF37]">Creator Community</span>
          </div>
          <h2 className="font-serif italic font-light tracking-tight text-5xl md:text-6xl text-[#0A0A0B] mb-2">
            Bring your camera.
          </h2>
          <h2 className="font-sans font-black uppercase tracking-tighter text-4xl md:text-5xl text-[#0A0A0B] opacity-90 mb-8">
            BRING YOUR STORY.
          </h2>
          <p className="text-[#0A0A0B] opacity-60 font-serif italic text-lg mb-10 max-w-md leading-relaxed">
            Whether you're a travel blogger, filmmaker, photographer, or digital storyteller, Darjeeling is your next canvas. Join a community of creators capturing the essence of the Himalayas.
          </p>
          <button className="px-8 py-4 bg-[#0A0A0B] text-[#FFFFFF] text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors">
            Join the Community
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="aspect-[4/3] w-full bg-[#F5F5F0] border border-black/10 p-2 relative group overflow-hidden">
            <div className="w-full h-full relative overflow-hidden">
              <img src={IMAGES.filmmaker} alt="Creator" className="w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" />
            </div>
            <div className="absolute top-4 right-4 bg-[#FFFFFF] border border-black/10 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[#0A0A0B]">
              [REC] ACTIVE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
