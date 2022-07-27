import { useRouter } from 'next/router';
import Text from '../common/Text';
import * as Styled from './index.styles';

const Result = () => {
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <Text as="h1" color="white" variant="pageHeading">
        🎉&nbsp;Your mbti is&nbsp;
        <Text color="yellow_full" variant="pageHeading">
          {router.query.mbti}!&nbsp;
        </Text>
        🎉
      </Text>
    </Styled.Wrapper>
  );
};

export default Result;
