import { createStore, combineReducers } from "redux";
import { devToolsEnhancerDevelopmentOnly } from "@redux-devtools/extension";
import userReducer from "./reducers/userReducer";
import utilsReducers from "./reducers/utilsReducer";

const rootReducer = combineReducers({
  user: userReducer,
  utils: utilsReducers,
});

const store = createStore(rootReducer, devToolsEnhancerDevelopmentOnly());

export default store;
