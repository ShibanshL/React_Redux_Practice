import React from 'react'
import { connect } from 'react-redux'
// import { buyCake } from '../Redux/Cakes/CakeAction'
import { buyIceCream } from '../Redux/Icecream/IceCreamAction'

function IceCreamNoHook(props) {
  return (  
  <>
    <div>Ice Cream  - {props.numOfIceCream}</div><br></br>
    <button onClick={props.buyIceCream}>Click me</button>
    </>
  )
}

const mapStateToProps = state => {
  return{
    numOfIceCream:state.iceCream.numOfIceCream
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buyIceCream: () =>{
      dispatch(buyIceCream())
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(IceCreamNoHook)