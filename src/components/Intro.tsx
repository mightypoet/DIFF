import { motion } from 'motion/react';

export const Intro = () => {
  return (
    <section id="festival" className="py-24 px-6 relative overflow-hidden bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 flex justify-center">
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold opacity-50 border border-white/10 px-4 py-2">Our Mission</span>
          </div>
          <h2 className="font-serif italic font-light tracking-tight text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
            More than a film festival. <br className="hidden md:block" />
            <span className="not-italic font-sans font-black uppercase tracking-tighter opacity-90 mt-2 block">A DESTINATION FOR STORIES.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#EBE6E0] opacity-70 max-w-3xl mx-auto leading-relaxed font-serif italic">
            DIFF brings filmmakers, creators, artists, travellers and audiences together in Darjeeling — creating a platform where cinema meets culture, heritage and the Himalayas.
          </p>
        </motion.div>
      </div>

      {/* Decorative film strip elements */}
      <div className="absolute top-0 bottom-0 left-8 w-px bg-white/5 hidden md:block"></div>
      <div className="absolute top-0 bottom-0 right-8 w-px bg-white/5 hidden md:block"></div>
    </section>
  );
};
