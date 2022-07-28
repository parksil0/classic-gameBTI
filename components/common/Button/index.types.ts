import theme from '@/styles/theme';

export interface ButtonProps {
  radius?: number;
  backgroundColor?: keyof typeof theme.color;
  paddingX?: number;
  paddingY?: number;
}
