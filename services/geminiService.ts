import { GoogleGenAI } from "@google/genai";

const getAI = () => {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing.");
  }
  return new GoogleGenAI({ apiKey });
};

export const generateMarketingContent = async (topic: string, type: 'blog' | 'service'): Promise<string> => {
  try {
    const ai = getAI();
    
    const prompt = type === 'blog' 
      ? `Write a short, helpful blog post (approx 150 words) for an Electrician website in Uganda about: "${topic}". Include safety tips and mention local context like Umeme (UEDCL) power stability if relevant.`
      : `Write a compelling service description (approx 80 words) for an electrical service: "${topic}". Focus on reliability and safety for Ugandan homeowners.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Could not generate content at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content. Please check your connection or try again later.";
  }
};

export const chatWithAssistant = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
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

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble connecting right now. Please try again or call us directly at +256 751 473 830.";
  }
};