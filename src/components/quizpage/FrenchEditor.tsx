import React, { useRef, useState } from 'react';
import './FrenchEditor.css';
import Timer from './Timer';
import AccentKeyboard from './AccentKeyboard';
import ExpressionEcrite from './ExpressionEcrite';

interface Text {
  id: number;
  wordCount: number;
  value?: string;
}

interface Question {
  id: number;
  title?: string;
  description: string[];
  wordsMin: number;
  wordsMax: number;
}
interface FrenchEditorProps {
  questionData: Question[];
}
const FrenchEditor: React.FC<FrenchEditorProps> = ({questionData}) => {
  const [currentTask, setCurrentTask] = useState(0);
  const [texts, setTexts] = useState<Text[]>(
  Array.from({ length: questionData.length }, (_, index) => ({
    id: index,
    wordCount: 0,
    value: '',
  }))
);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentQuestion = questionData[currentTask]
  const { id, title, description, wordsMin, wordsMax } = currentQuestion;

   const handleInput = (value: string) => {
    updateWordCount(value);
    setTexts((prevTexts) => {
      const updatedTexts = [...prevTexts];
      updatedTexts[currentTask] = {
        ...updatedTexts[currentTask],
        value: value,
      };
      return updatedTexts;
    }
  );
  };
  const updateWordCount = (text: string) => {
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setTexts(prevTexts => {
      const updatedTexts = [...prevTexts];
      updatedTexts[currentTask] = {
        ...updatedTexts[currentTask],
        wordCount: words.length,
      };
      return updatedTexts;
    })
  };
  const disableTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.disabled = true;
      textarea.style.backgroundColor = '#f0f0f0'; // Optional: Change background color to indicate disabled state
    }
  }

  const handleNext = () => {
    setCurrentTask(currentTask + 1);

  }
  const handlePrev = () => {
    setCurrentTask(currentTask - 1);
  }
  return (

    <div className='french-writing-container'>
      <div className="french-tasks-container">
        <ExpressionEcrite {...{id, title, description, wordsMin, wordsMax, textareaRef, handleInput, texts, currentTask}}/>
        <div className="buttons-container">
          <button className={currentTask > 0 ? "btn prev" : "hidden-button"} onClick={handlePrev}>Previous</button>
          <button className="btn submit" onClick={disableTextarea}>Submit</button>
          <button className={currentTask < 2 ? "btn next" : "hidden-button"} onClick={handleNext}>Next</button>
        </div>
      </div>
      <div className="writing-side-container">
        <AccentKeyboard {...{textareaRef, texts, handleInput, currentTask}} />
        <Timer totalTime={60} onFinish={disableTextarea}/>
      </div>
    </div>
  );
};

export default FrenchEditor;
