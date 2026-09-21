import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-12 px-4 border-t border-gold/20 bg-[#070707]">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Gold Cross Icon */}
        <div className="w-12 h-12 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center text-gold text-2xl font-cinzel mb-4 shadow-gold-glow">
          ✝
        </div>

        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-gold-gradient mb-2">
          Jeffin Jestine's Holy Baptism
        </h3>

        <p className="font-garamond italic text-grayText text-base sm:text-lg max-w-md mx-auto mb-6">
          "Thank you for being a part of baby Jeffin Jestine's sacred beginning and sharing your warmth and prayers with our family."
        </p>

        {/* Family Signature */}
        <div className="text-xs font-cinzel text-gold tracking-widest uppercase mb-8">
          With Love, Jestine Joy & Silpa Jestine
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full border border-gold/30 bg-gold/10 hover:bg-gold/20 text-gold flex items-center justify-center transition-all hover:scale-110 mb-8"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

        {/* Copyright */}
        <div className="text-[11px] text-grayText/60 font-poppins flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
          <span>© 2026 Holy Baptism Invitation</span>
          <span className="hidden sm:inline">•</span>
          <span>Crafted with Grace & Devotion</span>
        </div>

      </div>
    </footer>
  );
}
