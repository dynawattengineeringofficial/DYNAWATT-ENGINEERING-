import React from 'react';
import { Icons } from './AppIcons';
import LeadForm from './LeadForm';
import { Page, SiteConfig } from '../types';

interface ContactProps {
  addLead: (lead: any) => void;
  setPage?: (page: Page) => void;
  config?: SiteConfig;
}

const Contact: React.FC<ContactProps> = ({ addLead, setPage, config }) => {
  return (
    <div className="pt-20 text-left">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <span className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-3">
            Available 24/7 For Emergencies
          </span>
          <h1 className="text-4xl md:text-6xl font-black mb-6">Contact DYNAWATT ENGINEERING</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-semibold">
            Certified electricians serving Kampala, Wakiso, Mukono, and upcountry Uganda. Emergency response available 24/7. Get a free site assessment and written quote.
          </p>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="bg-slate-100 border-y border-slate-200 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-slate-800">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold flex-shrink-0 border border-amber-500/20">
                <Icons.Award className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-slate-900 text-sm md:text-base">✅ 100+ Projects Completed</p>
                <p className="text-slate-500 text-xs">Vetted across Kampala & suburbs</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 md:border-x md:border-slate-300/40 px-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold flex-shrink-0 border border-emerald-500/20">
                <Icons.ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-slate-900 text-sm md:text-base">✅ 3-Month Repair Guarantee</p>
                <p className="text-slate-500 text-xs">Uncompromised physical coverage</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold flex-shrink-0 border border-amber-500/20">
                <Icons.BadgeCheck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-extrabold text-slate-900 text-sm md:text-base">✅ Free Site Assessment</p>
                <p className="text-slate-500 text-xs">No-obligation itemized proposal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black text-slate-950 mb-6 tracking-tight">Get in Touch</h2>
              <p className="text-slate-650 text-sm md:text-base mb-10 leading-relaxed">
                We are fully equipped and licensed to mobilize to your residence or business premises in Kampala, Kira, Mukono, Entebbe, Wakiso, and upcountry districts including Jinja, Mbale, Mbarara, Gulu, Fort Portal, Masaka, and beyond. Call us directly, send an email, or message our engineers on WhatsApp.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-150 shadow-xs hover:border-slate-300 transition duration-300">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.Phone className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Direct Phone</h3>
                    <p className="text-slate-700 font-bold mt-1">
                      <a href="tel:+256751473830" className="hover:text-amber-600 transition-colors">+256 751 473 830</a>
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">Available for emergency breakdowns</p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-150 shadow-xs hover:border-slate-300 transition duration-300">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.Mail className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider">Branded Corporate Email</h3>
                    <p className="text-slate-700 mt-1 font-extrabold text-amber-600">
                      <a href="mailto:info@dynawattengineering.com" className="hover:underline">info@dynawattengineering.com</a>
                    </p>
                    <p className="text-slate-400 text-xs mt-0.5">Standard project inquiries & tender documents</p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-150 shadow-xs hover:border-slate-300 transition duration-300">
                  <div className="w-12 h-12 bg-[#d9fdd3] text-[#00a884] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icons.MessageCircle className="h-6 w-6" />
                  </div>
                  <div className="ml-5">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider text-emerald-800">WhatsApp Instant Chat</h3>
                    <p className="text-slate-700 font-bold mt-1">
                      <a 
                        href="https://wa.me/256751473830?text=Hi%20Dynawatt%20Engineering%2C%20I%20would%20like%20to%20request%20a%20professional%20quote.%0A%0A-%20Service%20Type%3A%20%5BEnter%20service%20e.g.%20House%20Wiring%2C%20Solar%2C%20Lighting%5D%0A-%20Location%20%2F%20Area%3A%20%5BEnter%20location%20e.g.%20Kira%2C%20Nakawa%5D%0A%0APlease%20contact%20me%20back%20on%20WhatsApp." 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hover:text-emerald-600 underline font-extrabold"
                      >
                        +256 751 473 830
                      </a>
                    </p>
                    <p className="text-slate-400 text-xs mt-1">Send appliance loads or photos for a rapid quotation.</p>
                    <a 
                      href="https://wa.me/256751473830?text=Hi%20Dynawatt%20Engineering%2C%20I%20would%20like%20to%20request%20a%20professional%20quote.%0A%0A-%20Service%20Type%3A%20%5BEnter%20service%20e.g.%20House%20Wiring%2C%20Solar%2C%20Lighting%5D%0A-%20Location%20%2F%20Area%3A%20%5BEnter%20location%20e.g.%20Kira%2C%20Nakawa%5D%0A%0APlease%20contact%20me%20back%20on%20WhatsApp."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-black px-4 py-2 rounded-lg mt-3 transition shadow-sm"
                    >
                      <Icons.MessageCircle className="h-4 w-4 mr-1.5" />
                      Message Us on WhatsApp Now
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-150 mb-10 shadow-xs">
                <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
                  <Icons.Clock className="h-5 w-5 text-amber-500" />
                  Business Hours
                </h3>
                <ul className="space-y-3 text-slate-650 text-sm">
                  <li className="flex justify-between pb-2 border-b border-slate-200/60">
                    <span className="font-semibold text-slate-700">Monday - Friday</span> 
                    <span className="font-mono text-slate-900 font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between pb-2 border-b border-slate-200/60">
                    <span className="font-semibold text-slate-700">Saturday</span> 
                    <span className="font-mono text-slate-900 font-medium">9:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between font-bold text-amber-700">
                    <span>Sunday Emergency Calls</span> 
                    <span className="bg-amber-100 px-2.5 py-0.5 rounded-md text-[11px] uppercase tracking-wider font-extrabold">Active 24 Hours</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200">
                <h3 className="text-xl font-bold text-slate-950 mb-6 flex items-center gap-2">
                  <span>✉️</span> Send a Message or Book Site Visit
                </h3>
                <LeadForm addLead={addLead} setPage={setPage} config={config} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-slate-50 py-12 md:py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-black text-slate-950 flex items-center gap-2">
              <Icons.MapPin className="h-6 w-6 text-amber-500" />
              Our Serving Area (Greater Kampala & Nationwide Upcountry Districts)
            </h3>
            <p className="text-slate-550 text-xs md:text-sm mt-1">
              Based in Kampala, with mobile engineering teams and service trucks equipped to dispatch up to a <strong>350km+ radius</strong>. We deliver premium services nationwide, targeting key districts including <strong>Gulu, Soroti, Lira, Mbale, Jinja, Iganga, Kamuli, Hoima, Masindi, Kiboga, Mityana, Mbarara, Fort Portal, Masaka</strong>, and more.
            </p>
          </div>
          
          <div className="w-full h-[400px] md:h-[480px] bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden relative">
            <iframe 
              src="https://maps.google.com/maps?q=Kampala%20Road,%20Kampala,%20Uganda&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 rounded-2xl" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer"
              title="Dynawatt Engineering Kampala Office & Service Map"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
