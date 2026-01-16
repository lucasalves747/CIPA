import React from 'react';
import Hero from './components/Hero';
import ImpactSection from './components/ImpactSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import DetailsSection from './components/DetailsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-brand-red selection:text-white">
      {/* Global Background Gradients - Light Mode */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-white">
        {/* Top Left Purple */}
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-brand-purple/5 rounded-full blur-[100px]"></div>
        {/* Bottom Right Red */}
        <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] bg-brand-red/5 rounded-full blur-[100px]"></div>
        {/* Center Deep Accent */}
        <div className="absolute bottom-0 left-[20%] w-[40vw] h-[40vw] bg-brand-blood/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Decorative lines - darker for visibility on light bg */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-black to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-black to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col w-full">
        <Hero />
        <ImpactSection />
        <FeaturesSection />
        <PricingSection />
        <DetailsSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;