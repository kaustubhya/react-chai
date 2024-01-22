// This file here is .jsx because we need the fragments access from the top level to the bottom level, just like we did in .jsx 

// We want something like this, hence we use .jsx 

/* <UserContext>
    <Login />
    <Card>
        <Data />
    </Card>
</UserContext>
*/

import React from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({children}) => {
    // this UserContextProvider is a function, which we will export it

    // Now, just as we used Outlet in Layout in last video where Header and Footer were same, only the Outlet was changing, similarly, here we use "children" (i.e. the props that are incoming to us)
    // Use children as it is
    // "Children" is a generic (typical / traditional) name. This is used to pass on the props and components ahead, whatever is incoming to it. I.E. jo bhi tumhare paas aa raha hai, usko aage pass kar do
    // Another generic names are <div>, <span> etc.
    // Return and wrap the children to pass them ahead


    // for data
    const [user, setUser] = React.useState(null)
    // you can also do useState in the normal way like we did before
    return (
        <UserContext.Provider value={{user, setUser}}>
        {/* wrapping (UserContext) + Property of UserContext (.Provider) + giving some data value (prop) */}
        {/* Here we passed an object inside value, we can pass as many parameters inside this object as we want */}
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

// 3. From here go to App.jsx.