import { GET_DATA_FAILURE, GET_DATA_SUCCESS, GET_DATA_REQUEST } from "./NewUserType";

export function getDataRequest(){
    return{
        type:GET_DATA_REQUEST
    }
}

export function getDataFailure(){
    return{
        type:GET_DATA_FAILURE,
        payloads:error
    }
}

export function getDataSuccess(){
    return{
        type:GET_DATA_SUCCESS,
        payloads:user
    }
}

export function fetchUserDaataAgain(){
    return async (dispatch) => {
        try {
            const url ='https://jsonplaceholder.typicode.com/users'
            const response = await fetch(url)
            const data = await response.json()
            dispatch(getDataSuccess(data))
        } 
        catch (error) {
            const errorM = error.message
            dispatch(getDataFailure(errorM))
        }
    }
}