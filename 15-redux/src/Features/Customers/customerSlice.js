const initialStateClient = {
  fullName: "",
  nationalID: "",
  createdAT: "",
};

const clientReducer = function (state = initialStateClient, action) {
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
};

export const createCustomer = function (fullName, nationalID) {
  return {
    type: "client/CreateClient",
    payload: { fullName, nationalID, createdAT: new Date().toISOString() },
  };
};

export const updateName = function (newName) {
  return { type: "client/UpdateName", payload: newName };
};

export default clientReducer;
