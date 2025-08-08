import Question from './Question';
import { useQuiz } from './QuizContext';
import Timer from '../Timer';
import  {metaData } from '../../../assets/data/reading/test_1/test_1';
import styles from './Quiz.module.css';
import ScoreCard from './ScoreCard';
import questionsData from '../../../assets/data/reading/test_1/test_1';
type Option = {
  label: string;
  text: string;
  isCorrect: boolean;
};

type QuestionType = {
  id: number;
  imgSrc?: string;
  audioSrc?: string;
  contextText?: string;
  question: string;
  points: number;
  options: Option[];
  englishTranslation?: string;
  keywords?: { word: string; translation: string }[];
};


const Quiz: React.FC = () => {
  const {answers} = useQuiz();

  const questions: QuestionType[] = Array.from(questionsData);
  const totalScore = questions.reduce((acc, q) => acc + q.points, 0);
  const currentScore = Object.values(answers).reduce((acc, answer) => acc + (answer.isCorrect ? answer.pointsEarned : 0), 0);
  
  const questionElements = questions.map(question => <Question
        key={question.id}
        number={question.id}
        question={question.question}
        contextText={question.contextText}
        audioUrl={question.audioSrc}
        options={question.options}
        imgUrl={question.imgSrc}
        points={question.points}
        englishTranslation={question.englishTranslation}
        keywords={question.keywords}
      />)
  return (
    <div className={styles.quizContainer}>
      <h1 className={styles.quizTitle}>{metaData.title}</h1>
      {questionElements}
      <div className={styles.timerContainer}>
        <Timer totalTime={metaData.duration*60} onFinish={() => alert('Time is up!')} />
      </div>
      <div className={styles.scoreCardContainer}>
          <ScoreCard currentScore={currentScore} totalScore={totalScore} />
      </div>
    </div>
  );
};

export default Quiz;
