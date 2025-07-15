import React, { useState } from 'react';
import styles from './Question.module.css';

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

const Question: React.FC<QuestionProps> = ({ number, question, contextText, options, audioUrl, imgUrl}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleClick = (index: number) => {
    setSelected(index);
    setShowFeedback(true);
  };

  return (
    <div className={styles.container}>
      {imgUrl && (
        <img src={imgUrl} alt="Question visual" className={styles.image}/>
      )}
      {audioUrl && (
        <audio controls className={styles.audio}>
          <source src={audioUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      {contextText 
        &&
        <blockquote className={styles.contextText}>{contextText}</blockquote>
      }
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
