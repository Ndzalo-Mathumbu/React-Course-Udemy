const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanReason: "",
};

const accountReducer = function (state = initialStateAccount, action) {
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

export const deposit = function (amount) {
  return { type: "account/deposit", payload: amount };
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
