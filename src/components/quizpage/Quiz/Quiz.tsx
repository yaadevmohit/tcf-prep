import React, { useState } from 'react';
import Question from './Question';
import Timer from '../Timer';
import questionData from '../../../assets/data/audio/test_2';
import styles from './Quiz.module.css';

type QuestionType = {
  id: number;
  audioSrc: string;
  question: string;
  points: number;
  contextText?: string;
  imgSrc?: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  }
  correctOption: string;
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
