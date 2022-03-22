import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./UserType";
import axios from 'axios'

export const fetchRequest = () => {
    return {
        type:FETCH_USER_REQUEST
    }
}

export const fetchSuccess = user => {
    return {
        type:FETCH_USER_SUCCESS,
        payloads:user
    }
}


export const fetchError = error => {
    return {
        type:FETCH_USER_FAILURE,
        payloads:error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => { 
            const users = response.data
            console.log(users)
            dispatch(fetchSuccess(users))
         })
        .catch(error => { 
            const errorMsg = error.message
            dispatch(fetchError(errorMsg))
        })
    }
}