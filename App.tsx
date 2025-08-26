import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsTicker } from './components/NewsTicker';
import { OdysseyDashboard } from './components/OdysseyDashboard';
import { CompanySpotlight } from './components/CompanySpotlight';
import { CorporateLifestyle } from './components/CorporateLifestyle';
import { MarketPulse } from './components/MarketPulse';
import { CareerGuru } from './components/CareerGuru';
import { ConnectAI } from './components/ConnectAI';
import { ForumHub } from './components/ForumHub';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950/0 text-gray-200">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <NewsTicker />
          <div className="container mx-auto px-4 space-y-24 md:space-y-32 my-24 md:my-32">
            <OdysseyDashboard />
            <CompanySpotlight />
            <CorporateLifestyle />

            {/* Dynamic Dashboard Grid Section */}
            <section id="dashboard-grid" className="space-y-16 md:space-y-24">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                <div className="lg:col-span-3">
                  <MarketPulse />
                </div>
                <div className="lg:col-span-2">
                  <ConnectAI />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <CareerGuru />
                  <ForumHub />
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
