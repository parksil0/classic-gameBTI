import Image from 'next/image';
import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import { ButtonCornerPositionsWrapper } from '@/components/common/Button/index.styles';
import crystal from '@/assets/crystal.svg';
import { BUTTON_CORNER_POSITIONS } from '@/constants/button';
import * as Styled from './index.styles';

const StartButton = () => {
  const router = useRouter();

  const handleClickStartButton = () => {
    router.push('/question');
  };

  return (
    <Styled.Wrapper onClick={handleClickStartButton}>
      <Text variant="pageHeading" color="yellow_full" textAlign="center">
        START
      </Text>
      {(
        Object.keys(BUTTON_CORNER_POSITIONS) as Array<
          keyof typeof BUTTON_CORNER_POSITIONS
        >
      ).map((value) => (
        <ButtonCornerPositionsWrapper key={value} position={value}>
          <Image src={crystal} width={9} height={9} />
        </ButtonCornerPositionsWrapper>
      ))}
    </Styled.Wrapper>
  );
};

export default StartButton;
