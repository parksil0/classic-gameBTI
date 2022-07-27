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
      marginTop = 0,
      marginRight = 0,
      marginBottom = 0,
      marginLeft = 0,
      textAlign = 'left',
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
        marginTop={marginTop}
        marginRight={marginRight}
        marginBottom={marginBottom}
        marginLeft={marginLeft}
        textAlign={textAlign}
        {...rest}
      >
        {children}
      </Styled.Text>
    );
  },
);

export default Text;
