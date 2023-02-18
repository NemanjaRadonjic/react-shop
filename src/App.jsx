import { useEffect } from "react";
import { useDispatch } from "react-redux";
import localStorage from "@helpers/localStorage";
import { login } from "@store/currentUserReducer";
import { populate } from "@store/usersReducer";

import { RouterProvider } from "react-router-dom";
import router from "./router";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.get("currentUser");
    user && dispatch(login(user));
    const users = localStorage.get("users");
    users && dispatch(populate(users));
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
