import React from 'react';
import { FiCheck } from './Icons';

export default function Pricing({ onOpenAuth }) {
  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24 border-t border-zinc-200 bg-zinc-50/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 block">
          Struktur Harga
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 uppercase">
          Pilihan Paket Transparan
        </h2>
        <p className="text-zinc-600 text-sm sm:text-base mt-2 leading-relaxed">
          Mulai gratis tanpa biaya hosting tersembunyi, beralih ke fitur profesional kapan saja.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {/* Free Plan */}
        <div className="bg-white border border-zinc-200 p-8 rounded-2xl flex flex-col justify-between hover:border-zinc-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 uppercase">Free</h3>
            <p className="text-zinc-500 text-xs mt-1 mb-6">Cocok untuk memulai kehadiran online dasar</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-zinc-900 font-mono">Rp0</span>
              <span className="text-zinc-500 text-xs font-mono ml-2">/ selamanya</span>
            </div>
            <div className="border-t border-zinc-100 my-6"></div>
            <ul className="space-y-3.5 text-xs text-zinc-600">
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>1 Template Desain Siap Pakai</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>1 Landing Page Aktif</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Subdomain Faeva Gratis</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Tombol WhatsApp Floating</span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <button
              onClick={() => onOpenAuth('register')}
              className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold uppercase tracking-wider transition-colors active:scale-[0.98] cursor-pointer"
            >
              Mulai Gratis
            </button>
          </div>
        </div>

        {/* Premium Plan (Featured) */}
        <div className="bg-white border-2 border-zinc-900 p-8 rounded-2xl flex flex-col justify-between relative shadow-xl hover:-translate-y-1 transition-all duration-200">
          <div className="absolute top-5 right-5 bg-zinc-900 text-white font-semibold text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full">
            Terpopuler
          </div>
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 uppercase">Premium</h3>
            <p className="text-zinc-500 text-xs mt-1 mb-6">Pilihan optimal untuk UMKM &amp; Acara Spesial</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-zinc-900 font-mono">Rp49.000</span>
              <span className="text-zinc-500 text-xs font-mono ml-2">/ sekali bayar</span>
            </div>
            <div className="border-t border-zinc-100 my-6"></div>
            <ul className="space-y-3.5 text-xs text-zinc-700">
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>3 Template Desain Pilihan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Tanpa Watermark Faeva</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Tombol WhatsApp &amp; E-Commerce</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Pengaturan SEO Dasar</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Integrasi Google Maps Interaktif</span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <button
              onClick={() => onOpenAuth('register')}
              className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors active:scale-[0.98] cursor-pointer"
            >
              Pilih Paket Premium
            </button>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-white border border-zinc-200 p-8 rounded-2xl flex flex-col justify-between hover:border-zinc-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
          <div>
            <h3 className="text-2xl font-bold text-zinc-900 uppercase">Pro</h3>
            <p className="text-zinc-500 text-xs mt-1 mb-6">Paket terlengkap untuk branding profesional</p>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-zinc-900 font-mono">Rp99.000</span>
              <span className="text-zinc-500 text-xs font-mono ml-2">/ sekali bayar</span>
            </div>
            <div className="border-t border-zinc-100 my-6"></div>
            <ul className="space-y-3.5 text-xs text-zinc-600">
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Akses Seluruh Template (13+ Preset)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Custom Domain Pribadi (.com/.id)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>Tanpa Watermark &amp; Full Add-on</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>QR Code Generator Unduh Siap Cetak</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiCheck className="w-4 h-4 text-zinc-900 shrink-0" />
                <span>RSVP &amp; Background Music (Wedding)</span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <button
              onClick={() => onOpenAuth('register')}
              className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold uppercase tracking-wider transition-colors active:scale-[0.98] cursor-pointer"
            >
              Pilih Paket Pro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
