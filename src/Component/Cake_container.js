import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../Redux/Cakes/CakeAction'

function Cake_container(props) {
  return (  
  <>
    <div>Cake_container - {props.numOfCakes}</div><br></br>
    <button onClick={props.buyCake}>Click me</button>
    </>
  )
}

const mapStateToProps = state => {
  return{
    numOfCakes:state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return{
    buyCake: () =>{
      dispatch(buyCake())
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Cake_container)