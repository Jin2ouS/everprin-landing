import React from 'react';
import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import { Button } from './Button';
import { copy } from '../data/copy';

export function CTASection() {
  const { title, items } = copy.cta;
  return (
    <Section id="cta" className="bg-slate-50/80">
      <SectionTitle title={title} label="06" />
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap mt-8">
        {items.map((item, i) => (
          <Button
            key={i}
            variant={i === items.length - 1 ? 'secondary' : 'primary'}
            href={item.href}
            {...(item.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </Section>
  );
}
