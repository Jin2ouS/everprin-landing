import React from 'react';
import { Section } from './Section';
import { copy } from '../data/copy';

export function RoleSection() {
  const { title, subtitle, points } = copy.role;
  return (
    <Section id="role" className="bg-slate-50/80">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h2>
      <p className="text-slate-600 mb-10">{subtitle}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {points.map((point, i) => (
          <article
            key={i}
            className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{point.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
