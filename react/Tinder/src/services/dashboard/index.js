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
