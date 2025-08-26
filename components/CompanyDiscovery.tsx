
import React, { useState } from 'react';
import type { Company } from '../types';
import { BriefcaseIcon, XMarkIcon } from './Icons';
import { StoryViewer } from './StoryViewer';

const mockCompanies: Company[] = [
  { id: 1, name: 'Innovate Inc.', logo: 'https://picsum.photos/seed/1/100', industry: 'Tech', location: 'San Francisco, CA', size: '500-1000', description: 'Pioneering the future of AI-driven solutions.', culture: ['Innovative', 'Collaborative', 'Fast-Paced'], openRoles: 12, 
    cultureAnalytics: { 'Innovation': 5, 'Growth': 4.5, 'WLB': 3, 'Inclusion': 4, 'Collaboration': 5 },
    stories: [
      { id: 1, type: 'image', url: 'https://picsum.photos/seed/s1a/1080/1920' },
      { id: 2, type: 'image', url: 'https://picsum.photos/seed/s1b/1080/1920' },
    ]
  },
  { id: 2, name: 'Creative Minds', logo: 'https://picsum.photos/seed/2/100', industry: 'Design', location: 'New York, NY', size: '50-200', description: 'A design agency that builds beautiful and intuitive digital experiences.', culture: ['Creative', 'User-Centric', 'Flexible'], openRoles: 5,
    cultureAnalytics: { 'Innovation': 4, 'Growth': 3.5, 'WLB': 5, 'Inclusion': 4.5, 'Collaboration': 4 },
    stories: [
       { id: 1, type: 'image', url: 'https://picsum.photos/seed/s2a/1080/1920' },
    ]
  },
  { id: 3, name: 'HealthFirst', logo: 'https://picsum.photos/seed/3/100', industry: 'Healthcare', location: 'Boston, MA', size: '1000+', description: 'Revolutionizing patient care with cutting-edge technology.', culture: ['Mission-Driven', 'Caring', 'Ethical'], openRoles: 25,
    cultureAnalytics: { 'Innovation': 4, 'Growth': 4, 'WLB': 4, 'Inclusion': 5, 'Collaboration': 3.5 },
    stories: []
  },
  { id: 4, name: 'GreenScape', logo: 'https://picsum.photos/seed/4/100', industry: 'Sustainability', location: 'Austin, TX', size: '200-500', description: 'Building a greener future through sustainable urban development.', culture: ['Eco-Friendly', 'Passionate', 'Impactful'], openRoles: 8,
    cultureAnalytics: { 'Innovation': 3, 'Growth': 4, 'WLB': 4.5, 'Inclusion': 4, 'Collaboration': 4 },
    stories: [
      { id: 1, type: 'image', url: 'https://picsum.photos/seed/s4a/1080/1920' },
      { id: 2, type: 'image', url: 'https://picsum.photos/seed/s4b/1080/1920' },
      { id: 3, type: 'image', url: 'https://picsum.photos/seed/s4c/1080/1920' },
    ]
  },
];

