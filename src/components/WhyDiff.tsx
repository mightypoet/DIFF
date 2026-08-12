import { motion } from 'motion/react';

const REASONS = [
  {
    title: "EMPOWER CREATORS",
    description: "Give filmmakers and creative professionals from Darjeeling a platform to showcase their stories, talent and ideas."
  },
  {
    title: "PROMOTE FILM TOURISM",
    description: "Position Darjeeling as one of India's most cinematic destinations and encourage productions to discover its locations."
  },
  {
    title: "CELEBRATE DARJEELING",
    description: "Showcase the region's culture, people, heritage, food, music, landscapes and unique identity."
  },
  {
    title: "CREATE OPPORTUNITIES",
    description: "Connect local talent with filmmakers, producers, brands, creators, celebrities and the wider entertainment ecosystem."
  }
];

export const WhyDiff = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-serif italic font-light tracking-tight text-4xl md:text-6xl mb-16 text-[#EBE6E0]"
        >
          Why DIFF?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {REASONS.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-10 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 mb-4 block font-mono">0{index + 1}</span>
              <h3 className="font-sans font-black uppercase tracking-tighter text-xl md:text-2xl mb-4 text-[#EBE6E0] opacity-90">{reason.title}</h3>
              <p className="text-[#EBE6E0] opacity-60 font-serif italic text-lg leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
