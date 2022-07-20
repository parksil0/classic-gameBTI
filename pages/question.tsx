import Question from '@/components/Question';
import QuestionProvider from '@/contexts/QuestionContext';

const QuestionPage = () => {
  return (
    <QuestionProvider>
      <Question />
    </QuestionProvider>
  );
};

export default QuestionPage;
