import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux/User/UserAction'

function UserContainer({userData,fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    },[])
    // return console.log("Users"+userData.user)
    // return(
    //     <>
    //     Hi
    //     {/* {userData.user.map(e => <>{e.name}</>)} */}
    //     </>
    // )
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

const mapStateToProps = state => {
    return{
        userData:state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        fetchUsers : () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)