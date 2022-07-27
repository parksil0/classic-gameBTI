import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';

import type { SelectedAnswer } from '@/components/Question/index.types';
import { Questions } from '@/components/Question/index.constants';

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
  isFinished: boolean;
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
  selectedAnswers: SelectedAnswer;
  setSelectedAnswers: Dispatch<SetStateAction<SelectedAnswer>>;
}

export const QuestionContext = createContext<Props>({
  isFinished: false,
  currentQuestion: 1,
  setCurrentQuestion: () => {},
  selectedAnswers: { ...initialSelectedAnswer },
  setSelectedAnswers: () => {},
});

const QuestionProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [isFinished, setIsFinished] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswers, setSelectedAnswers] = useState({
    ...initialSelectedAnswer,
  });

  useEffect(() => {
    const replyCount = Object.values(selectedAnswers).reduce(
      (prev, curr) => prev + curr,
      0,
    );

    if (replyCount === Questions.length) {
      setIsFinished(true);
    }
  }, [selectedAnswers, setIsFinished]);

  const value = useMemo(
    () => ({
      currentQuestion,
      setCurrentQuestion,
      selectedAnswers,
      setSelectedAnswers,
      isFinished,
    }),
    [isFinished, currentQuestion, setCurrentQuestion, selectedAnswers],
  );

  return (
    <QuestionContext.Provider value={value}>
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
