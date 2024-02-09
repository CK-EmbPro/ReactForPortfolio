import { useContext } from "react";
import DataContext from "../context/dataContext";

const Result = () => {
  const { marks, showResult, quiz, startOver } = useContext(DataContext);
  return (
    <div
      className={`flex justify-center items-center h-screen bg-[#282c34] ${
        showResult ? "flex" : "hidden"
      }`}
    >
      <div className={` text-white justify-center items-center flex flex-col w-[35%] h-[35%] rounded-md ${marks >= (quiz.length * 5) /2 ? "bg-green-700": "bg-red-500"} `}>
        <p className=" text-[2em]">
          {marks > (quiz.length *5) /2 ? "Awesome":" Oops"} !
        </p>
        <p className=" text-[2em]">Your score is {marks} out of {quiz.length *5}</p>
        
        <button
          onClick={startOver}
          className="bg-white text-[#282c34] rounded-[.2em] w-[30%] p-1 text-[1.3em] mt-4"
        >
          Start over
        </button>
      </div>
    </div>
  );
};

export default Result;
