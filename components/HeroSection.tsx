import React from 'react';
import { copy } from '../data/copy';

export function HeroSection() {
  const { headline, subheadline, disclaimers } = copy.hero;
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex flex-col justify-center py-20 px-6 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Hero 배경 블롭 */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[320px] rounded-full bg-slate-200/30 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/3 right-1/4 w-[280px] h-[280px] rounded-full bg-slate-100/50 blur-3xl pointer-events-none" aria-hidden />
      <div className="mx-auto w-full max-w-3xl text-center relative z-10">
        <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
          {headline}
        </h1>
        <div className="w-12 h-0.5 bg-slate-300 rounded-full mx-auto mb-6" aria-hidden />
        <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
          {subheadline}
        </p>
        <ul className="text-sm text-slate-500 space-y-2 max-w-md mx-auto text-left list-disc list-inside" aria-label="면책 사항">
          {disclaimers.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
