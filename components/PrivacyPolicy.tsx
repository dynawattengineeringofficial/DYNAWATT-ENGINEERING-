import React, { useEffect } from 'react';
import { Icons } from './AppIcons';
import { Page } from '../types';

interface PrivacyPolicyProps {
  setPage: (page: Page) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ setPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy - Dynawatt Engineering Uganda";
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
            Ad Network Compliant Privacy Policy
          </span>
          
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 border-b border-slate-100 pb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-8">
            Last Updated: June 11, 2026 • Dynawatt Engineering Uganda
          </p>

          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-6">
            At <strong>Dynawatt Engineering</strong>, we respect your privacy and are committed to safeguarding the personal data you share with us. This Privacy Policy outlines how we collect, store, utilize, and protect your information when you visit our website, submit requests through our forms, or utilize our web application.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-slate-950 mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-4">
            We only collect standard information that is voluntarily supplied by you when you request an electrical callback, physical site-plan survey, or cost estimate:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600 mb-6">
            <li><strong>Identification Data</strong>: Full name or corporate entity name.</li>
            <li><strong>Contact Details</strong>: Telephone phone numbers and active WhatsApp accounts.</li>
            <li><strong>Geographic Location</strong>: Project site locations (Kampala, Mukono, Wakiso, or other districts).</li>
            <li><strong>Project Particulars</strong>: Scope of electrical work, building size (bedroom count or industrial layout), and details supplied in custom text fields.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold text-slate-950 mt-8 mb-4">2. Legal Grounds for Processing / How We Use Information</h2>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-4">
            We utilize your submitted contact details strictly to fulfill your requested interactions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600 mb-6">
            <li>To call or message you on WhatsApp within 2 hours to conduct site assessments.</li>
            <li>To compile and issue itemised corporate Bills of Quantities (BOQs) and project schedules.</li>
            <li>To navigate our certified electrical crews and Class-C engineers to your exact physical location for hands-on diagnostics.</li>
            <li>To contact you for emergency electrical fault tracing, scheduling warranties, or ongoing maintenance reminders.</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold text-slate-950 mt-8 mb-4">3. Data Sharing, Retaining, and Protecting Secrets</h2>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-4">
            Your data is stored in safe, isolated databases with limited administrative access. <strong>We do not sell, rent, or lease your contact information to third-party brokers.</strong>
          </p>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-6">
            We only share details with vetted engineering personnel working under a direct nondisclosure contract to complete your building wiring. Information is archived only as long as necessary to administer warranties, project guarantees, and maintenance track records.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-slate-950 mt-8 mb-4">4. Cookie Policy and Ad Network Tracking (Google and Facebook)</h2>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-4">
            We utilize standard browser cookies and analytical components to monitor website execution and speed:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600 mb-6">
            <li><strong>Google Analytics & Ads Conversions</strong>: Measures traffic sources, visits, and ad effectiveness to optimize B2B lead generation.</li>
            <li><strong>Facebook Meta Pixels</strong>: Retargets users looking for professional home-wiring, smart-automation, or solar setups on social networks.</li>
          </ul>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-6">
            You can modify your browser settings to decline cookies or utilize ad blockers at any point without impacting your structural navigation of our pages.
          </p>

          <h2 className="text-lg md:text-xl font-bold text-slate-950 mt-8 mb-4">5. User Choices & Data Deletion Rights</h2>
          <p className="text-slate-650 leading-relaxed text-sm md:text-base mb-6">
            At Dynawatt, we provide transparent control. You have the right to request a digital printout of what details we have stored or request physical erasure of all records under our management. To exercise your rights, please reach out to our corporate office directly:
          </p>

          <div className="bg-slate-50 border border-slate-150 p-6 md:p-8 rounded-xl space-y-3 mb-8">
            <p className="font-extrabold text-sm md:text-base text-slate-900">DYNAWATT ENGINEERING Uganda Contact Desk:</p>
            <ul className="text-xs md:text-sm text-slate-600 space-y-2">
              <li className="flex items-center"><Icons.Phone className="h-4 w-4 mr-2 text-amber-500" /> Phone: <a href="tel:+256751473830" className="hover:underline text-amber-600 font-bold ml-1">+256 751 473 830</a></li>
              <li className="flex items-center"><Icons.MessageCircle className="h-4 w-4 mr-2 text-green-500" /> WhatsApp: <a href="https://wa.me/256751473830" target="_blank" rel="noreferrer" className="hover:underline text-green-600 font-bold ml-1">Message Office Desk</a></li>
              <li className="flex items-center"><Icons.Mail className="h-4 w-4 mr-2 text-amber-500" /> Email: <a href="mailto:dynawattengineering@gmail.com" className="hover:underline text-amber-600 font-bold">dynawattengineering@gmail.com</a></li>
              <li className="flex items-center"><Icons.MapPin className="h-4 w-4 mr-2 text-amber-500" /> Head Office Location: Kampala, Uganda</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center border-t border-slate-100 pt-8">
            <button
              onClick={() => setPage(Page.HOME)}
              className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-black px-6 py-3.5 rounded-lg transition text-xs md:text-sm tracking-wide shadow-md w-full sm:w-auto text-center"
            >
              Return Home
            </button>
            <button
              onClick={() => setPage(Page.CONTACT)}
              className="bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold px-6 py-3.5 rounded-lg transition text-xs md:text-sm tracking-wide shadow-sm border border-slate-700 w-full sm:w-auto text-center"
            >
              Contact Support
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
