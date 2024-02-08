import { useContext } from "react"
import { DataContext } from "../context/dataContext"

const Start = () => {
  const {startQuiz, showStart} = useContext(DataContext)
  return (
    <div className="flex flex-col items-center justify-center w-[20em] font-bold gap-5 text-white">
      <h1 className="w-full text-[2em] text-center tracking-[1px]">Basic React JS Quiz</h1>
      <button  className="bg-white text-[#282c34] rounded-[.2em] w-[40%] text-[1.2em]">Start Quiz</button>
    </div>
  )
}

export default Start