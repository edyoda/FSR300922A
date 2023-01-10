import { removeUserInfo } from "../../utils/localStorage"
import { USER_ACTION_TYPES } from "./actionTypes"


export const setUserInfo =(userDetails)=>{
    return{
        type:USER_ACTION_TYPES.ADD_USER_INFO,
        payload:userDetails,
    }
}


export const userSignOut =()=>{
    removeUserInfo()
    return{
        type:USER_ACTION_TYPES.USER_SIGN_OUT,
    }
}
