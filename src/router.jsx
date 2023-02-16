import { createBrowserRouter } from "react-router-dom";
import Landing from "@routes/Landing";
import Login from "@routes/Login";
import Register from "@routes/Register";
import Shop from "@routes/Shop";
import Profile from "@routes/Profile";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/shop", element: <Shop /> },
  { path: "/profile", element: <Profile /> },
]);

export default router;
