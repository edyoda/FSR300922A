import Home from "../pages/home";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import { redirect, createBrowserRouter } from "react-router-dom";
import { getUserInfo } from "../utils/localStorage";
import Dashboard from "../pages/dashboard";
import UserPage from "../pages/user";
import Likes from "../pages/likes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    loader: () => {
      const userInfo = getUserInfo();

      if (userInfo) {
        return redirect("/");
      }
      return null;
    },
    path: "/signup",
    element: <Signup />,
  },
  {
    loader: () => {
      const userInfo = getUserInfo();
      if (userInfo) {
        return redirect("/dashboad");
      }
      return null;
    },
    path: "/signin",
    element: <Signin />,
  },
  {
    loader: () => {
      const userInfo = getUserInfo();
      if (!userInfo) {
        return redirect("/signup");
      }
      return null
    },
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    loader: () => {
      const userInfo = getUserInfo();
      if (!userInfo) {
        return redirect("/signup");
      }
      return null
    },
    path: "/user",
    element: <UserPage />,
  },
  {
    loader: () => {
      const userInfo = getUserInfo();
      if (!userInfo) {
        return redirect("/signup");
      }
      return null
    },
    path: "/likes",
    element: <Likes />,
  },
]);
