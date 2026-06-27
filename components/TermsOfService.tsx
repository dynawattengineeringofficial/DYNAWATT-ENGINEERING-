import React, { useEffect } from 'react';
import { Icons } from './AppIcons';
import { Page } from '../types';

interface TermsOfServiceProps {
  setPage: (page: Page) => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service - Dynawatt Engineering Uganda";
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen pb-12 md:pb-20 pt-20 text-left">
      <div className="max-w-4xl mx-auto px-4 mt-8 md:mt-12">
        <button
          onClick={() => setPage(Page.HOME)}
          className="inline-flex items-center text-xs font-black uppercase text-amber-600 hover:text-amber-700 hover:underline transition-colors gap-1 mb-6 group"
        >
          <Icons.ArrowRight className="h-3.5 w-3.5 transform rotate-180 group-hover:-translate-x-0.5 transition-transform" />
          Back to Homepage
        </button>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 prose prose-slate max-w-none">
          <span className="bg-amber-100 text-amber-900 border border-amber-200 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-6 shadow-sm">
            <Icons.ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
            Ad Network Compliant Terms of Service
          </span>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 border-b border-slate-100 pb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-8">
            Last Updated: June 11, 2026 • Dynawatt Engineering Uganda
          </p>

          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-6">
            Welcome to the <strong>Dynawatt Engineering</strong> website. By accessing or utilizing our website, quoting systems, or hiring our professional electrical crews, you represent that you have read, understood, and agreed to be bound by these corporate Terms of Service.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-slate-950 mt-8 mb-4">1. Pricing Estimates & Bill of Quantities (BOQs)</h2>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-4">
            Our online cost guides, estimate forms, and budget calculations (including our 2-Bedroom, 3-Bedroom, and commercial estimator tables) are provided strictly as <strong>approximate guidelines</strong> based on standard local material pricing in Uganda.
          </p>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-6">
            A binding project pricing quote requires a formal physical site visitation and load balancing evaluation by a certified Dynawatt engineer. We will issue a written, itemised Bill of Quantities (BOQ). We reserve the right to revise estimates if the structural layout contains undocumented complications, masonry hurdles, or custom earthing grid impedance issues.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-slate-950 mt-8 mb-4">2. Material Sourcing & Compliance Standards</h2>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-4">
            Dynawatt Engineering prides itself on using 100% genuine, certified materials meeting Uganda National Bureau of Standards (UNBS) and British Standard BS 7671 safety criteria. We source authentic wires, conduit channels, distribution switchgear, and safety accessories from premium certified factories.
          </p>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-6">
            We strongly discourage client-sourced electrical parts. If a client insists on providing their own materials (e.g. wire coils, switches, or breakers), Dynawatt accepts <strong>no liability</strong> for premature circuit breakdowns, fire hazards, or Yaka meter failures caused by client-supplied materials. Our 3-Month Service Guarantee is immediately voided for any elements of a circuit containing client-supplied materials.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-slate-950 mt-8 mb-4">3. 3-Month Service Guarantee & Warranties</h2>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-4">
            We support all complete turnkey installations with a rigid <strong>3-Month Service Guarantee</strong> covering our design mechanics and physical execution. If a balanced phase trips, a label deteriorates, or an earthing connection loosens due to workmanship errors within 3 months, we will fix it 100% free of charge.
          </p>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-6">
            This guarantee is instantly voided if any unauthorized technician, domestic handyperson, or third-party contractor chisels, opens, or alters any distribution panel, circuit wireway, or grounding pit installed by Dynawatt. Physical damage, force majeure (massive environmental flooding), grid overvoltages, or lightning discharge exceeding local arrestor limits are excluded from the service guarantee.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-slate-950 mt-8 mb-4">4. Client Responsibility & Site Access</h2>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-6">
            The property owner, developer, or authorized representative must secure all necessary building permits, landlord approvals, and municipal permissions before our installation schedules. Clients must grant our engineers clear, safe physical access to distribution boards, wall conduits, roofs (for solar assemblies), and grounding spaces during agreed work schedules.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-slate-950 mt-8 mb-4">5. Dispute Resolution</h2>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-6">
            These terms are governed by the laws of the Republic of Uganda. Any disputes, misunderstandings, or contractual claims arising from our on-site services will be resolved through amicable direct discussions between the client and Dynawatt management. If a resolution cannot be reached, the dispute will be escalated to formal local mediation in Kampala, Uganda.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center border-t border-slate-100 pt-8 mt-8">
            <button
              onClick={() => setPage(Page.HOME)}
              className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-black px-6 py-3.5 rounded-lg transition text-xs md:text-sm tracking-wide shadow-md w-full sm:w-auto text-center"
            >
              Accept & Return Home
            </button>
            <button
              onClick={() => setPage(Page.CONTACT)}
              className="bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold px-6 py-3.5 rounded-lg transition text-xs md:text-sm tracking-wide shadow-sm border border-slate-700 w-full sm:w-auto text-center"
            >
              Get a Free Quote
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
