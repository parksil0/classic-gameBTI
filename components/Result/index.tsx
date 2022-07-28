import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import dancing from '@/assets/dancing.svg';
import Text from '@/components/common/Text';
import Button from '@/components/common/Button';

import * as Styled from './index.styles';
import Badges from './Badges';
import { MBTI_RESULT, MBTI_TYPES } from './index.constants';
import BottomButtonGroup from './BottomButtonGroup';

const Result = () => {
  const router = useRouter();

  const mbti = useMemo(
    () => router.query.mbti as keyof typeof MBTI_TYPES,
    [router],
  );

  if (!mbti) return null;

  const handleClickRestart = () => {
    router.push('/question');
  };

  return (
    <Styled.Wrapper>
      <Styled.InnerWrapper>
        <Text as="h1" color="white" variant="pageHeading">
          {String(router.query.mbti).toUpperCase()}
        </Text>
        <Text as="p" variant="heading" marginTop={14} color="white">
          {MBTI_RESULT[mbti].summary}
        </Text>
        <Text
          as="h2"
          color="white"
          variant="pageHeading"
          marginTop={9}
          marginBottom={27}
        >
          {`“${MBTI_RESULT[mbti].recommandGame}”`}
        </Text>
        <Image src={MBTI_RESULT[mbti].image} width={271} height={227} />
        <Badges characteristics={MBTI_RESULT[mbti].badges} />
        <Text
          as="p"
          variant="subHeading"
          color="white"
          marginTop={45}
          marginBottom={17}
        >
          CHECK LIST
        </Text>
        <Text as="p" color="white" style={{ width: 281 }}>
          {MBTI_RESULT[mbti].checkList.split('\n').map((value) => (
            <span key={value}>
              {value}
              <br />
              <br />
            </span>
          ))}
        </Text>
        <Text as="p" color="white" marginTop={45}>
          이 유형은 전체 결과의 {MBTI_RESULT[mbti].rate}% 로&nbsp;
          {MBTI_RESULT[mbti].ranking}위입니다.
        </Text>
        <Button
          color="white"
          backgroundColor="gray_50"
          marginTop={64}
          paddingX={23}
          paddingY={0}
          radius={10}
          variant="heading"
          onClick={handleClickRestart}
        >
          다시하기
          <Image src={dancing} />
        </Button>
        <BottomButtonGroup />
      </Styled.InnerWrapper>
    </Styled.Wrapper>
  );
};

export default Result;
