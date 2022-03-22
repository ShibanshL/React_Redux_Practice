import { Buy_IceCream, Buy_IceCream_Type } from "./IceCreamType";

const iceCream_state = {
    numOfIceCream:20,
    typeOfIceCream:5
}

const iceCream_reducer = (state = iceCream_state, action) => {
    switch(action.type){
        case Buy_IceCream:
            return{
                ...state,
                numOfIceCream:state.numOfIceCream-1
            }
        
        case Buy_IceCream_Type:
            return{
                ...state,
                typeOfIceCream:state.typeOfIceCream*1
            }
        
        default:return state
    }
}

export default iceCream_reducer