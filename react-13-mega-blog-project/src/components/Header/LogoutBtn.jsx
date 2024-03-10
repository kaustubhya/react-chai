// eslint-disable-next-line no-unused-vars
import React from "react";
// Now this logout page will need to send some info when we press on logout button, for this it will use dispatch, the logout functionality we defined and the authService we defined
import {useDispatch} from "react-redux"
import {authServiceObj} from "../../appwrite/auth_service"
import {logout} from '../../store/authSlice'

function LogoutBtn() {

    // let us make a dispatch to dispatch things
    const dispatch = useDispatch();

    // also making a logout handler now since there is a logout button
    const logoutHandler = () => {
        // inside this logoutHandler we will call the service and from that we pick logout
        authServiceObj.logout().then(() => {
          // logout() is a promise in itself, hence we use .then() with it
            dispatch(logout());
            // if logout exists here then just dispatch it using a promise via .then()
        })

    }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
        LogOut
    </button>
  )
}

export default LogoutBtn

// 16. Go to Header.jsx now
