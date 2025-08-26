import React from 'react';
import { NewsItem } from '../types';
import './NewsTicker.css';

const mockNews: NewsItem[] = [
    { id: 1, companyName: 'Anglo American', headline: 'Announces new sustainability initiative for carbon-neutral mining by 2040.', urgency: 'normal' },
    { id: 2, companyName: 'Discovery Health', headline: 'Launches new Vitality Active Rewards app with enhanced fitness tracking.', urgency: 'high' },
    { id: 3, companyName: 'Deloitte', headline: 'Publishes annual Global Human Capital Trends report, highlighting AI in the workplace.', urgency: 'normal' },
    { id: 4, companyName: 'Shoprite', headline: 'Reports 8% increase in Q3 sales, citing expansion of their Checkers Sixty60 service.', urgency: 'normal' },
    { id: 5, companyName: 'Sasol', headline: 'Breaks ground on new green hydrogen facility in Secunda.', urgency: 'high' },
    { id: 6, companyName: 'MTN', headline: 'Rolls out 5G network to 10 new cities across South Africa.', urgency: 'normal' },
];

export const NewsTicker: React.FC = () => {
    return (
        <div className="bg-gray-800 border-y border-gray-700/60 overflow-hidden whitespace-nowrap">
            <div className="ticker-wrap h-12 flex items-center">
                <div className="ticker-move">
                    {mockNews.map(item => (
                        <div key={item.id} className="ticker-item inline-flex items-center mx-6">
                            <span className={`font-bold ${item.urgency === 'high' ? 'text-red-400' : 'text-blue-400'}`}>{item.companyName}</span>
                            <span className="text-gray-300 ml-2">{item.headline}</span>
                        </div>
                    ))}
                     {/* Duplicate for seamless loop */}
                     {mockNews.map(item => (
                        <div key={`${item.id}-dup`} className="ticker-item inline-flex items-center mx-6">
                            <span className={`font-bold ${item.urgency === 'high' ? 'text-red-400' : 'text-blue-400'}`}>{item.companyName}</span>
                            <span className="text-gray-300 ml-2">{item.headline}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
