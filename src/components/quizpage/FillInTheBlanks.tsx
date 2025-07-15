import { frenchLetterExercise } from "../../assets/data/writing/fillBlanks_1";

const FillInTheBlanks = () => {


  return (
    <div className="p-6 max-w-xl mx-auto font-serif">
      <h2 className="text-xl font-bold mb-4">{frenchLetterExercise.title}</h2>
      <div className="whitespace-pre-line text-lg leading-7 mb-6">
      </div>
      <button
        className=""
      >
        Soumettre
      </button>
    </div>
  );
};

export default FillInTheBlanks;
