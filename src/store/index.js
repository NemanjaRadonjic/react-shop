import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "@store/usersReducer";
import currentUserReducer from "@store/currentUserReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    currentUser: currentUserReducer,
  },
});

export default store;
