import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "@store/reducers/usersReducer";
import currentUserReducer from "@store/reducers/currentUserReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    currentUser: currentUserReducer,
  },
});

export default store;
