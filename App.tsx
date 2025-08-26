import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CorporateLifestyle } from './components/CorporateLifestyle';
import { CareerGuru } from './components/CareerGuru';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <CorporateLifestyle />
          <CareerGuru />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;