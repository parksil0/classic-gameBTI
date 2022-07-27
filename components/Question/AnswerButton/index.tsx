import { useContext, type PropsWithChildren } from 'react';

import Text from '@/components/common/Text';
import { QuestionContext } from '@/contexts/QuestionContext';
import { type MbtiType } from '../index.types';
import { Questions } from '../index.constants';
import * as Styled from './index.styles';

interface Props {
  mbtiType: MbtiType;
}

const AnswerButton = ({ mbtiType, children }: PropsWithChildren<Props>) => {
  const { currentQuestion, setCurrentQuestion, setSelectedAnswers } =
    useContext(QuestionContext);

  const handleClickAnswer = () => {
    setSelectedAnswers((prev) => {
      const newSelectedAnswers = { ...prev };

      newSelectedAnswers[mbtiType] += 1;

      return newSelectedAnswers;
    });

    if (currentQuestion === Questions.length) {
      // TODO : api 통신 이후 결과 페이지로 이동
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  return (
    <Styled.Wrapper onClick={handleClickAnswer}>
      <Text as="p" color="black" variant="heading">
        {children}
      </Text>
    </Styled.Wrapper>
  );
};

export default AnswerButton;
