import React, { useState } from 'react';
import { Icons } from './AppIcons';
import { Lead, Page, SiteConfig } from '../types';

interface LeadFormProps {
  addLead: (lead: Lead) => void;
  setPage?: (page: Page) => void;
  config?: SiteConfig;
}

const LeadForm: React.FC<LeadFormProps> = ({ addLead, setPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    serviceType: 'Residential',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const SUPABASE_URL = "https://qpmrcphzexlsyiaxiyem.supabase.co";
      const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbXJjcGh6ZXhsc3lpYXhpeWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MzE0MDEsImV4cCI6MjA5NzAwNzQwMX0.UMozbECVUFd0d1lnKIvIi1gUcpBpLXJsu-RkRKrZDvI";

      // Submit to Supabase - wrap in try-catch to avoid blocking user flow on network/CORS issues
      try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": SUPABASE_KEY,
            "Authorization": `Bearer ${SUPABASE_KEY}`,
            "Prefer": "return=minimal"
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            location: formData.location,
            service_type: formData.serviceType,
            message: formData.message
          })
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error("Lead Form Supabase submission failed! Status:", response.status, "Response:", errText);
        }
      } catch (supabaseErr) {
        console.warn("Supabase network error, proceeding with email notification & local lead registration:", supabaseErr);
      }

      // Send email notification via EmailJS
      try {
        await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            service_id: "service_nuq2cr4",
            template_id: "template_vcr3tps",
            user_id: "PFYeNP7qzbgG8YB94",
            template_params: {
              name: formData.name,
              phone: formData.phone,
              location: formData.location,
              service_type: formData.serviceType,
              message: formData.message
            }
          })
        });
      } catch (emailErr) {
        console.error("EmailJS sending failed:", emailErr);
      }

      // Add to local admin dashboard and persist in backend
      const newLead: Lead = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toLocaleDateString(),
        status: 'new'
      };
      addLead(newLead);
      if (setPage) {
        window.location.hash = "#thank-you";
        setPage(Page.THANK_YOU);
      } else {
        setIsSubmitted(true);
      }
    } catch (error: any) {
      console.error("Unexpected error submitting form:", error);
      setErrorMessage(`Error: ${error.message || "Please check your connection."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 p-6 md:p-8 rounded-xl shadow-lg text-center border border-green-200">
        <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
          <Icons.CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Request Received!</h3>
        <p className="text-slate-600">We will call you shortly on <b>{formData.phone}</b> to confirm your appointment.</p>
        <button 
          onClick={() => { setIsSubmitted(false); setFormData({...formData, message: ''}); }}
          className="mt-6 text-green-700 font-semibold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div id="quote" className="bg-white p-5 md:p-8 rounded-xl shadow-2xl border-t-4 border-amber-500 scroll-mt-32">
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Request a Free Site Assessment in Kampala</h3>
      <p className="text-sm md:text-base text-slate-500 mb-6">Fast response in Kampala & surrounding areas for quotes and emergencies.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {errorMessage && (
          <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg flex items-center">
            <Icons.AlertTriangle className="h-4 w-4 mr-2" />
            {errorMessage}
          </div>
        )}

        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1">Your Name</label>
          <input 
            required
            type="text" 
            name="name"
            className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white text-slate-900 text-sm md:text-base"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1">Phone Number (WhatsApp)</label>
          <input 
            required
            type="tel" 
            name="phone"
            className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white text-slate-900 text-sm md:text-base"
            placeholder="077..."
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1">Location</label>
            <select 
              required
              name="location"
              className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white text-slate-900 text-sm md:text-base"
              value={formData.location}
              onChange={handleChange}
            >
              <option value="">Select Area</option>
              <option value="Kampala Central">Kampala Central</option>
              <option value="Nakawa">Nakawa</option>
              <option value="Makindye">Makindye</option>
              <option value="Rubaga">Rubaga</option>
              <option value="Kawempe">Kawempe</option>
              <option value="Kira">Kira</option>
              <option value="Entebbe">Entebbe</option>
              <option value="Wakiso">Wakiso</option>
              <option value="Mukono">Mukono</option>
              <option value="Jinja">Jinja</option>
              <option value="Mbarara">Mbarara</option>
              <option value="Other">Other / Upcountry</option>
            </select>
          </div>
          <div>
            <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1">Service Needed</label>
            <select 
              name="serviceType"
              className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none bg-white text-slate-900 text-sm md:text-base"
              value={formData.serviceType}
              onChange={handleChange}
            >
              <option value="Residential">Residential Wiring</option>
              <option value="Commercial">Commercial/Office</option>
              <option value="Emergency">Emergency Repair</option>
              <option value="Solar">Solar Installation</option>
              <option value="Security">CCTV & Security</option>
              <option value="Yaka">Yaka (UEDCL) Meter Issues</option>
              <option value="Inverter">Inverter/Battery</option>
              <option value="SiteVisit">Book 100% Free Site Visit</option>
            </select>
          </div>
        </div>

        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 text-amber-950 text-xs md:text-sm flex items-start gap-2.5">
          <Icons.ShieldCheck className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <span>
            <strong>100% No-Obligation Assessment:</strong> All engineering site visits in Kampala, Wakiso, Mukono and surrounding areas include a structured written Bill of Quantities (BOQ) with clear options.
          </span>
        </div>

        <div>
          <label className="block text-xs md:text-sm font-medium text-slate-700 mb-1">Describe the Issue / Scope</label>
          <textarea 
            rows={3}
            name="message"
            className="w-full px-4 py-2.5 md:py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 outline-none transition bg-white text-slate-900 text-sm md:text-base"
            placeholder="e.g. No power in the kitchen, full house wiring estimate, solar site sizing..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 md:py-4 rounded-lg shadow-lg transition transform active:scale-95 flex justify-center items-center text-sm md:text-base ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              Send Request / Book Site Visit
              <Icons.ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;