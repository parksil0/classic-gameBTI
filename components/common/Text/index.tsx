import {
  ElementType,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  Ref,
} from 'react';

import theme from '@/styles/theme';
import * as Styled from './index.styles';
import type { TextProps } from './index.types';

interface Props
  extends HTMLAttributes<
      HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
    >,
    TextProps {
  as?: ElementType;
  color?: keyof typeof theme.color;
}

const Text = forwardRef(
  (
    {
      as,
      children,
      variant = 'body',
      color = 'gray_90',
      fontWeight = 400,
      ...rest
    }: PropsWithChildren<Props>,
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
