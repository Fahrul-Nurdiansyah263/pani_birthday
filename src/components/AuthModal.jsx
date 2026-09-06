import React, { useState } from 'react';
import { FiX, FiCheck, FiArrowRight } from './Icons';

export default function AuthModal({ isOpen, onClose, initialMode = 'register' }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync mode when prop changes
  React.useEffect(() => {
    setMode(initialMode);
    setIsSubmitted(false);
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-fadeIn">
      <div 
        className="bg-white rounded-3xl border border-zinc-200 shadow-2xl max-w-md w-full p-6 sm:p-8 relative transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 transition-colors"
          aria-label="Tutup"
        >
          <FiX className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <FiCheck className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">
              {mode === 'login' ? 'Berhasil Masuk!' : 'Pendaftaran Berhasil!'}
            </h3>
            <p className="text-sm text-zinc-500">
              Selamat datang di Faeva. Menyiapkan dashboard instan Anda...
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-sm mb-3">
                F
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
                {mode === 'login' ? 'Masuk ke Faeva' : 'Mulai Buat Website Gratis'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 mt-1">
                {mode === 'login' 
                  ? 'Lanjutkan mengelola landing page & template Anda.' 
                  : 'Tanpa kartu kredit. Publikasikan website dalam 5 menit.'}
              </p>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex bg-zinc-100 p-1 rounded-xl mb-5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setMode('register')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  mode === 'register' ? 'bg-white text-zinc-900 shadow-xs' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                Daftar Akun Baru
              </button>
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  mode === 'login' ? 'bg-white text-zinc-900 shadow-xs' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                Masuk
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-mono text-zinc-600 uppercase mb-1">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Sarah Kartika"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-zinc-900 transition-colors bg-zinc-50/50"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-mono text-zinc-600 uppercase mb-1">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@domain.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-zinc-900 transition-colors bg-zinc-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-600 uppercase mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm focus:outline-none focus:border-zinc-900 transition-colors bg-zinc-50/50"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-xl bg-zinc-900 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <span>{mode === 'login' ? 'Masuk Sekarang' : 'Buat Akun Gratis'}</span>
                <FiArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-5 text-center text-xs text-zinc-500">
              Dengan melanjutkan, Anda menyetujui Ketentuan Layanan dan Kebijakan Privasi Faeva.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
