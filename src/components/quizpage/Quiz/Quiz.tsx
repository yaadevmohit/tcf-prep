import Question from './Question';
import Timer from '../Timer';
import questionData from '../../../assets/data/audio/test_6';
import styles from './Quiz.module.css';

type Option = {
  label: string;
  text: string;
  isCorrect: boolean;
};

type QuestionType = {
  id: number;
  imgSrc?: string;
  audioSrc: string;
  contextText?: string;
  question: string;
  points: number;
  options: Option[];
};

const questions: QuestionType[] = Array.from(questionData);

const Quiz: React.FC = () => {


  return (
    <div className={styles.quizContainer}>
      {questions.map(question => <Question
        key={question.id}
        number={question.id}
        question={question.question}
        contextText={question.contextText}
        audioUrl={question.audioSrc}
        options={question.options}
        imgUrl={question.imgSrc}
        points={question.points}
      />)}
    <div className={styles.timerContainer}>
      <Timer totalTime={3600} onFinish={() => alert('Time is up!')} />
    </div>
    </div>
  );
};

export default Quiz;
