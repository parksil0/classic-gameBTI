import styled from '@emotion/styled';

import type { RemoveAllOptionalProps } from '@/types/util';
import type { TextProps } from './index.types';

interface Props extends RemoveAllOptionalProps<TextProps> {}

export const Text = styled.span<Props>`
  margin: ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px;`};
  color: ${({ theme, color }) => theme.color[color]};

  font-size: ${({ theme, variant }) => theme.fontSize[variant]};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ theme, variant }) => theme.lineHeight[variant]};
  text-align: ${({ textAlign }) => textAlign};
`;
