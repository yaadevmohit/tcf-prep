interface ExpressionEcriteProps {
    id: number;
    title?: string;
    description: string[];
    wordsMin: number;
    wordsMax: number;
    handleInput: (value: string) => void;
    textareaRef: React.RefObject<HTMLTextAreaElement>;
    texts: { value?: string; wordCount: number }[];
    currentTask: number;

}
const ExpressionEcrite: React.FC<ExpressionEcriteProps> = ({id, title, description, wordsMin, wordsMax ,handleInput, textareaRef, texts, currentTask}) => {
    return (
        <div className='writing-editor-container'>
          <div className="question-container">
            <h3 className='question-heading'>{`Tâche ${id}`}</h3>
            {title && <h4 className='question-title'>{title}</h4>}
            {description.map((desc, idx) => (
              <p className='question-description' key={idx}>{desc}</p>
            ))}
            <span className='question-word-limit'>({wordsMin} mots minimum/{wordsMax} mots maximum)</span>
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
    )
}

export default ExpressionEcrite;