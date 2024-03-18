// This is a mechanism on how to protect our pages and routes.

// This is a protective container

import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
// This useSelector is used to ask some things from the store
import { useNavigate } from 'react-router-dom'

export default Protected = ({children, authentication = true}) => {
    // 🛑🛑 A file name and a function name in components can be different.
    // If user has not sent anything via authentication, then authentication is true

    const navigate = useNavigate()

    const [loader, setLoader] = useState(true)

    // Before the user enters any info, we ask the store if the user is logged in or not
    const authStatus = useSelector(state => state.auth.status)

    // Now based on this information, the useEffect will decide whether to send us to login page or signup page
    useEffect( () => {
        // if(true && false !== true) i.e. if(true && true) then navigate to login
        if(authentication && authStatus !== authentication) {
            navigate("/login")

        }

        // if(false && false !== true) i.e. if(false && true) then navigate to /  
        else if(!authentication && authStatus !== authentication) {
            navigate("/")
        }

        setLoader(false)
    }, [authStatus, navigate, authentication])

    // If there are any changes in, [authStatus, navigate, authentication]; then we will run useEffect again 

  return loader ? <h1>Loading...</h1> : <>{children}</>
//   conditional rendering
}

