import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanReason: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },
    requestLoan: {
      prepare(amount, reason) {
        return {
          payload: { amount, reason },
        };
      },

      reducer(state, action) {
        if (state.loan > 0) return;
        state.loan = state.loan + action.payload.amount;
        state.loanReason = action.payload.reason;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoanBack(state, action) {
      /*  return initialState; */
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanReason = "";
    },
    converting(state) {
      state.balance = true;
    },
  },
});

console.log(accountSlice);

export const deposit = function (balanceAmount, currency) {
  if (currency === "USD")
    return { type: "account/deposit", payload: balanceAmount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/converting", payload: true });
    //API call
    try {
      const response = await fetch(
        `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`,
      );
      const data = await response.json();
      const { amount } = data;
      const addAmount = amount + balanceAmount - 1;
      const convertedValue = data.rates.USD;
      // return action
      dispatch({ type: "account/deposit", payload: convertedValue });
    } catch (err) {
      console.log(err);
    }
  };
};

export const { withdraw, requestLoan, payLoanBack } = accountSlice.actions;
export default accountSlice.reducer;

/* const accountReducer = function (state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };

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
    case "account/converting":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const deposit = function (balanceAmount, currency) {
  if (currency === "USD")
    return { type: "account/deposit", payload: balanceAmount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/converting", payload: true });
    //API call
    try {
      const response = await fetch(
        `https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`,
      );
      const data = await response.json();
      const { amount } = data;
      const addAmount = amount + balanceAmount - 1;
      const convertedValue = data.rates.USD;
      // return action
      dispatch({ type: "account/deposit", payload: convertedValue });
    } catch (err) {
      console.log(err);
    }
  };
};

export const withdraw = function (amount) {
  return { type: "account/withdraw", payload: amount };
};

export const requestLoan = function (loanAmount, reasonForLoan = "No Reason") {
  return {
    type: "account/requestLoan",
    payload: { amount: loanAmount, reason: reasonForLoan },
  };
};

export const payLoanBack = function () {
  return { type: "account/payLoanBack" };
};

export default accountReducer;
 */
