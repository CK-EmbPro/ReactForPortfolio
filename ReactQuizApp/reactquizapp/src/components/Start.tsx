import { useContext } from "react";
import DataContext from "../context/dataContext";


const Start = () => {
  const { startQuiz, showStart } = useContext(DataContext);
  return (
    <div className={`flex justify-center items-center h-screen bg-[#282c34] ${
      showStart ? "flex" : "hidden"
    } `}>
      <div
        className={` flex flex-col items-center justify-center w-[20em] font-bold gap-5 text-white `}
      >
        <h1 className="w-full text-[2em] text-center tracking-[1px]">
          Basic React JS Quiz
        </h1>
        <button
          onClick={startQuiz}
          className="bg-white text-[#282c34] rounded-[.2em] w-[40%] text-[1.2em]"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Start;
