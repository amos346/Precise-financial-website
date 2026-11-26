import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = 'https://wa.me/2348033543777?text=Hello%20Precise%20Financial%20Systems,%20I%20would%20like%20to%20make%20an%20enquiry%20about%20your%20professional%20services.%20Please%20provide%20more%20information.';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center bg-white text-[#101D35] px-4 py-2 rounded-xl shadow-xl border border-gray-200 text-xs font-semibold animate-bounce relative">
          <span>Chat With Us</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="ml-2 text-gray-400 hover:text-gray-600 text-sm font-bold"
            aria-label="Close tooltip"
          >
            ×
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-transform transform hover:scale-110 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
        <MessageCircle className="w-8 h-8 relative z-10 fill-current" />
      </a>
    </div>
  );
};
