import type { PropsWithChildren } from 'react';

import Text from '@/components/common/Text';
import * as Styled from './index.styles';

const QuestionNumber = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Styled.Wrapper>
      <Styled.TextBox>
        <Text as="p" color="white" variant="pageHeading" fontWeight={700}>
          {children}
        </Text>
      </Styled.TextBox>
    </Styled.Wrapper>
  );
};

export default QuestionNumber;
