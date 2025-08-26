import React, { useState } from 'react';
import { OdysseyPlan, PhaseItem, PhaseItemType } from '../types';
import { getOdysseyPlan } from '../services/geminiService';
import { IconWrapper, RocketLaunchIcon, ArrowTrendingUpIcon, FlagIcon, AcademicCapIcon, BriefcaseIcon, ChatBubbleLeftRightIcon } from './Icons';

export const OdysseyDashboard: React.FC = () => {
    const [ambition, setAmbition] = useState('');
    const [plan, setPlan] = useState<OdysseyPlan | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGeneratePlan = async () => {
        if (!ambition) {
            setError('Please enter your ultimate career ambition.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setPlan(null);
        try {
            const result = await getOdysseyPlan(ambition);
            if (result) {
                setPlan(result);
            } else {
                setError('Could not generate your Odyssey Plan. The AI service may be temporarily unavailable.');
            }
        } catch (e) {
            setError('There was an unexpected error. Please try again.');
            console.error("Odyssey Plan Error:", e);
        } finally {
            setIsLoading(false);
        }
    };
    
    const getIconForType = (type: PhaseItemType) => {
        switch (type) {
            case 'Skill': return <AcademicCapIcon className="w-5 h-5 text-indigo-300" />;
            case 'Role': return <BriefcaseIcon className="w-5 h-5 text-teal-300" />;
            case 'Community': return <ChatBubbleLeftRightIcon className="w-5 h-5 text-amber-300" />;
            case 'Action': return <RocketLaunchIcon className="w-5 h-5 text-rose-300" />;
            default: return null;
        }
    }

    return (
        <section id="odyssey-dashboard">
            <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <IconWrapper icon={<RocketLaunchIcon className="w-6 h-6 text-purple-400" />} className="bg-purple-900/40" />
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tighter">
                        Your Professional Odyssey
                    </h2>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                    Chart your entire career trajectory. Tell us your ultimate ambition, and our AI strategist will build your personalized roadmap to success.
                </p>
            </div>

             <div className="max-w-3xl mx-auto mt-12">
                <div className="relative">
                    <input
                        type="text"
                        value={ambition}
                        onChange={(e) => setAmbition(e.target.value)}
                        placeholder="e.g., 'Become a CTO at a top AI company' or 'Lead a sustainable mining operation'"
                        className="w-full bg-slate-900/70 border border-slate-700 rounded-xl py-4 pl-6 pr-40 text-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    />
                    <button
                        onClick={handleGeneratePlan}
                        disabled={isLoading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
                    >
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : 'Chart My Course'}
                    </button>
                </div>
                 {error && <p className="text-red-400 text-sm text-center mt-3">{error}</p>}
            </div>

            {plan && (
                <div className="mt-16 animate-fade-in">
                    <div className="text-center max-w-4xl mx-auto p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50 mb-12">
                        <h3 className="text-2xl font-bold text-white">Your Odyssey to: <span className="text-purple-400">{plan.ambition}</span></h3>
                        <p className="text-slate-300 mt-2">{plan.summary}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {plan.phases.map((phase, phaseIndex) => (
                            <div key={phaseIndex} className="space-y-6">
                                <div className="text-center p-4 rounded-t-xl bg-slate-800 border-b-2 border-purple-500">
                                     <h4 className="text-xl font-bold text-white">{phase.phase}</h4>
                                     <p className="font-semibold text-purple-300">{phase.title}</p>
                                </div>
                                <p className="text-center text-sm text-slate-400 px-2">{phase.description}</p>
                                
                                <div className="space-y-4">
                                    {phase.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 flex gap-4 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-900/20">
                                            <div className="flex-shrink-0 mt-1">{getIconForType(item.type)}</div>
                                            <div>
                                                <h5 className="font-bold text-white">{item.title}</h5>
                                                <p className="text-sm text-slate-400 mt-1">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};