export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0B] text-[#FFFFFF] py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none border-[24px] border-black/5 mix-blend-overlay opacity-50 z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-black/10 pb-16">
          <div className="md:w-1/3">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 border-2 border-[#FFFFFF] flex items-center justify-center font-serif text-2xl font-bold italic tracking-tighter text-[#FFFFFF]">D</div>
              <span className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#FFFFFF]">Darjeeling International<br/>Film Festival</span>
            </div>
            <p className="font-serif italic text-sm opacity-70 mb-8 max-w-xs">
              Made with stories from the hills.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            <div>
              <h4 className="font-sans font-black uppercase tracking-tighter text-[#FFFFFF] mb-6">Explore</h4>
              <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] font-medium opacity-70">
                <li><a href="#festival" className="hover:opacity-100 hover:text-[#D4AF37] transition-colors">Festival</a></li>
                <li><a href="#film-tourism" className="hover:opacity-100 hover:text-[#D4AF37] transition-colors">Film Tourism</a></li>
                <li><a href="#events" className="hover:opacity-100 hover:text-[#D4AF37] transition-colors">Events</a></li>
                <li><a href="#director-bites" className="hover:opacity-100 hover:text-[#D4AF37] transition-colors">Director Bites</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-sans font-black uppercase tracking-tighter text-[#FFFFFF] mb-6">Information</h4>
              <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] font-medium opacity-70">
                <li><a href="#" className="hover:opacity-100 hover:text-[#D4AF37] transition-colors">Competition</a></li>
                <li><a href="#" className="hover:opacity-100 hover:text-[#D4AF37] transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:opacity-100 hover:text-[#D4AF37] transition-colors">Sponsors</a></li>
                <li><a href="#" className="hover:opacity-100 hover:text-[#D4AF37] transition-colors">Press</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="font-sans font-black uppercase tracking-tighter text-[#FFFFFF] mb-6">Connect</h4>
              <ul className="space-y-4 text-[11px] uppercase tracking-[0.2em] font-medium opacity-70 mb-8">
                <li><a href="#" className="hover:opacity-100 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:opacity-100 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:opacity-100 transition-colors">YouTube</a></li>
              </ul>
              <div className="font-serif italic text-sm opacity-70">
                contact@diff.in <br />
                Darjeeling, WB, India
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold opacity-70">
          <div>© DIFF 2026</div>
          <div className="mt-4 md:mt-0 font-mono tracking-widest">Next Festival: OCT 14 — 21, 2026</div>
        </div>
      </div>
    </footer>
  );
};
