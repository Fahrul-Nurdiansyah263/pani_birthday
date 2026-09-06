import React from 'react';
import { FiInstagram, FiTwitter, FiYoutube } from './Icons';

export default function Footer({ onOpenAuth }) {
  return (
    <footer className="border-t border-zinc-200 bg-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        {/* Brand Column */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-sm select-none">
              F
            </div>
            <span className="font-semibold text-lg tracking-tight text-zinc-900">
              Faeva
            </span>
          </div>
          <p className="text-xs text-zinc-500 leading-relaxed">
            Platform no-code website builder dan landing page instan untuk Bisnis UMKM, Portofolio, Undangan Pernikahan, dan Romansa Pasangan.
          </p>
        </div>

        {/* Navigation 1 */}
        <div>
          <h5 className="text-xs font-mono uppercase text-zinc-900 font-bold mb-4">Solusi Digital</h5>
          <ul className="space-y-2.5 text-xs text-zinc-500 font-medium">
            <li><a href="#solutions" className="hover:text-zinc-900 transition-colors">Bisnis &amp; UMKM Lokal</a></li>
            <li><a href="#solutions" className="hover:text-zinc-900 transition-colors">Portofolio &amp; Agensi</a></li>
            <li><a href="#solutions" className="hover:text-zinc-900 transition-colors">Undangan Pernikahan Digital</a></li>
            <li><a href="#solutions" className="hover:text-zinc-900 transition-colors">Buku Kisah Pasangan</a></li>
          </ul>
        </div>

        {/* Navigation 2 */}
        <div>
          <h5 className="text-xs font-mono uppercase text-zinc-900 font-bold mb-4">Fitur Platform</h5>
          <ul className="space-y-2.5 text-xs text-zinc-500 font-medium">
            <li><a href="#workflow" className="hover:text-zinc-900 transition-colors">Visual Live Editor</a></li>
            <li><a href="#services" className="hover:text-zinc-900 transition-colors">Tombol WhatsApp &amp; E-Commerce</a></li>
            <li><a href="#services" className="hover:text-zinc-900 transition-colors">QR Code Generator &amp; Maps</a></li>
            <li><a href="#pricing" className="hover:text-zinc-900 transition-colors">Custom Domain Pribadi</a></li>
          </ul>
        </div>

        {/* Navigation 3 */}
        <div>
          <h5 className="text-xs font-mono uppercase text-zinc-900 font-bold mb-4">Akun &amp; Bantuan</h5>
          <ul className="space-y-2.5 text-xs text-zinc-500 font-medium">
            <li>
              <button onClick={() => onOpenAuth('login')} className="hover:text-zinc-900 transition-colors text-left cursor-pointer">
                Masuk ke Akun
              </button>
            </li>
            <li>
              <button onClick={() => onOpenAuth('register')} className="hover:text-zinc-900 transition-colors text-left cursor-pointer">
                Daftar Akun Baru
              </button>
            </li>
            <li><a href="#faq" className="hover:text-zinc-900 transition-colors">Pertanyaan Umum (FAQ)</a></li>
            <li><a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="hover:text-zinc-900 transition-colors">Hubungi Support</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-mono">
        <span>© {new Date().getFullYear()} Faeva. All rights reserved.</span>
        <div className="flex gap-3 text-zinc-400">
          <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center hover:text-zinc-900 hover:border-zinc-300 transition-colors">
            <FiInstagram className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center hover:text-zinc-900 hover:border-zinc-300 transition-colors">
            <FiTwitter className="w-3.5 h-3.5" />
          </a>
          <a href="#" aria-label="Youtube" className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-center hover:text-zinc-900 hover:border-zinc-300 transition-colors">
            <FiYoutube className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
