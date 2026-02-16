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
    'bg-neutral-900 text-white border border-neutral-700 hover:bg-neutral-800 focus:ring-neutral-500',
  secondary:
    'bg-white/5 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:bg-white/10 focus:ring-neutral-400',
  ghost:
    'text-neutral-700 dark:text-neutral-300 hover:bg-white/5 border border-transparent focus:ring-neutral-400',
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
