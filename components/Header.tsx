
import React from 'react';
import { BriefcaseIcon, BuildingOffice2Icon, GlobeAltIcon, UserCircleIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 bg-black/30 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BuildingOffice2Icon className="h-8 w-8 text-orange-400" />
          <h1 className="text-xl font-bold text-white tracking-tight">Company Discovery Hub</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#discovery" className="text-sm font-medium text-slate-200 hover:text-orange-400 transition-colors">Discover</a>
          <a href="#opportunities" className="text-sm font-medium text-slate-200 hover:text-orange-400 transition-colors">Opportunities</a>
          <a href="#community" className="text-sm font-medium text-slate-200 hover:text-orange-400 transition-colors">Community</a>
          <a href="#lifestyle" className="text-sm font-medium text-slate-200 hover:text-orange-400 transition-colors">Lifestyle</a>
        </nav>
        <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full text-slate-200 hover:bg-white/10 transition-colors">
                <GlobeAltIcon className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full text-slate-200 hover:bg-white/10 transition-colors">
                <BriefcaseIcon className="w-6 h-6" />
            </button>
            <button className="p-2 rounded-full text-slate-200 hover:bg-white/10 transition-colors">
                <UserCircleIcon className="w-6 h-6" />
            </button>
        </div>
      </div>
    </header>
  );
};
