import React from 'react';
import { stats } from '../data/landingData';

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, idx) => (
          <div
            key={idx}
            className="p-6 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-zinc-300 hover:shadow-xs hover:-translate-y-1 transition-all duration-200"
          >
            <span className="text-3xl sm:text-4xl font-bold text-zinc-900 font-mono block tracking-tight">
              {s.count}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mt-1 block">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
