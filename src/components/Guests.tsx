import { motion } from 'motion/react';
import { IMAGES } from '../lib/data';

const GUESTS = [
  { name: "Guest Name", role: "Director", film: "Opening Film", image: IMAGES.director1 },
  { name: "Guest Name", role: "Actor", film: "Special Screening", image: IMAGES.director2 },
  { name: "Guest Name", role: "Cinematographer", film: "Masterclass", image: IMAGES.director3 },
  { name: "Guest Name", role: "Producer", film: "Panel Discussion", image: IMAGES.director4 },
];

export const Guests = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0A0B]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
            <span className="uppercase tracking-[0.4em] text-[11px] text-[#D4AF37]">Special Guests</span>
          </div>
          <h2 className="font-serif italic font-light tracking-tight text-4xl md:text-5xl text-[#EBE6E0] mb-2">
            The people <br /> 
            <span className="not-italic font-sans font-black uppercase tracking-tighter opacity-90">WHO MAKE CINEMA</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUESTS.map((guest, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden bg-[#1A1A1C] border border-white/10 cursor-pointer p-1"
            >
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src={guest.image} 
                  alt={guest.name} 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-60 transition-all duration-700 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif italic text-2xl text-[#EBE6E0] mb-1">{guest.name}</h3>
                  <p className="text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{guest.role}</p>
                  <div className="h-[1px] w-0 bg-white/30 group-hover:w-full transition-all duration-700 delay-100 mb-2"></div>
                  <p className="text-[#EBE6E0] opacity-0 group-hover:opacity-60 font-sans text-xs transition-opacity duration-500 delay-200">
                    <span className="font-mono text-[9px] uppercase tracking-widest block mb-1">Appearance</span>
                    {guest.film}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
