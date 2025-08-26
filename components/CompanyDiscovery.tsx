
import React from 'react';
import type { Company } from '../types';

const mockCompanies: Company[] = [
  { id: 1, name: 'Innovate Inc.', logo: 'https://picsum.photos/seed/1/100', industry: 'Tech', location: 'San Francisco, CA', size: '500-1000', description: 'Pioneering the future of AI-driven solutions.', culture: ['Innovative', 'Collaborative', 'Fast-Paced'], openRoles: 12 },
  { id: 2, name: 'Creative Minds', logo: 'https://picsum.photos/seed/2/100', industry: 'Design', location: 'New York, NY', size: '50-200', description: 'A design agency that builds beautiful and intuitive digital experiences.', culture: ['Creative', 'User-Centric', 'Flexible'], openRoles: 5 },
  { id: 3, name: 'HealthFirst', logo: 'https://picsum.photos/seed/3/100', industry: 'Healthcare', location: 'Boston, MA', size: '1000+', description: 'Revolutionizing patient care with cutting-edge technology.', culture: ['Mission-Driven', 'Caring', 'Ethical'], openRoles: 25 },
  { id: 4, name: 'GreenScape', logo: 'https://picsum.photos/seed/4/100', industry: 'Sustainability', location: 'Austin, TX', size: '200-500', description: 'Building a greener future through sustainable urban development.', culture: ['Eco-Friendly', 'Passionate', 'Impactful'], openRoles: 8 },
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

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => (
    <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-start space-x-4">
            <img src={company.logo} alt={`${company.name} logo`} className="w-16 h-16 rounded-lg" />
            <div>
                <h3 className="text-xl font-bold text-white">{company.name}</h3>
                <p className="text-sm text-slate-400">{company.industry} &middot; {company.location}</p>
            </div>
        </div>
        <p className="mt-4 text-slate-300 text-sm">{company.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {company.culture.map(tag => (
                <span key={tag} className="bg-orange-500/20 text-orange-300 text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
            ))}
        </div>
        <div className="mt-6 flex justify-between items-center">
            <span className="text-orange-400 font-semibold">{company.openRoles} Open Roles</span>
            <button className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white/20 transition-colors">View Profile</button>
        </div>
    </div>
);

export const CompanyDiscovery: React.FC = () => {
  return (
    <section id="discovery" className="py-12">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Discover Companies</h2>
      <p className="text-slate-300 text-center mb-8">Find the perfect fit for your career aspirations.</p>
      
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
  );
};
