import { motion } from 'motion/react';

export const Competition = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-50 border border-white/10 px-4 py-2">
              Competition 2026
            </span>
          </div>
          <h2 className="font-serif italic font-light tracking-tight text-4xl md:text-5xl lg:text-6xl text-[#EBE6E0] leading-[1.1] mb-6">
            Tell your story. <br />
            <span className="not-italic font-sans font-black uppercase tracking-tighter opacity-90">WE'LL GIVE IT A SCREEN.</span>
          </h2>
          <p className="text-lg text-[#EBE6E0] opacity-70 font-serif italic mb-10 max-w-xl">
            Submit your short films and documentaries. The DIFF competition is dedicated to discovering bold new voices and extraordinary narratives from the Himalayan region and around the world.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EBE6E0] mb-4">Categories</h4>
              <ul className="text-[#EBE6E0] opacity-60 font-serif text-sm space-y-3">
                <li>Short Fiction</li>
                <li>Documentary Short</li>
                <li>Himalayan Narratives</li>
                <li>Student Films</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#EBE6E0] mb-4">Key Dates</h4>
              <ul className="text-[#EBE6E0] opacity-60 font-serif text-sm space-y-3">
                <li><span className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] mr-2">Open:</span> Jan 15</li>
                <li><span className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] mr-2">Early:</span> Mar 30</li>
                <li><span className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF37] mr-2">Final:</span> Jun 15</li>
              </ul>
            </div>
          </div>
          
          <button className="px-8 py-4 bg-[#EBE6E0] text-[#0A0A0B] text-[11px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-white transition-colors inline-flex">
            Submit Your Film <span className="text-lg">&rarr;</span>
          </button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1 w-full max-w-md relative"
        >
          <div className="aspect-[3/4] bg-[#1A1A1C] border border-white/10 p-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544634076-a90160ddf44e?q=80&w=800&auto=format&fit=crop')] bg-cover opacity-20 mix-blend-luminosity group-hover:opacity-30 group-hover:mix-blend-normal transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/50 to-transparent" />
            
            <div className="relative z-10 h-full p-6 flex flex-col justify-between border border-white/10">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 border-2 border-[#EBE6E0] flex items-center justify-center font-serif text-2xl font-bold italic tracking-tighter text-[#EBE6E0]">
                  D
                </div>
                <div className="text-right font-mono">
                  <p className="text-[9px] tracking-widest opacity-50 uppercase">Entry</p>
                  <p className="text-[11px] font-bold text-[#EBE6E0]">2026</p>
                </div>
              </div>

              <div>
                <h3 className="font-sans font-black text-3xl uppercase tracking-tighter text-[#EBE6E0] mb-4 border-b border-white/20 pb-4">OFFICIAL <br/> SELECTION</h3>
                <p className="text-[9px] uppercase tracking-[0.3em] opacity-60">
                  Darjeeling International Film Festival
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
