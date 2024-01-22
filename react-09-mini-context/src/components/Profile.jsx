// Here we will know how to accept/receive Data from a Profile form

import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
    // here we want only data and not the method, hence we use 'user' and not 'setUser' here
    
    // Let us use a conditional return here instead of a normal return

    if(!user) return <div>Please Login</div>
    // if there is no user here


    // else if there is a user already
    return <div>Welcome {user.userName}</div>
}

export default Profile
