import { createContext, useEffect, useState } from "react";

type QuestionProps = {
  id: string;
  question: string;
  options: string[];
  answer: string;
};

type DataProviderProps = {
  children: React.ReactNode;
};

type DataContextProps = {
  quiz: QuestionProps[];
  question: QuestionProps;
  questionIndex: number;
  selectedAnswer: string;
  correctAnswer: string;
  marks: number;
  showStart: boolean;
  showQuiz: boolean;
  showResult: boolean;
  startQuiz: () => void;
  startOver: () => void;
  checkAnswer: (
    event: React.MouseEvent<HTMLButtonElement>,
    selected: string
  ) => void;
  showTheResult: () => void;
  nextQuestion: () => void;
};

const DataContext = createContext<DataContextProps>({
  quiz: [],
  question: {
    id: "",
    question: "",
    options: [],
    answer: "",
  },
  questionIndex: 0,
  selectedAnswer: "",
  correctAnswer: "",
  marks: 0,
  showStart: true,
  showQuiz: false,
  showResult: false,
  startQuiz: () => {},
  startOver: () => {},
  checkAnswer: (
    event: React.MouseEvent<HTMLButtonElement>,
    selected: string
  ) => {},
  showTheResult: () => {},
  nextQuestion: () => {},
});

export const DataProvider = ({ children }: DataProviderProps) => {
  const [quiz, setQuiz] = useState<QuestionProps[]>([]);
  const [question, setQuestion] = useState<QuestionProps>({
    id: "",
    question: "",
    options: [],
    answer: "",
  });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [marks, setMarks] = useState(0);
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  //Load JSON Data
  useEffect(() => {
    fetch("quiz.json")
    .then((res)=>res.json())
    .then(data => setQuiz(data))

    
    
    
  }, []);

  // setting  a question according the current q-index
  useEffect(() => {
    if (quiz.length > questionIndex) {
      setQuestion(quiz[questionIndex]);
    }
  }, [quiz, questionIndex]);



  // start a quiz for some displays
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  const checkAnswer = (
    event: React.MouseEvent<HTMLButtonElement>,
    selected: string
  ) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);
      const buttonEvent = event.target as HTMLButtonElement;

      if (selected === question.answer) {
        buttonEvent.classList.add("bg-green-500");
        setMarks(marks + 5);
      } else {
        buttonEvent.classList.add("bg-red-500");
      }
    }
  };

  const nextQuestion = () => {
    setCorrectAnswer("");
    setSelectedAnswer("");

    const wrongBtn = document.querySelector("button.bg-red-500");
    wrongBtn?.classList.remove("bg-red-500");

    const rightBtn = document.querySelector("button.bg-green-500");
    rightBtn?.classList.remove("bg-green-500");

    setQuestionIndex(questionIndex + 1);
  };

  const showTheResult = () => {
    setShowResult(true);
    setShowQuiz(false);
    setShowStart(false);
  };

  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer("");
    setSelectedAnswer("");
    setMarks(0);
    setQuestionIndex(0);

    const wrongBtn = document.querySelector("button.bg-red-500");
    wrongBtn?.classList.remove("bg-red-500");

    const rightBtn = document.querySelector("button.bg-green-500");
    rightBtn?.classList.remove("bg-green-500");
  };

  return (
    <DataContext.Provider
      value={{
        quiz,
        question,
        questionIndex,
        selectedAnswer,
        correctAnswer,
        marks,
        showStart,
        showQuiz,
        showResult,
        startQuiz,
        startOver,
        checkAnswer,
        showTheResult,
        nextQuestion,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
