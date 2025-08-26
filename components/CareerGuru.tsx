import React, { useState } from 'react';
import { CareerGuruAnalysis } from '../types';
import { getCareerGuruAnalysis } from '../services/geminiService';
import { IconWrapper, BrainCircuitIcon } from './Icons';

export const CareerGuru: React.FC = () => {
    const [report, setReport] = useState('');
    const [aspirations, setAspirations] = useState('');
    const [analysis, setAnalysis] = useState<CareerGuruAnalysis | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAnalysis = async () => {
        if (!report || !aspirations) {
            setError('Please fill in both your school report and career aspirations.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setAnalysis(null);

        try {
            const result = await getCareerGuruAnalysis(report, aspirations);
            if (result) {
                setAnalysis(result);
            } else {
                setError('Could not get analysis. The AI service may be temporarily unavailable.');
            }
        } catch (e) {
            setError('There was an unexpected error. Please try again.');
            console.error("Analysis Error:", e);
        } finally {
            setIsLoading(false);
        }
    };

    const ProgressBar: React.FC<{ value: number }> = ({ value }) => {
        const getColor = () => {
            if (value <= 25) return 'bg-green-500';
            if (value <= 50) return 'bg-yellow-500';
            if (value <= 75) return 'bg-orange-500';
            return 'bg-red-500';
        };
        return (
            <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div className={`${getColor()} h-2.5 rounded-full`} style={{ width: `${value}%` }}></div>
            </div>
        );
    };

    return (
        <section id="career-guru" className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <IconWrapper icon={<BrainCircuitIcon className="w-6 h-6 text-indigo-400" />} className="bg-indigo-900/40" />
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        AI Career Guru
                    </h2>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                    Your personal AI guidance counselor. Upload your school report and aspirations to receive a data-driven analysis of your future career path.
                </p>
            </div>

            <div className="max-w-4xl mx-auto bg-gray-800/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-700/60">
                {!analysis && (
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="report" className="block text-sm font-medium text-gray-300 mb-2">
                                Academic Report / Key Subjects & Grades
                            </label>
                            <textarea
                                id="report"
                                rows={5}
                                value={report}
                                onChange={(e) => setReport(e.target.value)}
                                className="w-full bg-gray-900/70 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                placeholder="e.g., Mathematics: 85%, Physics: 92%, English: 78%, History: 88%, Computer Science: 95%"
                            />
                        </div>
                        <div>
                            <label htmlFor="aspirations" className="block text-sm font-medium text-gray-300 mb-2">
                                Career Aspirations / Interests
                            </label>
                            <input
                                id="aspirations"
                                type="text"
                                value={aspirations}
                                onChange={(e) => setAspirations(e.target.value)}
                                className="w-full bg-gray-900/70 border border-gray-700 rounded-lg p-3 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                                placeholder="e.g., 'I love building things with code and solving complex problems. Maybe software engineering or AI?'"
                            />
                        </div>
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                        <div>
                            <button
                                onClick={handleAnalysis}
                                disabled={isLoading}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-10 py-3 rounded-xl text-lg hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Analyzing...
                                    </>
                                ) : 'Get My Analysis'}
                            </button>
                        </div>
                    </div>
                )}

                {analysis && (
                    <div className="space-y-8 animate-fade-in">
                        <div>
                            <h3 className="text-xl font-bold text-indigo-400 mb-3">Overall Assessment</h3>
                            <p className="text-gray-300">{analysis.overallAssessment}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-indigo-400 mb-4">Career Recommendations</h3>
                            <div className="space-y-6">
                                {analysis.careerRecommendations.map((rec, index) => (
                                    <div key={index} className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                                        <h4 className="font-bold text-lg text-white">{rec.career}</h4>
                                        <p className="text-sm text-gray-400 mt-1">{rec.description}</p>
                                        <div className="mt-4">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-sm font-medium text-gray-300">AI Impact Score</span>
                                                <span className="text-sm font-bold text-white">{rec.aiImpact.riskPercentage}% Risk</span>
                                            </div>
                                            <ProgressBar value={rec.aiImpact.riskPercentage} />
                                            <p className="text-xs text-gray-500 mt-1">{rec.aiImpact.outlook}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-indigo-400 mb-3">Academic Plan</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    {analysis.academicPlan.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-indigo-400 mb-3">Potential Employers</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-300">
                                    {analysis.potentialEmployers.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-indigo-400 mb-3">University Suggestions (Online Focus)</h3>
                            <div className="space-y-2">
                                {analysis.universitySuggestions.map((uni, index) => (
                                    <p key={index} className="text-gray-300"><span className="font-semibold text-white">{uni.name}:</span> {uni.specialty}</p>
                                ))}
                            </div>
                        </div>

                         <div className="pt-6 text-center">
                            <button onClick={() => setAnalysis(null)} className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                                Start a New Analysis
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};