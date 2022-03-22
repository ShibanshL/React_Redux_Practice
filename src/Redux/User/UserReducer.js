import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./UserType";

const initialUsers = {
    loading:false,
    users:[],
    error:''
}

const nReducers = (state = initialUsers, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_FAILURE:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        case FETCH_USER_SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }

           default: return state;
    }


}

export default nReducers