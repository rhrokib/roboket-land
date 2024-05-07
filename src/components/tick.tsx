'use client';

import { TextColor, TextSize } from '@/types/ui-config';

interface tickProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label: string;
  fontSize: TextSize;
  color: TextColor;
}

export function Tick({
  leftIcon,
  rightIcon,
  label,
  fontSize,
  color,
  ...props
}: tickProps) {
  return (
    <div className="flex">
      {leftIcon && <div className="mr-2">{leftIcon}</div>}

      <div>
        <span className={`${color} ${fontSize}`}>{label}</span>
      </div>

      {rightIcon && <div className="ml-2">{rightIcon}</div>}
    </div>
  );
}
