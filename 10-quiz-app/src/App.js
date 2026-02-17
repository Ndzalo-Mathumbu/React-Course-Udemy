import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  status: "loading",
};

const reducer = function (CurrentState, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...CurrentState, questions: action.payLoad, status: "ready" };
    case "dataFailed":
      return { ...CurrentState, status: "Error" };
    default:
      throw new Error("Unknown action");
  }
};

const App = function () {
  const [stateVariable, dispatch] = useReducer(reducer, initialState);

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
      </div>
      <Main>
        <p>1/15</p>
        <p>Question</p>
      </Main>
    </>
  );
};
export default App;
