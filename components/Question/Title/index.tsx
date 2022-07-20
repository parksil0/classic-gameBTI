import type { PropsWithChildren } from 'react';
import Image from 'next/image';

import Text from '@/components/common/Text';
import rivet from '@/assets/rivet.svg';
import * as Styled from './index.styles';
import { RIVET_POSITION } from './index.constants';
import type { Position } from './index.types';

const Title = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <Styled.Wrapper>
      <Styled.TextBox>
        <Text as="p" color="black" variant="subHeading">
          {children}
        </Text>
        {Object.keys(RIVET_POSITION).map((value) => (
          <Styled.RivetWrapper key={value} position={value as Position}>
            <Image src={rivet} width={6} height={6} />
          </Styled.RivetWrapper>
        ))}
      </Styled.TextBox>
    </Styled.Wrapper>
  );
};

export default Title;
