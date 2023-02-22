import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: null,
  reducers: {
    login: (state, action) => (state = action.payload),
    logout: state => (state = null),
  },
});

export const { login, logout } = currentUserSlice.actions;
export default currentUserSlice.reducer;
