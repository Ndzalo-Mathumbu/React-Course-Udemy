import { createSlice } from "@reduxjs/toolkit";
import reducer from "../accounts/accountSlice";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAT: "",
};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    createClient: {
      prepare(fullName, nationalID) {
        return {
          payload: {
            fullName,
            nationalID,
            createdAT: new Date().toISOString(),
          },
        };
      },

      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createdAT = action.payload.createdAT;
      },
    },
    UpdateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createClient } = clientSlice.actions;
export default clientSlice.reducer;

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
 */
