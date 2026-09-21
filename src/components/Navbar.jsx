import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ isPlayingMusic, toggleMusic }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Verse', href: '#verse' },
    { name: 'Parents', href: '#parents' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B0B0B]/80 backdrop-blur-md border-b border-gold/20 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold text-lg font-cinzel bg-gold/5 group-hover:border-gold group-hover:shadow-gold-glow transition-all">
            ✝
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-sm sm:text-base font-bold text-gold-gradient tracking-wider">
              JEFFIN JESTINE
            </span>
            <span className="text-[10px] text-grayText font-garamond italic -mt-1 tracking-widest">
              Holy Baptism
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-poppins tracking-widest uppercase">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-grayText hover:text-gold transition-colors hover:scale-105 transform duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Music Toggle & Mobile Menu */}
        <div className="flex items-center gap-3">
          
          {/* Audio Player Button */}
          <button
            onClick={toggleMusic}
            title={isPlayingMusic ? "Mute Ambient Music" : "Play Ambient Music"}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/10 hover:bg-gold/20 text-gold text-xs transition-all hover:border-gold"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-4 h-4 text-gold animate-pulse" />
                <span className="hidden sm:inline text-[11px]">Music On</span>
                {/* Audio Wave animation bars */}
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-gold h-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-0.5 bg-gold h-2/3 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-0.5 bg-gold h-5/6 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-grayText" />
                <span className="hidden sm:inline text-[11px] text-grayText">Muted</span>
              </>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gold hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0B0B]/95 border-b border-gold/20 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 font-cinzel text-sm text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-grayText hover:text-gold py-1 tracking-widest uppercase transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-center">
            <a
              href="#rsvp"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-2.5 rounded-full gold-button text-xs font-cinzel tracking-wider uppercase flex items-center gap-2 text-black"
            >
              <span>RSVP Attendance</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
