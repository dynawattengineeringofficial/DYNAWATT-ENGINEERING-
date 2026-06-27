import React, { useEffect } from 'react';
import { Icons } from './AppIcons';
import { Page } from '../types';

interface ServicesDetailProps {
  setPage: (page: Page) => void;
}

const ServicesDetail: React.FC<ServicesDetailProps> = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailedServices = [
    {
      title: "Electrical Installation & Structured Cabling",
      description: "We handle professional primary grid layouts, single & three-phase wiring, cable trunkings, and distribution panel balance installations for residential & commercial structures according to BS 7671.",
      icon: <Icons.Zap className="h-6 w-6 text-amber-500" />,
      image: "/complete-house-wiring-biira-wakiso.jpg",
      page: Page.SEO_ELEC_INSTALL,
      badge: "In High Demand",
      features: [
        "Primary house conduits & trunking layouts",
        "Single & three-phase power balancing",
        "Neat distribution board installation & circuit labelling",
        "Earthing systems copper bonding & lightning protection",
        "Office structured data network wiring & sockets",
        "National Building Code inspection compliance"
      ]
    },
    {
      title: "Solar Energy & Battery Backup Systems",
      description: "Harvest clean tropical sunshine to eliminate monthly expensive Yaka bills and escape UEDCL load shedding. We install Tier-1 monocrystalline panels with smart automatic changeover backups.",
      icon: <Icons.Sun className="h-6 w-6 text-amber-500" />,
      image: "/solar_install_villa.jpg",
      page: Page.SEO_SOLAR,
      badge: "Premium Backup",
      features: [
        "Hybrid & off-grid solar planning design",
        "Certified Tier-1 Monocrystalline solar panels",
        "High-performance LiFePO4 Lithium batteries (10+ year lifespan)",
        "Premium smart changeover inverters (Growatt/Deye/Victron)",
        "Household load assessment calculations",
        "Linear output power generation warranties"
      ]
    },
    {
      title: "Repairs & Emergency Fault Isolation",
      description: "Surgical fault detection of leakage lines, Yaka meter token rejection resolution, phase drop rectification, and comprehensive electrical safety compliance audits.",
      icon: <Icons.Wrench className="h-6 w-6 text-amber-500" />,
      image: "/electrical-repairs-maintenance-kampala.jpg",
      page: Page.SEO_MAINTENANCE,
      badge: "24/7 Response",
      features: [
        "Ground loop and leakage loop fault finding",
        "Insulation resistance test analysis",
        "Yaka meter token rejection troubleshooting",
        "Overloaded tripped circuit rebalancing",
        "Burnt conduit line rewiring & socket repairs",
        "Safety validation compliance reports"
      ]
    },
    {
      title: "Architectural Lighting & LED Profiles",
      description: "Breathe luxury ambiance into ceilings, kitchens, and stairs. We design custom plasterboard linear extrusion slots, recessed drop ceiling coves, and customized dimming zones.",
      icon: <Icons.Lightbulb className="h-6 w-6 text-amber-500" />,
      image: "/architectural-lighting-kampala.jpg",
      page: Page.SEO_PROFILE_LIGHTING,
      badge: "Luxury Design",
      features: [
        "Modern plasterboard seamless LED slots",
        "Spotless high-CRI aluminum profile strips",
        "Recessed drop ceiling warm cove lights",
        "Automatic motion-activated stair step LEDs",
        "Luxury kitchen under-cabinet profile runs",
        "Zoned smart mood dimmers & remote control"
      ]
    },
    {
      title: "Smart Home & Automation Integration",
      description: "Manage your home with modern convenience. Control security, mood lighting zones, heavy-duty pumps, and automated gates from your touch pads and mobile screen.",
      icon: <Icons.Home className="h-6 w-6 text-amber-500" />,
      image: "/smart_home_switches.png",
      page: Page.SEO_SMART_HOME,
      badge: "Future Ready",
      features: [
        "Centralized wireless home automation networks",
        "Smart lighting scene preset switches",
        "Live household power consumption analytics",
        "Remote gate and borehole water pump automation",
        "Custom home cinema networking layout",
        "Automated timer control & energy guards"
      ]
    },
    {
      title: "Advanced CCTV IP & Security Networks",
      description: "Protect your physical assets and families. We install crystal-clear 4K IP security grids with remote mobile monitoring and durable smart electric fence integration.",
      icon: <Icons.Eye className="h-6 w-6 text-amber-500" />,
      image: "/blog-smart-home.jpg",
      page: Page.SEO_CCTV,
      badge: "Ultimate Shield",
      features: [
        "4K Smart dome & bullet hardware mounting",
        "Mobile app setup for live remote surveillance feeds",
        "AI-powered intrusion & vehicle tracking triggers",
        "Digital automatic smart perimeter electric fence setups",
        "Secure back-up battery supply system integration",
        "Centralized clean high-capacity metadata NVRs"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-12 md:pb-24 text-left">
      {/* Header */}
      <div className="bg-slate-900 text-white pt-24 pb-12 md:pt-32 md:pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-4">
            Professional Engineering Standards
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 tracking-tight leading-tight max-w-4xl mx-auto text-white">
            Electrical & Solar Services in Kampala, Uganda
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From premier plasterboard profiles to heavy industrial earthing balancing and certified lithium solar backups, we design systems that conform strictly to international safety.
          </p>
          
          {/* Above-the-fold social proof badges */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-slate-200">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-amber-400 font-extrabold flex">★★★★★</span>
              <span className="font-bold text-slate-100">50+ Satisfied Clients Across Kampala</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-slate-300 font-medium font-sans">
              <span className="flex items-center gap-1">
                <Icons.ShieldCheck className="h-4 w-4 text-emerald-500" />
                Code Compliant & BS 7671 Certified
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="flex items-center gap-1">
                <Icons.CheckCircle className="h-4 w-4 text-amber-500" />
                100% Workmanship Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb / Back */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
        <button 
          onClick={() => setPage(Page.HOME)}
          className="inline-flex items-center text-slate-500 hover:text-amber-600 font-bold transition text-xs md:text-sm"
        >
          <Icons.ArrowRight className="h-4 w-4 mr-1.5 rotate-180" />
          Back to Home Page
        </button>
      </div>

      {/* Services List Grid */}
      <div className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-12 animate-in fade-in duration-500">
        {detailedServices.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col md:flex-row group hover:shadow-md transition duration-300"
          >
            {/* Image Side */}
            <div className="md:w-5/12 relative min-h-[220px] md:min-h-auto overflow-hidden bg-slate-900 border-b md:border-b-0 md:border-r border-slate-200">
              <img 
                src={service.image} 
                alt={service.title} 
                referrerPolicy="no-referrer"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500"></div>
              
              {/* Badge & Floating Icon */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                  {service.badge}
                </span>
                <div className="bg-white/95 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-slate-200">
                  {service.icon}
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="md:w-7/12 p-6 md:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black tracking-widest text-[#00b67a] bg-[#d9fdd3]/80 px-2.5 py-1 rounded-full uppercase">
                  Dynawatt Standard
                </span>
                <h2 className="text-xl md:text-2xl font-black text-slate-950 mt-3 mb-3 leading-tight">
                  {service.title}
                </h2>
                <p className="text-xs md:text-sm text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <h3 className="font-extrabold text-slate-900 mb-3 flex items-center text-xs md:text-sm uppercase tracking-wider">
                  <Icons.Check className="h-4 w-4 mr-1.5 text-amber-500 font-bold" />
                  What We Deliver:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-[#00b67a] font-bold text-xs mr-2 mt-0.5">✓</span>
                      <span className="text-slate-650 text-xs md:text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button 
                  onClick={() => setPage(service.page)}
                  className="inline-flex justify-center items-center font-black text-amber-600 hover:text-amber-700 transition group text-xs md:text-sm border border-amber-600/20 bg-amber-50 px-4 py-2 rounded-lg"
                >
                  Learn More & Case Examples
                  <Icons.ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 mt-12 md:mt-20">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-14 text-center shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-4 text-white">Need a Certified Technical Sizing or Quote?</h2>
            <p className="text-sm md:text-base text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our engineering crews are active in Kampala, Entebbe, Wakiso, Mukono, and Kira daily. Book your 100% free site assessment and customized material billing quote.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => setPage(Page.CONTACT)}
                className="bg-amber-500 text-slate-950 font-black py-3.5 px-8 rounded-xl hover:bg-amber-600 transition shadow-lg w-full sm:w-auto text-sm"
              >
                Inquire & Book Free Survey
              </button>
              <a 
                href="https://wa.me/256751473830"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 hover:bg-slate-700 text-white font-extrabold py-3.5 px-8 rounded-xl transition shadow-lg w-full sm:w-auto flex items-center justify-center gap-2 text-sm border border-slate-700"
              >
                <Icons.MessageCircle className="h-5 w-5 text-emerald-400" />
                Inquiry via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetail;
