import React from 'react'


// We need container and PostForm here
// Get it from index.js

import { Container, PostForm } from '../components'


function AddPost() {
  return (
    <div className='py-8'>

    {/* Wrapping the PostForm inside the Container */}
       <Container>
            <PostForm />
       </Container> 
      
    </div>
  )
}

export default AddPost

// 🛑 31. Go to AllPosts.jsx