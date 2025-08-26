import React, { useState, useEffect } from 'react';
import { MarketPulseData } from '../types';
import { getMarketPulseAnalysis } from '../services/geminiService';
import { IconWrapper, ChartBarIcon } from './Icons';

export const MarketPulse: React.FC = () => {
    const [data, setData] = useState<MarketPulseData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await getMarketPulseAnalysis();
            setData(result);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const SkeletonLoader: React.FC = () => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                <div className="h-8 bg-gray-700/50 rounded-md w-1/2 mb-6"></div>
                <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-14 bg-gray-800/60 rounded-lg"></div>
                    ))}
                </div>
            </div>
            <div>
                <div className="h-8 bg-gray-700/50 rounded-md w-1/2 mb-6"></div>
                <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-24 bg-gray-800/60 rounded-lg"></div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <section id="market-pulse">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <IconWrapper icon={<ChartBarIcon className="w-6 h-6 text-green-400" />} className="bg-green-900/40" />
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        Market Pulse
                    </h2>
                </div>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">
                    Your AI-powered career intelligence briefing. Discover the skills and industries in highest demand right now.
                </p>
            </div>
            {isLoading ? <SkeletonLoader /> : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Top Trending Skills</h3>
                        <div className="space-y-4">
                            {data?.trendingSkills.map(skill => (
                                <div key={skill.skill} className="bg-gray-800/60 backdrop-blur-md p-4 rounded-lg flex justify-between items-center border border-gray-700/60">
                                    <p className="font-bold text-lg text-gray-200">{skill.skill}</p>
                                    <span className="text-green-400 font-bold text-lg">
                                        +{skill.demandGrowth}%
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Hiring Hotspots</h3>
                        <div className="space-y-4">
                            {data?.hiringHotspots.map(hotspot => (
                                <div key={hotspot.industry} className="bg-gray-800/60 backdrop-blur-md p-4 rounded-lg border border-gray-700/60">
                                    <h4 className="font-bold text-lg text-purple-400">{hotspot.industry}</h4>
                                    <p className="text-sm text-gray-300 mt-1">{hotspot.sentiment}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};