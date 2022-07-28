import {
  ButtonHTMLAttributes,
  forwardRef,
  PropsWithChildren,
  Ref,
} from 'react';

import theme from '@/styles/theme';
import type { TextProps } from '../Text/index.types';

import * as Styled from './index.styles';
import type { ButtonProps } from './index.types';

interface Props
  extends ButtonProps,
    TextProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof theme.color;
}

const Button = forwardRef(
  (
    {
      backgroundColor = 'inherit',
      children,
      radius = 0,
      paddingX = 30,
      paddingY = 10,
      variant = 'body',
      color = 'gray_90',
      fontWeight = 400,
      marginTop = 0,
      marginRight = 0,
      marginBottom = 0,
      marginLeft = 0,
      textAlign = 'left',
      ...rest
    }: PropsWithChildren<Props>,
    forwardedRef: Ref<HTMLButtonElement>,
  ) => {
    return (
      <Styled.Button
        backgroundColor={backgroundColor}
        paddingX={paddingX}
        paddingY={paddingY}
        radius={radius}
        variant={variant}
        color={color}
        fontWeight={fontWeight}
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        textAlign={textAlign}
        ref={forwardedRef}
        {...rest}
      >
        {children}
      </Styled.Button>
    );
  },
);

export default Button;
