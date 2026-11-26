import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1222] text-white pt-16 pb-12 border-t border-[#C6A15B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          {/* Company Intro */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-[#C6A15B] flex items-center justify-center text-[#101D35]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-serif text-lg font-bold tracking-wider text-white">
                PRECISE FINANCIAL SYSTEMS
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Providing professional legal, financial, and business advisory solutions in Lagos, Nigeria. Committed to trust, integrity, professional excellence, and strategic client success.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold block">
                Lagos Office, Nigeria
              </span>
              <a
                href="https://maps.app.goo.gl/uQAVHsVsRAJPrqEy9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-300 hover:text-[#C6A15B] transition-colors underline block mt-1"
              >
                View Location on Google Maps
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Practice Areas
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#approach" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Corporate & Commercial Law
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Business Advisory Services
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Financial Advisory & Consulting
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Contract Drafting & Review
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="text-gray-400 hover:text-[#C6A15B] transition-colors">
                  Dispute Resolution Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>Lagos Commercial District, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C6A15B] shrink-0" />
                <span>0803 354 3777</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C6A15B] shrink-0" />
                <span>enquiries@precisefinancialsystems.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Precise Financial Systems. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Professional Legal & Financial Consultancy</span>
            <span>Lagos, Nigeria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
