import Quiz from "./components/quizpage/Quiz/Quiz";
import { QuizProvider } from "./components/quizpage/Quiz/QuizContext";
export default function App() {
  return (
    <>
      <QuizProvider>
        <Quiz />
      </QuizProvider>
      {/* <FrenchEditor questionData={questionData}/> */}
      {/* <FillInTheBlanks /> */}
    </>
  );
}
