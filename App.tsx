
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import LeadForm from './components/LeadForm';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';
import FAQ from './components/FAQ';
import ServicesDetail from './components/ServicesDetail';
import SafetyChecklist from './components/SafetyChecklist';
import TrustpilotReviews from './components/TrustpilotReviews';
import About from './components/About';
import Guarantee from './components/Guarantee';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Solar from './components/Solar';
import Location from './components/Location';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import PremiumLighting from './components/PremiumLighting';
import { TransformationCard } from './components/TransformationCard';
import SeoPage from './components/SeoPage';
import LazyImage from './components/LazyImage';
import { seoPagesData } from './data/seoServicePages';
import { seoLocationPagesData } from './data/seoLocationPages';
import { seoEducationalPagesData } from './data/seoEducationalPages';
import { Icons } from './components/AppIcons';
import { Lead, Page, SiteConfig } from './types';

function App() {
  const [page, setPage] = useState<Page>(() => {
    try {
      if (window.location.pathname === '/thank-you') {
        return Page.THANK_YOU;
      }
      const params = new URLSearchParams(window.location.search);
      const queryPage = params.get('page');
      if (queryPage && Object.values(Page).includes(queryPage as Page)) {
        return queryPage as Page;
      }
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash && Object.values(Page).includes(hash as Page)) {
        return hash as Page;
      }
    } catch (e) {
      // Ignored
    }
    return Page.HOME;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Sync page state with URL search params, paths, and support back/forward browser navigation
  useEffect(() => {
    const handlePopState = () => {
      try {
        if (window.location.pathname === '/thank-you') {
          setPage(Page.THANK_YOU);
          return;
        }
        const params = new URLSearchParams(window.location.search);
        const queryPage = params.get('page');
        if (queryPage && Object.values(Page).includes(queryPage as Page)) {
          setPage(queryPage as Page);
          return;
        }
        const hash = window.location.hash.replace('#/', '').replace('#', '');
        if (hash && Object.values(Page).includes(hash as Page)) {
          setPage(hash as Page);
          return;
        }
      } catch (e) {
        // Ignored
      }
      setPage(Page.HOME);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update browser URL query parameter / pathname when state changes, and scroll smoothly to top
  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const currentParam = url.searchParams.get('page');
      
      if (page === Page.THANK_YOU) {
        if (window.location.pathname !== '/thank-you') {
          window.history.pushState({ page: Page.THANK_YOU }, '', '/thank-you');
        }
      } else if (page === Page.HOME) {
        let changed = false;
        if (currentParam) {
          url.searchParams.delete('page');
          changed = true;
        }
        if (window.location.pathname !== '/') {
          url.pathname = '/';
          changed = true;
        }
        if (changed) {
          window.history.pushState({}, '', url.toString());
        }
      } else {
        let changed = false;
        if (window.location.pathname !== '/') {
          url.pathname = '/';
          changed = true;
        }
        if (currentParam !== page) {
          url.searchParams.set('page', page);
          changed = true;
        }
        if (changed) {
          window.history.pushState({}, '', url.toString());
        }
      }
    } catch (e) {
      // Ignored
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);
  
  // Site Configuration State (from database)
  const [config, setConfig] = useState<SiteConfig>({
    emergencyMode: false,
    contactPhone: '+256 751 473 830',
    whatsapp: '+256 751 473 830',
    heroHeadline: 'Dynawatt Engineering: Premier Electrical & Lighting Solutions in Uganda',
    formspreeId: 'mkgdnkzb'
  });

  const [leads, setLeads] = useState<Lead[]>([]);

  // Load configuration and leads from persistent database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const configRes = await fetch("/api/config");
        if (configRes.ok) {
          const configData = await configRes.json();
          setConfig(configData);
        }
      } catch (err) {
        console.error("Failed to load config:", err);
      }

      try {
        const leadsRes = await fetch("/api/prospects");
        if (leadsRes.ok) {
          const leadsData = await leadsRes.json();
          setLeads(leadsData);
        }
      } catch (err) {
        console.error("Failed to load leads:", err);
      }
    };
    fetchData();
  }, []);

  const addLead = async (lead: Lead) => {
    setLeads(prev => [lead, ...prev]);
    try {
      await fetch("/api/prospects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead)
      });
    } catch (err) {
      console.error("Failed to persist lead:", err);
    }
  };

  const updateConfig = async (key: keyof SiteConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));
    try {
      await fetch("/api/config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [key]: value })
      });
    } catch (err) {
      console.error("Failed to save config:", err);
    }
  };

  const updateLeadStatus = async (id: string, status: 'new' | 'contacted' | 'completed') => {
    setLeads(prev => prev.map(l => l.id === id ? { ...l, status } : l));
    try {
      await fetch("/api/prospects/update-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status })
      });
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const deleteLead = async (id: string) => {
    setLeads(prev => prev.filter(l => l.id !== id));
    try {
      await fetch(`/api/prospects/${id}`, {
        method: "DELETE"
      });
    } catch (err) {
      console.error("Failed to delete lead:", err);
    }
  };

  const handleAdminLogout = () => {
    setIsAuthenticated(false);
    setPage(Page.HOME);
  };

  const whatsappMessage = encodeURIComponent("Hello, Im interested in working with DYNAWATT ENGINEERING. Is anyone available to chat");

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('quote');
    if (element) {
      const offset = 120; // Offset for fixed navbar + spacing
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const projects = [
    {
      title: "Modern Residential Lighting in Salaama",
      category: "Residential",
      location: "Salaama, Makindye",
      image: "/modern-residential-lighting-salaama-kampala.jpg",
      alt: "Modern residential lighting design and installation in Salaama, Makindye by Dynawatt Engineering",
      tags: ["Residential Wiring", "Ambient Lighting", "Smart Home"]
    },
    {
      title: "Hybrid Solar System Installation",
      category: "Solar",
      location: "Kira Municipality",
      image: "/hybrid-solar-installation-kira-wakiso.jpg",
      alt: "Hybrid solar power system installation in Kira Municipality by Dynawatt Engineering",
      tags: ["Solar Backup", "Inverter Setup", "Battery Storage"]
    },
    {
      title: "Premium Aluminum Profile Lighting",
      category: "Lighting",
      location: "Industrial Area 7th Street, Kampala",
      image: "/premium-profile-lighting-7th-street-kampala.jpg",
      alt: "Premium aluminum profile lighting installation on 7th Street, Industrial Area, Kampala by Dynawatt Engineering",
      tags: ["Profile Lighting", "Architectural Lighting", "Seamless Lines"]
    },
    {
      title: "Complete House Wiring & Fit-Out",
      category: "Residential",
      location: "Biira",
      image: "/complete-house-wiring-biira-wakiso.jpg",
      alt: "Complete residential house wiring and electrical fit-out in Biira, Wakiso by Dynawatt Engineering",
      tags: ["Residential Wiring", "Main Panel", "Yaka Meter"]
    },
    {
      title: "Exterior Architectural Lighting",
      category: "Lighting",
      location: "Kitukutwe, Kira",
      image: "/architectural-lighting-kampala.jpg",
      alt: "Exterior architectural lighting and security illumination in Kitukutwe, Kira by Dynawatt Engineering",
      tags: ["Architectural Lighting", "Security Lights", "Home Exterior"]
    },
    {
      title: "New Build Slab Work & Piping",
      category: "Construction",
      location: "Mukono",
      image: "/house-wiring-slab-piping-mukono.jpg",
      alt: "Electrical slab piping and structural wiring for a new house build in Mukono by Dynawatt Engineering",
      tags: ["New Home Wiring", "Slab Piping", "Electrical Design"]
    }
  ];

  const reviews = [
    {
      name: "Ronald Tenywa",
      location: "Nkumba",
      serviceTag: "Lightning Protection Installation",
      text: "Excellent work installing lightning arrestors at my property. Very professional and safety-conscious team. Highly recommended.",
      initial: "R"
    },
    {
      name: "Centenary Bank Masaka Branch",
      location: "Masaka City",
      serviceTag: "3-Phase Power Balancing",
      text: "Highly reliable electrical maintenance for our banking facility. Their team handled our 3-phase power balancing and backup generator servicing with extreme professionalism.",
      initial: "C"
    },
    {
      name: "Aisha N.",
      location: "Kawuku, Entebbe Road",
      serviceTag: "Complete House Wiring",
      text: "Dynawatt handled the complete wiring for my rentals. They finished on time and the workmanship is very neat.",
      initial: "A"
    },
    {
      name: "Hajji Hassan",
      location: "Kitukutwe, Kira Municipality",
      serviceTag: "Luxury Profile Lighting",
      text: "The profile lighting installed at my home is beautiful. They really know how to bring out the elegance of a house.",
      initial: "H"
    },
    {
      name: "Alex",
      location: "Salaama Road",
      serviceTag: "Residential House Wiring",
      text: "I hired them for house wiring and lighting installation. Very reliable, affordable, and transparent with costs.",
      initial: "A"
    },
    {
      name: "Silverline Ssingo Country Hotel",
      location: "Kiboga",
      serviceTag: "Commercial Hotel Lighting",
      text: "Professional light installation for our hotel. The team was efficient and the lighting looks perfect.",
      initial: "S"
    },
    {
      name: "Sarah K.",
      location: "Ntinda, Kampala",
      serviceTag: "Full House Rewiring & Fault Finding",
      text: "Dynawatt rewired my entire house after we had issues with constantly tripping power. Professional, clean, and very knowledgeable.",
      initial: "S"
    },
    {
      name: "James M.",
      location: "Entebbe",
      serviceTag: "Solar Power Backup",
      text: "The solar installation they did for my farm is working perfectly. I no longer worry about power outages affecting my business.",
      initial: "J"
    },
    {
      name: "Prossy N.",
      location: "Kira",
      serviceTag: "Emergency Water Heater Repair",
      text: "Quick response when I had an emergency with my water heater. The electrician explained everything clearly and fixed it in no time.",
      initial: "P"
    }
  ];

  const serviceAreas = [
    {
      region: "Kampala Central",
      areas: ["Nakasero", "Kololo", "Old Kampala", "Industrial Area"]
    },
    {
      region: "Eastern Kampala & Mukono",
      areas: ["Bugolobi", "Mbuya", "Luzira", "Mutungo", "Seeta", "Mukono Town"]
    },
    {
      region: "Northern Suburbs",
      areas: ["Ntinda", "Bukoto", "Kyanja", "Najjera", "Kira", "Namugongo", "Gayaza"]
    },
    {
      region: "Southern & Entebbe Road",
      areas: ["Muyenga", "Makindye", "Munyonyo", "Kansanga", "Lweza", "Kajjansi", "Entebbe"]
    },
    {
      region: "Western & Central Districts",
      areas: ["Masaka", "Mbarara", "Fort Portal", "Mityana", "Kiboga", "Hoima", "Masindi", "Nansana", "Kyengera", "Bulenga", "Buloba"]
    },
    {
      region: "Eastern & Northern Districts",
      areas: ["Jinja", "Iganga", "Kamuli", "Mbale", "Soroti", "Lira", "Gulu"]
    }
  ];

  if (page === Page.ADMIN) {
    if (!isAuthenticated) {
      return (
        <AdminLogin 
          onLogin={() => setIsAuthenticated(true)} 
          onCancel={() => setPage(Page.HOME)} 
        />
      );
    }

    return (
      <AdminDashboard 
        leads={leads} 
        config={config} 
        updateConfig={updateConfig} 
        updateLeadStatus={updateLeadStatus}
        deleteLead={deleteLead}
        goBack={handleAdminLogout} 
      />
    );
  }

  // Public Website View
  return (
    <div className={`min-h-screen font-sans ${page === Page.THANK_YOU ? 'bg-slate-950 text-slate-100 flex flex-col' : 'bg-white text-slate-900'}`}>
      {/* Emergency Banner */}
      {config.emergencyMode && page !== Page.THANK_YOU && (
        <div className="bg-red-600 text-white px-4 py-2 text-center font-bold flex justify-center items-center animate-pulse">
          <Icons.AlertTriangle className="h-5 w-5 mr-2" />
          <span>24/7 Emergency Services Active: Immediate Response Available! Call Now.</span>
        </div>
      )}

      {page !== Page.THANK_YOU ? (
        <Navbar setPage={setPage} page={page} contactPhone={config.contactPhone} />
      ) : (
        <header className="bg-slate-950 border-b border-slate-800 py-4 px-4 sm:px-6 lg:px-8 z-50 relative">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo only, no navigation text links so they can't get distracted and click away */}
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setPage(Page.HOME)}
            >
              <img 
                src="/dynawatt-engineering-logo.png" 
                alt="Dynawatt Logo" 
                className="h-10 md:h-12 w-auto object-contain transition group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-black text-white leading-none tracking-tight">DYNAWATT</span>
                <span className="text-[7px] md:text-[8px] text-amber-500 tracking-[0.25em] font-extrabold uppercase">ENGINEERING</span>
              </div>
            </div>
            
            <a 
              href={`tel:${config.contactPhone.replace(/[^0-9+]/g, '')}`}
              className="text-xs md:text-sm font-bold bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 px-3 py-1.5 rounded-lg transition"
            >
              Call: {config.contactPhone}
            </a>
          </div>
        </header>
      )}

      {page === Page.HOME ? (
        <>
          {/* Inject Local Business Schema for Search Engines */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Dynawatt Engineering",
                "image": "https://dynawattengineering.com/dynawatt-engineering-logo.png",
                "@id": "https://dynawattengineering.com/#localbusiness",
                "url": "https://dynawattengineering.com",
                "telephone": "+256751473830",
                "priceRange": "UGX",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Salaama Road, Makindye",
                  "addressLocality": "Kampala",
                  "addressCountry": "UG"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "0.3136",
                  "longitude": "32.5811"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                "sameAs": [
                  "https://www.facebook.com/dynawattengineering",
                  "https://www.instagram.com/dynawattengineering?igsh=MWp5Y3R1MmkxNW0xZQ=="
                ]
              })
            }}
          />
          {/* Hero Section */}
          <header id="home" className="relative bg-slate-950 text-white pt-24 pb-16 md:pt-20 md:pb-32 overflow-hidden">
            <div className="absolute inset-0 opacity-100 bg-[url('/premium-profile-lighting-7th-street-kampala.jpg')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-slate-950/30"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center"
            >
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="inline-flex items-center px-4 py-2 rounded-full border border-amber-400 bg-amber-500/20 text-amber-400 text-base md:text-lg font-bold mb-4 shadow-[0_0_15px_rgba(245,158,11,0.3)] backdrop-blur-sm">
                  <Icons.ShieldCheck className="h-5 w-5 md:h-6 md:w-6 mr-2 text-amber-400" />
                  DYNAWATT - ERA Compliant & Insured
                </div>
                
                {/* Social Trust Badges */}
                <div className="flex flex-wrap gap-2.5 items-center mb-6">
                  {/* Trustpilot */}
                  <a 
                    href="https://www.trustpilot.com/review/dynawattengineering.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-100 font-extrabold shadow-md transition-colors group"
                  >
                    <span className="inline-flex items-center justify-center bg-[#00b67a] text-white text-[9px] w-4 h-4 rounded-sm font-black">★</span>
                    <span>Trustpilot <span className="text-[#00b67a] font-black ml-0.5">4.1 / 5</span></span>
                    <span className="text-slate-400 text-[10px] font-medium group-hover:text-amber-400 transition-colors">(6 Reviews)</span>
                    <span className="text-amber-400 font-serif leading-none tracking-tight">⭐⭐⭐⭐</span>
                  </a>
                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/dynawattengineering"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 bg-slate-900/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-100 font-extrabold shadow-md transition-colors group"
                  >
                    <span className="inline-flex items-center justify-center bg-[#1877F2] text-white text-[11px] w-4 h-4 rounded-sm font-black">f</span>
                    <span>Facebook</span>
                    <span className="text-slate-400 text-[10px] font-medium group-hover:text-slate-300 transition-colors">Official Page</span>
                  </a>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Professional Electrical Installation & Architectural Lighting Company in Kampala
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg">
                  Kampala's trusted electrical engineers — from 3-phase industrial wiring to luxury aluminum profile lighting. We bring certified workmanship, premium materials, and a 3-month repair guarantee to every home and business we serve.
                </p>



                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => setPage(Page.CONTACT)} className="inline-flex justify-center items-center px-6 py-4 md:px-8 md:py-4 border border-transparent text-base md:text-lg font-bold rounded-lg text-slate-900 bg-amber-500 hover:bg-amber-600 transition shadow-lg hover:shadow-xl">
                      Get a Free Quote
                    </button>
                    <a 
                      href={`tel:${config.contactPhone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex justify-center items-center px-6 py-4 md:px-8 md:py-4 border border-white text-base md:text-lg font-bold rounded-lg text-white bg-transparent hover:bg-white/10 transition"
                    >
                      <Icons.Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </a>
                  </div>
                  <div className="flex items-center gap-2 mt-2 self-start pl-1 text-[13px] md:text-sm font-semibold text-amber-500 animate-in fade-in duration-500">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <a 
                      href="#quote" 
                      onClick={scrollToQuote}
                      className="underline decoration-amber-500/40 hover:decoration-amber-500 tracking-wide text-amber-400 transition"
                    >
                      Or book a 100% free site visit — we come to you →
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-10 relative z-10 w-full flex flex-col gap-6">
                <LeadForm addLead={addLead} setPage={setPage} />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/50 hidden md:block">
                  <img 
                    src="/architectural-lighting-kampala.jpg" 
                    alt="Architectural exterior lighting installation illuminating modern residential homes in Kampala, Uganda by Dynawatt Engineering" 
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-medium text-sm">Recent Project: Luxury Ceiling Lighting, Kampala</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </header>

          {/* Trust Section */}
          <section className="py-12 bg-slate-50 border-b border-slate-200">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-slate-900">Trusted by homeowners and businesses across Kampala</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "BS 7671 & ERA Compliant", desc: "We wire to local regulatory & international safety standards.", icon: <Icons.ShieldCheck className="h-6 w-6 text-amber-500 flex-shrink-0" /> },
                  { title: "Uniformed & Vetted Team", desc: "Professional, punctual, and respectful of your property.", icon: <Icons.Users className="h-6 w-6 text-amber-500 flex-shrink-0" /> },
                  { title: "Transparent UGX Pricing", desc: "Written quotes before we start. No hidden costs.", icon: <Icons.Wallet className="h-6 w-6 text-amber-500 flex-shrink-0" /> },
                  { title: "3-Month Repair Guarantee", desc: "Full-house wiring backed by our workmanship guarantee.", icon: <Icons.Zap className="h-6 w-6 text-amber-500 flex-shrink-0" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:border-amber-200 transition-colors duration-300">
                    {item.icon}
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Client Logos Strip & Corporate Trust Bar */}
          <section className="py-10 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xs uppercase font-black tracking-widest mb-8 text-slate-500 bg-slate-200/50 inline-block px-4 py-1.5 rounded-full border border-slate-200">
                🛡️ Trusted by businesses across Uganda
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 md:gap-x-16">
                
                {/* Centenary Bank */}
                <div className="flex items-center gap-2.5 select-none group transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 group-hover:border-[#0054a6]/40 group-hover:bg-[#0054a6]/5 transition-all duration-305 shadow-sm group-hover:shadow-md overflow-hidden p-0.5">
                    <svg className="h-8 w-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="44" fill="#0054a6" />
                      <circle cx="50" cy="50" r="38" fill="none" stroke="#ffffff" strokeWidth="2.5" />
                      {/* Left side of the path: Red */}
                      <path d="M 32 74 L 50 74 L 50 56 L 43 56 Z" fill="#e31b23" />
                      {/* Right side of the path: Yellow */}
                      <path d="M 50 74 L 68 74 L 57 56 L 50 56 Z" fill="#fecd08" />
                      {/* Temple roof: Yellow */}
                      <path d="M 39 49 L 50 42 L 61 49 Z" fill="#fecd08" />
                      {/* Temple base: Yellow */}
                      <rect x="43" y="49" width="14" height="8" fill="#fecd08" />
                      {/* Red cross inside temple */}
                      <line x1="50" y1="51" x2="50" y2="56" stroke="#e31b23" strokeWidth="1.8" />
                      <line x1="47.5" y1="53.5" x2="52.5" y2="53.5" stroke="#e31b23" strokeWidth="1.8" />
                      {/* Flanking stylized pillars */}
                      <path d="M 40 49 H 37 V 57 H 40" fill="none" stroke="#fecd08" strokeWidth="1.5" />
                      <path d="M 60 49 H 63 V 57 H 60" fill="none" stroke="#fecd08" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="text-left font-sans">
                    <div className="text-slate-500 font-extrabold text-sm sm:text-base group-hover:text-slate-900 transition-colors leading-none">Centenary Bank</div>
                    <span className="text-[10px] text-slate-400 font-bold font-mono tracking-tight group-hover:text-slate-500 transition-colors">Masaka Branch</span>
                  </div>
                </div>

                {/* Silverline Ssingo Hotel */}
                <div className="flex items-center gap-2.5 select-none group transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-slate-200 group-hover:border-amber-500/40 group-hover:bg-amber-50/50 transition-all duration-305 shadow-sm group-hover:shadow-md">
                    <svg className="h-5 w-5 text-slate-400 group-hover:text-amber-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7z" fill="currentColor" className="fill-none group-hover:fill-amber-50 transition-colors duration-305" />
                      <path d="M3 20h18" strokeWidth="2.5" />
                    </svg>
                  </div>
                  <div className="text-left font-serif">
                    <div className="text-slate-500 font-black text-sm sm:text-base group-hover:text-slate-900 transition-colors leading-none tracking-tight">Silverline Ssingo</div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-sans group-hover:text-slate-500 transition-colors">Country Hotel, Kiboga</span>
                  </div>
                </div>

                {/* Daphine Medical Centre */}
                <div className="flex items-center gap-2.5 select-none group transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border border-slate-200 group-hover:border-rose-500/40 group-hover:bg-rose-50/50 transition-all duration-305 shadow-sm group-hover:shadow-md overflow-hidden p-0.5">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Red Heart */}
                      <path 
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                        fill="#ef4444" 
                      />
                      {/* Pulse Wave in White */}
                      <path 
                        d="M4.5 11.5h3.5l1.5-3.5 1.8 7.5 1.8-10 1.4 6h4.5" 
                        stroke="#ffffff" 
                        strokeWidth="1.6" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                  <div className="text-left font-sans">
                    <div className="text-slate-500 font-extrabold text-sm sm:text-base group-hover:text-slate-900 transition-colors leading-none">Daphine Medical</div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono group-hover:text-slate-500 transition-colors">Medical Centre</span>
                  </div>
                </div>

                {/* Napsy Interiors */}
                <div className="flex items-center gap-2.5 select-none group transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center border border-slate-200 group-hover:border-indigo-500/40 group-hover:bg-indigo-50/50 transition-all duration-305 shadow-sm group-hover:shadow-md">
                    <svg className="h-5 w-5 text-slate-400 group-hover:text-indigo-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" strokeWidth="1.5" />
                      <path d="M3 11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6Z" strokeWidth="1.5" />
                      <path d="M6 19v2M18 19v2" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="text-left font-sans">
                    <div className="text-slate-500 font-black text-sm sm:text-base group-hover:text-slate-900 transition-colors leading-none tracking-tight">Napsy Interiors</div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest font-mono group-hover:text-slate-500 transition-colors">Premium Interior Decor</span>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* New SEO Content Section: Authority & Expertise Boost */}
          <section className="py-12 md:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100 relative overflow-hidden">
            {/* Subtle background decorative elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-slate-200/50 rounded-full blur-2xl pointer-events-none"></div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto px-4 relative z-10"
            >
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center gap-2 p-2 px-4 bg-amber-50 border border-amber-200 rounded-full text-amber-800 font-bold text-sm mb-6 shadow-sm">
                  <Icons.Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                  <span>The Standard of Engineering in Uganda</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-12 leading-tight tracking-tight">
                  Reliable Electrical Engineering & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Modern Lighting Solutions</span>
                </h2>
              </div>

              <div className="prose prose-lg max-w-none text-slate-600 space-y-8 md:space-y-12">
                <p className="text-lg md:text-xl leading-relaxed">
                  At <strong>Dynawatt Engineering</strong>, we provide certified electrical solutions for residential and commercial clients across <strong>Kampala</strong> and the greater central region. 
                  From complex industrial 3-phase wiring to high-end architectural lighting, our team ensures every project meets international safety standards while maintaining modern aesthetics.
                </p>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 py-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center">
                      <Icons.LayoutDashboard className="h-5 w-5 mr-2 text-amber-500" />
                      Industrial Electrical Installation Services
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      Our engineering expertise extends to large-scale industrial fit-outs. We specialize in 3-phase power distribution, motor control systems, and factory-grade lighting that reduces energy overheads. Businesses in <strong>Mukono</strong> and <strong>Namanve</strong> trust us for reliable maintenance that eliminates costly downtime.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-slate-900 flex items-center">
                      <Icons.Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                      Architectural Lighting Installation in Kampala
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed">
                      We are the pioneers of elegant home illumination. Whether you need a <strong>floating chandelier installation in Munyonyo</strong> or sophisticated <strong>aluminum profile lighting</strong> for a penthouse in <strong>Kololo</strong>, our technicians possess the precision and architectural eye required for premium finishes.
                    </p>
                  </div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed">
                  Building a new home in <strong>Kira</strong> or <strong>Najjera</strong>? Our comprehensive house wiring services include a full 3-month repair guarantee. We don't just pull cables; we design smart electrical systems and perform energy-saving <strong>Yaka audits</strong> to troubleshoot high consumption and install high-performance lightning arrestors to protect your valuable electronics.
                </p>

                <p className="text-base md:text-lg leading-relaxed bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm italic">
                  "At Dynawatt Engineering, we bridge the gap between technical complexity and customer peace of mind. As a modern engineering and smart systems company, we design and install with the same care we would our own homes, ensuring every joint, breaker, and fixture is a testament to premium Ugandan engineering."
                </p>
              </div>

              {/* The Dynawatt Difference - Compacted Grid */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "3-Month Repair Guarantee", desc: "On all full-house wiring projects.", icon: <Icons.Shield /> },
                  { title: "Personalized Site Visits", desc: "Custom consulting before we start.", icon: <Icons.Users /> },
                  { title: "24/7 Rapid Response", desc: "Emergency help when you need it.", icon: <Icons.Clock /> },
                  { title: "Premium Material Supply", desc: "Only certified cables and fixtures.", icon: <Icons.Package /> }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:border-amber-200 transition-all group">
                    <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                      {React.cloneElement(item.icon as React.ReactElement, { className: "h-8 w-8" })}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4 md:gap-5">
                <a 
                  href="#quote" 
                  onClick={scrollToQuote}
                  className="group inline-flex justify-center items-center px-6 py-4 md:px-10 text-base md:text-lg font-bold rounded-xl text-slate-900 bg-amber-500 hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ring-4 ring-amber-500/20"
                >
                  Get a Free Quotation
                  <Icons.ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                
                <a 
                  href={`tel:${config.contactPhone.replace(/[^0-9+]/g, '')}`} 
                  className="group inline-flex justify-center items-center px-6 py-4 md:px-10 text-base md:text-lg font-bold rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <Icons.Phone className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  {config.contactPhone}
                </a>
              </div>
            </motion.div>
          </section>

          {/* Trustpilot Reviews Section */}
          <TrustpilotReviews />

          {/* Core Services Section */}
          <section id="services" className="py-10 md:py-20 bg-white scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Services</h2>
                <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">Professional electrical and solar solutions tailored to your needs.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Electrical Installation */}
                <div onClick={() => setPage(Page.SEO_ELEC_INSTALL)} className="cursor-pointer bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col text-left">
                   <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img src="/electrical-engineering-kampala.jpg" alt="Professional commercial and residential electrical installations by Dynawatt Engineering in Kampala, Uganda" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" referrerPolicy="no-referrer" />
                     <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center">
                      <Icons.Zap className="h-3 w-3 mr-1 text-amber-500" />
                      Residential & Commercial
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Electrical Installation Services in Kampala</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      Premium residential, commercial, and industrial electrical installations designed for safety, efficiency, and modern aesthetics.
                    </p>
                    <div className="text-amber-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                      Explore Electrical Installation <Icons.ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Architectural Lighting */}
                <div onClick={() => setPage(Page.SEO_PROFILE_LIGHTING)} className="cursor-pointer bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col text-left">
                   <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img src="/luxury-staircase-lighting.jpg" alt="Luxury staircase lighting featuring recessed LED step lights and custom architectural profile lighting in Kampala, Uganda by Dynawatt Engineering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" referrerPolicy="no-referrer" />
                     <div className="absolute top-4 left-4 bg-amber-500/95 backdrop-blur-sm shadow-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center">
                      <Icons.Award className="h-3 w-3 mr-1" />
                      Premium Service
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Architectural Lighting & Aluminum Profile Lighting</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      Bespoke ambient lighting, seamless aluminum profile installations, and luxury modern lighting tailored for elegant spaces.
                    </p>
                    <div className="text-amber-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                      Explore Architectural Lighting <Icons.ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Solar Installation */}
                <div onClick={() => setPage(Page.SEO_SOLAR)} className="cursor-pointer bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col text-left">
                   <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img src="/solar-hero-bg.jpg" alt="Hybrid solar installation with battery backup by Dynawatt Engineering in Kira, Wakiso, Uganda" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" referrerPolicy="no-referrer" />
                     <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center">
                      <Icons.Sun className="h-3 w-3 mr-1 text-amber-500" />
                      Energy Systems
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Solar Installation & Backup Power Systems</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      Efficient hybrid solar power solutions and robust battery backup systems engineered to reduce energy costs and guarantee uptime.
                    </p>
                    <div className="text-amber-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                      Explore Solar & Backup Solutions <Icons.ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Smart Home Solutions */}
                <div onClick={() => setPage(Page.SEO_SMART_HOME)} className="cursor-pointer bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col text-left">
                   <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img src="/smart_home_switches.png" alt="Finished smart home installation featuring elegant glass-face touch control panel on the wall by Dynawatt Engineering in Kampala, Uganda" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" referrerPolicy="no-referrer" />
                     <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center">
                      <Icons.Home className="h-3 w-3 mr-1 text-amber-500" />
                      Smart Automation
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Smart Home Automation Systems</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      Integrated smart automation systems for seamless control of lighting, security, and climate to bring ultimate comfort to your property.
                    </p>
                    <div className="text-amber-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                      Explore Smart Home Systems <Icons.ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>

                {/* CCTV & Security Systems */}
                <div onClick={() => setPage(Page.SEO_CCTV)} className="cursor-pointer bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col text-left">
                   <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img src="/blog-smart-home.jpg" alt="Premium CCTV camera and advanced residential security system installation in Kampala, Uganda by Dynawatt Engineering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" referrerPolicy="no-referrer" />
                     <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center">
                      <Icons.Shield className="h-3 w-3 mr-1 text-amber-500" />
                      Security Systems
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">CCTV & Advanced Security Installations</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      State-of-the-art surveillance and security lighting installations to keep your property, family, and business fully protected.
                    </p>
                    <div className="text-amber-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                      Explore Security Solutions <Icons.ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
                
                {/* Repairs & Maintenance */}
                <div onClick={() => setPage(Page.SEO_MAINTENANCE)} className="cursor-pointer bg-white rounded-2xl border border-slate-100 hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col text-left">
                   <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img src="/electrical-repairs-maintenance-kampala.jpg" alt="Professional electrical repairs, fault-finding, and power board maintenance service in Kampala, Uganda by Dynawatt Engineering" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" referrerPolicy="no-referrer" />
                     <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider flex items-center">
                      <Icons.Wrench className="h-3 w-3 mr-1 text-amber-500" />
                      Maintenance
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">Electrical Repairs & Maintenance</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      Fast, reliable fault detection, urgent electrical repairs, and proactive maintenance checks to ensure 100% compliance and safety.
                    </p>
                    <div className="text-amber-600 font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                      Explore Repairs & Maintenance <Icons.ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* View All Details Button */}
              <div className="mt-12 text-center">
                <button 
                  onClick={() => setPage(Page.SERVICES)}
                  className="inline-flex items-center px-6 py-3 border-2 border-amber-500 text-amber-600 font-bold rounded-lg hover:bg-amber-500 hover:text-white transition group text-sm md:text-base"
                >
                  View All Services Details
                  <Icons.ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </section>

          {/* Premium Aluminum Profile Lighting Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <PremiumLighting />
          </motion.div>

          {/* Recent Projects Section - Updated to 6 Local Images */}
          <section id="projects" className="py-10 md:py-20 bg-slate-50 scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recent Projects we have worked on</h2>
                <div className="h-1.5 w-24 bg-amber-50 mx-auto rounded-full mb-6 flex items-center justify-center">
                  <div className="h-full w-1/3 bg-amber-500 rounded-full"></div>
                </div>
                <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                  See our workmanship in action. From residential upgrades to industrial installations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-slate-100">
                    <div 
                      className="relative h-56 md:h-64 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedImage(project.image)}
                    >
                      <LazyImage 
                        src={project.image} 
                        alt={project.alt || project.title} 
                        className={`w-full h-full object-cover transform group-hover:scale-105 transition duration-500 ${
                          project.title === "Exterior Architectural Lighting" ? "brightness-125 saturate-110" : ""
                        }`} 
                        id={`project-img-${index}`}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <Icons.Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-10 w-10 drop-shadow-lg" />
                      </div>
                      <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {project.category}
                      </div>
                    </div>
                    <div className="p-5 md:p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-slate-500 text-sm">
                          <Icons.MapPin className="h-4 w-4 mr-1 text-amber-500" />
                          {project.location}
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">{project.title}</h3>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags?.map((tag, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-600 text-xs font-semibold px-2 py-1 rounded">
                            <Icons.Check className="inline-block h-3 w-3 mr-1 text-green-500" /> {tag}
                          </span>
                        ))}
                      </div>

                      <a 
                        href="#quote" 
                        onClick={scrollToQuote} 
                        className="mt-auto w-full block text-center bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-200 hover:border-slate-900 font-bold py-3 rounded-lg transition-colors duration-300 text-sm md:text-base"
                      >
                        Request Similar Installation
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Before & After Transformations Section */}
          <section className="py-12 md:py-20 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center scroll-mt-24">
              <div className="inline-flex items-center gap-2 p-1.5 px-3 bg-amber-150 bg-amber-50 border border-amber-200 rounded-full text-amber-800 font-bold text-xs mb-6 shadow-sm">
                <Icons.Sparkles className="h-4 w-4 text-amber-500" />
                <span>Quality Assessments</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Before & After Transformations
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                Refusing to compromise on safety. Click or tap to compare unvetted and sub-standard electrical risks with Dynawatt's clean, premium, and BS 7671 compliant installations.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    id: "wiring",
                    title: "Residential House Wiring",
                    location: "Biira, Wakiso",
                    image: "/complete-house-wiring-biira-wakiso.jpg",
                    beforeImage: "/before_wiring_messy.png",
                    beforeDesc: "A severely overloaded and badly burnt main distribution board with melted insulation, chaotic uninsulated wiring, and zero surge protection, posing an extreme fire hazard.",
                    afterDesc: "Fully engineered three-phase distribution board wiring, neatly arranged conduits, labeled circuit breakers, and optimal earthing systems.",
                    alt: "Certified complete residential wiring consumer board in Biira, Wakiso by Dynawatt Engineering"
                  },
                  {
                    id: "lighting",
                    title: "Architectural Profile Ceiling",
                    location: "7th Street, Kampala",
                    image: "/premium-profile-lighting-7th-street-kampala.jpg",
                    beforeImage: "/before_lighting_plain.png",
                    beforeDesc: "Cold fluorescent fittings and simple hanging bare bulbs casting deep, dark shadows on concrete.",
                    afterDesc: "Polished false ceiling fitted with custom embedded aluminum profile LED warm strip lights for premium luxury lighting design.",
                    alt: "Elegantly finished custom profile ceiling lighting by Dynawatt Engineering in Kampala"
                  },
                  {
                    id: "solar",
                    title: "Kira Solar Back-Up",
                    location: "Kira Municipality",
                    image: "/hybrid-solar-installation-kira-wakiso.jpg",
                    beforeImage: "/before_solar_generator.png",
                    beforeDesc: "Subject to severe grid blackouts, disrupted operations, noisy generators, and high Yaka consumption tariffs.",
                    afterDesc: "Optimized solar panel roof arrays harvesting 5.4kW clean energy seamlessly integrated with low-maintenance hybrid smart inverters.",
                    alt: "Hybrid solar installation with premium tier-1 solar panels on a roof in Kira by Dynawatt Engineering"
                  }
                ].map((item) => (
                  <TransformationCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </section>

          {/* Instagram Video Section */}
          <section className="py-10 md:py-20 bg-white border-b border-slate-100">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-10 md:mb-16">
                <div className="inline-flex items-center gap-2 p-2 px-4 bg-gradient-to-tr from-[#f09433] to-[#bc1888] rounded-full text-white font-bold text-xs md:text-sm mb-4 shadow-md">
                  <Icons.Instagram className="h-4 w-4" />
                  <span>Follow Our Work</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest from Instagram</h2>
                <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                  Watch our engineering team in action. Real projects, real people, real electrical excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                <a href="https://www.instagram.com/dynawattengineering?igsh=MWp5Y3R1MmkxNW0xZQ==" target="_blank" rel="noreferrer" className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
                  <img src="/instagram-feed-1.jpg" alt="Premium recessed aluminum profile lighting installed in a modern residential ceiling in Kampala, Uganda by Dynawatt Engineering" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icons.Instagram className="h-8 w-8 text-white mb-3" />
                    <p className="text-white text-sm font-medium leading-snug">#AluminumProfileLighting #ModernHomeLighting #ArchitecturalLighting #Kampala</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/dynawattengineering?igsh=MWp5Y3R1MmkxNW0xZQ==" target="_blank" rel="noreferrer" className="relative h-64 md:h-80 rounded-2xl overflow-hidden group">
                  <img src="/instagram-feed-2.jpg" alt="Industrial electrical panel and premium distribution board wiring installation in Kampala, Uganda by Dynawatt Engineering" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icons.Instagram className="h-8 w-8 text-white mb-3" />
                    <p className="text-white text-sm font-medium leading-snug">#ElectricalEngineering #PanelInstallation #IndustrialWiring #SecurePowerUganda</p>
                  </div>
                </a>
                <a href="https://www.instagram.com/dynawattengineering?igsh=MWp5Y3R1MmkxNW0xZQ==" target="_blank" rel="noreferrer" className="relative h-64 md:h-80 rounded-2xl overflow-hidden group hidden md:block">
                  <img src="/luxury-staircase-lighting.jpg" alt="Luxury staircase profile lighting integrated into marble steps and modern ambient ceiling lights in Kampala, Uganda by Dynawatt Engineering" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icons.Instagram className="h-8 w-8 text-white mb-3" />
                    <p className="text-white text-sm font-medium leading-snug">#LuxuryCeilingLighting #AmbientLighting #SmartHome #InteriorDesignUganda</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-10 text-center">
                <a 
                  href="https://www.instagram.com/dynawattengineering?igsh=MWp5Y3R1MmkxNW0xZQ==" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 transition"
                >
                  View all reels on Instagram
                  <Icons.ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </section>

          {/* Why Choose Us */}
          <section id="about" className="py-10 md:py-20 bg-slate-900 text-white relative scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-12 md:mb-20">
                <div className="lg:w-1/2">
                  <img 
                    src="/premium-profile-lighting-7th-street-kampala.jpg" 
                    alt="Dynawatt technician installing premium aluminum profile lighting in Kampala on 7th Street" 
                    loading="lazy"
                    className="rounded-xl shadow-2xl border-4 border-slate-700 object-cover w-full h-full min-h-[300px] md:min-h-[400px]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose DYNAWATT?</h2>
                  <p className="text-slate-300 mb-8 text-base md:text-lg leading-relaxed">
                    At Dynawatt Engineering, we believe that good electrical work goes unnoticed, while bad electrical work can be a disaster. We bridge the gap between technical expertise and customer peace of mind.
                  </p>
                  
                  <div className="grid grid-cols-1 gap-6 md:gap-8">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                          <Icons.Award className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg md:text-xl font-bold mb-1">Certified Electrical Installation Standards</h4>
                        <p className="text-slate-400 text-sm">We strictly adhere to international safety standards (BS 7671). We don't take shortcuts with your safety.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                          <Icons.Package className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg md:text-xl font-bold mb-1">Premium Electrical Material Supply</h4>
                        <p className="text-slate-400 text-sm">We source authentic, high-quality materials directly from trusted suppliers. We handle the logistics so you don't worry about counterfeits.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                          <Icons.Clock className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg md:text-xl font-bold mb-1">Professional Electrical Engineering Team</h4>
                        <p className="text-slate-400 text-sm">Our engineers are professional, uniformed, and punctual. We treat your property with respect and clean up after every job.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                          <Icons.Wallet className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg md:text-xl font-bold mb-1">Cost-Efficient Electrical Systems</h4>
                        <p className="text-slate-400 text-sm">Transparent pricing in UGX with no hidden costs. We design efficient systems that perform better and last longer, saving you money.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                          <Icons.AlertTriangle className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-lg md:text-xl font-bold mb-1">Emergency Response Available</h4>
                        <p className="text-slate-400 text-sm">We respond to electrical emergencies 24/7. Sparks, power failures, tripped breakers — call us anytime. Most Kampala-area emergencies are attended within 2–4 hours.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10">
                    <button 
                      onClick={() => window.location.href = `tel:${config.contactPhone.replace(/[^0-9+]/g, '')}`}
                      className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition w-full md:w-auto"
                    >
                      Contact Us Today
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Company Story Section */}
          <section className="py-12 md:py-20 bg-white border-b border-slate-100">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-bottom duration-750">
              <div className="inline-flex items-center gap-2 p-1.5 px-3 bg-amber-50 border border-amber-200 rounded-full text-amber-800 font-bold text-xs mb-6 shadow-sm">
                <Icons.Sparkles className="h-4 w-4 text-amber-500" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Authentic Craftsmanship & Electrical Integrity
              </h2>
              <div className="h-1 w-20 bg-amber-500 mx-auto rounded mb-8"></div>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                <strong>Dynawatt Engineering</strong> was founded in Kampala with one mission: to bring reliable, certified electrical work to Ugandan homes and businesses — work that meets international standards, uses genuine materials, and lasts. With <strong>100+ completed projects</strong> across Kampala, Wakiso, Mukono, and beyond, our team of certified engineers has become the trusted name for homeowners, landlords, banks, and developers who refuse to compromise on safety or quality.
              </p>
            </div>
          </section>

          {/* New Safety Checklist Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <SafetyChecklist setPage={setPage} />
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <FAQ setPage={setPage} />
          </motion.div>

          {/* Customer Reviews Section */}
          <section id="reviews" className="py-10 md:py-20 bg-white scroll-mt-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center gap-3">
                  <span className="text-amber-500">⭐️</span> Trusted by Homeowners & Businesses Across Uganda
                </h2>
                <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
                  Trusted by homeowners and business operators across Uganda. Your satisfaction is our strongest voltage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition duration-300">
                     <div className="flex text-amber-500 mb-4 space-x-1">
                        {[1,2,3,4,5].map(i => (
                           <Icons.Star key={i} className="h-5 w-5 fill-amber-500" />
                        ))}
                     </div>
                     <p className="text-slate-900 font-medium mb-6 flex-grow leading-loose relative text-sm md:text-base border-l-4 border-amber-400 pl-4 py-1">
                       <span className="text-4xl md:text-6xl text-slate-100 opacity-50 absolute -top-4 -left-2 md:-top-6 font-serif select-none -z-10">"</span>
                       <span className="relative z-10">{review.text}</span>
                     </p>
                     <div className="flex flex-wrap gap-2 mb-4">
                       <span className="inline-flex items-center text-xs font-bold text-amber-800 bg-amber-100/85 px-2.5 py-1 rounded-md border border-amber-200">
                         🏷️ {review.serviceTag}
                       </span>
                     </div>
                     <div className="flex items-center mt-auto border-t border-slate-200 pt-5">
                       <div className="w-10 h-10 md:w-11 md:h-11 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mr-4 flex-shrink-0">
                         {review.initial}
                       </div>
                       <div>
                         <div className="font-extrabold text-slate-900 text-sm md:text-base">{review.name}</div>
                         <div className="text-xs text-slate-600 flex items-center mt-1">
                           <Icons.MapPin className="h-3 w-3 mr-1 text-amber-500" />
                           {review.location}
                         </div>
                       </div>
                     </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Thread Area */}
              <div className="mt-10 pt-4 max-w-5xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
                    <Icons.MessageSquare className="h-6 w-6 text-emerald-500" />
                    Verified WhatsApp Feedback
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 max-w-md mx-auto">
                    Real active feedback threads from our clients. Numbers are obscured for privacy.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* WhatsApp chat 1 */}
                  <div className="bg-[#efeae2] rounded-2xl overflow-hidden shadow-sm border border-slate-200/65 flex flex-col h-[320px] font-sans text-left">
                    {/* Header */}
                    <div className="bg-[#075e54] text-white px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-300 relative overflow-hidden flex-shrink-0 border border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-tr from-sky-400 via-indigo-200 to-amber-100" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end blur-[3px]">
                          <div className="w-3.5 h-3.5 rounded-full bg-amber-900/80" />
                          <div className="w-6 h-4 rounded-t-full bg-slate-700" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-xs font-bold leading-none">Ronald Tenywa (Wakiso)</div>
                        <span className="text-[10px] text-emerald-250 leading-none opacity-80">Online</span>
                      </div>
                    </div>
                    {/* Chat Bubble Area */}
                    <div className="p-4 flex-grow space-y-3 overflow-y-auto flex flex-col text-xs leading-relaxed">
                      <div className="bg-white text-slate-800 p-2.5 rounded-lg rounded-tl-none self-start max-w-[85%] shadow-sm relative">
                        Thank you so much Eng. and the team. The lightning arrestor has already survived the heavy Wakiso rains this weekend. Excellent work! 🙏⚡
                        <span className="block text-[8px] text-slate-400 text-right mt-1">11:05 am</span>
                      </div>
                      <div className="bg-[#d9fdd3] text-slate-800 p-2.5 rounded-lg rounded-tr-none self-end max-w-[85%] shadow-sm relative">
                        Our pleasure Ronald! We always test and secure to BS 7671 electrical safety standards. Contact us anytime if you need more solutions.
                        <span className="block text-[8px] text-[#00b67a] text-right mt-1 font-bold flex items-center justify-end gap-0.5">
                          11:12 am <span className="text-[#34b7f1] font-sans text-[10px] leading-none">✓✓</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp chat 2 */}
                  <div className="bg-[#efeae2] rounded-2xl overflow-hidden shadow-sm border border-slate-200/65 flex flex-col h-[320px] font-sans text-left">
                    {/* Header */}
                    <div className="bg-[#075e54] text-white px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-300 relative overflow-hidden flex-shrink-0 border border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 via-teal-200 to-yellow-100" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end blur-[3px]">
                          <div className="w-3.5 h-3.5 rounded-full bg-stone-800" />
                          <div className="w-6 h-4 rounded-t-full bg-emerald-800" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-xs font-bold leading-none">Hajji Hassan (Kitukutwe)</div>
                        <span className="text-[10px] text-emerald-250 leading-none opacity-80">Online</span>
                      </div>
                    </div>
                    {/* Chat Bubble Area */}
                    <div className="p-4 flex-grow space-y-3 overflow-y-auto flex flex-col text-xs leading-relaxed">
                      <div className="bg-white text-slate-800 p-2.5 rounded-lg rounded-tl-none self-start max-w-[85%] shadow-sm relative">
                        The ceiling profiles look wow!! Everyone who comes to the house is praising the warm lights. Good job Dynawatt. I will definitely refer you to my brother.
                        <span className="block text-[8px] text-slate-400 text-right mt-1">2:45 pm</span>
                      </div>
                      <div className="bg-[#d9fdd3] text-slate-800 p-2.5 rounded-lg rounded-tr-none self-end max-w-[85%] shadow-sm relative">
                        Thank you Hajji! Glad you love the premium look. Let us know when your brother is ready, we'll design something spectacular for him too.
                        <span className="block text-[8px] text-[#00b67a] text-right mt-1 font-bold flex items-center justify-end gap-0.5">
                          2:50 pm <span className="text-[#34b7f1] font-sans text-[10px] leading-none">✓✓</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp chat 3 */}
                  <div className="bg-[#efeae2] rounded-2xl overflow-hidden shadow-sm border border-slate-200/65 flex flex-col h-[320px] font-sans text-left">
                    {/* Header */}
                    <div className="bg-[#075e54] text-white px-4 py-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-300 relative overflow-hidden flex-shrink-0 border border-white/20">
                        <div className="absolute inset-0 bg-gradient-to-tr from-rose-300 via-purple-200 to-cyan-100" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end blur-[3px]">
                          <div className="w-3.5 h-3.5 rounded-full bg-amber-950/70" />
                          <div className="w-6 h-4 rounded-t-full bg-purple-700" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-xs font-bold leading-none">Aisha N. (Kawuku)</div>
                        <span className="text-[10px] text-emerald-250 leading-none opacity-80">Online</span>
                      </div>
                    </div>
                    {/* Chat Bubble Area */}
                    <div className="p-4 flex-grow space-y-3 overflow-y-auto flex flex-col text-xs leading-relaxed">
                      <div className="bg-white text-slate-800 p-2.5 rounded-lg rounded-tl-none self-start max-w-[85%] shadow-sm relative">
                        Eng, the rental house wiring is completed so beautifully. Neatly labeled distribution board. Truly premium work. Thank you!
                        <span className="block text-[8px] text-slate-400 text-right mt-1">9:12 am</span>
                      </div>
                      <div className="bg-[#d9fdd3] text-slate-800 p-2.5 rounded-lg rounded-tr-none self-end max-w-[85%] shadow-sm relative">
                        We appreciate the update Aisha! Neat and structured cabling is our daily goal. Let us know when you need maintenance support.
                        <span className="block text-[8px] text-[#00b67a] text-right mt-1 font-bold flex items-center justify-end gap-0.5">
                          9:20 am <span className="text-[#34b7f1] font-sans text-[10px] leading-none">✓✓</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <a 
                  href="#quote"
                  onClick={scrollToQuote}
                  className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base md:text-lg font-bold rounded-lg text-slate-900 bg-amber-500 hover:bg-amber-600 transition shadow-lg hover:shadow-xl"
                >
                  <Icons.Zap className="h-5 w-5 mr-3" />
                  Ready to start? Request a callback
                </a>
              </div>
            </motion.div>
          </section>

          {/* Service Areas - Updated Content */}
          <section id="areas" className="py-10 md:py-20 bg-slate-50 scroll-mt-24 border-t border-slate-200">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 flex items-center justify-center gap-3">
                <span className="text-amber-500">📍</span> Proudly Serving the Greater Kampala Region
              </h2>
              <div className="max-w-4xl mx-auto mb-10 md:mb-12 space-y-4">
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  At <strong>Dynawatt Engineering</strong>, we bring professional electrical solutions directly to your doorstep. We are fully equipped and mobile, providing world-class engineering, architectural lighting, and solar installations across <strong>Kampala, Wakiso, and Mukono.</strong>
                </p>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                  Whether you are renovating a residence in <strong>Kololo</strong>, setting up a new office in <strong>Bugolobi</strong>, or requiring solar backup in <strong>Kira</strong>, our team is just a phone call away.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {serviceAreas.map((zone, idx) => (
                  <div key={idx} className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-100 hover:border-amber-300 transition-colors group">
                    <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center pb-3 border-b border-slate-100 group-hover:text-amber-600 transition-colors">
                      <Icons.MapPin className="h-5 w-5 text-amber-500 mr-2" />
                      {zone.region}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {zone.areas.map((area) => (
                        <span key={area} className="px-3 py-1 bg-slate-50 text-slate-600 text-sm rounded-md border border-slate-100 hover:bg-amber-50 hover:text-amber-800 hover:border-amber-200 transition cursor-default">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-slate-900 text-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-xl">
                <div className="text-left mb-6 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Don't see your specific location?</h3>
                  <p className="text-slate-300 text-sm md:text-base max-w-2xl">
                    Give us a call at <strong><a href={`tel:${config.contactPhone.replace(/[^0-9+]/g, '')}`} className="hover:text-amber-400 transition-colors">+256 751 473 830</a></strong>. We frequently take on specialized projects further afield, including <strong>Kiboga</strong> and <strong>Mpigi</strong>, to ensure every Ugandan home and business has access to safe, reliable power.
                  </p>
                </div>
                <a 
                  href={`tel:${config.contactPhone.replace(/[^0-9+]/g, '')}`}
                  className="whitespace-nowrap bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition shadow-lg w-full md:w-auto text-center flex items-center justify-center"
                >
                  <Icons.Phone className="h-5 w-5 mr-2" />
                  Call Electrician Now
                </a>
              </div>
            </motion.div>
          </section>
        </>
      ) : page === Page.SERVICES ? (
        <ServicesDetail setPage={setPage} />
      ) : page === Page.ABOUT ? (
        <About setPage={setPage} />
      ) : page === Page.SOLAR ? (
        <Solar addLead={addLead} setPage={setPage} />
      ) : page === Page.LOCATION ? (
        <Location setPage={setPage} />
      ) : page === Page.CONTACT ? (
        <Contact addLead={addLead} setPage={setPage} />
      ) : page === Page.BLOG ? (
        <Blog setPage={setPage} />
      ) : page === Page.SEO_ELEC_INSTALL ? (
        <SeoPage data={seoPagesData.SEO_ELEC_INSTALL} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.SEO_ARCH_LIGHTING ? (
        <SeoPage data={seoPagesData.SEO_ARCH_LIGHTING} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.SEO_SOLAR ? (
        <SeoPage data={seoPagesData.SEO_SOLAR} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.SEO_CCTV ? (
        <SeoPage data={seoPagesData.SEO_CCTV} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.SEO_SMART_HOME ? (
        <SeoPage data={seoPagesData.SEO_SMART_HOME} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.SEO_COMMERCIAL ? (
        <SeoPage data={seoPagesData.SEO_COMMERCIAL} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.SEO_MAINTENANCE ? (
        <SeoPage data={seoPagesData.SEO_MAINTENANCE} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.SEO_PROFILE_LIGHTING ? (
        <SeoPage data={seoPagesData.SEO_PROFILE_LIGHTING} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.LOC_KAMPALA ? (
        <SeoPage data={seoLocationPagesData.KAMPALA} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.LOC_ENTEBBE ? (
        <SeoPage data={seoLocationPagesData.ENTEBBE} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.LOC_WAKISO ? (
        <SeoPage data={seoLocationPagesData.WAKISO} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.LOC_KOLOLO ? (
        <SeoPage data={seoLocationPagesData.KOLOLO} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.LOC_KIRA ? (
        <SeoPage data={seoLocationPagesData.KIRA} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.LOC_NAJJERA ? (
        <SeoPage data={seoLocationPagesData.NAJJERA} setPage={setPage} contactPhone={config.contactPhone} hideAuthor={true} />
      ) : page === Page.SEO_YAKA_METER ? (
        <SeoPage data={seoEducationalPagesData.YAKA_METER} setPage={setPage} contactPhone={config.contactPhone} />
      ) : page === Page.SEO_HOUSE_WIRING_COST ? (
        <SeoPage data={seoEducationalPagesData.HOUSE_WIRING_COST} setPage={setPage} contactPhone={config.contactPhone} />
      ) : page === Page.SEO_WARM_SWITCHES ? (
        <SeoPage data={seoEducationalPagesData.WARM_SWITCHES} setPage={setPage} contactPhone={config.contactPhone} />
      ) : page === Page.SEO_SOLAR_MAINTENANCE ? (
        <SeoPage data={seoEducationalPagesData.SOLAR_MAINTENANCE} setPage={setPage} contactPhone={config.contactPhone} />
      ) : page === Page.SEO_BULB_BLOWOUTS ? (
        <SeoPage data={seoEducationalPagesData.BULB_BLOWOUTS} setPage={setPage} contactPhone={config.contactPhone} />
      ) : page === Page.SEO_WIRING_2_BEDROOM ? (
        <SeoPage data={seoEducationalPagesData.WIRING_2_BEDROOM} setPage={setPage} contactPhone={config.contactPhone} />
      ) : page === Page.SEO_WIRING_3_BEDROOM ? (
        <SeoPage data={seoEducationalPagesData.WIRING_3_BEDROOM} setPage={setPage} contactPhone={config.contactPhone} />
      ) : page === Page.SEO_WIRING_COMMERCIAL ? (
        <SeoPage data={seoEducationalPagesData.WIRING_COMMERCIAL} setPage={setPage} contactPhone={config.contactPhone} />
      ) : page === Page.SEO_BLOG_CCTV ? (
        <SeoPage data={seoEducationalPagesData.SEO_BLOG_CCTV} setPage={setPage} contactPhone={config.contactPhone} />
      ) : page === Page.SEO_BLOG_CONDUIT_SLAB ? (
        <SeoPage data={seoEducationalPagesData.SEO_BLOG_CONDUIT_SLAB} setPage={setPage} contactPhone={config.contactPhone} />
      ) : page === Page.GUARANTEE ? (
        <Guarantee setPage={setPage} />
      ) : page === Page.PRIVACY_POLICY ? (
        <PrivacyPolicy setPage={setPage} />
      ) : page === Page.TERMS_OF_SERVICE ? (
        <TermsOfService setPage={setPage} />
      ) : page === Page.THANK_YOU ? (
        <div id="thank-you-view" className="flex-grow bg-slate-950 text-white flex flex-col items-center py-8 md:py-12 px-4 relative overflow-hidden min-h-fit">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/95 to-slate-950"></div>
          <div className="relative max-w-2xl w-full mx-auto text-left md:text-center z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mb-6 animate-bounce shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Icons.CheckCircle className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-3 text-center">
              Request Received Successfully!
            </h1>
            
            {/* High-impact ad conversion / instant expectation setting copy requested */}
            <p className="text-amber-400 font-extrabold text-sm md:text-base text-center mb-6 leading-relaxed bg-slate-800/60 border border-slate-700 px-4 py-3 rounded-xl shadow-[0_0_12px_rgba(245,158,11,0.08)] w-full max-w-xl">
              <em>"A member of our team will contact you on WhatsApp within 2 hours. Check your WhatsApp now."</em>
            </p>

            <p className="text-xs md:text-sm text-slate-300 mb-6 max-w-lg leading-relaxed text-center">
              Thank you for reaching out to Dynawatt Engineering. Your request has been received and logged with our engineering team. We will be in touch with you shortly.
            </p>

            {/* Showcase project photo requested between confirmation paragraph and what happens next */}
            <div className="w-full mb-6 overflow-hidden rounded-xl border border-slate-800/80 shadow-2xl bg-slate-900">
              <img 
                src="/premium-profile-lighting-7th-street-kampala.jpg" 
                alt="Premium profile lighting installation on 7th Street Kampala by Dynawatt Engineering" 
                className="w-full h-56 md:h-80 lg:h-96 object-cover transition-transform duration-550 hover:scale-[1.02]" 
                loading="lazy" 
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-slate-800/80 p-4 md:p-5 rounded-xl border border-slate-700 shadow-lg text-left w-full mb-6">
              <h3 className="font-bold text-white text-sm md:text-base mb-3 flex items-center gap-2">
                <Icons.Clock className="h-4.5 w-4.5 text-amber-500" /> What happens next?
              </h3>
              <ul className="space-y-2 text-[11px] md:text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-black select-none">•</span>
                  <span><strong>Assessment:</strong> Daniel Alemukori (co-founder & lead engineer) will review your layout constraints.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-black select-none">•</span>
                  <span><strong>Call Back:</strong> We will call you on your provided WhatsApp/phone number within <strong>2 hours</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-black select-none">•</span>
                  <span><strong>Bespoke Proposal:</strong> We schedule a 100% free site plan design visit, earthing grid check, or custom BOQ preparation.</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <button 
                onClick={() => setPage(Page.HOME)}
                className="bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-black px-6 py-3 rounded-lg transition text-xs md:text-sm shadow-md w-full sm:w-auto text-center"
              >
                Return to Homepage
              </button>
              <a 
                href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Dynawatt!%20I%20just%20submitted%20a%20request%20on%20your%20website%20and%20wanted%20to%20follow%20up.`}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 hover:bg-slate-700 active:scale-95 text-white font-bold px-6 py-3 rounded-lg transition text-xs md:text-sm shadow-sm border border-slate-700 flex items-center justify-center gap-2 w-full sm:w-auto text-center"
              >
                <Icons.MessageCircle className="h-4.5 w-4.5 text-green-500" />
                Follow-up on WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}

      {page !== Page.THANK_YOU ? (
        <Footer setPage={setPage} />
      ) : (
        <footer className="bg-slate-950 text-slate-500 py-6 border-t border-slate-900 text-center text-xs">
          <p className="max-w-md mx-auto px-4 font-sans">&copy; {new Date().getFullYear()} DYNAWATT ENGINEERING Uganda. All rights reserved.</p>
        </footer>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <Icons.X className="h-8 w-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Full View" 
            className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()} 
            referrerPolicy="no-referrer"
          />
        </div>
      )}

      {/* Sticky WhatsApp Button */}
      <a 
        href={`https://wa.me/${config.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center group"
      >
        <Icons.MessageCircle className="h-6 w-6 md:h-8 md:w-8" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white px-3 py-1.5 rounded shadow-lg font-bold text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none hidden md:block">
          Chat with us!
        </span>
      </a>
    </div>
  );
}

export default App;
