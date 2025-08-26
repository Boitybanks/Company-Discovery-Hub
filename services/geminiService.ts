import { GoogleGenAI, Type } from "@google/genai";
import type { UserProfile, Company, Opportunity, CareerGuruAnalysis, MarketPulseData, ConnectAISuggestion, SuggestedConnection } from '../types';

if (!process.env.API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we'll alert the user.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

// MOCK DATA FOR NEW SERVICES
const mockProfessionals: SuggestedConnection[] = [
    { id: 1, name: 'Sarah Chen', title: 'Lead Product Manager', company: 'Innovate Inc.', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, name: 'David Lee', title: 'Founder & CEO', company: 'QuantumLeap AI', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
    { id: 3, name: 'Maria Rodriguez', title: 'Senior Software Engineer', company: 'DataStream Solutions', imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1972&auto=format&fit=crop' },
    { id: 4, name: 'Kenji Tanaka', title: 'Head of UX Design', company: 'Momentum', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop' },
];

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
    It is crucial that you consider a wide range of industries beyond just technology, including healthcare, mining, finance, arts, and skilled trades.

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

export const getMarketPulseAnalysis = async (): Promise<MarketPulseData | null> => {
    const prompt = `
    Act as a senior market analyst AI. Based on a very recent (simulated) dataset of job postings and news, identify the top 4 trending skills and top 3 hiring hotspot industries.
    Ensure your analysis covers a diverse range of sectors, not just tech. Include industries like healthcare, manufacturing, retail, and finance.

    For skills, provide a "demandGrowth" percentage (month-over-month).
    For industries, provide a brief "sentiment" analysis explaining why it's a hotspot.

    Return your analysis in the specified JSON format.
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
                        trendingSkills: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    skill: { type: Type.STRING },
                                    demandGrowth: { type: Type.NUMBER },
                                },
                            },
                        },
                        hiringHotspots: {
                            type: Type.ARRAY,
                            items: {
                                type: Type.OBJECT,
                                properties: {
                                    industry: { type: Type.STRING },
                                    sentiment: { type: Type.STRING },
                                },
                            },
                        },
                    },
                },
            },
        });
        const jsonText = response.text.trim();
        return JSON.parse(jsonText) as MarketPulseData;
    } catch (error) {
        console.error("Error getting market pulse analysis:", error);
        return null;
    }
};


export const getNetworkingSuggestions = async (goal: string): Promise<ConnectAISuggestion[] | null> => {
    const prompt = `
    You are an AI Networking Assistant. Your goal is to help users make meaningful professional connections.
    A user has specified their networking goal.
    Based on their goal, analyze the following list of professionals and identify the 2 most relevant people to connect with.

    User's Networking Goal: "${goal}"

    List of Professionals:
    ${mockProfessionals.map(p => `- ID ${p.id}: ${p.name}, ${p.title} at ${p.company}.`).join('\n')}

    For each of the 2 recommended connections, generate 3 distinct, high-quality, and personalized "icebreaker" messages. The messages should be professional, concise, and reference either the user's goal or the professional's role/company. Avoid generic templates.

    Return your suggestions in the specified JSON format.
    `;
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            connectionId: { type: Type.NUMBER },
                            icebreakers: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING },
                            },
                        },
                    },
                },
            },
        });
        const jsonText = response.text.trim();
        const results = JSON.parse(jsonText) as { connectionId: number; icebreakers: string[] }[];
        
        // Map the results back to the full SuggestedConnection objects
        const suggestions: ConnectAISuggestion[] = results.map(result => {
            const connection = mockProfessionals.find(p => p.id === result.connectionId);
            if (!connection) return null;
            return {
                connection,
                icebreakers: result.icebreakers,
            };
        }).filter((s): s is ConnectAISuggestion => s !== null);

        return suggestions;

    } catch (error) {
        console.error("Error getting networking suggestions:", error);
        return null;
    }
};

export const getSalaryEstimate = async (companyName: string, jobRole: string): Promise<string | null> => {
    const prompt = `
    Act as an expert Compensation and Benefits Analyst AI.
    You have access to a vast (simulated) dataset of salary information across multiple industries and countries, with a focus on South Africa.
    Provide a realistic, estimated annual salary range for the following role at the specified company.

    Company: "${companyName}"
    Job Role: "${jobRole}"

    Consider factors like the company's size, industry (e.g., finance, tech, mining), and prestige.
    Return only the estimated salary range as a string, for example: "R450,000 - R550,000 per year".
    Do not add any other explanatory text.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        return response.text.trim();
    } catch (error) {
        console.error("Error getting salary estimate from Gemini:", error);
        return "Could not retrieve an estimate at this time.";
    }
};