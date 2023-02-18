import { createSlice } from "@reduxjs/toolkit";

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: null,
  reducers: {
    login: (state, action) => (state = action.payload),
  },
});

export const { login } = currentUserSlice.actions;
export default currentUserSlice.reducer;
