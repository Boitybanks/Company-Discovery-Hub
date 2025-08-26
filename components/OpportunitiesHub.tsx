
import React, { useState } from 'react';
import type { Opportunity } from '../types';
import { BriefcaseIcon, AcademicCapIcon, SparklesIcon } from './Icons';

const mockOpportunities: Opportunity[] = [
  { id: 1, title: 'Senior Frontend Engineer', companyName: 'Innovate Inc.', companyLogo: 'https://picsum.photos/seed/1/100', type: 'Job', location: 'San Francisco, CA', isRemote: true },
  { id: 2, title: 'Product Design Intern', companyName: 'Creative Minds', companyLogo: 'https://picsum.photos/seed/2/100', type: 'Internship', location: 'New York, NY', isRemote: false },
  { id: 3, title: 'Future Leaders Scholarship', companyName: 'HealthFirst', companyLogo: 'https://picsum.photos/seed/3/100', type: 'Scholarship', location: 'Nationwide', isRemote: true },
  { id: 4, title: 'Software Engineer', companyName: 'Innovate Inc.', companyLogo: 'https://picsum.photos/seed/1/100', type: 'Job', location: 'Remote', isRemote: true },
];

const OpportunityCard: React.FC<{ opportunity: Opportunity }> = ({ opportunity }) => {
    const getIcon = () => {
        switch(opportunity.type) {
            case 'Job': return <BriefcaseIcon className="w-5 h-5 text-sky-400" />;
            case 'Internship': return <AcademicCapIcon className="w-5 h-5 text-green-400" />;
            case 'Scholarship': return <SparklesIcon className="w-5 h-5 text-yellow-400" />;
        }
    }
    return (
         <div className="bg-white/5 backdrop-blur-md rounded-lg p-4 shadow-lg border border-white/10 flex items-center space-x-4 hover:bg-white/10 transition-colors">
            <img src={opportunity.companyLogo} alt={`${opportunity.companyName} logo`} className="w-12 h-12 rounded-lg flex-shrink-0" />
            <div className="flex-grow">
                <h4 className="font-bold text-white">{opportunity.title}</h4>
                <p className="text-sm text-slate-300">{opportunity.companyName}</p>
                <div className="flex items-center text-xs text-slate-400 mt-1 space-x-2">
                    {getIcon()}
                    <span>{opportunity.type}</span>
                    <span className="text-slate-500">&middot;</span>
                    <span>{opportunity.location}</span>
                    {opportunity.isRemote && <span className="bg-blue-500/20 text-blue-300 font-semibold px-2 py-0.5 rounded-full">Remote</span>}
                </div>
            </div>
            <button className="bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Apply
            </button>
        </div>
    )
};

type Filter = 'All' | 'Jobs' | 'Internships' | 'Scholarships';

export const OpportunitiesHub: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<Filter>('All');

    const filteredOpportunities = mockOpportunities.filter(op => {
        if (activeFilter === 'All') return true;
        return op.type === activeFilter.slice(0, -1);
    });

  return (
    <section id="opportunities" className="py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Opportunities Hub</h2>
      <p className="text-slate-300 text-center mb-8">Your gateway to jobs, internships, and scholarships.</p>
      
      <div className="flex justify-center gap-3 mb-8">
        {(['All', 'Jobs', 'Internships', 'Scholarships'] as Filter[]).map(filter => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === filter
                ? 'bg-orange-500 text-white' 
                : 'bg-white/10 text-slate-200 hover:bg-white/20'
            }`}>
                {filter}
            </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {filteredOpportunities.map(op => (
            <OpportunityCard key={op.id} opportunity={op} />
        ))}
      </div>
    </section>
  );
};
