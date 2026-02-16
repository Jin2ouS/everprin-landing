import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { copy } from '../data/copy';

export function MntfreeSection() {
  const { title, subtitle, flow, explanation, mntfreeLink, mntfreeLabel } = copy.mntfree;
  return (
    <Section id="mntfree">
      <SectionTitle title={title} label="05" subtitle={subtitle} />
      <p className="text-lg font-medium text-slate-700 mb-4 mt-2">{flow}</p>
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
