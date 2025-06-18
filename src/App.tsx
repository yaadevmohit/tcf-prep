import { questionData } from "./assets/data/writing/test_1";
import FrenchEditor from "./components/quizpage/FrenchEditor";

export default function App() {
  return (
    <>
      <FrenchEditor questionData={questionData}/>
    </>
  );
}
