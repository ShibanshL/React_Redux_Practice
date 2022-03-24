import { GET_DATA_FAILURE, GET_DATA_SUCCESS, GET_DATA_REQUEST } from "./NewUserType";
import axios from "axios";
export function getDataRequest(){
    return{
        type:GET_DATA_REQUEST
    }
}

export function getDataFailure(error){
    return{
        type:GET_DATA_FAILURE,
        payloads:error
    }
}

export function getDataSuccess(data){
    return{
        type:GET_DATA_SUCCESS,
        payloads:data
    }
}

export function fetchUserDataAgain(){
    return async (dispatch) => {
        dispatch(getDataRequest)
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

// export function fetchUserDataAgain(){
//     return (dispatch) => {
//         dispatch(getDataRequest)
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response => { 
//             const users = response.data
//             console.log(users)
//             dispatch(getDataSuccess(users))
//          })
//         .catch(error => { 
//             const errorMsg = error.message
//             dispatch(getDataFailure(errorMsg))
//         })
//     }
// }