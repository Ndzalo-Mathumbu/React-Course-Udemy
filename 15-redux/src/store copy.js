import { applyMiddleware, combineReducers, createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./Features/accounts/accountSlice";
import clientReducer from "./Features/Customers/customerSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  account: accountReducer,
  client: clientReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

/* const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanReason: "",
}; */

/* const initialStateClient = {
  fullName: "",
  nationalID: "",
  createdAT: "",
}; */

/* const accountReducer = function (state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanReason: action.payload.reason,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoanBack":
      return {
        ...state,
        loan: 0,
        loanReason: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};
 */
/* const clientReducer = function (state = initialStateClient, action) {
  switch (action.type) {
    case "client/CreateClient":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAT: action.payload.createdAT,
      };
    case "client/UpdateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}; */

/* store.dispatch({ type: "account/deposit", payload: 500 });


store.dispatch({ type: "account/withdraw", payload: 200 });
console.log(store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 2000, reason: "Buy Shoes" },
});
console.log(store.getState());

store.dispatch({ type: "account/payLoanBack" });
console.log(store.getState());
 */

// action creators
/* const deposit = function (amount) {
  return { type: "account/deposit", payload: amount };
};

const withdraw = function (amount) {
  return { type: "account/withdraw", payload: amount };
};

const requestLoan = function (loanAmount, reasonForLoan = "No Reason") {
  return {
    type: "account/requestLoan",
    payload: { amount: loanAmount, reason: reasonForLoan },
  };
};

const payLoanBack = function () {
  return { type: "account/payLoanBack" };
};

store.dispatch(deposit(700));
store.dispatch(withdraw(300));
store.dispatch(requestLoan(1000)); */
// store.dispatch(payLoanBack());

// console.log(store.getState());

/* const createCustomer = function (
  fullName = "John Doe",
  nationalID = "No input",
) {
  return {
    type: "client/CreateClient",
    payload: { fullName, nationalID, createdAT: new Date().toISOString() },
  };
};

const updateName = function (newName) {
  return { type: "client/UpdateName", payload: newName };
}; */

// store.dispatch(createCustomer());
// store.dispatch(updateName("Ndzalo NK"));

// console.log(store.getState());

export default store;
