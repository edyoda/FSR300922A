import { UTILS_ACTION_TYPES } from "../actions/actionTypes";

const initalState = {
  toastInfo: null,
  likesUsers: [],
};

const utilsReducers = (state = initalState, action) => {
  switch (action.type) {
    case UTILS_ACTION_TYPES.SHOW_TOAST:
      return { ...state, toastInfo: action.payload };
    case UTILS_ACTION_TYPES.LIKE_USER: {
      const newList = [...state.likesUsers];
      newList.push(action.payload);
      return { ...state, likesUsers: newList };
    }
    case UTILS_ACTION_TYPES.DISLIKE_USER: {
      const newList = state.likesUsers.filter((i) => i.id !== action.payload);
      return { ...state, likesUsers: newList };
    }
    default:
      return state;
  }
};

export default utilsReducers;
