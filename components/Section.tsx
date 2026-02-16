import React from 'react';

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** wrap content in max-width container; default true */
  contained?: boolean;
};

const containerMaxWidth = 'max-w-3xl'; // 768px; minimal design system

export function Section({
  id,
  children,
  className = '',
  contained = true,
}: SectionProps) {
  const content = contained ? (
    <div className={`mx-auto w-full ${containerMaxWidth} px-6`}>{children}</div>
  ) : (
    children
  );
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`.trim()}
      aria-label={id ? undefined : undefined}
    >
      {content}
    </section>
  );
}
