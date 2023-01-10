import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./config";

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;

{
  /*
    <BrowserRouter>
      <Routes>
        {router.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>  */
}
