import theme from '@/styles/theme';

export interface CustomTheme {
  color: typeof theme.color;
  shadow: typeof theme.shadow;
  fontSize: typeof theme.fontSize;
  lineHeight: typeof theme.lineHeight;
}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
