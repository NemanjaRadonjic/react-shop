import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: null,
  reducers: {
    login: (state, action) => (state = action.payload),
    logout: state => (state = null),
    addMoney: (state, action) => {
      state.money += action.payload.amount;
    },
  },
});

export const { login, logout, addMoney } = currentUserSlice.actions;
export default currentUserSlice.reducer;
