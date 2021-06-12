import { createSelector } from "reselect";

export const selectUserState=(state)=>state.user;

export const selectUsers=createSelector(
    [selectUserState],
    user=>user.user_data
)
export const selectConditionally=userId=>createSelector(
    [selectUsers],
    users=>users.filter(user=>user._id!==userId)
)
export const selectUserById=(userId)=>{
    return createSelector(
    [selectUsers],
    users=>users.filter(user=>user._id==userId)
)};

export const selectIdFromUsername=(username)=>createSelector(
    [selectUsers],
    users=>{
        const selectedUser=users.filter(user=>user.username==username);
        return selectedUser[0]._id;
    }
)