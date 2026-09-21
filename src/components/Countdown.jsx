import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';

export default function Countdown() {
  // Baptism Date: October 10, 2026 at 11:30 AM IST
  const targetDate = new Date('2026-10-10T11:30:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timerUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">

        {/* Header */}
        <div className="inline-flex items-center gap-2 text-gold text-xs font-cinzel uppercase tracking-[0.3em] mb-3">
          <Clock className="w-4 h-4" />
          <span>Counting Down To The Sacred Moment</span>
        </div>

        <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white mb-8">
          The Celebration Begins In
        </h2>

        {/* Timer Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {timerUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center border border-gold/30 relative overflow-hidden group shadow-lg"
            >
              {/* Gold Top Light */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              <span className="font-cinzel text-4xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs text-grayText uppercase tracking-widest font-poppins mt-2">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="font-garamond italic text-grayText text-base mt-6">
          Saturday, October 10, 2026 • 11:30 AM • St. Mary's Church, Kalayanthani
        </p>

      </div>
    </section>
  );
}
