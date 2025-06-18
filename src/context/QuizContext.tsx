// src/context/QuizContext.tsx
import React, { createContext, useReducer } from 'react';

export type Option = 'A' | 'B' | 'C' | 'D';

export interface Question {
  id: number;
  text: string;
  options: Record<Option, string>;
  correctAnswer: Option;
}

interface QuizState {
  currentQuestion: number;
  answers: Record<number, Option>;
  submitted: boolean;
  questions: Question[];
}

export type Action =
  | { type: 'SELECT_OPTION'; questionId: number; option: Option }
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'SUBMIT' };

const initialQuestions: Question[] = [
  {
    id: 1,
    text: 'What is the capital of France?',
    options: { A: 'Paris', B: 'London', C: 'Berlin', D: 'Madrid' },
    correctAnswer: 'A',
  },
  {
    id: 2,
    text: '2 + 2 equals?',
    options: { A: '3', B: '4', C: '5', D: '6' },
    correctAnswer: 'B',
  },
];

const initialState: QuizState = {
  currentQuestion: 0,
  answers: {},
  submitted: false,
  questions: initialQuestions,
};

function quizReducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case 'SELECT_OPTION':
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.questionId]: action.option,
        },
      };
    case 'NEXT':
      return {
        ...state,
        currentQuestion: Math.min(state.currentQuestion + 1, state.questions.length - 1),
      };
    case 'PREV':
      return {
        ...state,
        currentQuestion: Math.max(state.currentQuestion - 1, 0),
      };
    case 'SUBMIT':
      return { ...state, submitted: true };
    default:
      return state;
  }
}

export const QuizContext = createContext<{
  state: QuizState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
