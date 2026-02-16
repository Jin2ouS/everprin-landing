import React from 'react';
import { Section } from './Section';
import { copy } from '../data/copy';

export function SigyeongjaSection() {
  const { title, definition, whatChanges } = copy.sigyeongja;
  return (
    <Section id="sigyeongja">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{title}</h2>
      <blockquote className="pl-4 border-l-4 border-slate-300 text-slate-700 leading-relaxed mb-6">
        {definition}
      </blockquote>
      <p className="text-slate-600 leading-relaxed">{whatChanges}</p>
    </Section>
  );
}
