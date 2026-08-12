import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 overflow-hidden pt-24 pb-12">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#0A0A0B]/40" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex">
        <div className="hidden md:flex w-1/12 border-r border-white/10 items-center justify-center min-h-[50vh]">
          <div className="rotate-[-90deg] whitespace-nowrap uppercase tracking-[0.5em] text-[9px] opacity-40 font-mono">
            EST. 2026 — HIMALAYAS — WEST BENGAL
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl md:pl-20 flex-1 relative"
        >
          <div className="absolute -top-12 right-0 md:right-12 text-right font-mono text-[10px] opacity-30 hidden sm:block">
            [REC] 00:24:12:08<br/>27.0410° N, 88.2663° E
          </div>
          
          <div className="mb-4 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
            <span className="uppercase tracking-[0.4em] text-[11px] text-[#D4AF37]">The Opening Scene</span>
          </div>

          <h1 className="font-serif italic font-light tracking-tight text-[60px] md:text-[90px] lg:text-[110px] leading-[0.9] mb-6">
            Darjeeling <br />
            <span className="not-italic font-sans font-black uppercase tracking-tighter md:ml-12 opacity-90 block mt-2">ON THE BIG SCREEN.</span>
          </h1>
          
          <p className="max-w-md text-sm md:text-base opacity-60 leading-relaxed mb-10 font-serif italic">
            A prestigious celebration of cinema, heritage, and the extraordinary landscapes where the mountains meet the lens.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-8 py-4 bg-[#EBE6E0] text-[#0A0A0B] text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white transition-colors">
              Explore the Festival <span className="text-lg">&rarr;</span>
            </button>
            <button className="px-8 py-4 border border-white/20 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 text-[#EBE6E0] transition-colors">
              Film in Darjeeling
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
