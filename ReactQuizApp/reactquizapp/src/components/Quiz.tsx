import { useContext } from "react";
import DataContext from "../context/dataContext";

const questions = [
  "what is your names",
  "what is your names",
  "what is your names hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
  "what is your names",
];

const Quiz = () => {
  const {
    showQuiz,
    question,
    quiz,
    checkAnswer,
    correctAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
  } = useContext(DataContext);

  return (
    <div
      className={`flex justify-center items-center h-screen bg-[#282c34] ${
        showQuiz ? "flex" : "hidden"
      }`}
    >
      <div className="bg-[#3d3d3d] w-[50%] h-auto border border-[#646464] rounded-md p-4 text-white flex flex-col  gap-[1.5em]">
        <div className=" flex justify-between">
          <p className="text-xl w-[85%]">{question.question}</p>
          <p className="text-xl text-green-400">
            {quiz.indexOf(question) + 1} / {quiz.length}
          </p>
        </div>
        <div className=" flex flex-col gap-[1.1em]">
          {question?.options.map((option, index) => (
            <button
              key={index}
              className={`bg-[#1f2228] text-start min-h-[2.6em] h-auto px-4 py-[.4em] rounded-md break-all ${
                correctAnswer === option ? "bg-green-700" : ""
              }`}
              onClick={(event) => checkAnswer(event, option)}
            >
              {option}
            </button>
          ))}
        </div>
        {(questionIndex + 1) !== quiz.length ? 
          <button
            disabled={!selectedAnswer}
            className={`font-bold bg-blue-600 py-[.5em] rounded-md ${
              !selectedAnswer ? "opacity-[0.7]" : "opacity-1"
            }`}
            onClick={nextQuestion}
          >
            Next Question
          </button>
        : 
          <button
            disabled={!selectedAnswer}
            onClick = {showTheResult}
            className={` font-bold bg-blue-600 py-[.5em] rounded-md ${
              !selectedAnswer ? "opacity-[0.7]" : "opacity-1"
            }`}
          >
            Show Result
          </button>
        }
      </div>
    </div>
  );
};

export default Quiz;
