import React from 'react';
import { FiArrowRight } from './Icons';

export default function CtaSection({ onOpenAuth }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 border-t border-zinc-200">
      <div className="bg-zinc-900 text-white rounded-3xl p-10 sm:p-16 text-center relative overflow-hidden shadow-xl">
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3 block">
          Mulai Hari Ini
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight uppercase mb-4 max-w-3xl mx-auto leading-tight">
          Siap Membangun Kehadiran Digital Anda dalam 5 Menit?
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Daftar sekarang secara gratis tanpa kartu kredit. Buat landing page profesional pertama Anda dan bagikan tautannya ke pelanggan Anda.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => onOpenAuth('register')}
            className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-100 font-semibold text-sm px-8 py-4 rounded-xl transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Mulai Buat Website Sekarang</span>
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
