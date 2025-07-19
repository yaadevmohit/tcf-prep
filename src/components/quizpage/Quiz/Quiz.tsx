import Question from './Question';
import { useQuiz } from './QuizContext';
import Timer from '../Timer';
import questionData from '../../../assets/data/audio/test_7';
import styles from './Quiz.module.css';
import ScoreCard from './ScoreCard';

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


const Quiz: React.FC = () => {
  const {answers} = useQuiz();

  const questions: QuestionType[] = Array.from(questionData);
  const totalScore = questions.reduce((acc, q) => acc + q.points, 0);
  const currentScore = Object.values(answers).reduce((acc, answer) => acc + (answer.isCorrect ? answer.pointsEarned : 0), 0);
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
        <Timer totalTime={35*60} onFinish={() => alert('Time is up!')} />
      </div>
      <div className={styles.scoreCardContainer}>
          <ScoreCard currentScore={currentScore} totalScore={totalScore} />
      </div>
    </div>
  );
};

export default Quiz;
