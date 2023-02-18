import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    populate: (state, action) => action.payload,
    register: (state, action) => [...state, action.payload],
  },
});

export const { populate, register } = usersSlice.actions;
export default usersSlice.reducer;
