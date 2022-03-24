import React,{useEffect} from "react";
import { fetchUserDaataAgain } from "../Redux/NewUser/NewUserAction";
import { connect } from "react-redux";

function NewUserData(userData,fetchUserDaataAgain) {
    useEffect(()=>{
        fetchUserDaataAgain()
    },[])
     return userData.loading?(
    <div>
        userData is Loading
    </div>
  ):
  userData.error ? (
      <h2>{userData.error}</h2>
  ):(
      <div>
      <h2>User List</h2>
      <div>
          {userData && userData.user && userData.user.map(user => <p>{user.name}</p>)}
          {/* {userData.map(e => <>{e.name}</>)} */}
      </div>
      </div>
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