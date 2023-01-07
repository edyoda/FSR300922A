import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesConfig } from "./config";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routesConfig.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
