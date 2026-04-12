import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./Features/accounts/accountSlice";
import clientReducer from "./Features/Customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    client: clientReducer,
  },
});

export default store;
