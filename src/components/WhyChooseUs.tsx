import React from 'react';
import { motion } from 'motion/react';
import { Users, Award, Lock, Lightbulb, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const sellingPoints = [
    {
      title: 'Client-Focused Approach',
      description: 'We place our clients unique goals and operational context at the center of every legal and financial strategy we formulate.',
      icon: Users,
    },
    {
      title: 'Professional Excellence',
      description: 'Uncompromising standards of rigor, intellectual depth, and quality in every advisory brief we handle.',
      icon: Award,
    },
    {
      title: 'Confidentiality & Trust',
      description: 'Unwavering commitment to client privacy, privileged security, and absolute discretion in all matters.',
      icon: Lock,
    },
    {
      title: 'Strategic Problem Solving',
      description: 'Transforming complex legal and financial hurdles into clear, actionable, and commercially viable pathways.',
      icon: Lightbulb,
    },
    {
      title: 'Transparent Communication',
      description: 'Clear, jargon-free explanations, proactive updates, and honest counsel at every stage of your engagement.',
      icon: MessageSquare,
    },
    {
      title: 'Reliable Advisory Support',
      description: 'Dependable, prompt, and steadfast support that gives you lasting confidence in your business decisions.',
      icon: ShieldCheck,
    },
  ];

  const qualitativeHighlights = [
    'Multidisciplinary legal & financial integration',
    'Deep contextual insight into the Nigerian regulatory climate',
    'Tailored advisory solutions for enterprises and individuals',
    'Unwavering adherence to professional ethics and discretion',
  ];

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden bg-[#101D35]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/WhatsApp_Image_2026-11-25_at_6.57.51_PM__2__ce3837f3.jpeg"
          alt="Legal document analysis and scales of justice"
          className="w-full h-full object-cover object-center opacity-25 scale-105 animate-subtleZoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101D35] via-[#101D35]/90 to-[#101D35]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C6A15B] uppercase block">
            THE PRECISE ADVANTAGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Your Trusted Partner for Professional Solutions
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto rounded-full" />
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed pt-2">
            Discover why leading Nigerian enterprises, entrepreneurs, and individuals choose Precise Financial Systems as their definitive legal and financial consultancy.
          </p>
        </motion.div>

        {/* Selling Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {sellingPoints.map((point, idx) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#101D35]/90 p-8 rounded-2xl border border-[#C6A15B]/20 hover:border-[#C6A15B] hover:bg-[#101D35] transition-all duration-300 group shadow-2xl transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center mb-6 group-hover:bg-[#C6A15B] group-hover:text-[#101D35] transition-all duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#C6A15B] transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Prominent Statement & Qualitative Highlights Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#172744] via-[#101D35] to-[#172744] p-8 sm:p-12 rounded-3xl border border-[#C6A15B]/40 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold block">
                Our Commitment to You
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
                "Your interests deserve precision, professionalism, and a commitment to excellence."
              </h3>
              <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                We combine meticulous legal analysis with sound financial judgment to ensure every engagement yields enduring value and robust protection for our clients.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3 bg-[#101D35]/95 p-6 rounded-2xl border border-[#C6A15B]/25">
              <h4 className="font-serif text-white font-bold text-lg mb-4 text-[#C6A15B]">
                Key Professional Pillars
              </h4>
              {qualitativeHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-sm text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
