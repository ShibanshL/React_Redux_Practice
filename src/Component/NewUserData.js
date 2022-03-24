import React,{useEffect} from "react";
import { fetchUserDataAgain } from "../Redux/NewUser/NewUserAction";
import { connect } from "react-redux";

function NewUserData({userData,fetchUserDataAgain}) {
    useEffect(()=>{
        fetchUserDataAgain()
        console.log('00pls',userData)
    },[])
//      return userData.loading?(
//     <div>
//         userData is Loading
//     </div>
//   ):
//   userData.error ? (
//       <h2>{userData.error}</h2>
//   ):(
//       <div>
//       <h2>User List</h2>
//       <div>
//           {userData && userData.user && userData.user.map(user => <p>{user.name}</p>)}
//           {/* {userData.map(e => <>{e.name}</>)} */}
//       </div>
//       </div>
//   )

    return( 
        <>
        {userData[1].name}
        </>
     )
}

export const mapStateToProps = state =>{
    // console.log(userData)

    return{
        userData:state.newData.data
    }

}
export const mapDispatchToProps = (dispatch) => {
    return{
        fetchUserDataAgain: () => dispatch(fetchUserDataAgain())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserData)