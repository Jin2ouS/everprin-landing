import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { copy } from '../data/copy';

export function SigyeongjaSection() {
  const { title, definition, whatChanges } = copy.sigyeongja;
  return (
    <Section id="sigyeongja">
      <SectionTitle title={title} label="03" />
      <blockquote className="pl-4 py-3 pr-4 border-l-4 border-slate-300 bg-slate-50/50 rounded-r-lg text-slate-700 leading-relaxed mb-6 mt-6">
        {definition}
      </blockquote>
      <p className="text-slate-600 leading-relaxed">{whatChanges}</p>
    </Section>
  );
}
