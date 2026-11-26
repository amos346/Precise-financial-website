/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { PracticeAreas } from './components/PracticeAreas';
import { LawGallery } from './components/LawGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ApproachCommitment } from './components/ApproachCommitment';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('practice-areas');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#252B35] font-sans antialiased selection:bg-[#C6A15B] selection:text-[#101D35]">
      {/* Navigation Bar */}
      <Navbar onSpeakWithUs={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreServices={scrollToServices}
          onSpeakWithTeam={scrollToContact}
        />

        {/* 2. About Us Section */}
        <AboutUs />

        {/* 3. Practice Areas and Services */}
        <PracticeAreas onSpeakWithUs={scrollToContact} />

        {/* Dedicated Law Photography Gallery */}
        <LawGallery />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Our Approach and Commitment */}
        <ApproachCommitment />

        {/* 6. Contact Us */}
        <ContactSection />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* WhatsApp Floating Widget */}
      <WhatsAppWidget />
    </div>
  );
}
