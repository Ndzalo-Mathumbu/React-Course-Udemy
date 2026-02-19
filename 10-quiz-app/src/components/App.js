import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Ready from "./Ready";
import Question from "./Question";
import NextBtn from "./NextBtn";
import { useEffect, useReducer } from "react";
import ProgressBar from "./ProgressBar";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

const reducer = function (currentState, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...currentState, questions: action.payLoad, status: "ready" };
    case "dataFailed":
      return { ...currentState, status: "Error" };
    case "start":
      return { ...currentState, status: "active" };
    case "newAnswer":
      const question = currentState?.questions[currentState.index];
      return {
        ...currentState,
        answer: action.payLoad,
        points:
          action.payLoad === question.correctOption
            ? currentState?.points + question.points
            : currentState?.points,
      };
    case "nextQuestion":
      return { ...currentState, index: currentState.index + 1, answer: null };
    default:
      throw new Error("Unknown action");
  }
};

const App = function () {
  const [stateVariable, dispatch] = useReducer(reducer, initialState);

  const { status, questions, index, answer, points } = stateVariable;
  const numOfQuestions = questions.length;
  const totalPoints = questions.reduce(
    (acc, currValue) => acc + currValue.points,
    0,
  );
  /* console.log(totalPoints); */
  useEffect(() => {
    const getQuestions = async function () {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payLoad: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    };
    getQuestions();
  }, []);

  return (
    <>
      <div className="app">
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "Error" && <Error />}
          {status === "ready" && (
            <Ready numOfQuestions={numOfQuestions} dispatch={dispatch} />
          )}
          {status === "active" && (
            <>
              <ProgressBar
                numOfQuestions={numOfQuestions}
                index={index}
                points={points}
                totalPoints={totalPoints}
                answer={answer}
              />
              <Question
                question={questions.at(index)}
                dispatch={dispatch}
                answer={answer}
              />

              <NextBtn dispatch={dispatch} answer={answer} />
            </>
          )}
        </Main>
      </div>
    </>
  );
};
export default App;
