// src/components/QuestionCard.tsx
import { useQuiz } from "../../../context/useQuiz";

export default function QuestionCard() {
  const { state, dispatch } = useQuiz();
  const question = state.questions[state.currentQuestion];
  const selected = state.answers[question.id];

  return (
    <div className="p-6 border border-gray-300 rounded-xl shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <div className="flex flex-col gap-3">
        {(['A', 'B', 'C', 'D'] as const).map((opt) => (
          <button
            key={opt}
            className={`py-2 px-4 rounded-md text-left border transition-all duration-150 ${
              selected === opt
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() =>
              dispatch({ type: 'SELECT_OPTION', questionId: question.id, option: opt })
            }
          >
            <span className="font-bold mr-2">{opt}:</span>
            {question.options[opt]}
          </button>
        ))}
      </div>
    </div>
  );
}
