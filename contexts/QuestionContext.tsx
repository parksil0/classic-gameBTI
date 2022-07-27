import {
  createContext,
  useMemo,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';

import type { SelectedAnswer } from '@/components/Question/index.types';

const initialSelectedAnswer: SelectedAnswer = {
  i: 0,
  e: 0,
  s: 0,
  n: 0,
  t: 0,
  f: 0,
  j: 0,
  p: 0,
} as const;

interface Props {
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  selectedAnswers: SelectedAnswer;
  setSelectedAnswers: Dispatch<SetStateAction<SelectedAnswer>>;
}

export const QuestionContext = createContext<Props>({
  currentQuestion: 1,
  setCurrentQuestion: () => {},
  selectedAnswers: { ...initialSelectedAnswer },
  setSelectedAnswers: () => {},
});

const QuestionProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({
    ...initialSelectedAnswer,
  });

  const value = useMemo(
    () => ({
      currentQuestion,
      setCurrentQuestion,
      selectedAnswers,
      setSelectedAnswers,
    }),
    [currentQuestion, setCurrentQuestion, selectedAnswers],
  );

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
