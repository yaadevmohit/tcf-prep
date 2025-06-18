import React, { useRef, useState } from 'react';
import './FrenchEditor.css';
import Timer from './Timer';

interface Text {
  id: number;
  wordCount: number;
  value?: string;
}
const accentChars = ['é', 'è', 'ê', 'ë', 'à', 'â', 'î', 'ï', 'ô', 'ù', 'û', 'ç'];

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

  const question = questionData[currentTask]
  const insertAccent = (char: string) => {
  const textarea = textareaRef.current;
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;

  const currentText = texts[currentTask].value || '';
  const newText = currentText.slice(0, start) + char + currentText.slice(end);

  // Update state
  handleInput(newText);
  // Wait for state update to render, then restore cursor
  setTimeout(() => {
    if (textarea) {
      const pos = start + char.length;
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = pos;
    }
  }, 0);
};

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
        <div className='writing-editor-container'>
          <div className="question-container">
            <h3 className='question-heading'>{`Tâche ${question.id}`}</h3>
            {question.title && <h4 className='question-title'>{question.title}</h4>}
            {question.description.map((desc, idx) => (
              <p className='question-description' key={idx}>{desc}</p>
            ))}
            <span className='question-word-limit'>({question.wordsMin} mots minimum/{question.wordsMax} mots maximum)</span>
          </div>
          <textarea
            ref={textareaRef}
            className="text-area"
            placeholder="commence ici..."
            spellCheck={false}
            onChange={(e) => handleInput(e.target.value)}
            value={texts[currentTask].value || ''}
          ></textarea>
          <div className="word-count">📝 Word count: {texts[currentTask].wordCount}</div>
        </div>
      <div className="buttons-container">
        <button className={currentTask > 0 ? "btn prev" : "hidden-button"} onClick={handlePrev}>Previous</button>
        <button className="btn submit" onClick={disableTextarea}>Submit</button>
        <button className={currentTask < 2 ? "btn next" : "hidden-button"} onClick={handleNext}>Next</button>
      </div>
      </div>
      <div className="writing-side-container">
        <div className="accent-buttons-container">
          <h3 className='accent-buttons-container-heading'>Accent buttons</h3>
          <div className="accent-buttons">
            {accentChars.map((char) => (
              <button
                key={char}
                className="accent-btn"
                onClick={() => insertAccent(char)}
              >
                {char}
              </button>
            ))}
          </div>
        </div>
        <Timer minutes={60} onFinish={disableTextarea}/>
      </div>
    </div>
  );
};

export default FrenchEditor;
