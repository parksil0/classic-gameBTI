import theme from '@/styles/theme';

export interface CustomTheme {
  colors: typeof theme.colors;
}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme, Theme {}
}
