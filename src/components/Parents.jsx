import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShieldCheck, Users, Sparkles } from 'lucide-react';

export default function Parents() {
  const familyCards = [
    {
      title: "Loving Parents",
      icon: Heart,
      members: [
        { role: "Father", name: "Jestine J Thannickal" },
        { role: "Mother", name: "Silpa Shaji" },
      ],
      description: "Blessed with the gift of parenthood and guiding Jeffin in faith & love."
    },
    {
      title: "Blessed Godparents",
      icon: ShieldCheck,
      members: [
        { role: "Godfather", name: "Shaji George" },
        { role: "Godmother", name: "Simi Shaji" },
      ],
      description: "Promising to mentor, spiritual lead, and walk alongside Jeffin on his journey."
    },
    {
      title: "Grandparents & Family",
      icon: Users,
      members: [
        { role: "Paternal Grandparents", name: "T K Joy & Lisamma Joy" },
        { role: "Maternal Grandparents", name: "Shaji George & Simi Shaji" },
      ],
      description: "Surrounding baby Jeffin with prayers, ancestral blessing, and warmth."
    }
  ];

  return (
    <section id="parents" className="py-20 px-4 relative">

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-gold text-xs font-cinzel uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Family & Guardians</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-gradient">
            Guided by Grace & Love
          </h2>
          <p className="font-garamond italic text-grayText text-lg max-w-xl mx-auto">
            Meet the family standing beside Jeffin Jestine on his holy baptismal day.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {familyCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Glowing Top Corner Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/25 transition-all" />

                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-2xl border border-gold/30 bg-gold/10 flex items-center justify-center mb-6 group-hover:border-gold group-hover:shadow-gold-glow transition-all">
                    <IconComponent className="w-7 h-7 text-gold" />
                  </div>

                  <h3 className="font-cinzel text-xl font-bold text-white mb-6 tracking-wide">
                    {card.title}
                  </h3>

                  {/* Members List */}
                  <div className="space-y-4 mb-6">
                    {card.members.map((member) => (
                      <div key={member.role} className="border-l-2 border-gold/40 pl-4 py-1">
                        <span className="text-[11px] uppercase tracking-wider font-cinzel text-gold font-semibold block">
                          {member.role}
                        </span>
                        <span className="font-poppins text-base text-white font-medium">
                          {member.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-xs text-grayText font-poppins leading-relaxed pt-4 border-t border-white/10">
                  {card.description}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
