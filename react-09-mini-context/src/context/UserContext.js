// We use .js here as this file will have pure js code

import React from "react";

// for context creation, use the following method
const UserContext = React.createContext()

// Store it in a variable to export it and finally, export it

export default UserContext;

// Context is somewhat of a provider and gives us a variable provider functionality (i.e. it provides us with a variable (as we see from this export statement))

// We will use UserContext here as a wrapper which will make it a provider

// See eg. of how to use it as a wrapper 

/* <UserContext>
    <Login />
    <Card>
        <Data />
    </Card>
</UserContext>
*/

// Here we have wrapped different components under UnderContext and this has now become a provider.

/* By doing this, all components inside this provider will get access to the global user context file (as seen in Prop Drilling Example) */

// So here we have made a UserComtext, now we have to make a UserContextProvider 

// 2. For that go to UserContextProvider.jsx