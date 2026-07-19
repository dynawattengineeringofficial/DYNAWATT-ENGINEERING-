import { Icons } from '../components/AppIcons';
import { Page } from '../types';

export const seoLocationPagesData = {
  KAMPALA: {
    seoTitle: "Electrical Installation Services in Kampala | Dynawatt Engineering",
    metaDesc: "Professional electrical installation and architectural lighting in Kampala. Fast response, licensed electricians for residential and commercial projects.",
    headline: "Electrical Installation Services in Kampala",
    heroImage: "/electrical-engineering-kampala.jpg",
    description: "Dynawatt Engineering provides top-tier electrical installation and architectural lighting services throughout Kampala. From the city center to residential suburbs like Ntinda, Kololo, Muyenga, and Kira, our licensed electricians are ready to handle your project with professionalism and safety.",
    sections: [
      {
        title: "Residential Electrical Installation",
        items: ["House wiring and rewiring", "Smart home automation", "Backup power and solar", "Aluminum profile lighting", "Security and CCTV integration"],
        icon: <Icons.Home />
      },
      {
        title: "Commercial & Office Electricals",
        items: ["Office network and power wiring", "Architectural and ambient lighting", "Three-phase installations", "Generator connections", "Energy efficiency setups"],
        icon: <Icons.LayoutDashboard />
      },
      {
        title: "Fast Local Response",
        items: ["Emergency electrical troubleshooting", "Yaka meter troubleshooting", "Rapid fault detection", "24/7 support availability"],
        icon: <Icons.Zap />
      }
    ],
    whyChooseTitle: "Why Choose Us in Kampala?",
    whyChoose: ["Based in Kampala for fast response", "Experienced with local Umeme grids", "Licensed and insured execution", "Premium materials and supply"],
    faqs: [
      { q: "How fast can you respond to an emergency in Kampala?", a: "We aim to dispatch an electrician within hours for urgent faults in the greater Kampala area." },
      { q: "Do you install smart home systems in Kampala?", a: "Yes, we install modern smart home automations and architectural lighting for residential properties." }
    ],
    internalLinks: [
      { text: "Need modern lighting for your Kampala property?", linkText: "View Architectural Lighting", page: Page.SEO_ARCH_LIGHTING },
      { text: "Tired of load shedding in the city?", linkText: "Explore our Solar Solutions", page: Page.SEO_SOLAR }
    ],
    cta: "Need a professional electrician in Kampala? Contact Dynawatt Engineering today for a free quote."
  },
  ENTEBBE: {
    seoTitle: "Electrical Installation Services in Entebbe | Dynawatt Engineering",
    metaDesc: "Trusted electrical installation and solar services in Entebbe. Reliable electricians for homes, hotels, and businesses in Entebbe and surrounding areas.",
    headline: "Electrical Installation Services in Entebbe",
    heroImage: "/modern-residential-lighting-salaama-kampala.jpg",
    description: "Dynawatt Engineering offers expert electrical installation, smart home automation, and solar systems tailored for homes, hotels, and commercial spaces in Entebbe. We ensure safe, reliable, and visually stunning electrical setups for properties near the lake and across the peninsula.",
    sections: [
      {
        title: "Hotel & Hospitality Lighting",
        items: ["Premium architectural lighting", "Landscape and outdoor lighting", "Aluminum profile installation", "Energy-efficient hotel setups"],
        icon: <Icons.Lightbulb />
      },
      {
        title: "Residential Electrical & Solar",
        items: ["Full home electrical wiring", "Reliable solar power installations", "Backup battery systems", "CCTV and security systems"],
        icon: <Icons.Home />
      },
      {
        title: "Electrical Maintenance",
        items: ["Regular electrical inspections", "Fault diagnosis and repairs", "Electrical panel upgrades", "Safe and secure rewiring"],
        icon: <Icons.Wrench />
      }
    ],
    whyChooseTitle: "Why Choose Us in Entebbe?",
    whyChoose: ["Familiar with Entebbe's specific power needs", "Fast deployment for hotel contingencies", "Expertise in high-end architectural lighting", "Safe, durable materials for lake-climate"],
    faqs: [
      { q: "Do you provide solar installations in Entebbe?", a: "Yes, we install high-efficiency solar and backup power systems to ensure consistent power supply." },
      { q: "Can you handle electrical installations for new hotels in Entebbe?", a: "Absolutely. We specialize in hospitality and commercial electrical installations with modern lighting designs." }
    ],
    internalLinks: [
      { text: "Enhancing a hotel or Airbnb in Entebbe?", linkText: "Explore Commercial Lighting", page: Page.SEO_COMMERCIAL },
      { text: "Need full-time surveillance for your property?", linkText: "View our CCTV Systems", page: Page.SEO_CCTV }
    ],
    cta: "Looking for reliable electricians in Entebbe? Contact Dynawatt Engineering today."
  },
  WAKISO: {
    seoTitle: "Solar Installation & Certified Electrical Services in Wakiso | Dynawatt Engineering",
    metaDesc: "ERA-licensed solar installations, residential hybrid backup grids, and certified electrical wiring in Wakiso District. See our school electrical & storm protection projects.",
    headline: "Solar & Electrical Installation Services in Wakiso",
    heroImage: "/complete-house-wiring-biira-wakiso.webp",
    description: "Dynawatt Engineering is the premier provider of high-efficiency solar power systems and BS 7671 compliant electrical installations throughout Wakiso District. We design and deploy advanced off-grid and hybrid solar grids for luxury domestic residences in areas like Biira and Nsangi. In addition, we execute robust institutional contracts, such as complete campus-wide electrical wiring and high-performance lightning protection grids for leading schools in Kawuku, keeping both families and critical institutions safe and fully powered.",
    sections: [
      {
        title: "High-Efficiency Solar Solutions",
        items: [
          "Complete design and execution of hybrid, off-grid, and grid-tie solar systems for residential homes",
          "Advanced lithium-ion and gel battery banks paired with intelligent hybrid inverters (Risen setup)",
          "High-yield monocrystalline solar panel arrays with rugged weather-proof aluminum mountings",
          "Professional load-shedding contingency grids for high-end domestic properties"
        ],
        icon: <Icons.Sun />
      },
      {
        title: "Kawuku School Electrical & Protection",
        items: [
          "Classroom block electrical wiring installation for the new block at Broader Vision Primary School",
          "Early Streamer Emission (ESE) active lightning protection system with deep, low-impedance copper earthing",
          "Executed safely under sub-contract to protect administrative computers, campus structures, and pupils",
          "Rigorous grounding audits verifying sub-10 ohm compliance for ultimate institutional safety"
        ],
        icon: <Icons.Building2 />
      },
      {
        title: "Certified House Wiring & Earthing",
        items: [
          "Full BS 7671 compliant domestic house wiring in Biira, Wakiso, and surrounding estates",
          "Slab conduit containment, neat chasing, and premium terminal finishes",
          "Balanced three-phase consumer distribution boards with whole-house surge protective devices (SPDs)",
          "Dedicated earth rod deployments and rigorous ground resistance audits"
        ],
        icon: <Icons.Home />
      }
    ],
    whyChooseTitle: "Why Choose Dynawatt in Wakiso?",
    whyChoose: [
      "Extensive local project portfolio including Biira, Nsangi, and Kawuku",
      "ERA-licensed, safety-first electrical engineers and certified solar technicians",
      "Specialized in domestic hybrid solar systems, institutional wiring sub-contracts, and storm protection",
      "100% transparent pricing and high-durability materials sourced from trusted manufacturers"
    ],
    projectPhotos: [
      {
        url: "/wakiso_solar_roof.jpg",
        caption: "Our certified engineering team installing a high-efficiency hybrid solar panel array on a corrugated metal roof for a domestic client's home in Wakiso, complete with safety harnesses and structural aluminum mounts.",
        alt: "High-efficiency solar panel installation on roof in Wakiso"
      },
      {
        url: "/wakiso_solar_courtyard.jpg",
        caption: "Bird's-eye view of our technicians preparing solar panels on a domestic client's checker-paved patio area, pre-wiring and securing the frames before roof hoisting.",
        alt: "Solar panel courtyard preparation and pre-wiring in Wakiso"
      },
      {
        url: "/wakiso_solar_tools.jpg",
        caption: "Professional electrical technician preparing heavy-duty solar cabling alongside organized professional toolsets and testing equipment at our domestic home installation site in Wakiso.",
        alt: "Technician preparing cabling with professional toolsets in Wakiso"
      },
      {
        url: "/wakiso_inverter_room.jpg",
        caption: "Inside our specialized utility closet setup for a residential home, showing our technician installing and wiring state-of-the-art wall-mounted Risen hybrid inverters and surge protective controls.",
        alt: "Hybrid inverter and control panel closet installation in Wakiso"
      },
      {
        url: "/wakiso_lightning_school.jpg",
        caption: "Installing heavy-duty copper down-conductors and lightning protection tape on wooden scaffolding for the new classroom block at Broader Vision Primary School in Kawuku, Wakiso District.",
        alt: "Lightning protection system installation on school building in Kawuku Wakiso"
      }
    ],
    faqs: [
      { q: "What key solar projects has Dynawatt executed in Wakiso?", a: "We design and install high-yield hybrid solar systems and smart battery storage setups for premium domestic and residential properties across Wakiso. These systems utilize advanced Risen hybrid inverters and monocrystalline panel arrays to keep homes completely immune to grid load-shedding." },
      { q: "Did you work on Broader Vision Primary School in Kawuku?", a: "Yes. Dynawatt Engineering was sub-contracted to design and install a comprehensive institutional electrical wiring system and a certified Early Streamer Emission (ESE) lightning protection system for the new classroom block at Broader Vision Primary School in Kawuku, Wakiso District. This project ensures complete structural protection and electrical safety for classrooms and computer labs during severe storms." },
      { q: "What safety standards do you follow for home wiring?", a: "All our residential wiring projects—such as the complete house wiring we executed in Biira, Wakiso—are designed and certified strictly according to British Standard BS 7671, incorporating proper earth grounding and surge protective devices (SPDs)." }
    ],
    internalLinks: [
      { text: "Building a new home in Wakiso?", linkText: "See our Electrical Installation Services", page: Page.SEO_ELEC_INSTALL },
      { text: "Concerned about storm safety?", linkText: "Learn about Lightning Protection Systems", page: Page.SEO_LIGHTNING_PROTECTION }
    ],
    cta: "Planning a solar, electrical, or lightning protection project in Wakiso? Contact Dynawatt Engineering for a site audit today."
  },
  KOLOLO: {
    seoTitle: "Luxury Electrical & Lighting in Kololo | Dynawatt Engineering",
    metaDesc: "Premium electrical installation, smart home automation, and architectural lighting services for luxury homes and businesses in Kololo, Kampala.",
    headline: "Premium Electrical Services in Kololo",
    heroImage: "/luxury-staircase-lighting.jpg",
    description: "Dynawatt Engineering provides bespoke electrical services, architectural lighting, and smart home automation for high-end residential and commercial properties in Kololo. We understand the specific demands of luxury real estate and deliver flawless engineering.",
    sections: [
      {
        title: "Architectural Lighting",
        items: ["Aluminum profile lighting", "Floating staircases", "Luxury chandeliers", "Art & gallery lighting"],
        icon: <Icons.Lightbulb />
      },
      {
        title: "Smart Home Automation",
        items: ["Comprehensive smart control", "Security integration", "Climate control wiring", "Secure network cabling"],
        icon: <Icons.Shield />
      },
      {
        title: "Premium Installations",
        items: ["Silent backup generators", "High-efficiency solar", "3-phase robust distribution", "Hidden wiring systems"],
        icon: <Icons.Zap />
      }
    ],
    whyChooseTitle: "Why Choose Us for Kololo Properties?",
    whyChoose: ["Experience with luxury finishes", "Discreet and clean operations", "Advanced smart home expertise", "Uncompromised safety standards"],
    faqs: [
      { q: "Do you install smart lighting in Kololo?", a: "Yes, we specialize in high-end architectural lighting and smart home systems for luxury properties." },
      { q: "Can you upgrade electricals in older Kololo homes?", a: "Absolutely, we are experts in rewiring and modernizing older homes to meet contemporary luxury standards." }
    ],
    internalLinks: [
      { text: "Upgrading your lighting?", linkText: "Explore Architectural Lighting", page: Page.SEO_ARCH_LIGHTING },
      { text: "Need modern security?", linkText: "View Smart Home Solutions", page: Page.SEO_SMART_HOME }
    ],
    cta: "Require premium electrical services in Kololo? Contact Dynawatt Engineering today."
  },
  KIRA: {
    seoTitle: "Electrical Installation Services in Kira | Dynawatt Engineering",
    metaDesc: "Reliable electrical installation, solar power, and home wiring services for new builds and residences in Kira and Najjera areas.",
    headline: "Electrical Installation Services in Kira",
    heroImage: "/hybrid-solar-installation-kira-wakiso.jpg",
    description: "Dynawatt Engineering is the trusted partner for new homeowners and developers in Kira. We provide complete electrical installations, solar integrations, and smart security systems tailored for the rapidly growing neighborhoods of Kira and its surroundings.",
    sections: [
      {
        title: "Complete Home Wiring",
        items: ["New build wiring", "Yaka meter setups", "Main distribution boards", "Safe socket placing"],
        icon: <Icons.Home />
      },
      {
        title: "Solar & Backup Power",
        items: ["Inverter installations", "Battery backup systems", "Solar panel mounting", "Load shedding solutions"],
        icon: <Icons.Sun />
      },
      {
        title: "Security & CCTV",
        items: ["Automated gates wiring", "Perimeter security lighting", "CCTV camera networks", "Video intercoms"],
        icon: <Icons.Shield />
      }
    ],
    whyChooseTitle: "Why Choose Our Services in Kira?",
    whyChoose: ["Specialists in new residential builds", "Fast and reliable execution", "Warranty on installations", "Transparent project pricing"],
    faqs: [
      { q: "Do you help with Yaka meter installations in Kira?", a: "Yes, we handle the complete wiring and proper integration of Yaka meters for new builds." },
      { q: "Can you install a solar backup system?", a: "Definitely. We design and install reliable solar systems to counter power blackouts." }
    ],
    internalLinks: [
      { text: "Building a new home?", linkText: "View our Electrical Installation Services", page: Page.SEO_ELEC_INSTALL },
      { text: "Want to secure your property?", linkText: "Check out CCTV Systems", page: Page.SEO_CCTV }
    ],
    cta: "Planning a project in Kira? Contact Dynawatt Engineering for professional electrical services."
  },
  NAJJERA: {
    seoTitle: "Electrical Installation & Solar in Najjera | Dynawatt Engineering",
    metaDesc: "Expert electricians providing residential wiring, solar backups, and smart security installations in Najjera. Fast response and guaranteed quality.",
    headline: "Electrical Installation Services in Najjera",
    heroImage: "/exterior-architectural-lighting-kitukutwe.jpg",
    description: "Dynawatt Engineering delivers modern electrical installations, reliable solar power, and smart security solutions for homes and apartments in Najjera. We ensure your property is safe, energy-efficient, and beautifully illuminated.",
    sections: [
      {
        title: "Apartment & Home Wiring",
        items: ["Comprehensive electrical wiring", "Renovation upgrades", "Safe and neat finishing", "Appliance setup"],
        icon: <Icons.Zap />
      },
      {
        title: "Modern Lighting",
        items: ["Interior ambient lighting", "Exterior and garden lights", "Energy-saving LED setups", "Profile lighting for living rooms"],
        icon: <Icons.Lightbulb />
      },
      {
        title: "Power Backup Solutions",
        items: ["Affordable inverter setups", "Solar water heaters", "UPS for home offices", "Reliable battery banks"],
        icon: <Icons.Sun />
      }
    ],
    whyChooseTitle: "Why Najjera Residents Trust Us",
    whyChoose: ["Quick local response time", "Modern smart home knowledge", "Clean and safe installations", "Dedicated maintenance team"],
    faqs: [
      { q: "Can you fix frequent power tripping?", a: "Yes, our electricians can troubleshoot and resolve frequent breaker tripping issues safely." },
      { q: "Do you install modern LED profile lighting?", a: "Yes, we specialize in high-quality aluminum profile lighting for a modern look." }
    ],
    internalLinks: [
      { text: "Need modern lighting?", linkText: "View our Lighting Services", page: Page.SEO_PROFILE_LIGHTING },
      { text: "Looking for power backup?", linkText: "Explore our Solar Solutions", page: Page.SEO_SOLAR }
    ],
    cta: "Need an expert electrician in Najjera? Contact Dynawatt Engineering today."
  },
  MUKONO: {
    seoTitle: "Solar, Electrical Installation & Lightning Protection in Mukono & Seeta | Dynawatt Engineering",
    metaDesc: "ERA-licensed solar installations, certified ESE lightning arrestors, and house wiring in Mukono, Seeta, and Nakweero. On-site school portfolio and free quotations.",
    headline: "Solar, Electrical & Lightning Protection in Mukono & Seeta",
    heroImage: "/solar-installation-services-kampala.jpg",
    description: "Dynawatt Engineering is the leading provider of certified solar energy systems, modern electrical wiring, and early streamer emission (ESE) lightning protection in Mukono and Seeta. We serve residential estates, commercial establishments, and major institutions like school campuses, designing high-performing energy grids that eliminate load-shedding and safeguard against severe storms.",
    sections: [
      {
        title: "School & Institutional Solar",
        items: [
          "Complete design and installation of large-scale hybrid solar systems for boarding schools and institutes",
          "Seamless backup power for computer labs, dormitories, security lighting, and school administration",
          "Dramatically reduced monthly grid utility bills with automated solar prioritizing",
          "Complete storm lightning protection integration for elevated institutional buildings"
        ],
        icon: <Icons.Home />
      },
      {
        title: "Residential Hybrid Solar",
        items: [
          "Bespoke solar load sizing and shading audits for properties in Mukono, Seeta, and Nakweero",
          "Tier-1 monocrystalline panels paired with high-performance hybrid inverters",
          "Premium lithium iron phosphate (LiFePO4) battery storage for maximal life cycles",
          "Professional weather-sealed roof mounting systems"
        ],
        icon: <Icons.Sun />
      },
      {
        title: "Lightning & Surge Protection",
        items: [
          "Certified Earthing and Early Streamer Emission (ESE) lightning arrestor setups in Seeta and Mukono",
          "Whole-house voltage surge protectors (SPDs) built into distribution boards",
          "National building safety code and BS 7671 standards compliance",
          "Digital earth tester resistance measurements verified below 5 ohms"
        ],
        icon: <Icons.Zap />
      }
    ],
    whyChooseTitle: "Why Choose Dynawatt in Mukono & Seeta?",
    whyChoose: [
      "Extensive school and residential project portfolio across Mukono and Seeta",
      "ERA-licensed engineering team specializing in hybrid solar systems",
      "Same-week site visits and quick upcountry logistics deployment",
      "Full compliance with national building electrical safety regulations"
    ],
    projectPhoto: "/house-wiring-slab-piping-mukono.webp",
    projectPhotoCaption: "Dynawatt Engineering team laying robust electrical slab piping and structural grounding conduit routes in Mukono.",
    projectPhotos: [
      {
        url: "/mukono_school_panels.jpg",
        caption: "Tier-1 monocrystalline solar panels mounted securely on metal structures for Eagle's Eye Christian Junior School in Mukono.",
        alt: "Solar panels installation on metal frames in Mukono"
      },
      {
        url: "/mukono_hybrid_inverter.jpg",
        caption: "High-grade battery room setup featuring a Deye hybrid solar inverter and a high-cycle SUMRY lithium backup battery.",
        alt: "Deye solar inverter and SUMRY lithium battery installation"
      },
      {
        url: "/mukono_school_roof_solar.jpg",
        caption: "Rooftop solar panel array layout installed on the school's colorful main building to secure 100% blackout protection.",
        alt: "Rooftop solar installation at Eagle's Eye School"
      },
      {
        url: "/mukono_school_compound.jpg",
        caption: "The beautifully illuminated, modern campus of Eagle's Eye Christian Junior School in Mukono, fully backed by Dynawatt solar.",
        alt: "Eagle's Eye Christian Junior School campus"
      }
    ],
    faqs: [
      { q: "How fast can you run a solar site assessment in Mukono?", a: "Our engineering crew can schedule a site survey within 48 hours for Mukono, Seeta, and Nakweero (subject to a small refundable facilitation fee)." },
      { q: "Do you install lightning arrestors on existing buildings?", a: "Yes, we install early streamer emission lightning protection rods and structural earthing systems for both new builds and completed properties in Seeta and Mukono." }
    ],
    internalLinks: [
      { text: "Tired of load shedding in Mukono?", linkText: "Explore Our Solar Packages", page: Page.SOLAR },
      { text: "Need modern lighting or ceiling work?", linkText: "View Architectural Lighting", page: Page.SEO_ARCH_LIGHTING }
    ],
    cta: "Get a free quotation for your Mukono project today. On-site assessments carry a small refundable fee, fully credited to your invoice once you proceed."
  },
  HOIMA: {
    seoTitle: "Electrical Installation, Custom House Wiring & Architectural Lighting in Hoima | Dynawatt Engineering",
    metaDesc: "Certified domestic wiring, three-phase commercial installations, under-stair LED profiling, and smart decorative lighting in Hoima. ERA-licensed master electricians.",
    headline: "Electrical Wiring & Architectural Lighting in Hoima",
    heroImage: "/hoima_ribbon_chandelier.jpg",
    description: "Dynawatt Engineering is the leading provider of certified residential and commercial electrical installations, custom house wiring, and high-end architectural lighting in Hoima City. We deploy fully equipped mobile execution crews to deliver code-compliant installations built for lifelong durability, safety, and modern elegance.",
    sections: [
      {
        title: "Premium House Wiring & Conduit Piping",
        items: [
          "Conduit piping layout on concrete slabs, robust earth grounding, and wall chasing for secure cable routes",
          "Single and 3-phase commercial and residential power distribution board design and installations",
          "Strict alignment with BS 7671 electrical safety standards to guarantee ultimate fire protection",
          "Premium, flame-retardant copper wiring and robust circuit breakers"
        ],
        icon: <Icons.Home />
      },
      {
        title: "Architectural & LED Profile Lighting",
        items: [
          "Warm LED profile strips recessed under floating wooden staircases and staircase walls",
          "Swirling double-height architectural ribbon chandeliers for grand lobby entrances",
          "Outdoor wicker and woven patio lanterns creating beautiful radial lighting shadows",
          "Smart lighting controllers, ambient dimmers, and motion-activated sensor paths"
        ],
        icon: <Icons.Lightbulb />
      },
      {
        title: "Voltage Protection & Home Backup",
        items: [
          "Premium surge protection devices (SPDs) safeguarding high-end appliances from grid spikes",
          "Certified earthing systems and lightning arrestors for storm-prone high-altitude properties",
          "Automatic transfer switches (ATS) that transition cleanly to backup power without flickering",
          "Clean integration with silent hybrid inverter setups to overcome grid instability"
        ],
        icon: <Icons.Zap />
      }
    ],
    whyChooseTitle: "Why Hoima Builders Choose Dynawatt",
    whyChoose: [
      "ERA-licensed, certified master electricians specializing in high-end finishes",
      "Expertise in complex architectural light fixtures and under-stair LED profiling",
      "On-site material testing and comprehensive safety compliance checks",
      "Transparent pricing with clear material lists and flat-rate labor estimates"
    ],
    projectPhoto: "/hoima_wiring_work.jpg",
    projectPhotoCaption: "Our certified electrician mounting custom light fixtures and setting precise level lines in Hoima.",
    projectPhotos: [
      {
        url: "/hoima_wiring_work.jpg",
        caption: "Our certified electrical technician in a green and yellow reflective uniform installing a modern wall-mounted light fixture on a staircase wall, using a spirit level for perfect alignment.",
        alt: "Electrician using spirit level to align a wall sconce in Hoima"
      },
      {
        url: "/hoima_patio_lantern.jpg",
        caption: "A bespoke hand-woven wicker/rattan dome lantern casting gorgeous, high-contrast radial striped shadow patterns on an outdoor concrete terrace at night.",
        alt: "Outdoor wicker dome patio lantern casting radial shadows in Hoima"
      },
      {
        url: "/hoima_retro_lamp.jpg",
        caption: "Our expert master electrician with a red towel over his shoulder installing a custom, rustic wooden ship-wheel themed wall lantern with a glowing Edison bulb.",
        alt: "Electrician installing retro ship-wheel themed wall lamp in Hoima"
      },
      {
        url: "/hoima_ribbon_chandelier.jpg",
        caption: "An ultra-modern, custom swirling white LED ribbon chandelier ceiling installation hanging beautifully in a double-height staircase lobby.",
        alt: "Modern swirling LED ribbon chandelier installation in Hoima"
      },
      {
        url: "/hoima_staircase_led.jpg",
        caption: "Our specialized electrical technician working underneath a floating wooden staircase to wire and secure custom warm white LED profile strips beneath the steps.",
        alt: "Technician wiring LED profile light strips under a floating wooden staircase in Hoima"
      },
      {
        url: "/hoima_staircase_complete.jpg",
        caption: "A completed modern floating wooden staircase with a sleek glass balustrade, showing the brilliant warm white LED glow underneath each step and temporary installation tools and boxes on the polished light gray tiled floor.",
        alt: "Completed floating wooden staircase with glowing under-step LED lighting in Hoima"
      }
    ],
    faqs: [
      { q: "Do you offer professional house wiring for new buildings in Hoima?", a: "Yes, we handle complete electrical wiring from conduit laying on structural concrete slabs to cable pulling, consumer unit installation, and fixture fitting." },
      { q: "Can you design custom lighting layouts for hotels or residential villas in Hoima?", a: "Absolutely! We specialize in modern architectural lighting, including hidden LED profile runs, floating staircase under-glow, motion-activated common area lighting, and outdoor decorative fixtures." },
      { q: "Do you also install solar energy systems in Hoima?", a: "Yes, while our primary focus in Hoima municipality is on premium wiring and architectural lighting, our mobile crew also designs and installs hybrid solar back-up grids and agricultural solar water pumps upon request." },
      { q: "What electrical codes do you comply with?", a: "Every installation we execute is compliant with the British Standard BS 7671 (IEE Wiring Regulations) and national regulatory codes, ensuring complete safety and durability." }
    ],
    internalLinks: [
      { text: "Planning electrical wiring for your new home?", linkText: "View Wiring Estimator", page: Page.SEO_HOUSE_WIRING_COST },
      { text: "Interested in sustainable energy?", linkText: "Explore Solar Packages", page: Page.SOLAR }
    ],
    cta: "Get a free quotation for your Hoima project today. On-site assessments carry a small refundable fee, fully credited to your invoice once you proceed."
  },
  LIRA: {
    seoTitle: "Electrical Installation & Wiring in Lira | Dynawatt Engineering",
    metaDesc: "Domestic wiring and electrical installation services in Lira City. Certified electricians for premium villa builds and commercial properties.",
    headline: "Electrical Installation Services in Lira",
    heroImage: "/electrical-engineering-kampala.jpg",
    description: "Dynawatt Engineering delivers certified electrical installation and domestic house wiring services in Lira as part of our Northern Uganda upcountry coverage. Sourcing certified materials and deploying licensed engineers, we eliminate local shortcut risks to deliver BS 7671 compliant power grids.",
    sections: [
      {
        title: "Premium 4-Bedroom Villa wiring",
        items: [
          "Complete domestic electrical wiring of a modern 4-bedroom villa in Lira City",
          "Installation of a balanced three-phase distribution board for safe power loads",
          "Bespoke integration of architectural profile lighting for living rooms and exterior paths",
          "BS 7671 British safety standard compliance and national inspections"
        ],
        icon: <Icons.Home />
      },
      {
        title: "Commercial Power Grids",
        items: [
          "Industrial unit and retail shop power infrastructure setups in Lira",
          "Automatic changeover switches for reliable backup generator integration",
          "Commercial network cabling, server racks, and security lighting wiring",
          "Power factor correction and electrical load auditing"
        ],
        icon: <Icons.Briefcase />
      },
      {
        title: "Fault Detection & Upgrades",
        items: [
          "Deep-circuit diagnostic checks and rapid tracing of hidden ground faults",
          "Safe replacement of substandard wires in older commercial spaces",
          "Installation of high-capacity lightning and grid surge protectors (SPDs)",
          "Re-engineering earthing networks to reduce shock hazards"
        ],
        icon: <Icons.Wrench />
      }
    ],
    whyChooseTitle: "Why Lira Clients Trust Dynawatt",
    whyChoose: [
      "ERA-licensed engineers managing logistics and safety strictly",
      "Complete elimination of unvetted local labor hazards and substandard wires",
      "Full compliance with international standard wiring colors and gauges",
      "Certified testing protocols utilizing digital insulation and loop testers"
    ],
    projectPhoto: "/electrical-engineering-kampala.jpg",
    projectPhotoCaption: "Dynawatt certified electrician completing three-phase consumer board wiring and safe terminations.",
    faqs: [
      { q: "Have you completed residential house wiring in Lira?", a: "Yes, we completed the complete electrical wiring, three-phase distribution board setup, and surge protection for a modern 4-bedroom villa in Lira City." },
      { q: "Can you upgrade electrical panels on commercial properties in Lira?", a: "Absolutely. We diagnose outdated panels, wire modern breakers, and integrate surge protective devices for commercial properties across Lira." }
    ],
    internalLinks: [
      { text: "Planning to wire your house in Lira?", linkText: "Read Our House Wiring Cost Guide", page: Page.SEO_HOUSE_WIRING_COST },
      { text: "Interested in backup solar for upcountry outages?", linkText: "Explore Our Solar Packages", page: Page.SOLAR }
    ],
    cta: "Get a free quotation for your Lira project today. On-site assessments carry a small refundable fee, fully credited to your invoice once you proceed."
  },
  GULU: {
    seoTitle: "Electrical Installation & Slab Piping in Gulu | Dynawatt Engineering",
    metaDesc: "BS 7671 certified house wiring and slab piping services in Gulu City. Professional electricians for apartment blocks and residential estates.",
    headline: "Electrical Installation Services in Gulu",
    heroImage: "/complete-house-wiring-biira-wakiso.webp",
    description: "Dynawatt Engineering brings high-standard electrical installation and structural conduit piping to Gulu City and Northern Uganda. Sourcing high-quality wires and accessories directly from trusted manufacturers, we deliver durable systems that safeguard your investment from electrical fires.",
    sections: [
      {
        title: "Rental Block Installation",
        items: [
          "Full conduit slab piping and electrical wiring of a dual-apartment rental block in Gulu City",
          "Neat installation of independent, tamper-proof Yaka meters per tenant unit",
          "Strategic placement of energy-saving LED lightings and high-durability sockets",
          "Proper equipotential earthing and grounding grids"
        ],
        icon: <Icons.Home />
      },
      {
        title: "Slab Conduit Works",
        items: [
          "Rigid PVC conduit layout on concrete slabs before structural pouring",
          "Strategic junction box planning to guarantee hassle-free wire drawing",
          "Compliance with National Building Code thickness and routing safety",
          "Experienced supervision by certified on-site electrical engineers"
        ],
        icon: <Icons.Zap />
      },
      {
        title: "System Earthing & Safety",
        items: [
          "Deep-driven copper-clad earth electrode installation for Gulu homes",
          "Detailed ground resistance testing with digital Earth loop testers",
          "Installation of main switchgears, circuit breakers, and RCD protection",
          "Comprehensive safety checks before final grid connections"
        ],
        icon: <Icons.Shield />
      }
    ],
    whyChooseTitle: "Why Gulu Clients Choose Dynawatt",
    whyChoose: [
      "Rigid adherence to BS 7671 and national safety regulations upcountry",
      "Proven track record on residential and rental block installations in Gulu City",
      "No shortcut local labor; professional, licensed, and highly disciplined teams",
      "Durable, flame-retardant PVC conduits and pure copper cabling utilized exclusively"
    ],
    projectPhoto: "/complete-house-wiring-biira-wakiso.webp",
    projectPhotoCaption: "Pristine, labeled distribution board wired for safe residential occupancy by Dynawatt.",
    faqs: [
      { q: "What projects have you completed in Gulu?", a: "We successfully completed the comprehensive electrical wiring, slab conduit piping, and independent Yaka meter boards for a dual-apartment rental block in Gulu City." },
      { q: "Can you help with slab conduit planning for new properties?", a: "Yes, we specialize in high-precision conduit piping layouts on concrete slabs before the builders pour cement, ensuring ideal wire passages." }
    ],
    internalLinks: [
      { text: "Need guidance on house wiring budgets?", linkText: "View Our Domestic Wiring Cost Guide", page: Page.SEO_HOUSE_WIRING_COST },
      { text: "Want to secure your Gulu property with smart security?", linkText: "View CCTV Systems", page: Page.SEO_CCTV }
    ],
    cta: "Get a free quotation for your Gulu project today. On-site assessments carry a small refundable fee, fully credited to your invoice once you proceed."
  },
  KIBOGA: {
    seoTitle: "Hotel Lighting & Electrical in Kiboga | Dynawatt Engineering",
    metaDesc: "Electrical installation and hotel lighting systems in Kiboga, Uganda. See our work at Silverline Ssingo Country Hotel. Certified engineers.",
    headline: "Lighting & Electrical Installation Services in Kiboga",
    heroImage: "/luxury-staircase-lighting.jpg",
    description: "Dynawatt Engineering delivers bespoke commercial lighting design, three-phase power distribution, and complete electrical installations in Kiboga. We specialize in elevating hospitality venues and hotels, integrating functional power infrastructure with state-of-the-art aesthetic lighting.",
    sections: [
      {
        title: "Silverline Ssingo Country Hotel",
        items: [
          "Complete electrical wiring and architectural lighting design for Silverline Ssingo Country Hotel in Kiboga",
          "Successful installation across 21 guest rooms, dining halls, and administration sectors",
          "Striking custom lobby chandelier installation and warm-profile LED ceiling designs",
          "Balanced three-phase main switchboard wiring to prevent load fluctuations"
        ],
        icon: <Icons.Lightbulb />
      },
      {
        title: "Hospitality & Landscape Lighting",
        items: [
          "Ambient interior profile lighting for hotel restaurants and bar areas",
          "Weatherproof, durable exterior landscape and garden lighting for guest paths",
          "Energy-saving commercial LED configurations with automatic solar controls",
          "Emergency lighting systems with intelligent power backup pathways"
        ],
        icon: <Icons.Sun />
      },
      {
        title: "Commercial Power & Backup",
        items: [
          "Design and layout of high-capacity commercial distribution networks",
          "Automatic transfer switch (ATS) setups for back-up power generators",
          "Stable solar energy integration for commercial hotel backup systems",
          "Safe and certified cable sizing to eliminate overheating fire risks"
        ],
        icon: <Icons.Zap />
      }
    ],
    whyChooseTitle: "Why Kiboga Properties Choose Dynawatt",
    whyChoose: [
      "Proven commercial and hotel electrical portfolio with a major local hotel showcase",
      "Aesthetic lighting designers who understand hospitality ambiance and visual lux",
      "ERA-licensed, certified engineers with complete logistical upcountry capacity",
      "Strictest standards of safety compliance, safeguarding commercial assets"
    ],
    projectPhoto: "/luxury-staircase-lighting.jpg",
    projectPhotoCaption: "Architectural LED profile floating staircase and lobby lighting installed at Silverline Ssingo Country Hotel in Kiboga.",
    projectPhotos: [
      {
        url: "/kiboga_reception.jpg",
        caption: "Aesthetic wooden latticed reception desk and fluted paneling wall with warm pendant lighting at Silverline Ssingo Country Hotel.",
        alt: "Hotel reception desk and decorative lighting in Kiboga"
      },
      {
        url: "/kiboga_patio.jpg",
        caption: "Wooden beam pergola patio illuminated by elegant antique bronze wall torch sconces for cozy night walkways.",
        alt: "Hotel patio pergola lighting in Kiboga"
      },
      {
        url: "/kiboga_bar.jpg",
        caption: "Polished black countertop bar with modern stools, glowing under vibrant neon-blue backlit shelving and warm pendant globes.",
        alt: "Hotel bar counter with neon LED backlighting in Kiboga"
      },
      {
        url: "/kiboga_dining.jpg",
        caption: "Bespoke hospitality dining space featuring a full wildlife mural wall of elephants and buffaloes under circular light rings.",
        alt: "Hotel restaurant dining room with decorative chandelier in Kiboga"
      },
      {
        url: "/kiboga_chandelier.jpg",
        caption: "Stunning tear-drop crystal chandelier refracting warm sparkling light in the hotel lobby lounge.",
        alt: "Bespoke crystal lobby chandelier installation in Kiboga"
      }
    ],
    faqs: [
      { q: "What major project did you execute in Kiboga?", a: "We executed the complete electrical wiring, three-phase distribution, and modern hotel lighting systems at Silverline Ssingo Country Hotel in Kiboga (including 21 guest rooms and lobby/restaurant spaces)." },
      { q: "Do you design exterior garden and path lighting for lodges?", a: "Yes, we specialize in high-durability, weatherproof landscape lighting to enhance safety and visual appeal for hotel properties." }
    ],
    internalLinks: [
      { text: "Need custom profile lights for your lobby or home?", linkText: "Explore Profile Lighting", page: Page.SEO_PROFILE_LIGHTING },
      { text: "Require commercial-scale power solutions?", linkText: "View Our Commercial Services", page: Page.SEO_COMMERCIAL }
    ],
    cta: "Get a free quotation for your Kiboga project today. On-site assessments carry a small refundable fee, fully credited to your invoice once you proceed."
  },
  NAKWEERO: {
    seoTitle: "5kVA Hybrid Solar System Installation in Nakweero & Wakiso | Dynawatt Engineering",
    metaDesc: "Get the popular 5kVA 'Family Chosen' hybrid solar system in Nakweero & Wakiso. Standard pricing at 10,800,000 UGX. Power fridge, pump, and electronics.",
    headline: "5kVA 'Family Chosen' Hybrid Solar Installation in Nakweero",
    heroImage: "/solar-installation-services-kampala.jpg",
    description: "Dynawatt Engineering is proud to supply and install our top-rated 5kVA 'Family Chosen' Hybrid Solar System in Nakweero and throughout Wakiso District. Specially designed to meet the demands of modern suburban families, this setup offers complete freedom from grid load-shedding and reduces monthly electricity bills by up to 90% using high-grade tier-1 solar panel arrays and long-life lithium storage.",
    sections: [
      {
        title: "Recommended Loads & Performance",
        items: [
          "Full lighting (Up to 12 energy-efficient LED bulbs) — 6 hours daily use",
          "Fridge / Deep Freezer — 24/7 continuous running",
          "Entertainment (LED TV + DSTV decoder system) — 6 hours daily use",
          "Home Office / Study (2 × Laptops + Wi-Fi router) — 6 hours daily use",
          "Washing machine (Cold wash cycles) — 1 to 2 cycles",
          "Water system (Small domestic water pump) — 2 to 3 hours run time",
          "Security (Automatic gate motor & perimeter security elements)"
        ],
        icon: <Icons.Sun />
      },
      {
        title: "Pricing & Hardware Specifications",
        items: [
          "Complete Package Price: 10,800,000 UGX (10.8 Million UGX fully installed)",
          "Inverter System: 1 x 5kW Intelligent Hybrid Inverter (Risen / Deye with smart energy-prioritization software)",
          "Battery Storage: 1 x 5.12kWh 100Ah 48V Premium Lithium Iron Phosphate (LiFePO4) Battery with built-in BMS",
          "Solar Array: 6-8 x 450W Monocrystalline Half-Cell high-efficiency solar panels",
          "Includes heavy-duty aluminum mounting rails, surge protectors, AC/DC combiner boxes, and complete earthing protection"
        ],
        icon: <Icons.Zap />
      },
      {
        title: "Wakiso & Nakweero Suburb Favorite",
        items: [
          "A massive favorite across residential estates in Wakiso District due to persistent grid instability",
          "No noise, no fumes, and zero diesel costs compared to traditional generators",
          "Engineered with a high-performance battery room layout that fits cleanly in corridors or utility rooms",
          "Designed with an automatic transfer switch (ATS) for seamless transition without flickering lights"
        ],
        icon: <Icons.Star />
      }
    ],
    whyChooseTitle: "Why Choose Our Solar Services in Nakweero & Wakiso?",
    whyChoose: [
      "Mukono & Wakiso local engineering presence for rapid on-site maintenance",
      "ERA-licensed electrical engineers overseeing every installation",
      "Official 5-year hardware warranties on hybrid inverters and 10-year lithium battery life-cycle guarantees",
      "Zero-fluff upfront pricing with no hidden charges and refundable site-visit fees"
    ],
    projectPhoto: "/solar-installation-services-kampala.jpg",
    projectPhotoCaption: "Dynawatt hybrid solar installation project completed in Nakweero, Mukono district, providing clean power backup.",
    projectPhotos: [
      {
        url: "/nakweero_roof_panels.jpg",
        caption: "Dynawatt solar engineering team aligning and securing high-efficiency monocrystalline solar panels on the main roof in Nakweero.",
        alt: "Solar panels installation on roof in Nakweero"
      },
      {
        url: "/nakweero_inverter.jpg",
        caption: "A completed wall-mounted backup setup featuring a premium 5kVA hybrid inverter and high-cycle lithium storage.",
        alt: "5kVA solar inverter and lithium battery system"
      },
      {
        url: "/nakweero_roof_work.jpg",
        caption: "Two of our certified technicians carefully connecting the solar panel array wiring with high-visibility safety harnesses and multimeter testing.",
        alt: "Technicians wiring solar panels on roof in Nakweero"
      }
    ],
    faqs: [
      { q: "How long does the 5kVA 'Family Chosen' system take to install?", a: "The entire installation, including roof mounting, battery room setup, and backup circuit wiring, is completed in just 1 to 2 days by our on-site team." },
      { q: "What is the lifespan of the lithium battery in this package?", a: "The high-cycle Lithium Iron Phosphate (LiFePO4) battery we supply is rated for over 6,000 charge-discharge cycles, which translates to a lifespan of 10 to 15 years with normal daily use." },
      { q: "Is there an option to pay in installments?", a: "Yes, we offer flexible payment structures for residents in Nakweero, Mukono, and Wakiso. Please contact our team to discuss custom payment schedules." }
    ],
    internalLinks: [
      { text: "Tired of load shedding in Nakweero?", linkText: "Explore Our Solar Packages", page: Page.SOLAR },
      { text: "Need professional wiring for a new house?", linkText: "View Complete House Wiring", page: Page.SEO_HOUSE_WIRING_COST }
    ],
    cta: "Get a free quotation for your Nakweero project today. On-site assessments carry a small refundable fee, fully credited to your invoice once you proceed."
  },
  SEETA: {
    seoTitle: "Lightning Arrestor & Surge Protection in Seeta | Dynawatt Engineering",
    metaDesc: "Certified lightning arrestors, earthing systems, and voltage surge protectors in Seeta, Mukono. Protect your property from lightning strikes.",
    headline: "Lightning Arrestor & Surge Protection in Seeta",
    heroImage: "/house-wiring-slab-piping-mukono.webp",
    description: "Dynawatt Engineering is the leading provider of certified lightning arrestor systems, structural grounding, and voltage surge protection in Seeta, Mukono. We design and install high-grade protection networks to safeguard properties and expensive electronics from severe lightning strikes and power grid spikes.",
    sections: [
      {
        title: "Lightning Arrestors",
        items: [
          "Early Streamer Emission (ESE) arrestors designed for wide radius protection",
          "High-purity copper down-conductors and high-conductivity earthing rods",
          "Protection of tall residential, commercial, and institutional structures in Seeta",
          "Strict compliance with national safety codes and IEC standards"
        ],
        icon: <Icons.Shield />
      },
      {
        title: "Voltage Surge Protection",
        items: [
          "Type 1 & Type 2 surge protective devices (SPDs) built into breaker boxes",
          "Shielding household electronics from volatile grid power spikes",
          "Complete main distribution board surge integrations",
          "Safeguarding solar inverters and battery systems from grid surges"
        ],
        icon: <Icons.Zap />
      },
      {
        title: "System Grounding & Earthing",
        items: [
          "Low-resistance earth rod networks installed in chemical soil pits if necessary",
          "Equipotential bonding of all metal structures and utility rails",
          "Certified earth loop and insulation resistance testing",
          "Full diagnostics and optimization of existing grounding connections"
        ],
        icon: <Icons.Wrench />
      }
    ],
    whyChooseTitle: "Why Choose Our Protection Systems in Seeta?",
    whyChoose: [
      "Extensive experience in high-risk lightning zones in Mukono district",
      "High-purity copper down-conductors and professional earthing materials",
      "Safety certificates issued with every lightning protection project",
      "Professional testing using specialized digital Earth loop testers"
    ],
    projectPhoto: "/house-wiring-slab-piping-mukono.webp",
    projectPhotoCaption: "Early streamer emission lightning arrestor rods and earthing systems setup completed in Seeta.",
    faqs: [
      { q: "How does a lightning arrestor protect my home in Seeta?", a: "It provides a low-impedance path to intercept lightning strikes and safely guide the massive current directly into the earth, preventing structure fires and shock hazards." },
      { q: "Do you test existing grounding systems?", a: "Yes, we use digital earth testers to measure your current ground resistance and optimize it below the standard 1-5 ohms." }
    ],
    internalLinks: [
      { text: "Want to protect your solar system too?", linkText: "View Our Solar Solutions", page: Page.SOLAR },
      { text: "Building a new home in Seeta?", linkText: "Explore Home Wiring Services", page: Page.SEO_ELEC_INSTALL }
    ],
    cta: "Get a free quotation for your Seeta project today. On-site assessments carry a small refundable fee, fully credited to your invoice once you proceed."
  }
};
