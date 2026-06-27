import React, { useState } from 'react';
import { Icons } from './AppIcons';
import { Page } from '../types';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
  linkAction?: () => void;
  linkText?: string;
  extraLinks?: { text: string; action: () => void }[];
}

export interface FAQData {
  question: string;
  answer: string;
  linkAction?: () => void;
  linkText?: string;
  extraLinks?: { text: string; action: () => void }[];
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle, linkAction, linkText, extraLinks }) => {
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-4 md:py-5 flex justify-between items-center text-left focus:outline-none group"
        onClick={toggle}
      >
        <span className={`text-base md:text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-amber-600' : 'text-slate-800 group-hover:text-amber-600'}`}>
          {question}
        </span>
        <div className={`ml-4 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <Icons.ChevronUp className="h-4 w-4 md:h-5 md:w-5 text-amber-500" />
          ) : (
            <Icons.ChevronDown className="h-4 w-4 md:h-5 md:w-5 text-slate-400 group-hover:text-amber-500" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mb-4 md:mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed pr-8 md:pr-12 text-sm md:text-base">
          {answer}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 items-center">
          {linkAction && linkText && (
            <button 
              onClick={linkAction}
              className="text-amber-600 hover:text-amber-700 font-bold text-sm flex items-center group/link transition-colors cursor-pointer inline-flex"
            >
              {linkText} <Icons.ArrowRight className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
            </button>
          )}
          {extraLinks && extraLinks.map((subLink, idx) => (
            <button
              key={idx}
              onClick={subLink.action}
              className="text-slate-800 hover:text-amber-600 font-medium text-sm flex items-center group/link transition-colors cursor-pointer bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg border border-slate-200"
            >
              📋 {subLink.text} <Icons.ArrowRight className="h-3.5 w-3.5 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

interface FAQProps {
  setPage: (page: Page) => void;
}

const FAQ: React.FC<FAQProps> = ({ setPage }) => {
  const [activeTab, setActiveTab] = useState<'general' | 'solar'>('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Open first by default

  const generalFaqs: FAQData[] = [
    {
      question: "Are your electricians registered and licensed to work in Uganda?",
      answer: "Yes. All Dynawatt Engineering technicians operate under certified electrical standards and comply with Uganda's National Building Code and BS 7671 wiring regulations. Our team is uniformed, vetted, and trained to handle both residential and commercial installations safely. We carry full liability coverage on every job. If you'd like to verify our credentials before booking, feel free to call us directly on +256 751 473 830."
    },
    {
      question: "Do you offer a warranty or guarantee on your electrical installations?",
      answer: "Yes. All full house wiring projects come with a 3-month repair guarantee — if anything we installed develops a fault within 3 months, we return and fix it at no extra charge. For solar and backup power installations, we guarantee our workmanship and assist with any manufacturer warranty claims on panels and inverters. Architectural lighting and aluminum profile projects come with a flawless finish guarantee on installation quality. We stand behind every job we do."
    },
    {
      question: "How long does it take to wire a house in Uganda?",
      answer: "For a standard 3-bedroom house, wiring typically takes 3 to 5 working days depending on the size, complexity, and whether the building is new or a renovation. We begin with a free site visit to assess the scope, then provide a clear timeline before work starts. Industrial and commercial projects are scoped individually. Call us on +256 751 473 830 to book your free assessment."
    },
    {
      question: "Do you offer electrical services outside Kampala city?",
      answer: "Yes. We are fully mobile and regularly work across the greater Kampala region including Wakiso, Mukono, Entebbe, Kira, Makindye, Bugolobi, and further afield including Kiboga and Mpigi. If you're outside these areas, call us — we take on specialized projects across Uganda. Travel fees may apply for distant locations. Reach us on +256 751 473 830 or WhatsApp to confirm availability in your area."
    },
    {
      question: "My Yaka (UEDCL) meter is rejecting tokens, what should I do?",
      answer: "If your Yaka (UEDCL) meter rejects tokens, first check for 'Error' codes on the screen. It could be a network issue, a locked meter (tamper mode), or unpaid debts. Try resetting your CIU (Customer Interface Unit). If the problem persists, you may need a certified electrician to check for wiring faults triggering the tamper mode, or contact Umeme (UEDCL) support.",
      linkAction: () => setPage(Page.SEO_YAKA_METER),
      linkText: "Read Yaka Troubleshooting Guide"
    },
    {
      question: "Do you offer emergency electrical services at night?",
      answer: "Yes, Dynawatt Engineering provides 24/7 emergency support for critical issues in Kampala and surrounding areas. If you experience burning smells, sparking sockets, or sudden power loss while neighbors have power, call our emergency line immediately."
    },
    {
      question: "How much does it cost to wire a house in Uganda?",
      answer: "The final cost depends on the layout and size of the house, material specs, and installation complexity. As a general guide for 2026: Wiring a 2-Bedroom House in Uganda typically ranges from UGX 1,800,000 to UGX 3,500,000; wiring a 3-Bedroom House in Uganda ranges from UGX 2,500,000 to UGX 5,000,000; and wiring a Commercial Building in Kampala depends on single-phase vs 3-phase load requirements. We provide free site visits to construct an accurate, transparent bill of quantities for both labor and premium materials.",
      linkAction: () => setPage(Page.SEO_HOUSE_WIRING_COST),
      linkText: "Read House Wiring Cost Guide",
      extraLinks: [
        { text: "2-Bedroom Cost Guide", action: () => setPage(Page.SEO_WIRING_2_BEDROOM) },
        { text: "3-Bedroom Cost Guide", action: () => setPage(Page.SEO_WIRING_3_BEDROOM) },
        { text: "Commercial Block Cost Guide", action: () => setPage(Page.SEO_WIRING_COMMERCIAL) }
      ]
    },
    {
      question: "Why do my light bulbs keep blowing out frequently?",
      answer: "Frequent bulb blowouts are often caused by loose connections in the lamp holder, voltage fluctuations from the main supply, or poor quality wiring. Using cheap, non-standard bulbs can also be a factor. We can inspect your lighting circuit to ensure stable voltage and secure connections.",
      linkAction: () => setPage(Page.SEO_BULB_BLOWOUTS),
      linkText: "Find Out Why Bulbs Keep Blowing"
    }
  ];

  const solarSizingFaqs: FAQData[] = [
    {
      question: "Can you install solar systems to handle load shedding?",
      answer: "Absolutely. We design and install custom solar backup systems. Whether you need a simple inverter for lights and phone charging, or a full hybrid system to run fridges and TVs during blackouts, we calculate the right battery and panel size for your needs.",
      linkAction: () => setPage(Page.SEO_SOLAR_MAINTENANCE),
      linkText: "Read Solar Battery Maintenance Guide"
    },
    {
      question: "How does the Appliance Sizing Tool calculate daily energy needs and system losses?",
      answer: "Our interactive tool processes your appliance usage using a professional engineering estimation model. Unlike basic converters, we factor in clear real-world variables: 25% System Losses scale your calculations up by a multiplier of 1.25 to compensate for cable line resistance, pure sine wave inverter conversion inefficiencies, battery charging losses, and real-world temperature performance shifts on monocrystalline modules. In addition, solar yield assumptions are constrained strictly to a highly realistic 4.8 peak sun hours per day in Uganda, keeping expectations grounded in meteorological reality.",
    },
    {
      question: "Why does the recommended Inverter Capacity need to be larger than my active load wattage?",
      answer: "Appliances with internal motors or heating elements—like refrigerators, chest freezers, AC units, borehole pumps, washing machines, or water dispensers—produce inductive and reactive startup surges. These startup 'inrush' currents can draw 3 to 5 times the running wattage for a brief second. If your inverter capacity only covers running watts, the concurrent startup of multiple motor-driven systems will instantly trigger overload safety shutoffs. Our sizing calculator automatically maintains a continuous safety margin and dynamically maps your appliances to standard hybrid inverter ratings (e.g., 1.5KVA, 3.2kW, 5.5kW, or 11kW) to prevent surge clipping.",
    },
    {
      question: "How is Battery Depth of Discharge (DoD) handled to ensure a 10+ year battery lifespan?",
      answer: "Old lead-acid or gel batteries degrade if discharged past 50% capacity. Dynawatt exclusively implements smart, zero-maintenance Lithium Iron Phosphate (LiFePO4) storage chemistry. In our sizing model, we limit energy draw to a maximum safe 90% Depth of Discharge (DoD), securing an outstanding cell expected lifetime of 10+ years (above 5,000 charge cycles). The lithium backup bank is precisely calculated to store approximately 60% of your total estimated daily consumption for overnight coverage or immediate power outages.",
    },
    {
      question: "Why does the sizing calculator lock specific inverters and batteries into coordinated system tiers?",
      answer: "Proper power engineering requires aligned component capacities. Combining a tiny 1.5kVA inverter with a massive 10kWh battery is highly inefficient because you cannot activate large loads without tripping the tiny inverter. Conversely, running a large 5.5kW inverter on a tiny 1.2kWh battery will trigger safety shutdowns or completely drain the reserve cell within minutes of running a heavy appliance. To avoid these mismatches, our Appliance Sizing Tool automatically pairs elements into balanced tiers: Tier 1 (1.5kVA Inverter with 1.2kWh Storage), Tier 2 (3.2kW Inverter with 2.4kWh to 4.8kWh Storage), Tier 3 (5.5kW Inverter with 4.8kWh to 9.6kWh Storage), and Tier 4 (11kW Inverter with 9.6kWh+ Storage) of high-throughput lithium.",
    }
  ];

  const currentFaqs = activeTab === 'general' ? generalFaqs : solarSizingFaqs;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [...generalFaqs, ...solarSizingFaqs].map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-slate-50 scroll-mt-24 border-t border-slate-200">
      {/* Inject FAQ Schema for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-amber-100 rounded-full mb-4">
            <Icons.HelpCircle className="h-6 w-6 text-amber-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Answers to common questions about electrical safety, installation, and maintenance in Uganda.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => {
                setActiveTab('general');
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                activeTab === 'general'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🛠️ General Services
            </button>
            <button
              onClick={() => {
                setActiveTab('solar');
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${
                activeTab === 'solar'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-600 hover:text-amber-600'
              }`}
            >
              ☀️ Solar & Sizing FAQs
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-5 md:p-8">
          {currentFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
              linkAction={faq.linkAction}
              linkText={faq.linkText}
              extraLinks={faq.extraLinks}
            />
          ))}
        </div>
        
        <div className="mt-8 md:mt-10 text-center">
          <p className="text-slate-600 text-sm md:text-base">
            Have a different question? 
            <a href="#quote" className="text-amber-600 font-bold hover:underline ml-2">Ask us directly</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;