import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import { IMAGES } from '../lib/data';

const VIDEOS = [
  {
    id: 1,
    name: "Aparna Sen",
    film: "The Japanese Wife",
    quote: "Darjeeling has a story waiting to be filmed in every cloud.",
    location: "Batasia Loop",
    duration: "2:45",
    thumbnail: IMAGES.director1
  },
  {
    id: 2,
    name: "Anurag Basu",
    film: "Barfi!",
    quote: "The mist here doesn't just hide things, it reveals emotions.",
    location: "Chowrasta",
    duration: "3:12",
    thumbnail: IMAGES.director2
  },
  {
    id: 3,
    name: "Satyajit Ray (Archive)",
    film: "Kanchenjungha",
    quote: "The Himalayas dictate the rhythm of life and cinema here.",
    location: "Observatory Hill",
    duration: "1:50",
    thumbnail: IMAGES.director3
  },
  {
    id: 4,
    name: "Sujoy Ghosh",
    film: "Kahaani 2",
    quote: "It's a landscape that is both beautiful and deeply mysterious.",
    location: "Kurseong",
    duration: "4:05",
    thumbnail: IMAGES.director4
  }
];

export const DirectorBites = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="director-bites" className="py-24 bg-[#0A0A0B] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="mb-4 flex items-center gap-3">
          <div className="w-8 h-[1px] bg-[#D4AF37]"></div>
          <span className="uppercase tracking-[0.4em] text-[11px] text-[#D4AF37]">Interviews</span>
        </div>
        <h2 className="font-serif italic font-light tracking-tight text-4xl md:text-5xl mb-6 text-[#EBE6E0]">
          Directors Talk DIFF
        </h2>
        <p className="text-lg text-[#EBE6E0] opacity-60 font-serif italic max-w-2xl">
          Voices from filmmakers who experienced Darjeeling, cinema and the DIFF journey.
        </p>
      </div>

      <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 pb-12 gap-8 w-full cursor-grab active:cursor-grabbing">
        {VIDEOS.map((video, idx) => (
          <motion.div 
            key={video.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="snap-center shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] group"
            onClick={() => setActiveVideo(video.id)}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1A1A1C] border border-white/10 p-2 mb-6 cursor-pointer">
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
                    <Play className="w-6 h-6 text-[#EBE6E0] group-hover:text-[#0A0A0B] ml-1" fill="currentColor" />
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#0A0A0B]/80 px-2 py-1 text-[10px] tracking-widest text-[#EBE6E0] font-mono border border-white/10">
                  [REC] {video.duration}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif italic text-2xl text-[#EBE6E0] mb-3">"{video.quote}"</h3>
              <div className="flex items-center gap-3 text-[11px] font-sans font-bold uppercase tracking-widest text-[#EBE6E0]">
                <span>{video.name}</span>
                <span className="w-4 h-[1px] bg-white/30"></span>
                <span className="opacity-50">{video.film}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0B]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 text-[#EBE6E0] opacity-50 hover:opacity-100 transition-opacity z-50"
            >
              <X className="w-10 h-10" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-6xl aspect-video bg-black relative overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Fake Video Player */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-[#EBE6E0] opacity-50">
                  <Play className="w-16 h-16" />
                  <p className="font-serif italic text-xl tracking-wide">Loading Scene...</p>
                </div>
              </div>
              
              {/* Fake Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4">
                <button className="text-[#EBE6E0]"><Play className="w-6 h-6" fill="currentColor"/></button>
                <div className="flex-1 h-[2px] bg-white/20 overflow-hidden relative">
                  <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-[#D4AF37]" />
                </div>
                <span className="text-[10px] tracking-[0.2em] text-[#EBE6E0] font-mono">01:23 / 03:12</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
