import { Icons } from '../components/AppIcons';
import { Page } from '../types';

export const seoEducationalPagesData = {
  YAKA_METER: {
    seoTitle: "Yaka Meter Rejecting Tokens? Troubleshooting Guide | Dynawatt Engineering",
    metaDesc: "Is your UEDCL Yaka meter rejecting tokens, displaying Error 30, or stuck in tamper mode? Learn how to troubleshoot token issues in Uganda and when to call an electrician.",
    headline: "Why Your Yaka Meter Is Rejecting Tokens & What to Do",
    description: "If your Yaka meter in Uganda is rejecting tokens, showing an error code, or stuck in tamper mode, it could be a network issue, unpaid debt, or a wiring fault. Our troubleshooting guide explains the common causes and how Dynawatt Engineering can help resolve persistent electrical faults.",
    heroImage: "/electrical-repairs-maintenance-kampala.jpg",
    midPageCallout: {
      title: "Persistent Trips or Tamper Mode?",
      description: "Our certified diagnostic engineers track down and troubleshoot the exact wiring faults or leakage currents causing your UEDCL Yaka meter to act up or refuse tokens.",
      priceText: "Yaka Diagnostic Fault-Tracing from UGX 80,000",
      ctaText: "Call +256 751 473 830",
      ctaLink: "tel:+256751473830"
    },
    sections: [
      {
        title: "Common Reasons for Token Rejection",
        items: ["Incorrect token entry", "Network communication errors", "Meter in tamper mode due to wiring faults", "Outstanding Yaka debts or UEDCL updates"],
        icon: <Icons.AlertTriangle />
      },
      {
        title: "How to Troubleshoot",
        items: ["Verify the token number and your meter number", "Check for specific error codes (e.g., Error 30)", "Reset the Customer Interface Unit (CIU)", "Contact UEDCL for remote reset codes"],
        icon: <Icons.Wrench />
      },
      {
        title: "When to Call an Electrician",
        items: ["Meter goes into tamper mode repeatedly", "You see sparks, smoke, or smell burning near the meter", "The meter trips your main breaker unexpectedly", "Rewiring the main distribution board is required"],
        icon: <Icons.Phone />,
        highlighted: true
      }
    ],
    whyChooseTitle: "Expert Fault Detection & Yaka Integration",
    whyChoose: ["Certified engineers handling UEDCL infrastructure safely", "Fast emergency response in Kampala and Wakiso", "Professional diagnostics to prevent electrical fires", "Transparent reporting for UEDCL claims if the meter is faulty"],
    faqs: [
      { q: "What does Error 30 mean on a Yaka meter?", a: "Error 30 typically indicates a communication or network error, but persistent errors might require a technician to inspect the wiring or CIU." },
      { q: "Can Dynawatt Engineering repair a damaged Yaka meter?", a: "By law, the meter belongs to UEDCL. We can troubleshoot the wiring leading to the meter and the main distribution board, but if the meter itself is faulty, we guide you on how to officially request a replacement from UEDCL." },
      { q: "How do I get my Yaka meter out of tamper mode?", a: "A Yaka meter enters Tamper mode if its cover is opened, wires are loose, or there is a serious neutral fault. To clear it, your licensed installer or UEDCL officer must generate a technical bypass clearance token. Dynawatt can inspect your house wiring first to fix the fault permanently, and then liaise with UEDCL to safely restore power." },
      { q: "Does Dynawatt handle UEDCL new connection applications?", a: "Yes! We handle new connection applications completely. We produce authorized wiring drawings, install standard copper grounding systems, perform testing, provide the formal Wiring Readiness Certificate (WRC), and process your application directly through the UEDCL portal to expedite your power meter connection." }
    ],
    internalLinks: [
      { text: "Need urgent electrical repairs?", linkText: "View our Maintenance Services", page: Page.SEO_MAINTENANCE },
      { text: "Building a new house?", linkText: "Explore our Electrical Installation", page: Page.SEO_ELEC_INSTALL }
    ],
    cta: "Experiencing continuous electrical trips or wiring faults affecting your Yaka meter? Contact Dynawatt Engineering for professional fault detection."
  },
  HOUSE_WIRING_COST: {
    seoTitle: "Cost of Wiring a House in Uganda (2026 Guide) | Dynawatt Engineering",
    metaDesc: "Discover the estimated costs for wiring a house in Uganda. Understand factors like material quality, house size, and labor, and get professional wiring from Dynawatt.",
    headline: "How Much Does It Cost to Wire a House in Uganda?",
    heroImage: "/house-wiring-slab-piping-mukono.jpg",
    description: "Wiring a house in Uganda requires absolute transparency, skilled engineering, and uncompromised material quality. At Dynawatt Engineering, we believe in providing our clients with a detailed breakdown of 2026 Uganda wiring costs. On average, standard <span data-page=\"WIRING_2_BEDROOM\" class=\"text-amber-600 font-extrabold hover:underline cursor-pointer\">2-bedroom house wiring</span> in Kampala and Wakiso ranges from UGX 2,800,000 to UGX 4,200,000 (basic vs luxury finish), while <span data-page=\"WIRING_3_BEDROOM\" class=\"text-amber-600 font-extrabold hover:underline cursor-pointer\">3-bedroom house wiring</span> ranges from UGX 4,500,000 to UGX 6,800,000.\n\nThese cost estimates encompass premium genuine cables (BBS or East African Cables), structural conduit routing, distribution board assembly, proper earthing, and professional <span data-page=\"SEO_ELEC_INSTALL\" class=\"text-amber-600 font-extrabold hover:underline cursor-pointer\">electrical installation services</span>. If you also plan to incorporate high-end <span data-page=\"SEO_PROFILE_LIGHTING\" class=\"text-amber-600 font-extrabold hover:underline cursor-pointer\">aluminum profile lighting</span>, expect pricing to scale accordingly based on linear meter layouts from our dedicated design team.",
    showWiringPricingTable: true,
    showQuoteSection: true,
    projectPhoto: "/house-wiring-slab-piping-mukono.jpg",
    projectPhotoAlt: "Dynawatt professional residential house wiring conduit slab piping in Mukono",
    projectPhotoCaption: "A verified residential slab piping and conduit routing project executed in Mukono, Uganda by the Dynawatt Engineering crew.",
    author: {
      name: "Wyclif Joshua Kitunguuzi",
      tag: "Solar PV Sizing Specialist",
      title: "Co-Founder & Lead Systems Designer",
      avatar: "/co-founder-joshua-wyclif-kitunguuzi-headshot.jpg",
      bio: "Wyclif Joshua Kitunguuzi is the Co-Founder & Lead Systems Designer at Dynawatt Engineering. He is an electrical systems design graduate with over 7 years of specialized expertise in Solar PV sizing, lithium battery load-retention calculations, smart hybrid automatic changeovers, and high-efficiency inverter networks across Kampala and surrounding regions."
    },
    sections: [
      {
        title: "Factors Affecting House Wiring Cost",
        items: ["Size and layout of the property", "Material quality (e.g., standard vs. UK standard sockets)", "Complexity of systems (Smart home vs. traditional)", "Lighting design choices (e.g., architectural profile lighting)"],
        icon: <Icons.Home />
      },
      {
        title: "Average Cost Breakdown",
        items: ["Labor costs for professional electrical engineers", "Conduits, MK boxes, and slab piping", "High-quality cables and distribution boards", "Light fittings, switches, and finishing touches"],
        icon: <Icons.Wallet />
      },
      {
        title: "Hidden Costs to Avoid",
        items: ["Using fake or counterfeit cables that burn out", "Underqualified 'fundis' requiring expensive rework later", "Lack of proper grounding causing equipment damage", "Skipping lightning arrestors on expensive properties"],
        icon: <Icons.Shield />
      }
    ],
    whyChooseTitle: "Transparent Pricing & Guaranteed Quality",
    whyChoose: ["Detailed, honest quotations with no hidden fees", "We source authentic, certified electrical materials", "3-month repair guarantee on all new residential wiring", "Engineered to international BS 7671 safety standards"],
    faqs: [
      { q: "Do you provide free site visits for a quotation?", a: "Yes, we offer 100% free site visits for residential projects in Kampala, Wakiso, Mukono, and nearby districts. Our engineers will physically survey your building, assess your load needs, and compile a comprehensive itemised Bill of Quantities (BOQ) covering materials and labour, ensuring you avoid any surprise costs on-site." },
      { q: "Can I buy my own materials for you to install?", a: "Yes, you are welcome to buy your own cables and sockets. However, we strongly recommend allowing our engineering team to inspect or handle sourcing. Counterfeit or substandard cables are highly prevalent in Ugandan hardware hubs, posing severe fire hazards. Partnering with Dynawatt ensures every cable is certified, high-grade copper with proper insulation." }
    ],
    internalLinks: [
      { text: "Ready to wire your new house?", linkText: "Learn about Complete House Wiring", page: Page.SEO_ELEC_INSTALL },
      { text: "Looking for property security?", linkText: "Add CCTV & Security Systems", page: Page.SEO_CCTV }
    ],
    cta: "Planning a construction project? Get a transparent, professional wiring quote from Dynawatt Engineering today."
  },
  WARM_SWITCHES: {
    seoTitle: "Warm Electrical Switches: Danger Signs in Your Home | Dynawatt",
    metaDesc: "A warm electrical switch is a serious fire hazard. Learn why your switches are overheating and why you need immediate electrical repair services in Uganda.",
    headline: "Warning Signs: Why Is My Electrical Switch Warm?",
    heroImage: "/electrical-repairs-maintenance-kampala.jpg",
    description: "A plug or switch that feels warm to the touch is a critical warning sign of electrical danger. If ignored, this can lead to melted sockets, property damage, or electrical fires. Dynawatt Engineering provides emergency diagnostics and repairs for overheating electrical systems in Kampala and Wakiso.",
    sections: [
      {
        title: "Causes of Warm Switches",
        items: ["Overloaded circuits drawing too much current", "Loose connections creating resistance and heat", "Faulty or counterfeit switches failing internally", "Old, deteriorated wiring requiring replacement"],
        icon: <Icons.Zap />
      },
      {
        title: "Signs of Immediate Danger",
        items: ["Switch cover is physically hot or melting", "Buzzing or crackling sounds from the switch", "Flickering lights when the switch is operated", "A distinct burning plastic or ozone smell"],
        icon: <Icons.AlertTriangle />
      },
      {
        title: "What to Do Immediately",
        items: ["Turn off the appliance connected to the switch", "Switch off the circuit at the main breaker board", "Do NOT use the socket or switch", "Call a certified electrician for emergency repair"],
        icon: <Icons.Shield />
      }
    ],
    whyChooseTitle: "Why Call Dynawatt for Electrical Emergencies?",
    whyChoose: ["Rapid fault detection and resolution", "We replace faulty components with high-quality, genuine parts", "Comprehensive safety audits of your entire distribution board", "Preventative maintenance to avoid future fires"],
    faqs: [
      { q: "Is it normal for a dimmer switch to get slightly warm?", a: "Dimmer switches can get slightly warm during normal operation. However, standard switches or sockets should NEVER feel hot. If a standard switch is warm, it's a hazard." },
      { q: "Can you upgrade my old fuse box to a modern breaker panel?", a: "Yes, upgrading an outdated distribution board to modern MCBs and RCBOs is highly recommended to protect against overloads and overheating." }
    ],
    internalLinks: [
      { text: "Need urgent repairs?", linkText: "View Electrical Maintenance", page: Page.SEO_MAINTENANCE },
      { text: "Upgrade to smart systems?", linkText: "Explore Smart Home Automation", page: Page.SEO_SMART_HOME }
    ],
    cta: "Notice a warm switch or burning smell? Don't risk an electrical fire. Call Dynawatt Engineering for immediate fault finding and repair."
  },
  SOLAR_MAINTENANCE: {
    seoTitle: "Solar Battery Maintenance & Inverter Health in Uganda",
    metaDesc: "Keep your solar setup running perfectly. Learn how to maintain batteries, check inverter health, and fix load shedding backup issues in Uganda.",
    headline: "Solar Battery Maintenance & Inverter Health",
    heroImage: "/solar-installation-services-kampala.jpg",
    description: "Your solar and inverter backup system is your defense against power outages, but it needs care to last. Whether you have tubular wet cells or modern lithium-ion batteries, poor maintenance can lead to early battery failure and expensive replacements. Dynawatt Engineering provides trusted maintenance for solar systems across Kampala and Wakiso.",
    sections: [
      {
        title: "Signs Your Battery Needs Attention",
        items: ["Backup time has significantly reduced during outages", "Corrosion (white powder) on battery terminals", "Inverter displays low battery warning immediately after power cut", "Swollen or leaking battery casings"],
        icon: <Icons.AlertTriangle />
      },
      {
        title: "Routine Maintenance Steps",
        items: ["Check and top up distilled water in tubular/wet batteries", "Clean terminals to ensure tight, rust-free connections", "Keep batteries in a ventilated, cool space", "Regularly review inverter load settings"],
        icon: <Icons.Wrench />
      },
      {
        title: "When to Call a Professional",
        items: ["Inverter shows persistent fault or error codes", "Batteries are boiling or emitting a strong sulfur smell", "You need to upgrade from Lead-Acid to Lithium-Ion", "Reorganizing solar panel arrays for better efficiency"],
        icon: <Icons.Phone />
      }
    ],
    whyChooseTitle: "Professional Solar Servicing",
    whyChoose: ["Accurate load testing for batteries to prevent sudden failure", "Expert tuning of inverter charge-controllers", "We supply genuine, long-lasting replacement batteries", "Grid-tied and standalone system optimization"],
    faqs: [
      { q: "How long should a solar battery last?", a: "High-quality tubular batteries can last 3-5 years with good maintenance, while Lithium-Ion batteries can last 10+ years depending on discharge depth." },
      { q: "Why is my inverter beeping?", a: "A continuous beep usually indicates an overload, a battery fault, or a blown internal fuse. It's best to have a technician diagnose the exact fault code." }
    ],
    internalLinks: [
      { text: "Want a new solar setup?", linkText: "View Solar Installation Services", page: Page.SEO_SOLAR },
      { text: "Need general maintenance?", linkText: "Explore Repair Services", page: Page.SEO_MAINTENANCE }
    ],
    cta: "Is your solar battery backup failing during load shedding? Contact Dynawatt Engineering for a full system health check today."
  },
  BULB_BLOWOUTS: {
    seoTitle: "Why Do My Light Bulbs Keep Blowing Out? | Dynawatt",
    metaDesc: "Tired of changing light bulbs? Find out why your LED or halogen bulbs keep blowing out, from voltage spikes to poor wiring, and how to fix it permanently.",
    headline: "Why Do My Light Bulbs Keep Blowing Out?",
    heroImage: "/electrical-repairs-maintenance-kampala.jpg",
    description: "If you find yourself replacing light bulbs far more often than usual, it's more than just bad luck. Frequent bulb blowouts can be a sign of underlying electrical faults, from UEDCL voltage fluctuations to loose wiring in your distribution box. Dynawatt Engineering can diagnose and fix these issues permanently.",
    sections: [
      {
        title: "Common Causes of Blown Bulbs",
        items: ["High voltage surges from the main power grid", "Loose connections in the light switch or fitting", "Cheap, low-quality counterfeit light bulbs", "Using higher wattage bulbs than the fixture allows"],
        icon: <Icons.Zap />
      },
      {
        title: "The Effects of Voltage Spikes",
        items: ["Utility grid fluctuations often exceed 240V", "Spikes damage the sensitive drivers in LED bulbs", "Continuous overvoltage significantly lowers component lifespan", "Can result in subtle flickering before blowing"],
        icon: <Icons.AlertTriangle />
      },
      {
        title: "How We Fix It",
        items: ["Testing voltage levels at the distribution board", "Installing whole-house surge protectors", "Inspecting and securing lighting circuit connections", "Sourcing high-quality, voltage-tolerant LED fixtures"],
        icon: <Icons.Shield />
      }
    ],
    whyChooseTitle: "Why Dynawatt for Lighting Issues?",
    whyChoose: ["We address the root cause, not just the symptom", "Expert installation of surge protection devices (SPDs)", "Supply of premium, authentic lighting fixtures", "Thorough inspection of your local wiring layout"],
    faqs: [
      { q: "Can a bad switch cause bulbs to burn out?", a: "Yes. A loose connection inside the switch can cause arcing, which sends rapid, mini-surges of power to the bulb, destroying its internal components." },
      { q: "Should I switch to LED to stop them from blowing?", a: "LEDs are more efficient, but they are highly sensitive to voltage spikes. If you have grid issues, even LEDs will blow unless you install surge protection." }
    ],
    internalLinks: [
      { text: "Want to upgrade your lighting completely?", linkText: "View Architectural Lighting", page: Page.SEO_PROFILE_LIGHTING },
      { text: "Need urgent repairs?", linkText: "Explore Electrical Maintenance", page: Page.SEO_MAINTENANCE }
    ],
    cta: "Stop wasting money on replacement bulbs. Have Dynawatt Engineering inspect your electrical circuits and fix the root problem."
  },
  WIRING_2_BEDROOM: {
    seoTitle: "Cost of Wiring a 2-Bedroom House in Uganda (2026 Guide) | Dynawatt Engineering",
    metaDesc: "Get a detailed breakdown of the cost to wire a standard 2-bedroom house in Uganda. Learn about cabling, conduits, consumer units, fixtures, and expert labor.",
    headline: "Real Cost of Wiring a 2-Bedroom House in Uganda",
    description: "Wiring a 2-bedroom residential house in Uganda requires planning and high-quality electrical engineering. While local unqualified 'fundis' often quote cheap prices that lead to loose connections or electrical fires, Dynawatt Engineering works to certified international standards (BS 7671). The actual cost of complete electrical installation for a 2-bedroom home in 2026 generally ranges between UGX 2,800,000 and UGX 4,200,000, depending on your choices of architectural elements, the range of switches, and the cable lengths required.",
    heroImage: "/complete-house-wiring-biira-wakiso.jpg",
    author: {
      name: "Daniel Alemukori",
      tag: "BS 7671 Certified & Systems Expert",
      title: "Co-Founder & Lead Technical Engineer",
      avatar: "/co-founder-daniel-alemukori-headshot.jpg",
      bio: "Daniel Alemukori is the Co-Founder & Lead Technical Engineer at Dynawatt Engineering. He is a certified electrical systems installation expert with over 8 years of specialized hands-on expertise guiding three-phase commercial power balancing, deep earth rod impedance testing (conforming to BS 7671 standards), advanced circuit troubleshooting, and smart home lighting control retrofits across Kampala, Wakiso, and Entebbe."
    },
    sections: [
      {
        title: "Phase 1: Rough-In Conduit Work (Slab & Piping)",
        items: [
          "Laying heavy-duty PVC conduits in the concrete slab",
          "Fixing deep metal bracket boxes (MK boxes) for switches and sockets",
          "Running structural wall piping prior to plastering",
          "Setting up piping channels for TV, internet, and backup backup line pathways"
        ],
        icon: <Icons.Home />
      },
      {
        title: "Phase 2: Cable Drawing & Distribution",
        items: [
          "Drawing genuine fire-retardant British Standard copper cables",
          "Separating dedicated lighting circuits from power socket rings",
          "Installing 2.5mm cables for sockets and 1.5mm lines for light fixtures",
          "Integrating a high-capacity 4.0mm or 6.0mm cooker unit cable run"
        ],
        icon: <Icons.Zap />
      },
      {
        title: "Phase 3: DB Board & Safety Terminations",
        items: [
          "Mounting a modern, safe consumer unit (fuse box) with proper breakers",
          "Installing sensitive Residual Current Devices (RCD/RCBO) to prevent shock",
          "Deep copper rod grounding (earthing) to redirect fault currents safely",
          "Terminating connections cleanly to avoid high resistance points and heating"
        ],
        icon: <Icons.Shield />
      }
    ],
    whyChooseTitle: "Certified, Safer 2-Bedroom Installations",
    whyChoose: [
      "No cheap counterfeit aluminum-mix copper wires",
      "All technicians are certified and licensed",
      "Pristine distribution board labeling",
      "Structured, safe conduit separation"
    ],
    faqs: [
      {
        q: "How long does it take to wire a typical 2-bedroom house?",
        a: "On average, the first fix (slabs, pipes, conduit installation) takes 3-5 days. The second fix (drawing cables, mounting boards, fixing switches and light fittings) takes another 4-6 days, usually completed as soon as plastering is dry."
      },
      {
        q: "Can I use standard single-phase power for my 2-bedroom house?",
        a: "Yes, standard single-phase grid power (240V) is perfectly sufficient for a 2-bedroom home, even with appliances like water heaters or stoves, provided loading is balanced."
      },
      {
        q: "Do you handle both first fix and second fix?",
        a: "Yes, we manage both phases of residential installations. The first fix covers laying heavy conduits in slabs and wall chasing before plastering. The second fix is executed post-plastering/painting and involves wire drawing, assembling the DB board, testing, and mounting quality MK sockets, high-end switch plates, and decorative profile lighting."
      },
      {
        q: "Can I get a BOQ before committing?",
        a: "Yes, absolutely! We provide a fully comprehensive, 100% itemized Bill of Quantities (BOQ) with zero hidden fees. Our senior engineers perform accurate load flow analysis and calculate copper core diameters, presenting a fully-audited material-and-labor quote based on your actual architectural layout."
      }
    ],
    internalLinks: [
      { text: "Need a breakdown for larger properties?", linkText: "See 3-Bedroom Wiring Cost Guide", page: Page.SEO_WIRING_3_BEDROOM },
      { text: "Want a complete cost overview?", linkText: "Read General House Wiring Cost Guide", page: Page.SEO_HOUSE_WIRING_COST }
    ],
    cta: "Looking for a safe, reliable, and compliant electrical installation for your 2-bedroom home? Contact Dynawatt Engineering for a customized, itemized quotation. Free site visits are available this week in Kampala, Wakiso, Mukono, and Entebbe!"
  },
  WIRING_3_BEDROOM: {
    seoTitle: "Cost of Wiring a 3-Bedroom House in Uganda | Dynawatt",
    metaDesc: "Discover the professional cost breakdown for a 3-bedroom electrical house wiring in Uganda. Find details on load calculations, breakers, panels, and labor rates.",
    headline: "Complete Cost of Wiring a 3-Bedroom House in Uganda",
    description: "A 3-bedroom residence represents the classic family home setup in Uganda. Sizing the electrical distribution board, calculating load flows, and planning lighting grids is critical to ensure you don't face constant breaker trips. Sourcing low-quality materials to save money usually ends in burnt appliances or damaged sockets. For a professional, durable house wiring setup to BS 7671 standards, you can expect an investment of UGX 4,500,000 to UGX 6,800,000 inside the Kampala-Wakiso area, encompassing premium cables, modern protective gear, and highly skilled engineering labor.",
    heroImage: "/house-wiring-slab-piping-mukono.jpg",
    author: {
      name: "Daniel Alemukori",
      tag: "BS 7671 Certified & Systems Expert",
      title: "Co-Founder & Lead Technical Engineer",
      avatar: "/co-founder-daniel-alemukori-headshot.jpg",
      bio: "Daniel Alemukori is the Co-Founder & Lead Technical Engineer at Dynawatt Engineering. He is a certified electrical systems installation expert with over 8 years of specialized hands-on expertise guiding three-phase commercial power balancing, deep earth rod impedance testing (conforming to BS 7671 standards), advanced circuit troubleshooting, and smart home lighting control retrofits across Kampala, Wakiso, and Entebbe."
    },
    sections: [
      {
        title: "Advanced Distribution & Load Balancing",
        items: [
          "Installing an 8-way or 12-way consumer unit to segregate bedroom rings",
          "Assigning dedicated miniature circuit breakers (MCBs) for high-load areas",
          "Dedicated socket circuits for master, guest, and children's bedrooms",
          "Integrating backup solar transfer switch lines for grid isolation"
        ],
        icon: <Icons.Home />
      },
      {
        title: "High-Load Appliance Planning",
        items: [
          "Running independent 4.0mm wires for multi-liter water heaters",
          "Sizing individual circuits for air conditioning or kitchen cookers",
          "Heavy-gauge stove connection cables to handle high peak currents",
          "Ensuring high-quality socket terminals that won't heat up when under load"
        ],
        icon: <Icons.Zap />
      },
      {
        title: "Security & Exterior Integration",
        items: [
          "Conduiting ready for security spotlights and front/back compound gates",
          "Preparing wiring loops for perimeter wall fencing and CCTV inputs",
          "Structured piping for satellite TV dishes and optical fiber routers",
          "Installing automatic daytime sensor switches for exterior lights"
        ],
        icon: <Icons.Shield />
      }
    ],
    whyChooseTitle: "Why Trust Dynawatt for Your 3-Bedroom Home?",
    whyChoose: [
      "Comprehensive bill of quantities (BOQ) with zero hidden items",
      "Pre-termination testing of thermal resistance on all sockets",
      "Dual RCD shock-protection built into our panels",
      "Lifetime warranty on general structural conduit runs"
    ],
    faqs: [
      {
        q: "What electrical materials make up the bulk of the wiring cost?",
        a: "Copper cables (especially 2.5mm and 4.0mm heavy gauge), the main distribution board components, and premium finish accessories (sockets, decorative lights, bathroom ventilation) comprise about 65% of the total cost."
      },
      {
        q: "Do you install earthing system grounding for 3-bedroom houses?",
        a: "Absolutely. A professional earthing system using a high-grade solid copper rod, salt, charcoal, and an inspection pit is mandatory in all our installations to ensure life-safety."
      }
    ],
    internalLinks: [
      { text: "Curious about standard household prices?", linkText: "Read our Complete House Wiring Overview", page: Page.SEO_HOUSE_WIRING_COST },
      { text: "Need guidance for smaller houses?", linkText: "Read 2-Bedroom House Wiring cost Guide", page: Page.SEO_WIRING_2_BEDROOM }
    ],
    cta: "Get a complete, certified electrical wiring setup with full safety backing. Speak to our senior engineers to schedule your free site visit."
  },
  WIRING_COMMERCIAL: {
    seoTitle: "Commercial Building Electrical Wiring & Sizing in Kampala",
    metaDesc: "Professional commercial building wiring in Kampala, Uganda. Explore details on 3-phase balancing, commercial panels, trunking, safety standards, and pricing.",
    headline: "Commercial Building Electrical Sizing & Wiring in Kampala",
    heroImage: "/electrical-engineering-kampala.jpg",
    description: "Commercial properties in Kampala—including shopping arcades, business centers, hotels, office blocks, and residential apartments—demand complex electrical designs far beyond typical residential systems. These properties run on heavy, continuous loads necessitating 3-phase balancing, professional cable trunking, industrial distribution gear, and comprehensive surge mitigation. Dynawatt Engineering provides certified, code-compliant commercial installations mapped to commercial codes, designed to maximize operating lifespan and guarantee business continuity.",
    sections: [
      {
        title: "3-Phase Power Balancing & Distribution",
        items: [
          "Equalizing current loads across Red, Yellow, and Blue phases",
          "Preventing unstable neutral lines and voltage fluctuations that damage office hardware",
          "Installing industrial-grade main distribution boards (MDBs) with sub-meters",
          "Setting up automatic power change-over systems for backup generators"
        ],
        icon: <Icons.Power />
      },
      {
        title: "Containment & Cable Tray Systems",
        items: [
          "Heavy-duty galvanized steel or PVC cable trunking across ceilings",
          "Structured routing of network, power, and security cabling",
          "Clean wireways to allow effortless future layout expansions or office fit-outs",
          "Fire-stopped floor/wall penetration seals to meet local hazard guidelines"
        ],
        icon: <Icons.Activity />
      },
      {
        title: "Commercial Energy Efficiency & Safety",
        items: [
          "Installing motion-sensor office area lighting and LED light layouts",
          "Full-scale surge protection devices (SPDs) safeguarding servers and IT labs",
          "Integrating reliable automatic voltage switchers (AVS) for central infrastructure",
          "Comprehensive industrial earthing grids and heavy lightning protection masts"
        ],
        icon: <Icons.Shield />
      }
    ],
    whyChooseTitle: "Commercial Electrical Contractors of Choice",
    whyChoose: [
      "As-built electrical drawings and circuit schematics provided",
      "Testing certified under BS 7671 with formal inspection certificates",
      "Minimal disruption using partitioned evening/weekend installation shifts",
      "Full corporate accountability, registration, and tax compliance"
    ],
    faqs: [
      {
        q: "Why is 3-phase power necessary for commercial buildings in Kampala?",
        a: "Commercial facilities utilize machinery, elevators, central AC, and high-density computer arrays. Single-phase lines cannot support these levels of current without causing brownouts or dangerous phase failure."
      },
      {
        q: "Do you perform safety certification for insurance purposes?",
        a: "Yes. We conduct insulation resistance testing and ground loop tests, then issue an official electrical installation certificate required by insurers and licensing bodies in Uganda."
      }
    ],
    internalLinks: [
      { text: "Need customized lighting for an office or hotel?", linkText: "Explore Commercial & Profile Lighting", page: Page.SEO_PROFILE_LIGHTING },
      { text: "Running single-phase systems?", linkText: "Check 3-Bedroom Domestic Wiring", page: Page.SEO_WIRING_3_BEDROOM }
    ],
    cta: "Empower your business with a faultless industrial power foundation. Contact Dynawatt Engineering's corporate projects desk for comprehensive tenders."
  },
  SEO_BLOG_CCTV: {
    seoTitle: "How Many CCTV Cameras Does Your Home or Business Need in Uganda? | Dynawatt",
    metaDesc: "Discover how many CCTV cameras your home, apartment, or shop in Uganda actually needs. Learn about critical zones, analog vs IP cameras, and costs.",
    headline: "How Many CCTV Cameras Does Your Home or Business Need in Uganda?",
    description: "Security is no longer a luxury in Uganda — it is a necessity. Whether you own a residential property in Wakiso, run a retail shop on Kampala Road, or manage a warehouse in Mukono, a properly installed CCTV system is one of the most effective investments you can make to protect your people and property.\n\nBut one of the most common questions we receive at Dynawatt Engineering is simple: how many cameras do I actually need?\n\nThe honest answer depends on your property size, layout, and what you are trying to protect. This guide breaks it down clearly.",
    heroImage: "/cctv-security-installation-kampala.jpg",
    projectPhoto: "/cctv-security-installation-kampala.jpg",
    projectPhotoAlt: "Professional 4K IP CCTV camera installation in Kampala by Dynawatt Engineering",
    projectPhotoCaption: "Professional 4K IP security bullet camera neatly mounted with weatherproof junction boxes and PoE cabling at a corporate complex in central Kampala.",
    author: {
      name: "Eng. John Mukasa",
      tag: "Certified Security & Solar Specialist",
      title: "Senior Solar & Security Systems Specialist",
      avatar: "/co-founder-daniel-alemukori-headshot.jpg",
      bio: "Eng. John Mukasa is the Lead Solar & Security Systems Specialist at Dynawatt Engineering. He is a certified electrical systems installation expert with over 8 years of specialized hands-on expertise guiding commercial-scale CCTV surveillance setups, advanced hybrid solar system integrations, Power over Ethernet (PoE) structural cabling, and automatic backup transitions across Kampala, Wakiso, and Entebbe."
    },
    sections: [
      {
        title: "The Rule of Thumb for Camera Coverage",
        items: [
          "Main entry and exit points (gates, front doors, back doors)",
          "Driveways and parking areas",
          "Perimeter walls and boundary fences",
          "Common areas (reception, corridors, stairwells)",
          "Cash handling or storage areas (for businesses)"
        ],
        icon: <Icons.Shield />
      },
      {
        title: "Recommended Camera Counts by Property Type",
        items: [
          "2–3 Bedroom Residential Home: Recommended 4 to 6 cameras to eliminate blind spots entirely",
          "Apartment Block or Multi-Unit Property: Recommended 8 to 16 cameras for stairwells, lobbies, and entrances",
          "Retail Shop or Office (Small to Medium): Recommended 4 to 8 cameras (entry, sales floor, cash point, storage)",
          "Commercial Warehouse or Industrial Facility: Recommended 12 to 24+ cameras following a full perimeter survey"
        ],
        icon: <Icons.Home />
      },
      {
        title: "Analog vs IP Cameras — Which Should You Choose?",
        items: [
          "Analog cameras: Lower cost, familiar to most installers, suitable for basic home monitoring needs",
          "IP (Internet Protocol) cameras: 4K resolution, remote viewing, zoom without losing clarity, motion alerts",
          "Why night footage goes blurry: Poor quality sensors, infrared (IR) range mismatch, or low-quality lenses",
          "Professional installation: Structured cabling with concealed conduit routing and complete power backup integration"
        ],
        icon: <Icons.Zap />
      }
    ],
    whyChooseTitle: "Why Hire Dynawatt for Your Security Infrastructure?",
    whyChoose: [
      "Dual-certified in both electrical systems and digital security networks",
      "Neat, concealed cabling that prevents tampering and maintains building aesthetics",
      "Remote live viewing setup on all your family's or team's personal mobile devices",
      "Complete integration with electric fences, automatic gates, and backup solar systems"
    ],
    faqs: [
      {
        q: "How long can a CCTV system record?",
        a: "With a standard 4-camera 4K setup and a 2TB specialized hard drive, you can record continuously for 14 to 21 days using efficient H.265+ compression. We configure your system to overwrite the oldest footage automatically or trigger recording only upon motion detection to save storage space."
      },
      {
        q: "Will my cameras work during load shedding or power blackouts?",
        a: "Yes, provided they are backed up. At Dynawatt, we integrate your NVR and PoE switches with your property's solar backup system or a dedicated smart UPS, allowing your security grid to remain fully active and recording even if the main grid goes down for hours."
      },
      {
        q: "How much does CCTV installation cost in Uganda?",
        a: "Pricing depends on cameras, system type, and cabling complexity. Standard 4-camera analog ranges from UGX 800,000 to 1,500,000. High-definition 4-camera IP ranges from UGX 1,500,000 to 2,800,000. Large 8 to 16-camera commercial IP setups range from UGX 3,000,000 to 12,000,000+."
      }
    ],
    internalLinks: [
      { text: "Need professional camera installation?", linkText: "Explore our CCTV & Security Services", page: Page.SEO_CCTV },
      { text: "Want to secure your backup power?", linkText: "Check out our Solar backup options", page: Page.SEO_SOLAR }
    ],
    cta: "Secure your property with the ultimate 4K IP security network. Contact Dynawatt Engineering today to receive an itemized CCTV quotation and layout design."
  },
  SEO_BLOG_CONDUIT_SLAB: {
    seoTitle: "Why Conduit Placement in Slab Matters Before You Pour Concrete | Dynawatt",
    metaDesc: "Laying high-quality heavy-duty conduits in concrete floor slabs before deck casting is critical to ensure a lifetime of flexible, block-free electrical wiring.",
    headline: "Why Conduit Placement in Slab Matters Before You Pour Concrete",
    description: "If you are constructing a house or commercial building in Uganda, there is one electrical decision that cannot wait until after construction — and that is conduit placement in the slab.\n\nMost property owners focus on bricks, roofing, and finishes. Electrical work feels like something to sort out later. But the wiring routes that run through your concrete floors and slabs must be installed before the concrete is poured. Once that slab is cast, there is no going back without expensive, damaging breakage.\n\nThis is one of the most critical — and most commonly mishandled — stages of any construction project.",
    heroImage: "/house-wiring-slab-piping-mukono.jpg",
    projectPhoto: "/house-wiring-slab-piping-mukono.jpg",
    projectPhotoAlt: "Certified Dynawatt crew routing electrical conduits in concrete floor slab before casting in Mukono",
    projectPhotoCaption: "Slab piping and heavy-duty conduit containment meticulously routed and anchored to steel reinforcement before concrete deck casting at a multi-level villa in Mukono.",
    author: {
      name: "Daniel Alemukori",
      tag: "BS 7671 Certified & Systems Expert",
      title: "Co-Founder & Lead Technical Engineer",
      avatar: "/co-founder-daniel-alemukori-headshot.jpg",
      bio: "Daniel Alemukori is the Co-Founder & Lead Technical Engineer at Dynawatt Engineering. He is a certified electrical systems installation expert with over 8 years of specialized hands-on expertise guiding three-phase commercial power balancing, deep earth rod impedance testing (conforming to BS 7671 standards), advanced circuit troubleshooting, and smart home lighting control retrofits across Kampala, Wakiso, and Entebbe."
    },
    sections: [
      {
        title: "What Happens When Conduit Work Is Done Poorly",
        items: [
          "Cables run without conduit — bare cables embedded directly in concrete with no protective channel, preventing future replacement",
          "Wrong conduit diameter — too small for the cables required, making pulling impossible without insulation damage",
          "Conduit not continuous — pipes poorly joined, creating gaps where cables get stuck or concrete/moisture enters",
          "No MK boxes or draw boxes installed — making any troubleshooting or cable fault trace extremely costly",
          "Conduit crushed during concrete pour — thin, cheap conduit collapsing under heavy wet concrete weights"
        ],
        icon: <Icons.AlertTriangle />
      },
      {
        title: "What Professional Slab Conduit Work Looks Like",
        items: [
          "Stage 1 (Before Pour): Review architectural layouts, lay heavy-gauge 20/25mm Class B conduits fixed to steel rebar every 1m",
          "MK Boxes and capping: Install proper MK and draw boxes at all junction points and cap all open pipe ends to prevent concrete ingress",
          "Stage 2 (After Slab Cures): Inspect conduit pathways using testing fish tapes to ensure clear passage and zero blocks",
          "Cable pulling: Run cables smoothly once plastering begins, connecting to fully labeled main consumer boards"
        ],
        icon: <Icons.Wrench />
      },
      {
        title: "What to Ask Your Electrician Before Construction Begins",
        items: [
          "Will conduit be installed before the concrete pour, or are cables going to be surface-run later?",
          "What size conduit will be used, and is it rated for embedding in concrete?",
          "Will MK boxes be installed at all junction points?",
          "Who will inspect the conduit layout before the pour?",
          "Will I receive a wiring drawing or circuit schedule on completion?"
        ],
        icon: <Icons.HelpCircle />
      }
    ],
    whyChooseTitle: "Why Trust Dynawatt with Your Slab Infrastructure?",
    whyChoose: [
      "Engineered layout blueprints drafted before laying a single pipe",
      "Durable, high-grade Class B PVC conduits that withstand heavy concrete loads and vibrators",
      "Dedicated standby technician present throughout the entire concrete pouring process",
      "Tested for clear passage using fish-tape lines immediately after the concrete cures"
    ],
    faqs: [
      {
        q: "What happens if an electrical conduit gets blocked inside the concrete slab?",
        a: "If a conduit is blocked, the cables cannot be pulled through. This usually forces the contractor to hack into the ceiling, run visible surface trunking (which looks highly unprofessional), or take expensive corrective drilling measures. Dynawatt avoids this completely by using heavy-gauge pipes, cementing all joints, sealing ends, and having an engineer on standby during casting."
      },
      {
        q: "Should I run internet and TV cables in the same conduits as power lines?",
        a: "Absolutely not. Running data cables (CAT6, fiber, coaxial) in the same conduit as 240V power lines causes massive electromagnetic interference, resulting in slow internet speeds and distorted TV pictures. It also violates BS 7671 safety standards. At Dynawatt, we install completely separate, dedicated conduit systems for data and power."
      },
      {
        q: "Is slab conduit work required for BS 7671 compliance?",
        a: "Yes. BS 7671 requires all embedded cables to be installed in protective conduit/trunking that allows cables to be withdrawn and replaced without structural damage. Certified contractors like Dynawatt always design and execute compliant containment networks."
      }
    ],
    internalLinks: [
      { text: "Building a new home or rental block?", linkText: "Learn about Complete House Wiring", page: Page.SEO_ELEC_INSTALL },
      { text: "Curious about standard costs?", linkText: "Check our 3-Bedroom Wiring Cost Guide", page: Page.SEO_WIRING_3_BEDROOM }
    ],
    cta: "Don't let poor plumbing or collapsed conduits ruin your expensive concrete deck. Contact Dynawatt Engineering today to have certified engineers design and lay a bulletproof slab piping grid."
  }
};
