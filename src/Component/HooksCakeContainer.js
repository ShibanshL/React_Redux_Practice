import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from '../Redux/Cakes/CakeAction'


function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const buy_Cake = useDispatch()
  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button onClick={()=>{
            buy_Cake(buyCake())
        }}>Buy Cakes</button><br></br>
    </div>
  )
}

export default HooksCakeContainer