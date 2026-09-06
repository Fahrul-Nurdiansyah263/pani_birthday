import React from 'react';
import { fallbackTestimonials } from '../data/landingData';
import { FiStar } from './Icons';

export default function Testimonials({ testimonials = [] }) {
  const activeTestimonials = testimonials && testimonials.length > 0 ? testimonials : fallbackTestimonials;
  const isMarquee = activeTestimonials.length > 3;

  return (
    <section className="py-24 border-t border-zinc-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-16 text-center">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
          Cerita Pengguna
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 uppercase">
          Dipercaya oleh Pelaku Usaha &amp; Kreator
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2">
          Pengalaman nyata dari pengguna yang telah membangun kehadiran digital mereka bersama Faeva.
        </p>
      </div>

      {isMarquee ? (
        <div className="w-full overflow-hidden select-none py-2">
          <div className="animate-marquee-testimonial flex w-max">
            {[...activeTestimonials, ...activeTestimonials].map((t, idx) => (
              <div
                key={idx}
                className="w-[340px] sm:w-[420px] bg-zinc-50 border border-zinc-200 p-8 rounded-3xl mx-4 shrink-0 flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center gap-1 text-zinc-900 mb-4">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <FiStar key={i} className="w-3.5 h-3.5 fill-current text-zinc-900" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic mb-6 font-normal">
                    "{t.content}"
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-zinc-900">{t.name}</h4>
                    <span className="text-[11px] text-zinc-500">
                      {t.role}{t.company ? ` • ${t.company}` : ''}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 bg-white border border-zinc-200 rounded-full text-zinc-600 font-semibold">
                    {t.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 border border-zinc-200 p-8 rounded-3xl flex flex-col justify-between hover:border-zinc-300 hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-zinc-900 mb-4">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <FiStar key={i} className="w-3.5 h-3.5 fill-current text-zinc-900" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic mb-6">
                  "{t.content}"
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-zinc-900">{t.name}</h4>
                  <span className="text-[11px] text-zinc-500">
                    {t.role}{t.company ? ` • ${t.company}` : ''}
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2.5 py-1 bg-white border border-zinc-200 rounded-full text-zinc-600 font-semibold">
                  {t.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
