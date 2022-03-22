import { BUY_ICECREAM } from "./IceCreamTypes"

const initialState_1 = {
    numOfIceCream:30
}

const reducer_1 = (state = initialState_1, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOfIceCream:state.numOfIceCream-1
            }
        default: return state
    }
}

export default reducer_1