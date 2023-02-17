import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    register: (state, action) => [...state, action.payload],
  },
});

export const { register } = usersSlice.actions;
export default usersSlice.reducer;
