import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { RemoveAllOptionalProps } from '@/types/util';
import { BUTTON_CORNER_POSITIONS } from '@/constants/button';
import type { ButtonProps } from './index.types';

interface Props extends RemoveAllOptionalProps<ButtonProps> {}

export const Button = styled.button<Props>`
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius}px;
    `}

  padding: ${({ paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;`};

  background-color: ${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};
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
