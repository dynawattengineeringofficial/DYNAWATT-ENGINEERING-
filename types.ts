
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
  formspreeId: string;
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
  SEO_PROFILE_LIGHTING = 'seo_profile_lighting',
  // Location SEO Pages
  LOC_KAMPALA = 'loc_kampala',
  LOC_ENTEBBE = 'loc_entebbe',
  LOC_WAKISO = 'loc_wakiso',
  LOC_KOLOLO = 'loc_kololo',
  LOC_KIRA = 'loc_kira',
  LOC_NAJJERA = 'loc_najjera',
  // Educational SEO Pages
  SEO_YAKA_METER = 'seo_yaka_meter',
  SEO_HOUSE_WIRING_COST = 'seo_house_wiring_cost',
  SEO_WARM_SWITCHES = 'seo_warm_switches',
  SEO_SOLAR_MAINTENANCE = 'seo_solar_maintenance',
  SEO_BULB_BLOWOUTS = 'seo_bulb_blowouts',
  SEO_WIRING_2_BEDROOM = 'seo_wiring_2_bedroom',
  SEO_WIRING_3_BEDROOM = 'seo_wiring_3_bedroom',
  SEO_WIRING_COMMERCIAL = 'seo_wiring_commercial',
  SEO_BLOG_CCTV = 'seo_blog_cctv',
  SEO_BLOG_CONDUIT_SLAB = 'seo_blog_conduit_slab',
  GUARANTEE = 'guarantee',
  THANK_YOU = 'thank-you',
  PRIVACY_POLICY = 'privacy_policy',
  TERMS_OF_SERVICE = 'terms_of_service'
}