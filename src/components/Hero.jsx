import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      
      {/* Background Soft Gold Radial Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#D4AF37]/15 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Top Sacred Cross Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex flex-col items-center"
        >
          <div className="w-16 h-16 rounded-full border border-gold/40 bg-gold/5 flex items-center justify-center shadow-gold-glow mb-3 relative group">
            <span className="text-gold text-2xl font-cinzel select-none">✝</span>
            <div className="absolute inset-0 rounded-full border border-gold/30 animate-ping opacity-20" />
          </div>
          <div className="flex items-center gap-2 text-gold tracking-[0.3em] font-cinzel text-xs uppercase">
            <span>Holy Baptism</span>
          </div>
        </motion.div>

        {/* Subtitle "With God's Grace" */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-garamond italic text-xl md:text-2xl text-grayText mb-4 tracking-wide"
        >
          "With God's Grace"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs sm:text-sm uppercase tracking-[0.2em] font-poppins text-gray-400 mb-6 max-w-lg"
        >
          You are warmly invited to celebrate the Holy Baptism of
        </motion.p>

        {/* Baby Portrait Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative my-3 group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-gold/40 via-gold to-gold/40 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border-2 border-gold/70 p-1.5 bg-[#121212] shadow-gold-glow overflow-hidden mx-auto">
            <img
              src={`${import.meta.env.BASE_URL}images/baby_portrait.png`}
              alt="Baby Jeffin Jestine"
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Baby Name Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative my-2 px-6 py-2"
        >
          <div className="shimmer-line w-3/4 mx-auto mb-4" />
          <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-gold-gradient drop-shadow-2xl">
            Jeffin Jestine
          </h1>
          <div className="shimmer-line w-3/4 mx-auto mt-4" />
        </motion.div>

        {/* Parents Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-garamond italic text-grayText text-lg md:text-xl my-4"
        >
          Beloved son of <span className="text-white font-normal">Jestine Joy</span> & <span className="text-white font-normal">Silpa Jestine</span>
        </motion.p>

        {/* Quick Date, Time, Location Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl my-8 px-2"
        >
          {/* Date Card */}
          <div className="glass-card glass-card-hover p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <Calendar className="w-5 h-5 text-gold mb-2" />
            <span className="text-[10px] text-grayText uppercase tracking-widest font-cinzel">Date</span>
            <span className="font-cinzel font-semibold text-sm sm:text-base text-white mt-0.5">
              October 10, 2026
            </span>
            <span className="text-xs text-gold/80 font-poppins mt-0.5">Saturday</span>
          </div>

          {/* Time Card */}
          <div className="glass-card glass-card-hover p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <Clock className="w-5 h-5 text-gold mb-2" />
            <span className="text-[10px] text-grayText uppercase tracking-widest font-cinzel">Holy Baptism</span>
            <span className="font-cinzel font-semibold text-sm sm:text-base text-white mt-0.5">
              11:30 AM IST
            </span>
            <span className="text-xs text-gold/80 font-poppins mt-0.5">Welcome at 11:00 AM</span>
          </div>

          {/* Location Card */}
          <div className="glass-card glass-card-hover p-4 rounded-2xl flex flex-col items-center justify-center text-center">
            <MapPin className="w-5 h-5 text-gold mb-2" />
            <span className="text-[10px] text-grayText uppercase tracking-widest font-cinzel">Venue</span>
            <span className="font-cinzel font-semibold text-xs sm:text-sm text-white mt-0.5 line-clamp-1">
              St. Mary's Church
            </span>
            <span className="text-xs text-gold/80 font-poppins mt-0.5">Kalayanthani</span>
          </div>
        </motion.div>

        {/* Hero CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-2"
        >
          <a
            href="#rsvp"
            className="px-8 py-3.5 rounded-full gold-button font-cinzel text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2"
          >
            <span>RSVP Attendance</span>
            <Sparkles className="w-4 h-4 text-black" />
          </a>
        </motion.div>

      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-grayText/60 hover:text-gold cursor-pointer transition-colors"
      >
        <a href="#verse" className="flex flex-col items-center text-[10px] tracking-widest font-cinzel uppercase">
          <span>Scroll Down</span>
          <ChevronDown className="w-4 h-4 mt-1" />
        </a>
      </motion.div>

    </section>
  );
}
