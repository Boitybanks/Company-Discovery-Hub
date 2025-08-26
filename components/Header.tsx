import React from 'react';
import { CompanyLogoIcon } from './Icons';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 bg-gray-900/70 backdrop-blur-md border-b border-gray-700/60">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <CompanyLogoIcon className="h-8 w-8" />
          <h1 className="text-xl font-bold text-white tracking-tight">Comp@ny</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#discovery" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Discover</a>
          <a href="#opportunities" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Opportunities</a>
          <a href="#community" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Community</a>
          <a href="#lifestyle" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">Lifestyle</a>
        </nav>
        <div className="flex items-center space-x-2">
            <button className="text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                Log In
            </button>
            <button className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-shadow shadow-md">
                Sign Up
            </button>
        </div>
      </div>
    </header>
  );
};