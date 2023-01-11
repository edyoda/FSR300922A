import { createStore,combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import userReducer from "./reducers/userReducer";
import utilsReducers from "./reducers/utilsReducer";

const rootReducer = combineReducers({
    user:userReducer,
    utils:utilsReducers
})

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
