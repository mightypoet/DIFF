import { motion } from 'motion/react';
import { IMAGES } from '../lib/data';

const CULTURE_ITEMS = [
  { title: "PEOPLE", desc: "The communities and creative voices of Darjeeling.", image: IMAGES.culture },
  { title: "TEA", desc: "The world-famous Darjeeling tea story.", image: IMAGES.tea },
  { title: "HERITAGE", desc: "Colonial architecture, monasteries and the Toy Train.", image: IMAGES.train },
  { title: "HIMALAYAS", desc: "The landscapes that make Darjeeling cinematic.", image: IMAGES.hero },
];

export const Culture = () => {
  return (
    <section className="py-24 px-6 bg-[#FFFFFF] overflow-hidden border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center flex flex-col items-center">
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono opacity-50 border border-black/10 px-4 py-2">
              Beyond the Screen
            </span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif italic font-light tracking-tight text-4xl md:text-5xl lg:text-7xl text-[#0A0A0B]"
          >
            The Culture <br /> 
            <span className="not-italic font-sans font-black uppercase tracking-tighter opacity-90 block mt-2">BEHIND THE FRAME</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-x-12 md:gap-y-32">
          {CULTURE_ITEMS.map((item, idx) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative group ${idx % 2 === 1 ? 'md:mt-32' : ''}`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#F5F5F0] border border-black/10 p-2">
                <div className="w-full h-full relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-50 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-8 -left-4 md:-left-8 bg-[#FFFFFF] p-6 md:p-8 border border-black/10 shadow-2xl max-w-[80%] z-10 group-hover:border-[#D4AF37]/50 transition-colors">
                <div className="text-[10px] uppercase tracking-[0.2em] font-mono opacity-40 mb-2 border-b border-black/10 pb-2">
                  0{idx + 1}
                </div>
                <h3 className="font-serif italic text-2xl md:text-3xl text-[#0A0A0B] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#0A0A0B] opacity-60 font-sans text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
