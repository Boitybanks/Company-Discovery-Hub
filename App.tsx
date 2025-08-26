
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CompanyDiscovery } from './components/CompanyDiscovery';
import { OpportunitiesHub } from './components/OpportunitiesHub';
import { CommunityFeed } from './components/CommunityFeed';
import { CorporateLifestyle } from './components/CorporateLifestyle';
import { AIMentor } from './components/AIMentor';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <div className="container mx-auto px-4 py-8">
            <div className="space-y-16">
              <CompanyDiscovery />
              <OpportunitiesHub />
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
