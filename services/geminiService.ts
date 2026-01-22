
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Fultec AI Assistant, representing Fultec Systems Ltd., Belize's leading IT solutions provider since 1992.
Your goal is to provide helpful technical support and company information to visitors.

Key facts about Fultec:
- Founded by Dean and Diana Fuller in 1992.
- Locations: Belize City (831 Coney Drive) and Belmopan (#2 Macaw Avenue).
- Partnerships: Dell Platinum, HP Amplify Power, Microsoft Certified, Fortinet, APC, Bitdefender.
- Services: Hardware (Laptops, Desktops, Servers), Networking, Cybersecurity, Managed IT, Printers, Consulting.
- Notable History: Supported the first ATM system in Belize and international driver's license systems.

Behavioral Guidelines:
1. Be professional, friendly, and helpful.
2. Answer technical questions about IT hardware or services.
3. If you cannot answer a specific technical issue or if the user asks for human help, politely suggest transferring to WhatsApp support.
4. Mention specific store locations or partners when relevant.
5. Keep responses concise and focused.

If the user needs a human, provide these links:
- Belize City WhatsApp: https://wa.me/5016303886
- Belmopan WhatsApp: https://wa.me/5016154323
`;

// Correctly handle Gemini API interactions following @google/genai standards.
export const getGeminiResponse = async (userPrompt: string, chatHistory: any[]) => {
  try {
    // Initialize GoogleGenAI with process.env.API_KEY directly.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    
    // Format history for Gemini generateContent.
    const contents = chatHistory.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));
    
    // Add current user prompt.
    contents.push({
      role: 'user',
      parts: [{ text: userPrompt }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    // Access the extracted string output via .text property (not a method).
    return response.text || "I'm sorry, I couldn't process that. Please try again or contact our support team directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our AI assistant is currently experiencing high traffic. Please contact us via WhatsApp for immediate support.";
  }
};
