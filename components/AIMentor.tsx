
import React, { useState } from 'react';
import type { UserProfile } from '../types';
import { getCareerAdvice } from '../services/geminiService';
import { SparklesIcon, PaperAirplaneIcon } from './Icons';

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
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAdvice = async () => {
    if (!question.trim() || isLoading) return;
    setIsLoading(true);
    setAdvice('');
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

  return (
    <section id="ai-mentor" className="py-12">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-lg border border-white/10">
        <div className="flex items-center justify-center space-x-3 mb-4">
            <SparklesIcon className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl font-bold text-white text-center">AI Career Mentor</h2>
        </div>
        <p className="text-slate-300 text-center mb-6">
          Ask anything about your career path, interview preparation, or skill development.
        </p>
        
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="e.g., How can I improve my React skills for a senior role?"
            className="w-full bg-white/5 text-white placeholder-slate-400 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            disabled={isLoading}
          />
          <button
            onClick={handleGetAdvice}
            disabled={isLoading || !question.trim()}
            className="bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors disabled:bg-slate-600 disabled:cursor-not-allowed flex-shrink-0"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            ) : (
              <PaperAirplaneIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {advice && (
          <div className="mt-6 p-6 bg-black/20 rounded-lg border border-white/10 text-slate-200 leading-relaxed text-sm">
             <SimpleMarkdown text={advice} />
          </div>
        )}
      </div>
    </section>
  );
};
