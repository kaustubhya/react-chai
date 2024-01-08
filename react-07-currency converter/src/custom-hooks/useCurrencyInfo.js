// These hooks mainly return js and not html + js, hence we named the file with a .js extension and not with a .jsx extension

import { useState, useEffect } from "react"

// start hooks name with "use" (naming convention)
function useCurrencyInfo(currency) {
    // many hooks take in optional arguments but here we are giving it currency argument

    // now we want to call an API => condition whenever the hook is loaded or used, we will call an api as a return condition

    // now which hook is used when we can invoke it whenever a component is mounted or its life cycle is triggered => useEffect

    // useEffect already has the fetch() function embedded inside it for fetching an API

    // use effect needs 2 things, 
    /* 1. callback
    2. dependencies */

    useEffect(() => {
        fetch()
    }, [])
}

// custom hooks can also use built-in hooks inside them by importing them