// Header.tsx
import { SmallText, TextColor, TextSize } from '@/types/ui-config';
import React, { ReactNode } from 'react';

// interfaces
interface HeaderProps {
  alignment?: 'left' | 'center' | 'right';
  children?: ReactNode;
}

interface HeaderTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: TextColor;
  size?: SmallText;
  children?: React.ReactNode;
}

interface HeaderTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: TextColor;
  size?: TextSize;
  coloredWords?: string[];
  accentColor?: TextColor;
  children?: React.ReactNode;
}

interface SubHeaderProps {
  children?: ReactNode;
  color?: TextColor;
  size?: TextSize;
}

// implementations

export function Header({ alignment = 'left', children }: HeaderProps) {
  const alignmentClass =
    alignment === 'center'
      ? 'text-center'
      : alignment === 'right'
        ? 'text-right'
        : 'text-left';

  return (
    <div className={`${alignmentClass} flex flex-col gap-4`}>{children}</div>
  );
}

// title
export function HeaderTitle({
  children,
  color = 'text-dark',
  size = 'text-sm',
  ...props
}: HeaderTitleProps) {
  return (
    <h1 className={`${color} ${size} font-semibold`} {...props}>
      {children}
    </h1>
  );
}

// Header
export function HeaderText({
  children,
  color = 'text-dark',
  size = 'text-sm',
  coloredWords,
  accentColor = 'text-primary-600',
  ...props
}: HeaderTextProps) {
  const coloredWordsSet = new Set(coloredWords);

  return (
    <h2 className={`${color} ${size} font-bold `} {...props}>
      {typeof children === 'string'
        ? children.split(' ').map((word: string, index: number) => (
            <span
              key={index}
              className={`${coloredWordsSet.has(word.trim().toLowerCase()) ? accentColor : color}`}>
              {word}{' '}
            </span>
          ))
        : children}
    </h2>
  );
}

// SubHeader
export function SubHeader({
  children,
  color = 'text-dark',
  size = 'text-base',
}: SubHeaderProps) {
  return <span className={`text-${color} text-${size} `}>{children}</span>;
}
