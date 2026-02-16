import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { copy } from '../data/copy';

export function BrandSection() {
  const { title, intro, does, doesNot, doesLabel, doesNotLabel } = copy.brand;
  return (
    <Section id="brand">
      <SectionTitle title={title} label="01" subtitle={intro} />
      <div className="grid md:grid-cols-2 gap-8 mt-2">
        <div className="p-6 rounded-xl border border-slate-200 border-l-2 border-l-slate-400 bg-white shadow-sm hover:border-l-slate-500 transition-colors">
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
        <div className="p-6 rounded-xl border border-slate-200 border-l-2 border-l-slate-300 bg-white shadow-sm hover:border-l-slate-400 transition-colors">
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
