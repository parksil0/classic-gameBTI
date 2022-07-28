import { type PropsWithChildren } from 'react';

import Text from '@/components/common/Text';
import * as Styled from './index.styles';

const Badge = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Styled.Wrapper>
      <Text as="p" variant="heading" color="white" textAlign="center">
        {children}
      </Text>
    </Styled.Wrapper>
  );
};

export default Badge;
