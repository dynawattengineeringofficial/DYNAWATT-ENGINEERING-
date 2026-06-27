import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message, history } = req.body;
    
    // Support either variable name since Vercel env names can vary
    const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
    if (!apiKey) {
      console.error("Missing Gemini API Key");
      return res.status(500).json({ error: "Missing API Key" });
    }

    const ai = new GoogleGenAI({ apiKey });

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
        ...(Array.isArray(history) ? history : []),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction,
      }
    });

    res.status(200).json({ text: response.text || "I'm sorry, I couldn't process that request." });
  } catch (error) {
    console.error("Vercel API Chat Error:", error);
    res.status(500).json({ error: "I'm having trouble connecting right now." });
  }
}
