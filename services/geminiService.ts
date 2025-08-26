
import { GoogleGenAI, Type } from "@google/genai";
import type { UserProfile, Company, Opportunity, CareerGuruAnalysis } from '../types';

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

export const getCareerSuggestions = async (profile: UserProfile, companies: Company[], opportunities: Opportunity[]): Promise<any> => {
    const prompt = `
    As a world-class AI Career Concierge, analyze the following user profile and the provided lists of companies and job opportunities.
    Based on the user's skills, bio, and career goals, identify the top 2 companies and top 1 opportunity that are the best fit.
    Provide a concise, compelling reason for each recommendation.

    User Profile:
    - Name: ${profile.name}
    - Bio: ${profile.bio}
    - Skills: ${profile.skills.join(', ')}
    - Career Goals: ${profile.careerGoals.join(', ')}

    Available Companies:
    ${companies.map(c => `- ${c.name} (ID: ${c.id}): Specializes in ${c.industry}. Description: ${c.description}`).join('\n')}

    Available Opportunities:
    ${opportunities.map(o => `- ${o.title} at ${o.companyName} (ID: ${o.id})`).join('\n')}

    Return your recommendations in the specified JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            suggestions: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  type: { type: Type.STRING },
                  id: { type: Type.NUMBER },
                  name: { type: Type.STRING },
                  reason: { type: Type.STRING }
                }
              }
            }
          }
        }
      }
    });

    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch(error) {
    console.error("Error getting career suggestions from Gemini:", error);
    return { suggestions: [] };
  }
}

export const getCareerGuruAnalysis = async (reportData: string, aspirations: string): Promise<CareerGuruAnalysis | null> => {
    const prompt = `
    You are an expert Career Guru AI for high school students. You are insightful, encouraging, and provide data-driven advice.
    Analyze the following student's academic report and their career aspirations.

    Academic Report:
    "${reportData}"

    Career Aspirations:
    "${aspirations}"

    Perform the following analysis:
    1.  Provide a brief, encouraging **overall assessment** of their academic strengths.
    2.  Suggest 2-3 realistic **career paths**. For each, provide a brief description.
    3.  Create a concise, actionable **academic improvement plan**. List 2-3 specific subjects where they should focus.
    4.  List 2-3 **universities** known for strong programs in these fields that offer online or flexible study options.
    5.  Mention 2-3 **potential future employers** or types of companies that hire for these roles.
    6.  For each recommended career, provide an **AI impact analysis**. Estimate the risk of automation as a percentage and briefly explain the outlook.

    Return your complete analysis in the specified JSON format.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        overallAssessment: { type: Type.STRING },
                        careerRecommendations: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    career: { type: Type.STRING },
                                    description: { type: Type.STRING },
                                    aiImpact: {
                                        type: Type.OBJECT,
                                        properties: {
                                            riskPercentage: { type: Type.NUMBER },
                                            outlook: { type: Type.STRING },
                                        },
                                    },
                                },
                            },
                        },
                        academicPlan: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                        },
                        universitySuggestions: {
                             type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    name: { type: Type.STRING },
                                    specialty: { type: Type.STRING },
                                },
                            },
                        },
                        potentialEmployers: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                        },
                    },
                },
            },
        });
        const jsonText = response.text.trim();
        return JSON.parse(jsonText) as CareerGuruAnalysis;
    } catch (error) {
        console.error("Error getting career guru analysis from Gemini:", error);
        return null;
    }
};