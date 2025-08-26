
import { GoogleGenAI } from "@google/genai";
import type { UserProfile } from '../types';

if (!process.env.API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we'll alert the user.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getCareerAdvice = async (profile: UserProfile, question: string): Promise<string> => {
  try {
    const prompt = `
      You are an expert career mentor. A user needs your advice.
      Here is their profile:
      - Name: ${profile.name}
      - Bio: ${profile.bio}
      - Skills: ${profile.skills.join(', ')}
      - Career Goals: ${profile.careerGoals.join(', ')}

      Here is their question: "${question}"

      Please provide thoughtful, encouraging, and actionable advice based on their profile and question. Format your response in markdown.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error getting career advice from Gemini:", error);
    return "I'm sorry, but I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};
