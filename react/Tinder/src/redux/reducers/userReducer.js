import { getUserInfo } from "../../utils/localStorage";
import { USER_ACTION_TYPES } from "../actions/actionTypes";

const initalState = {
  userInfo: getUserInfo() || null,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.ADD_USER_INFO:
      return { ...state, userInfo: action.payload };
    case USER_ACTION_TYPES.USER_SIGN_OUT:
      return { ...state, userInfo: null };
    default:
      return state;
  }
};

export default userReducer;
