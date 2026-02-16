import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { copy } from '../data/copy';

export function CTASection() {
  const { title, items } = copy.cta;
  return (
    <Section id="cta" className="bg-neutral-100/80">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">{title}</h2>
      <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
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
