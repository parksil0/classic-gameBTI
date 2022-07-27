import type { PropsWithChildren } from 'react';
import Image from 'next/image';

import Text from '@/components/common/Text';
import { ButtonCornerPositionsWrapper } from '@/components/common/Button/index.styles';
import rivet from '@/assets/rivet.svg';
import { BUTTON_CORNER_POSITIONS } from '@/constants/button';
import * as Styled from './index.styles';

const Title = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Styled.Wrapper>
      <Styled.TextBox>
        <Text as="p" color="black" variant="subHeading">
          {children}
        </Text>
        {(
          Object.keys(BUTTON_CORNER_POSITIONS) as Array<
            keyof typeof BUTTON_CORNER_POSITIONS
          >
        ).map((value) => (
          <ButtonCornerPositionsWrapper key={value} position={value}>
            <Image src={rivet} width={6} height={6} />
          </ButtonCornerPositionsWrapper>
        ))}
      </Styled.TextBox>
    </Styled.Wrapper>
  );
};

export default Title;
