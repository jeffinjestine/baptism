import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, User, Phone, Users, MessageSquare, Sparkles } from 'lucide-react';

export default function Rsvp() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attendance: 'attending',
    guests: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerConfetti = () => {
    // Gold & White Celebration Confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F3E5AB', '#FFFFFF', '#9A7B1C']
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      triggerConfetti();
    }, 1000);
  };

  return (
    <section id="rsvp" className="py-20 px-4 relative">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-gold text-xs font-cinzel uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Response Requested</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-gold-gradient">
            RSVP & Blessings
          </h2>
          <p className="font-garamond italic text-grayText text-lg max-w-lg mx-auto">
            Please kindly confirm your presence by October 1st, 2026.
          </p>
        </div>

        {/* Glassmorphism RSVP Form Box */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-gold/30 shadow-2xl relative">
          
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10 space-y-6"
            >
              <div className="w-20 h-20 rounded-full border-2 border-gold bg-gold/10 flex items-center justify-center mx-auto text-gold shadow-gold-glow">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient">
                Thank You, {formData.name}!
              </h3>

              <p className="font-garamond italic text-xl text-grayText max-w-md mx-auto">
                {formData.attendance === 'attending'
                  ? "We are overjoyed to celebrate baby Jeffin Jestine's baptism with you!"
                  : "Thank you for sending your prayers and blessings for baby Jeffin Jestine."}
              </p>

              <div className="pt-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full gold-button-outline text-xs uppercase tracking-wider font-cinzel"
                >
                  Edit Response
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-cinzel text-gold font-semibold flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Thomas & Family"
                    className="w-full bg-white/5 border border-gold/30 focus:border-gold rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-cinzel text-gold font-semibold flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white/5 border border-gold/30 focus:border-gold rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all"
                  />
                </div>

              </div>

              {/* Attendance Toggle & Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Attendance Option */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-cinzel text-gold font-semibold flex items-center gap-1.5">
                    <span>Will You Attend?</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, attendance: 'attending' }))}
                      className={`py-3 px-3 rounded-xl border text-xs font-cinzel font-semibold uppercase tracking-wider transition-all ${
                        formData.attendance === 'attending'
                          ? 'bg-gold/20 border-gold text-gold shadow-gold-glow'
                          : 'bg-white/5 border-white/10 text-grayText hover:border-gold/30'
                      }`}
                    >
                      Joyfully Accept
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, attendance: 'declining' }))}
                      className={`py-3 px-3 rounded-xl border text-xs font-cinzel font-semibold uppercase tracking-wider transition-all ${
                        formData.attendance === 'declining'
                          ? 'bg-gold/20 border-gold text-gold shadow-gold-glow'
                          : 'bg-white/5 border-white/10 text-grayText hover:border-gold/30'
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider font-cinzel text-gold font-semibold flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Number of Attendees</span>
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-[#151515] border border-gold/30 focus:border-gold rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4 Persons</option>
                    <option value="5+">5+ Persons (Family)</option>
                  </select>
                </div>

              </div>

              {/* Message of Blessing */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-cinzel text-gold font-semibold flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Blessing / Message for Baby Jeffin Jestine</span>
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share a heartfelt prayer or congratulations..."
                  className="w-full bg-white/5 border border-gold/30 focus:border-gold rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-gold transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full gold-button font-cinzel font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
                >
                  {isSubmitting ? (
                    <span>Sending Response...</span>
                  ) : (
                    <>
                      <span>Confirm RSVP</span>
                      <Send className="w-4 h-4 text-black" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
