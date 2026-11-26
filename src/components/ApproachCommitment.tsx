import React from 'react';
import { Search, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ApproachCommitment: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Thorough Discovery & Consultation',
      description: 'We begin by actively listening to understand your objectives, challenges, and specific legal or financial context in detail.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Strategic Analysis & Planning',
      description: 'Our team conducts rigorous legal research and financial assessment to formulate a customized, robust action plan.',
      icon: Compass,
    },
    {
      step: '03',
      title: 'Precise Execution & Support',
      description: 'We implement solutions with meticulous attention to detail, maintaining transparent communication and strict confidentiality throughout.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="approach" className="py-24 bg-[#F4F5F7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C6A15B] uppercase block">
            HOW WE DELIVER RESULTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#101D35]">
            Our Approach and Commitment
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2">
            A structured, client-centric methodology designed to ensure absolute clarity, strategic foresight, and exceptional outcomes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-200 relative group"
              >
                <div className="absolute top-6 right-6 font-serif text-4xl font-bold text-[#101D35]/10 group-hover:text-[#C6A15B]/30 transition-colors">
                  {item.step}
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#101D35] text-[#C6A15B] flex items-center justify-center mb-6 shadow-md">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#101D35] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Commitment Statement Banner */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-gray-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#101D35]">
              Uncompromising Professional Standards in Lagos, Nigeria
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
              We recognize that every client requires bespoke attention. Whether you are navigating complex corporate restructuring, commercial negotiations, or seeking proactive financial guidance, Precise Financial Systems stands ready to deliver uncompromising professional excellence.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="space-y-3 bg-[#101D35] text-white p-6 rounded-xl shadow-lg w-full">
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C6A15B]" />
                <span>Ethical Compliance</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C6A15B]" />
                <span>Absolute Confidentiality</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C6A15B]" />
                <span>Prompt Responsiveness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
