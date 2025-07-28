import { useState, useRef } from 'react';
import styles from './Question.module.css';
import { useQuiz } from './QuizContext';

type Option = {
  label: string;
  text: string;
  isCorrect: boolean;
};

type QuestionProps = {
  number: number;
  question: string;
  contextText?: string;
  options: Option[];
  audioUrl?: string;
  imgUrl?: string;
  points: number;
};

const Question: React.FC<QuestionProps> = ({ number, question, contextText, options, audioUrl, imgUrl, points}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const { setAnswer } = useQuiz();
  const [showHint, setShowHint] = useState(!audioUrl);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const handleClick = (index: number) => {
    setSelected(index);
    const isCorrect = options[index].isCorrect;
    const pointsEarned = isCorrect ? points : 0;
    setAnswer(number, options[index].text, isCorrect, pointsEarned);
    setShowFeedback(true);
    pauseAudio();
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }
  return (
    <div className={styles.container}>
      {imgUrl && (
        <img src={imgUrl} alt="Question visual" className={styles.image}/>
      )}
      {audioUrl && (
        <audio ref={audioRef} controls className={styles.audio}>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      {audioUrl && contextText && !showHint ? (
        <button onClick={() => setShowHint(true)} className={styles.hintBtn}>
          Afficher la transcription
        </button>
      ) : (
        contextText && (
          <blockquote className={styles.contextText}>{contextText}</blockquote>
        )
      )}
      <div className={styles.questionLine}>
        <span className={styles.questionNumber}>{number}</span>
        {<span className={styles.question}>{question}</span>}
      </div>

      <div className={styles.options}>
        {options.map((option, idx) => {
          const isSelected = selected === idx;
          const isCorrect = option.isCorrect;
          const feedbackClass = showFeedback
            ? isCorrect
              ? styles.correct
              : isSelected
              ? styles.incorrect
              : ''
            : '';

          return (
            <button
              key={idx}
              onClick={() => handleClick(idx)}
              className={`${styles.option} ${feedbackClass}`}
              disabled={showFeedback}
            >
              <span className={styles.optionLabel}>{option.label}</span>
              {option.text} 
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className={styles.feedback}>
          {options[selected!].isCorrect ? 'Correcte' : 'Incorrecte'}
        </div>
      )}
    </div>
  );
};

export default Question;
