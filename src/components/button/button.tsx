// Button.tsx
import React from 'react';

// interfaces
interface ButtonSize {
  small: 'px-2 py-1 text-sm';
  medium: 'px-4 py-2 text-base';
  large: 'px-6 py-3 text-lg';
}

interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  label: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  size?: keyof ButtonSize;
  variant?: 'primary' | 'secondary' | 'accent';
  outline?: boolean;
}

// implementation
export function Button({
  label,
  rightIcon,
  leftIcon,
  size = 'medium',
  color = 'bg-primary-600 text-light',
  ...props
}: ButtonProps) {
  const sizeClasses: ButtonSize = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      {...props}
      className={`${color} ${sizeClasses[size]} flex justify-center items-center rounded gap-2 hover:opacity-90  active:opacity-100`}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {label}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
