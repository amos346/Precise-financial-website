import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  TrendingUp,
  PieChart,
  FileText,
  FileCheck,
  Scale,
  Receipt,
  Building,
  ArrowRight
} from 'lucide-react';
import { ServiceModal } from './ServiceModal';

interface PracticeAreasProps {
  onSpeakWithUs: () => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSpeakWithUs }) => {
  const [selectedService, setSelectedService] = useState<any | null>(null);

  const services = [
    {
      title: 'Corporate and Commercial Law',
      description: 'Legal support for business formation, corporate governance, commercial transactions, contractual matters, and business operations.',
      details: [
        'Company incorporation and restructuring with the Corporate Affairs Commission (CAC)',
        'Board advisory, secretarial services, and corporate governance compliance',
        'Negotiation and drafting of complex commercial agreements and vendor contracts',
        'Joint ventures, partnerships, and strategic corporate alliances'
      ],
      icon: Briefcase,
    },
    {
      title: 'Business Advisory Services',
      description: 'Professional guidance to help businesses improve operations, manage challenges, make informed decisions, and pursue growth opportunities.',
      details: [
        'Operational efficiency analysis and process improvement strategies',
        'Risk assessment and mitigation planning for Nigerian enterprises',
        'Market entry strategy and expansion advisory for local and foreign investors',
        'Strategic decision-making support for corporate management and boards'
      ],
      icon: TrendingUp,
    },
    {
      title: 'Financial Advisory and Consulting',
      description: 'Financial planning, business financial assessment, strategic financial guidance, and advisory support.',
      details: [
        'Comprehensive financial health assessments and capital structure review',
        'Investment appraisal, budgeting, and financial forecasting guidance',
        'Debt restructuring and financial turnaround advisory',
        'Strategic financial planning aligned with long-term business goals'
      ],
      icon: PieChart,
    },
    {
      title: 'Contract Drafting and Review',
      description: 'Preparation, review, and assessment of business agreements, commercial contracts, and other legal documents.',
      details: [
        'Meticulous drafting of tailored commercial agreements and Memorandums of Understanding (MoUs)',
        'Risk identification and liability protection in vendor and client contracts',
        'Employment contracts, service level agreements (SLAs), and licensing terms',
        'Contract negotiation support to safeguard client interests'
      ],
      icon: FileText,
    },
    {
      title: 'Legal Documentation and Compliance',
      description: 'Assistance with legal documentation, regulatory awareness, corporate records, and compliance-related matters.',
      details: [
        'Maintenance of statutory registers and corporate filing management',
        'Regulatory compliance audits and adherence to Nigerian statutory obligations',
        'Preparation of corporate resolutions, minutes, and share transfer documentation',
        'Due diligence documentation for investors and financial institutions'
      ],
      icon: FileCheck,
    },
    {
      title: 'Dispute Resolution and Litigation Support',
      description: 'Professional assistance with dispute management, negotiation, mediation, and appropriate legal proceedings.',
      details: [
        'Pre-litigation dispute analysis and strategic settlement negotiation',
        'Mediation, arbitration, and Alternative Dispute Resolution (ADR) representation',
        'Comprehensive litigation support and case management assistance',
        'Enforcement of commercial rights and debt recovery strategies'
      ],
      icon: Scale,
    },
    {
      title: 'Tax and Regulatory Advisory',
      description: 'Guidance on tax-related obligations, regulatory requirements, and business compliance matters.',
      details: [
        'Advisory on Federal Inland Revenue Service (FIRS) and state tax obligations',
        'Tax efficiency planning for corporate entities and high-net-worth individuals',
        'Compliance guidance for industry-specific regulatory bodies in Nigeria',
        'Tax audit support and regulatory dispute management'
      ],
      icon: Receipt,
    },
    {
      title: 'Business Structuring and Consultancy',
      description: 'Guidance on business structures, strategic planning, corporate organisation, and operational development.',
      details: [
        'Optimizing business legal structures (Enterprise, Partnership, Limited Liability)',
        'Corporate reorganization, spin-offs, and consolidation advisory',
        'Designing internal governance frameworks and operational policies',
        'Consultancy for startups and scaling businesses on governance and scalability'
      ],
      icon: Building,
    },
  ];

  return (
    <section id="practice-areas" className="py-24 bg-white relative overflow-hidden">
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
            COMPREHENSIVE PROFESSIONAL SOLUTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#101D35]">
            Our Areas of Expertise
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto rounded-full" />
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2">
            We deliver rigorous, specialized legal and financial advisory services tailored to the unique demands of the Nigerian business ecosystem.
          </p>
        </motion.div>

        {/* Services Grid with Staggered Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#F4F5F7] p-8 rounded-2xl border border-gray-200/80 hover:border-[#C6A15B] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-[#101D35] text-[#C6A15B] flex items-center justify-center mb-6 group-hover:bg-[#C6A15B] group-hover:text-[#101D35] transition-all duration-300 shadow-md transform group-hover:scale-110">
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#101D35] mb-3 group-hover:text-[#C6A15B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center space-x-2 text-sm font-semibold text-[#101D35] hover:text-[#C6A15B] transition-colors group-hover:translate-x-1 duration-200 cursor-pointer pt-4 border-t border-gray-200 w-full justify-between"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSpeakWithUs={onSpeakWithUs}
      />
    </section>
  );
};
