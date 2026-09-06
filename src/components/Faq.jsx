import React, { useState } from 'react';
import { faqs } from '../data/landingData';
import { FiChevronDown } from './Icons';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-24 border-t border-zinc-200">
      <div className="text-center mb-16">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
          Informasi &amp; Bantuan
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 uppercase">
          Pertanyaan yang Sering Diajukan
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openFaq === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:border-zinc-300 transition-colors shadow-2xs"
            >
              <button
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className="w-full text-left p-6 font-semibold text-sm sm:text-base flex justify-between items-center text-zinc-900 hover:bg-zinc-50 transition-colors focus:outline-none cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                  <FiChevronDown className="w-4 h-4 text-zinc-500 shrink-0 ml-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-4 font-normal animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
