import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NewsTicker } from './components/NewsTicker';
import { CompanySpotlight } from './components/CompanySpotlight';
import { CorporateLifestyle } from './components/CorporateLifestyle';
import { MarketPulse } from './components/MarketPulse';
import { CareerGuru } from './components/CareerGuru';
import { ConnectAI } from './components/ConnectAI';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <NewsTicker />
          <CompanySpotlight />
          <CorporateLifestyle />
          <MarketPulse />
          <CareerGuru />
          <ConnectAI />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;