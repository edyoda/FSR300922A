import { AXIOS } from "..";
import { endPoints } from "../constants";

export const signupUser = async (data) => {
  try {
    const res = await AXIOS.post(endPoints.signup, data);
    return res.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};
