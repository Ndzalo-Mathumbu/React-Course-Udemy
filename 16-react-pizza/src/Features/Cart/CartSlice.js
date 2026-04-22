import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [
    /* {
      pizzaId: 12,
      name: 'My Good Pizza',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: 'Vegetale',
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: 'Spinach and Mushroom',
      quantity: 5,
      unitPrice: 15,
      totalPrice: 15,
    },
    {
      pizzaId: 887,
      name: 'Ndzalo pizza',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    }, */
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = new item
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = id of the item
      state.cart = state.cart.filter(
        (pizza) => pizza.pizzaId !== action.payload,
      );
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);

      if (!item) return;

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((pizza) => pizza.pizzaId === action.payload);

      if (!item) return;

      item.quantity--;

      if (item.quantity <= 0) {
        state.cart = state.cart.filter(
          (pizza) => pizza.pizzaId !== action.payload,
        );
        return;
      }

      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getPizzaQuantity = (state) => {
  const cart = state.cart.cart || [];
  return cart.reduce((accum, item) => accum + item.quantity, 0);
};

export const getPizzaPrices = (state) => {
  const cart = state.cart.cart || [];
  return cart.reduce((accum, item) => accum + item.totalPrice, 0);
};

export const getCurrentQuantityByid = (id) => (state) =>
  state.cart.cart?.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getCart = (state) => state.cart.cart;
