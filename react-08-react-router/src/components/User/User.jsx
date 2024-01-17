import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='bg-gray-700 text-white font-bold text-center p-3 text-3xl'>
        User: {userId}
        {/* Put the value from main.jsx which you noted down (after the colon (:)) */}
        {/* Now it is still not useable, to make it useable we import useParams and make a custom hook of this variable name using useParams */}

        {/* Now run the app, in the http search bar do "/user/(type anything here)" */}
    </div>
  )
}

export default User
