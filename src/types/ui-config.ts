// only write ui config types here

export type TextColor =
  | 'text-primary-600'
  | 'text-dark'
  | 'text-light'
  | 'text-secondary'
  | 'text-accent-600';

export type SmallText = 'text-sm' | 'text-base' | 'text-xs';
export type MediumText = 'text-lg' | 'text-base' | 'text-sm';
export type LargeText = 'text-2xl' | 'text-xl' | 'text-lg';
export type TextSize = SmallText | MediumText | LargeText;
