import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Ready from "./Ready";
import Question from "./Question";
import NextBtn from "./NextBtn";
import { useEffect, useReducer } from "react";
import ProgressBar from "./ProgressBar";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  remainingSec: null,
};

const secondsPerQuestion = 15;
const reducer = function (currentState, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...currentState, questions: action.payLoad, status: "ready" };
    case "dataFailed":
      return { ...currentState, status: "Error" };
    case "start":
      return {
        ...currentState,
        status: "active",
        remainingSec: currentState.questions.length * secondsPerQuestion,
      };
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
    case "finish":
      return {
        ...currentState,
        status: (currentState.status = "finish"),
        highscore:
          currentState.points > currentState.highscore
            ? currentState.points
            : currentState.highscore,
      };
    case "restart":
      return {
        ...currentState,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
        remainingSec: 12,
      };
    case "timer":
      return {
        ...currentState,
        remainingSec: currentState.remainingSec - 1,
        status:
          currentState.remainingSec === 0 ? "finish" : currentState.status,
      };
    default:
      throw new Error("Unknown action");
  }
};

const App = function () {
  const [stateVariable, dispatch] = useReducer(reducer, initialState);

  const { status, questions, index, answer, points, highscore, remainingSec } =
    stateVariable;
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
              <footer>
                <Timer remainingSec={remainingSec} dispatch={dispatch} />
                <NextBtn
                  dispatch={dispatch}
                  answer={answer}
                  numOfQuestions={numOfQuestions}
                  index={index}
                  status={status}
                />
              </footer>
            </>
          )}
          {status === "finish" && (
            <FinishScreen
              totalPoints={totalPoints}
              points={points}
              highscore={highscore}
              dispatch={dispatch}
            />
          )}
        </Main>
      </div>
    </>
  );
};
export default App;

/* 
import "./styles.css";
import { useReducer } from "react";


INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state


// Challenge 👇

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  disabled: true,
};

const reducer = function (curState, action) {
  switch (action.type) {
    case "open-account":
      return { ...curState, balance: 500, disabled: false, isActive: true };
    case "deposit":
      return { ...curState, balance: curState.balance + 150 };
    case "withdraw":
      return { ...curState, balance: curState.balance - 50 };
    case "requestLoan":
      return {
        ...curState,
        balance: curState.loan > 0 ? curState.balance : curState.balance + 5000,
        loan: curState.loan > 0 ? curState.loan : curState.loan + 5000,
      };
    case "payLoan":
      return {
        ...curState,
        balance: curState.balance - 5000,
        loan: curState.loan - 5000,
      };
    case "close-account":
      return { ...curState, balance: 0, loan: 0, disabled: true };
    default:
      return curState;
  }
};

export default function App() {
  const [stateVariable, dispatch] = useReducer(reducer, initialState);
  const { balance, loan, disabled } = stateVariable;
  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance}</p>
      <p>Loan: {loan}</p>

      <p>
        <button
          onClick={() => dispatch({ type: "open-account" })}
          disabled={false}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "deposit" })}
          disabled={disabled}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "withdraw" })}
          disabled={disabled}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "requestLoan" })}
          disabled={disabled}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={disabled}
        >
          Pay loan
        </button>
      </p>
      <p>
        {loan > 1 || (
          <button
            onClick={() => dispatch({ type: "close-account" })}
            disabled={disabled}
          >
            Close account
          </button>
        )}
      </p>
    </div>
  );
}

*/
