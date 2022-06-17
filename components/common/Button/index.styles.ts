import theme from '@/styles/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface Props {
  radius?: number;
  backgroundColor?: keyof typeof theme.colors;
  paddingTop: number;
  paddingRight: number;
  paddingBottom: number;
  paddingLeft: number;
}

export const Button = styled.button<Props>`
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius}px;
    `}

  ${({ theme, backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${theme.colors[backgroundColor]};
    `};

  padding: ${({ paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;`};
`;
