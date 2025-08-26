import React from 'react';
import { MagnifyingGlassIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <div className="relative">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599380816822-6b3a1045a1b3?q=80&w=1920&auto=format&fit=crop"
          alt="Modern corporate building with a luxury aesthetic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="text-center py-24 sm:py-32 md:py-40">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
            Find Your Next <span className="text-amber-400">Elite Opportunity</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-200 drop-shadow-md">
            Discover premium companies, explore exclusive career paths, and connect with a top-tier professional community.
          </p>
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-2 border border-white/20">
              <MagnifyingGlassIcon className="h-6 w-6 mx-3 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by company, role, or keyword..."
                className="flex-grow bg-transparent focus:outline-none text-white placeholder-slate-400 text-lg"
              />
              <button className="bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};