import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, CheckCircle2, Shield, Award, Users, Lock, Sparkles } from 'lucide-react';

export const AboutUs: React.FC = () => {
  const coreValues = [
    {
      title: 'Integrity',
      description: 'Uncompromising ethical standards and honesty in every client interaction and advisory undertaking.',
      icon: Shield,
    },
    {
      title: 'Professionalism',
      description: 'Highest standards of competence, punctuality, thoroughness, and courteous delivery.',
      icon: Award,
    },
    {
      title: 'Accountability',
      description: 'Taking full responsibility for our counsel, outcomes, and dedication to client interests.',
      icon: CheckCircle2,
    },
    {
      title: 'Confidentiality',
      description: 'Strict adherence to privileged information security and absolute client discretion.',
      icon: Lock,
    },
    {
      title: 'Excellence',
      description: 'Striving beyond conventional standards to deliver superior legal and financial solutions.',
      icon: Sparkles,
    },
    {
      title: 'Client Commitment',
      description: 'Putting our clients objectives at the heart of our strategic planning and execution.',
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#F4F5F7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C6A15B] uppercase block">
            ABOUT PRECISE FINANCIAL SYSTEMS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#101D35]">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2">
            Based in Lagos, Nigeria, Precise Financial Systems is a premier multidisciplinary firm dedicated to delivering dependable legal, financial, and business advisory solutions.
          </p>
        </motion.div>

        {/* Two-Column Intro Layout with User Uploaded Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#101D35] leading-snug">
              Guiding Businesses and Individuals Toward Lasting Success and Legal Security
            </h3>
            <p className="text-gray-600 leading-relaxed">
              In an evolving economic and regulatory landscape, navigating legal and financial complexities requires rigorous insight, clarity, and unwavering commitment. At Precise Financial Systems, we partner with corporate organizations, entrepreneurs, and discerning individuals across Nigeria to protect their interests and optimize their operations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our multidisciplinary approach combines astute legal counsel with robust financial strategy. We emphasize transparency, strategic thinking, and meticulous attention to detail, ensuring our clients can make informed decisions with total confidence.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#C6A15B] hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#101D35] text-[#C6A15B] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-[#101D35] text-lg">Our Mission</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To provide exceptional, dependable, and strategic legal and financial advisory services that safeguard client assets and empower sustainable enterprise growth.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#101D35] hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#C6A15B] text-[#101D35] flex items-center justify-center">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-[#101D35] text-lg">Our Vision</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To be the most trusted and respected professional advisory firm in Nigeria, recognized for uncompromising integrity, excellence, and client success.
                </p>
              </div>
            </div>
          </motion.div>

          {/* User Uploaded Professional Images Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative grid grid-cols-12 gap-4 items-center">
              <div className="col-span-8 rounded-2xl overflow-hidden shadow-2xl bg-white border border-gray-200">
                <img
                  src="/images/WhatsApp_Image_2026-11-25_at_6.57.52_PM_aacaeec9.jpeg"
                  alt="Lady Justice statue and law books in chambers"
                  className="w-full h-[360px] object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="col-span-4 -ml-12 mt-20 z-10 rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white">
                <img
                  src="/images/WhatsApp_Image_2026-11-25_at_6.57.51_PM_0d3a8fff.jpeg"
                  alt="Legal documentation and consultation desk"
                  className="w-full h-[240px] object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="mt-6 bg-[#101D35] text-white p-5 rounded-xl shadow-lg border-l-4 border-[#C6A15B] flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-[#C6A15B]/20 flex items-center justify-center text-[#C6A15B] shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-base">Uncompromising Professional Integrity</h4>
                <p className="text-xs text-gray-300 font-light mt-0.5">Serving clients in Lagos with utmost discretion and precision.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#101D35]">
              Our Core Values
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              The fundamental principles that guide our professional conduct and client relationships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-200/80 hover:border-[#C6A15B]/50 group transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#101D35] text-[#C6A15B] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#C6A15B] group-hover:text-[#101D35] transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#101D35] mb-3 group-hover:text-[#C6A15B] transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
