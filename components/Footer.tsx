import React from 'react';
import { Icons } from './AppIcons';
import { Page } from '../types';

interface FooterProps {
  setPage: (page: Page) => void;
}

const getPathFromPage = (targetPage: Page): string => {
  switch(targetPage) {
    case Page.HOME: return '/';
    case Page.SERVICES: return '/services';
    case Page.SOLAR: return '/solar';
    case Page.ABOUT: return '/about';
    case Page.LOCATION: return '/areas-we-serve';
    case Page.CONTACT: return '/contact';
    case Page.GUARANTEE: return '/guarantee';
    case Page.BLOG: return '/blog';
    default: return `/?page=${targetPage}`;
  }
};

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  
  const FooterLink = ({ targetPage, children, className = "hover:text-amber-500 transition-colors" }: { targetPage: Page, children: React.ReactNode, className?: string }) => (
    <a 
      href={getPathFromPage(targetPage)}
      onClick={(e) => {
        e.preventDefault();
        setPage(targetPage);
      }}
      className={className}
    >
      {children}
    </a>
  );

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white leading-none tracking-tight">DYNAWATT</span>
              <span className="text-[10px] text-amber-500 tracking-[0.2em] font-semibold">ENGINEERING</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Dynawatt Engineering provides electrical installation, architectural lighting, solar systems, CCTV installation, smart home automation, and aluminum profile lighting services in Kampala, Entebbe, Wakiso, Mukono, and across Uganda.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/dynawattengineering" target="_blank" rel="noreferrer" aria-label="Visit Dynawatt Engineering on Facebook" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Icons.Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/dynawattengineering" target="_blank" rel="noreferrer" aria-label="Visit Dynawatt Engineering on Instagram" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Icons.Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-amber-500/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm mb-8">
              <li><FooterLink targetPage={Page.HOME}>Home</FooterLink></li>
              <li><FooterLink targetPage={Page.ABOUT}>About Us</FooterLink></li>
              <li><FooterLink targetPage={Page.SERVICES}>Our Services</FooterLink></li>
              <li><FooterLink targetPage={Page.GUARANTEE} className="hover:text-amber-500 font-bold text-amber-400/90 transition-colors">🛡️ Service Guarantee</FooterLink></li>
              <li><FooterLink targetPage={Page.BLOG}>Blog & News</FooterLink></li>
              <li><FooterLink targetPage={Page.CONTACT}>Contact Us</FooterLink></li>
            </ul>
            
            <h4 className="text-lg font-bold mb-6 border-b border-amber-500/30 pb-2 inline-block">Cost & Yaka Guides</h4>
            <ul className="space-y-4 text-slate-400 text-sm text-left">
              <li><FooterLink targetPage={Page.SEO_YAKA_METER} className="hover:text-amber-500 transition-colors text-left">Yaka Meter Troubleshooting</FooterLink></li>
              <li><FooterLink targetPage={Page.SEO_WIRING_2_BEDROOM} className="hover:text-amber-500 transition-colors text-left">2-Bedroom Wiring Costs</FooterLink></li>
              <li><FooterLink targetPage={Page.SEO_WIRING_3_BEDROOM} className="hover:text-amber-500 transition-colors text-left">3-Bedroom Wiring Costs</FooterLink></li>
              <li><FooterLink targetPage={Page.SEO_WIRING_COMMERCIAL} className="hover:text-amber-500 transition-colors text-left">Commercial Wiring Costs</FooterLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-amber-500/30 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><FooterLink targetPage={Page.SEO_ELEC_INSTALL} className="hover:text-amber-500 transition-colors text-left flex items-center group"><Icons.Zap className="h-4 w-4 mr-2 text-slate-600 group-hover:text-amber-500 transition-colors" /> Electrical Installation</FooterLink></li>
              <li><FooterLink targetPage={Page.SEO_ARCH_LIGHTING} className="hover:text-amber-500 transition-colors text-left flex items-center group"><Icons.Lightbulb className="h-4 w-4 mr-2 text-slate-600 group-hover:text-amber-500 transition-colors" /> Architectural Lighting</FooterLink></li>
              <li><FooterLink targetPage={Page.SEO_SOLAR} className="hover:text-amber-500 transition-colors text-left flex items-center group"><Icons.Sun className="h-4 w-4 mr-2 text-slate-600 group-hover:text-amber-500 transition-colors" /> Solar Systems</FooterLink></li>
              <li><FooterLink targetPage={Page.SEO_CCTV} className="hover:text-amber-500 transition-colors text-left flex items-center group"><Icons.Camera className="h-4 w-4 mr-2 text-slate-600 group-hover:text-amber-500 transition-colors" /> CCTV & Security</FooterLink></li>
              <li><FooterLink targetPage={Page.SEO_SMART_HOME} className="hover:text-amber-500 transition-colors text-left flex items-center group"><Icons.Home className="h-4 w-4 mr-2 text-slate-600 group-hover:text-amber-500 transition-colors" /> Smart Home Automation</FooterLink></li>
              <li><FooterLink targetPage={Page.SEO_COMMERCIAL} className="hover:text-amber-500 transition-colors text-left flex items-center group"><Icons.Briefcase className="h-4 w-4 mr-2 text-slate-600 group-hover:text-amber-500 transition-colors" /> Commercial Electrical</FooterLink></li>
              <li><FooterLink targetPage={Page.SEO_MAINTENANCE} className="hover:text-amber-500 transition-colors text-left flex items-center group"><Icons.Wrench className="h-4 w-4 mr-2 text-slate-600 group-hover:text-amber-500 transition-colors" /> Electrical Maintenance</FooterLink></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-amber-500/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start">
                <Icons.MapPin className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                <div className="flex flex-col">
                  <span>Kampala, Uganda</span>
                  <a href="https://share.google/E96jop0cWTPymqOjE" target="_blank" rel="noreferrer" className="text-xs text-amber-500 hover:underline mt-1">View on Google Maps</a>
                </div>
              </li>
              <li className="flex items-center">
                <Icons.Phone className="h-5 w-5 text-amber-500 mr-3" />
                <div className="flex flex-col">
                  <a href="tel:+256751473830" className="hover:text-amber-500 transition-colors font-bold text-base text-slate-200">+256 751 473 830</a>
                </div>
              </li>
              <li className="flex items-center">
                <Icons.MessageCircle className="h-5 w-5 text-green-500 mr-3" />
                <a href="https://wa.me/256751473830" target="_blank" rel="noreferrer" className="hover:text-green-400 transition-colors text-green-500 font-semibold">Message on WhatsApp</a>
              </li>
              <li className="flex items-center">
                <Icons.Mail className="h-5 w-5 text-amber-500 mr-3" />
                <a href="mailto:dynawattengineering@gmail.com" className="hover:text-amber-500 transition-colors">dynawattengineering@gmail.com</a>
              </li>
              <li className="flex items-center pt-2">
                <Icons.CheckCircle className="h-5 w-5 text-slate-500 mr-3" />
                <span className="text-slate-300">Mon - Sat: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
          <p className="cursor-default select-none hover:text-slate-300 transition mb-2 md:mb-0">
            © {new Date().getFullYear()} DYNAWATT ENGINEERING. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <FooterLink targetPage={Page.GUARANTEE} className="hover:text-slate-300 transition-colors">Service Guarantee</FooterLink>
            <FooterLink targetPage={Page.PRIVACY_POLICY} className="hover:text-slate-300 transition-colors">Privacy Policy</FooterLink>
            <FooterLink targetPage={Page.TERMS_OF_SERVICE} className="hover:text-slate-300 transition-colors">Terms of Service</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
