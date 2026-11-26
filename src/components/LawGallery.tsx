import React from 'react';
import { motion } from 'motion/react';
import { Scale, ShieldCheck } from 'lucide-react';

export const LawGallery: React.FC = () => {
  const galleryImages = [
    {
      url: '/images/WhatsApp_Image_2026-11-25_at_6.57.52_PM__2__853a172e.jpeg',
      title: 'Nigerian Legal Professionals at Courthouse',
      category: 'Litigation & Advocacy',
    },
    {
      url: '/images/WhatsApp_Image_2026-11-25_at_6.57.52_PM__1__9422fa8e.jpeg',
      title: 'Judicial Gavel & Scales of Justice',
      category: 'Legal Practice',
    },
    {
      url: '/images/WhatsApp_Image_2026-11-25_at_6.57.52_PM_aacaeec9.jpeg',
      title: 'Lady Justice Statue & Chambers Setup',
      category: 'Legal Consulting',
    },
    {
      url: '/images/WhatsApp_Image_2026-11-25_at_6.57.51_PM__2__ce3837f3.jpeg',
      title: 'Contract Analysis & Scrutiny',
      category: 'Commercial Law',
    },
    {
      url: '/images/WhatsApp_Image_2026-11-25_at_6.57.51_PM__1__c5328d90.jpeg',
      title: 'Corporate Legal Codes & Documentation',
      category: 'Jurisprudence',
    },
    {
      url: '/images/WhatsApp_Image_2026-11-25_at_6.57.51_PM_0d3a8fff.jpeg',
      title: 'Executive Boardroom Legal Consultation',
      category: 'Business Advisory',
    },
  ];

  return (
    <section className="py-24 bg-[#101D35] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#C6A15B]/15 border border-[#C6A15B]/30">
            <Scale className="w-4 h-4 text-[#C6A15B]" />
            <span className="text-xs font-semibold tracking-widest text-[#C6A15B] uppercase">
              VISUAL EXCELLENCE IN PRACTICE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Practice in Imagery
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto rounded-full" />
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed pt-2">
            Authentic visual highlights of our professional legal chambers, courtroom advocacy, and financial consultancy operations.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl bg-[#0A1222] border border-[#C6A15B]/30 h-80"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101D35] via-[#101D35]/40 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 inset-x-0 p-6 z-10 space-y-1 transform group-hover:-translate-y-1 transition-transform">
                <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold block">
                  {img.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  {img.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#101D35]/90 backdrop-blur-md flex items-center justify-center text-[#C6A15B] border border-[#C6A15B]/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
