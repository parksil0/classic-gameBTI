import Text from '@/components/common/Text';
import * as Styled from './index.styles';

const Footer = () => {
  return (
    <Styled.Wrapper>
      <Text as="p" color="white" textAlign="center">
        ⓒ CLASSIC GAMEBTI 2022
        <br />
        ALL RIGHTS RESERVED
      </Text>
    </Styled.Wrapper>
  );
};

export default Footer;
