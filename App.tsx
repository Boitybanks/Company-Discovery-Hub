
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyDiscovery } from './components/CompanyDiscovery';
import { OpportunitiesHub } from './components/OpportunitiesHub';
import { CommunityFeed } from './components/CommunityFeed';
import { CorporateLifestyle } from './components/CorporateLifestyle';
import { AIMentor } from './components/AIMentor';
import { Footer } from './components/Footer';
import { LiveConnections } from './components/LiveConnections';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200">
      {/* Global background */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop"
          alt="Subtle office background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <div className="container mx-auto px-4 py-8">
            <div className="space-y-16">
              <CompanyDiscovery />
              <OpportunitiesHub />
              <LiveConnections />
              <CommunityFeed />
              <CorporateLifestyle />
              <AIMentor />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
