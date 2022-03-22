import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../Redux/Cakes/CakeAction'

function NewCakeContainer(props) {
    const [num, setNum] = useState(1)
  return (  
  <>
    <div>Cake_container - {props.numOfCakes}</div><br></br>
    <input type='text' value={num} onChange ={e => setNum(e.target.value)} />
    <button onClick={() => {props.buyCake(num)}}>Buy {num} Cakes</button>
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
    buyCake: (num) =>{
      dispatch(buyCake(num))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(NewCakeContainer)