import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Ready from "./Ready";
import Question from "./Question";

import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  status: "loading",
  index: 3,
};

const reducer = function (CurrentState, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...CurrentState, questions: action.payLoad, status: "ready" };
    case "dataFailed":
      return { ...CurrentState, status: "Error" };
    case "start":
      return { ...CurrentState, status: "active" };
    default:
      throw new Error("Unknown action");
  }
};

const App = function () {
  const [stateVariable, dispatch] = useReducer(reducer, initialState);

  const { status, questions, index } = stateVariable;

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
            <Ready numOfQuestions={questions.length} dispatch={dispatch} />
          )}
          {status === "active" && <Question question={questions.at(index)} />}
        </Main>
      </div>
    </>
  );
};
export default App;
