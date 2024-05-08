// only write ui config types here

export type TextColor =
  | 'text-primary-600'
  | 'text-dark'
  | 'text-light'
  | 'text-secondary'
  | 'text-accent-200'
  | 'text-accent-400'
  | 'text-accent-600';

export type SmallText = 'text-xs' | 'text-sm' | 'text-base';
export type MediumText = 'text-lg' | 'text-xl' | 'text-2xl';
export type LargeText =
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl'
  | 'text-7xl';
export type TextSize = SmallText | MediumText | LargeText;