const FilterButton: React.FC<{ children: React.ReactNode; isActive?: boolean }> = ({ children, isActive }) => (
  <button className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
    isActive 
      ? 'bg-orange-500 text-white' 
      : 'bg-white/10 text-slate-200 hover:bg-white/20'
  }`}>
    {children}
  </button>
);

const CultureRadarChart: React.FC<{ data: { [key: string]: number }, size?: number }> = ({ data, size = 120 }) => {
    const maxScore = 5;
    const numAxes = Object.keys(data).length;
    const angleSlice = (Math.PI * 2) / numAxes;
    const radius = size / 2.5;
    const center = size / 2;

    const points = Object.values(data).map((value, i) => {
        const angle = angleSlice * i - Math.PI / 2;
        const x = center + (radius * value / maxScore) * Math.cos(angle);
        const y = center + (radius * value / maxScore) * Math.sin(angle);
        return `${x},${y}`;
    }).join(' ');
    
    const axisLabels = Object.keys(data).map((key, i) => {
        const angle = angleSlice * i - Math.PI / 2;
        const x = center + (size / 2.2) * Math.cos(angle);
        const y = center + (size / 2.2) * Math.sin(angle);
        return <text key={key} x={x} y={y} fill="#94a3b8" fontSize="10" textAnchor="middle" dominantBaseline="middle">{key}</text>;
    });

    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <g>
                {/* Data Polygon */}
                <polygon points={points} fill="rgba(249, 115, 22, 0.3)" stroke="#f97316" strokeWidth="1.5" />
                {/* Axis lines */}
                {Object.keys(data).map((_, i) => {
                    const angle = angleSlice * i - Math.PI / 2;
                    const x2 = center + radius * Math.cos(angle);
                    const y2 = center + radius * Math.sin(angle);
                    return <line key={i} x1={center} y1={center} x2={x2} y2={y2} stroke="#475569" strokeWidth="0.5" />;
                })}
                 {/* Center point */}
                <circle cx={center} cy={center} r="1.5" fill="#f97316" />
            </g>
        </svg>
    );
}

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => (
    <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/80
                   transition-all duration-300 ease-in-out
                   hover:border-orange-400/60 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/50">
        <div className="flex items-start justify-between">
             <div className="flex items-center space-x-4">
                <img src={company.logo} alt={`${company.name} logo`} className="w-16 h-16 rounded-lg object-cover" />
                <div>
                    <h3 className="text-lg font-semibold text-white">{company.name}</h3>
                    <p className="text-sm text-slate-400">{company.industry} &middot; {company.location}</p>
                </div>
            </div>
            <div className="text-center">
              <CultureRadarChart data={company.cultureAnalytics} />
              <p className="text-xs text-slate-500 mt-1">Vibe Check</p>
            </div>
        </div>

        <p className="mt-4 text-slate-300 text-sm leading-relaxed min-h-[40px]">{company.description}</p>
        
        <div className="mt-6 pt-4 border-t border-slate-700 flex justify-between items-center">
            <div className="flex items-center space-x-2 text-sm font-medium text-slate-300">
                <BriefcaseIcon className="w-4 h-4 text-orange-400" />
                <span>{company.openRoles} Open Roles</span>
            </div>
            <button className="text-sm font-semibold px-4 py-2 rounded-lg text-white border border-slate-600 
                               hover:bg-orange-500 hover:border-orange-500 transition-colors">
                View Profile
            </button>
        </div>
    </div>
);

const StoryReel: React.FC<{ companies: Company[], onStoryClick: (company: Company) => void }> = ({ companies, onStoryClick }) => {
    const companiesWithStories = companies.filter(c => c.stories && c.stories.length > 0);
    return (
        <div className="flex space-x-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            {companiesWithStories.map(company => (
                 <div key={company.id} className="text-center flex-shrink-0 w-20" onClick={() => onStoryClick(company)}>
                    <div className="relative group cursor-pointer">
                        <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500">
                           <div className="p-1 bg-slate-900 rounded-full">
                               <img src={company.logo} alt={`${company.name} story`} className="w-full h-full object-cover rounded-full" />
                           </div>
                        </div>
                    </div>
                    <p className="text-xs text-slate-300 mt-2 truncate">{company.name}</p>
                 </div>
            ))}
        </div>
    )
}

export const CompanyDiscovery: React.FC = () => {
  const [viewingStoryFor, setViewingStoryFor] = useState<Company | null>(null);

  return (
    <>
      {viewingStoryFor && (
        <StoryViewer 
            company={viewingStoryFor}
            onClose={() => setViewingStoryFor(null)} 
        />
      )}
      <section id="discovery" className="py-12">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Discover Companies</h2>
        <p className="text-slate-300 text-center mb-8">Find the perfect fit for your career aspirations.</p>
        
        <div className="mb-8">
            <StoryReel companies={mockCompanies} onStoryClick={setViewingStoryFor} />
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-8">
          <FilterButton isActive>All</FilterButton>
          <FilterButton>Tech</FilterButton>
          <FilterButton>Design</FilterButton>
          <FilterButton>Healthcare</FilterButton>
          <FilterButton>Remote</FilterButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockCompanies.map(company => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </section>
    </>
  );
};
