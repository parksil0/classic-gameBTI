import styled from '@emotion/styled';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

interface Props {
  color: keyof typeof theme.colors;
  fontWeight?: 400 | 700;
  variant: 'pageHeading' | 'heading' | 'subHeading' | 'body' | 'caption';
}

export const Text = styled.span<Props>`
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ theme, color }) => theme.colors[color]};

  ${({ variant, fontWeight }) => {
    switch (variant) {
      case 'pageHeading':
        return css`
          font-weight: ${fontWeight || 700};
          font-size: 32px;
          line-height: 38px;
        `;
      case 'subHeading':
        return css`
          font-size: 20px;
          line-height: 23px;
        `;
      case 'heading':
        return css`
          font-size: 14px;
          line-height: 16px;
        `;
      case 'caption':
        return css`
          font-size: 12px;
          line-height: 18px;
        `;
      default:
        return css`
          font-size: 14px;
          line-height: 21px;
        `;
    }
  }}
`;
