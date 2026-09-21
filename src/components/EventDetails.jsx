import React from 'react';
import { motion } from 'framer-motion';
import { Church, Utensils, Shirt, Car, Calendar, Sparkles, MapPin } from 'lucide-react';

export default function EventDetails() {
  const timeline = [
    {
      time: "11:00 AM",
      title: "Guest Arrival & Welcome",
      subtitle: "St. Mary's Church Kalayanthani",
      description: "Warm welcome, signing the baptism memory book, and gathering inside St. Mary's Church Kalayanthani.",
      icon: MapPin,
    },
    {
      time: "11:30 AM",
      title: "Holy Baptism Ceremony",
      subtitle: "Sacred Altar of St. Mary's Church Kalayanthani",
      description: "The sacred sacrament of Holy Baptism for baby Jeffin Jestine, accompanied by holy choir hymns.",
      icon: Church,
    },
    {
      time: "12:30 PM",
      title: "Celebratory Feast & Reception",
      subtitle: "St. Mary's Parish Hall, Kalayanthani",
      description: "Join us for celebratory feast, cake cutting, fellowship, and blessings with family and friends at St. Mary's Parish Hall.",
      icon: Utensils,
    },
  ];

  // Google Calendar Link generator
  const createGoogleCalendarLink = () => {
    const title = encodeURIComponent("Holy Baptism of Jeffin Jestine");
    const details = encodeURIComponent("You are cordially invited to celebrate the Holy Baptism of Jeffin Jestine, son of Jestine Joy and Silpa Jestine.");
    const location = encodeURIComponent("St. Mary's Church Kalayanthani, Kalayanthani");
    const start = "20261010T060000Z"; // 11:30 AM IST in UTC
    const end = "20261010T110000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  };

  return (
    <section id="timeline" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-gold text-xs font-cinzel uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sacred Schedule</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-gradient">
            Event Order & Details
          </h2>
          <p className="font-garamond italic text-grayText text-lg max-w-xl mx-auto">
            A guide to our blessed day of celebration.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mb-16">
          
          {/* Central Vertical Gold Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/20 via-gold to-gold/20 -translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, idx) => {
              const IconComp = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-gold/30 relative">
                      
                      <div className="inline-block px-3 py-1 rounded-full bg-gold/10 border border-gold/40 text-gold font-cinzel text-xs font-bold mb-3">
                        {item.time}
                      </div>

                      <h3 className="font-cinzel text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gold/90 text-xs font-cinzel tracking-wider uppercase mb-3">
                        {item.subtitle}
                      </p>

                      <p className="text-grayText text-xs sm:text-sm font-poppins leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </div>

                  {/* Node Circle on Vertical Line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full border-2 border-gold bg-[#0B0B0B] flex items-center justify-center shadow-gold-glow z-10">
                    <IconComp className="w-5 h-5 text-gold" />
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Additional Details Cards: Dress Code & Parking */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Dress Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 flex items-start gap-4 border border-gold/20"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
              <Shirt className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-cinzel text-base font-bold text-white mb-1">Dress Code</h4>
              <p className="text-gold text-xs font-cinzel uppercase tracking-wider mb-2">White • Off White • Light Blue 🩵 • Gold Shades</p>
              <p className="text-xs text-grayText leading-relaxed font-poppins">
                We kindly invite our guests to wear elegant attire in white, off white, light blue 🩵, or gold shades.
              </p>
            </div>
          </motion.div>

          {/* Parking Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-6 flex items-start gap-4 border border-gold/20"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
              <Car className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-cinzel text-base font-bold text-white mb-1">Parking & Valet</h4>
              <p className="text-gold text-xs font-cinzel uppercase tracking-wider mb-2">St. Mary's Church Kalayanthani Parking</p>
              <p className="text-xs text-grayText leading-relaxed font-poppins">
                Ample reserved parking available directly at St. Mary's Church Kalayanthani parking grounds.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Add to Calendar Banner */}
        <div className="mt-12 text-center">
          <a
            href={createGoogleCalendarLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full gold-button font-cinzel text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
          >
            <Calendar className="w-4 h-4 text-black" />
            <span>Add Event to Google Calendar</span>
          </a>
        </div>

      </div>
    </section>
  );
}
