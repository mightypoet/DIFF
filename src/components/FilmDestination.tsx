import { motion } from 'motion/react';
import { IMAGES } from '../lib/data';

const LOCATIONS = [
  { id: '01', title: 'DARJEELING HIMALAYAN RAILWAY', image: IMAGES.train },
  { id: '02', title: 'TEA GARDENS', image: IMAGES.tea },
  { id: '03', title: 'THE HIMALAYAS', image: IMAGES.hero },
  { id: '04', title: 'COLONIAL ARCHITECTURE', image: IMAGES.city },
  { id: '05', title: 'MISTY ROADS', image: IMAGES.mistyRoad },
  { id: '06', title: 'LOCAL CULTURE', image: IMAGES.culture },
];

export const FilmDestination = () => {
  return (
    <section id="darjeeling" className="py-24 bg-[#FFFFFF] overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="mb-4 flex items-center gap-3">
          <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
          <span className="uppercase tracking-[0.4em] text-[11px] text-[#D4AF37]">The Locations</span>
        </div>
        <h2 className="font-serif italic font-light tracking-tight text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-[#0A0A0B]">
          Darjeeling <br /> 
          <span className="not-italic font-sans font-black uppercase tracking-tighter opacity-90 block mt-2">IS A FILM SET.</span>
        </h2>
        <p className="text-xl text-[#0A0A0B] opacity-60 font-serif italic pl-4 border-l border-black/20">
          Every corner has a story. Every mountain has a frame.
        </p>
      </div>

      <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 pb-12 gap-8 w-full cursor-grab active:cursor-grabbing">
        {LOCATIONS.map((loc, idx) => (
          <motion.div 
            key={loc.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] flex flex-col gap-4 relative group"
          >
            <div className="aspect-[16/9] w-full overflow-hidden relative bg-[#F5F5F0] border border-black/10 p-2">
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src={loc.image} 
                  alt={loc.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-100"
                  draggable={false}
                />
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-[10px] uppercase tracking-widest text-[#0A0A0B] opacity-40 font-mono mb-1">Location {loc.id}</span>
              <span className="font-sans font-bold uppercase tracking-widest text-sm text-[#0A0A0B]">{loc.title}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 flex justify-end">
        <button className="flex items-center gap-3 text-[#0A0A0B] hover:text-[#D4AF37] transition-colors group text-[11px] font-bold tracking-[0.2em] uppercase">
          Discover Darjeeling for your next film
          <span className="w-8 h-[1px] bg-black/20 group-hover:bg-[#D4AF37] transition-colors"></span>
          <span className="text-lg group-hover:translate-x-2 transition-transform">&rarr;</span>
        </button>
      </div>
    </section>
  );
};
