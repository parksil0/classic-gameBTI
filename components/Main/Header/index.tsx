import Image from 'next/image';

import Text from '@/components/common/Text';
import Coin from '@/assets/coin.svg';
import Hearts from '@/assets/hearts.svg';
import * as Styled from './index.styles';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Text variant="subHeading" color="yellow_full">
        LUL12
      </Text>
      <Styled.CoinWrapper>
        <Image src={Coin} />
        <Text as="p" variant="subHeading" color="yellow_full">
          35
        </Text>
      </Styled.CoinWrapper>
      <Styled.HeartsWrapper>
        <Image src={Hearts} />
      </Styled.HeartsWrapper>
    </Styled.Wrapper>
  );
};

export default Header;
