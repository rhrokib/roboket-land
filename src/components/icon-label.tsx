'use client';

import { TextColor, TextSize } from '@/types/ui-config';

interface iconLabelProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label: string;
  fontSize?: TextSize;
  color?: TextColor;
}

export function IconLabel({
  leftIcon,
  rightIcon,
  label,
  fontSize = 'text-base',
  color = 'text-secondary',
  ...props
}: iconLabelProps) {
  return (
    <div className="flex justify-center items-center">
      {leftIcon && <div className="mr-2">{leftIcon}</div>}

      <div>
        <span className={`${color} ${fontSize}`}>{label}</span>
      </div>

      {rightIcon && <div className="ml-2">{rightIcon}</div>}
    </div>
  );
}
