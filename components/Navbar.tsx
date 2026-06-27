import React, { useState, useEffect } from 'react';
import { Icons } from './AppIcons';
import { Page } from '../types';

interface NavbarProps {
  setPage: (page: Page) => void;
  page: Page;
  contactPhone: string;
}

const Navbar: React.FC<NavbarProps> = ({ setPage, page, contactPhone }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [logoError, setLogoError] = useState(false);
  const whatsappMessage = encodeURIComponent("Hello, Im interested in working with DYNAWATT ENGINEERING. Is anyone available to chat");

  const navbarHeight = 80; // Height of the fixed navbar (desktop reference)

  // Handle scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'reviews', 'areas', 'quote'];
      // Offset to trigger active state slightly before the section hits the top
      const scrollPosition = window.scrollY + navbarHeight + 50; // Increased offset for better feel

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbarHeight]); // Depend on navbarHeight

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    
    // Switch to Home page first
    setPage(Page.HOME);

    // Use timeout to allow Home page to render if we were on another page
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Adjust offset based on screen size (smaller offset for mobile)
        const isMobile = window.innerWidth < 768;
        const currentNavHeight = isMobile ? 64 : 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - currentNavHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else if (id === 'home') { 
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const NavLink = ({ id, label, isMobile = false }: { id: string, label: string, isMobile?: boolean }) => {
    const isActive = activeSection === id;
    
    if (isMobile) {
      return (
        <a 
          href={`#${id}`}
          onClick={(e) => scrollToSection(e, id)}
          className={`block py-3 px-4 rounded-lg transition-all duration-300 border-l-4 ${
            isActive 
              ? 'bg-amber-100 text-amber-800 border-amber-500 font-semibold' 
              : 'border-transparent text-gray-300 hover:text-white hover:bg-slate-800'
          }`}
        >
          {label}
        </a>
      );
    }

    return (
      <a 
        href={`#${id}`}
        onClick={(e) => scrollToSection(e, id)}
        className={`relative px-3 py-2 transition-colors duration-300 ${
          isActive ? 'text-amber-500 font-medium' : 'text-gray-100 hover:text-amber-500'
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full transition-all duration-300"></span>
        )}
      </a>
    );
  };

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-red-700 text-white px-4 py-3 text-center text-xs md:text-sm font-bold flex items-center justify-center space-x-2 shadow-inner border-b border-red-800 z-50 relative">
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-100"></span>
        </span>
        <Icons.AlertTriangle className="h-4.5 w-4.5 animate-bounce text-amber-300" />
        <span className="tracking-wide">
          ⚡ Electrical Emergency? We're available 24/7 — <a href="tel:+256751473830" className="underline hover:text-amber-300 transition-colors bg-black/20 px-2 py-1 rounded ml-1 font-extrabold uppercase inline-block mt-1 sm:mt-0">Call +256 751 473 830</a>
        </span>
      </div>
      
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={(e) => scrollToSection(e, 'home')}
          >
            <div className="flex items-center gap-3">
              {!logoError ? (
                <img 
                  src="/dynawatt-engineering-logo.png" 
                  alt="Dynawatt Engineering electrical installation and architectural lighting company logo" 
                  className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" 
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-10 h-10 bg-amber-500 text-slate-900 rounded-lg flex items-center justify-center font-black text-xl">
                  D
                </div>
              )}
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-black text-white leading-none tracking-tight font-sans">DYNAWATT</span>
                <span className="text-[8px] md:text-[9px] text-amber-500 tracking-[0.25em] font-extrabold uppercase">ENGINEERING</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-1 lg:space-x-1.5 items-center">
            <NavLink id="home" label="Home" />
            <button onClick={() => setPage(Page.SERVICES)} className={`px-3 py-2 text-sm transition-colors duration-300 ${page === Page.SERVICES ? 'text-amber-500 font-medium' : 'text-gray-100 hover:text-amber-500'}`}>Services</button>
            <button onClick={() => setPage(Page.SOLAR)} className={`px-3 py-2 text-sm transition-colors duration-300 ${page === Page.SOLAR ? 'text-amber-500 font-medium' : 'text-gray-100 hover:text-amber-500'}`}>Solar</button>
            <button onClick={() => setPage(Page.ABOUT)} className={`px-3 py-2 text-sm transition-colors duration-300 ${page === Page.ABOUT ? 'text-amber-500 font-medium' : 'text-gray-100 hover:text-amber-500'}`}>About</button>
            <button onClick={() => setPage(Page.GUARANTEE)} className={`px-3 py-2 text-sm transition-colors duration-300 ${page === Page.GUARANTEE ? 'text-amber-500 font-medium' : 'text-gray-100 hover:text-amber-500'}`}>Guarantee</button>
            <button onClick={() => setPage(Page.LOCATION)} className={`px-3 py-2 text-sm transition-colors duration-300 ${page === Page.LOCATION ? 'text-amber-500 font-medium' : 'text-gray-100 hover:text-amber-500'}`}>Areas We Serve</button>
            <button onClick={() => setPage(Page.BLOG)} className={`px-3 py-2 text-sm transition-colors duration-300 ${page === Page.BLOG ? 'text-amber-500 font-medium' : 'text-gray-100 hover:text-amber-500'}`}>Blog</button>
            <button onClick={() => setPage(Page.CONTACT)} className={`px-3 py-2 text-sm transition-colors duration-300 ${page === Page.CONTACT ? 'text-amber-500 font-medium' : 'text-gray-100 hover:text-amber-500'}`}>Contact</button>
            
            <div className="flex items-center space-x-2 lg:space-x-3 ml-2 lg:ml-4 pl-2 lg:pl-4 border-l border-slate-700">
              <a 
                href={`https://wa.me/${contactPhone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-green-500 transition p-2 hover:scale-110"
                title="Chat on WhatsApp"
              >
                <Icons.MessageCircle className="h-6 w-6" />
              </a>
              <a 
                href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-2 px-4 lg:px-6 rounded-full transition transform hover:scale-105 flex items-center shadow-lg hover:shadow-amber-500/20 text-sm lg:text-base"
              >
                <Icons.Phone className="h-4 w-4 mr-2" />
                {contactPhone}
              </a>
            </div>
          </div>

          {/* Mobile contact tray (visible below lg, hidden on lg and above) — replaces Hamburger Menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a 
              href={`https://wa.me/${contactPhone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 hover:text-green-500 transition p-2 bg-slate-800 rounded-md"
              title="Chat on WhatsApp"
            >
              <Icons.MessageCircle className="h-5 w-5" />
            </a>
            <a 
              href={`tel:${contactPhone.replace(/[^0-9+]/g, '')}`}
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-1.5 px-3 rounded-md text-xs flex items-center shadow-md"
            >
              <Icons.Phone className="h-3.5 w-3.5 mr-1" />
              Call
            </a>
          </div>
        </div>
      </div>

      {/* Sub-Navbar featuring Direct Navigation Links (visible below lg, hidden on lg and above) */}
      <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 py-2">
        <div 
          className="max-w-7xl mx-auto px-4 flex items-center overflow-x-auto gap-2 scrollbar-none scroll-smooth"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <button
            onClick={(e) => scrollToSection(e, 'home')}
            className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-200 border whitespace-nowrap flex-shrink-0 ${
              activeSection === 'home' && page === Page.HOME
                ? 'bg-amber-500 border-amber-500 text-slate-900'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setPage(Page.SERVICES)}
            className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              page === Page.SERVICES
                ? 'bg-amber-500 border-amber-500 text-slate-900'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setPage(Page.LOCATION)}
            className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              page === Page.LOCATION
                ? 'bg-amber-500 border-amber-500 text-slate-900'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Areas We Serve
          </button>
          <button
            onClick={() => setPage(Page.SOLAR)}
            className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              page === Page.SOLAR
                ? 'bg-amber-500 border-amber-500 text-slate-900'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Solar
          </button>
          <button
            onClick={() => setPage(Page.GUARANTEE)}
            className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              page === Page.GUARANTEE
                ? 'bg-amber-500 border-amber-500 text-slate-900'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Guarantee
          </button>
          <button
            onClick={() => setPage(Page.ABOUT)}
            className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              page === Page.ABOUT
                ? 'bg-amber-500 border-amber-500 text-slate-900'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => setPage(Page.BLOG)}
            className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              page === Page.BLOG
                ? 'bg-amber-500 border-amber-500 text-slate-900'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Blog
          </button>
          <button
            onClick={() => setPage(Page.CONTACT)}
            className={`px-3 py-1.5 text-xs font-bold rounded-full border transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
              page === Page.CONTACT
                ? 'bg-amber-500 border-amber-500 text-slate-900'
                : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
            }`}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;