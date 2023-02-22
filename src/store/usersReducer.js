import { createSlice } from "@reduxjs/toolkit";

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
    });
  },
});

export const { populate, register } = usersSlice.actions;
export default usersSlice.reducer;
