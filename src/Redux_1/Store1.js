import {createStore} from 'redux'
import iceCream_reducer from './IceCream/IceCreamReducer'


const store1 = createStore(iceCream_reducer)

export default store1