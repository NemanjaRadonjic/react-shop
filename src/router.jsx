import { createBrowserRouter } from "react-router-dom";

import Auth from "@routes/Auth";
import Login from "@routes/Login";
import Register from "@routes/Register";
import Main from "@routes/Main";
import Search from "@routes/Search";
import Cart from "@routes/Cart";
import Profile from "@routes/Profile";
import ChangeUsername from "@routes/Profile/ChangeUsername";
import ChangeEmail from "@routes/Profile/ChangeEmail";
import ChangePassword from "@routes/Profile/ChangePassword";
import NotFound from "@routes/NotFound";

import { productsLoader } from "@routes/Shop";

import ProtectedRoute from "@routes/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: productsLoader,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute privilege="user">
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile/password",
        element: <ChangePassword />,
      },
      {
        path: "profile/username",
        element: <ChangeUsername />,
      },
      {
        path: "profile/email",
        element: <ChangeEmail />,
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute privilege="user">
            <Cart />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
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
  { path: "*", element: <NotFound /> },
]);

export default router;
