
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Lead {
  id: string;
  name: string;
  phone: string;
  location: string;
  serviceType: string;
  message: string;
  date: string;
  status: 'new' | 'contacted' | 'completed';
}

export interface SiteConfig {
  emergencyMode: boolean;
  contactPhone: string;
  whatsapp: string;
  heroHeadline: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text?: string;
  videoUrl?: string;
  date: string;
}

export enum Page {
  HOME = 'home',
  ADMIN = 'admin',
  SERVICES = 'services',
  ABOUT = 'about',
  SOLAR = 'solar',
  LOCATION = 'location',
  CONTACT = 'contact',
  BLOG = 'blog',
  // SEO Pages
  SEO_ELEC_INSTALL = 'seo_elec_install',
  SEO_ARCH_LIGHTING = 'seo_arch_lighting',
  SEO_SOLAR = 'seo_solar',
  SEO_CCTV = 'seo_cctv',
  SEO_SMART_HOME = 'seo_smart_home',
  SEO_COMMERCIAL = 'seo_commercial',
  SEO_MAINTENANCE = 'seo_maintenance',
  SEO_PROFILE_LIGHTING = 'seo_profile_lighting'
}