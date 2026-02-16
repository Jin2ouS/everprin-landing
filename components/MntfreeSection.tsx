import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { copy } from '../data/copy';

export function MntfreeSection() {
  const { title, subtitle, flow, explanation, mntfreeLink, mntfreeLabel } = copy.mntfree;
  return (
    <Section id="mntfree">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{title}</h2>
      <p className="text-slate-600 mb-4">{subtitle}</p>
      <p className="text-lg font-medium text-slate-700 mb-4">{flow}</p>
      <p className="text-slate-600 leading-relaxed mb-8">{explanation}</p>
      <Button
        variant="primary"
        href={mntfreeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {mntfreeLabel}
      </Button>
    </Section>
  );
}
