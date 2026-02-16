import React from 'react';
import { Section } from './Section';
import { copy } from '../data/copy';

export function BrandSection() {
  const { title, intro, does, doesNot, doesLabel, doesNotLabel } = copy.brand;
  return (
    <Section id="brand">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">{title}</h2>
      <p className="text-neutral-600 leading-relaxed mb-10">{intro}</p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl border border-neutral-200 bg-white/50">
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
            {doesLabel}
          </h3>
          <ul className="space-y-2 text-neutral-700">
            {does.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-emerald-600 shrink-0" aria-hidden>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 rounded-xl border border-neutral-200 bg-white/50">
          <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">
            {doesNotLabel}
          </h3>
          <ul className="space-y-2 text-neutral-700">
            {doesNot.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-neutral-400 shrink-0" aria-hidden>—</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
