import {combineReducers} from 'redux'


import reducer from './Cakes/CakeReducer'
import reducer_1 from './Icecream/IceCreamReducer'
import reducer_2 from './Chocolate/ChocolateReducer'
import nReducers from './User/UserReducer'

const rootReducer = combineReducers({
    cake:reducer,
    iceCream:reducer_1,
    chocolate:reducer_2,
    user:nReducers
})

export default rootReducer