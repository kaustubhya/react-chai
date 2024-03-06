// 1. go to notes.md
import { useState, useEffect } from 'react'
import {useDispatch} from "react-redux"
import authServiceObj from "./appwrite/auth_service"
import {login, logout} from "./store/authSlice"
import {Header, Footer} from './components'

import './App.css'

function App() {
  // Accessing the environment variables
 // console.log(process.env.REACT_APP_APPWRITE_URL);
  // Now after doing this, i.e. making any changes in the environment variable file, you need to reload the window and do npm run dev again
  // but this was the step when you made any app using create react app

  // Vite:
  // console.log(import.meta.env.VITE_APPWRITE_URL);
  // We donot usually use this approach as sometimes when we run an app, the env does not load properly due to which our app crashes, for that, we do this same step above in an efficient production ready way.
  // 4. Go to config.js for this



  // 11. Coming from index.js
  // Now we will make a "loading" state, when the app runs and loads, we will ask the state if the app is connected to appwrite or not. If yes then go ahead, else do not go ahead, show a message saying "not connected to appwrite"
  // For this, use useState() and useEffect()

  const [loading, setLoading] = useState(true)
  // flow: set useState to true, this will make us go to useEffect, there we set default value to false

  // Also we need to send a dispatch (to bring current user etc.).
  // 🛑🛑 When we want to use react with redux, we use dispatch (useDispatch())

  const dispatch = useDispatch();

  // Now we import the authService service from appwrite

  // Now we use a useEffect(). When the website loads, we need to ask it if it is logged in correctly or not
  useEffect(() => {
    // Now here we ask the app if it has a user currently logged in?
    // For that, we use getCurrent user from Auth Service

    // Also import the reducer functionalities from the store/authSlice
    authServiceObj.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
        // dispatched as an object to userdata object in login
      }
      else {
        dispatch(logout())
      }
    })
    // here if there is a current user then we dispatch their details to login action, which will then send it to userData payload in action, from where it goes on to update the state

    // if there is no currentUser then we simply call the logout function, which will set state values to default
    .finally(() => setLoading(false))
    // 🛑🛑 Finally means this code bit with finally will get executed for sure, so we set the finally bit to false after all this is done
  }, [])


  // 🛑🛑 Using Conditional Rendering here (i.e. returning the code as per our needs using if else)

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>

        <Header />
        <main>
          TODO: 
          {/* <Outlet /> */}
          {/* Will handle later  */}
        </main>
        
        {/* 11. 🛑🛑 After this go to main.jsx to set up provider */}
        <Footer />       
      </div>
    </div>

  ) : null;

  // if loading is false, then return div, else return null. 
}

export default App
