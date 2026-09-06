import React from 'react';
import { marqueeKeywords } from '../data/landingData';

export default function MarqueeTicker() {
  const repeatedWords = [...marqueeKeywords, ...marqueeKeywords, ...marqueeKeywords];

  return (
    <div className="border-y border-zinc-200 bg-zinc-50 py-3.5 overflow-hidden select-none w-full">
      <div className="animate-marquee-scroll flex w-max">
        {repeatedWords.map((word, idx) => (
          <span
            key={idx}
            className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold inline-flex items-center gap-4 px-4 shrink-0"
          >
            <span>{word}</span>
            <span className="text-zinc-300">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
