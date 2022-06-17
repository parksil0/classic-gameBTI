import theme from '@/styles/theme';
import React from 'react';
import {
  Body,
  Caption,
  Heading,
  PageHeading,
  SubHeading,
} from './index.styled';

interface Props
  extends React.HTMLAttributes<
    HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
  > {
  children: React.ReactNode;
  fontWeight?: 400 | 700;
  color?: keyof typeof theme.colors;
  variant?: 'pageHeading' | 'heading' | 'subHeading' | 'body' | 'caption';
}

const Text = React.forwardRef(
  ({
    children,
    variant = 'body',
    color = 'gray_90',
    fontWeight,
    ...rest
  }: Props) => {
    switch (variant) {
      case 'pageHeading':
        return (
          <PageHeading color={color} fontWeight={fontWeight} {...rest}>
            {children}
          </PageHeading>
        );
      case 'subHeading':
        return (
          <SubHeading color={color} fontWeight={fontWeight} {...rest}>
            {children}
          </SubHeading>
        );
      case 'heading':
        return (
          <Heading color={color} fontWeight={fontWeight} {...rest}>
            {children}
          </Heading>
        );
      case 'caption':
        return (
          <Caption color={color} fontWeight={fontWeight} {...rest}>
            {children}
          </Caption>
        );
      default:
        return (
          <Body color={color} fontWeight={fontWeight} {...rest}>
            {children}
          </Body>
        );
    }
  },
);

export default Text;
