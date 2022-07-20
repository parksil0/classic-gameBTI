import Text from '@/components/common/Text';
import { TEXTS } from './index.constants';
import * as Styled from './index.styles';

const Header = () => {
  return (
    <Styled.Wrapper>
      {Object.values(TEXTS).map(({ title, description }) => (
        <Text as="p" variant="heading" key={title}>
          <span>{title}</span>
          <br />
          <span>{description}</span>
        </Text>
      ))}
    </Styled.Wrapper>
  );
};

export default Header;
