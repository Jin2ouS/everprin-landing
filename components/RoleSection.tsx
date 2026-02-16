import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { copy } from '../data/copy';

export function RoleSection() {
  const { title, subtitle, points } = copy.role;
  return (
    <Section id="role" className="bg-slate-50/80">
      <SectionTitle title={title} label="04" subtitle={subtitle} />
      <div className="grid md:grid-cols-3 gap-6 mt-2">
        {points.map((point, i) => (
          <article
            key={i}
            className={`p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:border-slate-300 transition-colors ${i === 0 ? 'border-l-2 border-l-slate-500' : 'border-l-2 border-l-slate-400 hover:border-l-slate-500'}`}
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{point.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{point.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
