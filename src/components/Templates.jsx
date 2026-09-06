import React, { useState } from 'react';
import { templates } from '../data/landingData';
import { FiArrowRight } from './Icons';

export default function Templates({ onOpenAuth }) {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('all');

  const filteredTemplates = selectedCategoryTab === 'all'
    ? templates
    : templates.filter((t) => t.category === selectedCategoryTab);

  const categories = [
    { key: 'all', label: 'Semua' },
    { key: 'umkm', label: 'Bisnis UMKM' },
    { key: 'portfolio', label: 'Portofolio' },
    { key: 'wedding', label: 'Pernikahan' },
    { key: 'pasangan', label: 'Pasangan' }
  ];

  return (
    <section id="templates" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24 border-t border-zinc-200">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
            Katalog Desain
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 uppercase">
            Pilihan Template Terkurasi
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2">
            Tata letak elegan yang dirancang oleh desainer profesional untuk menjamin estetika premium.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 font-mono text-xs uppercase bg-zinc-50 p-1.5 border border-zinc-200 rounded-xl shadow-2xs">
          {categories.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setSelectedCategoryTab(tab.key)}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                selectedCategoryTab === tab.key
                  ? 'bg-zinc-900 text-white font-semibold shadow-xs'
                  : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100'
              }`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Template Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
          >
            <div className="h-48 bg-zinc-100 border-b border-zinc-200 flex flex-col items-center justify-center p-6 text-center group-hover:bg-zinc-50 transition-colors relative">
              <span className="absolute top-4 right-4 text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-white border border-zinc-200 text-zinc-700 font-semibold">
                {t.badge}
              </span>
              <span className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2">Preset Desain</span>
              <h4 className="text-2xl font-bold text-zinc-900 uppercase tracking-tight">{t.name}</h4>
              <span className="text-[11px] font-mono text-zinc-500 mt-2 bg-white px-3 py-1 rounded-full border border-zinc-200">
                {t.style}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                {t.desc}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                <span className="text-[11px] font-mono uppercase text-zinc-400">{t.category}</span>
                <button
                  onClick={() => onOpenAuth('register')}
                  className="text-xs font-semibold text-zinc-900 group-hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Gunakan Template</span>
                  <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
