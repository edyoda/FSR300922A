import { AXIOS } from "..";
import { endPoints } from "../constants";

export const getUserList = async () => {
  try {
    const res = await AXIOS.get(endPoints.usersList);
    return res.data;
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};

export const getUserDetails = async (userId) => {
  if (!userId) return Promise.reject("Please provide user id");

  try {
    const res = await AXIOS.get(`${endPoints.userDetails}/${userId}`, {
      params: {
        delay: 1,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};
