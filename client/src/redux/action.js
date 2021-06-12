import UserActionTypes from "./type";

export const UpdateUsers=(data)=>({
    type:UserActionTypes.FETCH_USERS,
    payload:data
})