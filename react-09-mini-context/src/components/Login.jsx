// To send data further ahead, use useContext hook here and useState to change state of Login Form
// Here we will know how to pass/send Data from a Login form

import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
// Use useContext to fetch values inside UserContext

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext) 
    // we took this setUser from UserContextProvider
    // so to take any data from the value, we take it from the user, hence here we use normal 'user' in prop (see userContextProvider)

    // But to add something (some value) to the state, we use setUser prop (see userContextProvider where we passed these 2 props)

    const handleSubmit = (e) => {
        e.preventDefault()
        // now we prevent the default behaviour of the event
        // We did this because, when we submit with default, the value goes somewhere else via the POST method or the URLs 

        setUser({userName, password})
        // pass the userName and password via this setUser

        // Now we know how to pass/send Data

    }

    return (
        <div>
            <h2>Login</h2>
            <input
            type="text"
            placeholder="Username"
            value={userName}
            // take value from userName
            // Now if there is a change in state 
            onChange={(e) => setUserName(e.target.value)}
            // here on every state change, i.e. on every event change, we will fire a callback, which will give us e.target.value
            />

            {" "}
            {/* Introduce some space between Login and Password input boxes */}

            
            <input 
            type="password" 
            placeholder="Password"
            // Similar to userName 
            value={password}
            // take value from password
            // Now if there is a change in state 
            onChange={(e) => setPassword(e.target.value)}
            /> 
            <button onClick={handleSubmit}>Submit</button>


        </div>
    )
}

export default Login