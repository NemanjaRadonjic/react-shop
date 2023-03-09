import { createSlice } from "@reduxjs/toolkit";
import localStorage from "@helpers/localStorage";

const updateLocalStorage = (users, currentUser) => {
  localStorage.set("users", users);
  localStorage.set("currentUser", currentUser);
};

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    populate: (state, action) => action.payload,
    register: (state, action) => [...state, action.payload],
  },
  extraReducers: builder => {
    builder.addCase("currentUser/addMoney", (state, action) => {
      const user = state.find(user => user.id === action.payload.id);
      user.money += action.payload.amount;
      updateLocalStorage(state, user);
    });
    builder.addCase("currentUser/changeUsername", (state, action) => {
      const user = state.find(user => user.id === action.payload.id);
      user.username = action.payload.newUsername;
      updateLocalStorage(state, user);
    });
    builder.addCase("currentUser/changeEmail", (state, action) => {
      const user = state.find(user => user.id === action.payload.id);
      user.email = action.payload.newEmail;
      updateLocalStorage(state, user);
    });
    builder.addCase("currentUser/changePassword", (state, action) => {
      const user = state.find(user => user.id === action.payload.id);
      user.password = action.payload.newPassword;
      updateLocalStorage(state, user);
    });
    builder.addCase("currentUser/addToCart", (state, action) => {
      const user = state.find(user => user.id === action.payload.id);
      const product = user.cart.find(
        product => product.id === action.payload.productId
      );
      product
        ? product.amount++
        : user.cart.push({ ...action.payload.product, amount: 1 });
      updateLocalStorage(state, user);
    });
    builder.addCase("currentUser/removeProduct", (state, action) => {
      const user = state.find(user => user.id === action.payload.userId);
      user.cart = user.cart.filter(
        product => product.id !== action.payload.productId
      );
      updateLocalStorage(state, user);
    });
  },
});

export const { populate, register } = usersSlice.actions;
export default usersSlice.reducer;
