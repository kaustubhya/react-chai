// Here we will use useContext a bit differently, as compared to the last time, that we did in mini-context project

// This one is used more in Production

import React, {useContext, createContext} from "react";

export const ThemeContext = createContext({
    // Here we will pass some default object, and in this object we will pass some variables.
    // In UserContext.js, we put those values as null

    themeMode: "light",
    // default variable

    // Here we are using 2 different methods instead of using toggle
    darkTheme: () => {},
    lightTheme: () => {},

    // Whenever someone calls this context, we will get everything here

})

// Please see the other method in mini-context for comparison (UserContext.js)


// Now instead of making userContextProvider.js in another file and using UserContext.Provider, we do that here only

export const ThemeProvider = ThemeContext.Provider

// Also we make our custom hooks here only
export default function useTheme() {
    // This hook returns the useContext hook inside of which is the ThemeContext method which gives us access to all the default variables and methods inside of it
    return useContext(ThemeContext)
}


// 🛑🛑🛑🛑🛑 Wrapping means putting inside some tags, 

// 2. Go to App.jsx

/*
There we will wrap everything inside return statement under ThemeProvider, something like this:

<ThemeProvider> 
    // Contents
</ThemeProvide>    
*/