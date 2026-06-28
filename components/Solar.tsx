import React, { useState } from 'react';
import { Icons } from './AppIcons';
import { motion } from 'motion/react';
import { Lead, Page } from '../types';

interface Appliance {
  id: string;
  name: string;
  wattage: number;
  qty: number;
  hours: number;
}

const SOLAR_PACKAGES = [
  {
    id: "p1",
    theme: "slate" as const,
    icon: "🔋",
    tier: "DW1 · Studio",
    name: "2kVA Studio Solar System",
    tagline: "Lights, router, TV and phone chargers — all night. Ideal for apartments, 1-bedroom homes, or small offices.",
    priceLabel: "UGX 4,400,000",
    badge: null,
    inverter: "2kVA Sumry / Amp Nova / Solar Riio Sun",
    battery: "3.5kWh Felicity / Amp Nova / Sumry",
    panels: "4 × 455W",
    arrayKw: "1.82kWp",
    dailyGen: "7.3kWh/day",
    chargeTime: "~2.1 hrs to full",
    nightBackup: "~6 hrs overnight runtime",
    dayLoads: [
      { item: "6–8 LED lights", hours: "6 hrs" },
      { item: "WiFi router", hours: "6 hrs" },
      { item: "2× phone chargers", hours: "6 hrs" },
      { item: 'TV up to 43" LED + decoder', hours: "6 hrs" },
      { item: "Laptop", hours: "4 hrs" },
    ],
    nightLoads: [
      { item: "6 LED lights", hours: "All night" },
      { item: "WiFi router", hours: "All night" },
      { item: "Phone chargers", hours: "All night" },
      { item: 'TV up to 43" LED + decoder', hours: "All night" },
    ],
    tvCaution: '✅ Supports LED TVs up to 43". ⚠️ Avoid 55"+ or plasma TVs (200W+). Do not run TV and fridge simultaneously on this package.',
    includes: [
      "2kVA Sumry / Amp Nova / Solar Riio Sun Hybrid Inverter",
      "3.5kWh Felicity / Amp Nova / Sumry Lithium LiFePO₄ Battery (5,000+ cycles)",
      "4 × 455W Jinko/Canadian Solar Panels (1.82kWp array)",
      "Aluminium Roof Rail Bracket Kit",
      "Over/Under Voltage & Surge Protection Box",
      "Professional installation",
      "1-Year Installation Workmanship Warranty",
      "Client commissioning & training",
    ],
  },
  {
    id: "p2",
    theme: "blue" as const,
    icon: "☀️",
    tier: "DW2 · 1–2 Bedroom",
    name: "3kVA Home Hybrid System",
    tagline: "Standard 1–2 bedroom homes across Uganda. Solar all day, battery backup through the night.",
    priceLabel: "UGX 7,200,000",
    badge: "MOST POPULAR",
    inverter: "3kVA Sumry / Amp Nova / Felicity / Solar Riio Sun",
    battery: "5kWh Felicity / Amp Nova / Sumry",
    panels: "6 × 455W",
    arrayKw: "2.73kWp",
    dailyGen: "10.9kWh/day",
    chargeTime: "~2.6 hrs to full",
    nightBackup: "~8 hrs overnight runtime",
    dayLoads: [
      { item: "10 LED lights", hours: "6 hrs" },
      { item: "TV + decoder", hours: "6 hrs" },
      { item: "Router + 3× phones", hours: "6 hrs" },
      { item: "Laptop", hours: "6 hrs" },
      { item: "Standing fan", hours: "6 hrs" },
      { item: "Small fridge", hours: "Running" },
    ],
    nightLoads: [
      { item: "8 LED lights", hours: "7–8 hrs" },
      { item: "TV + router", hours: "7–8 hrs" },
      { item: "Fan", hours: "7–8 hrs" },
      { item: "Phone chargers", hours: "7–8 hrs" },
    ],
    tvCaution: null,
    includes: [
      "3kVA Sumry / Amp Nova / Felicity / Solar Riio Sun Hybrid Inverter",
      "5kWh Felicity / Amp Nova / Sumry Lithium LiFePO₄ Battery (5,000+ cycles)",
      "6 × 455W Jinko/Canadian Solar Panels (2.73kWp array)",
      "Aluminium Roof Rail Bracket Kit",
      "Over/Under Voltage & Surge Protection Box",
      "Professional installation",
      "1-Year Installation Workmanship Warranty",
      "Client commissioning & training",
    ],
  },
  {
    id: "p3",
    theme: "amber" as const,
    icon: "⚡",
    tier: "DW3 · 3-Bedroom",
    name: "5kVA Family Hybrid System",
    tagline: "Standard 3-bedroom homes across Uganda. Powers the whole house — fridge, washing machine, pump.",
    priceLabel: "UGX 10,800,000",
    badge: "FAMILY CHOSEN",
    inverter: "5kVA Sumry / Amp Nova / Felicity / Solar Riio Sun",
    battery: "7.5kWh Felicity / Amp Nova / Sumry",
    panels: "8 × 455W",
    arrayKw: "3.64kWp",
    dailyGen: "14.6kWh/day",
    chargeTime: "~2.1 hrs to full",
    nightBackup: "~10 hrs overnight runtime",
    dayLoads: [
      { item: "Full lighting (12 bulbs)", hours: "6 hrs" },
      { item: "Fridge/freezer", hours: "Running" },
      { item: "TV + DSTV", hours: "6 hrs" },
      { item: "2× laptops", hours: "6 hrs" },
      { item: "Washing machine (cold)", hours: "1–2 cycles" },
      { item: "Small water pump", hours: "2–3 hrs" },
      { item: "Gate motor", hours: "As needed" },
    ],
    nightLoads: [
      { item: "10 LED lights", hours: "6–8 hrs" },
      { item: "Fridge", hours: "Running" },
      { item: "TV + router", hours: "6–8 hrs" },
      { item: "Laptops + phones", hours: "6–8 hrs" },
    ],
    tvCaution: null,
    includes: [
      "5kVA Sumry / Amp Nova / Felicity / Solar Riio Sun Hybrid Inverter",
      "7.5kWh Felicity / Amp Nova / Sumry Lithium LiFePO₄ Battery (5,000+ cycles)",
      "8 × 455W Jinko/Canadian Solar Panels (3.64kWp array)",
      "Aluminium Roof Rail Bracket Kit",
      "Copper Grounding Rods & Earthing Kit",
      "AC/DC Combiner & Safety Switch Cabinet",
      "Professional installation",
      "1-Year Installation Workmanship Warranty",
      "Client commissioning & training",
    ],
  },
  {
    id: "p4",
    theme: "green" as const,
    icon: "🏠",
    tier: "DW4 · 4-Bedroom",
    name: "6kVA Large Home System",
    tagline: "Large homes, guesthouses, small commercial premises. AC units, multiple fridges, full overnight backup.",
    priceLabel: "UGX 14,500,000",
    badge: "LARGE HOME",
    inverter: "6kVA Deye Hybrid Inverter",
    battery: "10kWh LiFePO₄ Battery",
    panels: "10 × 455W",
    arrayKw: "4.55kWp",
    dailyGen: "18.2kWh/day",
    chargeTime: "~2.6 hrs to full",
    nightBackup: "~12 hrs overnight runtime",
    dayLoads: [
      { item: "Full lighting", hours: "6 hrs" },
      { item: "2× fridges", hours: "Running" },
      { item: "TV + DSTV", hours: "6 hrs" },
      { item: "3× laptops", hours: "6 hrs" },
      { item: "Washing machine", hours: "1–2 cycles" },
      { item: "Water pump", hours: "3–4 hrs" },
      { item: "Gate motor", hours: "As needed" },
      { item: "1× AC unit (1.5HP)", hours: "4–5 hrs" },
    ],
    nightLoads: [
      { item: "Full lighting", hours: "10–12 hrs" },
      { item: "2× fridges", hours: "Running" },
      { item: "TV + router", hours: "10–12 hrs" },
      { item: "Laptops + phones", hours: "10–12 hrs" },
      { item: "Gate motor", hours: "As needed" },
    ],
    tvCaution: null,
    includes: [
      "6kVA Deye Hybrid Inverter",
      "10kWh LiFePO₄ Battery (5,000+ cycles)",
      "10 × 455W Jinko/Canadian Solar Panels (4.55kWp array)",
      "Heavy-duty Aluminium Roof Rail Bracket Kit",
      "Double Copper Earthing & Surge Discharge Rods",
      "AC/DC Combiner & Safety Switch Cabinet",
      "Professional installation",
      "1-Year Installation Workmanship Warranty",
      "Client commissioning & training",
    ],
  },
  {
    id: "p5",
    theme: "purple" as const,
    icon: "🏭",
    tier: "DW5 · Commercial",
    name: "10kVA Enterprise System",
    tagline: "Shops, offices, clinics, schools, rental properties. Built for businesses that can't afford downtime.",
    priceLabel: "UGX 19,200,000",
    badge: "COMMERCIAL",
    inverter: "10kW Deye Hybrid Inverter",
    battery: "15kWh+ LiFePO₄ Battery",
    panels: "20 × 455W",
    arrayKw: "9.10kWp",
    dailyGen: "36.4kWh/day",
    chargeTime: "~2.1 hrs to full",
    nightBackup: "~14 hrs+ overnight runtime",
    dayLoads: [
      { item: "Full office/shop lighting", hours: "6 hrs" },
      { item: "3× fridges/freezers", hours: "Running" },
      { item: "CCTV system", hours: "Running" },
      { item: "5× laptops/computers", hours: "6 hrs" },
      { item: "2× AC units", hours: "4–5 hrs" },
      { item: "Water pump system", hours: "3–4 hrs" },
      { item: "Photocopier", hours: "As needed" },
      { item: "Workshop tools (light duty)", hours: "2–3 hrs" },
    ],
    nightLoads: [
      { item: "Full lighting", hours: "10–12 hrs" },
      { item: "2× fridges", hours: "Running" },
      { item: "CCTV system", hours: "Running" },
      { item: "Computers + router", hours: "10–12 hrs" },
      { item: "Security lights", hours: "10–12 hrs" },
    ],
    tvCaution: null,
    includes: [
      "Deye 10kW 48V Hybrid Inverter (Single Phase)",
      "15kWh+ LiFePO₄ Battery (5,000+ cycles)",
      "20 × 455W Tier-1 Solar Panels (9.1kWp array)",
      "Heavy-duty Aluminium Roof Rail Bracket Kit",
      "Double Copper Earthing & Surge Discharge Rods",
      "3-Phase Manual/Auto Changeover Industrial Board",
      "Full System Schematics & Layout Sheets",
      "AC/DC Combiner & Safety Switch Cabinet",
      "Professional installation",
      "1-Year Installation Workmanship Warranty",
      "Client commissioning & training",
    ],
  },
];

