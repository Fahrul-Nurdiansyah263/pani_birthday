import React, { useState, useEffect } from 'react';
import { navLinks } from '../data/landingData';
import { FiArrowRight } from './Icons';

export default function Navbar({ onOpenAuth }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ['hero', 'solutions', 'services', 'workflow', 'templates', 'pricing', 'faq'];

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const scrollPosition = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-3.5 transition-all duration-200 ${
        scrolled ? 'backdrop-blur-md bg-white/90 shadow-xs' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center bg-white border border-zinc-200 rounded-2xl px-5 py-3 shadow-xs">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-sm select-none group-hover:bg-black transition-transform group-hover:scale-105">
            F
          </div>
          <span className="font-semibold text-lg tracking-tight text-zinc-900">
            Faeva
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7 font-mono text-xs uppercase tracking-wider">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`transition-colors relative py-1 ${
                  isActive
                    ? 'text-zinc-900 font-bold'
                    : 'text-zinc-500 hover:text-zinc-900 font-medium'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 rounded-full transition-all duration-300" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenAuth('login')}
              className="bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-900 border border-zinc-200 hover:border-zinc-300 text-xs font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Masuk
            </button>
            <button
              onClick={() => onOpenAuth('register')}
              className="bg-zinc-900 hover:bg-black text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Mulai Gratis</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex lg:hidden items-center justify-center p-2 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-3 bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col p-5 space-y-3 font-mono text-xs uppercase shadow-xl transition-all">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-2 border-b border-zinc-100 transition-colors flex items-center justify-between ${
                  isActive ? 'text-zinc-900 font-bold' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-zinc-900" />}
              </a>
            );
          })}

          <div className="pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              className="bg-zinc-50 text-zinc-700 border border-zinc-200 text-center py-2.5 rounded-lg font-medium cursor-pointer"
            >
              Masuk
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAuth('register');
              }}
              className="bg-zinc-900 text-white text-center py-2.5 rounded-lg font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Mulai Gratis</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
