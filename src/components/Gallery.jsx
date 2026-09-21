import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const images = [
    {
      src: `${import.meta.env.BASE_URL}images/baby_portrait.png`,
      title: "Baby Jeffin Jestine",
      caption: "Wrapped in innocence & holy baptism grace"
    },
    {
      src: `${import.meta.env.BASE_URL}images/candle_cross.png`,
      title: "Baptismal Candle & Cross",
      caption: "Symbolizing the light of Christ guiding his path"
    },
    {
      src: `${import.meta.env.BASE_URL}images/st_marys_church_kalayanthani.png`,
      title: "St. Mary's Church Kalayanthani",
      caption: "The sacred venue where the baptismal vow takes place"
    },
    {
      src: `${import.meta.env.BASE_URL}images/baby_portrait.png`,
      title: "Pure Blessing",
      caption: "Surrounded by unconditional parental love & faith"
    },
    {
      src: `${import.meta.env.BASE_URL}images/candle_cross.png`,
      title: "Sacred Sacrament",
      caption: "A timeless memory of holy devotion"
    },
    {
      src: `${import.meta.env.BASE_URL}images/st_marys_church_kalayanthani.png`,
      title: "Night Illumination Glow",
      caption: "St. Mary's Church Kalayanthani glowing in divine grace"
    }
  ];

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-gold text-xs font-cinzel uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Memories & Moments</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-gradient">
            Blessings Gallery
          </h2>
          <p className="font-garamond italic text-grayText text-lg max-w-xl mx-auto">
            Glimpses of sacred preparations and moments of grace.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setActiveImageIndex(idx)}
              className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer aspect-[4/5] border border-gold/20"
            >
              {/* Image with zoom effect */}
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/90 via-[#0B0B0B]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-8 h-8 rounded-full bg-gold/20 backdrop-blur-md border border-gold/40 flex items-center justify-center text-gold mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-grayText font-garamond italic line-clamp-1">
                  {img.caption}
                </p>
              </div>

              {/* Outer Border Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-gold/0 group-hover:border-gold/50 transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-gold/20 text-white hover:text-gold transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-gold/20 text-white hover:text-gold transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-gold/20 text-white hover:text-gold transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Image Box */}
            <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
              <motion.img
                key={activeImageIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].title}
                className="max-h-[70vh] w-auto object-contain rounded-2xl border border-gold/30 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="font-cinzel text-xl font-bold text-gold-gradient">
                  {images[activeImageIndex].title}
                </h3>
                <p className="font-garamond italic text-grayText text-base mt-1">
                  {images[activeImageIndex].caption}
                </p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
