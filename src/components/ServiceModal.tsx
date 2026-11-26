import React from 'react';
import { X, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  details: string[];
  icon: any;
}

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
  onSpeakWithUs: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSpeakWithUs }) => {
  if (!service) return null;

  const IconComponent = service.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101D35]/85 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-[#C6A15B]/30 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-[#101D35] p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-14 h-14 rounded-xl bg-[#101D35] text-[#C6A15B] flex items-center justify-center shrink-0 shadow-md">
            <IconComponent className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold block mb-1">
              Practice Area & Expertise
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#101D35]">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Scope of Service / Key Offerings */}
        <div className="bg-[#F4F5F7] p-6 rounded-xl mb-8 border border-gray-200">
          <h4 className="font-serif font-bold text-[#101D35] text-lg mb-4 flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
            <span>Key Service Scope & Professional Delivery</span>
          </h4>
          <ul className="space-y-3">
            {service.details.map((detail, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-md border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onSpeakWithUs();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#C6A15B] hover:bg-[#b5914f] text-[#101D35] px-6 py-2.5 rounded-md font-semibold text-sm shadow-md transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Enquire About This Service</span>
          </button>
        </div>
      </div>
    </div>
  );
};
