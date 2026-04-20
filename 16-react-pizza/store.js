import { configureStore } from '@reduxjs/toolkit';
import userSlice from './src/Features/User/userSlice';
import cartReducer from './src/Features/Cart/CartSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartReducer,
  },
});

export default store;
