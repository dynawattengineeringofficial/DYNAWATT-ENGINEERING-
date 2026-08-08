import express from "express";
import path from "path";
import fs from "fs";
import compression from "compression";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Ensure data_store directory exists
const DATA_DIR = path.join(process.cwd(), "data_store");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

const CONFIG_FILE = path.join(DATA_DIR, "config.json");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

const DEFAULT_CONFIG = {
  emergencyMode: false,
  contactPhone: "+256 751 473 830",
  whatsapp: "+256 751 473 830",
  heroHeadline: "Dynawatt Engineering Services: Premier Electrical & Lighting Solutions in Uganda",
  formspreeId: "mkgdnkzb"
};

// Ensure data files exist with valid defaults synchronously to prevent empty/corrupt reads
if (!fs.existsSync(CONFIG_FILE)) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(DEFAULT_CONFIG, null, 2), "utf-8");
}
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), "utf-8");
}

// In-memory cache for config to eliminate disk access latency on hot paths
let cachedConfig: any = null;

async function readConfig() {
  if (cachedConfig) {
    return cachedConfig;
  }
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const data = await fs.promises.readFile(CONFIG_FILE, "utf-8");
      cachedConfig = JSON.parse(data);
      return cachedConfig;
    }
  } catch (error) {
    console.error("Error reading config, using defaults:", error);
  }
  cachedConfig = DEFAULT_CONFIG;
  return DEFAULT_CONFIG;
}

async function writeConfig(config: any) {
  cachedConfig = config;
  await fs.promises.writeFile(CONFIG_FILE, JSON.stringify(config, null, 2), "utf-8");
}

async function readLeads() {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const data = await fs.promises.readFile(LEADS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading leads:", error);
  }
  return [];
}

