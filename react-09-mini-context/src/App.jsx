import UserContextProvider from './context/UserContextProvider'
// {/* 1. Go to UserContext.js */}
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'


function App() {

  return (
    <>
      <UserContextProvider>
        {/*UserContext.Provider value = {{}}  This method is also ok but in our case we are importing it from a file. */}
        <h1>Context API is ONN!!!</h1>
        <Login />
        <Profile />
      </UserContextProvider>
      {/* 4. Go to Login.jsx */}
     
    </>
  )
}

export default App
