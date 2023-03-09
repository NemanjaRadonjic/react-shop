import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: null,
  reducers: {
    login: (state, action) => (state = action.payload),
    logout: state => (state = null),
    changeUsername: (state, action) => {
      state.username = action.payload.newUsername;
    },
    changeEmail: (state, action) => {
      state.email = action.payload.newEmail;
    },
    changePassword: (state, action) => {
      state.password = action.payload.newPassword;
    },
    addMoney: (state, action) => {
      state.money += action.payload.amount;
    },
    addToCart: (state, action) => {
      const product = state.cart.find(
        product => product.id === action.payload.productId
      );
      product
        ? product.amount++
        : state.cart.push({ ...action.payload.product, amount: 1 });
    },
  },
});

export const {
  login,
  logout,
  changeUsername,
  changeEmail,
  changePassword,
  addMoney,
  addToCart,
} = currentUserSlice.actions;
export default currentUserSlice.reducer;
