import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    "Festival", "Film Tourism", "Events", "Director Bites", "Darjeeling", "Sponsors", "Contact"
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[#FFFFFF]/90 backdrop-blur-md border-b border-black/10 py-4' : 'bg-transparent py-8 border-b border-black/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="https://zpglxnmha3d0eovf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-08-10%20at%202.18.23%20PM.png" alt="DIFF Logo" className="h-16 w-auto object-contain" />
            <span className="hidden sm:block uppercase tracking-[0.3em] text-[10px] font-semibold text-[#0A0A0B]">Darjeeling International<br/>Film Festival</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-70">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-[#0A0A0B] hover:opacity-100 transition-opacity">
                {link}
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex">
            <button className="px-6 py-2 border border-[#0A0A0B]/30 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-[#0A0A0B] hover:text-[#FFFFFF] transition-all text-[#0A0A0B]">
              GET INVOLVED
            </button>
          </div>

          <button 
            className="lg:hidden text-[#0A0A0B]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-[#FFFFFF] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="w-12 h-12 border-2 border-[#0A0A0B] flex items-center justify-center font-serif text-2xl font-bold italic tracking-tighter text-[#0A0A0B]">
                D
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-[#0A0A0B]" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-xl font-serif italic">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#0A0A0B]/70 hover:text-[#0A0A0B] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            
            <div className="mt-auto pb-8">
              <button className="w-full bg-[#0A0A0B] text-[#FFFFFF] px-6 py-4 border border-[#0A0A0B]/30 rounded-full text-[11px] font-bold uppercase tracking-[0.2em]">
                GET INVOLVED
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
