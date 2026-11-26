import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onSpeakWithUs: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSpeakWithUs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#101D35]/95 backdrop-blur-md shadow-lg py-3.5 border-b border-[#C6A15B]/20'
          : 'bg-gradient-to-b from-[#101D35]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C6A15B] to-[#A4833E] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-[#101D35]" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white block">
                PRECISE FINANCIAL SYSTEMS
              </span>
              <span className="text-[10px] tracking-widest text-[#C6A15B] uppercase font-sans font-semibold block">
                Legal & Financial Consultancy • Lagos
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-[#C6A15B] transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C6A15B] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onSpeakWithUs}
              className="inline-flex items-center space-x-2 bg-[#C6A15B] hover:bg-[#b5914f] text-[#101D35] px-5 py-2.5 rounded-md font-semibold text-sm shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Speak With Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#101D35] border-t border-[#C6A15B]/20 shadow-2xl px-6 py-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#C6A15B] py-2 border-b border-gray-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSpeakWithUs();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-[#C6A15B] hover:bg-[#b5914f] text-[#101D35] py-3 rounded-md font-semibold text-sm shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Speak With Us</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
