import theme from '@/styles/theme';
import { ElementType, forwardRef, Ref } from 'react';
import * as Styled from './index.styles';

interface Props
  extends React.HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  > {
  children: React.ReactNode;
  fontWeight?: 400 | 700;
  color?: keyof typeof theme.colors;
  variant?: 'pageHeading' | 'heading' | 'subHeading' | 'body' | 'caption';
  as?: ElementType;
}

const Text = forwardRef(
  (
    {
      as,
      children,
      variant = 'body',
      color = 'gray_90',
      fontWeight,
      ...rest
    }: Props,
    forwardedRef: Ref<HTMLElement>,
  ) => {
    return (
      <Styled.Text
        as={as}
        variant={variant}
        color={color}
        fontWeight={fontWeight}
        ref={forwardedRef}
        {...rest}
      >
        {children}
      </Styled.Text>
    );
  },
);

export default Text;
