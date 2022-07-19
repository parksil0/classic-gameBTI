import {
  ButtonHTMLAttributes,
  forwardRef,
  PropsWithChildren,
  Ref,
} from 'react';
import * as Styled from './index.styles';
import { ButtonProps } from './index.types';

interface Props extends ButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef(
  (
    {
      backgroundColor = 'inherit',
      children,
      radius = 0,
      paddingTop = 10,
      paddingRight = 30,
      paddingBottom = 10,
      paddingLeft = 30,
      ...rest
    }: PropsWithChildren<Props>,
    forwardedRef: Ref<HTMLButtonElement>,
  ) => {
    return (
      <Styled.Button
        backgroundColor={backgroundColor}
        paddingTop={paddingTop}
        paddingRight={paddingRight}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        radius={radius}
        ref={forwardedRef}
        {...rest}
      >
        {children}
      </Styled.Button>
    );
  },
);

export default Button;
