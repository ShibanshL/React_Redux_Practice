import { Buy_Cake } from "./CakeType"


const initialState = {
    numOfCakes:20
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case Buy_Cake:
            return{
                ...state,
                numOfCakes:state.numOfCakes-action.payload
            }
        default: return state
    }
}

export default reducer