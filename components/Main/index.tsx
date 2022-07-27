import Image from 'next/image';

import sky from '@/assets/sky.png';
import ground from '@/assets/ground.png';
import group from '@/assets/group.png';
import Logo from '@/assets/logo.svg';
import Text from '@/components/common/Text';

import * as Styled from './index.styles';
import Header from './Header';
import Footer from './Footer';
import StartButton from './StartButton';

const Main = () => {
  return (
    <Styled.Wrapper castle={group} ground={ground} sky={sky}>
      <Header />
      <Text variant="subHeading" as="h2" marginTop={100} textAlign="center">
        {'{게임으로 알아보는 성격유형 테스트}'}
      </Text>
      <Styled.TitleWrapper>
        <Image src={Logo} />
      </Styled.TitleWrapper>
      <StartButton />
      <Footer />
    </Styled.Wrapper>
  );
};

export default Main;
