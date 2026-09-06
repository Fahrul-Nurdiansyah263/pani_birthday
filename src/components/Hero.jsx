import React, { useState } from 'react';
import { heroDemos } from '../data/landingData';
import { FiZap, FiArrowRight, FiSliders, FiCheckCircle } from './Icons';

export default function Hero({ onOpenAuth }) {
  const [activeDemo, setActiveDemo] = useState('umkm');
  const currentDemo = heroDemos[activeDemo];

  return (
    <section id="hero" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-36 pb-20 text-center relative">
      <div className="flex flex-col items-center space-y-6">
        {/* Platform Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-800 text-xs font-mono uppercase tracking-wider">
          <FiZap className="w-3.5 h-3.5 text-zinc-900" />
          <span>Platform Visual Website Builder No-Code</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 uppercase leading-[1.05] max-w-4xl">
          Wujudkan Website Impian Anda dalam Hitungan Menit
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl font-normal">
          Faeva memfasilitasi pembuatan website dan landing page instan untuk profil bisnis UMKM, portofolio kreatif, undangan pernikahan digital elegan, hingga buku cerita romansa pasangan. Tanpa repot coding, langsung online dengan performa tinggi.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center pt-2">
          <button
            onClick={() => onOpenAuth('register')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900 hover:bg-black text-white font-semibold text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <span>Mulai Buat Website — Gratis</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
          <a
            href="#templates"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 hover:border-zinc-300 font-medium text-sm transition-colors cursor-pointer"
          >
            Jelajahi Template
          </a>
        </div>

        {/* Interactive Hero Live Simulator */}
        <div className="w-full max-w-5xl mt-10 pt-4">
          {/* Switcher Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-4 font-mono text-xs uppercase">
            <span className="text-zinc-400 text-[11px] mr-2 hidden sm:inline">Pilih Demo Interaktif:</span>
            {[
              { key: 'umkm', label: 'Bisnis UMKM' },
              { key: 'portfolio', label: 'Portofolio' },
              { key: 'wedding', label: 'Undangan Pernikahan' },
              { key: 'pasangan', label: 'Kisah Pasangan' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveDemo(tab.key)}
                className={`relative px-4 py-2 rounded-xl transition-all cursor-pointer ${
                  activeDemo === tab.key
                    ? 'bg-zinc-900 text-white font-semibold shadow-xs'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Mockup Box */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-3 sm:p-5 shadow-xl relative text-left">
            {/* Live Notification Pill */}
            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200 shadow-md text-xs font-medium text-zinc-800 absolute -top-4 -right-4 z-20 transition-all">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{currentDemo.notification}</span>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xs">
              {/* Browser Bar */}
              <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-3 flex items-center justify-between text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                </div>
                <div className="bg-white border border-zinc-200 px-4 py-1 rounded-md text-[11px] text-zinc-600 flex items-center gap-1.5 shadow-2xs">
                  <span className="text-zinc-400">https://</span>
                  <span className="font-semibold text-zinc-900">{currentDemo.slug}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>LIVE DEMO</span>
                </div>
              </div>

              {/* Dynamic Content */}
              <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white transition-opacity duration-300">
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase font-semibold ${currentDemo.badgeColor}`}>
                      {currentDemo.categoryBadge}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">• {currentDemo.priceTag}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight uppercase">
                    {currentDemo.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {currentDemo.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {currentDemo.features.map((f, fIdx) => (
                      <span key={fIdx} className="text-[11px] font-mono px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-lg text-zinc-700">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => onOpenAuth('register')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white font-semibold text-xs uppercase tracking-wider hover:bg-black transition-colors cursor-pointer active:scale-95"
                    >
                      <span>{currentDemo.actionText}</span>
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Simulator Control Panel */}
                <div className="md:col-span-5 bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-3.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-800 border-b border-zinc-200 pb-2">
                    <span className="flex items-center gap-1.5">
                      <FiSliders className="w-3.5 h-3.5 text-zinc-600" />
                      <span>Live Editor Controls</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-600 uppercase font-bold">● No-Code Mode</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white p-2.5 rounded-xl border border-zinc-200 flex justify-between items-center shadow-2xs">
                      <span className="text-zinc-600">Template Terpilih:</span>
                      <span className="font-semibold text-zinc-900 font-mono">{currentDemo.title}</span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-zinc-200 flex justify-between items-center shadow-2xs">
                      <span className="text-zinc-600">Status Publikasi:</span>
                      <span className="font-semibold text-emerald-600 font-mono flex items-center gap-1">
                        <FiCheckCircle className="w-3.5 h-3.5" /> Online 100%
                      </span>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-zinc-200 flex justify-between items-center shadow-2xs">
                      <span className="text-zinc-600">Kecepatan Muat:</span>
                      <span className="font-semibold text-zinc-900 font-mono">0.4s (Ultra Fast)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
