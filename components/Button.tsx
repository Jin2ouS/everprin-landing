import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  children: React.ReactNode;
  as?: 'a' | 'button';
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#fafafa] disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 focus:ring-slate-500 focus:ring-offset-slate-50',
  secondary:
    'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 focus:ring-slate-400 focus:ring-offset-slate-50',
  ghost:
    'text-slate-700 hover:bg-slate-100 border border-transparent focus:ring-slate-400 focus:ring-offset-slate-50',
};

export function Button({
  variant = 'primary',
  children,
  className = '',
  as: Component = 'a',
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();
  if (Component === 'button') {
    const { href, ...rest } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <button type="button" className={classes} {...rest}>
        {children}
      </button>
    );
  }
  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
