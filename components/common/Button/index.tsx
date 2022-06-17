import { ButtonHTMLAttributes, forwardRef, ReactNode, Ref } from 'react';
import theme from '@/styles/theme';
import * as Styled from './index.styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  radius?: number;
  backgroundColor?: keyof typeof theme.colors;
  paddingTop?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  children: ReactNode;
}

const Button = forwardRef(
  (
    {
      backgroundColor = 'inherit',
      children,
      radius,
      paddingTop = 10,
      paddingRight = 30,
      paddingBottom = 10,
      paddingLeft = 30,
      ...rest
    }: Props,
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
