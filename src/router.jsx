import { createBrowserRouter } from "react-router-dom";

import Landing from "@routes/Landing";
import Login from "@routes/Login";
import Register from "@routes/Register";
import Shop from "@routes/Shop";
import Profile from "@routes/Profile";
import NotFound from "@routes/NotFound";

import ProtectedRoute from "@routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        path: "login",
        element: (
          <ProtectedRoute>
            <Login />
          </ProtectedRoute>
        ),
      },
      {
        path: "register",
        element: (
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        ),
      },
    ],
  },
  { path: "/shop", element: <Shop /> },
  {
    path: "/profile",
    element: (
      <ProtectedRoute privilege="user">
        <Profile />
      </ProtectedRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
