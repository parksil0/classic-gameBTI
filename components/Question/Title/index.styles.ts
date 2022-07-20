import { css } from '@emotion/react';
import styled from '@emotion/styled';

import type { Position } from './index.types';

export const Wrapper = styled.div`
  display: flex;
  width: 304px;
  justify-content: center;
  margin: 36px auto 0;
`;

export const TextBox = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  justify-content: center;
  padding: 11px 22px;

  background: ${({ theme }) => theme.color.white};
  border-radius: 2px;

  box-shadow: 8px 8px ${({ theme }) => theme.color.black};
`;

export const RivetWrapper = styled.div<{ position: Position }>`
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
