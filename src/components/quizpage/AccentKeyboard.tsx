import accentChars from "../../assets/data/writing/accentChars";

interface AccentKeyboardProps {
    textareaRef: React.RefObject<HTMLTextAreaElement>;
    texts: { value?: string }[];
    currentTask: number;
    handleInput: (value: string) => void;
}
const AccentKeyboard: React.FC<AccentKeyboardProps> = ({textareaRef, texts, currentTask,handleInput}) => {

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
  return (
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
  );
}
export default AccentKeyboard;