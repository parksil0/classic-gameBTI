import { useContext } from 'react';

import ground from '@/assets/ground.png';
import sky from '@/assets/sky.png';
import charactersWithBricks from '@/assets/characters-with-bricks.png';
import { QuestionContext } from '@/contexts/QuestionContext';
import { MbtiType } from '@/types/question';
import Header from './Header';
import QuestionNumber from './QuestionNumber';
import Title from './Title';
import * as Styled from './index.styles';
import { Questions } from './index.constants';
import AnswerButton from './AnswerButton';

const Question = () => {
  const { currentQuestion } = useContext(QuestionContext);

  return (
    <Styled.Wrapper
      ground={ground}
      sky={sky}
      charactersWithBricks={charactersWithBricks}
    >
      <Header />
      <QuestionNumber>Q{currentQuestion}</QuestionNumber>
      <Title>
        {Questions[currentQuestion - 1].question.split('\n').map((value) => (
          <span key={value}>
            {value} <br />
          </span>
        ))}
      </Title>
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
