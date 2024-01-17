import React, {useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    

    // To optimize the code we have used Loaders from react-router-dom instead of the method given below (go to the end of this file to see it)

    // ****************  Loader Portion (taking care of data.followers) ******************
    const data = useLoaderData()
    // ********************  END  ********************

    // const [data, setData] = useState([])

    // useEffect(() => {

    //     // use fetch to call github api
    //     fetch('https://api.github.com/users/kaustubhya')
    //     .then(response => response.json())
    //     // converting api data (string by default) to json
    //     .then(data => {
    //         console.log(data)
    //         // when we get the data, we do console.log it

    //         // but to make it show in UI, we need to change its state. Hence we use useState Hook
    //         setData(data)
    //     })

    // }, [])



  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        <div className='flex items-center'>  
                    
            {/* Let us include an image here too */}
            <div className='flex-shrink-0'>
                <img src={data.avatar_url} alt="Profile Picture" width={300} className='mr-4' />

            </div>

            <div className='flex-grow items-center justify-center'>
                <div className='text-center'>
                {/* Here we want in this component is to include some followers and some basic stuff */}
                <p>Github followers: {""} 
                {/* Go to main.jsx to add routing */}

                {/* Now we want to bring in our Github followers to our website - We will call an API here */}

                {/* Now the followers should display via API call whenever the component is loaded, for that we use useEffect hook */}

                {data.followers}
                {/* To extract values from api, we use the key 'followers' from the data of the api */}

                {/* Loader method - Here when using Loaders, to take care of this data.followers data, we use a hook called "useLoaderData" and make a function of it (name it data for convenience (you can give any other name too but make sure to update it here also then)*/}
                </p>
                </div>
        
            </div>
        </div>

            
     
    </div>
  )
}

export default Github


// Normally we don't write code after export (not that is is wrong) but in the following case, it seems okay to do so as it will make importing easier

// We notices that when we navigated to the Github link, the data loaded in fragments after some milliseconds, this happened because when we clicked on the Github link, then the data started to load which caused some delay

// To optimize this, we use loaders and a "useLoaderData" hook from react-router-dom, this will start fetching API data when we just hover on the link, before even clicking it and store it in a cache

// This saves us some time and optimizes the code

export const githubInfoLoader = async()  => {
    const response = await fetch('https://api.github.com/users/kaustubhya')

    return response.json()
//  **    faced an issue here, forgot to put () due to which api data was not rendered

    // here we use async function (async = asynchronous means this function will have a promise (API fetch call here) inside it)
    // We use await keyword to wait or halt the code execution till the API here is fetched (i.e. promise is completed) and then move forward
    // Finally we convert the string format of data to json and return it

    // Now when you run it, the API data is fetched, loaded, rendered and displayed instantaneously
 
}