import React from 'react';
import { solutions } from '../data/landingData';
import { RenderIcon, FiCheck, FiArrowRight } from './Icons';

export default function Solutions({ onOpenAuth }) {
  return (
    <section id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 border-t border-zinc-200 bg-zinc-50/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
          4 Kategori Solusi Digital
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 uppercase">
          Dirancang Khusus untuk Setiap Kebutuhan Anda
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-3 leading-relaxed">
          Setiap kategori memiliki skema fitur yang telah disesuaikan secara mendalam agar halaman website Anda langsung bekerja optimal sesuai tujuannya.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {solutions.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-zinc-200 rounded-3xl p-8 hover:border-zinc-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <RenderIcon name={item.iconKey} className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 bg-zinc-50 border border-zinc-200 rounded-full text-zinc-600 font-semibold">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-zinc-900 uppercase tracking-tight mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                {item.desc}
              </p>

              <div className="space-y-2.5 pt-4 border-t border-zinc-100">
                <span className="text-xs font-mono uppercase text-zinc-500 font-bold block mb-2">Fitur Utama:</span>
                {item.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-700">
                    <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
              <button
                onClick={() => onOpenAuth('register')}
                className="text-xs font-semibold uppercase tracking-wider text-zinc-900 group-hover:underline flex items-center gap-1.5 cursor-pointer"
              >
                <span>Pilih Solusi Ini</span>
                <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
