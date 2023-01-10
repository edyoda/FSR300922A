import React from "react";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import "./styles.css";
import store from "./redux";

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};
export default App;
