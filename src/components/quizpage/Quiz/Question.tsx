import React, { useState, useRef} from 'react';
import styles from './Question.module.css';
import { useQuiz } from './QuizContext';
import Keywords from './Keywords';

type Option = {
  label: string;
  text: string;
  isCorrect: boolean;
};

type QuestionProps = {
  number: number;
  question?: string;
  contextText?: string;
  options: Option[];
  audioUrl?: string;
  imgUrl?: string;
  points: number;
  englishTranslation?: string;
  keywords?: { word: string; translation: string }[];
};

const Question: React.FC<QuestionProps> = ({ number, question, contextText, options, audioUrl, imgUrl, points, englishTranslation, keywords}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const { setAnswer } = useQuiz();
  const [showHint, setShowHint] = useState(!audioUrl);
  const [showTranslation, setShowTranslation] = useState(false);
  const [showKeywords, setShowKeywords] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const handleClick = (index: number) => {
    setSelected(index);
    const isCorrect = options[index].isCorrect;
    const pointsEarned = isCorrect ? points : 0;
    setAnswer(number, options[index].text, isCorrect, pointsEarned);
    setShowFeedback(true);
    pauseAudio();
  };
  const parseTextWithStyles = (text: string) => {
  return text
    .split("§") // Special marker for line breaks
    .map((line, lineIndex) => (
      <React.Fragment key={lineIndex}>
        {
          line.split(/(\*\*.*?\*\*|\^\^.*?\^\^)/g).map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={i}>{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith("^^") && part.endsWith("^^")) {
              return (
                <small key={i} style={{ float: "right", fontSize: "0.55em" }}>
                  {part.slice(2, -2)}
                </small>
              );
            }
            return <span key={i}>{part}</span>;
          })
        }
        {/* Add line break except after the last line */}
        {lineIndex < text.split("§").length - 1 && <br />}
      </React.Fragment>
    ));
  }
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }
  return (
    <div className={styles.questionElementContainer}>
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
            <blockquote className={styles.contextText}>
              {parseTextWithStyles(contextText)}
            </blockquote>
          )
          )}
      {question && 
        <div className={styles.questionContainer}>
          <span className={styles.questionNumber}>{number}</span>
          <span className={styles.question}>{question}</span>
        </div>
      }

      <div className={styles.optionsContainer}>
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
      {englishTranslation && (
        <div className={styles.translationToggleWrapper}>
          <button
        onClick={() => setShowTranslation(prev => !prev)}
        className={styles.translationToggleBtn}
          >
        {showTranslation ? "Hide Translation" : "Show Translation"}
          </button>
          {showTranslation && (
        <div className={styles.translationText}>
          {englishTranslation}
        </div>
          )}
        </div>
      )}

      {keywords && (
        <div className={styles.translationToggleWrapper}>
          <button
            onClick={() => setShowKeywords(prev => !prev)}
            className={styles.translationToggleBtn}
          >
            {showKeywords ? "Hide keywords" : "Show keywords"}
          </button>

          {showKeywords && <Keywords data={keywords} />}
        </div>
        )}
      {showFeedback && (
        <div className={styles.feedback}>
          {options[selected!].isCorrect ? 'Correcte' : 'Incorrecte'}
        </div>
      )}
    </div>
  );
};

export default Question;
