import React from 'react';
import { Icons } from './AppIcons';
import { motion } from 'motion/react';
import { Page } from '../types';

interface AboutProps {
  setPage?: (page: Page) => void;
}

const About: React.FC<AboutProps> = ({ setPage }) => {
  return (
    <div className="pt-20 text-left bg-slate-50 min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('/dynawatt-team-blueprints.png')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest inline-block mb-4"
          >
            Dynawatt Story & Engineers
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-none text-white"
          >
            About DYNAWATT ENGINEERING
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium"
          >
            Two engineers. One mission. Lighting up Uganda the right way.
          </motion.p>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-16 md:py-24 bg-white animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Story Copy */}
            <div className="lg:col-span-7">
              <span className="text-[10px] font-black tracking-widest text-[#00b67a] bg-[#d9fdd3]/80 px-2.5 py-1 rounded-full uppercase">
                Our Genesis
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 mt-4 mb-8 tracking-tight leading-tight">
                Built on a Gap Nobody Was Filling
              </h2>
              <div className="space-y-6 text-slate-650 text-sm md:text-base leading-relaxed">
                <p>
                  Daniel Alemukori and Joshua Wyclif Kitunguuzi spent years inside <strong className="font-bold text-slate-900">Uganda's</strong> electrical engineering sector—troubleshooting complex site grids, balancing phases in distribution boards, and executing safe wiring drafts across high-growth suburbs in <strong className="font-bold text-slate-900">Kampala</strong>, <strong className="font-bold text-slate-900">Wakiso</strong>, and <strong className="font-bold text-slate-900">Kira</strong>. They were exceptionally good at the technical work, but they kept seeing the same persistent lack of craftsmanship and regulatory audit failures everywhere they went in central <strong className="font-bold text-slate-900">Uganda</strong>.
                </p>
                <p className="font-extrabold text-slate-900 border-l-4 border-amber-500 pl-4 py-1 bg-amber-50/50 rounded-r-xl">
                  Uganda had electricians. What it didn't have was <em className="text-amber-600 not-italic">vision</em>.
                </p>
                <p>
                  Residential homes and commercial buildings in growing locales like <strong className="font-bold text-slate-900">Najjera</strong> and <strong className="font-bold text-slate-900">Entebbe</strong> were being wired simply to pass minimum inspection checks, not to endure. Electrical load designs were functional but uninspiring. And the seamless, high-end aluminum profile lighting that was transforming premium venues globally? It was virtually impossible to find anywhere in the <strong className="font-bold text-slate-900">Kampala</strong> metropolis. Property developers who wanted bespoke lighting displays were either turned down or quoted exorbitant prices that made luxury projects unfeasible.
                </p>
                <p>
                  Daniel and Joshua decided that needed to change.
                </p>
                <p>
                  In 2023, they co-founded <strong className="text-slate-900">Dynawatt Engineering</strong> to set a new benchmark for an <strong className="font-bold text-amber-600">electrical engineering company in Kampala</strong>. They created more than just a typical trade contractor; they built a top-tier team carrying out compliant, international-grade installations alongside beautiful, modern architectural lighting solutions for homes and businesses across the country. Today, from luxury residential builds in <strong className="font-bold text-slate-900">Entebbe</strong> and <strong className="font-bold text-slate-900">Wakiso</strong> to commercial storefront layouts in <strong className="font-bold text-slate-900">Kira</strong>, they ensure every single assignment has the same precision and certified safety that our nation deserves.
                </p>
              </div>

              {/* Inline Lead Capture CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-800">
                    Ready to work with an engineering team built on these values?
                  </p>
                </div>
                <button 
                  onClick={() => setPage?.(Page.CONTACT)}
                  className="inline-flex items-center text-xs font-black uppercase text-amber-600 hover:text-amber-700 hover:underline transition-colors gap-1 group whitespace-nowrap bg-amber-50 hover:bg-amber-100/80 px-4 py-2 border border-amber-200/60 rounded-lg shadow-xs"
                >
                  Get a free quote 
                  <Icons.ArrowRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Visual Team Frame */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-600 rounded-3xl rotate-3 transform scale-98 opacity-90 blur-xs -z-10"></div>
              <div className="bg-slate-900 p-2.5 rounded-3xl border border-slate-200/50 shadow-2xl relative z-10 overflow-hidden">
                <img 
                  src="/dynawatt-team-blueprints.png" 
                  alt="Dynawatt Engineering co-founders working on electrical blueprints" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="rounded-2xl w-full h-[400px] object-cover filter brightness-95"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-slate-950/90 backdrop-blur-md p-4 rounded-xl border border-slate-800 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00b67a] animate-ping"></div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">On-Site Standards</span>
                  </div>
                  <p className="text-xs font-bold text-slate-200 mt-1">Founders Daniel & Joshua conducting structural grid safety validations.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MILESTONE CALLOUT (Display as a highlighted stat block) */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden border-t border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-full font-bold text-xs uppercase tracking-widest">
              💼 Project Milestone & Legacy
            </span>
            <h2 className="text-2xl md:text-3xl font-black mt-4 tracking-tight leading-tight">
              Trusted by industry. Proven on the ground.
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto mt-2 leading-relaxed">
              From our earliest days, Dynawatt Engineering has earned trust where it matters most — on real, demanding projects alongside experienced engineers and reputable organisations.
            </p>
          </div>

          {/* Stats Sub-Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 shadow-sm hover:border-amber-500/40 transition duration-300">
              <span className="text-3xl">🏭</span>
              <h3 className="font-bold text-white text-lg mt-3 mb-1">Migoo Factory</h3>
              <p className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider">Miggade District</p>
              <p className="text-slate-300 text-xs md:text-sm mt-3 leading-relaxed">
                Called in to diagnose and troubleshoot a faulty industrial transformer — a high-stakes assignment reserved for depth-certified technicians.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 shadow-sm hover:border-amber-500/40 transition duration-300">
              <span className="text-3xl">🏦</span>
              <h3 className="font-bold text-white text-lg mt-3 mb-1">Centenary Bank</h3>
              <p className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider">Subcontract Works</p>
              <p className="text-slate-300 text-xs md:text-sm mt-3 leading-relaxed">
                Delivered electrical installation works under EMCO Systems, operating under strict institutional banking protocols and high-audit safety compliance.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/60 shadow-sm hover:border-amber-500/40 transition duration-300">
              <span className="text-3xl">🏨</span>
              <h3 className="font-bold text-white text-lg mt-3 mb-1">Silverline Ssingo</h3>
              <p className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider">Country Hotel, Kiboga</p>
              <p className="text-slate-300 text-xs md:text-sm mt-3 leading-relaxed">
                Partnered on full-scale architectural and facade lighting solutions, working alongside **Eng. Lawrence** and **Eng. Salim** for premium hospitality finish.
              </p>
            </div>
          </div>

          {/* Tribute to Eng. Samuel Mayeku Card */}
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-8 md:p-12 rounded-3xl border border-amber-500/40 shadow-2xl relative text-left">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Icons.Award className="h-8 w-8" />
              </div>
              <div className="flex-grow">
                <span className="text-[10px] tracking-widest font-black text-amber-400 uppercase bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 inline-block mb-3">
                  Professional Legacy Tribute
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-4">
                  Honoring the Supervision of the Late Eng. Samuel Mayeku
                </h3>
                <div className="space-y-4 text-slate-300 text-xs md:text-sm leading-relaxed">
                  <p>
                    We delivered subcontract electrical works for <strong className="text-white font-extrabold">Centenary Bank</strong> under EMCO Systems, operating under the direct supervision of the late <strong className="text-white font-extrabold">Eng. Samuel Mayeku</strong> — a consummate professional whose standards are deeply woven into how Dynawatt operates to this day.
                  </p>
                  <p>
                    Working on a banking facility meant working with people who demanded trust and scrutiny above everything else. Eng. Mayeku modelled exactly that. He showed up on time, every single time. He was completely honest about what a job required, never cutting corners to save face, time, or money. He was always learning, always ready to teach — and he expected the exact same professional vigil from the people around him. In an environment where safety and integrity were non-negotiable, he set the standard quietly and consistently.
                  </p>
                  <p>
                    He also instilled in Daniel and Joshua a strict discipline that stays with every Dynawatt engineer on site today: <strong className="text-amber-400 font-extrabold">safety first, always.</strong> Protective gear was not optional. Life came before the job. In complex electrical engineering, emergency scenarios happen — and the way you prepare for them before they ever occur is what separates a certified professional from someone just doing a task.
                  </p>
                  <p>
                    And it was Eng. Mayeku who opened the door to advanced automation — teaching us the foundational blueprints behind automatic lighting networks and smart automatic changeover systems that now form an essential part of Dynawatt's high-end smart home and backup solar offerings.
                  </p>
                  <p className="pt-2 border-t border-slate-800/80 text-amber-400 font-bold flex items-center gap-2 text-xs md:text-sm italic">
                    <span>“He is no longer with us. But the way Dynawatt Engineering shows up — on time, honest, protected, and technically sharp — is a living tribute to what he gave us.”</span>
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
              Today, Dynawatt has completed <strong className="text-white">100+ precision projects</strong> across Kampala, Wakiso, Mukono, and beyond — and we are just getting started.
            </p>
          </div>

        </div>
      </section>

      {/* MEET THE FOUNDERS SECTION */}
      <section className="pt-16 pb-12 md:pt-20 md:pb-14 bg-white border-b border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black tracking-widest text-[#00b67a] bg-[#d9fdd3]/80 px-2.5 py-1 rounded-full uppercase">Leadership & Crews</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 mt-4">Meet the Co-Founders</h2>
            <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto mt-2">Certified engineering professionals on the ground steering every project safely.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
            
            {/* Founder 1 */}
            <div className="bg-slate-50 rounded-3xl p-6 lg:p-8 border border-slate-200/80 shadow-sm flex flex-col items-center text-center md:text-left md:items-start group hover:shadow-md transition duration-300">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-amber-500/30 group-hover:border-amber-500 mb-6 flex-shrink-0 shadow relative bg-slate-900">
                <img 
                  src="/co-founder-daniel-alemukori-headshot.jpg" 
                  alt="Daniel Alemukori co-founder lead engineer Dynawatt Engineering" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="text-[10px] font-black text-amber-600 bg-amber-150 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">Co-Founder & Lead Technical Engineer</span>
                <h3 className="text-2xl font-black text-slate-950 mt-3 mb-2">Daniel Alemukori</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  With over 8 years of specialized hands-on expertise guiding three-phase commercial power balancing, deep earth rod impedance testing (conforming to BS 7671 standards), advanced circuit troubleshooting, and smart home lighting control retrofits across Kampala, Wakiso, and Entebbe, Daniel leads Dynawatt's technical operations. He oversees every project from site assessment to final testing, ensuring installations meet BS 7671 standards, are fully code-compliant, and exceed client expectations. His background in working across both residential and commercial electrical engineering gives Dynawatt its depth of technical knowledge.
                </p>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="bg-slate-50 rounded-3xl p-6 lg:p-8 border border-slate-200/80 shadow-sm flex flex-col items-center text-center md:text-left md:items-start group hover:shadow-md transition duration-300">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-amber-500/30 group-hover:border-amber-500 mb-6 flex-shrink-0 shadow relative bg-slate-900">
                <img 
                  src="/co-founder-joshua-wyclif-kitunguuzi-headshot.jpg" 
                  alt="Joshua Wyclif Kitunguuzi co-founder operations director Dynawatt Engineering" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <span className="text-[10px] font-black text-amber-600 bg-amber-150 px-2.5 py-1 rounded-full uppercase tracking-wider font-mono">Co-Founder & Operations Director</span>
                <h3 className="text-2xl font-black text-slate-950 mt-3 mb-2">Joshua Wyclif Kitunguuzi</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                  Joshua brings the client-facing vision to Dynawatt. Having worked across Uganda's engineering sector, he understood early that the gap in the market wasn't just technical — it was about trust, communication, and delivering a finish that clients were proud of. Joshua oversees project delivery, client relationships, and Dynawatt's expansion across the greater Kampala region.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR MISSION SECTION (What We Stand For) */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <span className="text-[10px] font-black tracking-widest text-amber-400 bg-white/10 px-3 py-1.5 rounded-full uppercase">Corporate Pillars</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4">What We Stand For</h2>
            <p className="text-slate-400 text-xs md:text-sm max-w-md mx-auto mt-2">Bridging technical complexity with complete client peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
            
            {/* Mission */}
            <div className="bg-slate-950/80 p-8 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-lg hover:border-amber-500/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-amber-500/10 text-amber-400 border border-amber-500/35 rounded-xl flex items-center justify-center mb-6">
                  <Icons.Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  To deliver certified, international-standard electrical and lighting solutions to every Ugandan home and business — work that is safe, beautiful, and built to last.
                </p>
              </div>
              <span className="text-xs font-mono text-amber-500/70 font-bold uppercase">01 / Safe Installations</span>
            </div>

            {/* Vision */}
            <div className="bg-slate-950/80 p-8 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-lg hover:border-amber-500/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-amber-500/10 text-amber-400 border border-amber-500/35 rounded-xl flex items-center justify-center mb-6">
                  <Icons.Eye className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  To become Uganda's most trusted name in electrical engineering and architectural lighting — the company clients recommend without hesitation, and engineers are proud to work for.
                </p>
              </div>
              <span className="text-xs font-mono text-amber-500/70 font-bold uppercase">02 / Quality Legacy</span>
            </div>

            {/* Promise */}
            <div className="bg-slate-950/80 p-8 rounded-3xl border border-slate-800 flex flex-col justify-between shadow-lg hover:border-amber-500/30 transition-all duration-300">
              <div>
                <div className="w-12 h-12 bg-amber-500/10 text-amber-400 border border-amber-500/35 rounded-xl flex items-center justify-center mb-6">
                  <Icons.ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Promise</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Good electrical work goes unnoticed. Bad electrical work can be a disaster. We bridge the gap between technical complexity and complete client peace of mind — designing and installing with the same care we would apply to our own homes.
                </p>
              </div>
              <span className="text-xs font-mono text-amber-500/70 font-bold uppercase">03 / Total Integrity</span>
            </div>

          </div>
        </div>
      </section>

      {/* OUR APPROACH SECTION */}
      <section className="py-20 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-100 px-3 py-1 rounded-full">Our Professional Standards</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-4 mb-4">The Dynawatt Way</h2>
          <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto mb-16 leading-relaxed">We have engineered a process designed around security, technical compliance, and customer delight.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Expertise",
                desc: "Our team is trained to international BS 7671 electrical standards. We don't guess — we calculate, design, and install systems engineered to perform safely for decades.",
                icon: <Icons.Wrench />
              },
              {
                title: "Premium Material Supply",
                desc: "We source authentic, certified cables, panels, profile systems, and solar components directly from trusted suppliers. Every component we install is the real thing — no counterfeits, no shortcuts.",
                icon: <Icons.ShieldCheck />
              },
              {
                title: "Client-First Service",
                desc: "We arrive uniformed and on time. We explain what we're doing and why. We clean up after every job. And we back our work with a 3-month repair guarantee — because a job isn't finished until the client is genuinely satisfied.",
                icon: <Icons.Sparkles />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-left hover:shadow-md transition duration-300">
                <div className="w-14 h-14 bg-amber-100/70 text-amber-600 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "h-7 w-7" })}
                </div>
                <h3 className="text-xl font-bold text-slate-950 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA SECTION */}
      <section className="py-16 md:py-20 bg-amber-500 text-slate-950 border-t border-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-950">
          <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Ready to Work With Us?</h2>
          <p className="text-sm md:text-base mb-8 text-slate-900 font-medium max-w-2xl mx-auto leading-relaxed">
            Whether you're building a new home, upgrading your lighting, installing solar backup, or dealing with an electrical emergency — Dynawatt Engineering is ready.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setPage?.(Page.CONTACT)}
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-8 py-4 rounded-xl transition shadow-lg text-sm uppercase tracking-wide min-h-[44px]"
            >
              Get a Free Quote →
            </button>
            <a 
              href="tel:+256751473830"
              className="bg-white hover:bg-slate-100 text-slate-950 font-extrabold px-8 py-4 rounded-xl transition shadow-lg flex items-center justify-center gap-2 text-sm uppercase tracking-wide min-h-[44px]"
            >
              <Icons.Phone className="h-5 w-5 text-amber-600 font-bold" />
              Call +256 751 473 830
            </a>
          </div>
          <p className="text-[11px] text-slate-900 font-bold uppercase tracking-wider mt-6">
            We serve Kampala, Wakiso, Mukono, Entebbe, and across Uganda.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
