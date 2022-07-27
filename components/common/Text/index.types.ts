import type { CSSProperties } from 'react';

import theme from '@/styles/theme';
import type { TextVariants } from '@/types/theme';

type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface TextProps {
  fontWeight?: FontWeight;
  color?: keyof typeof theme.color;
  variant?: TextVariants;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  textAlign?: CSSProperties['textAlign'];
}
