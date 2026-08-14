import { motion } from 'motion/react';
import { ArrowRight, Film, MapPin, Ticket, Utensils, Music, Users, Camera, Star, Shirt, Martini, Mic, MessageSquare, Play, Video, Rss } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Film, title: "Film Festival", desc: "Showcasing global and regional cinema." },
  { icon: MapPin, title: "Tourism Promotion", desc: "Highlighting Darjeeling as a cinematic destination." },
  { icon: Ticket, title: "Carnival & Activities", desc: "A celebration of arts and entertainment." },
  { icon: Utensils, title: "Food Stalls", desc: "Taste the unique culinary heritage of the hills." },
  { icon: Music, title: "Cultural Program", desc: "Evening performances and traditional music." },
  { icon: Camera, title: "Heritage Recce", desc: "Curated tours for visiting directors and producers." },
  { icon: Play, title: "Short Film Comp", desc: "Discovering emerging voices in cinema." },
  { icon: Star, title: "Celebrity Visits", desc: "Meet the faces of the Indian film industry." },
  { icon: Shirt, title: "Fashion Shows", desc: "Showcasing local designers and textiles." },
  { icon: Martini, title: "Cocktail Dinner", desc: "Exclusive networking and celebration events." },
  { icon: Mic, title: "Press Conferences", desc: "Media interactions with filmmakers." },
  { icon: MessageSquare, title: "Debate Shows", desc: "Engaging discussions on cinema and society." },
  { icon: Users, title: "Game Shows", desc: "Interactive entertainment for festival attendees." },
  { icon: Video, title: "Live Coverage", desc: "Streaming the festival to a global audience." },
  { icon: Rss, title: "Bloggers Meet", desc: "Connecting creators and digital storytellers." },
];

export const Experience = () => {
  return (
    <section id="events" className="py-24 px-6 bg-[#FFFFFF] border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-serif italic font-light tracking-tight text-4xl md:text-5xl mb-16 text-[#0A0A0B]"
        >
          The DIFF Experience
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-black/5 border border-black/10">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative h-48 bg-[#FFFFFF] p-6 overflow-hidden hover:bg-black/5 transition-colors cursor-pointer"
            >
              <div className="absolute top-6 left-6 text-[#0A0A0B] opacity-40 group-hover:opacity-100 group-hover:text-[#D4AF37] transition-all">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="font-sans font-bold uppercase tracking-wider text-xs text-[#0A0A0B] mb-2">{item.title}</h3>
                <p className="text-[10px] text-[#0A0A0B] opacity-0 group-hover:opacity-50 transition-opacity duration-300 line-clamp-2 font-mono">
                  {item.desc}
                </p>
              </div>

              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
