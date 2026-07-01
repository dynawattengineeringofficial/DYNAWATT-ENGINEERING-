// We will store callbacks here to interact with the React state
type NavigationCallback = (page: string) => void;
type LeadSubmitCallback = (lead: any) => void;

let onNavigate: NavigationCallback | null = null;
let onLeadSubmit: LeadSubmitCallback | null = null;

export function setWebMcpCallbacks(callbacks: {
  onNavigate?: NavigationCallback;
  onLeadSubmit?: LeadSubmitCallback;
}) {
  if (callbacks.onNavigate) onNavigate = callbacks.onNavigate;
  if (callbacks.onLeadSubmit) onLeadSubmit = callbacks.onLeadSubmit;
}

// Function to register all tools with WebMCP dynamically
export async function registerAllWebMcpTools() {
  try {
    // Dynamically import webmcp-kit to prevent production build issues
    // @ts-ignore
    const kit = await import(/* @vite-ignore */ 'webmcp-kit');
    if (!kit || !kit.defineTool) {
      console.warn("⚠️ [WebMCP] webmcp-kit could not be loaded dynamically in this environment.");
      return;
    }

    // Dynamically import zod to prevent production build issues
    // @ts-ignore
    const zodMod = await import(/* @vite-ignore */ 'zod');
    if (!zodMod || !zodMod.z) {
      console.warn("⚠️ [WebMCP] zod could not be loaded dynamically in this environment.");
      return;
    }

    const { defineTool, jsonContent, textContent } = kit;
    const { z } = zodMod;

    // 1. Tool to get services and details (Read-only)
    const getServices = defineTool({
      name: 'getServices',
      title: 'Get Services & Packages',
      description: 'Retrieve the active list of professional electrical services, pricing, hybrid solar packages (DW1-DW5), and locations served by Dynawatt Engineering in Kampala, Uganda.',
      inputSchema: z.object({}),
      annotations: {
        readOnlyHint: true
      },
      execute: async () => {
        return jsonContent({
          company: "Dynawatt Engineering",
          headquarters: "Kampala, Uganda",
          licensed: "ERA Licensed, BS 7671 Certified, UEDCL Approved",
          contactPhone: "+256 751 473 830",
          services: [
            {
              name: "Residential House Wiring",
              description: "Full house wiring from conduit piping in the slab to final fixtures fitting. Fully BS 7671 compliant."
            },
            {
              name: "Architectural & Profile Lighting",
              description: "Premium aluminum profile lighting, custom suspended linear LED bars, luxury staircase step lighting, and beautiful floating ceiling light designs."
            },
            {
              name: "Certified Solar & Hybrid Battery Installations",
              description: "Tier-1 monocrystalline panels, Growatt/Deye/Victron/Amp Nova/Felicity inverters, and high-performance LiFePO4 lithium battery backup cabinets with 10+ year lifespans."
            },
            {
              name: "CCTV Security Systems",
              description: "HD IP camera networks with intelligent remote access and night vision for complete property coverage."
            },
            {
              name: "Industrial & Commercial Maintenance",
              description: "Scheduled maintenance contracts, earth loop impedance checks, distribution board rebuilds, and rapid 2-hour emergency fault response."
            }
          ],
          solarPackages: [
            {
              code: "DW1",
              name: "2kVA Studio Solar Package",
              price: "UGX 4,400,000",
              bestFor: "Small rentals, retail shops, or security outposts",
              includes: "2kVA Smart Inverter, 24V 100Ah LiFePO4 Battery (2.4kWh), 2x 450W Mono Panels, full AC/DC protection board"
            },
            {
              code: "DW2",
              name: "3kVA Hybrid Solar Package",
              price: "UGX 7,200,000",
              bestFor: "Standard 2-bedroom home or medium retail outlet",
              includes: "3.2kW High-Frequency Hybrid Inverter, 48V 100Ah LiFePO4 Battery (4.8kWh), 4x 450W Mono Panels, full installation workmanship"
            },
            {
              code: "DW3",
              name: "5kVA Premium Solar Package",
              price: "UGX 10,800,000",
              bestFor: "Standard 3-bedroom family residence (No heavy cooling loads)",
              includes: "5.5kW Smart Hybrid Inverter, 48V 100Ah Heavy Duty LiFePO4 Battery (4.8kWh), 6x 450W Mono Panels, full heavy mounting rack"
            },
            {
              code: "DW4",
              name: "8kVA Pro Solar Package",
              price: "UGX 14,500,000",
              bestFor: "Large 4-bedroom executive duplex with borehole pump and deep cooling",
              includes: "8kW Dual-MPPT Industrial Inverter, 2x 48V 100Ah LiFePO4 Batteries (9.6kWh total), 10x 450W Mono Panels, full certification paperwork"
            },
            {
              code: "DW5",
              name: "10kVA Enterprise Solar Setup",
              price: "UGX 19,200,000",
              bestFor: "Large commercial offices, hotel blocks, or executive villas",
              includes: "10.2kW Twin-Phase Inverter, 3x 48V 100Ah Smart LiFePO4 Cabinets (14.4kWh total), 14x 450W Mono Panels, heavy structure mounting"
            }
          ],
          locationsServed: [
            "Kampala Central", "Nakawa", "Makindye", "Rubaga", "Kawempe",
            "Kira", "Entebbe", "Wakiso", "Mukono", "Jinja", "Mbarara",
            "Masaka", "Gulu", "Lira", "Arua", "Fort Portal", "Hoima", "Mbale"
          ]
        });
      }
    });

    // 2. Tool to calculate and estimate solar system sizes
    const calculateSolarSystem = defineTool({
      name: 'calculateSolarSystem',
      title: 'Calculate Solar Sizing',
      description: 'Calculate the recommended hybrid solar system size, inverter kW rating, battery storage capacity (kWh), panel count, and closest pre-engineered Dynawatt package based on the user\'s energy needs or Yaka monthly electricity bill in UGX or kWh.',
      inputSchema: z.object({
        monthlyKwh: z.number().optional().describe('Monthly electricity consumption in kWh (e.g. 250). If omitted, monthlyBillUGX will be used to estimate it.'),
        monthlyBillUGX: z.number().optional().describe('Average monthly Yaka power bill in Ugandan Shillings (UGX) (e.g. 150000). Used to estimate kWh consumption if monthlyKwh is not provided.'),
        isBackupOnly: z.boolean().optional().default(false).describe('True if the user only wants battery backup for load shedding blackout protection (no solar panels). False for a full hybrid savings setup.')
      }),
      annotations: {
        readOnlyHint: true
      },
      execute: async ({ monthlyKwh, monthlyBillUGX, isBackupOnly }: { monthlyKwh?: number; monthlyBillUGX?: number; isBackupOnly?: boolean }) => {
        // Standard estimation: if kWh not supplied but UGX is, estimate it assuming ~900 UGX per kWh as standard domestic tariff
        let kwhVal = monthlyKwh;
        if (!kwhVal && monthlyBillUGX) {
          kwhVal = Math.round(monthlyBillUGX / 900);
        }
        // Default fallback
        if (!kwhVal) {
          kwhVal = 250;
        }

        // Sizing constants (calibrated from Claude Recalibration)
        const PSH = 4.5;                  // Kampala peak sun hours
        const DOD = 0.80;                 // depth of discharge
        const INVERTER_EFF = 0.90;
        const SYSTEM_LOSS = 0.25;         // wiring/temp/dust/MPPT derate
        const NIGHT_LOAD_FRACTION = 0.40; // % of daily kWh drawn after dark
        const PANEL_WATT_STANDARD = 450;  // standard residential panel
        const PANEL_WATT_HEAVY = 600;     // larger panel, used once array crosses heavy-load threshold
        const HEAVY_LOAD_ARRAY_KW_THRESHOLD = 4.0;
        const BATTERY_PACK_SIZE = 2.4;    // kWh per battery module

        const dailyKwh = kwhVal / 30;
        const peakLoadKw = dailyKwh / 8; // rough estimate
        const nightLoadKwh = dailyKwh * NIGHT_LOAD_FRACTION;
        const batteryNameplateKwh = nightLoadKwh / (DOD * INVERTER_EFF);
        
        const roundUpToStep = (val: number, step: number) => Math.ceil(val / step) * step;
        const batteryFinalKwh = roundUpToStep(batteryNameplateKwh, BATTERY_PACK_SIZE);

        let panelCount = 0;
        let arrayKw = 0;
        let inverterKw = 0;
        let panelWatt = PANEL_WATT_STANDARD;

        if (isBackupOnly) {
          inverterKw = Math.max(peakLoadKw * 1.25, 1.0);
        } else {
          const requiredGenerationKwh = dailyKwh / (1 - SYSTEM_LOSS);
          arrayKw = requiredGenerationKwh / PSH;
          panelWatt = arrayKw > HEAVY_LOAD_ARRAY_KW_THRESHOLD ? PANEL_WATT_HEAVY : PANEL_WATT_STANDARD;
          panelCount = Math.ceil((arrayKw * 1000) / panelWatt);
          if (panelCount > 0 && panelCount % 2 !== 0) {
            panelCount += 1; // even number for symmetric layout
          }
          arrayKw = (panelCount * panelWatt) / 1000;
          inverterKw = Math.max(arrayKw * 1.15, peakLoadKw * 1.25);
        }

        const tierFromInverterKw = (kw: number) => {
          if (kw <= 3.5) return { label: '3kW Hybrid System (Package DW2)', code: 'DW2', price: 'UGX 7,200,000' };
          if (kw <= 6.0) return { label: '5kW Premium Solar System (Package DW3)', code: 'DW3', price: 'UGX 10,800,000' };
          if (kw <= 8.0) return { label: '8kW Pro Solar System (Package DW4)', code: 'DW4', price: 'UGX 14,500,000' };
          return { label: '10kW+ Enterprise Solar Setup (Package DW5)', code: 'DW5', price: 'UGX 19,200,000+' };
        };

        const recommendation = tierFromInverterKw(inverterKw);

        return jsonContent({
          inputKwh: kwhVal,
          estimatedDailyKwh: Number(dailyKwh.toFixed(2)),
          peakDemandEstKw: Number(peakLoadKw.toFixed(2)),
          isBackupOnly,
          sizingResult: {
            panels: isBackupOnly ? "None (Backup Only)" : `${panelCount} x ${panelWatt}W Monocrystalline Panels`,
            totalSolarArrayCapacity: isBackupOnly ? "0 kW" : `${arrayKw.toFixed(2)} kW`,
            recommendedInverterRating: `${inverterKw.toFixed(1)} kW`,
            recommendedBatteryStorage: `${batteryFinalKwh.toFixed(1)} kWh LiFePO4 Lithium Battery`
          },
          closestPackage: recommendation,
          message: `Based on your monthly consumption of ${kwhVal} kWh, we recommend our ${recommendation.label}. Price is approximately ${recommendation.price}. This system will secure reliable electricity and eliminate load shedding stress.`
        });
      }
    });

    // 3. Tool to navigate the website visually
    const navigateToPage = defineTool({
      name: 'navigateToPage',
      title: 'Navigate Website Page',
      description: 'Navigate the website UI to a specific page or section dynamically. Ideal when a user requests to view the services, pricing, solar packages, about page, or contact section.',
      inputSchema: z.object({
        page: z.enum(['home', 'services', 'solar', 'about', 'areas-we-serve', 'contact', 'blog', 'guarantee'])
          .describe('The name of the page/route to open in the UI.')
      }),
      execute: async ({ page }: { page: any }) => {
        if (onNavigate) {
          onNavigate(page);
          return textContent(`Successfully navigated to the "${page}" page visually.`);
        }
        return textContent(`No navigation listener is active right now. However, I recorded a navigation request for page: "${page}".`);
      }
    });

    // 4. Tool to submit the General Site Assessment Lead Form
    const submitLeadForm = defineTool({
      name: 'submitLeadForm',
      title: 'Submit Lead Form',
      description: 'Submit a certified site assessment, quote request, or electrical inquiry directly to Dynawatt Engineering. This registers a lead on the live admin dashboard, fires EmailJS notifications, and stores the contact details in Supabase.',
      inputSchema: z.object({
        name: z.string().describe("The prospective client's full name"),
        phone: z.string().describe("WhatsApp or phone number (e.g. 0772123456 or +256772123456)"),
        location: z.string().describe("Ugandan district or area (e.g. Nakawa, Kira, Wakiso, Kampala Central, Mukono)"),
        serviceType: z.enum(['Residential', 'Commercial', 'Emergency', 'Solar', 'Security', 'Yaka', 'Inverter', 'SiteVisit'])
          .describe("The category of electrical service requested"),
        message: z.string().describe("Details regarding the electrical problem, house construction, or solar inquiry")
      }),
      execute: async (input: any) => {
        // Submit to Supabase - match LeadForm.tsx
        const SUPABASE_URL = "https://qpmrcphzexlsyiaxiyem.supabase.co";
        const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbXJjcGh6ZXhsc3lpYXhpeWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MzE0MDEsImV4cCI6MjA5NzAwNzQwMX0.UMozbECVUFd0d1lnKIvIi1gUcpBpLXJsu-RkRKrZDvI";
        
        let supabaseSuccess = false;
        let emailSuccess = false;

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
              name: input.name,
              phone: input.phone,
              location: input.location,
              service_type: input.serviceType,
              message: input.message
            })
          });
          supabaseSuccess = response.ok;
        } catch (e) {
          console.warn("Supabase submit failed in WebMCP tool:", e);
        }

        // Submit to EmailJS
        try {
          const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              service_id: "service_nuq2cr4",
              template_id: "template_vcr3tps",
              user_id: "PFYeNP7qzbgG8YB94",
              template_params: {
                name: input.name,
                phone: input.phone,
                location: input.location,
                service_type: input.serviceType,
                message: input.message
              }
            })
          });
          emailSuccess = emailRes.ok;
        } catch (e) {
          console.warn("EmailJS submit failed in WebMCP tool:", e);
        }

        // Call state callback to register it in App's lead dashboard list
        if (onLeadSubmit) {
          const localLead = {
            id: Date.now().toString(),
            name: input.name,
            phone: input.phone,
            location: input.location,
            serviceType: input.serviceType,
            message: input.message,
            date: new Date().toLocaleDateString(),
            status: 'new'
          };
          onLeadSubmit(localLead);
        }

        return jsonContent({
          status: "success",
          message: `Lead submission registered successfully for ${input.name}! Our certified engineer will call shortly at ${input.phone}.`,
          integrations: {
            databasePersisted: supabaseSuccess,
            notificationsDispatched: emailSuccess
          }
        });
      }
    });

    // 5. Tool to submit the Custom Solar Sizing Assessment form
    const submitSolarForm = defineTool({
      name: 'submitSolarForm',
      title: 'Submit Solar Assessment',
      description: 'Submit a deep Solar PV & Backup site sizing request. This registers a high-intent solar inquiry in our database and notifies our solar engineers immediately.',
      inputSchema: z.object({
        name: z.string().describe("User's full name"),
        phone: z.string().describe("WhatsApp or phone number"),
        email: z.string().optional().describe("Email address"),
        district: z.string().describe("District/Location (e.g. Kira, Entebbe, Wakiso, Mukono)"),
        packageOfInterest: z.string().describe("E.g. 'DW3: 5kVA Premium Solar Package' or 'Not sure yet'"),
        timeline: z.string().describe("Installation timeline (e.g. 'As soon as possible', 'Within 1 month')"),
        message: z.string().optional().describe("Additional requirements (e.g. monthly bill spend)")
      }),
      execute: async (input: any) => {
        const SUPABASE_URL = "https://qpmrcphzexlsyiaxiyem.supabase.co";
        const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwbXJjcGh6ZXhsc3lpYXhpeWVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MzE0MDEsImV4cCI6MjA5NzAwNzQwMX0.UMozbECVUFd0d1lnKIvIi1gUcpBpLXJsu-RkRKrZDvI";
        
        const fullMessage = `
Email Address: ${input.email || 'None Provided'}
District/Area: ${input.district || 'None Selected'}
Package of Interest: ${input.packageOfInterest || 'None Selected'}
When Needed: ${input.timeline || 'None Selected'}
Additional Details: ${input.message || 'None'}
        `.trim();

        let supabaseSuccess = false;
        let emailSuccess = false;

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
              name: input.name,
              phone: input.phone,
              location: `Solar Section - ${input.district}`,
              service_type: "Solar Installation",
              message: fullMessage
            })
          });
          supabaseSuccess = response.ok;
        } catch (e) {
          console.warn("Supabase submit failed in WebMCP solar tool:", e);
        }

        try {
          const emailRes = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              service_id: "service_nuq2cr4",
              template_id: "template_vcr3tps",
              user_id: "PFYeNP7qzbgG8YB94",
              template_params: {
                name: input.name,
                phone: input.phone,
                location: `Solar Section - ${input.district}`,
                service_type: "Solar Installation",
                message: fullMessage
              }
            })
          });
          emailSuccess = emailRes.ok;
        } catch (e) {
          console.warn("EmailJS submit failed in WebMCP solar tool:", e);
        }

        if (onLeadSubmit) {
          const localLead = {
            id: Date.now().toString(),
            name: input.name,
            phone: input.phone,
            location: `Solar Section - ${input.district}`,
            serviceType: "Solar Installation",
            message: fullMessage,
            date: new Date().toLocaleDateString(),
            status: 'new'
          };
          onLeadSubmit(localLead);
        }

        return jsonContent({
          status: "success",
          message: `Solar assessment submitted successfully for ${input.name}! Our solar engineering dispatch team will call to schedule your free site load check.`,
          integrations: {
            databasePersisted: supabaseSuccess,
            notificationsDispatched: emailSuccess
          }
        });
      }
    });

    getServices.register();
    calculateSolarSystem.register();
    navigateToPage.register();
    submitLeadForm.register();
    submitSolarForm.register();
    console.log("⚡ [WebMCP] All tools registered successfully with the system.");
  } catch (err) {
    console.error("❌ [WebMCP] Registration failure:", err);
  }
}

// Function to safely unregister all tools
export async function unregisterAllWebMcpTools() {
  try {
    // @ts-ignore
    const kit = await import(/* @vite-ignore */ 'webmcp-kit');
    if (kit && kit.unregisterAll) {
      kit.unregisterAll();
      console.log("⚡ [WebMCP] All tools unregistered successfully.");
    }
  } catch (err) {
    console.error("❌ [WebMCP] Unregistration failure:", err);
  }
}