const themeStyles = {
  slate: {
    border: 'border-slate-800/80 hover:border-slate-700',
    badge: 'bg-slate-800 text-slate-300 border border-slate-700',
    iconBg: 'bg-slate-500/10 border-slate-500/20 text-slate-400',
    specsBg: 'bg-slate-500/5',
    detailBg: 'bg-slate-500/10',
    tabActive: 'bg-slate-500/20 border border-slate-500/40 text-slate-100',
    accentText: 'text-slate-400',
    waBtn: 'bg-slate-600 hover:bg-slate-700 text-white',
    check: 'text-slate-400',
  },
  blue: {
    border: 'border-blue-850 hover:border-blue-700',
    badge: 'bg-blue-900/60 text-blue-300 border border-blue-700',
    iconBg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    specsBg: 'bg-blue-950/20',
    detailBg: 'bg-blue-950/30',
    tabActive: 'bg-blue-500/20 border border-blue-500/40 text-blue-300',
    accentText: 'text-blue-400',
    waBtn: 'bg-blue-600 hover:bg-blue-700 text-white',
    check: 'text-blue-400',
  },
  amber: {
    border: 'border-amber-850 hover:border-amber-700',
    badge: 'bg-amber-950 text-amber-400 border border-amber-800',
    iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-500',
    specsBg: 'bg-amber-950/20',
    detailBg: 'bg-amber-950/30',
    tabActive: 'bg-amber-500/20 border border-amber-500/40 text-amber-400',
    accentText: 'text-amber-500',
    waBtn: 'bg-amber-500 hover:bg-amber-600 text-slate-900',
    check: 'text-amber-500',
  },
  green: {
    border: 'border-emerald-850 hover:border-emerald-700',
    badge: 'bg-emerald-950 text-emerald-400 border border-emerald-800',
    iconBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    specsBg: 'bg-emerald-950/20',
    detailBg: 'bg-emerald-950/30',
    tabActive: 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400',
    accentText: 'text-emerald-400',
    waBtn: 'bg-emerald-600 hover:bg-emerald-750 text-white',
    check: 'text-emerald-400',
  },
  purple: {
    border: 'border-purple-850 hover:border-purple-700',
    badge: 'bg-purple-950 text-purple-400 border border-purple-800',
    iconBg: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    specsBg: 'bg-purple-950/20',
    detailBg: 'bg-purple-950/30',
    tabActive: 'bg-purple-500/20 border border-purple-500/40 text-purple-400',
    accentText: 'text-purple-400',
    waBtn: 'bg-purple-600 hover:bg-purple-700 text-white',
    check: 'text-purple-400',
  },
};

interface SolarProps {
  addLead?: (lead: Lead) => void;
  setPage?: (page: Page) => void;
}

