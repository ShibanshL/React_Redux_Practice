import React,{useEffect} from "react";
import { fetchUserDaataAgain } from "../Redux/NewUser/NewUserAction";
import { connect } from "react-redux";

function NewUserData(fetchUserDaataAgain) {
  return (
    <div>NewUserData</div>
  )
}

export const mapStateToProps = (state) =>{
    return{
        userData:state.newData
    }
}
export const mapDispatchToProps = (dispatchEvent) => {
    return{
        getData : () => dispatch(fetchUserDaataAgain())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserData)