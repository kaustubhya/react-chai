// This component is for making cards, each card is a blog. When you click on a card, you will be redirected to the full blog article.

import React from 'react'

// getting cards' info from service which is in configuration.js file of appwrite folder
import service from '../appwrite/configuration.js'
// We take it from here as we donot have it inside the state. If it were available, then we'd have used redux

// we need a link too for redirection
import {Link} from 'react-router-dom'

const PostCards = (
    // passing some props, we will write some querries which will give us its access from appwrite
{
    $id, // appwrite syntax
    title,
    featuredImage
    // add anything else too if you like on the card
}
) => {
  return (
    <Link to={`/post/${$id}`}>
    // Made entire postcard clickable
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {/* Here we took an image in this div */}
                <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
                {/* We cannot use 'strings' in src here, hence used js method  */}
                {/* Now to get image preview, in appwrite/configuration.js there is a getFilePreview method. From there it uses a fileId and gives us back a url to preview the image. Here we passed the id of featured image file */}                
            </div>
            <h2
            className='text-xl font-bold'>{title}</h2>
            {/* font-size defines how large or big the text is whereas font-weight defines how bolder or lighter the text is */}
        </div>
    </Link>
  )
}

export default PostCards

// 23. 🛑 Go to Login.jsx now
