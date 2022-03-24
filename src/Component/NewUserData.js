import React,{useEffect} from "react";
import { fetchUserDataAgain } from "../Redux/NewUser/NewUserAction";
import { connect } from "react-redux";

function NewUserData({userData,fetchUserDataAgain}) {
    useEffect(()=>{
        fetchUserDataAgain()
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
export const mapDispatchToProps = (dispatch) => {
    return{
        getData : () => dispatch(fetchUserDataAgain())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserData)