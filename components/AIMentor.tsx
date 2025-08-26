
import React, { useState } from 'react';
import type { UserProfile, Company, Opportunity } from '../types';
import { getCareerAdvice, getCareerSuggestions } from '../services/geminiService';
import { SparklesIcon, PaperAirplaneIcon, RocketLaunchIcon, BuildingOfficeIcon, BriefcaseIcon as BriefcaseSolidIcon } from './Icons';

// Mock data for suggestions - in a real app this would come from a shared state/context
const mockCompanies: Company[] = [
  { id: 1, name: 'Innovate Inc.', logo: 'https://picsum.photos/seed/1/100', industry: 'Tech', location: 'San Francisco, CA', size: '500-1000', description: 'Pioneering the future of AI-driven solutions.', culture: [], openRoles: 12, cultureAnalytics: {}, stories: [] },
  { id: 2, name: 'Creative Minds', logo: 'https://picsum.photos/seed/2/100', industry: 'Design', location: 'New York, NY', size: '50-200', description: 'A design agency that builds beautiful and intuitive digital experiences.', culture: [], openRoles: 5, cultureAnalytics: {}, stories: [] },
];
const mockOpportunities: Opportunity[] = [
  { id: 1, title: 'Senior Frontend Engineer', companyName: 'Innovate Inc.', companyLogo: 'https://picsum.photos/seed/1/100', type: 'Job', location: 'San Francisco, CA', isRemote: true },
  { id: 2, title: 'Product Design Intern', companyName: 'Creative Minds', companyLogo: 'https://picsum.photos/seed/2/100', type: 'Internship', location: 'New York, NY', isRemote: false },
];


const mockUserProfile: UserProfile = {
  name: 'Alex Doe',
  bio: 'Aspiring software engineer with a passion for building user-centric applications. Proficient in React and TypeScript.',
  skills: ['React', 'TypeScript', 'Node.js', 'UI/UX Design', 'Agile Methodologies'],
  careerGoals: ['Obtain a senior frontend developer role', 'Lead a development team', 'Contribute to open-source projects'],
};

// A simple markdown parser
const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
    const html = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // Italic
        .replace(/`([^`]+)`/g, '<code class="bg-slate-700 text-orange-300 px-1.5 py-0.5 rounded">$1</code>') // Inline code
        .replace(/(\r\n|\n\r|\r|\n){2,}/g, '<br/><br/>') // Paragraphs
        .replace(/(\r\n|\n\r|\r|\n)/g, '<br/>'); // Line breaks

    return <div dangerouslySetInnerHTML={{ __html: html }} />;
};


export const AIMentor: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [advice, setAdvice] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);


  const handleGetAdvice = async () => {
    if (!question.trim() || isLoading) return;
    setIsLoading(true);
    setAdvice('');
    setSuggestions([]);
    try {
      const result = await getCareerAdvice(mockUserProfile, question);
      setAdvice(result);
    } catch (error) {
      console.error(error);
      setAdvice('Sorry, something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGetSuggestions = async () => {
    if (isSuggesting) return;
    setIsSuggesting(true);
    setAdvice('');
    setSuggestions([]);
     try {
      const result = await getCareerSuggestions(mockUserProfile, mockCompanies, mockOpportunities);
      setSuggestions(result.suggestions || []);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSuggesting(false);
    }
  }

  return (
    <section id="ai-mentor" className="py-12">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10">
        <div className="flex items-center justify-center space-x-3 mb-4">
            <SparklesIcon className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl font-bold text-white text-center">AI Career Mentor</h2>
        </div>
        <p className="text-slate-300 text-center mb-6">
          Ask a question or let our AI Concierge generate personalized career path suggestions for you.
        </p>
        
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., How can I improve my React skills?"
            className="w-full bg-white/5 text-white placeholder-slate-400 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            disabled={isLoading || isSuggesting}
          />
          <button
            onClick={handleGetAdvice}
            disabled={isLoading || isSuggesting || !question.trim()}
            className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed flex-shrink-0"
          >
            {isLoading ? <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div> : <PaperAirplaneIcon className="w-6 h-6" />}
          </button>
        </div>
        
        <div className="flex items-center my-4">
            <div className="flex-grow border-t border-slate-700"></div>
            <span className="flex-shrink mx-4 text-slate-400 text-sm">OR</span>
            <div className="flex-grow border-t border-slate-700"></div>
        </div>
        
        <button 
          onClick={handleGetSuggestions}
          disabled={isSuggesting || isLoading}
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {isSuggesting ? (
                 <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            ) : (
                <RocketLaunchIcon className="w-5 h-5"/>
            )}
            <span>Generate Career Path Suggestions</span>
        </button>

        {advice && (
          <div className="mt-6 p-6 bg-black/20 rounded-lg border border-white/10 text-slate-200 leading-relaxed text-sm">
             <SimpleMarkdown text={advice} />
          </div>
        )}
        
        {suggestions.length > 0 && (
            <div className="mt-6 space-y-4">
              <h3 className="font-bold text-white">Here are your personalized suggestions:</h3>
              {suggestions.map((s, i) => (
                  <div key={i} className="bg-black/20 p-4 rounded-lg border border-white/10">
                      <div className="flex items-center space-x-3 mb-2">
                          {s.type === 'company' ? <BuildingOfficeIcon className="w-6 h-6 text-orange-400"/> : <BriefcaseSolidIcon className="w-6 h-6 text-sky-400" />}
                          <h4 className="font-semibold text-white">{s.name}</h4>
                      </div>
                      <p className="text-sm text-slate-300">{s.reason}</p>
                  </div>
              ))}
            </div>
        )}
      </div>
    </section>
  );
};
