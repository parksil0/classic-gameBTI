import styled from '@emotion/styled';
import { RemoveAllOptionalProps } from '@/types/util';
import { TextProps } from './index.types';

interface Props extends RemoveAllOptionalProps<TextProps> {}

export const Text = styled.span<Props>`
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ theme, color }) => theme.color[color]};

  font-size: ${({ theme, variant }) => theme.fontSize[variant]};
  line-height: ${({ theme, variant }) => theme.lineHeight[variant]};
`;