async function writeLeads(leads: any[]) {
  await fs.promises.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), "utf-8");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Enable compression to optimize transfer sizes for massive PageSpeed improvement
  app.use(compression());

  // Use JSON middleware
  app.use(express.json());

  // Helper to initialize Gemini SDK
  const getAI = () => {
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY is missing.");
    }
    return new GoogleGenAI({ apiKey });
  };

  // API endpoints for Site Configuration
  app.get("/api/config", async (_req, res) => {
    const config = await readConfig();
    const { adminPassword, ...publicConfig } = config;
    res.json(publicConfig);
  });

  // API proxy to cache Trustpilot bootstrap script with an efficient 1-year cache TTL (immutable)
  app.get("/api/trustpilot-bootstrap", async (_req, res) => {
    try {
      const response = await fetch("https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js");
      if (response.ok) {
        const content = await response.text();
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        res.setHeader("Content-Type", "application/javascript; charset=utf-8");
        res.send(content);
      } else {
        res.redirect("https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js");
      }
    } catch (error) {
      res.redirect("https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js");
    }
  });

  app.post("/api/config", async (req, res) => {
    try {
      const newConfig = req.body;
      const currentConfig = await readConfig();
      // Ensure we don't let anyone overwrite the password via public config endpoint
      if (newConfig.adminPassword) {
        delete newConfig.adminPassword;
      }
      const mergedConfig = { ...currentConfig, ...newConfig };
      await writeConfig(mergedConfig);
      
      const { adminPassword, ...publicConfig } = mergedConfig;
      res.json(publicConfig);
    } catch (error) {
      console.error("Error saving config:", error);
      res.status(500).json({ error: "Failed to save configuration" });
    }
  });

  // Admin login and authentication
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const config = await readConfig();
      const actualPassword = config.adminPassword || "dynawatt";
      
      if (username === "admin" && password === actualPassword) {
        res.json({ success: true });
      } else {
        res.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Admin change password
  app.post("/api/admin/change-password", async (req, res) => {
    try {
      const { currentPassword, newPassword } = req.body;
      const config = await readConfig();
      const actualPassword = config.adminPassword || "dynawatt";
      
      if (currentPassword !== actualPassword) {
        return res.status(400).json({ error: "Current password is incorrect" });
      }
      
      config.adminPassword = newPassword;
      await writeConfig(config);
      res.json({ success: true });
    } catch (error) {
      console.error("Change password error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // API endpoints for Prospects
  app.get("/api/prospects", async (_req, res) => {
    const leads = await readLeads();
    res.json(leads);
  });

  app.post("/api/prospects", async (req, res) => {
    try {
      const lead = req.body;
      const leads = await readLeads();
      const newLead = {
        ...lead,
        id: lead.id || Date.now().toString(),
        date: lead.date || new Date().toLocaleDateString(),
        status: lead.status || 'new'
      };
      // Prepend so latest leads show up first
      leads.unshift(newLead);
      await writeLeads(leads);
      res.json({ success: true, lead: newLead });
    } catch (error) {
      console.error("Error saving lead:", error);
      res.status(500).json({ error: "Failed to save lead" });
    }
  });

  app.post("/api/prospects/update-status", async (req, res) => {
    try {
      const { id, status } = req.body;
      const leads = await readLeads();
      const updatedLeads = leads.map((l: any) => l.id === id ? { ...l, status } : l);
      await writeLeads(updatedLeads);
      res.json({ success: true });
    } catch (error) {
      console.error("Error updating lead status:", error);
      res.status(500).json({ error: "Failed to update lead status" });
    }
  });

  app.delete("/api/prospects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const leads = await readLeads();
      const filteredLeads = leads.filter((l: any) => l.id !== id);
      await writeLeads(filteredLeads);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting lead:", error);
      res.status(500).json({ error: "Failed to delete lead" });
    }
  });

  // API endpoint for chatbot
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      const ai = getAI();

      const systemInstruction = `You are the Dynawatt Engineering Services Assistant, a helpful and professional bot for an electrical engineering company in Uganda.
      
      Company Info:
      - Name: Dynawatt Engineering Services
      - Location: Kampala, Uganda (serving greater Kampala region including Mukono, Wakiso, Entebbe).
      - Services: Residential wiring, Commercial fit-outs, Industrial solutions, Solar installation, Modern lighting (Floating chandeliers, Aluminum profile lighting), CCTV, Yaka meter repair.
      - Contact: +256 751 473 830 (Phone & WhatsApp).
      - Tone: Professional, reliable, safety-conscious, and friendly.
      - Context: Mention local Ugandan context where appropriate (e.g., Umeme, Yaka, local areas like Ntinda, Kira, Munyonyo).
      
      Your goal is to answer questions about services, provide general safety advice, and encourage users to contact the team for quotes or emergencies. If you don't know something specific about a project's cost, ask them to contact the team for a site visit.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction,
        }
      });

      res.json({ text: response.text || "I'm sorry, I couldn't process that request." });
    } catch (error) {
      console.error("Chat Error:", error);
      res.status(500).json({ error: "I'm having trouble connecting right now. Please try again or call us directly at +256 751 473 830." });
    }
  });

  // 301 Permanent Redirects for legacy query string URLs (?page=xxx) to clean slugs
  app.use((req, res, next) => {
    if (req.method === 'GET' && req.query.page) {
      const pageQuery = String(req.query.page).toLowerCase().trim();
      const legacyRedirectMap: Record<string, string> = {
        'home': '/',
        'about': '/about',
        'services': '/services',
        'solar': '/solar',
        'contact': '/contact',
        'quote': '/contact',
        'guarantee': '/guarantee',
        'blog': '/blog',
        'location': '/areas-we-serve',
        'privacy_policy': '/privacy-policy',
        'privacy-policy': '/privacy-policy',
        'terms_of_service': '/terms-of-service',
        'terms-of-service': '/terms-of-service',
        'thank_you': '/thank-you',
        'thank-you': '/thank-you',

        // Location query params
        'loc_kampala': '/areas-we-serve/kampala',
        'loc_entebbe': '/areas-we-serve/entebbe',
        'loc_wakiso': '/areas-we-serve/wakiso',
        'loc_kololo': '/areas-we-serve/kololo',
        'loc_kira': '/areas-we-serve/kira',
        'loc_najjera': '/areas-we-serve/najjera',
        'loc_mukono': '/solar-installation-mukono',
        'loc_hoima': '/solar-installation-hoima',
        'loc_lira': '/electrical-installation-lira',
        'loc_gulu': '/electrical-installation-gulu',
        'loc_kiboga': '/lighting-installation-kiboga',
        'loc_nakweero': '/solar-installation-nakweero',
        'loc_seeta': '/lightning-arrestor-installation-seeta',

        // SEO and blog query params
        'seo_solar': '/blog/solar-installation-kampala',
        'seo_elec_install': '/blog/electrical-installation-kampala',
        'elec_install': '/blog/electrical-installation-kampala',
        'seo_profile_lighting': '/blog/aluminum-profile-lighting-uganda',
        'seo_lighting': '/blog/aluminum-profile-lighting-uganda',
        'profile_lighting': '/blog/aluminum-profile-lighting-uganda',
        'seo_cctv': '/blog/cctv-installation-uganda',
        'cctv': '/blog/cctv-installation-uganda',
        'seo_house_wiring_cost': '/blog/cost-wiring-house-uganda',
        'seo_wiring_cost': '/blog/cost-wiring-house-uganda',
        'house_wiring_cost': '/blog/cost-wiring-house-uganda',
        'seo_smart_home': '/blog/smart-home-installation-uganda',
        'smart_home': '/blog/smart-home-installation-uganda',
        'seo_blog_conduit_slab': '/blog/slab-conduit-works-uganda',
        'seo_conduit': '/blog/slab-conduit-works-uganda',
        'seo_arch_lighting': '/blog/modern-lighting-designs-uganda',
        'arch_lighting': '/blog/modern-lighting-designs-uganda',
        'seo_lighting_design': '/blog/modern-lighting-designs-uganda',
        'seo_commercial': '/blog/commercial-electrical-contractors',
        'commercial': '/blog/commercial-building-wiring-cost',
        'seo_maintenance': '/blog/electrical-maintenance-guide-uganda',
        'maintenance': '/blog/electrical-maintenance-guide-uganda',
        'seo_yaka_meter': '/blog/yaka-meter-troubleshooting',
        'yaka_meter': '/blog/yaka-meter-troubleshooting',
        'seo_warm_switches': '/blog/why-electrical-switches-get-warm',
        'warm_switches': '/blog/why-electrical-switches-get-warm',
        'seo_solar_maintenance': '/blog/solar-panel-maintenance-uganda',
        'solar_maintenance': '/blog/solar-panel-maintenance-uganda',
        'seo_bulb_blowouts': '/blog/why-do-my-light-bulbs-keep-blowing',
        'bulb_blowouts': '/blog/why-do-my-light-bulbs-keep-blowing',
        'seo_wiring_2_bedroom': '/blog/2-bedroom-house-wiring-cost',
        'wiring_2_bedroom': '/blog/2-bedroom-house-wiring-cost',
        'seo_wiring_3_bedroom': '/blog/3-bedroom-house-wiring-cost',
        'wiring_3_bedroom': '/blog/3-bedroom-house-wiring-cost',
        'seo_wiring_commercial': '/blog/commercial-building-wiring-cost',
        'wiring_commercial': '/blog/commercial-building-wiring-cost',
        'seo_blog_cctv': '/blog/cctv-camera-selection-guide',
        'seo_lightning_protection': '/blog/lightning-protection-arrestor-uganda'
      };

      const targetPath = legacyRedirectMap[pageQuery] || '/';
      return res.redirect(301, targetPath);
    }
    next();
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), 'dist');
    
    // 1. Serve hashed assets inside the assets folder with aggressive 1-year cache (immutable)
    app.use('/assets', express.static(path.join(distPath, 'assets'), {
      immutable: true,
      maxAge: '1y',
    }));
    
    // 2. Serve static public files (images, favicons, logos, icons) with a 7-day cache
    app.use(express.static(distPath, {
      index: false,
      maxAge: '7d',
    }));
    
    // Custom fallback resolution: serve route-specific prerendered HTML if it exists,
    // otherwise fallback to the primary SPA index.html shell.
    app.use((req, res) => {
      if (req.method !== 'GET') {
        res.status(404).end();
        return;
      }
      
      const cleanPath = req.path.replace(/\/$/, ""); // Normalize trailing slashes
      
      let filePath = path.join(distPath, cleanPath, 'index.html');
      if (cleanPath === "") {
        filePath = path.join(distPath, 'index.html');
      }
      
      if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
      } else {
        res.sendFile(path.join(distPath, 'index.html'));
      }
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