const Solar: React.FC<SolarProps> = ({ addLead, setPage }) => {
  // Sizing mode: 'yaka' (consumption-based) vs 'appliances' (load sizer)
  const [activeTab, setActiveTab] = useState<'yaka' | 'appliances'>('yaka');

  // States for the pre-engineered Solar Packages interactive features
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const [cardTabs, setCardTabs] = useState<Record<string, 'day' | 'night'>>({});

  const toggleCard = (id: string) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const switchTab = (id: string, tab: 'day' | 'night') => {
    setCardTabs(prev => ({ ...prev, [id]: tab }));
  };

  // Yaka-based calculator states
  const [monthlyKwh, setMonthlyKwh] = useState<number>(250);
  const [isBackupOnly, setIsBackupOnly] = useState<boolean>(false);

  // Solar Quote Form states
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    district: '',
    packageOfInterest: '',
    timeline: '',
    message: ''
  });
  const [calculatorDistrict, setCalculatorDistrict] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const SUPABASE_URL = "https://qpmrcphzexlsyiaxiyem.supabase.co";
      const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbXJjcGh6ZXhsc3lpYXhpeWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MzE0MDEsImV4cCI6MjA5NzAwNzQwMX0.UMozbECVUFd0d1lnKIvIi1gUcpBpLXJsu-RkRKrZDvI";

      const fullMessage = `
Email Address: ${formData.email || 'None Provided'}
District/Area: ${formData.district || 'None Selected'}
Package of Interest: ${formData.packageOfInterest || 'None Selected'}
When Needed: ${formData.timeline || 'None Selected'}
Additional Details: ${formData.message || 'None'}
      `.trim();

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
            location: formData.district ? `Solar Section - ${formData.district}` : "Kampala (Solar Section)",
            service_type: "Solar Installation",
            message: fullMessage
          })
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error("Solar Form Supabase submission failed! Status:", response.status, "Response:", errText);
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
              location: formData.district ? `Solar Section - ${formData.district}` : "Kampala (Solar Section)",
              service_type: "Solar Installation",
              message: fullMessage
            }
          })
        });
      } catch (emailErr) {
        console.error("EmailJS sending failed for Solar Quote:", emailErr);
      }

      // Add to local admin dashboard if prop exists
      if (addLead) {
        const newLead: Lead = {
          id: Date.now().toString(),
          name: formData.name,
          phone: formData.phone,
          location: formData.district ? `Solar Section - ${formData.district}` : "Kampala (Solar Section)",
          serviceType: "Solar Installation",
          message: fullMessage,
          date: new Date().toLocaleDateString(),
          status: 'new'
        };
        addLead(newLead);
      }

      setFormSubmitted(true);
      if (setPage) {
        window.location.hash = "#thank-you";
        setPage(Page.THANK_YOU);
      }
    } catch (error: any) {
      console.error("Unexpected error submitting solar form:", error);
      setErrorMessage(`Error: ${error.message || "Please check your connection."}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Solar Sizing Calculator state (Appliance tab)
  const [appliances, setAppliances] = useState<Appliance[]>([
    { id: '1_int', name: 'LED Bulbs (Internal)', wattage: 10, qty: 8, hours: 5 },
    { id: '1_sec', name: 'Security Lights (External)', wattage: 30, qty: 4, hours: 11 },
    { id: '2', name: 'TV (LED / Smart)', wattage: 80, qty: 1, hours: 5 },
    { id: '3', name: 'Energy-Saver Fridge / Freezer', wattage: 150, qty: 1, hours: 24 },
    { id: '4', name: 'Laptops & Phone Chargers', wattage: 65, qty: 3, hours: 6 },
    { id: '5', name: 'Standing / Ceiling Fans', wattage: 60, qty: 2, hours: 8 },
    { id: '6', name: 'WiFi Router & CCTV System', wattage: 30, qty: 1, hours: 24 },
    { id: '7', name: 'Borehole / Water Pump', wattage: 750, qty: 0, hours: 1 },
    { id: '8', name: 'Air Conditioner (1.5HP)', wattage: 1500, qty: 0, hours: 4 },
    { id: '9', name: 'Washing Machine', wattage: 500, qty: 0, hours: 1 },
    { id: '10', name: 'Microwave Oven', wattage: 1000, qty: 0, hours: 0.5 },
    { id: '11', name: 'Electric Kettle', wattage: 1500, qty: 0, hours: 0.2 },
    { id: '12', name: 'Water Heater', wattage: 2000, qty: 0, hours: 1 },
    { id: '13', name: 'Flat Iron (Iron Box)', wattage: 1000, qty: 0, hours: 1 },
  ]);

  const [additionalPower, setAdditionalPower] = useState<number>(0); // manual additions
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleQtyChange = (id: string, newQty: number) => {
    if (newQty < 0) return;
    setAppliances(prev => prev.map(app => app.id === id ? { ...app, qty: newQty } : app));
  };

  const handleHoursChange = (id: string, newHours: number) => {
    if (newHours < 0 || newHours > 24) return;
    setAppliances(prev => prev.map(app => app.id === id ? { ...app, hours: newHours } : app));
  };

  // --- ENGINEERING CONSTANTS (Calibrated from Claude Recalibration) ---
  const PSH = 4.5;                  // Kampala peak sun hours
  const DOD = 0.80;                 // depth of discharge
  const INVERTER_EFF = 0.90;
  const SYSTEM_LOSS = 0.25;         // wiring/temp/dust/MPPT derate
  const NIGHT_LOAD_FRACTION = 0.40; // % of daily kWh drawn after dark
  const PANEL_WATT_STANDARD = 450;  // standard residential panel
  const PANEL_WATT_HEAVY = 600;     // larger panel, used once array crosses heavy-load threshold
  const HEAVY_LOAD_ARRAY_KW_THRESHOLD = 4.0; // above this required array size, switch to 600W panels
  const BATTERY_PACK_SIZE = 2.4;    // kWh per battery module, rounds up to nearest pack

  // Daily kWh based on selected tab
  const dailyKwh = activeTab === 'appliances'
    ? (appliances.reduce((sum, app) => sum + (app.wattage * app.qty * app.hours), 0) / 1000 + (additionalPower * 5) / 1000)
    : (monthlyKwh / 30);

  // Peak load in kW
  const peakLoadKw = activeTab === 'appliances'
    ? ((appliances.reduce((sum, app) => sum + (app.wattage * app.qty), 0) + additionalPower) / 1000)
    : (dailyKwh / 8); // rough peak estimate for Yaka mode

  // Battery sizing: cover the night load
  const nightLoadKwh = dailyKwh * NIGHT_LOAD_FRACTION;
  const batteryNameplateKwh = nightLoadKwh / (DOD * INVERTER_EFF);
  
  const roundUpToStep = (value: number, step: number) => {
    return Math.ceil(value / step) * step;
  };
  const batteryFinalKwh = roundUpToStep(batteryNameplateKwh, BATTERY_PACK_SIZE);

  let panelCount = 0;
  let arrayKw = 0;
  let inverterKw = 0;
  let panelWatt = PANEL_WATT_STANDARD;

  if (isBackupOnly) {
    inverterKw = Math.max(peakLoadKw * 1.25, 1.0);
    panelCount = 0;
    arrayKw = 0;
  } else {
    const requiredGenerationKwh = dailyKwh / (1 - SYSTEM_LOSS);
    arrayKw = requiredGenerationKwh / PSH;
    panelWatt = arrayKw > HEAVY_LOAD_ARRAY_KW_THRESHOLD ? PANEL_WATT_HEAVY : PANEL_WATT_STANDARD;
    panelCount = Math.ceil((arrayKw * 1000) / panelWatt);
    // Adjust panel count to even number for symmetry
    if (panelCount > 0 && panelCount % 2 !== 0) {
      panelCount += 1;
    }
    arrayKw = (panelCount * panelWatt) / 1000;
    inverterKw = Math.max(arrayKw * 1.15, peakLoadKw * 1.25);
  }

  const tierFromInverterKw = (kw: number) => {
    if (kw <= 3.5) return { label: '3kW Hybrid System', inverterKw: 3.2 };
    if (kw <= 6) return { label: '5kW Premium Solar System', inverterKw: 5.5 };
    if (kw <= 8) return { label: '8kW Pro Solar System', inverterKw: 8.0 };
    return { label: '10kW+ Enterprise Solar Setup', inverterKw: roundUpToStep(kw, 1) };
  };

  const tier = tierFromInverterKw(inverterKw);

  // Circuit recommendation scales with size
  let recommendedCircuits = 'Lighting, router, TV, single refrigerator, laptops';
  if (tier.inverterKw > 3.5) {
    recommendedCircuits = 'TV, lights, single refrigerator, borehole pump, security systems';
  }
  if (tier.inverterKw > 6.0) {
    recommendedCircuits = 'TV, lights, dual refrigerators, borehole pump, security systems, washing machine';
  }
  if (tier.inverterKw > 8.0) {
    recommendedCircuits = 'Commercial aircons, water heaters, complete offices/apartments';
  }

  // Gap Flag warning
  const dailyGenKwh = arrayKw * PSH * (1 - SYSTEM_LOSS);
  const showGapWarning = !isBackupOnly && dailyGenKwh < dailyKwh * 0.95;

  // Reconcile note
  const billEquivMonthly = Math.round((monthlyKwh / 30) * 30);
  const applianceEquivMonthly = Math.round(dailyKwh * 30);
  const diffPct = billEquivMonthly > 0 ? Math.abs(applianceEquivMonthly - billEquivMonthly) / billEquivMonthly * 100 : 0;
  const showReconcileNote = activeTab === 'appliances' && dailyKwh > 0 && diffPct > 15;

  // Render variables to maintain code compatibility
  const recSystemName = tier.label;
  const recPanels = isBackupOnly ? "No Panels (Charges from grid)" : `${panelCount} x ${panelWatt}W Tier-1 Mono Solar Panels`;
  const recInverter = isBackupOnly ? `${tier.inverterKw.toFixed(1)}kW Grid-Charge Inverter` : `${tier.inverterKw.toFixed(1)}kW Intelligent Hybrid Inverter`;
  const recBattery = `${batteryFinalKwh.toFixed(1)}kWh Premium LiFePO4 Battery Pack`;
  const recCircuitType = recommendedCircuits;
  const totalWhFormatted = (dailyKwh * 1000).toLocaleString(undefined, { maximumFractionDigits: 0 });
  const maxWatts = Math.round(peakLoadKw * 1000);

  // Pre-configured WhatsApp messages
  const whatsappSummaryMsg = encodeURIComponent(
    `Hello Dynawatt! I used your Solar Sizing Calculator. Sizing Mode: Appliance Load Audit. Daily energy draw: ${totalWhFormatted} Wh/day. Peak load: ${maxWatts} Watts. Suggestion: ${tier.label} with ${isBackupOnly ? 'No panels' : `${panelCount} x ${panelWatt}W panels`}, a ${tier.inverterKw.toFixed(1)}kW Inverter, and a ${batteryFinalKwh.toFixed(1)}kWh Lithium battery pack. Can I request a free site load audit?`
  );

  const yakaWhatsappSummaryMsg = encodeURIComponent(
    `Hello Dynawatt! I used your Yaka Sizing Calculator. Sizing Mode: Yaka Quick Sizer. Monthly use: ${monthlyKwh} kWh (~${dailyKwh.toFixed(1)} kWh/day). Goal: ${isBackupOnly ? 'Grid-Charged Backup' : 'Full Hybrid Solar'}. Suggestion: ${tier.label} with ${isBackupOnly ? 'No panels' : `${panelCount} x ${panelWatt}W panels`}, a ${tier.inverterKw.toFixed(1)}kW Inverter, and a ${batteryFinalKwh.toFixed(1)}kWh Lithium battery pack. Can I request a free site load audit?`
  );

  return (
    <div className="pt-20 w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#0D1B2A] text-white py-16 md:py-28 overflow-hidden">
        {/* Background photo & overlay */}
        <div className="absolute inset-0 opacity-80 bg-[url('/solar-hero-bg.jpg')] bg-cover bg-center"></div>
        
        {/* Ambient radial gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/80 via-[#0A1E3D]/35 to-[#0D1B2A]/80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(240,165,0,0.08)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_90%_80%,rgba(232,98,10,0.06)_0%,transparent_60%)] pointer-events-none"></div>

        {/* Grid Accent Lines on Right Side */}
        <div className="absolute top-0 right-0 w-[45%] h-full opacity-40 hidden lg:block pointer-events-none"
             style={{
               backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(240, 165, 0, 0.04) 59px, rgba(240, 165, 0, 0.04) 60px)`
             }}>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Headline, subhead, buttons, stats */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-0.5 w-6 bg-[#F0A500]"></span>
                <span className="text-[#F0A500] font-extrabold text-xs md:text-sm uppercase tracking-widest">
                  ☀️ Certified Solar Engineers
                </span>
              </div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-white text-left"
              >
                Stop Paying UMEME Every Month. <span className="text-[#F0A500]">Own Your Power.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl font-normal text-[#C8D4E0] leading-relaxed text-left mb-8 max-w-2xl"
              >
                Dynawatt Engineering designs and installs certified hybrid solar systems for homes and businesses across Kampala, Wakiso, Mukono, and upcountry districts nationwide — sized to your actual Yaka consumption, priced all-inclusive with zero hidden costs. Experience the leading standard of <span className="font-bold text-white">solar installation Uganda</span> trusts for uninterrupted energy.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mt-8"
              >
                <button
                  onClick={() => {
                    document.getElementById('solar-calculator')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#E8620A] text-white hover:bg-[#d05408] font-bold px-6 py-4 rounded-xl transition-all duration-300 shadow-lg active:scale-95 flex items-center justify-center cursor-pointer"
                >
                  Calculate My System Size
                </button>
                <button
                  onClick={() => {
                    document.getElementById('solar-quote-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-transparent border border-white text-white hover:bg-white/10 font-bold px-6 py-4 rounded-xl transition-all duration-300 active:scale-95 flex items-center justify-center cursor-pointer"
                >
                  Get a Free Quote →
                </button>
              </motion.div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-white/10 text-left">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="font-sans text-2xl md:text-3xl font-black text-[#F0A500] block">200+</span>
                  <span className="text-[11px] text-[#9AB0C4] mt-1 block leading-snug">Systems installed across Central Uganda</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="font-sans text-2xl md:text-3xl font-black text-[#F0A500] block">1-Yr</span>
                  <span className="text-[11px] text-[#9AB0C4] mt-1 block leading-snug">Installation warranty on every project</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="font-sans text-2xl md:text-3xl font-black text-[#F0A500] block">ERA</span>
                  <span className="text-[11px] text-[#9AB0C4] mt-1 block leading-snug">Licensed engineers — not handymen</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="font-sans text-2xl md:text-3xl font-black text-[#F0A500] block">24hr</span>
                  <span className="text-[11px] text-[#9AB0C4] mt-1 block leading-snug">Quote turnaround after site assessment</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Interactive Visual Panel */}
            <div className="flex flex-col gap-4 lg:pl-4">
              {[
                {
                  title: "Hybrid Solar Systems",
                  desc: "Grid + Solar + Battery — never lose power",
                  icon: "☀️",
                  bgClass: "bg-amber-500/15 text-amber-400"
                },
                {
                  title: "LiFePO₄ Battery Technology",
                  desc: "10+ year lifespan · 6,000 charge cycles",
                  icon: "🔋",
                  bgClass: "bg-[#E8620A]/15 text-[#E8620A]"
                },
                {
                  title: "Deye Hybrid Inverters",
                  desc: "Tier-1 · Manufacturer warranty · Remote monitoring",
                  icon: "⚡",
                  bgClass: "bg-amber-500/15 text-amber-400"
                },
                {
                  title: "Free Site Assessment",
                  desc: "Engineer visits before we quote a single shilling",
                  icon: "📋",
                  bgClass: "bg-emerald-500/20 text-emerald-400"
                }
              ].map((card, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:bg-white/10 transition-all duration-300 backdrop-blur-md text-left"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${card.bgClass}`}>
                    {card.icon}
                  </div>
                  <div>
                    <strong className="block text-sm md:text-base font-bold text-white">{card.title}</strong>
                    <span className="text-xs md:text-sm text-[#8AABCA]">{card.desc}</span>
                  </div>
                </div>
              ))}

              {/* Equipment Partners Strip */}
              <div className="mt-4 pt-4 border-t border-white/10 text-left">
                <p className="text-[10px] font-black tracking-wider uppercase text-[#6A8BAA] mb-3 font-sans">Equipment Partners</p>
                <div className="flex flex-wrap gap-2">
                  {["Deye", "Jinko Solar", "Canadian Solar", "LiFePO₄"].map((brand, bIdx) => (
                    <span key={bIdx} className="text-xs font-bold text-white/50 border border-white/15 rounded px-2.5 py-1 tracking-wide uppercase bg-white/5">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Credentials Badge Strip */}
      <div className="bg-[#0A1E3D] py-5 border-b border-b-[#C9A84C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-6 items-center">
            {[
              { icon: "🔒", text: "ERA compliant Engineers" },
              { icon: "⚡", text: "BS 7671 Compliant" },
              { icon: "📋", text: "UEDCL compliant" },
              { icon: "🛡️", text: "1-Year Installation Warranty" }
            ].map((badge, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-3 py-2 px-1 ${
                  idx % 2 === 0 ? 'border-r border-r-[#C9A84C]/10 sm:border-none' : ''
                } lg:border-r lg:border-r-[#C9A84C]/30 lg:last:border-none`}
              >
                <span className="text-xl md:text-2xl shrink-0">{badge.icon}</span>
                <span className="text-white text-sm md:text-[15px] font-semibold tracking-[0.3px] text-left">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Brands Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 text-xs md:text-sm uppercase font-extrabold tracking-widest mb-8">
            🛠️ Certified Tier-1 Brand Sourcing Partner & Preferred Installation Brands
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center text-center">
            {[
              { name: "Victron Energy", desc: "Dutch off-grid inverters", icon: "🌐" },
              { name: "Deye Inverters", desc: "Advanced hybrid storage", icon: "🔌" },
              { name: "Solar Riio Sun", desc: "TBB high-performance series", icon: "☀️" },
              { name: "Amp Nova", desc: "Intelligent micro-grid systems", icon: "⚡" },
              { name: "Felicity Solar", desc: "Deep cycle storage & inverters", icon: "🔋" },
              { name: "Sumry Inverters", desc: "Cost-effective backup power", icon: "🔌" },
              { name: "Growatt Systems", desc: "Smart hybrid inverters", icon: "⚡" },
              { name: "Jinko Solar", desc: "Tier-1 Mono Solar panels", icon: "☀️" },
              { name: "Trina Solar", desc: "High-grade solar modules", icon: "🔋" },
              { name: "Huawei Solar", desc: "Smart electronics storage", icon: "📱" }
            ].map((brand, bIdx) => (
              <div key={bIdx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-amber-400 transition-colors duration-300">
                <span className="text-2xl mb-1 block">{brand.icon}</span>
                <span className="font-extrabold text-sm text-slate-900 block">{brand.name}</span>
                <span className="text-[10px] text-slate-400 font-medium block">{brand.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solar Projects Gallery */}
      <section className="py-16 bg-slate-100 border-b border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div>
              <span className="text-[10px] font-black tracking-widest text-[#00b67a] bg-[#d9fdd3]/80 px-2.5 py-1 rounded-full uppercase">
                Proven Installations
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-3 text-slate-950 tracking-tight">Our Recent Solar Projects in Uganda</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-500 max-w-sm mt-3 md:mt-0">
              Take a look at real, hand-crafted, high-output residential and commercial solar setups designed and installed by Dynawatt Engineering teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "5kW Hybrid Solar Villa",
                location: "Kira, Wakiso",
                image: "/solar_install_villa.jpg",
                desc: "Equipped with 8 x 455W monocrystalline solar panels and a smart Growatt lithium cabinet, providing 100% complete load shedding protection."
              },
              {
                title: "10kW Off-Grid Corporate Office Backup",
                location: "Kololo, Kampala",
                image: "/solar_install_office.jpg",
                desc: "A powerful Victron Energy inverter battery setup designed to feed critical desktop, server and lighting circuits with zero transfer-reset."
              },
              {
                title: "3kW Compact Residential Package",
                location: "Najjera, Kampala",
                image: "/solar_install_residential.jpg",
                desc: "A budget-friendly smart battery backup system that powers primary refrigeration, lighting networks, and security fences safely."
              }
            ].map((proj, pIdx) => (
              <div key={pIdx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition group">
                <div className="h-56 relative overflow-hidden bg-slate-900">
                  <img src={proj.image} alt={proj.title} referrerPolicy="no-referrer" loading="lazy" width="400" height="224" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent animate-in fade-in"></div>
                  <span className="absolute bottom-4 left-4 bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {proj.location}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-slate-950 text-lg mb-2">{proj.title}</h3>
                  <p className="text-slate-650 text-xs md:text-sm leading-relaxed">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Solar Sizing & Sizing Calculator */}
      <section id="solar-calculator" className="py-16 md:py-24 bg-[#0B1523] border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-xs font-bold mb-4 shadow-sm">
              <Icons.Zap className="h-4 w-4 text-amber-500 animate-pulse" />
              <span>Free Solar Sizing & Estimate Tool</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Your Home Need?
            </h2>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto">
              Enter your monthly Yaka units — or list your appliances — and we'll recommend the exact Dynawatt package sized for your real energy use. No guesswork. No overselling.
            </p>
          </div>

          {/* Tab Selection */}
          <div className="flex justify-center mb-12 max-w-sm sm:max-w-md mx-auto bg-[#132237] p-1.5 rounded-xl border border-slate-700/60 shadow-inner">
            <button
              onClick={() => setActiveTab('yaka')}
              className={`flex-1 py-3 px-4 rounded-lg text-xs md:text-sm font-extrabold transition-all duration-300 flex items-center justify-center gap-1.5 ${
                activeTab === 'yaka'
                  ? 'bg-[#E8620A] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icons.Power className="h-4 w-4" />
              Yaka Units (Recommended)
            </button>
            <button
              onClick={() => setActiveTab('appliances')}
              className={`flex-1 py-3 px-4 rounded-lg text-xs md:text-sm font-extrabold transition-all duration-300 flex items-center justify-center gap-1.5 relative border ${
                activeTab === 'appliances'
                  ? 'bg-[#E8620A] border-[#E8620A] text-white shadow-md'
                  : 'bg-[#132237] border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Icons.Briefcase className="h-4 w-4" />
              Appliance List
            </button>
          </div>

          {activeTab === 'yaka' ? (
            /* ==========================================
               Yaka Bill Quick Sizer Content
               ========================================== */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Inputs */}
              <div className="lg:col-span-7 bg-[#0F1D30] p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl text-left">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 pb-3 border-b border-slate-800">
                  <span>📋</span> Step 1: Input Your Monthly Yaka Use
                </h3>

                <div className="space-y-6">
                  {/* Monthly Yaka Input & District Dropdown Select (From Screenshot 7) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Your average monthly Yaka units</label>
                      <input 
                        type="number"
                        placeholder="e.g. 65"
                        value={monthlyKwh || ''}
                        onChange={(e) => setMonthlyKwh(Math.max(0, parseInt(e.target.value) || 0))}
                        className="w-full bg-[#132237] border border-slate-700 rounded-lg p-3 text-white text-sm focus:ring-2 focus:ring-amber-500 outline-none placeholder-slate-500 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Your District / Area</label>
                      <select 
                        value={calculatorDistrict}
                        onChange={(e) => setCalculatorDistrict(e.target.value)}
                        className="w-full bg-[#132237] border border-slate-700 rounded-lg p-3 text-white text-sm focus:ring-2 focus:ring-amber-500 outline-none font-bold animate-pulse-subtle"
                      >
                        <option value="" disabled>Select district</option>
                        <optgroup label="Central Region (Fast On-Site)">
                          <option value="Kampala Central">Kampala Central</option>
                          <option value="Wakiso">Wakiso</option>
                          <option value="Kira">Kira</option>
                          <option value="Mukono">Mukono</option>
                          <option value="Entebbe">Entebbe</option>
                        </optgroup>
                        <optgroup label="Other Regions (Upcountry Logistics)">
                          <option value="Mbarara">Mbarara</option>
                          <option value="Jinja">Jinja</option>
                          <option value="Masaka">Masaka</option>
                          <option value="Gulu">Gulu</option>
                          <option value="Mbale">Mbale</option>
                          <option value="Other Upcountry">Other Upcountry District</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  {/* Slider & Info */}
                  <div className="pt-2">
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Fine-tune with slider</label>
                      <span className="text-sm font-black text-amber-400 bg-[#132237] px-3 py-1 rounded-lg border border-slate-700 font-mono">
                        {monthlyKwh} kWh/mo
                      </span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="1500"
                      step="25"
                      value={monthlyKwh}
                      onChange={(e) => setMonthlyKwh(parseInt(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500 mb-2 focus:outline-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase font-mono">
                      <span>50 kWh (Under 100k UGX)</span>
                      <span>1500 kWh (Over 1.2M UGX)</span>
                    </div>
                  </div>

                  {/* Preset quick buttons */}
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Usage Presets in Uganda</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { label: "1-2 Bed (120 kWh)", val: 120 },
                        { label: "Family (250 kWh)", val: 250 },
                        { label: "Active Home (450 kWh)", val: 450 },
                        { label: "Large/Office (900 kWh)", val: 900 }
                      ].map((preset, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setMonthlyKwh(preset.val)}
                          className={`py-2 px-3 text-xs font-extrabold rounded-lg border transition ${
                            monthlyKwh === preset.val
                              ? 'bg-amber-500 border-amber-500 text-slate-950 shadow-sm'
                              : 'bg-[#132237] border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* System Toggle: Backup Vs independence */}
                  <div className="pt-4 border-t border-slate-800">
                    <span className="block text-sm font-extrabold text-slate-300 mb-3">Choose Your Sizing Goal</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Hybrid option */}
                      <div
                        onClick={() => setIsBackupOnly(false)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition flex flex-col justify-between ${
                          !isBackupOnly
                            ? 'bg-amber-500/10 border-amber-500 shadow-md'
                            : 'bg-[#132237] border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">☀️</span>
                          <span className="font-extrabold text-white text-sm">Full Hybrid Solar System</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          Includes Tier-1 roof panels, premium inverter, and smart lithium batteries. Charges from the sun to run your home and bypass Yaka meters entirely, switching to grid when weather is heavy.
                        </p>
                      </div>

                      {/* Backup Only option */}
                      <div
                        onClick={() => setIsBackupOnly(true)}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition flex flex-col justify-between ${
                          isBackupOnly
                            ? 'bg-amber-500/10 border-amber-500 shadow-md'
                            : 'bg-[#132237] border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">🔋</span>
                          <span className="font-extrabold text-white text-sm">Grid-Charged Backup Only</span>
                        </div>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          Requires no solar panels! Charges batteries purely off utility grid (UEDCL) power. Operates as an automated, instant transition battery backup during load shedding and power blackouts. Saves massive upfront costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#0F1D30] text-white p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

                  <h3 className="text-xl font-bold mb-5 flex items-center gap-2 pb-3 border-b border-slate-800">
                    <span>📊</span> Step 2: System Sizing Output
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center bg-[#132237] p-3 rounded-lg border border-slate-800">
                      <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider">Recommended Tier</span>
                      <span className="text-sm font-black text-amber-500">{recSystemName}</span>
                    </div>

                    <div className="flex justify-between items-center bg-[#132237] p-3 rounded-lg border border-slate-800">
                      <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wider">Daily Consumption Cap</span>
                      <span className="text-sm font-extrabold text-slate-200 font-mono">~ {dailyKwh.toFixed(1)} kWh / Day</span>
                    </div>

                    {showGapWarning && (
                      <div className="p-3 bg-red-950/40 border border-red-900/60 rounded-lg text-left text-xs text-red-200 leading-relaxed font-sans">
                        ⚠ Heads up: at {PSH} peak sun hours, this array generates ~{dailyGenKwh.toFixed(1)} kWh/day, slightly under the {dailyKwh.toFixed(1)} kWh/day load. Consider sizing up if you expect frequent cloud cover.
                      </div>
                    )}

                    {/* Specifications */}
                    <div className="pt-4 border-t border-slate-800 space-y-3.5">
                      <h4 className="text-xs uppercase text-amber-500 font-black tracking-widest leading-none">Standard Bill of Quantities</h4>

                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#132237] flex items-center justify-center text-xs">☀️</span>
                        <div>
                          <p className="text-[10px] text-slate-400 leading-tight">Solar Panel array rating</p>
                          <p className="text-xs font-bold text-white leading-normal">{recPanels}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#132237] flex items-center justify-center text-xs">⚡</span>
                        <div>
                          <p className="text-[10px] text-slate-400 leading-tight">Recommended Hybrid Inverter</p>
                          <p className="text-xs font-bold text-white leading-normal">{recInverter}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#132237] flex items-center justify-center text-xs">🔋</span>
                        <div>
                          <p className="text-[10px] text-slate-400 leading-tight">Smart Lithium Battery Pack</p>
                          <p className="text-xs font-bold text-white leading-normal">{recBattery}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-[#132237] flex items-center justify-center text-xs">🔌</span>
                        <div>
                          <p className="text-[10px] text-slate-400 leading-tight">Recommended Active Circuits</p>
                          <p className="text-xs font-bold text-white leading-normal">{recCircuitType}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/256751473830?text=${yakaWhatsappSummaryMsg}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-extrabold py-3 px-4 rounded-xl shadow-lg hover:shadow-[#25D366]/20 transition flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                  >
                    <Icons.MessageCircle className="h-4.5 w-4.5" />
                    Inquire For This System
                  </a>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl text-left">
                  <h4 className="font-extrabold text-amber-400 text-xs mb-1 flex items-center gap-1">
                    <Icons.ShieldCheck className="h-4.5 w-4.5 text-amber-500" />
                    Free Professional Solar Site Audit
                  </h4>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Yaka bills and usage metrics represent a macro estimate. Our certified engineers supply full manual load audits and custom solar calculations at your physical premises across Kampala and all upcountry districts absolutely free.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* ==========================================
               Appliance Load Audit Content
               ========================================== */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Inputs (Left Side) */}
              <div className="lg:col-span-7 bg-[#0F1D30] p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl text-left">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 pb-3 border-b border-slate-800">
                  <span>📋</span> Step 1: Select Your Active Appliances
                </h3>

                {/* Sizing Glossary & Educational Explanations */}
                <div id="sizing-glossary-panel" className="mb-6 bg-[#132237] p-4 rounded-xl border border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-white">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-extrabold text-slate-200">
                      <span>⚡</span> Peak Load (Watts)
                      <div className="group relative inline-block">
                        <Icons.HelpCircle className="h-3.5 w-3.5 text-slate-400 hover:text-amber-500 cursor-help" />
                        <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-72 -translate-x-1/2 rounded-lg bg-slate-900 p-3 text-xs text-slate-100 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-relaxed border border-slate-800 font-normal">
                          <div className="font-bold text-amber-400 mb-1">Inverter Power Limit</div>
                          Peak load is the maximum total power (in Watts) needed if you run these appliances at the exact same moment. It determines your inverter rating (kVA/kW) so your system doesn't trip on inductive startups.
                          <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-slate-900 rotate-45 border-r border-b border-slate-800"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      The total simultaneous wattage (W) drawing power. Determines required <strong>Inverter Capacity</strong>.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-extrabold text-slate-200">
                      <span>🔋</span> Daily Consumption (Wh)
                      <div className="group relative inline-block">
                        <Icons.HelpCircle className="h-3.5 w-3.5 text-slate-400 hover:text-amber-500 cursor-help" />
                        <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-72 -translate-x-1/2 rounded-lg bg-slate-900 p-3 text-xs text-slate-100 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-relaxed border border-slate-800 font-normal">
                          <div className="font-bold text-amber-400 mb-1">Energy Storage Volume</div>
                          Daily consumption is the accumulative quantity of energy used (Watts × Hours Used per day) measured in Watt-hours (Wh or kWh). It dictates battery capacity for backup storage and solar panel array sizing.
                          <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-slate-900 rotate-45 border-r border-b border-slate-800"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      Accumulated energy usage over time (Wh/day). Determines required <strong>Solar Panels & Battery Bank</strong>.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {appliances.map((app) => (
                    <div key={app.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-[#132237]/60 rounded-xl border border-slate-800/80 hover:bg-[#132237] transition">
                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-white text-sm md:text-base">{app.name}</h4>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">{app.wattage} Watts each</p>
                      </div>

                      <div className="flex items-center gap-6 self-stretch sm:self-auto justify-between">
                        {/* Qty controller */}
                        <div className="flex flex-col text-left">
                          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                            Quantity
                            <div className="group relative inline-block">
                              <Icons.HelpCircle className="h-3.5 w-3.5 text-slate-400 hover:text-amber-500 cursor-help" />
                              <div className="pointer-events-none absolute bottom-full right-0 sm:left-1/2 z-[60] mb-2 w-64 sm:-translate-x-1/2 rounded-lg bg-slate-900 p-2.5 text-[11px] text-slate-100 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-normal border border-slate-800 font-normal normal-case">
                                Increasing quantity increases the total <strong>Peak Load</strong> draw should all items operate simultaneously.
                                <div className="absolute top-full right-4 sm:right-auto sm:left-1/2 h-2 w-2 sm:-translate-x-1/2 -translate-y-1 bg-slate-900 rotate-45 border-r border-b border-slate-800"></div>
                              </div>
                            </div>
                          </span>
                          <div className="flex items-center bg-[#0F1D30] border border-slate-700 rounded-lg overflow-hidden h-9">
                            <button 
                              onClick={() => handleQtyChange(app.id, app.qty - 1)}
                              className="px-2.5 hover:bg-slate-800 font-bold text-slate-400 transition-colors"
                            >
                              -
                            </button>
                            <span className="px-3 text-sm font-bold text-white w-8 text-center">{app.qty}</span>
                            <button 
                              onClick={() => handleQtyChange(app.id, app.qty + 1)}
                              className="px-2.5 hover:bg-slate-800 font-bold text-slate-400 transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Hours controller */}
                        <div className="flex flex-col text-left">
                          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-1 flex items-center gap-1">
                            Hours/Day
                            <div className="group relative inline-block">
                              <Icons.HelpCircle className="h-3.5 w-3.5 text-slate-400 hover:text-amber-500 cursor-help" />
                              <div className="pointer-events-none absolute bottom-full right-0 sm:left-1/2 z-[60] mb-2 w-64 sm:-translate-x-1/2 rounded-lg bg-slate-900 p-2.5 text-[11px] text-slate-100 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-normal border border-slate-800 font-normal normal-case">
                                Longer active hours raise the required <strong>Daily Storage (Wh)</strong>, needing more solar generation to refill.
                                <div className="absolute top-full right-4 sm:right-auto sm:left-1/2 h-2 w-2 sm:-translate-x-1/2 -translate-y-1 bg-slate-900 rotate-45 border-r border-b border-slate-800"></div>
                              </div>
                            </div>
                          </span>
                          <select 
                            value={app.hours}
                            onChange={(e) => handleHoursChange(app.id, parseFloat(e.target.value))}
                            className="px-2 lg:px-3 bg-[#0F1D30] border border-slate-700 rounded-lg text-xs md:text-sm h-9 focus:ring-1 focus:ring-amber-500 font-bold outline-none text-white"
                          >
                            <option value="0.5">0.5 hr</option>
                            {[...Array(25).keys()].map((h) => (
                              <option key={h} value={h}>{h} hr</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Additional manual Watts input box */}
                  <div className="p-4 bg-[#132237] rounded-xl border border-slate-700 text-left">
                    <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-1.5">
                      <span>💡</span> Custom Watts (Optional)
                      <div className="group relative inline-block">
                        <Icons.HelpCircle className="h-3.5 w-3.5 text-slate-400 hover:text-amber-500 cursor-help" />
                        <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-lg bg-slate-900 p-2.5 text-[11px] text-slate-100 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-normal border border-slate-800 font-normal text-left">
                          Ideal for high-power individual specialty equipment (e.g. submersible pumps or heavy blenders).
                          <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-slate-900 rotate-45 border-r border-b border-slate-800"></div>
                        </div>
                      </div>
                    </h4>
                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      Add other loads or special appliances not listed above (such as microwaves, water pumps, blenders).
                    </p>
                    <div className="flex items-center gap-3">
                      <input 
                        type="number"
                        placeholder="e.g. 500 Watts"
                        value={additionalPower || ''}
                        onChange={(e) => setAdditionalPower(Math.max(0, parseInt(e.target.value) || 0))}
                        className="flex-1 bg-[#0F1D30] border border-slate-700 px-3 py-2 rounded-lg text-sm font-semibold outline-none text-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                      <button 
                        onClick={() => setAdditionalPower(0)}
                        className="text-xs font-bold text-amber-400 border border-amber-500/20 hover:bg-amber-500/10 px-3 py-2 rounded-lg transition"
                      >
                        Clear
                      </button>
                    </div>
                  </div>

                  {showReconcileNote && (
                    <div className="mt-4 p-4 bg-blue-950/40 border border-blue-900/60 rounded-xl text-left text-xs text-blue-200 leading-relaxed font-sans">
                      <b className="block font-extrabold mb-1 text-blue-300">📢 Sizing Recalibration Note</b>
                      Your appliance list works out to about <strong className="font-extrabold">{applianceEquivMonthly} kWh/mo</strong>. That is different from the <strong className="font-extrabold">{billEquivMonthly} kWh/mo</strong> on the Yaka bill slider. We are actively sizing this system based on your custom appliance load list since it provides a more detailed, precise, and accurate input.
                    </div>
                  )}
                </div>
              </div>

              {/* Recommendations Output (Right Side) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#0F1D30] text-white p-6 md:p-8 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2 pb-3 border-b border-slate-800">
                    <span>📊</span> Step 2: Sizing Recommendations
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg border border-slate-800">
                      <span className="text-xs text-slate-400 uppercase font-black tracking-wider flex items-center gap-1.5">
                        Total Power Consumption
                        <div className="group relative inline-block">
                          <Icons.HelpCircle className="h-3.5 w-3.5 text-slate-400 hover:text-amber-400 cursor-help" />
                          <div className="pointer-events-none absolute bottom-full left-1/2 z-[60] mb-2 w-64 -translate-x-1/2 rounded-lg bg-slate-950 p-2.5 text-[11px] text-slate-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-normal border border-slate-800 normal-case font-medium text-left">
                            <span className="text-amber-400 font-bold">Daily Energy Draw:</span> Accumulated energy requirements (Watts × Hours) determining the battery bank storage capacity and pane output.
                            <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-slate-950 rotate-45 border-r border-b border-slate-800"></div>
                          </div>
                        </div>
                      </span>
                      <span className="text-lg font-black text-amber-400 font-mono">{totalWhFormatted} Wh / Day</span>
                    </div>

                    <div className="flex justify-between items-center bg-slate-800/50 p-3 rounded-lg border border-slate-800">
                      <span className="text-xs text-slate-400 uppercase font-black tracking-wider flex items-center gap-1.5">
                        Concurrent peak load
                        <div className="group relative inline-block">
                          <Icons.HelpCircle className="h-3.5 w-3.5 text-slate-400 hover:text-amber-400 cursor-help" />
                          <div className="pointer-events-none absolute bottom-full left-1/2 z-[60] mb-2 w-64 -translate-x-1/2 rounded-lg bg-slate-950 p-2.5 text-[11px] text-slate-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 leading-normal border border-slate-800 normal-case font-medium text-left">
                            <span className="text-amber-400 font-bold">Maximum instant draw:</span> Maximum power running at once. Requires safe inrush headroom so your inverter doesn't shut down when motor surges occur.
                            <div className="absolute top-full left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1 bg-slate-950 rotate-45 border-r border-b border-slate-800"></div>
                          </div>
                        </div>
                      </span>
                      <span className="text-lg font-black text-slate-100 font-mono">{maxWatts} Watts</span>
                    </div>

                     {/* recommended specifications panel */}
                    <div className="pt-4 border-t border-slate-800 space-y-4">
                      <h4 className="text-xs uppercase text-amber-500 font-black tracking-widest mb-2">Recommended Setup</h4>
                      
                      {showGapWarning && (
                        <div className="p-3 bg-red-950/40 border border-red-900/60 rounded-lg text-left text-xs text-red-200 leading-relaxed font-sans mb-3">
                          ⚠ Heads up: at {PSH} peak sun hours, this array generates ~{dailyGenKwh.toFixed(1)} kWh/day, slightly under the {dailyKwh.toFixed(1)} kWh/day load. Consider sizing up if you expect frequent cloud cover.
                        </div>
                      )}

                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm">☀️</span>
                        <div>
                          <p className="text-xs text-slate-400">Mono Monocrystalline PV Panels</p>
                          <p className="text-sm font-bold text-white">{recPanels}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm">⚡</span>
                        <div>
                          <p className="text-xs text-slate-400">Recommended Inverter Rating</p>
                          <p className="text-sm font-bold text-white">
                            {recInverter}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-sm">🔋</span>
                        <div>
                          <p className="text-xs text-slate-400">Lithium-Ion Storage (LiFePO4)</p>
                          <p className="text-sm font-bold text-white">{recBattery}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/256751473830?text=${whatsappSummaryMsg}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20ba56] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-[#25D366]/20 transition flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                  >
                    <Icons.MessageCircle className="h-5 w-5" />
                    WhatsApp Us This Size For Quotation
                  </a>
                </div>

                {/* helpful callout box */}
                <div className="bg-amber-50 p-5 rounded-2xl border border-amber-250 text-left">
                  <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                    <Icons.ShieldCheck className="h-4.5 w-4.5 text-amber-600" />
                    Free Professional Solar Load Audits
                  </h4>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    Calculators provide general model guidelines. For actual residential or commercial configurations, our senior solar engineers perform full manual solar site checks and power analysis completely free of charge.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Standard Solar Packages (UGX Pricing Guide) */}
      <section className="bg-slate-950 py-16 md:py-24 border-t border-slate-900 text-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(251,191,36,0.02),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-xs font-bold mb-4 shadow-sm">
              <Icons.BadgeCheck className="h-4 w-4 text-amber-400" />
              <span>Price Audit Validated — True 2026 Competitive UGX Costs</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
              Pre-Engineered Solar Backup Packages
            </h3>
            <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Premium tier lithium-powered configurations with fully transparent pricing, zero hidden fees, and certified engineering installation in Uganda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLAR_PACKAGES.map((pkg) => {
              const isExpanded = !!expandedCards[pkg.id];
              const activeTab = cardTabs[pkg.id] || 'day';
              const theme = themeStyles[pkg.theme];

              return (
                <div 
                  key={pkg.id} 
                  id={`pkg-card-${pkg.id}`}
                  className={`bg-[#0b1329]/90 rounded-2xl border ${theme.border} p-6 transition duration-300 flex flex-col justify-between relative shadow-2xl overflow-hidden`}
                >
                  {pkg.badge && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className={`text-[9px] font-black tracking-wider uppercase px-2.5 py-1 rounded-md shadow-md ${theme.badge}`}>
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border ${theme.iconBg} shrink-0`}>
                        {pkg.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-slate-400 block mb-1">
                          {pkg.tier}
                        </span>
                        <h4 className="text-xl font-bold text-white tracking-tight">
                          {pkg.name}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {pkg.tagline}
                    </p>

                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-2xl font-extrabold text-white tracking-tight">
                        {pkg.priceLabel}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">All-Inclusive</span>
                    </div>

                    {/* Quick Specs Grid */}
                    <div className={`grid grid-cols-3 gap-2 rounded-xl p-3 mb-6 ${theme.specsBg} text-center`}>
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">INVERTER</span>
                        <span className="text-xs font-black text-white mt-1 line-clamp-1" title={pkg.inverter}>
                          {pkg.inverter.split(' ').slice(0, 2).join(' ')}
                        </span>
                      </div>
                      <div className="flex flex-col items-center border-x border-slate-800">
                        <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">BATTERY</span>
                        <span className="text-xs font-black text-white mt-1">
                          {pkg.battery.split(' ')[0]}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">SOLAR PV</span>
                        <span className="text-xs font-black text-white mt-1">
                          {pkg.arrayKw}
                        </span>
                      </div>
                    </div>

                    {/* Interactive Specs Expander */}
                    <div className="mb-6">
                      <button
                        onClick={() => toggleCard(pkg.id)}
                        className={`w-full py-2 px-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-white flex items-center justify-center gap-1.5 transition ${theme.accentText} hover:bg-slate-850 cursor-pointer`}
                      >
                        {isExpanded ? (
                          <>
                            <span>Hide Detailed Specs</span>
                            <Icons.ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            <span>View Load Run Guide & Parts</span>
                            <Icons.ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </button>

                      {isExpanded && (
                        <div className={`mt-4 rounded-xl p-4 border border-slate-800 space-y-4 ${theme.detailBg} animate-fadeIn`}>
                          
                          {/* Sizing Math Metrics */}
                          <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-800/60 text-left">
                            <div>
                              <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block">Daily Generation</span>
                              <span className="text-xs font-black text-white">{pkg.dailyGen}</span>
                            </div>
                            <div>
                              <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block">Charge Time</span>
                              <span className="text-xs font-black text-white">{pkg.chargeTime}</span>
                            </div>
                            <div>
                              <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block">Solar Panels array</span>
                              <span className="text-xs font-medium text-slate-300">{pkg.panels}</span>
                            </div>
                            <div>
                              <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block">Night Backup Role</span>
                              <span className="text-xs font-black text-white">{pkg.nightBackup}</span>
                            </div>
                          </div>

                          {/* Load Calculator Tab Switcher */}
                          <div className="text-left">
                            <div className="flex justify-between items-center mb-3">
                              <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Recommended Loads:</h5>
                              <div className="bg-slate-950 p-0.5 rounded-lg border border-slate-800 flex">
                                <button
                                  onClick={() => switchTab(pkg.id, 'day')}
                                  className={`px-2.5 py-1 text-[9px] font-black uppercase rounded-md transition duration-200 cursor-pointer ${activeTab === 'day' ? theme.tabActive : 'text-slate-500'}`}
                                >
                                  Day (Solar)
                                </button>
                                <button
                                  onClick={() => switchTab(pkg.id, 'night')}
                                  className={`px-2.5 py-1 text-[9px] font-black uppercase rounded-md transition duration-200 cursor-pointer ${activeTab === 'night' ? theme.tabActive : 'text-slate-500'}`}
                                >
                                  Night (Battery)
                                </button>
                              </div>
                            </div>

                            <ul className="space-y-2 text-xs">
                              {(activeTab === 'day' ? pkg.dayLoads : pkg.nightLoads).map((load, idx) => (
                                <li key={idx} className="flex justify-between items-center py-1 border-b border-slate-800/30 text-slate-300">
                                  <span>{load.item}</span>
                                  <span className={`font-black text-[10px] ${theme.accentText}`}>{load.hours}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* TV Caution Callout */}
                          {pkg.tvCaution && (
                            <div className="p-2.5 bg-slate-950/60 border border-slate-800 rounded-lg text-[10px] text-slate-300 leading-relaxed text-left">
                              {pkg.tvCaution}
                            </div>
                          )}

                          {/* Components Checklist */}
                          <div className="text-left">
                            <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">What is Delivered & Installed:</h5>
                            <ul className="space-y-1.5 text-xs text-slate-300">
                              {pkg.includes.map((inc, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className={`${theme.check} shrink-0`}>✓</span>
                                  <span className="text-[11px] leading-snug">{inc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      )}
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/256751473830?text=${encodeURIComponent(`Hello Dynawatt! I am interested in the ${pkg.name} (${pkg.priceLabel}) setup.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full text-center font-black py-3 rounded-xl text-xs transition tracking-wider uppercase shadow-lg flex items-center justify-center gap-2 cursor-pointer ${theme.waBtn}`}
                  >
                    <span>Request Quotation</span>
                    <Icons.MessageSquare className="h-4 w-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solar Facts & System Efficiency Assumptions */}
      <section className="py-20 bg-slate-950 text-white border-t border-slate-900 relative overflow-hidden text-left">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-[#00b67a] bg-[#d9fdd3]/10 border border-[#00b67a]/30 px-3.5 py-1.5 rounded-full uppercase">
              Assumptions & System Design Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-white tracking-tight">Solar Facts & Efficiency Assumptions</h2>
            <p className="text-xs md:text-sm text-slate-400 max-w-2xl mx-auto mt-3">
              We design robust, realistic systems based on physical conditions in Uganda rather than theoretical perfect lab metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-[#00b67a]/20 border border-[#00b67a]/40 text-[#00b67a] text-[10px] font-black px-2.5 py-1 rounded-md uppercase">4.5 - 5 Hours</div>
              <div className="bg-amber-400/10 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl font-sans">☀️</div>
              <h4 className="font-extrabold text-slate-100 text-base mb-3">Uganda Peak Sun Hours</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Calculations are modeled around an average of 4.5 to 5.5 hours of full peak solar light daily across Uganda. This accounts for cloud shielding during rain cycles, ensuring your backup doesn't go flat when monsoon conditions affect various regions.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-[#00b67a]/20 border border-[#00b67a]/40 text-[#00b67a] text-[10px] font-black px-2.5 py-1 rounded-md uppercase">25% Loss Margin</div>
              <div className="bg-amber-400/10 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl font-sans">📐</div>
              <h4 className="font-extrabold text-slate-100 text-base mb-3">Real-World Losses factored</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Solar cells degrade up to 25% due to fine tropical dust layers, high silicon surface temperatures (the Ugandan heat coefficient), conversion drops through pure sine inverter boards, and DC wire resistance drops. Our models prevent undersizing.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-[#00b67a]/20 border border-[#00b67a]/40 text-[#00b67a] text-[10px] font-black px-2.5 py-1 rounded-md uppercase">90% DoD Lithium</div>
              <div className="bg-amber-400/10 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl font-sans">🔋</div>
              <h4 className="font-extrabold text-slate-100 text-base mb-3">Depth of Discharge (DoD)</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We design strictly with premium LiFePO4 cells which tolerate up to 90% depth of discharge safely without structural decay. Cheap car batteries decay inside 6 months if discharged deeper than 50% capacity, leaving families stranded.
              </p>
            </div>

            <div className="bg-slate-900/80 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg relative">
              <div className="absolute -top-3 right-6 bg-[#00b67a]/20 border border-[#00b67a]/40 text-[#00b67a] text-[10px] font-black px-2.5 py-1 rounded-md uppercase">Dual Backup</div>
              <div className="bg-amber-400/10 text-amber-400 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-2xl font-sans">🔄</div>
              <h4 className="font-extrabold text-slate-100 text-base mb-3">Hybrid vs Off-Grid Roles</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                All Dynawatt packages operate as Smart Hybrid Backups. They link to solar PV string, grid supply, and battery cells. They act as off-grid solutions during heavy load shedding and automatically draw from the grid when batteries get critically low.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Client Reviews) */}
      <section id="testimonials" className="py-20 bg-slate-50 border-t border-slate-200 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest text-[#E8620A] bg-[#E8620A]/10 px-3.5 py-1.5 rounded-full uppercase">
              Client Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-slate-950 tracking-tight">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-t-4 border-amber-500 rounded-2xl shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <span className="text-5xl font-serif text-amber-500/80 leading-none select-none block mb-2">"</span>
                <div className="text-amber-500 text-sm mb-4">★★★★★</div>
                <p className="text-slate-700 text-sm md:text-base italic leading-relaxed mb-6">
                  We now run our fridge, TV, and 6 lights through the night. Not a single blackout since Dynawatt installed our system. Best decision we made this year.
                </p>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm md:text-base">— James K., Ntinda, Kampala</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">3kVA Hybrid Solar System</div>
              </div>
            </div>

            <div className="bg-white border-t-4 border-amber-500 rounded-2xl shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <span className="text-5xl font-serif text-amber-500/80 leading-none select-none block mb-2">"</span>
                <div className="text-amber-500 text-sm mb-4">★★★★★</div>
                <p className="text-slate-700 text-sm md:text-base italic leading-relaxed mb-6">
                  I contacted three companies. Dynawatt was the only one that sent a certified engineer to assess my roof before quoting a single shilling. That alone told me everything I needed to know.
                </p>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm md:text-base">— Sarah M., Kira, Wakiso</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">5kVA Hybrid Solar System</div>
              </div>
            </div>

            <div className="bg-white border-t-4 border-amber-500 rounded-2xl shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition duration-300">
              <div>
                <span className="text-5xl font-serif text-amber-500/80 leading-none select-none block mb-2">"</span>
                <div className="text-amber-500 text-sm mb-4">★★★★★</div>
                <p className="text-slate-700 text-sm md:text-base italic leading-relaxed mb-6">
                  They sized our system using our actual Yaka bills — not guesswork. The installation was clean: all conduit hidden, no exposed wiring anywhere. ERA-compliant work, exactly as promised.
                </p>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm md:text-base">— Emmanuel O., Mukono Town</div>
                <div className="text-xs text-slate-500 mt-1 font-medium">2kVA Studio Solar System</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://www.facebook.com/dynawattengineering/reviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-950 hover:text-[#E8620A] underline underline-offset-4 transition duration-200"
            >
              <span>Leave Us a Review on Facebook</span>
              <Icons.ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Solar */}
      <section id="why" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-950 mb-4 tracking-tight leading-tight">Why Choose Solar Energy?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg">Switching to solar is one of the best investments you can make for your home or business in Uganda.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Lower Electricity Bills", desc: "Significantly reduce or eliminate your monthly UEDCL Yaka expenditure.", icon: <Icons.TrendingDown /> },
              { title: "Zero Load Shedding Outages", desc: "Stay fully powered with clean automatic inverter backups during blackouts.", icon: <Icons.Battery /> },
              { title: "Sustainable Green Power", desc: "Harvest clean, safe, renewable energy without dangerous diesel exhausts.", icon: <Icons.Leaf /> },
              { title: "Long-Term Life Utility", desc: "Lithium cells operate with zero daily mechanical maintenance for 10+ years.", icon: <Icons.Hammer /> }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm text-center transform hover:-translate-y-1 transition duration-300">
                <div className="text-amber-500 mb-6 flex justify-center">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "h-12 w-12" })}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 tracking-tight">Our Solar Installation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Site Assessment", desc: "We evaluate your property's daily sunlight exposure and compute your precise power load patterns." },
              { step: "02", title: "System Sizing Design", desc: "We size monocrystalline panels, hybrid inverters, and battery capacities using professional schematics." },
              { step: "03", title: "Professional Installation", desc: "Our certified engineering technicians perform a swift, safe, and clean structure mounting setup." },
              { step: "04", title: "Testing & Support", desc: "We safety-test every connection, provide training, and execute a 1-year workmanship installation warranty." }
            ].map((item, i) => (
              <div key={i} className="relative pl-6 md:pl-2 pb-6 md:pb-0">
                <div className="text-6xl font-black text-slate-850 absolute -top-10 left-2 md:-left-4 z-0 font-mono select-none">{item.step}</div>
                <div className="relative z-10 pl-2">
                  <h3 className="text-xl font-bold mb-4 text-amber-500">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Solar Quote Form */}
      <section id="solar-quote-form" className="py-16 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white p-6 md:p-12 rounded-2xl shadow-xl text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-2 flex items-center gap-2">
              <span className="text-amber-500">☀️</span> Request a Tailored Solar Proposal
            </h3>
            <p className="text-slate-300 text-xs md:text-sm mb-8 leading-relaxed">
              Fill out this quick assessment, and our certified solar engineering team will prepare your custom schematic design and budget options.
            </p>

            {formSubmitted ? (
              <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 p-6 rounded-xl text-center">
                <span className="text-4xl mb-3 block">🎉</span>
                <h4 className="font-bold text-lg mb-1 text-white">Inquiry Received successfully!</h4>
                <p className="text-xs md:text-sm max-w-md mx-auto">
                  Thank you! Our leading solar engineers will finalize your design calculations and contact you shortly on <b>{formData.phone}</b> to schedule your 100% free site planning assessment.
                </p>
                <button 
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', district: '', packageOfInterest: '', timeline: '', message: '' });
                  }}
                  className="mt-4 text-xs text-amber-500 hover:text-amber-400 font-bold underline cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6 text-slate-150"
              >
                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-200 text-xs md:text-sm p-3 rounded-lg flex items-center">
                    <Icons.AlertTriangle className="h-4 w-4 mr-2 text-red-400" />
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Full Name *</label>
                    <input 
                      required 
                      type="text"
                      name="name"
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white text-sm focus:ring-2 focus:ring-amber-500 outline-none disabled:opacity-55" 
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                    <input 
                      required 
                      type="tel"
                      name="phone"
                      placeholder="e.g. 0751 473 830"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white text-sm focus:ring-2 focus:ring-amber-500 outline-none disabled:opacity-55" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Email Address</label>
                    <input 
                      type="email"
                      name="email"
                      placeholder="your@email.com" 
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white text-sm focus:ring-2 focus:ring-amber-500 outline-none disabled:opacity-55" 
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Your District or Area *</label>
                    <select 
                      required
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white text-sm focus:ring-2 focus:ring-amber-500 outline-none disabled:opacity-55"
                    >
                      <option value="" disabled>Select your district</option>
                      <optgroup label="Central Region (Fast On-Site)">
                        <option value="Kampala Central">Kampala Central</option>
                        <option value="Makindye">Makindye</option>
                        <option value="Kawempe">Kawempe</option>
                        <option value="Nakawa">Nakawa</option>
                        <option value="Rubaga">Rubaga</option>
                        <option value="Wakiso">Wakiso</option>
                        <option value="Kira">Kira</option>
                        <option value="Mukono">Mukono</option>
                        <option value="Entebbe">Entebbe</option>
                      </optgroup>
                      <optgroup label="Other Regions (Upcountry Logistics)">
                        <option value="Mbarara">Mbarara</option>
                        <option value="Jinja">Jinja</option>
                        <option value="Masaka">Masaka</option>
                        <option value="Fort Portal">Fort Portal</option>
                        <option value="Gulu">Gulu</option>
                        <option value="Lira">Lira</option>
                        <option value="Mbale">Mbale</option>
                        <option value="Soroti">Soroti</option>
                        <option value="Other Upcountry">Other District (Specify in details)</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Package of Interest</label>
                  <select 
                    name="packageOfInterest"
                    value={formData.packageOfInterest}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white text-sm focus:ring-2 focus:ring-amber-500 outline-none disabled:opacity-55"
                  >
                    <option value="Not sure yet (calculator will help)">Not sure yet (calculator will help)</option>
                    <option value="DW1: 2kVA Studio Solar Package">DW1: 2kVA Studio Solar Package</option>
                    <option value="DW2: 3kVA Hybrid Solar Package">DW2: 3kVA Hybrid Solar Package</option>
                    <option value="DW3: 5kVA Premium Solar Package">DW3: 5kVA Premium Solar Package</option>
                    <option value="DW4: 8kVA Pro Solar Package">DW4: 8kVA Pro Solar Package</option>
                    <option value="DW5: 10kVA Enterprise Solar Setup">DW5: 10kVA Enterprise Solar Setup</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-3">When do you need your system installed? *</label>
                  <div className="space-y-3">
                    {[
                      { id: 'asap', label: 'As soon as possible (within 2 weeks)' },
                      { id: 'month', label: 'Within 1 month' },
                      { id: 'three_months', label: 'Within 1–3 months' },
                      { id: 'research', label: "I'm still researching" }
                    ].map((opt) => (
                      <label key={opt.id} className="flex items-center gap-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="timeline"
                          value={opt.label}
                          checked={formData.timeline === opt.label}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          required
                          className="w-4 h-4 text-amber-500 bg-slate-800 border-slate-700 focus:ring-amber-500 focus:ring-2 outline-none cursor-pointer"
                        />
                        <span className="text-xs md:text-sm text-slate-300 group-hover:text-white transition">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Additional details (optional)</label>
                  <textarea 
                    rows={4} 
                    maxLength={1000}
                    name="message"
                    placeholder="e.g. I have a 3-bedroom home in Kira. Monthly Yaka spend is about UGX 80,000." 
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2.5 text-white text-sm focus:ring-2 focus:ring-amber-500 outline-none resize-none disabled:opacity-55 font-sans" 
                  />
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#E8620A] hover:bg-[#ff7315] text-white font-black py-3.5 px-6 rounded-xl text-sm transition shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Preparing Assessment...
                      </>
                    ) : (
                      <>
                        <span>Send My Assessment Request →</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 mt-4 text-center leading-relaxed">
                    🔒 Your details are private. We do not share your information with third parties. <br />
                    Our engineer responds within 24 hours on business days.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Solar FAQ Section */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200 text-left">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Solar & Battery FAQ for Uganda</h3>
            <p className="text-xs md:text-sm text-slate-500 mt-2">Essential answers to protect your power investment and ensure long-term reliability.</p>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-red-500 font-bold">⚠️</span> Why are cheap solar batteries dangerous?
              </h4>
              <p className="text-xs md:text-sm text-slate-650 leading-relaxed pl-6">
                Substandard, unbranded, or second-hand lead-acid/lithium batteries lack thermal safety management and robust cell balancers (BMS). In Uganda’s warm climates, they degrade rapidly inside 6–12 months, fail to supply rated power, and in rare cases can experience dangerous thermal runaways (fires). At Dynawatt, we only install certified Tier-1 lithium iron phosphate (LiFePO4) solar cabinets with high-efficiency smart BMS, designed for safe, steady performance for over 10 years.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-[#00b67a] font-bold">✓</span> How does a smart hybrid backup solar system work?
              </h4>
              <p className="text-xs md:text-sm text-slate-650 leading-relaxed pl-6">
                A hybrid system ties your solar array, lithium storage battery, and UEDCL grid feed together. When grid power is on, it powers the house from solar first, keeping your batteries full. The millisecond a load-shedding blackout hits, the smart hybrid inverter isolates the line and transfers priority to battery backup, preventing any blinking, resetting, or damage to your TVs, computers, or active appliances.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="text-amber-500 font-bold">☀️</span> Do you offer warranties on panels and equipment?
              </h4>
              <p className="text-xs md:text-sm text-slate-650 leading-relaxed pl-6">
                All physical equipment and hardware are protected by extensive <strong>manufacturer warranties</strong> directly (including a 15 to 25-year performance warranty on monocrystalline panels, and a 5-year manufacturer warranty on smart lithium battery cells and premium hybrid inverters like Growatt, Deye, Victron, Amp Nova, Felicity, Sumry, or Solar Riio Sun). Dynawatt Engineering is an installation contractor and is not the warrantor of these physical products, but we actively assist you with any manufacturer warranty processing, while we directly support you with a dedicated <strong>1-Year Installation Workmanship Warranty</strong> on our physical wiring and structural mounting execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-6 tracking-tight">Ready to Switch to Solar?</h2>
          <p className="text-lg md:text-xl text-slate-800 mb-10 max-w-2xl mx-auto font-medium">Contact DYNAWATT ENGINEERING today for expert, certified solar solutions in Kampala and across all districts of Uganda.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:+256751473830" className="inline-flex justify-center items-center bg-slate-950 text-white font-black py-4 px-10 rounded-xl hover:bg-slate-900 transition shadow-xl active:scale-95">
              <Icons.Phone className="h-5 w-5 mr-2" />
              Call Now: +256 751 473 830
            </a>
            <a href="#solar-quote-form" className="inline-flex justify-center items-center bg-white text-slate-950 font-black py-4 px-10 rounded-xl hover:bg-slate-100 transition shadow-xl active:scale-95">
              Book Free Site Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solar;
