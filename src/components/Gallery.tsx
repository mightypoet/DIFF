import { motion } from 'motion/react';
import { IMAGES } from '../lib/data';

const GALLERY_IMAGES = [
  { src: IMAGES.event1, span: "col-span-2 row-span-2" },
  { src: IMAGES.director1, span: "col-span-1 row-span-1" },
  { src: IMAGES.event2, span: "col-span-1 row-span-1" },
  { src: IMAGES.event3, span: "col-span-1 row-span-2" },
  { src: IMAGES.director2, span: "col-span-1 row-span-1" },
  { src: IMAGES.filmmaker, span: "col-span-2 row-span-1" },
];

export const Gallery = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
              <span className="uppercase tracking-[0.4em] text-[11px] text-[#D4AF37]">Gallery</span>
            </div>
            <h2 className="font-serif italic font-light tracking-tight text-4xl md:text-5xl text-[#EBE6E0] mb-4">
              Festival Moments
            </h2>
            <p className="text-[#EBE6E0] opacity-60 font-serif italic max-w-lg">
              A glimpse into the screenings, masterclasses, cultural celebrations and creative energy of DIFF.
            </p>
          </div>
          <button className="text-[#EBE6E0] hover:text-[#D4AF37] transition-colors text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap flex items-center gap-2">
            View Full Gallery <span className="text-lg">&rarr;</span>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-3 gap-4 h-[600px] md:h-[800px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden group bg-[#1A1A1C] border border-white/10 p-1 ${img.span}`}
            >
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src={img.src} 
                  alt="Festival Moment" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
