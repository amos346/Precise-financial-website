import React from 'react';
import { ArrowRight, ShieldCheck, Scale, Award } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onSpeakWithTeam: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onSpeakWithTeam }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#101D35]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/WhatsApp_Image_2026-11-25_at_6.57.52_PM__2__853a172e.jpeg"
          alt="Nigerian legal professionals at the courthouse"
          className="w-full h-full object-cover object-center scale-105 animate-subtleZoom opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101D35] via-[#101D35]/90 to-[#101D35]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#101D35]/50 to-[#101D35]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8 text-center lg:text-left">
            {/* Small Introductory Text */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#C6A15B]/15 border border-[#C6A15B]/40 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
              <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C6A15B] uppercase">
                TRUST. INTEGRITY. PROFESSIONAL EXCELLENCE.
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] tracking-tight">
              Strategic Legal Solutions.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A15B] via-[#E0C17E] to-[#C6A15B]">
                Financial Clarity.
              </span>{' '}
              Lasting Confidence.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              At Precise Financial Systems, we are committed to providing professional legal, financial, and advisory solutions that help individuals and businesses make informed decisions, protect their interests, and achieve sustainable growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#C6A15B] hover:bg-[#b5914f] text-[#101D35] px-8 py-4 rounded-md font-semibold text-base shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onSpeakWithTeam}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-[#C6A15B] px-8 py-3.5 rounded-md font-semibold text-base transition-all cursor-pointer"
              >
                <span>Speak With Our Team</span>
              </button>
            </div>

            {/* Trust Highlights below CTA */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#C6A15B]/20 flex items-center justify-center text-[#C6A15B]">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Corporate Law</h4>
                  <p className="text-xs text-gray-400">Expert Guidance</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#C6A15B]/20 flex items-center justify-center text-[#C6A15B]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Financial Advisory</h4>
                  <p className="text-xs text-gray-400">Strategic Clarity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Badge / Card */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative bg-gradient-to-br from-[#101D35]/95 to-[#0A1222]/95 p-8 rounded-2xl border border-[#C6A15B]/30 backdrop-blur-xl shadow-2xl">
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#C6A15B] rounded-full flex items-center justify-center shadow-lg text-[#101D35] font-bold">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <span className="text-xs tracking-widest text-[#C6A15B] font-semibold uppercase block mb-2">
                Lagos, Nigeria
              </span>
              <h3 className="text-2xl font-serif text-white font-bold mb-4">
                Excellence in Practice
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                Serving corporate institutions, entrepreneurs, and discerning individuals with uncompromised discretion and professional rigor.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                  <span>Corporate & Commercial Law</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                  <span>Financial Consulting & Advisory</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-200">
                  <div className="w-2 h-2 rounded-full bg-[#C6A15B]" />
                  <span>Dispute Resolution Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
