// src/context/useQuiz.ts
import { useContext } from 'react';
import { QuizContext } from './QuizContext';

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error('useQuiz must be used inside <QuizProvider>');
  return context;
};
