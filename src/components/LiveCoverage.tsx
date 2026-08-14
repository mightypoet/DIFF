import { motion } from 'motion/react';

export const LiveCoverage = () => {
  return (
    <section className="py-24 px-6 bg-[#FFFFFF] border-t border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#F5F5F0] border border-black/10 p-2 md:p-8 relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 border border-black/5">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-red-900/20 border border-red-500/30 rounded-full">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400">Live</span>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#0A0A0B] opacity-50">Offline</span>
              </div>
              <h2 className="font-serif italic font-light text-3xl md:text-4xl text-[#0A0A0B] mb-4">
                DIFF Live Broadcast
              </h2>
              <p className="text-[#0A0A0B] opacity-60 font-sans text-sm max-w-lg">
                Live coverage will appear here during the festival. Tune in for red carpet arrivals, press conferences, and exclusive behind-the-scenes moments.
              </p>
            </div>

            <div className="w-full md:w-[400px] aspect-video bg-[#FFFFFF] border border-black/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544634076-a90160ddf44e?q=80&w=800&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-luminosity grayscale blur-sm" />
              <div className="flex flex-col items-center gap-3 relative z-10">
                <div className="w-12 h-12 border-2 border-black/20 flex items-center justify-center font-serif text-2xl font-bold italic tracking-tighter text-black/20">D</div>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0A0A0B] opacity-30">Standby</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
