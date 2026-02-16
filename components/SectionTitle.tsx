import React from 'react';

type SectionTitleProps = {
  title: string;
  /** H2 위에 작은 라벨 (예: "01", "Philosophy") */
  label?: string;
  /** H2 아래 부가 문구 */
  subtitle?: string;
};

export function SectionTitle({ title, label, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10">
      {label && (
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          {label}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h2>
      <div className="w-12 h-0.5 bg-slate-400 rounded-full mt-2" aria-hidden />
      {subtitle && <p className="text-slate-600 mt-4">{subtitle}</p>}
    </div>
  );
}
