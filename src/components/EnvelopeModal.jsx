import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function EnvelopeModal({ isOpen, onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    // Play open sound/trigger music & callback after unsealing animation completes
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]/95 backdrop-blur-xl px-4 overflow-hidden"
      >
        {/* Soft background light aura */}
        <div className="absolute w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

        <div className="relative w-full max-w-md flex flex-col items-center">
          
          {/* Header Text above Envelope */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 z-10"
          >
            <div className="flex items-center justify-center gap-2 text-gold text-sm uppercase tracking-[0.3em] font-cinzel mb-2">
              <Sparkles className="w-4 h-4 text-gold animate-spin-slow" />
              <span>Personal Invitation</span>
              <Sparkles className="w-4 h-4 text-gold animate-spin-slow" />
            </div>
            <h2 className="font-cinzel text-2xl md:text-3xl text-gold-gradient font-bold tracking-wide">
              The Holy Baptism
            </h2>
            <p className="font-garamond italic text-grayText text-lg mt-1">
              of Jeffin Jestine
            </p>
          </motion.div>

          {/* 3D Interactive Luxury Envelope Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/3] max-w-[380px] perspective-1000 group cursor-pointer"
            onClick={!isOpening ? handleOpenClick : undefined}
          >
            {/* Envelope Shadow Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/20 to-transparent blur-2xl rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Back Envelope Layer */}
            <div className="absolute inset-0 bg-[#151515] border border-gold/30 rounded-xl shadow-2xl overflow-hidden flex flex-col justify-between p-6">
              <div className="w-full flex justify-between items-center opacity-30 text-gold text-xs font-cinzel tracking-widest">
                <span>EST. 2026</span>
                <span>HOLY BAPTISM</span>
              </div>
            </div>

            {/* Sliding Invitation Card (slides up out of envelope) */}
            <motion.div
              initial={{ y: 0, scale: 0.95 }}
              animate={isOpening ? { y: -160, scale: 1, zIndex: 30 } : { y: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="absolute inset-x-3 top-3 bottom-3 bg-gradient-to-b from-[#1C1C1C] to-[#0F0F0F] border border-gold/40 rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-2xl z-10"
            >
              <div className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold text-xl font-cinzel mb-2">
                ✝
              </div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold font-cinzel">You are cordially invited</p>
              <h3 className="font-cinzel text-xl text-gold-gradient font-bold my-1">Jeffin Jestine</h3>
              <p className="text-xs text-grayText font-garamond italic">Joined in Faith & Grace</p>
              <div className="w-12 h-[1px] bg-gold/30 my-2" />
              <p className="text-[11px] text-gray-400 font-poppins">Click to view celebration details</p>
            </motion.div>

            {/* Front Envelope Pocket (Left/Right/Bottom Flaps) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {/* Bottom V-Shape Flap */}
              <svg className="w-full h-full drop-shadow-md" viewBox="0 0 380 285" fill="none">
                <path
                  d="M0 285 L190 145 L380 285 Z"
                  fill="#181818"
                  stroke="rgba(212, 175, 55, 0.3)"
                  strokeWidth="1.5"
                />
                <path
                  d="M0 0 L190 145 L0 285 Z"
                  fill="#141414"
                  stroke="rgba(212, 175, 55, 0.2)"
                  strokeWidth="1"
                />
                <path
                  d="M380 0 L190 145 L380 285 Z"
                  fill="#141414"
                  stroke="rgba(212, 175, 55, 0.2)"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Top Unfolding Envelope Flap */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={isOpening ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-0 inset-x-0 h-1/2 z-20 origin-top pointer-events-none"
            >
              <svg className="w-full h-full drop-shadow-lg" viewBox="0 0 380 142.5" fill="none">
                <path
                  d="M0 0 L190 142.5 L380 0 Z"
                  fill="#1D1D1D"
                  stroke="rgba(212, 175, 55, 0.4)"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.div>

            {/* Interactive Gold Wax Seal */}
            <motion.div
              initial={{ scale: 1 }}
              animate={isOpening ? { scale: 0, opacity: 0 } : { scale: [1, 1.06, 1] }}
              transition={
                isOpening
                  ? { duration: 0.3 }
                  : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              }
              className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center cursor-pointer"
            >
              <div className="relative group/seal">
                {/* Outer Seal Glow Ring */}
                <div className="absolute -inset-2 bg-gold/40 rounded-full blur-md group-hover/seal:bg-gold/70 transition-all duration-300 animate-pulse" />
                
                {/* Wax Stamp Body */}
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#E5C158] via-[#B38728] to-[#78540D] border-2 border-[#FFF3B0] flex items-center justify-center shadow-2xl transform active:scale-95 transition-transform">
                  <div className="w-12 h-12 rounded-full border border-gold-dark/60 flex flex-col items-center justify-center bg-[#8B6514]/40 text-center">
                    <span className="text-white text-lg leading-none select-none drop-shadow">✝</span>
                    <span className="text-[7px] font-cinzel font-bold text-white tracking-widest uppercase mt-0.5">JEFFIN</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Action Button & Prompt below envelope */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <button
              onClick={handleOpenClick}
              disabled={isOpening}
              className="px-8 py-3.5 rounded-full gold-button font-cinzel tracking-wider text-sm font-semibold flex items-center gap-3 mx-auto uppercase group shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
            >
              <span>{isOpening ? 'Opening Invitation...' : 'Open Invitation'}</span>
              <Sparkles className="w-4 h-4 text-black group-hover:rotate-45 transition-transform" />
            </button>
            
            <p className="text-xs text-grayText/70 mt-3 font-poppins tracking-wide">
              Tap the wax seal or button to unseal with music
            </p>
          </motion.div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
