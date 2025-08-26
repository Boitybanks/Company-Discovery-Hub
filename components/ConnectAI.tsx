import React, { useState } from 'react';
import { ConnectAISuggestion } from '../types';
import { getNetworkingSuggestions } from '../services/geminiService';
import { IconWrapper, SparklesIcon } from './Icons';

export const ConnectAI: React.FC = () => {
    const [goal, setGoal] = useState('');
    const [suggestions, setSuggestions] = useState<ConnectAISuggestion[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetSuggestions = async () => {
        if (!goal) {
            setError('Please enter your networking goal.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setSuggestions(null);

        try {
            const result = await getNetworkingSuggestions(goal);
            if (result) {
                setSuggestions(result);
            } else {
                setError('Could not get suggestions. The AI service may be temporarily unavailable.');
            }
        } catch (e) {
            setError('There was an unexpected error. Please try again.');
            console.error("Networking suggestion error:", e);
        } finally {
            setIsLoading(false);
        }
    };
    
    const CopyButton: React.FC<{text: string}> = ({text}) => {
        const [copied, setCopied] = useState(false);
        const handleCopy = () => {
            navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        return (
             <button onClick={handleCopy} className="absolute top-2 right-2 text-gray-400 hover:text-white transition">
                {copied ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                )}
            </button>
        );
    }

    return (
        <section id="connect-ai" className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                 <div className="flex items-center justify-center gap-3 mb-4">
                    <IconWrapper icon={<SparklesIcon className="w-6 h-6 text-yellow-400" />} className="bg-yellow-900/40" />
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Connect AI
                    </h2>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                    Your personal networking assistant. Tell us your goal, and we'll find the right people and give you the perfect way to introduce yourself.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/60">
                <div className="space-y-4">
                     <div>
                        <label htmlFor="goal" className="block text-sm font-medium text-gray-300 mb-2">
                            What is your networking goal today?
                        </label>
                        <input
                            id="goal"
                            type="text"
                            value={goal}
                            onChange={(e) => setGoal(e.target.value)}
                            className="w-full bg-gray-900/70 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                            placeholder="e.g., 'Find a mentor in UX Design' or 'Connect with startup founders'"
                        />
                    </div>
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    <div>
                        <button
                            onClick={handleGetSuggestions}
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-10 py-3 rounded-xl text-lg hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Finding Connections...
                                </>
                            ) : 'Get Suggestions'}
                        </button>
                    </div>
                </div>

                {suggestions && (
                    <div className="mt-12 space-y-8 animate-fade-in">
                       <h3 className="text-xl font-bold text-yellow-400">Here are your AI-powered suggestions:</h3>
                        {suggestions.map(({ connection, icebreakers }) => (
                            <div key={connection.id} className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
                                <div className="flex items-center space-x-4">
                                    <img src={connection.imageUrl} alt={connection.name} className="w-16 h-16 rounded-full object-cover" />
                                    <div>
                                        <p className="font-bold text-lg text-white">{connection.name}</p>
                                        <p className="text-sm text-gray-300">{connection.title} at <span className="font-semibold">{connection.company}</span></p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <p className="text-sm font-semibold text-gray-400 mb-3">Suggested Icebreakers:</p>
                                    <div className="space-y-3">
                                        {icebreakers.map((icebreaker, index) => (
                                            <div key={index} className="relative bg-gray-800 p-3 rounded-md text-sm text-gray-300">
                                                <p>{icebreaker}</p>
                                                <CopyButton text={icebreaker} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};