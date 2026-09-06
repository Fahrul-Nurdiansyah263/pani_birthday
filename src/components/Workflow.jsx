import React from 'react';
import { workflowSteps } from '../data/landingData';

export default function Workflow() {
  return (
    <section id="workflow" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 border-t border-zinc-200 bg-zinc-50/60">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
          Alur Pengerjaan
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 uppercase">
          Hanya 3 Langkah Mudah
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 leading-relaxed">
          Mulai dari memilih template hingga website Anda dapat dibuka oleh pelanggan di seluruh dunia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {workflowSteps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-zinc-200 rounded-2xl p-8 hover:border-zinc-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <span className="text-4xl font-bold text-zinc-300 font-mono block mb-4">
                {step.step}
              </span>
              <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-tight mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
