import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, Sparkles } from 'lucide-react';

export default function Location() {
  const googleMapsUrl = "https://maps.app.goo.gl/5RXRbeBpRNMLD9qv8";

  return (
    <section id="location" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-gold text-xs font-cinzel uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Venue</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-gradient">
            Church & Map Location
          </h2>
          <p className="font-garamond italic text-grayText text-lg max-w-xl mx-auto">
            Find your way to celebrate with us at St. Mary's Church Kalayanthani.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 glass-card rounded-3xl p-8 border border-gold/30 flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-48 rounded-2xl overflow-hidden border border-gold/30 mb-6 relative group shadow-lg">
                <img
                  src={`${import.meta.env.BASE_URL}images/st_marys_church_kalayanthani.png`}
                  alt="St. Mary's Church Kalayanthani"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[11px] font-cinzel text-gold bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30">
                  St. Mary's Church Kalayanthani
                </span>
              </div>

              <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                St. Mary's Church
              </h3>
              <p className="text-gold text-xs font-cinzel uppercase tracking-widest mb-6">
                Kalayanthani
              </p>

              <div className="space-y-4 text-xs sm:text-sm text-grayText font-poppins mb-8">
                <div className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>St. Mary's Church, Kalayanthani, Kerala</span>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>Landmark: Kalayanthani Town</span>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full gold-button font-cinzel text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
              >
                <Navigation className="w-4 h-4 text-black" />
                <span>Get Directions via Google Maps</span>
              </a>
            </div>

          </motion.div>

          {/* Right Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-3xl overflow-hidden border border-gold/30 min-h-[360px] relative group"
          >
            <iframe
              title="Baptism Location Map"
              src="https://maps.google.com/maps?q=St.%20Mary's%20Church%20Kalayanthani&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0 filter grayscale invert contrast-125 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-gold/40 text-[11px] text-gold font-cinzel">
              📍 Kalayanthani, Kerala
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
