import { motion } from 'motion/react';

const SCHEDULE = [
  { day: "DAY 01", date: "NOV 12", events: [
    { time: "10:00 AM", title: "Opening Ceremony", type: "Main Event" },
    { time: "01:00 PM", title: "Press Conferences", type: "Media" },
    { time: "04:00 PM", title: "Inaugural Screening", type: "Film Screenings" },
    { time: "07:30 PM", title: "Cocktail Dinner", type: "Networking" }
  ]},
  { day: "DAY 02", date: "NOV 13", events: [
    { time: "09:30 AM", title: "Heritage Recce Tour", type: "Tourism" },
    { time: "11:00 AM", title: "Short Film Competition", type: "Competition" },
    { time: "03:00 PM", title: "Director Talks", type: "Workshop" },
    { time: "06:00 PM", title: "Evening Cultural Program", type: "Culture" }
  ]},
  { day: "DAY 03", date: "NOV 14", events: [
    { time: "10:00 AM", title: "Bloggers Meet", type: "Community" },
    { time: "02:00 PM", title: "Debate Shows", type: "Interactive" },
    { time: "05:00 PM", title: "Fashion Shows", type: "Culture" },
    { time: "08:00 PM", title: "Closing Awards", type: "Main Event" }
  ]}
];

export const Program = () => {
  return (
    <section className="py-24 px-6 bg-[#FFFFFF] border-t border-black/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <h2 className="font-serif italic font-light tracking-tight text-4xl md:text-5xl text-[#0A0A0B] mb-2">
              The Festival
            </h2>
            <h2 className="font-sans font-black uppercase tracking-tighter text-4xl md:text-5xl text-[#0A0A0B] opacity-90 mb-6">
              PROGRAM
            </h2>
            <p className="text-[#0A0A0B] opacity-60 font-serif italic mb-8 max-w-sm">
              Three days of cinema, culture, and creative exchange in the heart of the Himalayas.
            </p>
            <button className="text-[10px] font-bold tracking-[0.2em] uppercase border border-black/20 hover:bg-black/5 transition-colors px-6 py-3 text-[#0A0A0B]">
              Download Full Schedule
            </button>
          </motion.div>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-12">
          {SCHEDULE.map((day, idx) => (
            <motion.div 
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border-t border-black/10 pt-8"
            >
              <div className="flex items-baseline gap-4 mb-8">
                <h3 className="font-serif italic text-3xl text-[#D4AF37]">{day.day}</h3>
                <span className="text-[#0A0A0B] opacity-40 text-[11px] uppercase tracking-[0.3em] font-mono">{day.date}</span>
              </div>

              <div className="flex flex-col gap-6">
                {day.events.map((event, eIdx) => (
                  <div key={eIdx} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center group cursor-default">
                    <div className="text-[#0A0A0B] opacity-50 text-[10px] uppercase tracking-[0.2em] font-mono md:col-span-1 group-hover:text-[#D4AF37] group-hover:opacity-100 transition-colors">
                      {event.time}
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="text-lg text-[#0A0A0B] opacity-80 group-hover:opacity-100 font-serif group-hover:italic transition-all">{event.title}</h4>
                    </div>
                    <div className="md:col-span-1 text-right">
                      <span className="inline-block px-3 py-1 border border-black/10 text-[9px] text-[#0A0A0B] opacity-50 uppercase tracking-[0.2em] group-hover:border-black/30 transition-colors whitespace-nowrap">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
