// QuizContext.tsx
import React, { createContext, useState, useContext } from "react";

type AnswerMap = {
  [questionId: number]: {
    selected: string;
    isCorrect: boolean;
    pointsEarned: number;
  };
};

type QuizContextType = {
  answers: AnswerMap;
  setAnswer: (
    questionId: number,
    selected: string,
    isCorrect: boolean,
    pointsEarned: number
  ) => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [answers, setAnswers] = useState<AnswerMap>({});

  const setAnswer = (questionId: number, selected: string, isCorrect: boolean, pointsEarned: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { selected, isCorrect, pointsEarned }
    }));
  };

  return (
    <QuizContext.Provider value={{ answers, setAnswer }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within a QuizProvider");
  return context;
};
