import { GET_DATA_FAILURE, GET_DATA_SUCCESS, GET_DATA_REQUEST } from "./NewUserType";


const initialData = {
    loading:false,
    data:[],
    error:''
}


export function newReducer (state = initialData, action){
    if(action.type==GET_DATA_REQUEST){
        return{
            ...state,
            loading:true
        }
    }
    else if(action.type == GET_DATA_SUCCESS){
        return{
            ...state,
            data:[action.payload],
            error:''
        }
    }
    else if(action.type == GET_DATA_FAILURE){
        return{
            ...state,
            data:[],
            error:action.payload
        }
    }
    else{
        return state
    }
}