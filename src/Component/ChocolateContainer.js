import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import { buyCake } from '../Redux/Cakes/CakeAction'

import { buyChocolate } from '../Redux/Chocolate/ChocolateAction'


function ChocolateContainer() {
  const numOfChocolate = useSelector(state => state.chocolate.numOfChocolate)
  const buy_Chocolate = useDispatch()
  return (
    <div>
        <h2>Number of Chocolate - {numOfChocolate}</h2>
        <button onClick={()=>{
            buy_Chocolate(buyChocolate())
        }}>Buy Cakes</button><br></br>
    </div>
  )
}

export default ChocolateContainer