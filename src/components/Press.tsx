import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const PRESS_ITEMS = [
  { source: "Cinema Weekly", title: "Why Darjeeling is India's next big film destination", type: "Article" },
  { source: "The Himalayan Post", title: "DIFF announces its boldest lineup yet", type: "News" },
  { source: "Director's Cut", title: "A conversation on the intersection of travel and cinema", type: "Podcast" },
];

export const Press = () => {
  return (
    <section className="py-24 px-6 bg-[#0A0A0B] border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif italic font-light tracking-tight text-4xl md:text-5xl text-[#EBE6E0] mb-2">
              DIFF in <br />
            </h2>
            <h2 className="font-sans font-black uppercase tracking-tighter text-4xl md:text-5xl text-[#EBE6E0] opacity-90 mb-6">
              THE NEWS
            </h2>
            <button className="px-6 py-3 border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 text-[#EBE6E0] transition-colors mt-4 inline-flex items-center gap-2">
              Press Kit <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-6">
          {PRESS_ITEMS.map((item, idx) => (
            <motion.a
              href="#"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group block border-b border-white/10 pb-8 hover:border-[#D4AF37]/50 transition-colors"
            >
              <div className="flex justify-between items-start gap-4">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#EBE6E0] opacity-60 font-mono uppercase tracking-[0.2em] text-[10px]">{item.source}</span>
                    <span className="w-1 h-1 bg-[#D4AF37] rounded-full"></span>
                    <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-[10px]">{item.type}</span>
                  </div>
                  <h3 className="font-serif italic text-2xl md:text-3xl text-[#EBE6E0] group-hover:text-white transition-colors leading-tight opacity-90">
                    {item.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#EBE6E0] group-hover:text-[#0A0A0B] transition-all shrink-0 group-hover:border-[#EBE6E0]">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
