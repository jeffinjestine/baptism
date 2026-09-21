import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, RefreshCw } from 'lucide-react';

export default function BibleVerse() {
  const [activeVerseIndex, setActiveVerseIndex] = useState(0);

  const verses = [
    {
      quote: "Let the little children come to me, and do not hinder them, for the kingdom of God belongs to such as these.",
      reference: "Mark 10:14"
    },
    {
      quote: "Thanks be to God for His inexpressible gift!",
      reference: "2 Corinthians 9:15"
    },
    {
      quote: "For all of you who were baptized into Christ have clothed yourselves with Christ.",
      reference: "Galatians 3:27"
    },
    {
      quote: "Whoever welcomes one of these little children in my name welcomes me; and whoever welcomes me welcomes the one who sent me.",
      reference: "Mark 9:37"
    }
  ];

  const handleNextVerse = () => {
    setActiveVerseIndex((prev) => (prev + 1) % verses.length);
  };

  return (
    <section id="verse" className="relative py-20 px-4">
      
      {/* Decorative Shimmer Dividers */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="shimmer-line w-full" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        
        {/* Backdrop Glow */}
        <div className="absolute inset-0 bg-gold/5 blur-3xl rounded-full -z-10" />

        <div className="glass-card p-8 md:p-12 rounded-3xl text-center relative border border-gold/30 shadow-2xl">
          
          {/* Quote Icon Top */}
          <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <Quote className="w-6 h-6 text-gold rotate-180" />
          </div>

          {/* Animated Verse Text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVerseIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <blockquote className="font-garamond italic text-xl md:text-3xl text-white/95 leading-relaxed tracking-wide">
                "{verses[activeVerseIndex].quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="w-8 h-[1px] bg-gold/40" />
                <span className="font-cinzel text-sm sm:text-base text-gold font-semibold tracking-widest uppercase">
                  – {verses[activeVerseIndex].reference} –
                </span>
                <div className="w-8 h-[1px] bg-gold/40" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Verse Switcher Button */}
          <button
            onClick={handleNextVerse}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 hover:border-gold/50 bg-white/5 hover:bg-gold/10 text-xs font-poppins text-grayText hover:text-gold transition-all"
            title="Switch Verse"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Read Next Verse</span>
          </button>

        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <div className="shimmer-line w-full" />
      </div>

    </section>
  );
}
