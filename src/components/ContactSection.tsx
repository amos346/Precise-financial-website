import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: 'Corporate and Commercial Law',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate backend submission process
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        serviceRequired: 'Corporate and Commercial Law',
        message: '',
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#C6A15B] uppercase block">
            GET IN TOUCH WITH OUR TEAM
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#101D35]">
            Let's Discuss How We Can Help
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2">
            Whether you require professional legal guidance, financial advisory support, or business consultancy, our team is ready to understand your needs and discuss practical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Map Link */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#101D35] text-white p-8 sm:p-10 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C6A15B]/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Office Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Lagos Office, Nigeria</h4>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed font-light">
                      Professional offices located in the heart of Lagos commercial district, Nigeria.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/uQAVHsVsRAJPrqEy9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-[#C6A15B] hover:underline text-xs font-semibold mt-2"
                    >
                      <span>View on Google Maps</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Direct Phone & WhatsApp</h4>
                    <p className="text-gray-300 text-sm mt-1 font-light">
                      0803 354 3777
                    </p>
                    <a
                      href="https://wa.me/2348033543777?text=Hello%20Precise%20Financial%20Systems,%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20professional%20services.%20Please%20provide%20more%20information."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-[#25D366] hover:underline text-xs font-semibold mt-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat directly on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center shrink-0 mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Professional Email</h4>
                    <p className="text-gray-300 text-sm mt-1 font-light">
                      enquiries@precisefinancialsystems.com
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-base">Business Hours</h4>
                    <p className="text-gray-300 text-sm mt-1 font-light">
                      Monday – Friday: 8:00 AM – 5:00 PM (WAT)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F4F5F7] p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm relative">
              <h3 className="font-serif text-2xl font-bold text-[#101D35] mb-2">
                Send Us a Professional Enquiry
              </h3>
              <p className="text-gray-600 text-sm mb-8 font-light">
                Fill out the form below and our team will get in touch with you promptly to discuss your requirements.
              </p>

              {submitted ? (
                <div className="bg-white p-8 rounded-xl border border-green-200 text-center space-y-4 shadow-sm animate-fadeIn">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#101D35]">Enquiry Received Successfully</h4>
                  <p className="text-gray-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Precise Financial Systems. A member of our professional team will review your message and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#101D35] text-white rounded-md text-sm font-semibold hover:bg-[#1a2e52] transition-colors cursor-pointer"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-[#101D35] uppercase mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-[#101D35] uppercase mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-[#101D35] uppercase mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0803 000 0000"
                        className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold tracking-wider text-[#101D35] uppercase mb-2">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]"
                      >
                        <option value="Corporate and Commercial Law">Corporate and Commercial Law</option>
                        <option value="Business Advisory Services">Business Advisory Services</option>
                        <option value="Financial Advisory and Consulting">Financial Advisory and Consulting</option>
                        <option value="Contract Drafting and Review">Contract Drafting and Review</option>
                        <option value="Legal Documentation and Compliance">Legal Documentation and Compliance</option>
                        <option value="Dispute Resolution and Litigation Support">Dispute Resolution and Litigation Support</option>
                        <option value="Tax and Regulatory Advisory">Tax and Regulatory Advisory</option>
                        <option value="Business Structuring and Consultancy">Business Structuring and Consultancy</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wider text-[#101D35] uppercase mb-2">
                      Message / Enquiry Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide details regarding your legal or financial advisory requirements..."
                      className="w-full px-4 py-3 rounded-md bg-white border border-gray-300 text-gray-800 text-sm focus:outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#C6A15B] hover:bg-[#b5914f] text-[#101D35] py-4 rounded-md font-semibold text-base shadow-md transition-all cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
