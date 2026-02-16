import React from 'react';
import { copy } from '../data/copy';

export function HeroSection() {
  const { headline, subheadline, disclaimers } = copy.hero;
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex flex-col justify-center py-20 px-6"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-3xl text-center">
        <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
          {headline}
        </h1>
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
