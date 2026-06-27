import React from 'react';
import { Icons } from './AppIcons';
import { Page } from '../types';

interface LocationProps {
  setPage: (page: Page) => void;
}

const Location: React.FC<LocationProps> = ({ setPage }) => {
  return (
    <div className="pt-20 text-left">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Kampala & Connected Districts
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-tight text-white">Electrician in Kampala, Uganda</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            DYNAWATT ENGINEERING is Kampala's premier provider of safe, BS 7671 certified residential and commercial electrical and solar backup installations.
          </p>
        </div>
      </section>

      {/* Why Choose Us in Kampala */}
      <section className="py-16 md:py-24 bg-white animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black tracking-widest text-[#00b67a] bg-[#d9fdd3]/80 px-2.5 py-1 rounded-full uppercase">
                Localized Expertise
              </span>
              <h2 className="text-3xl font-black text-slate-950 mt-3 mb-8 tracking-tight">Why Choose Dynawatt in Kampala?</h2>
              
              <div className="space-y-8">
                {[
                  { 
                    title: "Kampala Grid Challenges Expertise", 
                    desc: "We know Kampala's unique electrical hurdles—old colonial-era conduits, unstable Umeme grids, sudden voltage surges, and persistent load shedding. We configure systems with high-end surge protectors and seamless changeovers to protect your appliances.", 
                    icon: <Icons.AlertTriangle /> 
                  },
                  { 
                    title: "Certified Safety Compliance", 
                    desc: "Our installations conform strictly to national guidelines, British safety standards (BS 7671), and Uganda's National Building Code. Every system we install is designed for full safety certification. We never cut corners or install counterfeit materials.", 
                    icon: <Icons.BadgeCheck /> 
                  },
                  { 
                    title: "Fast Response Suburb Coverage", 
                    desc: "With mobile deployment units situated throughout Nakasero, Ntinda, Kira, and Kololo, we promise prompt emergency fault detections and pre-visit assessments.", 
                    icon: <Icons.Clock /> 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "h-6 w-6 font-bold" })}
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg font-bold text-slate-900 mb-1.5">{item.title}</h3>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Live Google Map Integration */}
            <div className="w-full h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-inner border border-slate-200 flex flex-col justify-between">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2047817.1517032734!2d31.10091215!3d1.3707295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1771a69f6499f945%3A0x87415a14023573cc!2sUganda!5e0!3m2!1sen!2sug!4v1716390000000" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer"
                title="Dynawatt Engineering Nationwide Service Coverage Map Uganda"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-black tracking-widest text-amber-600 bg-amber-100 px-3 py-1 rounded-full uppercase">Regional Coverage</span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-950 mt-3">Locations We Serve</h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto mt-2">Active service trucks operating across all municipal zones in central, eastern, and western suburbs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              "Kampala Central", "Nakasero", "Kololo", "Bugolobi",
              "Muyenga", "Makindye", "Munyonyo", "Ntinda",
              "Bukoto", "Luzira", "Kira", "Najjera",
              "Namugongo", "Entebbe", "Kajjansi", "Mukono",
              "Gulu", "Soroti", "Lira", "Mbale",
              "Jinja", "Iganga", "Kamuli", "Hoima",
              "Masindi", "Kiboga", "Mityana", "Mbarara",
              "Fort Portal", "Masaka"
            ].map((area, i) => (
              <div key={i} className="bg-white p-3 md:p-4 rounded-xl border border-slate-200 flex items-center shadow-xs">
                <Icons.CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-2.5 flex-shrink-0" />
                <span className="text-slate-700 font-bold text-xs md:text-sm">{area}</span>
              </div>
            ))}
          </div>

          {/* Regional Dedicated Pages */}
          <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl md:text-2xl font-black text-center mb-2 text-slate-950">Explore Regional Landing Hubs</h3>
            <p className="text-center text-xs md:text-sm text-slate-500 mb-8 max-w-xl mx-auto">Get neighborhood specific wiring codes, custom ratings, and active project studies near you.</p>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               <button 
                 onClick={() => setPage(Page.LOC_KAMPALA)}
                 className="bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold py-3 px-5 rounded-xl transition text-xs md:text-sm text-left flex justify-between items-center group"
               >
                 <span>Electrician in Kampala</span>
                 <Icons.ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition text-amber-600" />
               </button>
               <button 
                 onClick={() => setPage(Page.LOC_ENTEBBE)}
                 className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold py-3 px-5 rounded-xl transition text-xs md:text-sm text-left flex justify-between items-center group"
               >
                 <span>Electrical Installation Entebbe</span>
                 <Icons.ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition text-slate-500" />
               </button>
               <button 
                 onClick={() => setPage(Page.LOC_WAKISO)}
                 className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold py-3 px-5 rounded-xl transition text-xs md:text-sm text-left flex justify-between items-center group"
               >
                 <span>Electrical Installation Wakiso</span>
                 <Icons.ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition text-slate-500" />
               </button>
               <button 
                 onClick={() => setPage(Page.LOC_KOLOLO)}
                 className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold py-3 px-5 rounded-xl transition text-xs md:text-sm text-left flex justify-between items-center group"
               >
                 <span>Electrician in Kololo</span>
                 <Icons.ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition text-slate-500" />
               </button>
               <button 
                 onClick={() => setPage(Page.LOC_KIRA)}
                 className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold py-3 px-5 rounded-xl transition text-xs md:text-sm text-left flex justify-between items-center group"
               >
                 <span>Solar Installation Kira</span>
                 <Icons.ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition text-slate-500" />
               </button>
               <button 
                 onClick={() => setPage(Page.LOC_NAJJERA)}
                 className="bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold py-3 px-5 rounded-xl transition text-xs md:text-sm text-left flex justify-between items-center group"
               >
                 <span>House Wiring Najjera</span>
                 <Icons.ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition text-slate-500" />
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section at bottom */}
      <section className="bg-amber-500 py-16 md:py-20 border-t border-amber-600 text-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-950">
          <h2 className="text-2xl md:text-3xl font-black mb-3 uppercase tracking-tight">Are You Located in Our Service Suburbs?</h2>
          <p className="text-sm md:text-base text-slate-900 font-medium mb-8 max-w-2xl mx-auto">
            Book our elite certified engineering crew for a 100% free structural site survey, insulation test, or solar load sizing assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setPage(Page.CONTACT)}
              className="bg-slate-900 text-white font-extrabold px-8 py-3.5 rounded-xl hover:bg-slate-800 transition shadow-lg text-sm"
            >
              Request Free Consultation
            </button>
            <a 
              href={`https://wa.me/256751473830?text=${encodeURIComponent("Hello Dynawatt! I live in Kampala and would like to schedule a technician site survey.")}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white/95 hover:bg-white text-slate-950 font-black px-8 py-3.5 rounded-xl transition shadow-lg flex items-center justify-center gap-2 text-sm"
            >
              <Icons.MessageCircle className="h-5 w-5 text-emerald-500" />
              Chat on WhatsApp Now
            </a>
          </div>

          <div className="mt-12">
            <button 
              onClick={() => setPage(Page.HOME)}
              className="inline-flex items-center text-slate-950/80 hover:text-slate-950 font-bold transition text-xs"
            >
              <Icons.ArrowRight className="h-4 w-4 mr-1.5 rotate-180" />
              Return to Homepage
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
