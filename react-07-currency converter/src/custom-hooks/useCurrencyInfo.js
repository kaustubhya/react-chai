// These hooks mainly return js and not html + js, hence we named the file with a .js extension and not with a .jsx extension

import { useState, useEffect } from "react"

// start hooks name with "use" (naming convention)
function useCurrencyInfo(currency) {
    // many hooks take in optional arguments but here we are giving it currency argument

    // calling useState hook, see explaination below
    const [data, setData] = useState({})
    // we return an empty object here to prevent the app from crashing down


    // now we want to call an API => condition whenever the hook is loaded or used, we will call an api as a return condition

    // now which hook is used when we can invoke it whenever a component is mounted or its life cycle is triggered => useEffect

    // useEffect already has the fetch() function embedded inside it for fetching an API

    // use effect needs 2 things, 
    /* 1. callback
    2. dependencies */

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // here we copied api url from github notes
        
        // Also most APIs are in string format, so we need to convert them to JSON format 

        // we can do "chaining" after fetch (as many times as we like) by using the .then statement

        // for the first .then, we will get a callback having the response (res) argument inside of it
        // you can exclude the {} as we donot want to include a return statement here
        .then((res) => res.json())
        // here we converted API response's string format to json format

        // now holding this json value data
        // if we hold this data in a regular variable, it will never get updated in the UI, hence, we use useState hook here via .then
        .then((res) => setData(res[currency]))
        // here we could have done res.currency also, both ways are correct
        // this line means, whatever value (usd, inr, gbp) you enter in currency, api will show you the compared value will all other currencies

        // we could test it here, write:
        console.log(data)
    }, [currency])
    // call the API whenever there is a change in the currency, hence currency is a dependency
    return data;
}

// custom hooks can also use built-in hooks inside them by importing them

export default useCurrencyInfo;
// Custom hooks done, this will call the custom hook which will give us the data value when we return it