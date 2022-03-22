import { BUY_CHOCOLATE } from "./ChocolateType";

const initialState_2 = {
    numOfChocolate:25
}

const reducer_2 = (state = initialState_2, action) => {
    switch(action.type){
        case BUY_CHOCOLATE:
            return{
                ...state,
                numOfChocolate:state.numOfChocolate-1
            }

        default:
            return state
    }

}

export default reducer_2
