import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../Redux/User/UserAction'

function UserContainer({userData,fetchUsers}) {
    useEffect(() => {
        fetchUsers()
        console.log('usedata', userData)
    },[])
  return userData.loading?(
    <div>
        userData is Loading
    </div>
  ):
  userData.error ? (
      <h2>{userData.error}</h2>
  ):(
      <>
      <h2>User List</h2>
      <div>
          {userData && userData.user && userData.user.map(user => <p>{user.name}</p>)}
          {/* {userData.map(e => <>{e.name}</>)} */}
      </div>
      </>
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