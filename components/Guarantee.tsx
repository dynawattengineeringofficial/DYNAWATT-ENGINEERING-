import React from 'react';
import { Icons } from './AppIcons';
import { motion } from 'motion/react';
import { Page } from '../types';

interface GuaranteeProps {
  setPage: (page: Page) => void;
}

const Guarantee: React.FC<GuaranteeProps> = ({ setPage }) => {
  return (
    <div className="pt-24 pb-16 md:py-28 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge */}
        <div className="text-center mb-10 md:mb-12">
          <span className="bg-amber-100 text-amber-900 border border-amber-200 text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-4 shadow-sm">
            <Icons.ShieldCheck className="h-4 w-4 text-amber-600" />
            High Quality Engineering Standards
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Our 3-Month Service Guarantee
          </h1>
          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto font-medium">
            At Dynawatt Engineering, honesty and clear boundaries protect our clients and preserve the absolute safety of every installation.
          </p>
        </div>

        {/* Major Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden text-left text-slate-800 leading-relaxed text-sm md:text-base p-6 md:p-10 space-y-8"
        >
          {/* Section 1 */}
          <div>
            <h2 className="font-extrabold text-slate-950 text-lg md:text-xl flex items-center gap-2 mb-3">
              <span className="p-1 px-2 rounded bg-amber-150 bg-amber-100 text-amber-900 font-mono text-xs">01</span>
              The 3-Month Complete Repair Guarantee
            </h2>
            <p className="text-slate-600 pl-8">
              All complete residential and commercial electrical wiring projects completed by Dynawatt Engineering come standard with our 3-month repair protection. If any electrical line, junction box, socket point, or distribution panel we installed develops a functional defect or fault within 3 months, our team returns to diagnose and fix it completely free of charge.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="font-extrabold text-slate-950 text-lg md:text-xl flex items-center gap-2 mb-3">
              <span className="p-1 px-2 rounded bg-amber-100 text-amber-900 font-mono text-xs">02</span>
              What Our Guarantee Covers
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-8 text-xs md:text-sm text-slate-600">
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b67a] font-bold">✓</span>
                <span>Workmanship defects in conduit layout & trunking</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b67a] font-bold">✓</span>
                <span>Loose terminations or faulty distribution joints</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b67a] font-bold">✓</span>
                <span>Incorrect circuit balancing causing unexpected trips</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-[#00b67a] font-bold">✓</span>
                <span>Safety earth system bonding and grounding failures</span>
              </li>
            </ul>
          </div>

          {/* Visual Break - Neat Completed Installation / Testing Board */}
          <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm my-6">
            <img 
              src="/instagram-feed-2.jpg" 
              alt="Professional electrical distribution board and safety testing layout" 
              width="800"
              height="256"
              loading="lazy"
              className="w-full h-48 md:h-64 object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="bg-slate-50 p-3 border-t border-slate-100 text-center">
              <span className="text-xs text-slate-500 font-semibold flex items-center justify-center gap-1.5">
                <Icons.ShieldCheck className="h-4 w-4 text-amber-500" />
                Durable testing & safety calibration on every distribution unit.
              </span>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="font-extrabold text-slate-950 text-lg md:text-xl flex items-center gap-2 mb-3">
              <span className="p-1 px-2 rounded bg-red-100 text-red-900 font-mono text-xs">03</span>
              What Voids Your Guarantee
            </h2>
            <p className="text-slate-650 mb-3 pl-8">
              We engineer with maximum care according to international <strong>BS 7671 electrical standards</strong> and <strong>high-quality code regulations</strong>. This warranty is instantly voided if:
            </p>
            <ul className="space-y-2.5 pl-8 text-xs md:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-extrabold">✕</span>
                <span><strong>Third-Party Interference:</strong> Any unregistered "fundi" or secondary electrician accesses, alters, or touches any wiring we installed.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-extrabold">✕</span>
                <span><strong>Component Counterfeiting:</strong> Sockets or materials requested to be bought independently by the client are found to be substandard counterfeits.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-500 font-extrabold">✕</span>
                <span><strong>Load Overloading:</strong> Connecting high-amp loads (e.g. welding machinery) to standard low-amp household lighting/power breakers.</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="font-extrabold text-slate-950 text-lg md:text-xl flex items-center gap-2 mb-3">
              <span className="p-1 px-2 rounded bg-amber-100 text-amber-900 font-mono text-xs">04</span>
              Payment Terms & Project Lifecycle
            </h2>
            <p className="text-slate-650 mb-3 pl-8">
              We operate structured payment protocols to maintain speed and ensure genuine certified materials are supplied without project delays:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-8 pt-2">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1.5 text-sm uppercase tracking-wide">60/40 Sourced Slabs Rule</h3>
                <p className="text-xs text-slate-700">
                  60% initial deposit required upon approval of project bill of quantities (BOQ) to procure all genuine piping, conduits, and accessories. 40% balance is invoiced on complete circuit finishing and final test-commissioning.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-1.5 text-sm uppercase tracking-wide">Authorized Materials Only</h3>
                <p className="text-xs text-slate-700">
                  To secure compliance with the National Building Code, all supply cables must carry authentic manufacturer stamps. Dynawatt refuses to install unbranded cables to protect you from future short circuits and fire hazards.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call To Action Block at Bottom (Fix 11) */}
        <div className="mt-12 bg-slate-950 text-white rounded-2xl p-6 md:p-10 text-center shadow-xl border border-slate-900 relative overflow-hidden">
          {/* Subtle decorative premium glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -ml-16 -mb-16"></div>

          <h2 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight relative z-10">Ready to Start Your Project?</h2>
          <p className="text-sm md:text-base text-slate-300 font-medium mb-8 max-w-2xl mx-auto leading-relaxed relative z-10">
            Every Dynawatt installation comes backed by our 3-month repair guarantee, BS 7671 certified workmanship, and a written Bill of Quantities before we start. No surprises. No shortcuts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <button 
              onClick={() => setPage(Page.CONTACT)}
              className="bg-amber-500 text-slate-950 font-black px-8 py-3.5 rounded-xl hover:bg-amber-600 transition shadow-lg text-sm cursor-pointer"
            >
              Get a Free Quote →
            </button>
            <a 
              href="tel:+256751473830"
              className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-850 font-black px-8 py-3.5 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm"
            >
              <Icons.Phone className="h-4 w-4 text-amber-500" />
              Call +256 751 473 830
            </a>
          </div>
          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-6 relative z-10">
            *We serve Kampala, Wakiso, Mukono, Entebbe, and across Uganda.*
          </p>
        </div>

        {/* Back To Home Button */}
        <div className="mt-12 text-center">
          <button 
            onClick={() => setPage(Page.HOME)}
            className="inline-flex justify-center items-center px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-sm transition shadow cursor-pointer"
          >
            <Icons.ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Guarantee;
