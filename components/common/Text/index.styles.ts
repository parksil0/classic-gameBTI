import styled from '@emotion/styled';

import type { RemoveAllOptionalProps } from '@/types/util';
import type { TextProps } from './index.types';

interface Props extends RemoveAllOptionalProps<TextProps> {}

export const Text = styled.span<Props>`
  color: ${({ theme, color }) => theme.color[color]};

  font-size: ${({ theme, variant }) => theme.fontSize[variant]};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  line-height: ${({ theme, variant }) => theme.lineHeight[variant]};
`;
