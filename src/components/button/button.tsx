import React from 'react';

interface ButtonSize {
  small: 'px-2 py-1 text-sm';
  medium: 'px-4 py-2 text-base';
  large: 'px-6 py-3 text-lg';
}

interface ButtonVariant {
  primary: 'bg-primary-600 text-light';
  secondary: 'bg-secondary text-light';
  accent: 'bg-accent-600 text-light';
  dark: 'bg-dark text-light';
  white: 'bg-white text-accent-600 shadow';
  light: 'bg-light text-primary-600 shadow';
}

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  size?: keyof ButtonSize;
  variant?: keyof ButtonVariant;
  outline?: boolean;
}

export function Button({
  label,
  rightIcon,
  leftIcon,
  size = 'medium',
  variant = 'primary',
  outline = false,
  ...props
}: ButtonProps) {
  const sizeClasses: ButtonSize = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const variantClasses: ButtonVariant = {
    primary: 'bg-primary-600 text-light',
    secondary: 'bg-secondary text-light',
    accent: 'bg-accent-600 text-light',
    dark: 'bg-dark text-light',
    light: 'bg-light text-primary-600 shadow',
    white: 'bg-white text-accent-600 shadow',
  };

  return (
    <button
      {...props}
      className={`${variantClasses[variant]} ${sizeClasses[size]} ${outline ? 'outline outline-1' : 'outline-none'} flex  font-medium justify-center items-center rounded gap-2 whitespace-nowrap  hover:opacity-90  active:opacity-100 active:shadow-inner`}
    >
      {leftIcon && <span className="mr-1">{leftIcon}</span>}
      {label}
      {rightIcon && <span className="ml-1">{rightIcon}</span>}
    </button>
  );
}
