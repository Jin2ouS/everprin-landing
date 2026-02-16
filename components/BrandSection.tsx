import React from 'react';
import { Section } from './Section';
import { copy } from '../data/copy';

export function BrandSection() {
  const { title, intro, does, doesNot, doesLabel, doesNotLabel } = copy.brand;
  return (
    <Section id="brand">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{title}</h2>
      <p className="text-slate-600 leading-relaxed mb-10">{intro}</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
            {doesLabel}
          </h3>
          <ul className="space-y-2 text-slate-700">
            {does.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-slate-600 shrink-0" aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm">
          <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
            {doesNotLabel}
          </h3>
          <ul className="space-y-2 text-slate-700">
            {doesNot.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-slate-400 shrink-0" aria-hidden>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
