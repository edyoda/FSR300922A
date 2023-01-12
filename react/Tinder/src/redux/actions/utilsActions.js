import { UTILS_ACTION_TYPES } from "./actionTypes";

export const showToast = (toastInfo) => {
  return {
    type: UTILS_ACTION_TYPES.SHOW_TOAST,
    payload: toastInfo,
  };
};


export const likeUser = (userDetails) => {
    return {
      type: UTILS_ACTION_TYPES.LIKE_USER,
      payload: userDetails,
    };
  };
  
  export const dislikeUser = (userId) => {
    return {
      type: UTILS_ACTION_TYPES.DISLIKE_USER,
      payload: userId,
    };
  };
  
