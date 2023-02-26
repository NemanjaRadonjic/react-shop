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
    builder.addCase("currentUser/changeUsername", (state, action) => {
      const user = state.find(user => user.id === action.payload.id);
      user.username = action.payload.newUsername;
    });
    builder.addCase("currentUser/changeEmail", (state, action) => {
      const user = state.find(user => user.id === action.payload.id);
      user.email = action.payload.newEmail;
    });
    builder.addCase("currentUser/changePassword", (state, action) => {
      const user = state.find(user => user.id === action.payload.id);
      user.password = action.payload.newPassword;
    });
  },
});

export const { populate, register } = usersSlice.actions;
export default usersSlice.reducer;
