import React from 'react';
import { services } from '../data/landingData';
import { RenderIcon, FiCheckSquare } from './Icons';

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24 border-t border-zinc-200">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
          Layanan Platform
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 uppercase">
          Solusi Layanan Komprehensif Faeva
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 leading-relaxed">
          Ekosistem terlengkap untuk mewujudkan website idaman dengan standar kualitas desain dan performa teknologi terbaik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv, idx) => (
          <div
            key={idx}
            className="bg-white border border-zinc-200 p-8 rounded-2xl hover:border-zinc-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                <RenderIcon name={srv.iconKey} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight mb-2.5">
                {srv.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                {srv.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Layanan Faeva</span>
              <FiCheckSquare className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
