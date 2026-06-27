export const generateMarketingContent = async (_topic: string, _type: 'blog' | 'service'): Promise<string> => {
  // Mock or ignore for now since it's not being actively used by ChatBot,
  // or implement similarly by adding an endpoint if it IS used.
  // We can just keep a simple fallback if it isn't deployed properly on the new endpoint.
  return "Marketing content generation has been migrated to the server. Please implement `/api/generate` if needed.";
};

export const chatWithAssistant = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, history })
    });
    
    if (!response.ok) {
      throw new Error("Network response was failed");
    }

    const data = await response.json();
    return data.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble connecting right now. Please try again or call us directly at +256 751 473 830.";
  }
};