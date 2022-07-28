import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { RemoveAllOptionalProps } from '@/types/util';
import { BUTTON_CORNER_POSITIONS } from '@/constants/button';
import type { TextProps } from '../Text/index.types';
import type { ButtonProps } from './index.types';

interface Props
  extends RemoveAllOptionalProps<ButtonProps>,
    RemoveAllOptionalProps<TextProps> {}

export const Button = styled.button<Props>`
  ${({ radius }) =>
    Boolean(radius) &&
    css`
      border-radius: ${radius}px;
    `}

  display: flex;
  align-items: center;
  padding: ${({ paddingX, paddingY }) => `${paddingY}px ${paddingX}px`};
  margin: ${({ marginTop, marginRight, marginBottom, marginLeft }) =>
    `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px;`};
  background-color: ${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};
  color: ${({ theme, color }) => theme.color[color]};
  font-size: ${({ theme, variant }) => theme.fontSize[variant]};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ theme, variant }) => theme.lineHeight[variant]};
  text-align: ${({ textAlign }) => textAlign};
`;

export const ButtonCornerPositionsWrapper = styled.div<{
  position: keyof typeof BUTTON_CORNER_POSITIONS;
}>`
  position: absolute;
  display: flex;
  ${({ position }) => {
    switch (position) {
      case 'northWest':
        return css`
          top: 2px;
          left: 2px;
        `;
      case 'northEast':
        return css`
          top: 2px;
          right: 2px;
        `;
      case 'southEast':
        return css`
          right: 2px;
          bottom: 2px;
        `;
      case 'southWest':
        return css`
          bottom: 2px;
          left: 2px;
        `;
      default:
        return null;
    }
  }}
`;
