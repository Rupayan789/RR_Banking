import UserActionTypes from "./type";

const INITIAL_STATE={
    user_data:[],
    isLoading:false
}
 const UserReducer=(state=INITIAL_STATE,action)=>{
  
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
           
            return {
                ...state,
                user_data:action.payload,
                isLoading:false
            }
            break;
    
        default:
            return state;
            break;
    }
    
}
export default UserReducer;