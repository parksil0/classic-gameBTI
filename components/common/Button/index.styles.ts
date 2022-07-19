import { RemoveAllOptionalProps } from '@/types/util';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonProps } from './index.types';

interface Props extends RemoveAllOptionalProps<ButtonProps> {}

export const Button = styled.button<Props>`
  ${({ radius }) =>
    radius &&
    css`
      border-radius: ${radius}px;
    `}

  background-color:${({ theme, backgroundColor }) =>
    theme.color[backgroundColor]};

  padding: ${({ paddingTop, paddingRight, paddingBottom, paddingLeft }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;`};
`;
