import express from "express";
import path from "path";
import fs from "fs";
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
  heroHeadline: "Dynawatt Engineering: Premier Electrical & Lighting Solutions in Uganda",
  formspreeId: "mkgdnkzb"
};

// Ensure data files exist with valid defaults synchronously to prevent empty/corrupt reads
if (!fs.existsSync(CONFIG_FILE)) {
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(DEFAULT_CONFIG, null, 2), "utf-8");
}
if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), "utf-8");
}

async function readConfig() {
  try {
    if (fs.existsSync(CONFIG_FILE)) {
      const data = await fs.promises.readFile(CONFIG_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading config, using defaults:", error);
  }
  return DEFAULT_CONFIG;
}

async function writeConfig(config: any) {
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

      const systemInstruction = `You are the Dynawatt Engineering Assistant, a helpful and professional bot for an electrical engineering company in Uganda.
      
      Company Info:
      - Name: Dynawatt Engineering
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
    app.use(express.static(distPath));
    // Provide a wildcard fallback to index.html for SPA routing. Wait, AI Studio says Express v4 is app.get('*', ...)
    // Wait, let's use standard routing
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
