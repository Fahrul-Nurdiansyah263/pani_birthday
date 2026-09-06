import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import Stats from './components/Stats';
import Solutions from './components/Solutions';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Templates from './components/Templates';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'register' });

  const handleOpenAuth = (mode = 'register') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleCloseAuth = () => {
    setAuthModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-200 selection:text-black font-sans scroll-smooth">
      <Navbar onOpenAuth={handleOpenAuth} />
      
      <main>
        <Hero onOpenAuth={handleOpenAuth} />
        <MarqueeTicker />
        <Stats />
        <Solutions onOpenAuth={handleOpenAuth} />
        <Services />
        <Workflow />
        <Templates onOpenAuth={handleOpenAuth} />
        <Testimonials />
        <Pricing onOpenAuth={handleOpenAuth} />
        <Faq />
        <CtaSection onOpenAuth={handleOpenAuth} />
      </main>

      <Footer onOpenAuth={handleOpenAuth} />

      <AuthModal
        isOpen={authModal.isOpen}
        initialMode={authModal.mode}
        onClose={handleCloseAuth}
      />
    </div>
  );
}
