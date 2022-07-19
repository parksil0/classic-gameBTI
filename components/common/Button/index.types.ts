import theme from '@/styles/theme';

export interface ButtonProps {
  radius?: number;
  backgroundColor?: keyof typeof theme.color;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
}
