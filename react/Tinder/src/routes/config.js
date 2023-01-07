import Home from "../pages/home";
import Signin from "../pages/signin";
import Signup from "../pages/signup";

export const routesConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
];
