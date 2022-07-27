import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import ground from '@/assets/ground.png';
import sky from '@/assets/sky.png';
import charactersWithBricks from '@/assets/characters-with-bricks.png';
import { QuestionContext } from '@/contexts/QuestionContext';
import Header from './Header';
import QuestionNumber from './QuestionNumber';
import Title from './Title';
import * as Styled from './index.styles';
import { MBTI_TYPES, Questions } from './index.constants';
import AnswerButton from './AnswerButton';
import { MbtiType } from './index.types';

const Question = () => {
  const router = useRouter();
  const { currentQuestion, selectedAnswers, isFinished } =
    useContext(QuestionContext);

  useEffect(() => {
    if (isFinished) {
      const first =
        selectedAnswers.i > selectedAnswers.e ? MBTI_TYPES.i : MBTI_TYPES.e;
      const second =
        selectedAnswers.n > selectedAnswers.s ? MBTI_TYPES.n : MBTI_TYPES.s;
      const third =
        selectedAnswers.t > selectedAnswers.f ? MBTI_TYPES.t : MBTI_TYPES.f;
      const fourth =
        selectedAnswers.p > selectedAnswers.j ? MBTI_TYPES.p : MBTI_TYPES.j;

      router.push(`/result?mbti=${first}${second}${third}${fourth}`);
    }
  }, [isFinished, router, selectedAnswers]);

  return (
    <Styled.Wrapper
      ground={ground}
      sky={sky}
      charactersWithBricks={charactersWithBricks}
    >
      <Header />
      <QuestionNumber>Q{currentQuestion}</QuestionNumber>
      <Title>{Questions[currentQuestion - 1].question}</Title>
      {Object.entries(Questions[currentQuestion - 1].answer).map(
        ([mbtiType, answer]) => (
          <AnswerButton key={mbtiType} mbtiType={mbtiType as MbtiType}>
            {answer}
          </AnswerButton>
        ),
      )}
    </Styled.Wrapper>
  );
};

export default Question;
